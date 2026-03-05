import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socials = [
  {
    icon: FiGithub,
    href: "https://github.com/Dhinesh-KS",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/dhinesh-ks-836268168/",
    label: "LinkedIn",
  },
  {
    icon: FiMail,
    href: "mailto:dhinesh.ks.work@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted font-sans text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-foreground font-medium">Dhinesh KS</span>. Built
          with Next.js & Framer Motion.
        </p>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
