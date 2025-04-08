
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Ribbed Cotton Top',
    price: 19.99,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    isNew: true
  },
  {
    id: 2,
    name: 'Linen Blend Shirt',
    price: 34.99,
    image: 'https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    isNew: true
  },
  {
    id: 3,
    name: 'Wide-leg Pants',
    price: 29.99,
    image: 'https://images.pexels.com/photos/8386568/pexels-photo-8386568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    isNew: true
  },
  {
    id: 4,
    name: 'Oversized Blazer',
    price: 49.99,
    image: 'https://images.pexels.com/photos/7691355/pexels-photo-7691355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    isNew: true
  },
  {
    id: 5,
    name: 'Puff-sleeve Dress',
    price: 39.99,
    image: 'https://images.pexels.com/photos/9558579/pexels-photo-9558579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    isNew: true
  },
  {
    id: 6,
    name: 'Straight-leg Jeans',
    price: 24.99,
    image: 'https://images.pexels.com/photos/10680407/pexels-photo-10680407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    isNew: true
  }
];

const NewArrivals = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">New Arrivals</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white group hover-scale">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full aspect-[3/4] object-cover"
                />
                {product.isNew && (
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs py-1 px-2">
                    NEW
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent h-16 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <button className="bg-white text-black py-1 px-4 text-sm font-medium">
                    Add to Bag
                  </button>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium mb-1">{product.name}</h3>
                <p className="text-sm font-semibold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="#" className="inline-block border border-black px-8 py-3 font-medium hover:bg-black hover:text-white transition-colors">
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
