const AuthHeroSection = () => {
  return (
    <div className="relative inline-block overflow-hidden">
      {/* BackGround image */}
      <img
        src="/overlay-bg.png"
        alt="Cyber Background"
        className="absolute inset-0 w-full h-fit object-cover z-0 block"
      />
      {/* Content */}
      <div className="absolute top-0 left-0 flex flex-col h-full p-12">
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
