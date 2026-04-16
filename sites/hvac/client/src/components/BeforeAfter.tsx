import { useState, useRef, useCallback } from "react";
import beforeImg from "@assets/before-dirty-bushy-ac-1-tile_1766934074011.jpg";
import afterImg from "@assets/after-clean-ac-1-tile_1766934074010.jpg";
import { ArrowLeftRight } from "lucide-react";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  }, [handleMove]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const handleStart = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleClick = useCallback((e: React.MouseEvent) => {
    handleMove(e.clientX);
  }, [handleMove]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
      onClick={handleClick}
      data-testid="before-after-slider"
    >
      {/* After Image (Background) */}
      <img 
        src={afterImg} 
        alt="After - Clean AC Unit" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImg} 
          alt="Before - Dirty AC Unit" 
          className="absolute inset-0 h-full object-cover"
          style={{ width: containerRef.current?.offsetWidth || '100%' }}
          draggable={false}
        />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        {/* Handle Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-accent">
          <ArrowLeftRight className="w-5 h-5 text-accent" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold pointer-events-none">
        BEFORE
      </div>
      <div className="absolute bottom-4 right-4 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-bold pointer-events-none">
        AFTER
      </div>
    </div>
  );
}
