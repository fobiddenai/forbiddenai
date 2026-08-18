import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
        }}
      >
        <div
          style={{
            width: 118,
            height: 118,
            border: "14px solid #fff",
            borderRadius: 999,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 96,
            height: 14,
            background: "#F5222D",
            transform: "rotate(-45deg)",
            borderRadius: 8,
          }}
        />
      </div>
    ),
    size,
  );
}
