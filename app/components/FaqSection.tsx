"use client";
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const faqData = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        question: "Can I change my plan later?",
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        question: "What is your cancellation policy?",
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        question: "Can other info be added to an invoice?",
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        question: "How does billing work?",
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        question: "How do I change my account email?",
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex == index ? null : index);
    };

    return (
        <div className="w-full bg-white px-4 md:px-12 lg:px-32 py-20">
            {/* Título */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Frequently asked questions
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                    Everything you need to know about the product and billing.
                </p>
            </div>

            {/* Lista de preguntas */}
            <div className="max-w-3xl mx-auto space-y-6">
                {faqData.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6">
                        <button
                            className="w-full flex items-center justify-between text-left"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-lg font-medium text-gray-900">{item.question}</span>
                            <div className="ml-4 flex items-center justify-center w-8 h-8 rounded-full">
                                {openIndex === index ? (
                                    <MinusCircleIcon className="w-6 h-6 text-gray-100 hover:cursor-pointer" />
                                ) : (
                                    <PlusCircleIcon className="w-6 h-6 text-gray-100 hover:cursor-pointer" />
                                )}
                            </div>

                        </button>
                        {/* Respuesta */}
                        {openIndex === index && (
                            <p className="mt-4 text-gray-600">{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqSection;
