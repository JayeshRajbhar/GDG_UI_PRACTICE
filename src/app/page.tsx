import Circles from "@/components/Circles";
import FAQS from "@/components/FAQS";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeadingAndIntro from "@/components/HeadingAndIntro";
import KeepGoing from "@/components/KeepGoing";
import One from "@/components/One";
import OurMissions from "@/components/OurMissions";
import OurPerspective from "@/components/OurPerspective";
import Technologies from "@/components/Technologies";
import Two from "@/components/Two";

export default function Home() {
  return (
    <>
    <Header />
    <HeadingAndIntro />
    <One />
    <Two />
    <OurMissions />
    <OurPerspective />
    <KeepGoing />
    <Circles />
    <Technologies />
    <FAQS />
    <Footer />
    </>

  );
}
