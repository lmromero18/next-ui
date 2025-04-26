"use client";
import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
    {
        image: "/customers/annie.svg",
        stars: 5,
        quote:
            "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        name: "Renee Wells",
        role: "Product Designer, Quotient",
    },
    {
        image: "/customers/annie.svg",
        stars: 4,
        quote:
            "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        name: "Renee Wells 2",
        role: "Product Designer, Quotient",
    },
    {
        image: "/customers/annie.svg",
        stars: 3,
        quote:
            "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        name: "Renee Wells 3",
        role: "Product Designer, Quotient",
    },
];

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="px-4 md:px-12 xl:px-32 w-full py-12 lg:py-20" >
            <div className="flex flex-col lg:flex-row items-start bg-primary-800 text-white rounded-3xl overflow-hidden h-auto lg:h-[420px]">


                {/* Imagen */}
                <div className="relative w-full lg:w-1/2 xl:w-1/3 h-[250px] md:h-[420px]">
                    <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        layout="fill"
                        className="object-cover w-full h-full rounded-t-xl lg:rounded-tl-xl lg:rounded-bl-xl lg:rounded-tr-none"
                        priority
                        sizes="(max-width: 1024px) 100vw, (min-width: 1024px) 50vw, (min-width: 1280px) 33vw"
                    />
                </div>


                {/* Contenedor del testimonio */}
                <div className="flex-1 flex flex-col justify-center h-full p-6 md:p-10 lg:p-12 bg-primary-800 rounded-b-xl lg:rounded-b-none lg:rounded-tr-xl overflow-hidden">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">

                        {/* Estrellas */}
                        <div className="flex items-center justify-center lg:justify-start space-x-1">
                            {Array.from({ length: testimonials[currentIndex].stars }, (_, index) => (
                                <Image
                                    key={index}
                                    src="/icons/star.svg"
                                    alt="star"
                                    width={16}
                                    height={16}
                                />
                            ))}
                        </div>

                        {/* Cita */}
                        <h2 className="text-3xl leading-snug">{testimonials[currentIndex].quote}</h2>

                        {/* Nombre y Rol */}
                        <div>
                            <p className="font-medium text-lg">- {testimonials[currentIndex].name}</p>
                            <p className="text-sm text-primary-50 mt-1">{testimonials[currentIndex].role}</p>
                        </div>

                        {/* Puntos de navegación */}
                        <div className="flex items-center justify-center lg:justify-start space-x-2 mt-4">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 hover:cursor-pointer ${currentIndex === index ? "bg-white" : "bg-primary-400"}`}
                                    onClick={() => handleDotClick(index)}
                                ></button>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default TestimonialSection;
