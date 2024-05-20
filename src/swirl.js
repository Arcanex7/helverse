import React, { useRef, useEffect } from 'react';
import './index.css';

const SwirlCursor = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const hueRef = useRef(0); // Initial hue value

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    const createParticle = (x, y) => {
      const hue = hueRef.current;
      return {
        x: x,
        y: y,
        angle: Math.random() * 2 * Math.PI,
        speed: Math.random() * 2 + 1,
        radius: Math.random() * 2 + 1,
        alpha: 1,
        lightness: 50,
        color: hue,
      };
    };

    const handleMouseMove = (e) => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(e.clientX, e.clientY));
      }
      // Update the hue value for the next set of particles
      hueRef.current = (hueRef.current + 1) % 360;
    };

    const updateParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.alpha -= 0.02;
        p.lightness += 1; // Increase lightness as particle fades

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `hsla(${p.color}, 100%, ${p.lightness}%, ${p.alpha})`;
        ctx.fill();
      }
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="swirl-cursor-canvas"></canvas>;
};

export default SwirlCursor;
