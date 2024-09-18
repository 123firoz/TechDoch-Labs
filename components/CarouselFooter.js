import React from 'react'
import Leftarrow from "@/components/left-arrow";
import Rightarrow from "@/components/right-arrow";
export default function CarouselFooter ({currentIndex,setCurrentIndex,images,setDirection,setIsZoomedOut}) {

  const handleLeftArrowClick = () => {
    // Set direction to top-to-bottom
      setDirection("up"); 
      // Trigger zoom-out
      setIsZoomedOut(true); 
      setTimeout(() => {
          setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
           // Reset zoom after transition
          setIsZoomedOut(false);
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

  )
}

