import React from 'react';

const BrandingSection = () => {
  return (
    <section className="bg-[#ffffff] py-12">
    {/* Container for branding logos */}
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-between items-center space-x-6">
        {/* Branding Logos */}
        <div className="flex items-center justify-center mb-6 md:mb-0">
          <img src="/assets/images/Logo-6.png" alt="zapier" className="h-[87px] w-[85px]" />
        </div>
        <div className="flex items-center justify-center mb-6 md:mb-0">
          <img src="/assets/images/Logo-7.png" alt="pipedrive" className="h-[109px] w-[107px]" />
        </div>
        <div className="flex items-center justify-center mb-6 md:mb-0">
          <img src="/assets/images/Logo-8.png" alt="CIB BANK" className="h-[139px] w-[135px]" />
        </div>
        <div className="flex items-center justify-center mb-6 md:mb-0">
          <img src="/assets/images/Logo-9.png" alt="7" className="h-[65px] w-[63px]" />
        </div>
        <div className="flex items-center justify-center mb-6 md:mb-0">
          <img src="/assets/images/Logo-10.png" alt="Burnt Toast" className="h-[101px] w-[98px]" />
        </div>
        <div className="flex items-center justify-center mb-6 md:mb-0">
          <img src="/assets/images/Logo-11.png" alt="PandaDoc" className="h-[115px] w-[113px]" />
        </div>
        <div className="flex items-center justify-center mb-6 md:mb-0">
          <img src="/assets/images/Logo-12.png" alt="Moz" className="h-[87px] w-[84px]" />
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default BrandingSection;
