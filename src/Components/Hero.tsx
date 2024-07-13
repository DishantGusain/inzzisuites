import React from "react";

export default function Hero() {
    return (
        <section id="hero" className="relative">



            <div className="z-50 md:flex justify-center items-center md:h-screen HeroContainer">


                <div className="z-50 flex justify-center items-center md:pt-0 pb-20 md:pb-0 pl-40 w-full md:w-1/2 h-[45%] md:h-full text-left">
                    <div className="bg-secondaryBackground">
                        <h1 className="font-semibold text-4xl text-pink-300">Welcome to InzziSuites</h1>
                        <h1 className="my-6 font-bold text-5xl text-left text-textprimary md:text-8xl 2xl:text-7xl">
                            Discover your <br/> Dream Apartments
                        </h1>
                        <h1 className="font-normal text-left text-lg md:text-xl 2xl:text-2xl">
                            At InzziSuites, we prioritize property owners’ peace of mind and ROI. Choose between our two options: Expert management services through corporate housing and short-term rentals, or SmartStay’s
                        </h1>


                    </div>
                </div>


                <div className="flex justify-center items-center pt-6 sm:pt-32 md:pt-0 2xl:pl-20 w-full md:w-1/2 h-1/12 md:h-full text-center">
                    <div className="relative w-full">
                        <img
                            src="/heroimg.png"
                            alt="Freelance Developer Icon Art"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>



            </div>
        </section>
    );
}
