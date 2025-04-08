
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import NewArrivals from '@/components/NewArrivals';
import Magazine from '@/components/Magazine';
import Promotion from '@/components/Promotion';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <NewArrivals />
        <Magazine />
        <Promotion />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
