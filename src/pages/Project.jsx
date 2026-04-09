import styled from "styled-components";
import zipimg from "../images/zip.JPG";
import nongdamimg from "../images/nongdam.JPG";
import Sideproject from "../components/Sideproject";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 80px;
  border-top: 1px solid var(--light-gray);
  @media (max-width: 768px) {
    padding: 40px;
  }
`;

const Title = styled.h1`
  font-size: 4.6rem;
  font-weight: 500;
  margin-bottom: 40px;
  @media (max-width: 1024px) {
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  @media (max-width: 400px) {
    font-size: 2.8rem;
  }
`;

const TeamProject = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    font-size: 2.4rem;
  }
  p {
    line-height: 1.5;
  }
  @media (max-width: 1024px) {
    h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

const ImgWrap = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 16 / 9;
    object-position: top;
    display: block;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0);
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    opacity: 0;
    font-size: 2rem;
  }

  &:hover {
    transform: scale(0.95);
  }

  &:hover .overlay {
    background: rgba(0, 0, 0, 0.8);
    opacity: 1;
  }
`;

const Tag = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  span {
    color: var(--gray);
    background: var(--light-gray);
    padding: 10px;
    border-radius: 10px;
    white-space: nowrap;
  }
  @media (max-width: 400px) {
    span {
      font-size: 1.6rem;
    }
  }
`;

const Project = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll(".split");

    // split 각각 적용
    elements.forEach((el) => {
      const split = new SplitType(el, { types: "lines" });

      gsap.from(split.lines, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Title className="split">Team Project</Title>
        <TeamProject>
          <ProjectItem>
            <ImgWrap onClick={() => navigate("/zip")}>
              <img src={zipimg} alt="프로젝트1" />
              <div className="overlay">VIEW PROJECT</div>
            </ImgWrap>
            <h2>ZIP.</h2>
            <p>
              패션 매거진의 인마이백 영상 속 제품을 기반으로, 스타의 실제
              사용템만을 선별하여 소개하고 판매하는 OTT와 커머스를 결합한 플랫폼
            </p>
            <Tag>
              <span>반응형</span>
              <span>Figma</span>
              <span>React</span>
              <span>StyledComponents</span>
              <span>Youtube API</span>
              <span>React-Query</span>
              <span>Firebase</span>
            </Tag>
          </ProjectItem>
          <ProjectItem>
            <ImgWrap onClick={() => navigate("/nongdam")}>
              <img src={nongdamimg} alt="프로젝트2" />
              <div className="overlay">VIEW PROJECT</div>
            </ImgWrap>
            <h2>농장을 담다</h2>
            <p>
              버려지던 못난이 농산물을 선별해 합리적인 가격에 제공해 가치 소비와
              합리적 소비를 동시에 실현하는 농산물 커머스 플랫폼
            </p>
            <Tag>
              <span>반응형</span>
              <span>Figma</span>
              <span>HTML</span>
              <span>SCSS</span>
              <span>JS</span>
            </Tag>
          </ProjectItem>
        </TeamProject>
        <Title className="split">Side Project</Title>
        <Sideproject />
      </Wrapper>
    </>
  );
};

export default Project;
