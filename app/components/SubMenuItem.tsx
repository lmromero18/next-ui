"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface SubMenuItemProps {
  href: string;
  src: string;
  alt?: string;
  title: string;
  description: string;
}

const SubMenuItem: FC<SubMenuItemProps> = ({
  href,
  src,
  alt,
  title,
  description,
}) => {
  return (
    <Link
      href={href}
      className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded"
    >
      <Image src={src} alt={alt ?? title} width={30} height={30} />
      <div>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </Link>
  );
};

export default SubMenuItem;
