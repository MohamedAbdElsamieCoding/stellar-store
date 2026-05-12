const Shipping = () => {
  return (
    <div className="col-span-2 flex flex-col gap-8">
      <div className="border-l-4 border-l-primary flex">
        <h1 className="ml-4">Shipping Destination</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-xs tracking-[1.2px] uppercase">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter legal name"
            className="border border-text/50 py-3.5 px-3 w-full"
          />
        </form>

        <form className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-xs tracking-[1.2px] uppercase">
            Contact Email
          </label>

          <input
            type="email"
            placeholder="user@interface.com"
            className="border border-text/50 py-3.5 px-3 w-full"
          />
        </form>

        <form className="md:col-span-2 flex flex-col gap-2 w-full">
          <label className="font-semibold text-xs tracking-[1.2px] uppercase">
            Street address
          </label>

          <input
            type="text"
            placeholder="Street address"
            className="border border-text/50 py-3.5 px-3 w-full"
          />
        </form>

        <form className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-xs tracking-[1.2px] uppercase">
            City
          </label>

          <input
            type="text"
            placeholder="City"
            className="border border-text/50 py-3.5 px-3 w-full"
          />
        </form>

        <form className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-xs tracking-[1.2px] uppercase">
            Zip code
          </label>

          <input
            type="number"
            placeholder="Zip code"
            className="border border-text/50 py-3.5 px-3 w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default Shipping;
