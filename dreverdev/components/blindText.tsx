"use client";

import { useEffect, useState } from "react";

export default function BlindText() {
    const words = [{word: "innovative", color: "secondary"}, {word: "expandable", color: "success"}, {word: "up-to-date", color: "warning"}, {word: "modernized", color: "danger"} ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [])

    return (
        <h3 className="text-4xl md:text-8xl">
            <span>I build </span>
            <span id="blindText" className={`transition-colors whitespace-pre text-${words[currentIndex].color}`}>{words[currentIndex].word}</span>
            <div> web applications.</div>
        </h3>
    )
}