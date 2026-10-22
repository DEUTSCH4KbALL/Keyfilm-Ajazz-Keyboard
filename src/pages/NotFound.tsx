import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-svh max-w-7xl flex-col items-start justify-center px-5 md:px-10">
      <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-extrabold leading-none">404</h1>
      <p className="mt-6 text-lg text-mute">That page is not on this keyboard. Head back to the main row.</p>
      <Link to="/" className="mt-10 rounded-full bg-ember px-8 py-3.5 font-semibold text-ink">
        Back to home
      </Link>
    </section>
  );
}
