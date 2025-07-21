import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
function LectureLoader({ topic }) {
  const [lecture, setLect] = useState([]);
  const naviagte = useNavigate();
  async function getLectures() {
    const result = await axios.get(
      import.meta.env.VITE_SERVER + "/lecture/" + topic.batch + "/" + topic.name
    );
    setLect(result.data);
  }
  useEffect(() => {
    getLectures();
  }, []);
  useEffect(() => {
    console.log(lecture);
  }, [lecture]);
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative top-5"
    >
      {lecture ? (
        <>
          {lecture.map((i, k) => {
            return (
              <div
                onClick={() => {
                  naviagte("/play", { state: { i } });
                }}
                className="font-bunken flex   text-white  text-sm w-2/3 h-10  py-1 rounded-md border-[1px] border-gray-700"
              >
                {i.status == 1 ? (
                  <img src="play.png" className="px-4" />
                ) : (
                  <img src="live-stream.png" className="px-4" />
                )}{" "}
                Lecture {k + 1}
              </div>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </motion.div>
  );
}

export default LectureLoader;
