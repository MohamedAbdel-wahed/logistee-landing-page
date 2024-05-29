import Image from "next/image";
import Link from "next/link";

interface ServiceBoxProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceBox({ title, description, icon }: ServiceBoxProps) {
  return (
    <Link
      href="#"
      className="p-7 flex flex-col gap-4 bg-gray-50 hover:bg-white hover:shadow-xl rounded-lg duration-150"
    >
      <Image src={icon} alt="service" width={70} height={70} />

      <h2 className="text-xl font-bold capitalize tracking-">{title}</h2>
      <p className="text-black/70">{description}</p>
    </Link>
  );
}
