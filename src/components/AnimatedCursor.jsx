import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    // Hide default cursor
    document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // Animate main cursor (immediate follow)
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0,
        ease: "none"
      });

      // Animate follower (delayed follow with smooth easing)
      gsap.to(follower, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        duration: 0.2
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        duration: 0.2
      });
    };

    // Handle hover effects on interactive elements
    const handleElementHover = () => {
      gsap.to(cursor, {
        scale: 0.5,
        duration: 0.2,
        ease: "power2.out"
      });
      gsap.to(follower, {
        scale: 2,
        duration: 0.2,
        ease: "power2.out"
      });
    };

    const handleElementLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      });
      gsap.to(follower, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleElementHover);
      el.addEventListener('mouseleave', handleElementLeave);
    });

    // Cleanup
    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleElementHover);
        el.removeEventListener('mouseleave', handleElementLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
          opacity: 0
        }}
      />
      
      {/* Follower circle */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-yellow-400 rounded-full pointer-events-none z-40"
        style={{
          transform: 'translate(-50%, -50%)',
          opacity: 0
        }}
      />
    </>
  );
};

export default AnimatedCursor;