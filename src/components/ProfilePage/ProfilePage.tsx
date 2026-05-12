import { useEffect, useState } from "react";
import Button from "../../shared/Button";
import { clsx } from "clsx";
import { CiLock } from "react-icons/ci";
import { BsToggle2Off } from "react-icons/bs";
import { BsToggle2On } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { FaClockRotateLeft } from "react-icons/fa6";

const ProfilePage = () => {
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [authToggle, setAuthToggle] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="app-container flex flex-col gap-8 py-12">
        <div className="flex flex-col md:flex-row gap-3 justify-between md:items-end">
          <div className="flex gap-6">
            <img
              src="/women.jpg"
              alt="Profile"
              className="border border-primary rounded-xl h-18 w-fit object-cover"
            />
            <div className="flex flex-col gap-1">
              <h1 className="md:text-4xl tracking-tight">ALEX_VANCE.SYS</h1>
              <p className="text-text/50 tracking-[1.2px] text-xs">
                JOINED 2042.08.15
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => {}}
              text="EDIT_PROFILE"
              className="py-2 px-6 text-base font-headline font-medium"
            />
            <button className="py-2 px-6 border border-text/20 text-base font-headline">
              Logout
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 flex flex-col gap-6 bg-tertiary border border-text/50 rounded-xs">
            <h1>Active_Orders</h1>
            <div
              onClick={() => setActive(!active)}
              className={clsx(
                "p-4 flex bg-[#262626] justify-between items-center",
                active ? "border-l-2 border-l-primary " : "border-none",
              )}
            >
              <div className="flex gap-4 h-18 w-fit">
                <img
                  src="/cover.png"
                  alt="product"
                  className="object-contain"
                />
                <div className="flex flex-col w-full">
                  <p className="whitespace-nowrap text-base">
                    Neural_Link VR-9
                  </p>
                  <p className="whitespace-nowrap text-sm font-headline text-text/50">
                    product id
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="w-full md:w-50 bg-white/10 h-3 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-text/50">progress</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-6 justify-between bg-tertiary border border-text/50 rounded-xs gap-6">
            <h1 className="font-medium">Wallet</h1>
            <img
              src="/visa.png"
              alt="Visa"
              className="rounded-2xl h-40 object-contain"
            />
          </div>
          <div className="md:col-span-3">
            <div className="rounded-xs bg-tertiary p-6 flex flex-col gap-6 border border-text/50">
              <h1 className="font-medium font-headline">Security_Protocol</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4 justify-between bg-[#262626] border border-text/20 p-4 w-full">
                  <div className="flex gap-3 items-center">
                    <CiLock className="text-xl text-secondary" />
                    <h2 className="font-medium text-base">TWO-FACTOR_AUTH</h2>
                  </div>
                  <p className="text-sm text-text w-2/3">
                    Enhance security with biometric verification nodes.
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setAuthToggle((prev) => !prev)}
                      className="relative w-10 h-10 flex items-center justify-center"
                    >
                      <AnimatePresence>
                        {authToggle ? (
                          <motion.div
                            key="on"
                            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.6, rotate: 20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute"
                          >
                            <BsToggle2On className="w-10 h-10 text-primary" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="off"
                            initial={{ opacity: 0, scale: 0.6, rotate: 20 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.6, rotate: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute"
                          >
                            <BsToggle2Off className="w-10 h-10 text-white/40" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>

                    <motion.p
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.9 }}
                      className={authToggle ? "text-primary" : "text-white/40"}
                    >
                      {authToggle ? "Active" : "Disabled"}
                    </motion.p>
                  </div>
                </div>
                <div className="flex flex-col justify-between bg-[#262626] border border-text/20 p-4 w-full">
                  <div className="flex flex-col gap-4">
                    <div className="bg-tertiary/20 flex gap-3 items-center">
                      <FaClockRotateLeft className="text-xl text-secondary" />
                      <h2 className="text-base font-headline">SESSION_LOG</h2>
                    </div>
                    <p className="text-sm text-text">
                      Last access: Today from NEO_CITY_CLUSTER_01
                    </p>
                  </div>
                  <p className="underline text-xs">TERMINATE_ALL</p>
                </div>
                <div className="flex flex-col justify-between bg-[#262626] border border-text/20 p-4 w-full">
                  <div className="flex flex-col gap-4">
                    <div className="bg-tertiary/20 flex gap-3 items-center">
                      <FaClockRotateLeft className="text-xl text-secondary" />
                      <h2 className="text-base font-headline">NEURAL_COMMS</h2>
                    </div>
                    <p className="text-sm text-text">
                      Primary: alex.vance@core.net
                    </p>
                  </div>
                  <p className="underline text-xs">UPDATE_ALIAS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
