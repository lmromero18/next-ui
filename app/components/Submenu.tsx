import Link from "next/link";
import SubMenuItem from "./SubMenuItem";
import Image from "next/image";

export default function Submenu() {

    const subMenuItems = [
        {
            href: "/",
            src: "/icons/book-closed.svg",
            alt: "book-closed",
            title: "Blog",
            description: "The latest industry news, updates and info.",
        },
        {
            href: "/",
            src: "/icons/stars.svg",
            alt: "stars",
            title: "Customer stories",
            description: "Learn how our customers are making big changes.",
        },
        {
            href: "/",
            src: "/icons/play-circle.svg",
            alt: "play-circle",
            title: "Video tutorials",
            description: "Get up and running on new features and techniques.",
        },
    ];

    return (
        <div className="
            flex flex-col lg:flex-row lg:w-3xl bg-white rounded-lg ring-2 ring-gray-200 overflow-hidden z-20
        ">
            {/* Columna izquierda*/}
            <div className="w-full lg:w-1/2 p-8 space-y-6 overflow-y-auto">
                {subMenuItems.map((item) => (
                    <SubMenuItem
                        key={item.title}
                        href={item.href}
                        src={item.src}
                        alt={item.alt}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>

            {/* Columna derecha*/}
            <div className="w-full lg:w-1/2 bg-gray-50 p-8 flex flex-col">
                <Image
                    src="/Image-wrap.svg"
                    alt="Image-wrap."
                    width={40}
                    height={40}
                    className="w-full h-40 object-cover rounded" /* h-32 → h-40 */
                />
                <h4 className="mt-6 text-md font-semibold text-gray-900"> {/* text-lg → text-md */}
                    We've just released an update!
                </h4>
                <p className="mt-4 text-base text-gray-500 flex-1"> {/* text-sm → text-base */}
                    Check out the all new dashboard view. Pages now load faster.
                </p>
                <div className="mt-2 flex space-x-6">
                    <Link href="/" className="text-base text-gray-700 hover:text-gray-700 font-medium">
                        Dismiss
                    </Link>
                    <Link
                        href="/"
                        className="text-base font-medium text-primary hover:text-primary-700"
                    >
                        Changelog
                    </Link>
                </div>
            </div>
        </div>
    );
}
