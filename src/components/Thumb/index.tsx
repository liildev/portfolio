import { IThumb } from "typings";
// import Image from "next/image";

export default function Image({ src, title }: IThumb) {
  return (
    <div className="hero-image">
      <img src={src} alt={title} />
    </div>
  );
}
