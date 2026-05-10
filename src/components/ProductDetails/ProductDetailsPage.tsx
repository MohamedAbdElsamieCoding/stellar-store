import { FaStar } from "react-icons/fa6";
import { useEffect } from "react";
import { useProductStore } from "../../store/useProductStore";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getProduct, product, loading, related, getRelated } =
    useProductStore();
  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [getProduct, id]);

  useEffect(() => {
    if (!product) return;
    getRelated(product.category, product.id);
  }, [product, getRelated]);
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="app-container flex flex-col gap-8 py-12">
        <div className="flex items-center gap-2 text-text/50 text-sm">
          <span>Home</span>
          <span>&gt;</span>

          <span className="capitalize">{product?.category}</span>

          <span>&gt;</span>

          <span className="text-text">{product?.title}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <img
            src={product?.image}
            alt="product.png"
            className="col-span-2 max-h-150 object-contain border border-text/90 rounded-sm py-2 shadow-2xl bg-neutral/50"
          />

          <div className=" flex flex-col gap-4 col-span-1">
            <div className="flex gap-1 justify-start items-center text-primary">
              <FaStar className="text-xs" />
              <p className="text-xs">
                {`${product?.rating.rate} (${product?.rating.count} Reviews)`}
              </p>
            </div>
            <h3 className="tracking-tighter">{product?.title}</h3>
            <p className="text-text/50 tracking-[3.6px]">{product?.category}</p>
            <div className="flex flex-col p-6 gap-4 justify-center border border-text/50 rounded-lg bg-neutral/50 w-fit">
              <div className="flex gap-4">
                <p className="text-base font-headline">${product?.price}</p>
                <p className="text-base text-text/50 font-headline line-through">
                  $1,599.00
                </p>
              </div>
              <p className="text-base text-text">{product?.description}</p>
            </div>

            <div className="flex justify-evenly gap-4">
              <button className="py-6 font-headline tracking-[1.8px] bg-primary text-lg text-black border border-text/50 w-full">
                ADD TO CART
              </button>
              <button className="py-6 font-headline tracking-[1.8px] text-lg text-text/50 border border-text/50 w-full">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
        <hr className="border-text/20" />
        <div className="flex flex-col gap-12">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-primary tracking-[3px] text-[10px]">
                EXPANSION PACKS
              </p>
              <p className="text-base font-headline">RELATED UNITS</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((item) => (
              <button
                onClick={() => navigate(`/products/${item.id}`)}
                key={item.id}
                className="border border-text/20 rounded-lg p-3"
              >
                <img src={item.image} className="h-40 w-full object-contain" />

                <h3 className="mt-2 text-sm">{item.title.slice(0, 40)}</h3>

                <p className="text-primary font-semibold">${item.price}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
