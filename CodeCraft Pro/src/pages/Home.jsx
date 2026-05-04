import { Hero } from "../components/Hero";
import {SocialProff} from "../components/SocialProff";
import {CourseGrid} from "../components/courseGrid"
export function Home(){
  return(
    <>
    <Hero /> 
    <SocialProff />
    <CourseGrid />
    </>
   );
}