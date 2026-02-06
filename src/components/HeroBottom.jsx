import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const HeroBottom = () => {
    return (
        <>
            <div className="absolute sm:top-1/2 left-1/2 top-35 -translate-x-1/2 -translate-y-1/2 z-0 w-full">
                <h1 className="text-6xl sm:text-[140px] md:text-[190px] text-center font-bold uppercase text-gray-300/25 ">
                    Doraemon
                </h1>
            </div>
            <div className=" absolute bottom-0 right-0 w-full z-999">
                <div
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-offset="0"
                    className="grid sm:grid-cols-3 container"
                >
                    <div className="hidden sm:block">
                        <div className="font-semibold">
                            <p className="text-gray-500 ">Sargodha</p>
                            <p className="text-sm text-primary">Pakistan</p>
                        </div>
                        <div className="font-semibold">
                            <p className="text-gray-500 ">25Aug, 2025</p>
                        </div>
                        <div></div>
                    </div>

                    <div className=" center ">
                        {" "}
                        <span className="hidden sm:block">
                            <FaArrowDown />
                        </span>
                    </div>

                 
                    <div className="flex justify-center sm:justify-end mb-4">
                        <div className="flex flex-row sm:flex-col  gap-5">
                            <div className="bg-white arrow-btn">
                                <IoIosArrowBack className="text-primary" />
                            </div>
                            <div className="bg-primary arrow-btn">
                                <IoIosArrowForward className=" text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBottom