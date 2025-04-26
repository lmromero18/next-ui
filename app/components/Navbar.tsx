"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Submenu from './Submenu';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState<'products' | 'resources' | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const productsRef = useRef<HTMLDivElement>(null);
    const resourcesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
                if (openDropdown === 'products') setOpenDropdown(null);
            }
            if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
                if (openDropdown === 'resources') setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [openDropdown]);

    const toggleDropdown = (menu: 'products' | 'resources') => {
        setOpenDropdown(prev => (prev === menu ? null : menu));
    };

    const DesktopLink = ({ href, label }: { href: string, label: string }) => (
        <Link href={href} className="text-gray-700 hover:text-gray-900 font-medium text-md">
            {label}
        </Link>
    );

    const DropdownButton = ({ label, menuKey, refContainer }: { label: string; menuKey: 'products' | 'resources'; refContainer: React.RefObject<HTMLDivElement | null> }) => (
        <div ref={refContainer} className="relative mb-0">
            <button
                onClick={() => toggleDropdown(menuKey)}
                className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium text-md hover:cursor-pointer w-full justify-between"
            >
                {label}
                <ChevronDownIcon
                    className={`ml-2 h-4 w-4 transform transition-transform duration-300 mb-0 ${openDropdown === menuKey ? "rotate-180" : "rotate-0"}`}
                />
            </button>
            {openDropdown === menuKey && (
                <div className="absolute left-0 mt-4 z-20">
                    <Submenu />
                </div>
            )}
        </div>
    );

    return (
        <header className="py-2 px-4 md:px-12 xl:px-32">
            <nav className="flex justify-between items-center">

                {/* Logo + Desktop menú */}
                <div className="flex items-center gap-6">
                    <Link href="/">
                        <Image src="/Logo.svg" alt="logo" width={144} height={30} />
                    </Link>

                    {/* Menú desktop */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <DesktopLink href="/" label="Home" />
                        <DropdownButton label="Products" menuKey="products" refContainer={productsRef} />
                        <DropdownButton label="Resources" menuKey="resources" refContainer={resourcesRef} />
                        <DesktopLink href="/" label="Pricing" />
                    </div>
                </div>

                {/* Botones desktop */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link href="/" className="px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-medium rounded-md transition duration-300 text-md">
                        Log in
                    </Link>
                    <Link href="/" className="px-6 py-2 bg-primary hover:bg-primary-800 text-white font-medium rounded-md transition duration-300">
                        Sign up
                    </Link>
                </div>

                {/* Botón hamburguesa mobile */}
                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(v => !v)} className="text-gray-700 hover:text-gray-900">
                        {menuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            {/* Menú mobile */}
            {menuOpen && (
                <div className="lg:hidden mt-4 space-y-4 flex flex-col py-6 px-6 ring-1 ring-gray-200">
                    <DesktopLink href="/" label="Home" />

                    {/* Products Mobile */}
                    <div className="flex flex-col">
                        <button
                            onClick={() => toggleDropdown('products')}
                            className="flex items-center justify-between text-gray-700 hover:text-gray-900 font-medium text-medium"
                        >
                            Products
                            <ChevronDownIcon
                                className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${openDropdown === 'products' ? "rotate-180" : "rotate-0"}`}
                            />
                        </button>
                        {openDropdown === 'products' && (
                            <div className="mt-2 ml-4">
                                <Submenu />
                            </div>
                        )}
                    </div>

                    {/* Resources Mobile */}
                    <div className="flex flex-col">
                        <button
                            onClick={() => toggleDropdown('resources')}
                            className="flex items-center justify-between text-gray-700 hover:text-gray-900 font-medium text-medium"
                        >
                            Resources
                            <ChevronDownIcon
                                className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${openDropdown === 'resources' ? "rotate-180" : "rotate-0"}`}
                            />
                        </button>
                        {openDropdown === 'resources' && (
                            <div className="mt-2 ml-4">
                                <Submenu />
                            </div>
                        )}
                    </div>

                    <DesktopLink href="/" label="Pricing" />

                    {/* Botones Log in / Sign up en mobile */}
                    <div className="flex flex-col gap-4 pt-4">
                        <Link href="/" className="px-6 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-900 font-medium text-medium text-center">
                            Log in
                        </Link>
                        <Link href="/" className="px-6 py-2 bg-primary hover:bg-primary-800 text-white font-medium rounded-md text-center">
                            Sign up
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar;
