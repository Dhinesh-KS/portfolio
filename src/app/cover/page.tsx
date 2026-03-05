export default function LinkedInCover() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap');
        body { margin: 0; padding: 0; background: #0c0c0c; }
      `}</style>
    <div
      style={{
        width: "1584px",
        height: "396px",
        background: "#0c0c0c",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: `
            linear-gradient(#f5f0e8 1px, transparent 1px),
            linear-gradient(90deg, #f5f0e8 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blob 1 — right orange */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "80px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,94,26,0.28) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Blob 2 — bottom-left yellow */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "200px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,214,10,0.14) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Name section — right side, vertically centered in top half */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          right: "80px",
          zIndex: 10,
          textAlign: "right",
        }}
      >
        {/* Label */}
        <p
          style={{
            color: "#ff5e1a",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            margin: "0 0 10px 0",
          }}
        >
          Frontend Engineer · Product Thinker
        </p>

        {/* Name */}
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
          <span style={{ color: "#f5f0e8" }}>DHINESH</span>
          <span style={{ color: "#ff5e1a" }}>KS</span>
        </h1>

        {/* Orange accent bar — right aligned */}
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

        {/* Tagline */}
        <p
          style={{
            color: "#9ca3af",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: "520px",
            margin: 0,
          }}
        >
          6+ years building UI/utility libraries, micro-frontends, monorepos,
          <br />
          real-time systems &amp; performance-first web experiences at Yellow.ai
        </p>
      </div>

      {/* Skills pills — bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: "36px",
          right: "80px",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "flex-end",
        }}
      >
        {[
          ["React", "Next.js", "JavaScript", "TypeScript", "Node.js"],
          ["SQL", "Git", "Micro-frontends", "Monorepo", "Performance", "Security"],
        ].map((row, i) => (
          <div key={i} style={{ display: "flex", gap: "8px" }}>
            {row.map((skill) => (
              <span
                key={skill}
                style={{
                  padding: "5px 12px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,94,26,0.35)",
                  background: "rgba(255,94,26,0.07)",
                  color: "#f5f0e8",
                  fontSize: "13px",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>

    </div>
    </>
  );
}
