import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

import { SelectedLink } from "@/constants/appTypes";
import useMediaQuery from "@/hooks/useMediaQuery";
import Links from "./Links";
import ModalNav from "./ModalNav";

type Props = {
  selectedPage: SelectedLink;
  setSelectedPage: (value: SelectedLink) => void; isTopOfPage:boolean,
};
const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleMenuHandler = () => {
    setShowModal((showModal) => !showModal);
 
  };
const navBarBg = isTopOfPage ? '' :'bg-primary-100 drop-shadow '
  const flexBetween = "flex justify-between items-center";
  const largeScreen = useMediaQuery("(min-width:1060px)");
  return (
    <nav>
      <div className={`${flexBetween} ${navBarBg} fixed top-0 z-30 w-full py-6 `}>
        <div className={`${flexBetween}  mx-auto w-5/6 `}>
          <div className={`${flexBetween}  w-full gap-16 `}>
            <img alt="logo" src={Logo} />
            {largeScreen ? (
              <div className={`${flexBetween}   w-full`}>
                <Links
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2  "
                onClick={toggleMenuHandler}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
     {!largeScreen  &&  showModal && <ModalNav
        toggleModal={toggleMenuHandler}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />}
    </nav>
  );
};

export default Navbar;
