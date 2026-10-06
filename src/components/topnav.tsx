import Image from 'next/image';
import React from 'react';

const TopNav = () => {
    return (
        <div className="border-t-2 border-gray-700">
            <div className="relative mx-auto flex max-w-[960px] items-center justify-center px-4 py-4">

                {/* Centered Logo + Brand */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo.webp"
                        alt="Logo"
                        width={40}
                        height={40}
                    />

                    <div className="flex flex-col">
                        <h1 className="font-serif text-[24px] font-bold leading-6 text-red-800">
                            Bangla News 24
                        </h1>

                        <p className="text-[12px] text-gray-600">
                            {new Intl.DateTimeFormat("bn-BD", {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            }).format(new Date())}
                        </p>
                    </div>
                </div>

                {/* Right-side Buttons */}
                <div className="absolute right-4 flex items-center gap-2">
                    <button className="btn btn-ghost btn-sm">
                        সাইন ইন
                    </button>

                    <button className="btn btn-error btn-sm">
                        সাইন আপ
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TopNav;