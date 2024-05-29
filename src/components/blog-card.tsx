import Image from "next/image";
import React from "react";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
}

export default function BlogCard({ image, title, description }: BlogCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w h-[30rem] lg:h-[20rem]">
        <Image fill src={image} alt="blog-image" className="object-cover" />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="max-w-lg lg:max-w-sm text-sm text-black/60">{description}</p>
      </div>
    </div>
  );
}
