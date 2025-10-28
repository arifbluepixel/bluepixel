import { RenderingItem } from "@/lib/types";
import TiltCard from "@/components/shared/Tiltcard";

const Showcase = () => {
  const renderings: RenderingItem[] = [
    {
      id: 1,
      imageUrl: "/services/3d-rendering-1.jpg",
      text: "Stunning Product Visualization",
    },
    {
      id: 2,
      imageUrl: "/services/3d-rendering-2.jpg",
      text: "Realistic Architectural Rendering",
    },
    {
      id: 3,
      imageUrl: "/services/3d-rendering-3.jpg",
      text: "High-Quality Interior Design",
    },
    // Add more render images as needed
  ];

  return (
    <section className="bg-duck-bgblue">
      <div className="w-11/12 max-w-7xl mx-auto py-12 md:py-16 lg:py-20">
        <h2 className="font-semibold text-center text-white font-oswald text-4xl md:text-5xl mb-8">
          3D Product Rendering
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderings.map((render) => (
            <TiltCard key={render.id} render={render} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Separate component for the 3D tilt effect

export default Showcase;
