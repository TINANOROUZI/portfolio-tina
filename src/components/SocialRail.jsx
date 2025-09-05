export default function SocialRail() {
  return (
    // hidden on mobile, visible only from md (768px)
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      <a href="https://github.com/TINANOROUZI" target="_blank" rel="noreferrer">
        <img src="/assets/github.svg" alt="GitHub" className="w-7 h-7" />
      </a>
      <a href="https://www.linkedin.com/in/tinanorouzimoghaddam" target="_blank" rel="noreferrer">
        <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-7 h-7" />
      </a>
      <a href="mailto:momo.tkd19@gmail.com" target="_blank" rel="noreferrer">
        <img src="/assets/email.svg" alt="Email" className="w-7 h-7" />
      </a>
      <a href="https://t.me/yourtelegram" target="_blank" rel="noreferrer">
        <img src="/assets/telegram.svg" alt="Telegram" className="w-7 h-7" />
      </a>
    </div>
  );
}
