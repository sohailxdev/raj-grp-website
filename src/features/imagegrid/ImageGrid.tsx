import { useState, MouseEvent, useCallback } from "react";

function throttle<T extends (...args: any[]) => any>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

const TiltImage = ({ src, alt }: { src: string; alt: string }) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);


    const onMouseMove = useCallback(
        throttle((e: MouseEvent<HTMLDivElement>) => {
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;
            const rotateX = (y - centerY) / 7;
            const rotateY = (centerX - x) / 7;

            setRotate({ x: rotateX, y: rotateY });
            setScale(1.05);
        }, 100),
        []
    );

    const onMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
        setScale(1);
    };

    return (
        <div
            className="w-full lg:h-80 md:h-72 max-sm:h-52 transition-transform duration-300  overflow-hidden rounded-lg shadow-md"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${scale})`,
                transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
            }}
        >
            <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
    );
};

export const ImageGrid = ({ images }: { images: { image: string; text: string }[] }) => {
    return (
        <div className="text-center">
            <h1 className="text-4xl uppercase text-gray-700 font-bold">Industries We Cater</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:px-56 md:px-6 max-sm:px-4 py-6">
                {images.map((data, index) => (
                    <div key={index} className="space-y-7 cursor-pointer">
                        <TiltImage src={data.image} alt={`Image ${index + 1}`} />
                        <h1 className="text-lg uppercase font-extrabold">{data.text}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};
