import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.div`
  width: 100%;
  height: 40vh;
  background: var(--blue);
  color: var(--light);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  h2 {
    font-size: 8rem;
    font-weight: 600;
  }
  @media (max-width: 1024px) {
    h2 {
      font-size: 6rem;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    h2 {
      font-size: 5rem;
    }
  }
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    h2 {
      font-size: 2.4rem;
      line-height: 1.5;
    }
  }
`;

const Fmenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: end;
  font-size: 2rem;
  gap: 20px;

  li {
    cursor: pointer;
    transition: all 0.3s ease;
  }
  &:hover li {
    opacity: 0.5;
    filter: blur(2px);
  }

  li:hover {
    opacity: 1;
    filter: blur(0);
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
    align-items: flex-start;
  }
  @media (max-width: 400px) {
    align-items: flex-start;
    font-size: 1.6rem;
    gap: 10px;
  }
`;

const Contact = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, {
      types: "words",
    });

    gsap.from(split.words, {
      y: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <>
      <Wrapper>
        <h2 ref={textRef}>
          Let's
          <br />
          Work
          <br />
          Together
        </h2>
        <Fmenu>
          <li>010.2678.1142</li>
          <li>
            <a href="mailto:dayeonnchoi@gmail.com">dayeonnchoi@gmail.com</a>
          </li>
          <li>
            <a href="https://github.com/daye0nn" target="_blank">
              Github
            </a>
          </li>
        </Fmenu>
      </Wrapper>
    </>
  );
};

export default Contact;
