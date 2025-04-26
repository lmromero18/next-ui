import React, { FC } from 'react'

interface BadgeProps {
    text: string
}

const Badge: FC<BadgeProps> = ({
    text,
}) => {
    return (
        <span className="inline-block bg-primary-100 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary-50">
            {text}
        </span>
    )
}

export default Badge
