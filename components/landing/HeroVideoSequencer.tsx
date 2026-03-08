'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VIDEO_CLIPS = [
    {
        id: 1,
        url: "https://assets.mixkit.co/videos/15858/15858-720.mp4",
        title: "Document Review"
    },
    {
        id: 2,
        url: "https://assets.mixkit.co/videos/17049/17049-720.mp4",
        title: "Legal Authority"
    },
    {
        id: 3,
        url: "https://assets.mixkit.co/videos/16104/16104-720.mp4",
        title: "Team Collaboration"
    }
];

export default function HeroVideoSequencer() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % VIDEO_CLIPS.length);
        }, 6000); // Increased to 6 seconds for more cinematic feel

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-black">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={VIDEO_CLIPS[index].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }} // Lowered opacity for deeper blacks/contrast
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }} // Slower transition for cinematic feel
                    className="absolute inset-0 w-full h-full"
                >
                    <video
                        key={VIDEO_CLIPS[index].url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
                    >
                        <source src={VIDEO_CLIPS[index].url} type="video/mp4" />
                    </video>
                </motion.div>
            </AnimatePresence>

            {/* Overlays to match Harvey's high-contrast look */}
            <div className="absolute inset-0 bg-black/30" /> {/* Darkening overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />
        </div>
    );
}
