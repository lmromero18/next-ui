import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Section() {
    return (
        <div className="pb-24 md:pb-72 md:px-32 px-2">
            <div className="mt-5">
                <div
                    className="
                    relative
                    rounded-xl
                    bg-primary-800
                    flex flex-col items-center justify-center
                    md:py-8 md:px-4
                    text-white text-center space-y-4
                    w-full
                    overflow-visible
                    pb-[50px] md:pb-[300px]
                    "
                >
                    {/* Contenido principal */}
                    <div className="relative flex justify-center mt-5 p-5">
                        <div className="inline-flex flex-col items-center space-y-4 text-center">
                            <h2 className="text-3xl md:text-6xl font-semibold">Grow your users.</h2>
                            <h2 className="text-3xl md:text-6xl font-semibold text-primary-50">
                                Smarter.
                            </h2>
                            <span className="block text-primary-50 text-sm md:text-xl py-3 px-4">
                                Powerful, self-serve product and growth analytics to help you convert, engage,
                                <br />
                                and retain more users. Trusted by over 4,000 startups.
                            </span>

                            {/* Formulario */}
                            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5">
                                <div className="relative w-full md:w-auto flex-1">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="
                                          w-full px-4 py-3 pr-10 rounded-lg text-black bg-white max-h-[40px]
                                          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                                          text-sm
                                        "
                                    />
                                    <QuestionMarkCircleIcon
                                        className="
                                          absolute right-3 top-1/2 h-4 w-4 text-gray-400
                                          transform -translate-y-5 cursor-pointer
                                        "
                                    />
                                    <p className="text-xs font-light opacity-80 text-white mt-1">
                                        We care about your data in our{" "}
                                        <Link href="/" className="underline">
                                            privacy policy
                                        </Link>                                   
                                        .
                                    </p>
                                </div>
                                <Link
                                    href="/"
                                    className="
                                      w-full md:w-auto text-center mb-8 md:mb-0
                                      px-6 py-2 bg-primary hover:bg-primary-700 text-white font-medium
                                      rounded-md transition-colors duration-500 ease-in-out
                                    "
                                >
                                    Get started
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Overlay de imágenes */}
                    <div
                        className="
                          absolute left-1/2 top-full
                          transform -translate-x-1/2 -translate-y-1/2
                          z-10
                          w-[280px]        sm:w-[450px]      md:w-[650px]      lg:w-[950px]
                        "
                    >
                        <div className="relative w-full">
                            {/* Imagen base */}
                            <Image
                                src="/users-over-time.svg"
                                alt="Users over time"
                                width={700}
                                height={350}
                                className="w-full h-auto block"
                            />
                            {/* Imagen encima */}
                            <Image
                                src="/active-users.svg"
                                alt="Active users"
                                width={310}
                                height={310}
                                className="
                                  absolute bottom-0 right-0
                                  bg-white rounded-full
                                  w-1/3 sm:w-1/4 md:w-[310px]
                                  transform translate-x-1/4 -translate-y-1/12
                                "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
