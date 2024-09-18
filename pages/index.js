import { useState } from "react";
import Header from "@/components/Header";
import ProductCarousel from "@/components/ProductCarousel";
import CarouselFooter from "@/components/CarouselFooter"
import ProductDescriptionSection from "@/components/ProductDescriptionSection";
;

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Track the direction
    const [direction, setDirection] = useState("up"); 
    // To track zoom effect
    const [isZoomedOut, setIsZoomedOut] = useState(false); 

    const images = [
        "/images/1.jpg",
        "/images/2.jpg", 
        "/images/3.jpg", 
        "/images/4.jpg",
        "/images/5.jpg",
    ];
   
   

    return (
        <div className="flex h-screen relative -mb-7">

            {/* START HEADER  */}
             <Header />

            {/* START HERO SECTION  --> Left Side */}
            <ProductDescriptionSection direction={direction} currentIndex={currentIndex} />
            
           {/* START  CAROUSEL SECTION --> Right Side*/}
           <ProductCarousel isZoomedOut={isZoomedOut} currentIndex={currentIndex} direction={direction} images={images}/>


            {/* START COUNTER AND ARROW SECTION (Footer)*/}
            <CarouselFooter setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} images={images} setDirection={setDirection} setIsZoomedOut={setIsZoomedOut} />

            {/* Background Overlay */}
            <div className="absolute left-0 w-[30%] h-full bg-[#1a1a1a] z-0"></div>
        </div>
    );}
