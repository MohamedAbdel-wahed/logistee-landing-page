import AdvantageItem from "@/components/advantage-item";
import ImageSlider from "@/components/image-slider";
import Navbar from "@/components/navbar";
import ServiceBox from "@/components/service-box";
import Wrapper from "@/components/wrapper";
import { advantages, blogCards, serviceList } from "@/constants";
import Image from "next/image";
import Form from "@/components/form";
import Link from "next/link";
import BlogCard from "@/components/blog-card";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Wrapper className="bg-banner h-[92rem] sm:h-[80vh] bg-cover bg-center">
        <Navbar />

        <div className="mt-16 max-w-md flex flex-col gap-8 text-white">
          <h2 className="text-3xl sm:text-[3.5rem] sm:leading-tight font-bold">
            Quickest & Safest Delivery
          </h2>
          <p className="">
            Take the complexity out of customs Freight Solutions with customs
            brokerage services
          </p>
        </div>

        <div className="w-full md:w-fit mt-16 p-10 bg-white/20 backdrop-blur-lg">
          <div className="flex flex-col gap-5">
            <label
              htmlFor="traking_num"
              className="font-medium text-lg sm:text-xl text-white"
            >
              Enter your tracking Number
            </label>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <input
                type="text"
                id="traking_num"
                placeholder="Tracking No."
                className="px-4 py-2 border-2 border-transparent focus:border-yellow-500 outline-none"
              />
              <button className="w-full px-4 py-2 bg-yellow-500 text-white font-medium border-2 border-transparent hover:bg-transparent hover:text-yellow-500 hover:border-yellow-500 uppercase duration-150">
                track your shipment
              </button>
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper className="mt-16 flex flex-col items-center gap-16">
        <h2 className="text-3xl sm:text-[2.70rem] sm:leading-[1.3] font-bold text-black/90 text-center">
          We guarantee fast and safe transport for your packages
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <ServiceBox key={index} {...service} />
          ))}
        </div>
      </Wrapper>

      <Wrapper className="mt-16 sm:mt-24">
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-16">
          <div className="relative w-full lg:w-1/2 h-[32rem] sm:h-[48rem] lg:h-[35rem]">
            <Image
              fill
              src="/assets/reliable-transport.png"
              alt=""
              className="object-contain md:object-cover lg:object-contain"
            />
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-black/90 capitalize">
              reliable logistic & transport solutions
            </h2>

            <p className="text-black/60 font-medium">
              Logistee Group is a representative logistics operator providing
              full range of service in the sphere of customs clearance
              transportation worldwide for any cargo.
            </p>

            <p className="text-black/60 font-medium">
              We pride ourselves on providing the best transport and shipping
              services available allover the world. Our skilled personnel,
              utilising the latest communications
            </p>

            <button className="self-start px-5 py-2.5 text-white hover:text-yellow-500 font-semibold tracking-wide bg-yellow-500 hover:bg-transparent border-2 border-transparent hover:border-yellow-500 rounded-sm uppercase">
              learn more
            </button>

            <hr className="my-5 border border-zinc-200  " />

            <div className="flex flex-col">
              <h4 className="font-bold text-lg sm:text-xl">
                Trusted By Some of The World wide Companies for over last 10
                years
              </h4>

              <div className="grid grid-cols-3 place-content-evenly gap-3">
                {[2, 3, 1].map((item, index) => (
                  <div
                    key={index}
                    className="relative w-20 sm:w-28 h-16 sm:h-24"
                  >
                    <Image
                      fill
                      src={`/assets/sponser-${item}.png`}
                      alt={`sponser-${item}`}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper className="mt-24">
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-16">
          <div className="order-2 lg:order-1  w-full lg:w-1/2 flex flex-col gap-5">
            <h2 className="max-w-2xl lg:max-w-full text-3xl sm:text-4xl font-bold text-black/90 capitalize">
              Between the point of departure and destination there is Logistee
            </h2>
            <h4 className="max-w-2xl lg:max-w-full font-bold text-black/70 text-xl">
              Logistee Transport & Logistics keeps your business in motion and
              your cargo on track.
            </h4>
            <p className="text-black/70">
              We offer dedicated transport, logistics and warehousing solutions
              in Europe and across the world with customised personal service
              and guaranteed quality. Privately owned since the founding in 2012
              with branches in Denmark, Sweden, Norway, Finland and China we are
              one of the leading transport and logistics companies.
            </p>

            <hr className="my-5 border border-zinc-200  " />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {advantages.map((item, index) => (
                <AdvantageItem key={index} {...item} />
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full lg:w-1/2 flex flex-col gap-6">
            <div className="relative w-full h-[25rem] md:h-[38rem] lg:h-1/2">
              <Image
                src="/assets/ship.png"
                alt=""
                className="object-cover"
                fill
              />
            </div>
            <div className="relative w-full h-[25rem] md:h-[38rem] lg:h-1/2">
              <Image
                src="/assets/delivery-worker.png"
                alt=""
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper className="mt-28">
        <h2 className="max-w-2xl text-3xl sm:text-4xl font-bold text-black/90 capitalize">
          our logistic & transport service solutions
        </h2>
      </Wrapper>

      <Wrapper noPadding>
        <ImageSlider />
      </Wrapper>

      <Wrapper className="mt-8 py-20 bg-gradient-to-b from-white via-zinc-100 to-zinc-50">
        <h2 className="max-w-2xl text-3xl sm:text-4xl font-bold text-black/90 capitalize">
          Find out the approximate cost of delivery of your shipments
        </h2>

        <div className="w-full mt-16 grid grid-cols-1 lg:grid-cols-3 bg-white shadow-sm">
          <div className="relative h-[35rem] lg:h-[30rem]">
            <Image
              fill
              src="/assets/delivery.png"
              alt="delivery"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-2 p-6 flex justify-center items-center">
            <Form />
          </div>
        </div>
      </Wrapper>

      <Wrapper
        noPadding
        className="p-20 bg-black text-white flex flex-col items-center justify-center gap-5 text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold">
          Get Started Today for Free
        </h2>
        <p>
          Everything you need for professional-grade shipping + deep discounts
          from top carriers.
        </p>
        <Link
          href="#"
          className="mt-4 px-8 py-3 font-bold bg-yellow-500 hover:bg-transparent border-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 outline-none tracking-wide uppercase"
        >
          sign up free
        </Link>
      </Wrapper>

      <Wrapper className="mt-24">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <h2 className="max-w-2xl text-3xl sm:text-4xl font-bold text-black/90">
            Latest blog posts
          </h2>
          <Link
            href="#"
            className="self-end sm:self-start px-6 py-2.5 text-sm font-semibold bg-yellow-500 text-white hover:bg-transparent border-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 outline-none tracking-wide uppercase"
          >
            view all
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {blogCards.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </Wrapper>

      <Wrapper className="mt-24 py-16 bg-[#12191f] text-white">
        <Footer />
      </Wrapper>
    </>
  );
}
