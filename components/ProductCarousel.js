import React from 'react'
import Image from "next/image";
import { texts } from './Texts';
import { motion, AnimatePresence } from "framer-motion";

export default function ProductCarousel ({isZoomedOut,currentIndex,direction,images}) {
  return (
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
                        scale: isZoomedOut ? 0.4 : 1,
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
                        alt={texts[currentIndex]?.title || "Default Title"}
                        layout="fill"
                        objectFit="cover"
                        className={`ml-[26px] rounded-l-[40%] ${
                            isZoomedOut
                                ? "rounded-l-[100%] rounded-r-[100%] -ml-[.5%]"
                                : ""
                        }`}
                    />

                </motion.div>      
            </AnimatePresence>
        </div>
    </div>
</div>
  )}