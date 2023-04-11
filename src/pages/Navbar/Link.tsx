import { SelectedLink } from "@/constants/appTypes";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
type Props ={
  page:SelectedLink, selectedPage: SelectedLink, setSelectedPage:(value:SelectedLink)=>void
}
const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLocaleLowerCase().trim() as SelectedLink
  return (
   
      <AnchorLink
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        className={`${
          selectedPage === lowerCasePage ? "text-primary-500" : ""
        } transition duration-500 hover:text-primary-300   `}
      >
        {page}
      </AnchorLink>
  
  );
};

export default Link;
