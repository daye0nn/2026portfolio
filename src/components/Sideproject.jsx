import { useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";
import nexusImg from "../images/nexus.png";
import movieflixImg from "../images/movieflix.png";
import musicImg from "../images/musicplayer.JPG";

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  border-bottom: 1px solid var(--light-gray);
  &:last-child {
    border-bottom: none;
  }
  a {
    display: flex;
    align-items: center;
    gap: 80px;
    padding: 70px 0;
    width: 100%;
    cursor: pointer;
    p {
      font-size: 2.4rem;
    }
    span {
      color: var(--gray);
    }
  }
  @media (max-width: 1024px) {
    a {
      p {
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 768px) {
    a {
      padding: 50px 0;
    }
  }
  @media (max-width: 375px) {
    a {
      padding: 30px 0;
      gap: 40px;
      p {
        font-size: 1.8rem;
      }
    }
  }
`;

const HoverImg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  height: 250px;
  border-radius: 10px;
  pointer-events: none;
  opacity: 0;
  overflow: hidden;
  transform: translate(-50%, -50%) scale(0.9);
  z-index: 999;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
  @media (max-width: 1024px) {
    width: 250px;
    height: 150px;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;

const Sideproject = () => {
  //오버 시 프리뷰 이벤트
  useEffect(() => {
    if (window.innerWidth <= 375) return; // 모바일에서 오버이벤트 삭제
    const items = document.querySelectorAll(".hover");
    const imgBox = document.querySelector(".hover-img");
    const img = imgBox.querySelector("img");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let mx = x;
    let my = y;

    let isHovering = false;

    // 마우스 위치 업데이트
    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const render = () => {
      x += (mx - x) * 0.06;
      y += (my - y) * 0.06;

      gsap.set(imgBox, {
        x,
        y,
      });

      requestAnimationFrame(render);
    };

    render();

    const hide = () => {
      if (!isHovering) {
        gsap.to(imgBox, {
          opacity: 0,
          scale: 0.9,
          duration: 0.2,
        });
      }
    };

    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        isHovering = true;

        //이미지 교체
        const newImg = item.dataset.img;
        img.src = newImg;

        window.addEventListener("mousemove", move);

        gsap.to(imgBox, {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: "none",
          overwrite: "auto",
        });
      });

      item.addEventListener("mouseleave", () => {
        isHovering = false;

        window.removeEventListener("mousemove", move);

        gsap.to(imgBox, {
          opacity: 0,
          scale: 0.9,
          duration: 0.2,
        });
      });
    });
    window.addEventListener("scroll", hide);
    window.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", hide);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <>
      <List>
        <Item className="hover" data-img={nexusImg}>
          <a href="https://nexus-hanssem.netlify.app/" target="_blank">
            <p>NEXUS</p>
            <span>AOS 라이브러리를 활용한 한샘 넥서스 공홈 Clone </span>
          </a>
        </Item>
        <Item className="hover" data-img={movieflixImg}>
          <a href="https://movieflix-dayeon.netlify.app/" target="_blank">
            <p>Movieflix</p>
            <span>TMDB API를 활용한 넷플릭스 Javasvript Clone </span>
          </a>
        </Item>
        <Item className="hover" data-img={musicImg}>
          <a href="https://music-playlist01.netlify.app/" target="_blank">
            <p>Music Player</p>
            <span>HTML · CSS · JS</span>
          </a>
        </Item>
      </List>
      <HoverImg className="hover-img">
        <img src={nexusImg} alt="preview" />
      </HoverImg>
    </>
  );
};

export default Sideproject;
