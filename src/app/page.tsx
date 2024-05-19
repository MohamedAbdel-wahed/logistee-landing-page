import Navbar from "@/components/navbar";
import Wrapper from "@/components/wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Wrapper className="bg-banner h-[80vh] bg-cover bg-center">
     
      <Navbar />
    </Wrapper>
    </>
  );
}
