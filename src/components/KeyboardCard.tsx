import { Link } from "react-router-dom";
import type { Keyboard } from "../data";
import Img from "./Img";

export default function KeyboardCard({ k }: { k: Keyboard }) {
  const body = (
    <>
      <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#e8e4f4]">
        <Img
          src={k.img}
          alt={k.name}
          className="h-full w-full object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg font-semibold">{k.name}</h3>
        <span className="shrink-0 text-mute">${k.price.toFixed(2)}</span>
      </div>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-mute">{k.blurb}</p>
      <dl className="mt-4 flex gap-6 text-sm">
        <div>
          <dt className="text-mute">Sound</dt>
          <dd>{k.sound}</dd>
        </div>
        <div>
          <dt className="text-mute">Best for</dt>
          <dd>{k.scene}</dd>
        </div>
      </dl>
    </>
  );
  const cls = "group block focus-visible:outline-offset-8";
  if (k.to) {
    return (
      <Link to={k.to} className={cls}>
        {body}
      </Link>
    );
  }
  return (
    <a href={k.href} target="_blank" rel="noreferrer" className={cls}>
      {body}
    </a>
  );
}
