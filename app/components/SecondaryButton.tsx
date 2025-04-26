import React, { FC } from 'react'


interface SecondaryButtonProps {
    text: string;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({
    text,
}) => {
    return (
        <button className="px-6 py-3 rounded-lg font-bold max-h-12 bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 transition duration-200 ease-in-out hover:cursor-pointer">
            {text}
        </button>
    )
}

export default SecondaryButton
