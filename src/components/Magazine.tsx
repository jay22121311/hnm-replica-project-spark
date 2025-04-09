
import React from 'react';
import { Button } from "@/components/ui/button";

const magazineItems = [
  {
    id: 1,
    title: 'Vennorah x Digrwear Collection',
    description: 'Discover our exclusive collaboration with Vennorah.',
    image: '/public/lovable-uploads/be6e0cdf-6fba-41e9-8d2c-d8e4bc8e94bc.png'
  },
  {
    id: 2,
    title: 'Sustainable Fashion by Vennorah',
    description: "How we're working together towards a more sustainable future.",
    image: '/public/lovable-uploads/3b45a35f-b671-47d2-9019-76a6f1eb6227.png'
  }
];

const Magazine = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Digrwear Magazine</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {magazineItems.map((item) => (
            <div key={item.id} className="relative overflow-hidden group">
              <div className="w-full aspect-[16/9] bg-gray-100 flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 p-6 md:p-8 max-w-xs text-center">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="mb-4">{item.description}</p>
                  <Button variant="link" className="font-medium hover:text-primary">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Magazine;
