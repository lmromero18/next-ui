import React, { useRef } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface Customer {
    image: string;
    name: string;
    position: string;
    company: string;
    stars: number;
    quote?: string;
}

interface CarouselProps {
    customers: Customer[];
}

const Carousel: React.FC<CarouselProps> = ({ customers }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            {/* Carousel cards */}
            <div
                ref={scrollRef}
                className="flex overflow-hidden space-x-8 scrollbar-hide scroll-smooth w-full"
            >
                {customers.map((customer, index) => (
                    <div
                        key={index}
                        className="relative min-w-[250px] md:min-w-[300px] lg:min-w-[370px] h-[480px] overflow-hidden group flex-shrink-0"
                    >
                        <Image
                            src={customer.image}
                            alt={customer.name}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300"
                        />
                        {/* Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white/25 backdrop-blur-md p-5 m-4 outline-1 outline-white/30">
                            {customer.quote && (
                                <p className="text-white italic text-sm mb-3">&quot;{customer.quote}&quot;</p>
                            )}
                            <div className="text-white">
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="font-semibold mb-4 text-2xl">{customer.name}</p>
                                <p className="text-sm font-medium">{customer.position}</p>
                                <p className="text-xs">{customer.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons debajo */}
            <div className="flex w-full justify-start gap-4 mt-8 pl-4">
                <button
                    onClick={scrollLeft}
                    className="p-3 rounded-full hover:bg-gray-50 border border-gray-200"
                >
                    <ArrowLeftIcon className="w-6 h-6 text-gray-600" />
                </button>
                <button
                    onClick={scrollRight}
                    className="p-3 rounded-full hover:bg-gray-50 border border-gray-200"
                >
                    <ArrowRightIcon className="w-6 h-6 text-gray-600" />
                </button>
            </div>

        </div>
    )
}

export default Carousel
