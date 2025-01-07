import { div } from 'framer-motion/client';
import React from 'react';
import {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function BackToTop() {
    const [BackToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 80) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
    <div className="fixed justify-center items-center z-10">
        {BackToTopButton && (
            <button className="fixed bottom-6 right-6 w-12 h-12 rounded-full  bg-purple-800 opacity-70 focus:outline-none focus:ring focus:ring-purple-700"  onClick={scrollUp}><span className="block w-5 h-5 border-t-2 border-l-2 rotate-45 ml-3.5 mt-2 text-slate-500"></span>
            </button>
        )}
    </div>
    )
        }
    export default BackToTop;
    
