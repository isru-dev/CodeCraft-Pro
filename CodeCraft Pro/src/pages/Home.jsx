import { Hero } from "../components/Hero";
import {SocialProff} from "../components/SocialProff";
import {CourseGrid} from "../components/courseGrid";
import {Testimonials}  from "../components/Testimonials";
import { Footer } from "../components/footer";
import { Header } from "../components/Header";
export function Home(){
  return(
    <>
    <Hero /> 
    <section id="mentorship">
      <SocialProff />
    </section>
   <section id="courses">
        <CourseGrid />
      </section>
    <section id="testimonials">
        <Testimonials />
      </section>
    <Footer />
    <Header  />
    </>
   );
}