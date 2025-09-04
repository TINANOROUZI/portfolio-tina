// Left vertical social dock (desktop)
const Icon = {
  GitHub: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.41-1.35-1.79-1.35-1.79-1.11-.77.08-.75.08-.75 1.22.09 1.86 1.25 1.86 1.25 1.09 1.86 2.85 1.32 3.54 1.01.11-.79.43-1.32.78-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.29-1.55 3.31-1.23 3.31-1.23.66 1.66.26 2.88.13 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.93.44.38.83 1.12.83 2.26v3.35c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/>
    </svg>
  ),
  LinkedIn: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5ZM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.09V21h-4v-5.33c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z"/>
    </svg>
  ),
  Email: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5z"/>
    </svg>
  ),
  Telegram: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M9.04 15.31 8.9 19.2a.95.95 0 0 0 1.5.82l2.1-1.43 3.9 2.86a1 1 0 0 0 1.57-.6l3.02-14.2a1 1 0 0 0-1.34-1.15L2.56 10.07a1 1 0 0 0 .02 1.86l4.94 1.9 8.9-5.62-7.38 7.1Z"/>
    </svg>
  ),
};

export default function SocialDock(){
  return (
    <aside className="fixed left-0 top-1/2 -translate-y-1/2 z-30 hidden md:block">
      <ul className="space-y-2">
        <li>
          <a
            className="dock-item bg-[#222]"
            href="https://github.com/TINANOROUZI"
            target="_blank" rel="noreferrer"
          >
            <Icon.GitHub className="w-5 h-5 mr-2 opacity-80" />
            Github
          </a>
        </li>
        <li>
          <a
            className="dock-item bg-[#075985]"
            href="https://www.linkedin.com/in/tinanorouzimoghaddam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank" rel="noreferrer"
          >
            <Icon.LinkedIn className="w-5 h-5 mr-2 opacity-90" />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="dock-item bg-[#38bdf8]"
            href="mailto:tinanoruzi14@gmail.com"
          >
            <Icon.Email className="w-5 h-5 mr-2 opacity-90" />
            Email
          </a>
        </li>
        <li>
          <a
            className="dock-item bg-[#0b62f5]"
            href="https://t.me/tinanoruzi"
            target="_blank" rel="noreferrer"
          >
            <Icon.Telegram className="w-5 h-5 mr-2 opacity-90" />
            Telegram
          </a>
        </li>
      </ul>
    </aside>
  );
}
