
import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Ladies',
    image: 'https://images.pexels.com/photos/1485781/pexels-photo-1485781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 2,
    name: 'Men',
    image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 3,
    name: 'Divided',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 4,
    name: 'Kids',
    image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  }
];

const Categories = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <div key={category.id} className="category-item group">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="category-item-text">
                <h3 className="text-lg font-medium">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
