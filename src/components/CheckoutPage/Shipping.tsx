import type { ChangeEvent, SyntheticEvent } from "react";
import { useShippingStore } from "../../store/useShippingStore";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const { shippingData, setShippingData } = useShippingStore();
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!name) return;

    setShippingData({
      ...shippingData,
      [name]: value,
    });
  };
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleaned = Object.fromEntries(
      Object.entries(shippingData).filter(
        ([k, v]) => k && String(v).trim() !== "",
      ),
    );

    setShippingData({
      fullName: cleaned.fullName ?? "",
      email: cleaned.email ?? "",
      address: cleaned.address ?? "",
      city: cleaned.city ?? "",
      zipCode: cleaned.zipCode ?? "",
    });

    navigate("/");
  };

  return (
    <div className="col-span-2 flex flex-col gap-8">
      <div className="border-l-4 border-l-primary flex">
        <h1 className="ml-4">Shipping Destination</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-xs tracking-[1.2px] uppercase">
            Full Name
          </label>

          <input
            name="fullName"
            type="text"
            placeholder="Enter legal name"
            className="border border-text/50 py-3.5 px-3 w-full"
            value={shippingData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-xs tracking-[1.2px] uppercase">
            Contact Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="user@interface.com"
            className="border border-text/50 py-3.5 px-3 w-full"
            value={shippingData.email}
            onChange={handleChange}
          />
        </div>

        <div className="md:col-span-2 flex flex-col gap-2 w-full">
          <label className="font-semibold text-xs tracking-[1.2px] uppercase">
            Street address
          </label>

          <input
            type="text"
            name="address"
            placeholder="Street address"
            className="border border-text/50 py-3.5 px-3 w-full"
            value={shippingData.address}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-xs tracking-[1.2px] uppercase">
            City
          </label>

          <input
            type="text"
            name="city"
            placeholder="City"
            className="border border-text/50 py-3.5 px-3 w-full"
            value={shippingData.city}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-xs tracking-[1.2px] uppercase">
            Zip code
          </label>

          <input
            type="number"
            name="zipCode"
            placeholder="Zip code"
            className="border border-text/50 py-3.5 px-3 w-full"
            value={shippingData.zipCode}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Shipping;
