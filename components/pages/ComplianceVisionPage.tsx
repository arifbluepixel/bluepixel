import Navbar from "../Home/Navbar";
import ComplianceVision from "../pagesExtra/complianceVision";
import BackToTop from "../shared/BackToTop";
import Footer from "../shared/footer/Footer";

const ComplianceVisionPage = () => {
  return (
    <>
      <Navbar />
      <ComplianceVision />
      <Footer />
      <BackToTop showText={false} showIcon={true} />
    </>
  );
};

export default ComplianceVisionPage;
