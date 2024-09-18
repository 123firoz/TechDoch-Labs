// pages/index.js
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Leftarrow from "@/components/left-arrow";
import Rightarrow from "@/components/right-arrow";

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("up"); // Track the direction
    const [isZoomedOut, setIsZoomedOut] = useState(false); // To track zoom effect

    const images = [
        "/images/1.jpg", // Replace with actual image path
        "/images/2.jpg", // Replace with actual image path
        "/images/3.jpg", // Replace with actual image path
        "/images/4.jpg",
        "/images/5.jpg",
    ];

    const texts = [
        {
            title: "Basket Lamp",
            subtitle: "© 2023 BRANDING",
            linkText: "EXPLORE",
        },
        {
            title: "Red Glasses",
            subtitle: "© 2023 TRENDSETTER",
            linkText: "DISCOVER",
        },
        {
            title: "Moon Light",
            subtitle: "© 2023 MOONLIGHT",
            linkText: "LEARN MORE",
        },
        {
            title: "Moon Light",
            subtitle: "© 2023 MOONLIGHT",
            linkText: "LEARN MORE",
        },
        {
            title: "Moon Light",
            subtitle: "© 2023 MOONLIGHT",
            linkText: "LEARN MORE",
        },
    ];

    const handleLeftArrowClick = () => {
        setDirection("up"); // Set direction to top-to-bottom
        setIsZoomedOut(true); // Trigger zoom-out
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
            setIsZoomedOut(false); // Reset zoom after transition
        }, 500); // Delay to match transition timing
    };

    const handleRightArrowClick = () => {
        setDirection("down"); // Set direction to bottom-to-top
        setIsZoomedOut(true); // Trigger zoom-out
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
            setIsZoomedOut(false); // Reset zoom after transition
        }, 500); // Delay to match transition timing
    };

    return (
        <div className="flex h-screen relative -mb-7">
            {/* Menu button */}
            <div className="absolute text-white z-20 w-full flex justify-between px-32 py-8 font-serif">
                <h1 className="text-2xl font-bold">GeekFolio</h1>{" "}
                <button className="text-lg">Menu</button>
            </div>

            {/* Left section (30% width) */}
            <div className="w-[30%] bg-[#1a1a1a] text-white flex flex-col justify-center items-start pl-10 relative z-10 transform translate-y-[-5%]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{
                            opacity: 0,
                            y: direction === "up" ? "100%" : "-100%",
                        }} // top-to-bottom for left click
                        animate={{ opacity: 1, y: 0 }} // Bring to the center
                        exit={{
                            opacity: 0,
                            y: direction === "up" ? "-100%" : "100%",
                        }} // bottom-to-top for right click
                        transition={{ duration: 0.9 }}
                        className="relative w-full"
                    >
                        <h1
                            className="text-3 font-normal tracking-wider relative w-[100vh] mb-10"
                            style={{ marginLeft: "25%" }}
                        >
                            {texts[currentIndex].subtitle}
                        </h1>
                        <h2
                            className="text-7xl font-bold mb-12 relative w-[100vh]"
                            style={{ marginLeft: "25%" }}
                        >
                            {texts[currentIndex].title}
                        </h2>
                        <a
                            href="#"
                            className="text-3 tracking-wider underline relative w-[100vh]"
                            style={{ marginLeft: "25%" }}
                        >
                            {texts[currentIndex].linkText}
                        </a>
                    </motion.div>
                </AnimatePresence>

               
            </div>

            {/* Right section (70% width) */}
            <div
                className="w-[70%] relative"
                style={{ backgroundColor: isZoomedOut ? "#1a1a1a" : "#1a1a1a" }}
            >
                {/* Image Section */}
                <div className="flex justify-center items-center h-full relative overflow-hidden">
                    <div className="relative w-full h-[150%] flex justify-center items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{
                                    opacity: 0,
                                    y: direction === "up" ? "100%" : "-100%",
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: isZoomedOut ? 0.9 : 1,
                                    borderRadius: isZoomedOut ? "50%" : "0%",
                                    width: isZoomedOut ? "300px" : "100%",
                                    height: isZoomedOut ? "300px" : "100%",
                                    backgroundColor: "#1a1a1a",
                                }}
                                exit={{
                                    opacity: 0,
                                    y: direction === "up" ? "100%" : "-100%",
                                }}
                                transition={{ duration: 0.9 }}
                                className="relative overflow-hidden"
                            >
                                <Image
                                    src={images[currentIndex]}
                                    alt={texts[currentIndex].title}
                                    layout="fill"
                                    objectFit="cover"
                                    className={`ml-[26px] rounded-l-[40%] ${
                                        isZoomedOut
                                            ? "rounded-[100%] -ml-[1%]"
                                            : ""
                                    }`}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                   
                </div>
            </div>

            <div className="items-center">
             {/* Counter */}
                <div className="absolute bottom-5 left-10 flex items-center justify-center w-24 h-12 border text-white border-white rounded-[200px] text-center z-10">
                    <p className="text-lg">{`0${currentIndex + 1} — 0${images.length}`}</p>
                </div>

                 {/* Navigation Arrows */}
                 <div className="absolute bottom-5 right-10 z-20">
                        <button                         
                            onClick={handleLeftArrowClick}
                        >
                            <Leftarrow />
                        </button>
                        <button
                            onClick={handleRightArrowClick}
                        >
                          <Rightarrow />
                        </button>
                 </div>

            </div>


            {/* Background Overlay */}
            <div className="absolute left-0 w-[30%] h-full bg-[#1a1a1a] z-0"></div>
        </div>
    );
}
