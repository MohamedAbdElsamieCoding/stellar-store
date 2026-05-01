const AuthHeroSection = () => {
  return (
    <div className="w-full relative bg-bg p-10 flex flex-col justify-start">
      {/* Content */}
      <div className="absolute top-0 left-0 flex flex-col p-12 bg-[url('/overlay-bg.png')] w-full bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-l from-bg via-bg/80 to-transparent"></div>
        <div className="flex flex-col gap-20">
          <p className="text-primary font-headline text-[16px] tracking-[-0.8px] antialiased">
            Stellar Store
          </p>
          <div className="relative z-10 flex flex-col gap-3 mb-1">
            <h2>NEXT GEN RETAIL CORE.</h2>
            <p className="text-text">
              Access the high-performance marketplace for elite hardware and
              digital assets.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <img src="/cover.png" alt="image.png" className="w-10 h-10" />
          <p className="text-text font-headline line-24">
            TRUSTED BY 50K+ OPERATORS
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthHeroSection;
