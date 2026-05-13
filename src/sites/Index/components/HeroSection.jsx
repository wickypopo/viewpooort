import StaggerText from "../../../components/StaggerText";
import Button from "../../../components/Button";
import { motion } from "motion/react";
import useIsMobile from "../../../utils/useIsMobile";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function Herosection() {
  const isMobile = useIsMobile();
  return (
    <section className="flex flex-col items-center relative h-[80vh] lg:h-[90vh] w-[95vw] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 lg:pt-24 pt-12 overflow-hidden rounded-b-[80px]">
      <div className="relative z-20 flex flex-col justify-center items-center h-1/3 max-w-[1200px] mx-auto">
        <StaggerText
          textClass="xl:text-8xl lg:text-7xl text-5xl font-semibold text-slate-100 tracking-tight instrument-serif-regular"
          containerClass="flex flex-row justify-center flex-wrap"
          text="Premium Branding Agency"
          delay={0.6}
        />
        <StaggerText
          textClass="xl:text-8xl lg:text-7xl text-5xl font-semibold text-slate-50 tracking-tight instrument-serif-italic"
          containerClass="flex flex-row justify-center flex-wrap"
          text="for B2B Tech Scaleups."
          delay={1.6}
        />
        <div className="flex justify-center gap-4 mt-4 lg:mt-8">
          <Button
            variant="primary"
            text="Jetzt Anfragen"
            link="/kontakt"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.5 }}
          />
          <Button
            variant="secondary-white"
            text="Unsere Projekte"
            link="/projekte"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.8 }}
          />
        </div>
      </div>
      <motion.div
        initial={{
          y: 900,
        }}
        animate={{
          y: 50,
        }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 1,
        }}
        className="max-w-[1200px] h-[50vh] lg:h-2/3 rounded-t-4xl overflow-hidden z-20 relative"
      >
        <video
          src="https://framerusercontent.com/assets/6xonk83bbntp4ckkfrJBM72Kxo.mp4"
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.div
        initial={{
          borderRadius: 1000,
          scale: 0,
        }}
        animate={{
          borderRadius: 0,
          scale: 1,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.9,
          delay: 0.2,
        }}
        className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
      >
        {" "}
        <ShaderGradientCanvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
          pixelDensity={1.5}
          fov={50}
        >
          <ShaderGradient
            animate="on"
            axesHelper="off"
            bgColor1="#000000"
            bgColor2="#000000"
            brightness={1.2}
            cAzimuthAngle={180}
            cDistance={1.99}
            cPolarAngle={120}
            cameraZoom={1}
            color1="#000f36"
            color2="#7AB8FF"
            color3="#8bb8f1"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            fov={45}
            frameRate={10}
            gizmoHelper="hide"
            grain="on"
            lightType="3d"
            pixelDensity={1}
            positionX={0}
            positionY={1.8}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={0}
            rotationZ={-90}
            shader="defaults"
            type="waterPlane"
            uAmplitude={0}
            uDensity={1}
            uFrequency={5.5}
            uSpeed={0.1}
            uStrength={3}
            uTime={0.2}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </motion.div>
    </section>
  );
}
