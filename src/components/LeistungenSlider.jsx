import { useState } from "react";
import { motion } from "motion/react";

export default function LeistungenSlider() {
  //
  const data = [
    {
      title: "Branding",
      image:
        "https://framerusercontent.com/images/ClAOZsPbLm7Jq6KakmQIdVMCc.png?width=4000&height=3000",
    },
    {
      title: "Webdesign",
      image:
        "https://framerusercontent.com/images/fxn3p4sacEhfgwjtFvMRD3IYTU.png?width=4000&height=3000",
    },
    {
      title: "Marketing",
      image:
        "https://framerusercontent.com/images/fxn3p4sacEhfgwjtFvMRD3IYTU.png?width=4000&height=3000",
    },
  ];
  const [perc, setPerc] = useState(0);

  const yScroll = `-${100 * perc}%`;

  const container = {
    hidden: {},
    hover: {},
  };

  const text = {
    hidden: { y: 0 },
    hover: { y: -110 },
  };
  const text2 = {
    hidden: { y: 110 },
    hover: { y: 0 },
  };

  const items = data.map((item, itemIndex) => {
    return (
      <motion.div
        variants={container}
        key={itemIndex}
        initial="hidden"
        whileHover="hover"
        onHoverStart={() => {
          return setPerc(itemIndex);
        }}
        className="flex flex-col instrument-serif-regular text-8xl text-white pb-3 cursor-pointer h-26 w-full relative overflow-hidden"
      >
        <motion.span className="absolute left-0 top-0" variants={text}>
          {item.title}
        </motion.span>
        <motion.span className="absolute left-0 top-0" variants={text2}>
          {item.title}
        </motion.span>
      </motion.div>
    );
  });

  const images = data.map((item, Index) => (
    <img
      key={Index}
      src={item.image}
      className="w-full min-h-full object-cover"
    />
  ));

  return (
    <div className="flex items-end gap-12 h-[500px]">
      <div className="flex flex-col w-[60%] h-full overflow-hidden ">
        <motion.div
          variants={parent}
          animate={{ y: yScroll }}
          className="flex flex-col relative w-full h-full"
        >
          {" "}
          {images}
        </motion.div>
      </div>
      <div className="flex flex-col gap-4 w-[40%]">{items}</div>
    </div>
  );
}
