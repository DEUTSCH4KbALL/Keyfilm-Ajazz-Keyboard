import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import KeyboardCard from "../components/KeyboardCard";
import { HeroWords } from "../components/Words";
import { keyboards } from "../data";

const filters = ["All", "Creamy", "Thocky", "Clicky"];

export default function Lineup() {
  const [f, setF] = useState("All");
  const list = keyboards.filter((k) => f === "All" || k.sound === f);
  return (
    <section className="mx-auto max-w-7xl px-5 pb-32 pt-36 md:px-10 md:pt-44">
      <HeroWords text="Pick your sound." className="font-display text-[clamp(2.4rem,7vw,6rem)] font-extrabold leading-none tracking-tight" delay={0.5} />
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
        Four mechanical keyboards, each tuned for a different feel. Filter by how you want your keystrokes to sound.
      </p>
      <div className="mt-12 flex flex-wrap gap-3" role="group" aria-label="Filter by sound">
        {filters.map((x) => (
          <button
            key={x}
            onClick={() => setF(x)}
            aria-pressed={f === x}
            className={
              "rounded-full border px-6 py-2.5 text-sm font-semibold transition-colors " +
              (f === x ? "border-paper bg-paper text-ink" : "border-line hover:border-paper/60")
            }
          >
            {x}
          </button>
        ))}
      </div>
      <motion.div layout className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((k) => (
            <motion.div
              key={k.name}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <KeyboardCard k={k} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
