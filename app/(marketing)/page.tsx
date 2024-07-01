import { infos } from "@/config/landing";
import BentoGrid from "@/components/sections/bentogrid";
import Features from "@/components/sections/features";
import HeroLanding from "@/components/sections/hero-landing";
import InfoLanding from "@/components/sections/info-landing";
import Powered from "@/components/sections/powered";
import PreviewLanding from "@/components/sections/preview-landing";
import Testimonials from "@/components/sections/testimonials";
// import { newtonsCradle } from 'ldrs';
// import { useEffect } from "react";
// import {useClient} from 'blitz';

export default function IndexPage() {
  // useEffect(() => {
  //   newtonsCradle.register();
  // }, []);
  return (
    <>
      {/* <l-newtons-cradle
        size="78"
        speed="1.4" 
        color="black" 
      ></l-newtons-cradle> */}

      <HeroLanding />
      <PreviewLanding />
      <Powered />
      <BentoGrid />
      <InfoLanding data={infos[0]} reverse={true} />
      {/* <InfoLanding data={infos[1]} /> */}
      {/* <Features /> */}
      {/* <Testimonials /> */}
    </>
  );
}
