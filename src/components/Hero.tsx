
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative">
      <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
          alt="Summer collection" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <div className="bg-white/70 p-8 md:p-12 max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Summer Essentials</h1>
          <p className="text-lg md:text-xl mb-6">Discover the latest trends for your summer wardrobe.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black hover:bg-hmdark text-white px-8 py-6">
              Shop Women
            </Button>
            <Button className="bg-black hover:bg-hmdark text-white px-8 py-6">
              Shop Men
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
