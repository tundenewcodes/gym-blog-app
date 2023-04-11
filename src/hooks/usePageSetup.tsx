import { SelectedLink } from "@/constants/appTypes";
import { useEffect, useState } from "react";

type Props = {setCurrentPage:(value:SelectedLink)=>void};

const usePageSetup = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedLink>(
    SelectedLink.Home
  );
  
 
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);


  const handleScroll = () => {
    if (window.scrollY !== 0) {
      setIsTopOfPage(false);
    } else {
      setIsTopOfPage(true);
      setSelectedPage(SelectedLink.Home);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { selectedPage, isTopOfPage, setSelectedPage};
};

export default usePageSetup;
