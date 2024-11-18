import Image from "next/image";
import React from "react";

export default function ImageBlock({
  image,
}: {
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}) {
  return (
    <Image
      src={image.url}
      alt={image.alt}
      className="w-full"
      width={image.width}
      height={image.height}
    />
  );
}
