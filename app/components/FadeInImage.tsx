"use client";

import Image, { ImageProps } from "next/image";
import { useIntersectionObserver } from "usehooks-ts";
import clsx from "clsx";

export default function FadeInImage({ className, ...props }: ImageProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <div
      ref={ref}
      className={clsx("opacity-0 transition-opacity duration-700 ease-out", isIntersecting && "opacity-100")}>
      <Image {...props} className={className} />
    </div>
  );
}
