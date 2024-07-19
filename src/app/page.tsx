import LeftVerticalDiv from "@/components/LeftVerticalDiv";
import RightVerticalDiv from "@/components/RightVerticalDiv";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

export default function HomePage() {
  return (
    <>
      <Navbar />
      <LeftVerticalDiv />
      <RightVerticalDiv />
      <div id="right"></div>
      <div id="content">
        <main>
          <section className="h-screen" id="home"></section>
          <section className="h-screen" id="about"></section>
          <section className="h-screen" id="tech-stack"></section>
          <section className="h-screen" id="projects"></section>
          <section className="h-screen" id="contact"></section>
        </main>
        <footer></footer>
      </div>
    </>
  );
}
