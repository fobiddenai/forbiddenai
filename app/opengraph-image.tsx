import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.lede}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000",
          color: "#fff",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          {site.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <div style={{ display: "flex", fontSize: 92, fontWeight: 700, letterSpacing: -4 }}>
              Forbidden
            </div>
            <div
              style={{
                width: 72,
                height: 72,
                border: "8px solid #fff",
                borderRadius: 999,
                display: "flex",
                position: "relative",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 438,
                top: 268,
                width: 64,
                height: 10,
                background: "#F5222D",
                transform: "rotate(-45deg)",
                borderRadius: 8,
              }}
            />
            <div
              style={{
                display: "flex",
                fontSize: 92,
                fontWeight: 700,
                letterSpacing: -4,
                backgroundImage: "linear-gradient(90deg, #146BFF, #8A20FF)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              AI
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 820,
              lineHeight: 1.35,
            }}
          >
            {site.lede}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
