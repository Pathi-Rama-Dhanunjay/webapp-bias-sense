import React, { useEffect, useRef } from 'react';

const NetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let nodes = [];
    let width, height;

    const NODE_COUNT = Math.min(Math.floor(window.innerWidth / 15), 80);
    const CONNECTION_DISTANCE = 180;
    const MOUSE_DISTANCE = 200;

    let mouse = { x: null, y: null };

    class Node {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_DISTANCE) {
            const force = (MOUSE_DISTANCE - dist) / MOUSE_DISTANCE;
            this.vx -= dx * force * 0.01;
            this.vy -= dy * force * 0.01;
          }
        }

        // Friction to prevent crazy speed
        this.vx *= 0.99;
        this.vy *= 0.99;

        this.pulse += this.pulseSpeed;
      }

      draw() {
        const pulseVal = Math.sin(this.pulse) * 0.5 + 0.5;
        const opacity = 0.4 + pulseVal * 0.4;

        // Draw glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 3);
        gradient.addColorStop(0, `rgba(255, 153, 0, ${opacity})`);
        gradient.addColorStop(1, 'rgba(255, 153, 0, 0)');

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 200, 80, ${0.8 + pulseVal * 0.2})`;
        ctx.fill();
      }
    }

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push(new Node());
      }
    };

    const drawConnections = () => {
      const time = Date.now() * 0.001;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.5;

            // Animated gradient line
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);

            // "Flowing" highlight effect
            const offset = (time % 2) / 2;
            const stop1 = Math.max(0, offset - 0.2);
            const stop2 = offset;
            const stop3 = Math.min(1, offset + 0.2);

            gradient.addColorStop(0, `rgba(255, 140, 0, ${opacity * 0.6})`);
            gradient.addColorStop(stop1, `rgba(255, 140, 0, ${opacity * 0.6})`);
            gradient.addColorStop(stop2, `rgba(255, 220, 120, ${opacity * 2.5})`); // Bright golden highlight
            gradient.addColorStop(stop3, `rgba(255, 140, 0, ${opacity * 0.6})`);
            gradient.addColorStop(1, `rgba(255, 140, 0, ${opacity * 0.6})`);

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none',
        opacity: 0.95
      }}
    />
  );
};

export default NetworkBackground;
