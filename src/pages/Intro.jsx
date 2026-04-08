import { useEffect, useRef } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import gsap from "gsap";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--dark);
  position: relative;
`;

const ImgWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Intro = () => {
  const imgRef = useRef(null);
  useEffect(() => {
    gsap.set(imgRef.current, {
      xPercent: -50,
      yPercent: -50,
    });

    const ani = gsap.to(imgRef.current, {
      y: -20,
      x: 10,
      rotation: 3,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => ani.kill();
  }, []);

  return (
    <>
      <Wrapper>
        <ImgWrap ref={imgRef}>
          <img src={logo} alt="인트로이미지" />
        </ImgWrap>
      </Wrapper>
    </>
  );
};

export default Intro;
