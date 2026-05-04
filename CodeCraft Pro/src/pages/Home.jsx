import { Hero } from "../components/Hero";
import {SocialProff} from "../components/SocialProff";
import {CourseGrid} from "../components/courseGrid";
import {Testimonials}  from "../components/Testimonials";
import { Footer } from "../components/footer";
export function Home(){
  return(
    <>
    <Hero /> 
    <SocialProff />
    <CourseGrid />
    <Testimonials />
    <Footer />
    </>
   );
}