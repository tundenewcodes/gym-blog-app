import { SelectedLink } from "@/constants/appTypes";
import { XMarkIcon } from "@heroicons/react/24/solid";

import Navlinks from "./Navlinks";

type Props = {
  toggleModal: () => void;
  selectedPage: SelectedLink;
  setSelectedPage: (value: SelectedLink) => void;
};

const ModalNav = ({ toggleModal, selectedPage, setSelectedPage }: Props) => {
  const styles = "ml-[33%]  flex flex-col gap-10 text-2xl ";
  return (
    <div className="fixed right-0 top-0 bottom-0 z-40 flex h-full w-[300px] flex-col bg-primary-100 drop-shadow-xl    ">
      <div className="flex justify-end p-12">
        <button onClick={toggleModal}>
          <XMarkIcon className="h-6 w-6 text-gray-400" />
        </button>
      </div>{" "}
      <Navlinks
        styles={styles}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default ModalNav;
