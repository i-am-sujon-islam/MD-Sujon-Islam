import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { projectArray } from "../constant";
import ArchiveCard from "./ArchiveCard";
import Container from "./Container";
const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  const displayedArray = showMore ? projectArray : projectArray.slice(0, 6);
  const projectContainerRef = useRef(null);

  const handleShow = () => {
    if (showMore) {
      setShowMore(false);
      projectContainerRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      setShowMore(true);
    }
  };
  return (
    <Container className=" py-24 max-w-5xl mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold">Other Noteworthy Projects</h2>
        <p className="text-sm text-designColor tracking-wide">
          view the archive
        </p>
      </div>
      <div
        ref={projectContainerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:px-10"
      >
        <AnimatePresence>
          {displayedArray?.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ArchiveCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <button
          onClick={handleShow}
          className="w-36 h-12 rounded-sm text-designColor border border-designColor hover:bg-hoverColor duration-300"
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </Container>
  );
};

export default Archive;
