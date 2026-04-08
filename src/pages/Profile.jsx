import styled, { keyframes } from "styled-components";
import profile from "../images/profile.jpg";
import figmaicon from "../images/figmaicon.svg";
import htmlicon from "../images/htmlicon.svg";
import cssicon from "../images/cssicon.svg";
import jsicon from "../images/jsicon.svg";
import scssicon from "../images/scssicon.svg";
import reacticon from "../images/reacticon.svg";
import tsicon from "../images/tsicon.svg";
import githubicon from "../images/githubicon.svg";
import object from "../images/object.png";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text);
  position: relative;
`;

const Inner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  padding: 40px 80px;
  gap: 80px;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const Info = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const ProfileImg = styled.div`
  width: 100%;
  max-width: 350px;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

const InfoText = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  column-gap: 12px;
  row-gap: 14px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 2rem;
  text-transform: uppercase;
  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
  @media (max-width: 1024px) {
    gap: 20px;
  }
`;

const Education = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  line-height: 1.5;
  h2 {
    font-weight: bold;
    font-size: 3rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      font-size: 2rem;
    }

    span {
      font-size: 2rem;
      color: var(--gray);
    }
  }
  @media (max-width: 1024px) {
    h2 {
      font-size: 2.4rem;
    }
    div {
      p {
        font-size: 1.8rem;
      }
      span {
        font-size: 1.8rem;
      }
    }
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 2rem;
    }
    div {
      font-size: 1.6rem;
    }
  }
`;

const Certification = styled(Education)``;

const Awards = styled(Education)``;

const Skills = styled.div`
  h2 {
    font-weight: bold;
    font-size: 3rem;
    margin-bottom: 10px;
  }
  @media (max-width: 1024px) {
    order: 3;
    h2 {
      font-size: 2.4rem;
    }
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 2rem;
    }
    font-size: 1.6rem;
  }
`;

const Icon = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  & > img {
    transition: opacity 0.3s ease;
  }
  & > img:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const Object = styled.div`
  position: absolute;
  right: 6%;
  bottom: 10%;
  width: 8vw;
  height: 8vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

const Box = styled.div`
  animation: ${spin} 20s infinite linear;
`;

const Profile = () => {
  return (
    <>
      <Wrapper>
        <Inner>
          <Info>
            <ProfileImg>
              <img src={profile} alt="프로필이미지" />
            </ProfileImg>
            <InfoText>
              <Title>Name</Title>
              <p>최다연</p>
              <Title>birth</Title>
              <p>2001.12.30</p>
              <Title>phone</Title>
              <p>010.2678.1142</p>
              <Title>email</Title>
              <p>dayeonnchoi@gmail.com</p>
            </InfoText>
          </Info>
          <Section>
            <Education>
              <h2>Education</h2>
              <div>
                <p>
                  <span>2024.12 ~ 2025.06</span> 이젠아카데미
                  <br />
                  UX/UI디자인 웹 프론트엔드개발 부트캠프 과정 수료
                </p>
                <p>
                  <span>2024.07 ~ 2024.07</span> 아이티윌
                  <br />
                  AWS 리눅스 기반 클라우드 데브옵스 기초 실무 과정 수료
                </p>
                <p>
                  <span>2023.03 ~ 2024.02</span> 동서울대학교
                  ICT융합학과(학사학위) 졸업
                </p>
                <p>
                  <span>2020.03 ~ 2023.02</span> 동서울대학교 정보통신과 졸업
                </p>
                <p>
                  <span>2020.02</span> 광남고등학교 졸업
                </p>
              </div>
            </Education>
            <Certification>
              <h2>Certification</h2>
              <div>
                <p>
                  <span>2022.07</span> 인공지능전문가 자격증 AIEC
                </p>
              </div>
            </Certification>
            <Awards>
              <h2>Awards</h2>
              <div>
                <p>
                  <span>2022</span> 우수논문상
                  <br />
                  자동 제동 기능이 추가된 스마트유모차 연구 우수논문상
                </p>
              </div>
            </Awards>
          </Section>
          <Skills>
            <h2>Skills</h2>
            <Icon>
              <img src={figmaicon} alt="figma" />
              <img src={htmlicon} alt="html" />
              <img src={cssicon} alt="css" />
              <img src={jsicon} alt="javascript" />
              <img src={scssicon} alt="scss" />
              <img src={reacticon} alt="react" />
              <img src={tsicon} alt="typescript" />
              <img src={githubicon} alt="github" />
            </Icon>
          </Skills>
        </Inner>
        <Object>
          <Box>
            <img src={object} alt="오브제" />
          </Box>
        </Object>
      </Wrapper>
    </>
  );
};

export default Profile;
