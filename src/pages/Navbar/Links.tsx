
import ActionButton from "@/constants/ActionButton";
import { SelectedLink } from "@/constants/appTypes";

import Navlinks from "./Navlinks";
type Props = {
  selectedPage: SelectedLink;
  setSelectedPage: (value: SelectedLink) => void;
};

const Links = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex justify-between items-center";
  return (
    <div className={`${flexBetween} w-full `}>
      <Navlinks
        styles={`${flexBetween}  gap-8  text-sm `}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className={`${flexBetween}  gap-8 `}>
        <p>Sign In</p>
        <ActionButton setSelectedPage={setSelectedPage}>
          become a member
        </ActionButton>
      </div>
    </div>
  );
};

export default Links;
