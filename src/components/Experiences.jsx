import { Experiences_List } from "../constants";
import {motion} from "framer-motion"

export default function Experiences() {
  return (
    <div className="pb-24 pt-12 my-24">
      <motion.h2 
      whileInView={{ opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100}}
      transition={{ duration: 1.5}}
      className="mt-24 mb-10 text-center text-3xl" id="experiences">Experiences</motion.h2>
      <div>
        {Experiences_List.map((experience, index) => (
          <div key={index} className="mb-4 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{ duration: 1}}
            className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">
                {experience.year}
              </p>
            </motion.div>
            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100}}
            transition={{ duration: 1.5}}
            className="w-full lg:w-3/4">
              <h3 className="mb-2 text-md font-semibold text-stone-100">
                {experience.role} -{" "}
                <span className="text-md font-light text-stone-200">
                {experience.company}
                </span>
              </h3>
              <p className="mb-2 text-sm text-stone-400">
                {experience.description}
              </p>
            </motion.div>
          </div>
        )
      )}
      </div>
    </div>
  )
}


 
