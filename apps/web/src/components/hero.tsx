import SplitText from "./ScreenText";
import BlurText from "./BlueText";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const handleAnimationCompleted = () => {
    console.log("Animation completed!");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#f8fafc] w-full overflow-hidden"
    >
      {/* Bottom Fade Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
        }}
      />
      {/* Your Content/Components */}
      <div className="container-custom text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            Hello, I'm <span className="block text-gray-600">Amandeep</span>
          </h1> */}
          <SplitText
            text="Azlan Ehtasham"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-center text-gray-950"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          {/* <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            A passionate fresher developer creating modern web experiences with
            clean code and thoughtful design.
          </p> */}
          <BlurText
            text="A passionate fresher developer creating modern web experiences with clean code and thoughtful design"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationCompleted}
            className="text-base sm:text-lg md:text-2xl mb-8 text-gray-600 font-medium drop-shadow-sm max-w-2xl mx-auto text-center"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-black text-white px-8 py-3 rounded-none hover:bg-gray-800 transition-colors duration-300 font-medium"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-black text-black px-8 py-3 rounded-none hover:bg-black hover:text-white transition-colors duration-300 font-medium"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
