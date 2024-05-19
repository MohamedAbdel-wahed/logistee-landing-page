import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export default function Wrapper({
  children,
  className = "",
  noPadding = false,
}: WrapperProps) {
  return (
    <main className={`${noPadding ? "" : "px-6 sm:px-12 xl:px-40 2xl:px-96"} ${className} w-full`}>
      {children}
    </main>
  );
}
