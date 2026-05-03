
import Button from "../../shared/Button";

const HeroSection = () => {
  return (
    <section className="relative h-screen px-0">
      <img src="/hardware.png" alt="hero" className="h-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-bg/80 to-transparent"></div>
      <div className="absolute left-0 top-1/2 pl-8 flex flex-col gap-4 max-w-1/2">
        <p className="font-headline tracking-[3.2px] text-primary">
          NEXT-GEN HARDWARE
        </p>
        <h1 className="font-bold text-7xl tracking-[-2.88px] text-white">
          CORE_X PRO ULTRA.
        </h1>
        <p className="max-w-2/3 text-text">
          Experience uncompromised speed with the latest 16-core architecture
          and liquid-cooled thermal management.
        </p>
        <div className="flex gap-6">
          <Button
            text="BUY NOW"
            className="px-10 py-4 font-headline active:translate-y-0.5 duration-75"
            onClick={() => {}}
          />
          <button className="px-10 py-4 tracking-tight border border-text text-text hover:text-white font-headline active:translate-y-0.5 duration-75">
            SPECIFICATIONS
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
