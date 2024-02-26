import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const TypedAnimation = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['React is a Awesome library'],
            typeSpeed: 50,
            startDelay: 0,
            backSpeed: 70,
            backDelay: 1000,
            showCursor: true,
            cursorChar: '|',
            loop: true,
            loopCount: Infinity,

            // shuffle: false,
            // fadeOut: false,
            // fadeOutClass: 'typed-fade-out',
            // fadeOutDelay: 500,
            // autoInsertCss: true,

        });

        // Clean up
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <span ref={el}></span>
        </div>
    );
}

export default TypedAnimation