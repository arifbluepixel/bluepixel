import Header from "../Home/Header";
import ComplianceVision from "../pagesExtra/complianceVision";
import BackToTop from "../shared/BackToTop";
import Footer from "../shared/footer/Footer";

const ComplianceVisionPage = () => {
  return (
    <>
      <Header />
      <ComplianceVision />
      <Footer />
      <BackToTop showText={false} showIcon={true} />
    </>
  );
};

export default ComplianceVisionPage;
