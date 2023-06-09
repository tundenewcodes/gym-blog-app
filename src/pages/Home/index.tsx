import useMediaQuery from "@/hooks/useMediaQuery";

import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";


import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { SelectedLink } from "@/constants/appTypes";
import ActionButton from "@/constants/ActionButton";
import MotionDiv from "./MotionDiv";
import Sponsors from "./Sponsors";

type Props = {
  setSelectedPage: (value: SelectedLink) => void;
  
};

const index = ({ setSelectedPage}: Props) => {
  const largeScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={()=>setSelectedPage(SelectedLink.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <MotionDiv
           styles="md:-mt-20"
          
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </MotionDiv>

          {/* ACTIONS */}
          <MotionDiv 
            styles="mt-8 flex items-center gap-8"
          
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedLink.ContactUs )}
              href={`#${SelectedLink.ContactUs }`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </MotionDiv>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
            md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {largeScreen && (
       <Sponsors/>
      )}
    </section>
  );
};

export default index;
