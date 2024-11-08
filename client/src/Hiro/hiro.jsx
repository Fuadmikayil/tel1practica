import React from "react";
import img from "../İmages/hero-image.png";
import bg from "../İmages/hero-illustration.svg";
const hiro = () => {
  return (
    <>
      <section className="h-[75vh] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-bl-[150px] flex gap-20  relative -z-50  ">
        <div className="flex flex-col  w-[50%] p-32 gap-y-6">
          <h2 className="text-white text-5xl font-bold tracking-wider">
            Create physical and virtual cards for your business
          </h2>
          <p className="text-gray-300 text-lg">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <div className="flex gap-3">
            <button className="bg-slate-800 p-2 rounded-2xl tracking-widest text-white ">
              <h5 className="tracking-wider font-bold px-1"> Get your card</h5>
            </button>
            <button className="bg-blue-600 p-2 rounded-2xl tracking-widest text-white  ">
              <h5> Get your card</h5>
            </button>
          </div>
        </div>
        <div className="relative top-20  ">
          <img src={img} alt="hiroİmg" className="w-[600px]  absolute z-10   "/>
          <img src={bg} alt="bg"  className="   mix-blend-lighten  translate-y-[-18%]  translate-x-[-11%]  " />
        </div>
      </section>
    </>
  );
};

export default hiro;
