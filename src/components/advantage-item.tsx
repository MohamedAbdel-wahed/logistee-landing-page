import React from "react";

interface AdvantageItemProps {
  title: string;
  description: string;
}

export default function AdvantageItem({
  title,
  description,
}: AdvantageItemProps) {
  return (
    <div className="flex flex-col gap-1 sm:gap-3">
      <h3 className="text-lg sm:text-xl font-bold capitalize">{title}</h3>
      <p className="text-sm text-black/80 font-medium">{description}</p>
    </div>
  );
}
