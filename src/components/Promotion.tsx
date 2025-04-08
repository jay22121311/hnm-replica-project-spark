
import React from 'react';
import { Button } from "@/components/ui/button";

const Promotion = () => {
  return (
    <section className="py-12 md:py-16 bg-primary text-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Become a Digrwear Member</h2>
        <p className="max-w-xl mx-auto mb-6 md:text-lg">
          Join now to enjoy exclusive offers, discounts, and benefits. Members get free shipping on orders above $40.
        </p>
        <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 font-medium">
          Join Now
        </Button>
      </div>
    </section>
  );
};

export default Promotion;
