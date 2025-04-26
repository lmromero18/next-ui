"use client";

import Carousel from './Carousel';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

const customers = [
    {
        name: "Alisa Hester",
        position: "PM, Hourglass",
        company: "Web Design Agency",
        image: "/customers/alisa.svg",
        stars: 5,
    },
    {
        name: "Rich Wilson",
        position: "COO, Command+R",
        company: "Web Development Agency",
        image: "/customers/rich.svg",
        quote: "We've really sped up our workflow using Untitled.",
        stars: 5,
    },
    {
        name: "Annie Stanley",
        position: "Designer, Catalog",
        company: "UX Agency",
        image: "/customers/annie.svg",
        stars: 5,
    },
    {
        name: "Johnny Bell",
        position: "PM, Sisyphus",
        company: "Machine Learning Co.",
        image: "/customers/johnny.svg",
        stars: 5,
    },
];

const CustomerOpinionSection = () => {
    return (
        <div className="w-full bg-white px-4 md:px-12 lg:px-32">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-6">
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Don’t just take our word for it
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Hear from some of our amazing customers who are automating their finances.
                    </p>
                </div>
                <div className="flex gap-4">
                    <SecondaryButton text="Our customers" />
                    <PrimaryButton text="Create account" />
                </div>
            </div>

            {/* Carousel */}
            <div className="flex flex-col items-center gap-6">
                <Carousel customers={customers} />
            </div>
        </div>
    );
};

export default CustomerOpinionSection;
