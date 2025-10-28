import GalleryHero from "../Gallery/GalleryHero";
import ImageGrid from "../Gallery/ImageGrid";
import BackToTop from "../shared/BackToTop";
import Parallax from "../shared/Parallax";

const PhotoGalleryPage = () => {
  return (
    <>
      <GalleryHero />
      <ImageGrid />
      <Parallax
        showExtraData={true}
        title="Let's Work Together !"
        description="Let's work to succeed together and achieve the same goals."
        contactButton={true}
        contactButtonText={`GET IN TOUCH`}
        parallaxOverlay=" bg-black opacity-30 dark:opacity-50"
        rounded={true}
      />
      <BackToTop showText={false} showIcon={true} />
    </>
  );
};

export default PhotoGalleryPage;
