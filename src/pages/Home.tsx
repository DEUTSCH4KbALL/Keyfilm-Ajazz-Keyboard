import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "motion/react";
import Img from "../components/Img";
import KeyboardCard from "../components/KeyboardCard";
import { HeroWords, ScrollWords } from "../components/Words";
import { chapters, images, keyboards } from "../data";

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.3]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative h-svh min-h-[620px] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div className="drift absolute -left-1/4 top-1/4 h-[70%] w-[70%] rounded-full bg-volt/30 blur-[120px]" />
        <div className="drift absolute -right-1/4 bottom-0 h-[60%] w-[60%] rounded-full bg-ember/20 blur-[140px]" />
        <Img src={images.hero} alt="Ajazz AK820 Pro on a desk" eager className="absolute inset-0 h-full w-full object-cover opacity-60" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />
      <motion.div style={{ y: textY, opacity: fade }} className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-14 md:px-10 md:pb-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mb-5 text-sm text-mute"
        >
          Ajazz AK820 Pro, 75% wireless mechanical keyboard
        </motion.p>
        <HeroWords
          text="Every keystroke, in color."
          className="max-w-5xl font-display text-[clamp(2.4rem,8.4vw,7.6rem)] font-extrabold leading-[0.98] tracking-tight"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/ajazz-ak820-pro"
            className="rounded-full bg-ember px-7 py-3.5 font-semibold text-ink transition-transform hover:scale-105"
          >
            Meet the AK820 Pro
          </Link>
          <Link
            to="/lineup"
            className="rounded-full border border-paper/30 px-7 py-3.5 font-semibold backdrop-blur transition-colors hover:bg-paper/10"
          >
            Compare keyboards
          </Link>
          <span className="text-mute">From $68.99</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Statement() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-32 md:px-10 md:py-48">
      <ScrollWords
        text="A 75% keyboard with a screen, a knob and the soft sound of a custom build. Wireless on three devices, lit in 1.6 million colors, and priced under seventy dollars."
        className="font-display text-[clamp(1.6rem,4.4vw,3.8rem)] font-semibold leading-[1.18] tracking-tight"
      />
    </section>
  );
}

type ChapterProps = { index: number; onActive: (i: number) => void };

function ChapterText({ index, onActive }: ChapterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);
  const c = chapters[index];
  return (
    <div ref={ref} className="flex min-h-[70svh] items-center py-12 lg:min-h-svh">
      <div className="max-w-md">
        <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">{c.title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-mute">{c.body}</p>
      </div>
    </div>
  );
}

function Chapters() {
  const [active, setActive] = useState(0);
  return (
    <section className="mx-auto grid max-w-7xl gap-0 px-5 md:px-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
      <div className="sticky top-0 z-10 flex h-[44svh] items-center bg-ink pt-16 lg:h-svh lg:pt-0">
        <div className="relative h-full w-full overflow-hidden rounded-3xl bg-ink-2 lg:h-[74svh]">
          <AnimatePresence>
            <motion.div
              key={active}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Img src={chapters[active].img} alt={chapters[active].title} className="h-full w-full object-cover" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div>
        {chapters.map((_, i) => (
          <ChapterText key={i} index={i} onActive={setActive} />
        ))}
      </div>
    </section>
  );
}

function Exploded() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.78, 1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);
  return (
    <section className="mx-auto max-w-7xl px-5 py-32 md:px-10 md:py-44">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">What makes it sound this good</h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-mute">
          Layer by layer: a gasket-mounted plate, flex-cut PC plate and PCB, smooth linear switches and south-facing LEDs
          for clean shine-through.
        </p>
      </div>
      <div ref={ref} className="mt-16 overflow-hidden rounded-3xl bg-paper">
        <motion.div style={{ scale, rotate }} className="p-6 md:p-14">
          <Img src={images.exploded} alt="Exploded view of the AK820 Pro layers" className="mx-auto max-h-[70svh] w-full object-contain" />
        </motion.div>
      </div>
    </section>
  );
}

function Lineup() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-6 px-5 md:px-10">
        <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight md:text-5xl">More boards worth a look</h2>
        <Link to="/lineup" className="rounded-full border border-paper/30 px-6 py-3 font-semibold transition-colors hover:bg-paper/10">
          See the full lineup
        </Link>
      </div>
      <div className="scrollbar-none mt-14 flex snap-x gap-8 overflow-x-auto px-5 pb-4 md:px-10">
        {keyboards.map((k) => (
          <motion.div
            key={k.name}
            className="w-[78vw] shrink-0 snap-start sm:w-[380px]"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <KeyboardCard k={k} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Finale() {
  return (
    <section className="relative overflow-hidden py-40 text-center md:py-56">
      <div className="drift absolute left-1/2 top-1/2 h-[60vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt/35 blur-[130px]" />
      <div className="relative px-5">
        <h2 className="mx-auto max-w-4xl font-display text-[clamp(2rem,6vw,5rem)] font-extrabold leading-[1.02] tracking-tight">
          Your desk is the set. Press play.
        </h2>
        <Link
          to="/ajazz-ak820-pro"
          className="mt-12 inline-block rounded-full bg-ember px-9 py-4 text-lg font-semibold text-ink transition-transform hover:scale-105"
        >
          See the AK820 Pro
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Chapters />
      <Exploded />
      <Lineup />
      <Finale />
    </>
  );
}
