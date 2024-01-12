'use client';
import React, { useRef, useEffect, ReactNode } from 'react';
import Image from 'next/image'
import gsap from 'gsap';
import testImg from '/public/vercel.svg';

import '../app/handdrawn.css'; // Import the CSS file for styling

// Define the type for the component props
interface HandDrawnButtonProps {
    children?: ReactNode;
}

const HandDrawnMonitor: React.FC<HandDrawnButtonProps> = ({ children }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (button) {
            // Animation on hover
            button.addEventListener('mouseover', () => {
                gsap.to(button, {
                    duration: 0.5,
                    skewX: 10,
                    yoyo: true,
                    repeat: 1
                });
            });
        }
    }, []);

    return (
        <div>
            <button ref={buttonRef} className="hand-drawn-monitor">
                {children}
            </button>
            <Image
              src="/kys.jpg"
              alt="kys aura"
              width={640}
              height={360}
              priority
            />
        </div>
        
    );
}

export default HandDrawnMonitor;
