import Header from "../Home/Header";
import ZeroTolerance from "../pagesExtra/ZeroTolerance";
import BackToTop from "../shared/BackToTop";
import Footer from "../shared/footer/Footer";

const ZeroTolerancePage = () => {
  return (
    <>
      <Header />
      <ZeroTolerance />
      <Footer />
      <BackToTop showText={false} showIcon={true} />
    </>
  );
};

export default ZeroTolerancePage;
