import About_the_app from "@/components/About-the-app";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSectionLayout";
import FreeTrial from "@/components/Free-trial";
import FAQComponent from "@/components/FAQ";
import GetStartedComponent from "@/components/GetStarted";
import ProjectManagementComponent from "@/components/ProjectManagement";
import { cookies } from "next/headers";

export default function Home() {
  const theme = cookies().get('theme')?.value || 'light';
  return (
    <div>
      <Hero />
      <About_the_app />
      <FeatureSection 
        id="Feature1"
        imageUrl="/images/image_20.png"
        imageUrlDark="/images/image_20_dark.png"
        imageAlt="image for workflow feature"
        title="Revolutionize your workflow"
        theme={theme}
        description="We have designed our app for increased efficiency and it will help you to start getting more things done."
      />
      <FeatureSection 
        id="Feature2"
        imageUrl="/images/image_21.png"
        imageUrlDark="/images/image_21_dark.png"
        imageAlt="second feature image"
        title="Free template library included"
        theme={theme}
        description="We have got quite a few already made templates for better project management that you can use now."
        isReversed={true}
      />
      <FeatureSection 
        id="Feature3"
        imageUrl="/images/image_22.png"
        imageUrlDark="/images/image_22_dark.png"
        imageAlt="third feature image"
        title="Used by teams from all over the globe"
        theme={theme}
        description="Our app has been trusted by many diffrent teams from around the world and we have got some greate reviews."
      />
      <FreeTrial />
      <ProjectManagementComponent />
      <FAQComponent /> 
      <GetStartedComponent />
    </div>
  );
}
