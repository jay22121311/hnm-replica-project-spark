
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
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/70 p-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <Button variant="link" className="font-medium hover:text-primary p-0">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Magazine;
