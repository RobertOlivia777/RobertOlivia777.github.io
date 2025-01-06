import { FaMapSigns, FaVoicemail, FaWhatsapp } from "react-icons/fa";
import { Contact_Me } from "../constants";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {motion} from "framer-motion"

export default function Contact() {
  return (
    <div className="border-t border-stone-900 pb-40 my-24">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -50}}
        transition={{ duration: 1.5}}
        className="my-8 text-center text-2xl" id="contact">Get in Touch</motion.h2> 
        <div className="mt-0 flex-col text-center ">
        <motion.div 
         whileInView={{ opacity: 1, x: 0}}
         initial={{ opacity: 0, x: -100}}
         transition={{ duration: 1}}
        className="flex justify-center items-center tracking-tight">
            <FaLocationDot className="mx-2 text-stone-400"/>
            <p className=" text-stone-600">
                {Contact_Me.address}</p>
            </motion.div>
            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100}}
            transition={{ duration: 1.5}}
            className="flex justify-center items-center tracking-tighter">
                <FaWhatsapp className="mx-1 text-xl text-stone-500"/>
                <p className="my-1 text-stone-500">               
            {Contact_Me.whatsapp}</p>
            </motion.div>
            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{ duration: 1}}
            className="flex justify-center items-center">
                <MdEmail className="mx-1 text-xl text-stone-400"/>
            <a href="https://mail.google.com/mail" className="text-md text-stone-400 hover:text-stone-600">
                {Contact_Me.email}
            </a>
            </motion.div>
        </div>   
    </div>
  )
}



