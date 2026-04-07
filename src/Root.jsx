import GlobalStyles from "./styles/GlobalStyles.styles";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import Header from "./components/Header";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg);
  z-index: -1;
`;

function Root() {
  useEffect(() => {
    const lenis = new Lenis();

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // 🔥 cleanup
    };
  }, []);
  return (
    <>
      <Background />
      <GlobalStyles />
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
