import React from "react";
import img from "../İmages/hero-image.png";
import img2 from "../İmages/features-02.png";
import bg from "../İmages/hero-illustration.svg";
import bg2 from "../İmages/cards-illustration.svg";
const hiro = () => {
  return (
    <>
      <section className="h-[75vh] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-bl-[150px] flex gap-20  relative pt-5 ">
        <div className="flex flex-col  w-[50%] p-32 gap-y-6">
          <h2 className="text-white text-5xl font-bold tracking-wider">
            Create physical and virtual cards for your business
          </h2>
          <p className="text-gray-300 text-lg">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <div className="flex gap-3 ">
            <button className="bg-slate-800 p-2 rounded-2xl tracking-widest text-white ">
              <h5 className="tracking-wider font-bold px-1"> Get your card</h5>
            </button>
            <button className="bg-blue-600 p-2 rounded-2xl  text-white  cursor-pointer ">
              <h5> Read documentation</h5>
            </button>
          </div>
        </div>
        <div className="relative   ">
          <img
            src={img}
            alt="hiroİmg"
            className="w-[600px]  -bottom-36 absolute z-10   "
          />
          <img
            src={bg}
            alt="bg"
            className="   mix-blend-lighten  translate-y-[-5%]  translate-x-[-11%]  "
          />
        </div>
      </section>
      <section className="flex gap-4 px-32 mt-28 overflow-hidden">
        <div className="flex flex-col gap-1">
          <i className="bx bxs-credit-card-alt text-white text-3xl"></i>
          <h4 className="text-white  text-2xl">Create custom cards</h4>
          <p className="text-gray-400 ">
            Create cards that work exactly as you configured them. Make
            real-time decisions on charges and spendings.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <i className="bx bxs-id-card text-white text-3xl"></i>
          <h4 className="text-white  text-2xl">Create custom cards</h4>
          <p className="text-gray-400">
            Create cards that work exactly as you configured them. Make
            real-time decisions on charges and spendings.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <i className="bx bx-credit-card text-white text-3xl"></i>
          <h4 className="text-white  text-2xl">Create custom cards</h4>
          <p className="text-gray-400">
            Create cards that work exactly as you configured them. Make
            real-time decisions on charges and spendings.
          </p>
        </div>
      </section>
      <section className=" bg-zinc-800 rounded-tr-[150px] flex gap-20  relative  mx-20 my-14">
        <div className="flex flex-col  w-[50%] p-20 gap-y-8">
          <h2 className="text-white text-5xl font-bold tracking-wider">
            Build a flexible card program for your business needs
          </h2>
          <p className="text-gray-100 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam, quis nostrud exercitation. Get your card
          </p>
          <div className="flex gap-3 ">
            <button className="bg-blue-500 p-2 px-4 rounded-2xl  text-white  cursor-pointer text-lg ">
              <h5>Get your card</h5>
            </button>
          </div>
          <div className="flex gap-3">
            <img className="rounded-full h-10 mt-2" src="https://preview.cruip.com/fintech/images/quote-author-01.jpg" alt="" />
            <p className="text-white text-neutral-300">“ We know the card market very well and this product provides the speed, flexible account model and API-first approach that no one else can. ”</p>
          </div>
        </div>
        <div className="relative   ">
          <img
            src={img2}
            alt="hiroİmg"
            className="w-[600px]  -bottom-16 absolute z-10 rotate-45 scale-125  "
          />
          <img
            src={bg2}
            alt="bg"
            className="   mix-blend-lighten  translate-y-[16%] scale-125  translate-x-[-3%]  "
          />
        </div>
      </section>
      <section className=" bg-slate-700 rounded-tl-[150px] flex gap-5  flex-row-reverse  mx-20 my-14">
        <div className="flex flex-col  w-[70%] p-28 gap-y-6">
          <h2 className="text-white text-5xl font-bold tracking-wider">
          Spend your money everwhere, pay anyone effortlessy
          </h2>
          <p className="text-gray-100 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam, quis nostrud exercitation. Get your card
          </p>
          <div className="flex gap-3 ">
            <button className="bg-blue-500 p-2 px-4 rounded-2xl  text-white  cursor-pointer text-lg ">
              <h5>Get your card</h5>
            </button>
          </div>
          <div className="flex gap-3">
            <img className="rounded-full h-10 mt-2" src="https://preview.cruip.com/fintech/images/quote-author-02.jpg" alt="" />
            <p className="text-white text-neutral-300">“ We know the card market very well and this product provides the speed, flexible account model and API-first approach that no one else can. ”</p>
          </div>
        </div>
          <img
            src="https://preview.cruip.com/fintech/images/features-03.png"
            alt="hiroİmg"
            className="w-[600px]  object-cover  "
          />
      </section>
      <section className=" bg-blue-600 rounded-tl-[150px] flex flex-col   mx-20 my-10">
        <div className="flex flex-col p-20 w-[85%]  gap-5">
          <h2 className="text-white text-5xl font-bold tracking-wider">
          Spend your money everwhere, pay anyone effortlessy
          </h2>
          <p className="text-gray-100 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam, quis nostrud exercitation. Get your card
          </p>
        </div>
          <div className="relative  flex justify-center items-center  -translate-y-36 ">
          <img
            src="https://preview.cruip.com/fintech/images/logos.png"
            alt="hiroİmg"
            className="w-[900px]  object-cover  absolute "
          />
            <img
              src="https://preview.cruip.com/fintech/images/logos-illustration.svg"
              alt="bg"
              className="   mix-blend-lighten  scale-125   "
            />
          </div>
          <section className="flex gap-6 px-32  -translate-y-32 ">
        <div className="flex flex-col gap-1">
          <div className="flex justify-center items-center bg-emerald-400  h-16 w-16  rounded-full"><h4 className="text-blue-600  text-xl">1</h4></div>
          <h4 className="text-white  text-2xl">Download the app</h4>
          <p className="text-gray-100 ">
            Create cards that work exactly as you configured them. Make
            real-time decisions on charges and spendings.
          </p>
        </div>
        <div className="flex flex-col gap-1">
        <div className="flex justify-center items-center bg-emerald-400  h-16 w-16  rounded-full"><h4 className="text-blue-600  text-xl">2</h4></div>
          <h4 className="text-white  text-2xl">Request your card</h4>
          <p className="text-gray-100">
            Create cards that work exactly as you configured them. Make
            real-time decisions on charges and spendings.
          </p>
        </div>
        <div className="flex flex-col gap-1">
        <div className="flex justify-center items-center bg-emerald-400  h-16 w-16  rounded-full"><h4 className="text-blue-600  text-xl">3</h4></div>
          <h4 className="text-white  text-2xl">Connect all your account</h4>
          <p className="text-gray-100">
            Create cards that work exactly as you configured them. Make
            real-time decisions on charges and spendings.
          </p>
        </div>
      </section>
      </section>
    </>
  );
};

export default hiro;
