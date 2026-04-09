import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  background: #fafafa;
`;

const Desc = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 150px 0 100px;
  @media (max-width: 1024px) {
    max-width: 700px;
  }
  @media (max-width: 768px) {
    max-width: 380px;
  }
  @media (max-width: 400px) {
    max-width: 300px;
  }
`;

const Title = styled.h1`
  font-size: 4.6rem;
  font-weight: 700;
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Tag = styled.div`
  p {
    display: flex !important;
    gap: 50px;
    margin-bottom: 12px;
    strong {
      width: 110px;
      display: inline-block;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
`;

const Text = styled.p`
  margin: 40px 0;
  line-height: 1.5;
`;

const BtnWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  .button a {
    display: flex;
    gap: 10px;
    padding: 10px 20px;
    border: 1px solid var(--black);
    transition: all 0.3s;
    cursor: pointer;
    svg {
      transition: transform 0.3s;
    }
    &:hover {
      background: var(--black);
      color: var(--white);

      svg {
        transform: translateX(6px);
      }
    }
  }
`;

const Detail = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  text-align: center;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const ProjectDetail = ({
  title,
  position,
  keyword,
  description,
  siteLink,
  codeLink,
  image,
}) => {
  return (
    <>
      <Wrapper>
        <Desc>
          <Title>{title}</Title>
          <Tag>
            <p>
              <strong>position</strong>
              <span>{position}</span>
            </p>
            <p>
              <strong>keyword</strong>
              <span>{keyword}</span>
            </p>
          </Tag>

          <Text>{description}</Text>

          <BtnWrap>
            <div className="button">
              <a href={siteLink} target="_blank">
                <span>Site</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>

            <div className="button">
              <a href={codeLink} target="_blank">
                <span>Code</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </BtnWrap>
        </Desc>

        <Detail>
          <img src={image} alt={title} />
        </Detail>
      </Wrapper>
    </>
  );
};

export default ProjectDetail;
