import Header from "../Home/Header";
import ProductsHero from "../pagesExtra/ProductsHero";
import ProductsList from "../products/ProductsList";
import BackToTop from "../shared/BackToTop";
import Footer from "../shared/footer/Footer";

const ProductsPage = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen mt-16 md:mt-10 pt-12 bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-800 dark:to-gray-800">
        <ProductsHero />
        <ProductsList />
      </section>
      <Footer />
      <BackToTop showText={false} showIcon={true} />
    </>
  );
};

export default ProductsPage;
