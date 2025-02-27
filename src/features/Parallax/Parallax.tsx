import React, { ReactNode } from "react";

interface ParallaxSectionProps {
    bgImage: string;
    children: ReactNode;
}

const Parallax: React.FC<ParallaxSectionProps> = ({ bgImage, children }) => {
    return (
        <div
            className="relative h-[2000px] md:h-[700px] w-full flex items-center justify-center text-white"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="p-8 flex flex-col space-y-6 items-center justify-center bg-black w-full h-full bg-opacity-50 text-center">
                {children}
            </div>
        </div>
    );
};

export default Parallax;
