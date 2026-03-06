import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiGit,
  SiPostgresql,
} from "react-icons/si";

const SKILLS = [
  { Icon: SiReact, color: "#00BFDB", size: 36 },
  { Icon: SiNextdotjs, color: "#111111", size: 36 },
  { Icon: SiTypescript, color: "#3178C6", size: 36 },
  { Icon: SiJavascript, color: "#c49a00", size: 36 },
  { Icon: SiNodedotjs, color: "#2e7d32", size: 36 },
  { Icon: SiGit, color: "#F05032", size: 36 },
  { Icon: SiPostgresql, color: "#336791", size: 36 },
];

export default function LinkedInCover() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap');
        body { margin: 0; padding: 0; background: #f5f0e8; }
      `}</style>
      <div
        style={{
          width: "1584px",
          height: "396px",
          background: "#f5f0e8",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.07,
            backgroundImage: `
              linear-gradient(#0c0c0c 1px, transparent 1px),
              linear-gradient(90deg, #0c0c0c 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Blob 1 — top right orange */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "60px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,94,26,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Blob 2 — center yellow */}
        <div
          style={{
            position: "absolute",
            top: "30px",
            left: "350px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,214,10,0.12) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        {/* Skills icons — bottom right, two rows */}
        <div
          style={{
            position: "absolute",
            bottom: "70px",
            right: "80px",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
            {SKILLS.map(({ Icon, color, size }, i) => (
              <Icon key={i} size={size} color={color} />
            ))}
          </div>
        </div>

        {/* Name section — top right */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "80px",
            zIndex: 20,
            textAlign: "right",
          }}
        >
          <h1
            style={{
              fontSize: "96px",
              fontWeight: 800,
              lineHeight: 0.88,
              letterSpacing: "-2px",
              margin: "0 0 14px 0",
              display: "flex",
              gap: "28px",
              justifyContent: "flex-end",
            }}
          >
            <span style={{ color: "#0c0c0c" }}>DHINESH</span>
            <span style={{ color: "#ff5e1a" }}>KS</span>
          </h1>

          <div
            style={{
              width: "64px",
              height: "4px",
              background: "#ff5e1a",
              borderRadius: "2px",
              marginLeft: "auto",
              marginBottom: "14px",
            }}
          />

          <p
            style={{
              color: "#0c0c0c",
              fontSize: "24px",
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              margin: "0 0 10px 0",
            }}
          >
            Senior Frontend Engineer
          </p>

          <p
            style={{
              color: "#0c0c0c",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: 1.6,
              maxWidth: "800px",
              margin: 0,
            }}
          >
            6+ years building scalable web apps, UI libraries &amp; design
            systems, micro-frontends, <br />
            monorepos, real-time systems, with a focus on performance &amp;
            security.
          </p>
        </div>
      </div>
    </>
  );
}
