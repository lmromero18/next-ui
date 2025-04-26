"use client";

import React from "react";
import Image from "next/image";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";

const GiveUsAShot = () => {

    return (
        <div className="px-4 md:px-12 xl:px-32 w-full py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row items-center lg:items-start bg-primary-800 text-white rounded-3xl overflow-hidden h-auto lg:h-[420px]">

                {/* Texto */}
                <div className="flex-1 flex flex-col justify-center h-full p-6 md:p-10 lg:p-12 bg-primary-800 rounded-b-3xl lg:rounded-b-none overflow-hidden">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">

                        {/* Título */}
                        <h2 className="text-3xl font-bold">Give us a shot</h2>

                        {/* Descripción */}
                        <p className="text-lg text-primary-50 mt-1">
                            Join over 4,000+ startups already growing with Untitled.
                        </p>

                        {/* Botones */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-5 w-full sm:w-auto justify-center lg:justify-start">
                            <SecondaryButton text="Learn more" />
                            <PrimaryButton text="Get started" />
                        </div>

                    </div>
                </div>

                {/* Imagen */}
                <div className="relative w-full lg:w-1/2 xl:w-1/3 h-[250px] md:h-[420px]">
                    <Image
                        src="/give-us-a-shot.svg"
                        alt="Give us a shot image"
                        layout="fill"
                        className="object-cover w-full h-full lg:rounded-tr-3xl lg:rounded-br-3xl lg:rounded-tl-none lg:rounded-bl-none"
                        priority
                        sizes="(max-width: 1024px) 100vw, (min-width: 1024px) 50vw, (min-width: 1280px) 33vw"
                    />
                </div>

            </div>
        </div>
    );
};

export default GiveUsAShot;
