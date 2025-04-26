import {
    BellIcon,
    BoltIcon,
    ChartBarSquareIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Badge from "./Badge";
import Image from "next/image";

const features = [
    {
        iconSrc: "/icons/message-chat-circle.svg",
        iconAlt: "/icons/message-chat-circle.svg",
        title: "Share team inboxes",
        description:
            "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        href: "/features/inboxes",
    },
    {
        iconSrc: "/icons/zap.svg",
        iconAlt: "/icons/zap.svg",
        title: "Deliver instant answers",
        description:
            "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
        href: "/features/answers",
    },
    {
        iconSrc: "/icons/chart-breakout-square.svg",
        iconAlt: "/icons/chart-breakout-square.svg",
        title: "Manage your team with reports",
        description:
            "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
        href: "/features/reports",
    },
];

export default function FeatureSection() {
    return (
        <section className="bg-white pb-20 md:px-32 px-2">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center px-4 space-y-4">
                <Badge
                    text="Features"
                />
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                    Cutting-edge features for advanced analytics
                </h2>
                <p className="text-gray-600 px-4 text-lg">
                    Powerful, self-serve product and growth analytics to help you convert, engage,
                    and retain more users. Trusted by over 4,000 startups.
                </p>
            </div>

            {/* Features*/}
            <div className="mt-12 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((item) => (
                    <div key={item.title} className="flex flex-col items-center text-center space-y-4">

                        <div className="flex items-center justify-center bg-white rounded-xl p-2 ring-1 ring-gray-200">
                            <Image
                                src={item.iconSrc}
                                alt={item.iconAlt}
                                width={20}
                                height={20}
                                className="rounded-lg"
                            />
                        </div>


                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <Link
                            href={item.href}
                            className="inline-flex items-center text-primary-500 hover:text-primary-800 font-medium space-x-1"
                        >
                            <span>Learn more</span>
                            <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
