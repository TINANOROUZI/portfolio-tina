// src/sections/Connect.jsx
export default function Connect() {
  return (
    <section id="contact" className="relative py-16 sm:py-24">
      {/* subtle grid/stars (optional) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-grid-bg" />
        <div className="starfield" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="mb-10 sm:mb-14">
          <h2 className="section-title text-ink">
            <span className="mark-neon">Let’s Connect</span>
          </h2>
          <p className="mt-3 text-ink/70">
            Reach me anytime—links below open in a new tab.
          </p>
        </div>

        {/* Contact tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* GitHub */}
          <a
            href="https://github.com/TINANOROUZI"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-stroke/70 bg-white/5 backdrop-blur p-5
                       hover:border-accent/80 hover:bg-white/10 transition
                       shadow-[0_10px_40px_rgba(0,0,0,.35)]"
            aria-label="Open Tina's GitHub"
          >
            <div className="flex items-center gap-3">
              <GitHubIcon className="w-8 h-8 opacity-90 group-hover:drop-shadow-[0_0_10px_rgba(34,255,102,.45)]" />
              <div>
                <div className="text-lg font-semibold">GitHub</div>
                <div className="text-sm text-ink/60">github.com/TINANOROUZI</div>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tinanoruziimoghaddam"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-stroke/70 bg-white/5 backdrop-blur p-5
                       hover:border-accent/80 hover:bg-white/10 transition
                       shadow-[0_10px_40px_rgba(0,0,0,.35)]"
            aria-label="Open Tina's LinkedIn"
          >
            <div className="flex items-center gap-3">
              <LinkedInIcon className="w-8 h-8 opacity-90 group-hover:drop-shadow-[0_0_10px_rgba(34,255,102,.45)]" />
              <div>
                <div className="text-lg font-semibold">LinkedIn</div>
                <div className="text-sm text-ink/60">/tinanoruziimoghaddam</div>
              </div>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:tinanoruzi14@gmail.com"
            className="group rounded-2xl border border-stroke/70 bg-white/5 backdrop-blur p-5
                       hover:border-accent/80 hover:bg-white/10 transition
                       shadow-[0_10px_40px_rgba(0,0,0,.35)]"
            aria-label="Send email to Tina"
          >
            <div className="flex items-center gap-3">
              <MailIcon className="w-8 h-8 opacity-90 group-hover:drop-shadow-[0_0_10px_rgba(34,255,102,.45)]" />
              <div>
                <div className="text-lg font-semibold">Email</div>
                <div className="text-sm text-ink/60">tinanoruzi14@gmail.com</div>
              </div>
            </div>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/tinanoruzi"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-stroke/70 bg-white/5 backdrop-blur p-5
                       hover:border-accent/80 hover:bg-white/10 transition
                       shadow-[0_10px_40px_rgba(0,0,0,.35)]"
            aria-label="Open Tina's Telegram"
          >
            <div className="flex items-center gap-3">
              <TelegramIcon className="w-8 h-8 opacity-90 group-hover:drop-shadow-[0_0_10px_rgba(34,255,102,.45)]" />
              <div>
                <div className="text-lg font-semibold">Telegram</div>
                <div className="text-sm text-ink/60">@tinanoruzi</div>
              </div>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-stroke/50 pt-5 text-sm text-ink/70">
          Built From Scratch With <span className="text-accent">💚</span> © {new Date().getFullYear()} Tina. All rights reserved.
        </div>
      </div>
    </section>
  );
}

/* ---------- inline icons (no external deps) ---------- */

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.41-1.35-1.79-1.35-1.79-1.11-.77.08-.75.08-.75 1.22.09 1.86 1.25 1.86 1.25 1.09 1.86 2.85 1.32 3.54 1.01.11-.79.43-1.32.78-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.29-1.55 3.31-1.23 3.31-1.23.66 1.66.26 2.88.13 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.93.44.38.83 1.12.83 2.26v3.35c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5ZM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.09V21h-4v-5.33c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 4h16a2 2 0 0 1 2 2v1l-10 6L2 7V6a2 2 0 0 1 2-2Zm0 6.5 8 4.8 8-4.8V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
    </svg>
  );
}

function TelegramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.15 14.32 8.95 19.2a1 1 0 0 0 1.6.85l2.15-1.5 3.9 2.9a1 1 0 0 0 1.56-.61L21.2 6.6a1 1 0 0 0-1.33-1.17L2.52 10.2a1 1 0 0 0 .02 1.9l5.02 1.9 8.85-5.6-7.26 6.92Z" />
    </svg>
  );
}
