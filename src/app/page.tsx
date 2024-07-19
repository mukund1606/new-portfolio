import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

export default function HomePage() {
  return (
    <>
      <Navbar />
      <section
        className="flex h-screen items-center justify-center text-lightest-slate"
        id="home"
      >
        This is my coneteakjbdfjhabd
      </section>
      <section className="h-screen" id="about"></section>
      <section className="h-screen" id="tech-stack"></section>
      <section className="h-screen" id="projects"></section>
      <section className="h-screen" id="contact"></section>
    </>
  );
}
