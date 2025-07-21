import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";

function LoadBatch() {
  const [batch, setBatch] = useState([]);
  async function batchLoader() {
    const result = await axios.get(import.meta.env.VITE_SERVER + "/batches");
    setBatch(result.data);
  }
  useEffect(() => {
    batchLoader();
  }, []);
  useEffect(() => {
    console.log(batch);
  }, [batch]);

  return (
    <>
      {batch ? (
        <div className="gap-11.5 grid grid-cols-2 w-2/3 grid-rows-2 h-2/3 absolute top-1/6 left-1/6">
          {batch.map((i, k) => {
            return <Batch details={i}></Batch>;
          })}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
export default LoadBatch;
