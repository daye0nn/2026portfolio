import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Inner = styled.nav`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 10rem);
  height: 5.6rem;
  display: flex;
  justify-content: space-between;
  border-radius: 1.2rem;
  align-items: center;
  padding: 0 2%;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); //사파리 호환성
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    inset 0 0 60px rgba(255, 255, 255, 0.3),
    inset 0 0 60px rgba(255, 255, 255, 0.3),
    0 4px 20px rgba(0, 0, 20, 0.2);
  z-index: 10;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 2.4rem;
  button {
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
    color: inherit;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 4rem;

  li button {
    transition: all 0.3s ease;
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
    color: inherit;
  }

  &:hover li button {
    opacity: 0.5;
    filter: blur(2px);
  }

  li button:hover {
    opacity: 1;
    filter: blur(0);
  }
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const move = (id) => {
    navigate(`/#${id}`);
  };
  return (
    <>
      <Inner>
        <Logo>
          <h1>
            <button onClick={() => move("intro")}>DAYEON</button>
          </h1>
        </Logo>
        <Menu>
          <li>
            <button onClick={() => move("about")}>About Me</button>
          </li>
          <li>
            <button onClick={() => move("project")}>Project</button>
          </li>
          <li>
            <button onClick={() => move("contact")}>Contact</button>
          </li>
        </Menu>
      </Inner>
    </>
  );
};

export default Header;
