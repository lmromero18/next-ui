import React from 'react'
import Image from 'next/image'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

const CtaSection = () => {
    return (
        <div className="w-full bg-gray-50 px-4 md:px-12 lg:px-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-20">
            {/* Texto Izquierdo */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xl space-y-4">
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
                    No long-term contracts.<br />
                    No catches.
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                    Start your 30-day free trial today.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <SecondaryButton text="Learn more" />
                    <PrimaryButton text="Get started" />
                </div>
            </div>

            {/* Imagen arriba en mobile, derecha en desktop */}
            <div className="relative w-full max-w-md flex justify-center items-center mb-10 lg:mb-0">
                <Image
                    src="/contracts.svg"
                    alt="Contract Image"
                    width={500}
                    height={500}
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default CtaSection
