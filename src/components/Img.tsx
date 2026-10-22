import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
};

export default function Img({ src, alt, className, eager }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div role="img" aria-label={alt} className={className} />;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}
