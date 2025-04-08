
import React from 'react';

const magazineItems = [
  {
    id: 1,
    title: 'Summer Style Guide',
    description: 'Discover the hottest trends for the season.',
    image: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 2,
    title: 'Sustainable Fashion',
    description: 'How we're working towards a more sustainable future.',
    image: 'https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  }
];

const Magazine = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">H&M Magazine</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {magazineItems.map((item) => (
            <div key={item.id} className="relative overflow-hidden group">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 p-6 md:p-8 max-w-xs text-center">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="mb-4">{item.description}</p>
                  <a href="#" className="inline-block underline font-medium hover:text-hmred">
                    Read More
                  </a>
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
