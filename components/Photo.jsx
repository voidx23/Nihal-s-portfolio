"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}
                    className="w-[290px] h-[290px] xl:w-[490px] xl:h-[490px] mix-blend-lighten absolute" >

                    <Image
                        src="/photo.png"
                        priority
                        quality={100}
                        alt="photo"
                        className="object-contain"
                        fill
                    />
                </motion.div>
            </motion.div>

            {/* circle */}
            <motion.svg
                className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.rect
                    x="10" y="4" width="490" height="490" rx="80"
                    stroke="#00ff99" strokeWidth="7" fill="none"
                    initial={{ pathLength: 0, stroke: "#00ff99", rotate: 0, scale: 0.8 }}
                    animate={{
                        pathLength: 1,
                        stroke: ["#00ff99", "#00ff88", "#00ffff"],  // Changes colors as it animates
                        rotate: [0, 10, -10, 0],                    // Subtle rocking effect with rotation
                        scale: 1,                                   // Scale up to original size
                        transition: {
                            pathLength: { duration: 2, delay: 1 },    // Path length animation with delay
                            stroke: { duration: 3, repeat: Infinity, ease: "easeInOut" },  // Infinite color change loop // Smooth rotation effect
                            scale: { duration: 1, ease: "easeInOut" },  // Scale animation
                        }
                    }}
                    strokeDasharray="10 10"  // Dashed stroke
                />

            </motion.svg>
        </div>
    )
}

export default Photo