import { motion } from "framer-motion";
import { useNavigate } from "react-router";
function Batch({ details }) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => {
        navigate("/batch", { state: { details } });
      }}
      className="w-full h-full p-2 border-[1px] border-gray-600 text-white bg-[url('bg.mp4')] rounded-sm relative top-0"
    >
      <img
        src={details.name.split(" ")[0] + ".webp"}
        className="w-full h-full"
      ></img>
      <div className="absolute top-0 left-2 p-1 bg-black rounded-sm font-bunken text-md">
        {details.name}
      </div>
      <div className=" rounded-sm absolute top-0 p-1 right-2 bg-black font-bunken text-md">
        {details.price} INR
      </div>
      <div className="rounded-sm absolute p-1 bottom-0 left-2 bg-black font-bunken text-md">
        Duration- {details.duration} Months
      </div>
    </motion.div>
  );
}

export default Batch;
