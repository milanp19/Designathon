import Navbar from "../components/Navbar";
import "./App.css";
import Ellipse1 from "./decorations/Ellipse1";
import Ellipse2 from "./decorations/Ellipse2";
import Ellipse3 from "./decorations/Ellipse3";

function App() {
  return (
    <>
      <section className="magicpattern text-center bg-background text-white h-screen py-19 relative overflow-x-hidden overscroll-none">
        <Navbar />
        <Ellipse1 />
        <Ellipse2 />
        <Ellipse3 />

        <h1 className="text-white font-designer-font text-8xl mt-44">
          Designathon
        </h1>
        <p className="mt-12">Bigger . Grander . Wider</p>
      </section>

      <section className="h-screen bg-background text-white p-10 flex justify-center mt-[50px]">
        <div className="flex justify-center items-center p-40 relative w-[1200px] h-[300px] bg-[radial-gradient(circle_at_0%_7%,#161A32_0%,#5841A8_57.4%,#161B33_100%)] rounded-bl-[100px] rounded-tr-[100px]">
          <h1 className="absolute -top-5 -left-20 -rotate-30 text-4xl text-center">What is <br /><span className="text-accent">Designathon?</span></h1>
          <p>
            An in-person action packed design hackathon where students and
            aspiring designers are given a platform to experience real-life
            design problems and master the art of creating usable, viable, and
            empathetic design solutions while having a great deal of fun for 12
            hours straight.
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
