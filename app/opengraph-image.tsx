import { ImageResponse } from "next/og";
import sharp from "sharp";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { SITE, RATING } from "@/config/site";

/* Imagem de compartilhamento (WhatsApp, Facebook, X) gerada no build — 1200x630. */
export const alt = `${SITE.name} — Barbearia em ${SITE.city} - BA`;
export const size = { width: 1200, height: 630 };
// JPEG: o PNG com foto passava de 450 KB e o WhatsApp corta prévia de imagem pesada
export const contentType = "image/jpeg";

export default async function OgImage() {
  const [logo, foto] = await Promise.all([
    readFile(path.join(process.cwd(), "public/logo1.png")),
    readFile(path.join(process.cwd(), "public/thaylle3.jpeg")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const fotoSrc = `data:image/jpeg;base64,${foto.toString("base64")}`;

  const png = new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#070707", color: "#f5f1eb" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "60%", padding: "64px 72px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={150} height={118} alt="" style={{ marginBottom: 36 }} />
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, textTransform: "uppercase", color: "#b8853a", fontWeight: 700 }}>
            {`Barbearia em ${SITE.city} · BA`}
          </div>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 900, lineHeight: 1, marginTop: 18 }}>corte.</div>
          <div style={{ display: "flex", fontSize: 60, fontStyle: "italic", color: "#d4aa7a", marginTop: 6 }}>Identidade.</div>
          <div style={{ display: "flex", fontSize: 24, color: "rgba(245,241,235,0.7)", marginTop: 34 }}>
            {`Nota ${RATING} no Google · Sem agendamento`}
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#d4aa7a", marginTop: 8 }}>{`WhatsApp ${SITE.phoneDisplay}`}</div>
        </div>
        <div style={{ display: "flex", position: "relative", width: "40%", height: "100%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={fotoSrc} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              backgroundImage: "linear-gradient(90deg, #070707 0%, rgba(7,7,7,0.25) 40%, rgba(7,7,7,0) 100%)",
            }}
          />
        </div>
      </div>
    ),
    size
  );
  const jpeg = await sharp(Buffer.from(await png.arrayBuffer())).jpeg({ quality: 80, mozjpeg: true }).toBuffer();
  return new Response(new Uint8Array(jpeg), { headers: { "Content-Type": contentType } });
}
