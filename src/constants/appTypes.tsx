


export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}


export enum SelectedLink {
    Home = 'home',
    OurClasses = 'ourclasses',
    ContactUs = 'contactus',
    Benefits = "benefits"
  
  }


  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }