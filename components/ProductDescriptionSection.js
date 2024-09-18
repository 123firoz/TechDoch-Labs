import { React }from 'react'
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDescriptionSection  ({currentIndex, direction})  {
    const texts = [
        {
            title: "Basket Lamp",
            subtitle: "© 2023 BRANDING",
            linkText: "EXPLORE",
        },
        {
            title: "Moon Light",
            subtitle: "© 2023 MOONLIGHT",
            linkText: "LEARN MORE",
        },
        {
            title: "Red Glasses",
            subtitle: "© 2023 TRENDSETTER",
            linkText: "DISCOVER",
        },        
        {
            title: "Waffile Maker",
            subtitle: "© 2023 WAFFILE",
            linkText: "DISCOVER",
        },
        {
            title: "Headphone",
            subtitle: "© 2023 HEADPHONE",
            linkText: "DISCOVER",
        },
    ];

  return (
    <div className="w-[30%] bg-[#1a1a1a] text-white flex flex-col justify-center items-start pl-10 relative z-10 transform translate-y-[-5%]">
     <AnimatePresence mode="wait">
        <motion.div key={currentIndex} initial={{opacity: 0, y: direction === "up" ? "100%" : "-100%",}} // top-to-bottom for left click
            animate={{ opacity: 1, y: 0 }} // Bring to the center
            exit={{opacity: 0,y: direction === "up" ? "-100%" : "100%",}} // bottom-to-top for right click
            transition={{ duration: 0.9 }}
            className="relative w-full"
            >

            <h1 className="text-3 font-normal tracking-wider relative w-[100vh] mb-10" style={{ marginLeft: "25%" }} >
                {texts[currentIndex].subtitle}
            </h1>

            <h2 className="text-7xl font-bold mb-12 relative w-[100vh]" style={{ marginLeft: "25%" }}>
                {texts[currentIndex].title}
            </h2>

            <a href="#" className="text-3 tracking-wider underline relative w-[100vh]" style={{ marginLeft: "25%" }}>
                {texts[currentIndex].linkText}
            </a>

        </motion.div>
      </AnimatePresence>
   </div>
  );}