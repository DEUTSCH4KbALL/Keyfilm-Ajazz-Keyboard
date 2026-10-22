import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Img from "../components/Img";
import { HeroWords } from "../components/Words";
import { chapters, images, inBox, shop, specs, switches } from "../data";

const colorways = [
  { name: "Grey", img: images.grey, glow: "#9b7bff" },
  { name: "White Purple", img: images.purple, glow: "#d08bff" },
  { name: "Grey Beige Red", img: images.beige, glow: "#ff6b5c" },
];

const features = [
  { ...chapters[0], title: "Check status at a glance" },
  { ...chapters[1], title: "Connect any way you like" },
  { ...chapters[2], title: "Light it your way" },
  {
    title: "Built to save desk space",
    body: "The popular 75% layout keeps the arrows and function keys and gives your mouse the room back.",
    img: images.compact,
  },
];

const modes = {
  Gaming: {
    img: images.game,
    title: "Low-latency input for every clutch moment.",
    body: "1,000Hz polling over 2.4GHz and USB-C keeps inputs tight when the round is on the line.",
  },
  Office: {
    img: images.office,
    title: "Type all day and check at a glance.",
    body: "Time, battery and connection sit on the screen, and the knob handles volume without a shortcut.",
  },
};

type Mode = keyof typeof modes;

function Hero() {
  const [c, setC] = useState(0);
  const [s, setS] = useState(0);
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32">
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-24 h-[70vmin] w-[90vmin] -translate-x-1/2 rounded-full blur-[130px]"
        animate={{ backgroundColor: colorways[c].glow, opacity: 0.4 }}
        transition={{ duration: 0.9 }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 md:px-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink-2/80 backdrop-blur">
            <AnimatePresence>
              <motion.div
                key={c}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <Img src={colorways[c].img} alt={"AK820 Pro in " + colorways[c].name} eager className="h-full w-full object-cover" />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-5 flex gap-3" role="radiogroup" aria-label="Colorway">
            {colorways.map((w, i) => (
              <button
                key={w.name}
                role="radio"
                aria-checked={c === i}
                onClick={() => setC(i)}
                className={
                  "h-20 w-28 overflow-hidden rounded-xl border-2 transition-all " +
                  (c === i ? "border-paper" : "border-transparent opacity-60 hover:opacity-100")
                }
              >
                <Img src={w.img} alt={w.name} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-mute">Ajazz</p>
          <HeroWords text="AK820 Pro" className="mt-2 font-display text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-none tracking-tight" delay={0.5} />
          <p className="mt-6 max-w-md text-lg leading-relaxed text-mute">
            A compact 75% board with a flex-cut PC plate and PCB, an interactive TFT screen, a control knob and tri-mode
            wireless.
          </p>
          <p className="mt-8 font-display text-4xl font-semibold">$68.99</p>
          <p className="mt-6 text-sm text-mute">Colorway: {colorways[c].name}</p>
          <p className="mt-6 text-sm text-mute">Switch</p>
          <div className="mt-2 flex flex-wrap gap-3">
            {switches.map((sw, i) => (
              <button
                key={sw.name}
                onClick={() => setS(i)}
                aria-pressed={s === i}
                className={
                  "rounded-full border px-5 py-2.5 text-sm transition-colors " +
                  (s === i ? "border-paper bg-paper text-ink" : "border-line text-paper hover:border-paper/60")
                }
              >
                {sw.name}
              </button>
            ))}
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">{switches[s].note}</p>
          <dl className="mt-4 max-w-sm divide-y divide-line text-sm">
            {switches[s].rows.map(([k, v]) => (
              <div key={k} className="flex justify-between py-2">
                <dt className="text-mute">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <a
            href={shop}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block rounded-full bg-ember px-9 py-4 text-lg font-semibold text-ink transition-transform hover:scale-105"
          >
            Buy at Epomaker
          </a>
          <p className="mt-4 text-sm text-mute">1-year warranty, 30-day returns, worldwide shipping.</p>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="mx-auto max-w-7xl space-y-28 px-5 py-20 md:space-y-40 md:px-10">
      {features.map((f, i) => (
        <div key={f.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <motion.div
            className={"overflow-hidden rounded-3xl bg-ink-2 " + (i % 2 ? "lg:order-2" : "")}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <Img src={f.img} alt={f.title} className="aspect-[4/3] w-full object-cover" />
          </motion.div>
          <div className="max-w-md">
            <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">{f.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-mute">{f.body}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function Modes() {
  const [m, setM] = useState<Mode>("Gaming");
  const cur = modes[m];
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <AnimatePresence>
        <motion.div
          key={m}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Img src={cur.img} alt={m + " setup"} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/70" />
        </motion.div>
      </AnimatePresence>
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex gap-3" role="tablist">
          {(Object.keys(modes) as Mode[]).map((k) => (
            <button
              key={k}
              role="tab"
              aria-selected={m === k}
              onClick={() => setM(k)}
              className={
                "rounded-full px-6 py-2.5 text-sm font-semibold transition-colors " +
                (m === k ? "bg-paper text-ink" : "border border-paper/40 hover:bg-paper/10")
              }
            >
              {k === "Gaming" ? "For gamers" : "For the office"}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={m}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5 }}
            className="mt-14 min-h-[34svh]"
          >
            <h2 className="max-w-3xl font-display text-[clamp(1.8rem,5vw,4.2rem)] font-extrabold leading-[1.05] tracking-tight">{cur.title}</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/80">{cur.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function Details() {
  return (
    <section className="mx-auto grid max-w-7xl gap-16 px-5 py-28 md:px-10 lg:grid-cols-[1.2fr_1fr]">
      <div>
        <h2 className="font-display text-3xl font-semibold md:text-4xl">Specifications</h2>
        <dl className="mt-10 divide-y divide-line">
          {specs.map(([k, v]) => (
            <div key={k} className="grid gap-1 py-4 sm:grid-cols-[200px_1fr]">
              <dt className="text-mute">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div>
        <h2 className="font-display text-3xl font-semibold md:text-4xl">In the box</h2>
        <ul className="mt-10 divide-y divide-line">
          {inBox.map((b) => (
            <li key={b} className="py-4">
              {b}
            </li>
          ))}
        </ul>
        <Img src={images.side} alt="AK820 Pro side profile" className="mt-10 w-full rounded-2xl" />
      </div>
    </section>
  );
}

export default function Product() {
  return (
    <>
      <Hero />
      <Features />
      <Modes />
      <Details />
    </>
  );
}
