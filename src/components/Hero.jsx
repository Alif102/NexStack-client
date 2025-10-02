import { FaArrowRight } from "react-icons/fa";
import heroImg from "../assets/hero_model_img.png";
import hero_product_img1 from "../assets/hero_product_img1.png";
import hero_product_img2 from "../assets/hero_product_img2.png";
import { FaGift } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="mx-6">
      <div className="flex max-xl:flex-col gap-8 mb-14">
        {/* Left big hero card */}
        <div className="relative flex-1 xl:pl-16 pl-0 flex flex-col rounded-3xl overflow-hidden bg-gradient-to-br from-green-200 via-green-100 to-green-300 shadow-lg group">
          <div className="p-6 sm:p-14">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-md border border-green-400/40 text-green-700 pr-4 p-1 rounded-full text-xs sm:text-sm shadow-md">
              <span className="bg-green-600 px-3 py-1 max-sm:ml-1 rounded-full text-white text-xs shadow">
                NEWS
              </span>
              Free Shipping on Orders Above $50!{" "}
              <FaGift
                className="group-hover:scale-125 transition-transform duration-300"
                size={16}
              />
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl leading-[1.2] my-4 font-bold bg-gradient-to-r from-slate-700 via-green-600 to-lime-400 bg-clip-text text-transparent max-w-xs sm:max-w-md">
              Gadgets you’ll love.
              <br /> Prices you’ll trust.
            </h2>

            {/* Price */}
            <div className="text-slate-800 text-sm font-medium mt-6 sm:mt-10">
              <p className="text-lg">Starts from</p>
              <p className="text-4xl font-extrabold tracking-wide">BDT 4.90</p>
            </div>

            {/* Button */}
            <button className="mt-6 sm:mt-12 bg-slate-900 text-white text-sm sm:text-base py-3 px-8 sm:py-5 sm:px-12 rounded-xl shadow-md hover:shadow-lg hover:bg-slate-800 hover:scale-105 active:scale-95 transition-transform">
              LEARN MORE
            </button>
          </div>

          {/* Hero Image */}
          <img
            className="sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm drop-shadow-lg"
            src={heroImg}
            alt="hero"
          />
        </div>

        {/* Right small cards */}
        <div className="flex flex-col md:flex-row xl:flex-col gap-6 w-full xl:max-w-sm text-sm text-slate-600">
          {/* Card 1 */}
          <div className="flex-1 flex items-center justify-between w-full rounded-3xl bg-gradient-to-br from-orange-200 to-orange-300 p-6 px-8 shadow-md hover:shadow-xl hover:scale-105 transition-transform group">
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-orange-500 bg-clip-text text-transparent max-w-40">
                Best products
              </p>
              <p className="flex items-center gap-2 mt-4 group cursor-pointer font-medium text-slate-700 hover:text-slate-900">
                View more{" "}
                <FaArrowRight
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  size={18}
                />
              </p>
            </div>
            <img
              className="w-32 md:w-36 drop-shadow-md"
              src={hero_product_img1}
              alt="product"
            />
          </div>

          {/* Card 2 */}
          <div className="flex-1 flex items-center justify-between w-full rounded-3xl bg-gradient-to-br from-blue-200 to-blue-300 p-6 px-8 shadow-md hover:shadow-xl hover:scale-105 transition-transform group">
            <div>
              <p className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-500 bg-clip-text text-transparent max-w-40">
                20% discounts
              </p>
              <p className="flex items-center gap-2 mt-4 group cursor-pointer font-medium text-slate-700 hover:text-slate-900">
                View more{" "}
                <FaArrowRight
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  size={18}
                />
              </p>
            </div>
            <img
              className="w-32 md:w-36 drop-shadow-md"
              src={hero_product_img2}
              alt="discount"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
