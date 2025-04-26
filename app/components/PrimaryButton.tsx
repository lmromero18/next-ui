import React, { FC } from 'react'


interface PrimaryButtonProps {
    text: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
    text,
}) => {
    return (
        <button className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-700 transition duration-200 ease-in-out hover:cursor-pointer">
            {text}
        </button>
    )
}

export default PrimaryButton
