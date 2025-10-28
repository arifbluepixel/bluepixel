import {
  After1,
  After2,
  After3,
  Before1,
  Before2,
  Before3,
} from "@/lib/constants/images";
import ServiceSample from "./ServiceSample";

export default function ServiceExamples() {
  return (
    <div className="bg-gray-300 overflow-hidden">
      <div className="w-11/12 max-w-7xl space-y-10 mx-auto py-8 md:py-12 lg:py-16 ">
        {/* Color Grading Image */}

        <ServiceSample
          bgcolor="bg-gray-300"
          title="Stand Out with Color Grading and Creative Image Manipulation"
          description="Elevate your personal brand with expertly color-graded and creatively enhanced visuals. Whether you're building a cohesive Instagram feed or producing eye-catching content, we adjust tones, enhance moods, and apply unique styles that reflect your aesthetic. From subtle retouching to bold visual transformations, we help you create scroll-stopping imagery that resonates with your audience."
          left={false}
          beforeImage={After3}
          afterImage={Before3}
          widthData={"90%"}
          heightData={350}
        />
        <hr />
        {/* Enhance Your Images */}
        <ServiceSample
          bgcolor="bg-gray-300"
          title="Restore Your Precious Images"
          description="Our expert team handles every image with meticulous care, using advanced restoration techniques to revive old, damaged, or faded photos. We breathe new life into your memories, preserving their original charm while enhancing clarity and detail."
          left={true}
          beforeImage={After1}
          afterImage={Before1}
          widthData={"90%"}
          heightData={400}
        />
        <hr />
        {/* Transform Your Images */}
        <ServiceSample
          bgcolor="bg-gray-300"
          title="Transform Your Images with Image Enhancement And Manipulation "
          description="Through advanced image enhancement and manipulation techniques, we fine-tune color balance, adjust saturation and brightness, and elevate overall tone and vibrancy. Our specialists also perform precise image masking to isolate and enhance individual elements, ensuring each image is visually striking and perfectly refined."
          left={false}
          beforeImage={After2}
          afterImage={Before2}
          widthData={"90%"}
          heightData={400}
        />

        {/* E-commerce ready Image */}
        {/* <hr /> */}
        {/* <ServiceSample
          bgcolor="bg-gray-300"
          title="E-commerce ready Image Retouching and Manipulation"
          description="Our expert image retouching and manipulation services can remove
              imperfections, adjust lighting and color, and create stunning
              effects that make your images pop. From simple touch-ups to
              complex image manipulations, our skilled team can help you enhance
              and transform your images ready for the web!"
          left={true}
          beforeImage={After3}
          afterImage={Before3}
          widthData={"90%"}
          heightData={350}
        /> */}
      </div>
    </div>
  );
}
