import React, { useRef, useEffect, useState } from "react";
import p5 from "p5";

// p5 sketch generated from prompts to ChatGPT -N //

const DecoderRing = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let outerRing = [];
      let innerRing = [];
      let outerRotation = 0; // Angle for outer ring rotation
      let innerRotation = 0; // Angle for inner ring rotation
      let ringRadius;
      let draggingOuter = false;
      let draggingInner = false;
      let lastMouseAngle;

      p.setup = () => {
        p.createCanvas(600, 600).parent(sketchRef.current);
        ringRadius = Math.min(p.width, p.height) * 0.4;

        // Populate both rings with letters A-Z
        for (let i = 0; i < 26; i++) {
          outerRing.push(String.fromCharCode(65 + i)); // Outer: A-Z
          innerRing.push(String.fromCharCode(65 + i)); // Inner: A-Z
        }
      };

      p.draw = () => {
        p.background(30);
        p.translate(p.width / 2, p.height / 2);

        // Draw outer ring
        p.push();
        p.rotate(outerRotation);
        p.noFill();
        p.stroke(200);
        p.ellipse(0, 0, ringRadius * 2);
        drawLetters(outerRing, ringRadius * 0.9, outerRotation);
        p.pop();

        // Draw inner ring
        p.push();
        p.rotate(innerRotation);
        p.noFill();
        p.stroke(200);
        p.ellipse(0, 0, ringRadius * 1.5);
        drawLetters(innerRing, ringRadius * 0.65, innerRotation);
        p.pop();

        // Display instructions
        p.fill(255);
        p.noStroke();
        p.textAlign(p.CENTER);
        p.textSize(16);
        p.text("Drag rings or use arrows to rotate", 0, p.height / 2 - 40);

        // Display the cipher key
        displayKey();
      };

      const drawLetters = (ring, radius, rotation) => {
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(16);
        p.fill(255);
        p.noStroke();
        for (let i = 0; i < ring.length; i++) {
          let angle = (p.TWO_PI / ring.length) * i + rotation;
          let x = p.cos(angle) * radius;
          let y = p.sin(angle) * radius;
          p.push();
          p.translate(x, y);
          p.rotate(-rotation); // Keep letters upright
          p.text(ring[i], 0, 0);
          p.pop();
        }
      };

      const displayKey = () => {
        let outerIndex = Math.round((-outerRotation / (p.TWO_PI / 26)) % 26 + 26) % 26;
        let innerIndex = Math.round((-innerRotation / (p.TWO_PI / 26)) % 26 + 26) % 26;

        let keyMapping = `Key: ${outerRing[outerIndex]} -> ${innerRing[innerIndex]}`;

        p.textAlign(p.CENTER);
        p.textSize(18);
        p.fill(255);
        // p.text(keyMapping, 0, p.height / 2 - 60);
      };

      p.mousePressed = () => {
        let mouseAngle = Math.atan2(p.mouseY - p.height / 2, p.mouseX - p.width / 2);
        let outerDistance = p.dist(p.mouseX, p.mouseY, p.width / 2, p.height / 2) - ringRadius;
        let innerDistance = p.dist(p.mouseX, p.mouseY, p.width / 2, p.height / 2) - ringRadius * 0.75;

        if (Math.abs(outerDistance) < 50) {
          draggingOuter = true;
          lastMouseAngle = mouseAngle;
        } else if (Math.abs(innerDistance) < 50) {
          draggingInner = true;
          lastMouseAngle = mouseAngle;
        }
      };

      p.mouseDragged = () => {
        let mouseAngle = Math.atan2(p.mouseY - p.height / 2, p.mouseX - p.width / 2);
        let angleDelta = mouseAngle - lastMouseAngle;

        if (draggingOuter) {
          outerRotation += angleDelta;
        } else if (draggingInner) {
          innerRotation += angleDelta;
        }

        lastMouseAngle = mouseAngle;
      };

      p.mouseReleased = () => {
        draggingOuter = false;
        draggingInner = false;
      };
    };

    const myP5 = new p5(sketch);
    return () => myP5.remove();
  }, []);

  return <div ref={sketchRef}></div>;
};

export default DecoderRing;
