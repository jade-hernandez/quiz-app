import { useState } from "react";

type ImageWithPlaceholderProps = {
  readonly src: string;
  readonly placeholder: string;
  readonly width: number;
  readonly height: number;
};

export function ImageWithPlaceholder({
  src,
  placeholder,
  width,
  height,
}: ImageWithPlaceholderProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className='relative'>
      <div
        aria-hidden='true'
        style={{ backgroundImage: `url(${placeholder})` }}
        className={`absolute inset-0 bg-cover transition-opacity duration-300 ${loaded ? "opacity-0" : ""}`}
      />
      <img
        src={src}
        alt=''
        width={width}
        height={height}
        loading='lazy'
        onLoad={() => setLoaded(true)}
        className={`relative block h-auto w-full transition-opacity duration-300 ${loaded ? "" : "opacity-0"}`}
      />
    </div>
  );
}
