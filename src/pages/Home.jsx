import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Intro from "./Intro";
import Profile from "./Profile";
import Project from "./Project";
import Contact from "./Contact";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  //배경색 변화
  useEffect(() => {
    const profile = document.querySelector("#about");

    if (!profile) return;

    gsap.to(document.documentElement, {
      scrollTrigger: {
        trigger: profile,
        start: "top 100%",
        end: "top 0%",
        scrub: 1.5,
      },

      "--bg": "#fafafa",
      ease: "none",
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // nav바 클릭시 이동
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target && window.lenis) {
        window.lenis.scrollTo(target);
      }
    }
  }, [location]);

  return (
    <>
      <section id="intro">
        <Intro />
      </section>
      <section id="about">
        <Profile />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
