import { useProductStore } from "../../store/useProductStore";
import { formatCat } from "../../utils/formatCat";
import { selectOpts } from "../../utils/selectedOpts";
import type { SortType } from "../types/product.type";

const SidebarShop = () => {
  const {
    categories,
    selectedCategories,
    toggleCategory,
    setSortType,
    sortType,
  } = useProductStore();

  return (
    <aside className="flex flex-col gap-10">
      <div className="flex flex-col gap-6 text-sm md:text-lg">
        <div className="flex flex-col gap-3">
          <p className="text-text/50 text-xs">Sort by :</p>
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value as SortType)}
            className="appearance-none px-2 py-2 text-xs md:text-sm rounded-sm text-center bg-linear-to-r from-neutral/30 to-transparent text-white border border-text/90 focus:border-primary outline-none cursor-pointer bg-neutral/90"
          >
            {selectOpts.map((item) => (
              <option
                key={item.id}
                value={item.id}
                className="text-white bg-neutral/90"
              >
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-text/50 text-xs">Categories</p>
          <div className="flex flex-col gap-5">
            {categories.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 w-full min-w-0"
              >
                <input
                  className="shrink-0 accent-primary scale-120"
                  type="checkbox"
                  name="category"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                <span> </span>
                <span className="flex flex-col leading-tight">
                  {formatCat(cat)}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarShop;
