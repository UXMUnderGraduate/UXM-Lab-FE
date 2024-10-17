'use client';
import AboutLab from "@/components/about/AboutLab";
import Heading from "@/components/ui/Heading";

export default function Home() {
  return (
    <>
      <Heading>About Lab</Heading>
      <article className="about-lab-article">
        <AboutLab/>
      </article>   
    </>
  );
}