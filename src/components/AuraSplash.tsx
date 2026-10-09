
"use client";

import { useState } from "react";

type AuraSplashProps = {
  mode: "simultaneous" | "sequential";
};

const corners = [
  "M 8 34 V 8 H 34",
  "M 66 8 H 92 V 34",
  "M 92 66 V 92 H 66",
  "M 34 92 H 8 V 66",
];

const letters = ["m", "y", "A", "u", "r", "a"];

export default function AuraSplash({ mode }: AuraSplashProps) {
  const [replay, setReplay] = useState(0);

  // Tiempos de la animación, en segundos
  const dotDuration = 0.9;
  const cornerStart = 1.0;
  const cornerDuration = mode === "sequential" ? 0.55 : 1.2;
  const cornerInterval = mode === "sequential" ? 0.55 : 0;

  const wordStart =
    cornerStart + cornerDuration + cornerInterval * 3 + 0.2;

  return (
    <div className="flex flex-col items-center gap-5">
      <div
        key={replay}
        className="flex flex-col items-center"
        style={{ width: 220 }}
      >
        <svg
          viewBox="0 0 100 100"
          width="180"
          height="180"
          fill="none"
          role="img"
          aria-label="Animación myAura"
        >
          <circle
            cx="50"
            cy="50"
            r="17"
            fill="#006064"
            className="aura-dot"
            style={{
              animationDuration: `${dotDuration}s`,
            }}
          />

          {corners.map((path, index) => (
            <path
              key={index}
              d={path}
              stroke="#080B0D"
              strokeWidth="6"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              pathLength={1}
              className="aura-corner"
              style={{
                animationDelay: `${
                  cornerStart + index * cornerInterval
                }s`,
                animationDuration: `${cornerDuration}s`,
              }}
            />
          ))}
        </svg>

        <div
          className="aura-wordmark"
          aria-label="myAura"
          style={{
            fontFamily: "var(--font-nunito), sans-serif",
          }}
        >
          {letters.map((letter, index) => (
            <span
              key={index}
              aria-hidden="true"
              className="aura-letter"
              style={{
                animationDelay: `${wordStart + index * 0.15}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={() => setReplay((value) => value + 1)}
        className="rounded-lg border border-zinc-300 px-5 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
      >
        Repetir
      </button>

      <style jsx>{`
        .aura-dot {
          transform-origin: 50% 50%;
          transform-box: fill-box;
          animation-name: growDot;
          animation-timing-function: ease-in-out;
          animation-fill-mode: both;
        }

        .aura-corner {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation-name: drawCorner;
          animation-timing-function: ease-in-out;
          animation-fill-mode: forwards;
        }

        .aura-wordmark {
          display: flex;
          justify-content: center;
          font-size: 70px;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #080b0d;
        }

        .aura-letter {
          display: inline-block;
          opacity: 0;
          animation: writeLetter 0.15s ease-out forwards;
        }

        @keyframes growDot {
          from {
            transform: scale(0.05);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes drawCorner {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes writeLetter {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
