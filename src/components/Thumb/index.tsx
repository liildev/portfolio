import Image from "next/image";
import { IThumb } from "typings";

export default function Thumb({ src, title }: IThumb) {
  return (
    <div className="hero-image relative">
      <Image
        src={src}
        alt={title}
        fill
        loading="lazy"
        sizes="(min-width: 1280px) 85vw, 100vw"
      />
    </div>
  );
}
