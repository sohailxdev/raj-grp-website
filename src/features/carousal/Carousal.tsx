import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // ShadCN button
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons
import { Dialog, DialogContent } from "@/components/ui/dialog"; // ShadCN modal

const slides = [
  { image: "Images/Banner_newban4.jpg" },
  { image: "Images/Banner_newban3.jpg" },
  { image: "Images/Banner_ban2.jpeg" },
  { image: "Images/Banner_ban5.jpg", video: "https://www.youtube.com/embed/kbU2V4Ell6Q?si=Y0c6BOGuqXCMmmJ-" },
  { image: "Images/Banner_ban6.jpg", video: "https://www.youtube.com/embed/VAeq3EunnoQ?si=lznapRwoO3nUp9vm" },
];

const CustomCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  // Auto-play every 5 seconds (stops when video is open)
  useEffect(() => {
    if (isVideoOpen) return; // Stop autoplay if video is open

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isVideoOpen]);

  // Go to next slide (loop back at end)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Go to previous slide (loop to last)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  // Open video modal and set video URL
  const openVideo = (video: string) => {
    setVideoUrl(video);
    setIsVideoOpen(true);
  };

  // Close video modal
  const closeVideo = () => {
    setIsVideoOpen(false);
    setVideoUrl(null);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full min-w-full relative ${slide.video ? "cursor-pointer" : ""}`}
            onClick={slide.video ? () => openVideo(slide.video!) : undefined}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Overlay on small & medium screens */}

      <img className="max-sm:h-6 cursor-pointer absolute lg:top-72 max-sm:top-16 md:top-40 left-4" onClick={prevSlide} src="Images/red-prev-btn.png" alt="" />

      <img className="max-sm:h-6 cursor-pointer absolute lg:top-72 max-sm:top-16 md:top-40 right-4" onClick={nextSlide} src="Images/red-next-btn.png" alt="" />

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={closeVideo}>
        <DialogContent className="w-screen h-screen max-w-full max-h-full flex items-center justify-center bg-black p-4">
          <div className="relative w-full max-w-[90vw] max-h-[90vh]">
            {/* Iframe */}
            {videoUrl && (
              <iframe
                className="w-full h-full aspect-video max-h-[80vh]"
                src={videoUrl}
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomCarousel;
