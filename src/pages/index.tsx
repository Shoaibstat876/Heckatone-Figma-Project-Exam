import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import TopCategories from '@/components/sections/TopCategories';
import ExploreNewStyles from '@/components/sections/ExploreNewStyles';
import OurProducts from '@/components/sections/OurProducts';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <TopCategories />
      <ExploreNewStyles />
      <OurProducts />
    </Layout>
  );
};

export default Home;
