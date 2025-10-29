import { gsap } from "gsap";
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      gsap.to("#cursor", {
        x: clientX - 20 / 2,
        y: clientY - 20 / 2,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="cursor"
      className="fixed top-0 left-0 h-[20px] w-[20px] bg-black rounded-full pointer-events-none z-50 hidden md:block"
    />
  );
};

export default Cursor;
