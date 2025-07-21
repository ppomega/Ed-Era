import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import LectureLoader from "./lectures";

function TopicLoader() {
  const location = useLocation();
  const details = location.state.details;
  const [topics, setTopics] = useState([]);
  const [isClicked, click] = useState(false);
  async function getTopic() {
    const result = await axios.get(
      import.meta.env.VITE_SERVER + "/topics/" + details.name
    );
    setTopics(result.data);
  }
  useEffect(() => {
    getTopic();
  }, []);
  useEffect(() => {
    console.log(topics);
  }, [topics]);
  return (
    <div className="flex flex-row h-full  w-full absolute top-1/5 left-1/8 ">
      {" "}
      {topics ? (
        <>
          {topics.map((i) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => {
                  click(!isClicked);
                }}
                className="font-bunken  text-white bg-black/50 text-sm w-2/3 h-10 px-6 py-1 rounded-md border-[1px] border-gray-700"
              >
                {i.name}
                {isClicked ? <LectureLoader topic={i} /> : <></>}
              </motion.div>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default TopicLoader;
