import profilePic from "../assets/Foto_crop.png"
import {Hero_Content} from "../constants/index.js"
import {motion} from "framer-motion";
import resume from "../assets/Robert Sanjaya Resume.pdf";

const containerVariants ={
    hidden: {opacity: 0, x: -100},
    visible: {opacity: 1, x: 0,
        transition: {
            duration: 0.5, 
            staggerChildren: 0.5,
        }
    }
}

const childVariants = {
    hidden: {opacity: 0, x: -100},
    visible: {opacity: 1, x: 0,
        transition: {
            duration: 0.5, }
    }
}

const Hero = () => {
  return (
    <div className="pb-20 my-30 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full px-4 lg:w-1/2">
                <div className="flex justify-center w-70 h-70">
                    <motion.img src={profilePic} alt="ProfilePic" className="border border-stone-700 rounded-2xl" 
                    width={500}
                    height={500}
                    initial={{ x: 100, opacity: 0}}
                    animate={{ x: 0, opacity: 1}}
                    transition={{ duration: 0.8, delay: 1}}/>
                </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col items-center lg:items-start mt-8">
                    <motion.h2 
                    variants={childVariants}
                    className="pb-2 text-4xl uppercase tracking-tighter lg:text-5xl">Robert Sanjaya                     
                    </motion.h2>
                    <motion.span 
                    variants={childVariants}
                    className="bg-gradient-to-r from-stone-300 to-stone-700 bg-clip-text text-3xl tracking-tight text-transparent">
                    Creative UI Developer
                    </motion.span>
                    <motion.p 
                    variants={childVariants}
                    className="my-2 max-w-lg py-6 text-xl leading-relaxed bg-gradient-to-r from-stone-300 to-stone-700 bg-clip-text tracking-tighter text-transparent">
                    {Hero_Content}
                    </motion.p>
                    <motion.a 
                    variants={childVariants}
                    href={resume} download="Robert_Sanjaya_Resume" className="bg-white rounded-full p-3 text-sm text-stone-800 mb-10 hover:bg-slate-500 hover:text-white">
                    Download Resume
                    </motion.a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero


