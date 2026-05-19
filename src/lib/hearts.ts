export function launchHearts(count = 60) {
  const symbols = ["♥", "❤", "♡"];
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "heart-particle";
    el.textContent = symbols[i % symbols.length];
    const startX = Math.random() * window.innerWidth;
    const tx = (Math.random() - 0.5) * 400;
    const size = 0.6 + Math.random() * 1.6;
    const duration = 2.5 + Math.random() * 2.5;
    const rot = (Math.random() - 0.5) * 60;
    el.style.left = `${startX}px`;
    el.style.setProperty("--tx", `${tx}px`);
    el.style.setProperty("--ty", `-${100 + Math.random() * 30}vh`);
    el.style.setProperty("--s", String(size));
    el.style.setProperty("--r", `${rot}deg`);
    el.style.animationDuration = `${duration}s`;
    el.style.animationDelay = `${Math.random() * 0.6}s`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), (duration + 1) * 1000);
  }
}
