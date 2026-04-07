import ProjectDetail from "../components/ProjectDetail";
import zipdetail from "../images/zipDetail.jpg";
import { useEffect } from "react";

const ZipPage = () => {
  useEffect(() => {
    if (window.lenis) {
      //immediate 애니메이션 없이 즉시 이동
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, []);
  return (
    <>
      <ProjectDetail
        title="ZIP."
        position="Login & Logon, (OTT)Category"
        keyword="#웹사이트 #반응형웹 #UI/UX #Figma #React"
        description="ZIP.은 패션 매거진의 인마이백 영상 속 제품을 기반으로, 스타의 실제 사용템만을 선별하여 소개하고 판매하는 OTT와 커머스를 결합한 플랫폼입니다."
        siteLink="https://zip-project-ddd42.firebaseapp.com/"
        codeLink="https://github.com/daye0nn/ZIP."
        image={zipdetail}
      />
    </>
  );
};

export default ZipPage;
