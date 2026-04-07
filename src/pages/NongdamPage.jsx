import ProjectDetail from "../components/ProjectDetail";
import nongdamImg from "../images/nongdamDetail.jpg";
import { useEffect } from "react";

const NongdamPage = () => {
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, []);
  return (
    <>
      <ProjectDetail
        title="농장을 담다"
        position="Main & Category"
        keyword="#웹사이트 #반응형웹 #UI/UX #Figma #HTML #SCSS"
        description="농담은 수확 및 가공 과정에서 외형적 기준으로 버려지던 못난이 농산물을 선별해 합리적인 가격에 제공함으로써, 가치 소비와 합리적 소비를 동시에 실현하는 농산물 커머스 플랫폼입니다."
        siteLink="https://nongdam.netlify.app/index.html"
        codeLink="https://github.com/daye0nn/NongDam"
        image={nongdamImg}
      />
    </>
  );
};

export default NongdamPage;
