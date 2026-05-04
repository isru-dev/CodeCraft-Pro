import { Hero } from "../components/Hero";
import {SocialProff} from "../components/SocialProff";
import {CourseGrid} from "../components/courseGrid";
import {Testimonials}  from "../components/Testimonials";
export function Home(){
  return(
    <>
    <Hero /> 
    <SocialProff />
    <CourseGrid />
    <Testimonials />
    </>
   );
}