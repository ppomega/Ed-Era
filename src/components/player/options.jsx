import { motion } from "framer-motion";
function Options(props) {
  console.log(props);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute  bottom-30  right-0 z-50 font-bunken  bg-black  text-xs text-white h-12 w-28"
    >
      {props.options.map((i, k) => {
        console.log(i.bitrateList);
        return (
          <div
            key={i.bitrateList[0].id}
            className="py-2 px-7 bg-black"
            onClick={(e) => {
              e.stopPropagation();
              props.select.current.setRepresentationForTypeById(
                "video",
                i.bitrateList[0].id,
                true
              );
            }}
          >
            {i.bitrateList[0].height}p
          </div>
        );
      })}
    </motion.div>
  );
}
export default Options;
