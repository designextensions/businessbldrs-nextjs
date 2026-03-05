import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.url ? new URL(req.url) : { searchParams: new URLSearchParams() };
  const title = searchParams.get("title") || "Business Builders";
  const description = searchParams.get("description") || "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1c1917",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "400px",
            height: "630px",
            background: "linear-gradient(135deg, #facc15 0%, #eab308 100%)",
            clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "1200px",
            height: "6px",
            backgroundColor: "#facc15",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "60px 70px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                backgroundColor: "#facc15",
                borderRadius: "4px",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#1c1917" />
              </svg>
            </div>
            <span
              style={{
                fontSize: "22px",
                fontWeight: 900,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "3px",
              }}
            >
              BUSINESS BUILDERS
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: "780px" }}>
            <h1
              style={{
                fontSize: title.length > 40 ? "42px" : "52px",
                fontWeight: 900,
                color: "#ffffff",
                textTransform: "uppercase",
                lineHeight: 1.1,
                margin: "0 0 20px 0",
              }}
            >
              {title}
            </h1>
            {description && (
              <p
                style={{
                  fontSize: "20px",
                  color: "#a8a29e",
                  lineHeight: 1.5,
                  margin: 0,
                  maxWidth: "680px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                }}
              >
                {description.length > 150 ? description.slice(0, 147) + "..." : description}
              </p>
            )}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontSize: "16px",
                color: "#78716c",
                letterSpacing: "1px",
              }}
            >
              businessbldrs.com
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#facc15",
                padding: "8px 20px",
                borderRadius: "2px",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 800,
                  color: "#1c1917",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                Marketing Agency
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
