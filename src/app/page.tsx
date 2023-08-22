import Aboutme from "@/components/Aboutme";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import ScrollCircle from "@/components/ScrollCircle";
import { Skills } from "@/components/Skills";
import UpperSection from "@/components/UpperSection";

export default function Portfolio(){
  return ( <> 
  <Header />
  <UpperSection />
  <Aboutme />
  <Skills />
  <Projects />
  <ContactMe/>
  <ScrollCircle/>
  </>
  )
}