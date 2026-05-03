const SidebarShop = () => {
  return (
    <aside className="flex flex-col gap-10">
      <div className="flex flex-col gap-6 text-sm md:text-lg">
        <p>ARCHITECTURE</p>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-1">
            <input type="checkbox" />
            COMPUTING
          </label>
          <label className="flex items-center gap-1">
            <input type="checkbox" />
            AUDIO_ENGINE
          </label>
          <label className="flex items-center gap-1">
            <input type="checkbox" />
            GAMING_CORES
          </label>
          <label className="flex items-center gap-1">
            <input type="checkbox" />
            VISUAL_PROCS
          </label>
        </div>
      </div>
      <div>
        <p>VALUE RANGE</p>
        <input type="range" max="5000" min="0" />
      </div>
    </aside>
  );
};

export default SidebarShop;
