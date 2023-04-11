import { SelectedLink } from '@/constants/appTypes'

import Link from './Link'

type Props = {
    selectedPage:SelectedLink, setSelectedPage:(value:SelectedLink) =>void, styles:string
}

const Navlinks = ({selectedPage, setSelectedPage,styles}: Props) => {
   
  return (
    <div className={styles}>
    <Link
     page={SelectedLink.Home}
     selectedPage={selectedPage}
     setSelectedPage={setSelectedPage}
   />
   <Link
     page={SelectedLink.Benefits}
     selectedPage={selectedPage}
     setSelectedPage={setSelectedPage}
   />
 
   <Link
     page={SelectedLink.OurClasses}
     selectedPage={selectedPage}
     setSelectedPage={setSelectedPage}
   />
     <Link
     page={SelectedLink.ContactUs}
     selectedPage={selectedPage}
     setSelectedPage={setSelectedPage}
   />
       
       </div> 
   
  )
}

export default Navlinks