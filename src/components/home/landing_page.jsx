import { useRef, useEffect } from "react";
import baffle from "baffle";
import { motion } from "motion/react";
function LandingPage() {
  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current) {
      const b = baffle(textRef.current);
      console.log(textRef);

      b.set({
        characters: "░▒█▓░<>Algo/█▒░█▓█░<>DSA▒",
        speed: 50,
      });
      setTimeout(() => {
        b.start();
        textRef.current.style.color = "white";
      }, 1000);
      textRef.current.textContent = textRef.current.textContent
        .split("")
        .reverse()
        .join("");
      setTimeout(() => {
        b.reveal();
      }, 1400);
    }
  }, []);

  return (
    <>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        src="bg1jpg.jpg"
        className="h-1/5 w-1/5 absolute bottom-0 left-2 z-10"
      />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        src="bg.jpg"
        className="h-1/4 w-1/3 absolute top-1/2 right-2 z-10"
      />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        src="bg3.jpg"
        className="h-full w-full absolute top-0 "
      />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        src="bg4.jpg"
        className="h-1/2 w-1/3 absolute top-1/3"
      />
      <div
        ref={textRef}
        className="text-8xl  font-metaluna absolute top-1/4 right-0 z-10"
      >
        are-de
      </div>
    </>
  );
}
export default LandingPage;
