import { cn } from "../../lib/utils";
import React from "react";

export interface BmArchitectureSvgProps {
  className?: string;
  width?: string;
  height?: string;
  text?: string;
  showCpuConnections?: boolean;
  lineMarkerSize?: number;
  animateText?: boolean;
  animateLines?: boolean;
  animateMarkers?: boolean;
  showLevels?: boolean;
}

const BmArchitecture = ({
  className,
  width = "100%",
  height = "100%",
  text = "BM",
  showCpuConnections = true,
  animateText = true,
  lineMarkerSize = 18,
  animateLines = true,
  animateMarkers = true,
  showLevels = true,
}: BmArchitectureSvgProps) => {
  return (
    <svg
      className={cn("text-muted overflow-visible", className)}
      width={width}
      height={height}
      viewBox="0 0 200 100"
    >
      {/* Paths */}
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="0.3"
        strokeDasharray="100 100"
        pathLength="100"
        markerStart="url(#bm-circle-marker)"
      >
        {/* 1st */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 10 20 h 79.5 q 5 0 5 5 v 30"
        />
        {/* 2nd */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 180 10 h -69.7 q -5 0 -5 5 v 30"
        />
        {/* 3rd */}
        <path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" />
        {/* 4th */}
        <path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" />
        {/* 5th */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20"
        />
        {/* 6th */}
        <path d="M 94.8 95 v -36" />
        {/* 7th */}
        <path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" />
        {/* 8th */}
        <path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" />
        {/* Animation For Path Starting */}
        {animateLines && (
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        )}
      </g>

      {/* 1. Blue Light */}
      <g mask="url(#bm-mask-1)">
        <circle
          className="bm-architecture bm-line-1"
          cx="0"
          cy="0"
          r="8"
          fill="url(#bm-blue-grad)"
        />
      </g>
      {/* 2. Yellow Light */}
      <g mask="url(#bm-mask-2)">
        <circle
          className="bm-architecture bm-line-2"
          cx="0"
          cy="0"
          r="8"
          fill="url(#bm-yellow-grad)"
        />
      </g>
      {/* 3. Pinkish Light */}
      <g mask="url(#bm-mask-3)">
        <circle
          className="bm-architecture bm-line-3"
          cx="0"
          cy="0"
          r="8"
          fill="url(#bm-pinkish-grad)"
        />
      </g>
      {/* 4. White Light */}
      <g mask="url(#bm-mask-4)">
        <circle
          className="bm-architecture bm-line-4"
          cx="0"
          cy="0"
          r="8"
          fill="url(#bm-white-grad)"
        />
      </g>
      {/* 5. Green Light */}
      <g mask="url(#bm-mask-5)">
        <circle
          className="bm-architecture bm-line-5"
          cx="0"
          cy="0"
          r="8"
          fill="url(#bm-green-grad)"
        />
      </g>
      {/* 6. Orange Light */}
      <g mask="url(#bm-mask-6)">
        <circle
          className="bm-architecture bm-line-6"
          cx="0"
          cy="0"
          r="8"
          fill="url(#bm-orange-grad)"
        />
      </g>
      {/* 7. Cyan Light */}
      <g mask="url(#bm-mask-7)">
        <circle
          className="bm-architecture bm-line-7"
          cx="0"
          cy="0"
          r="8"
          fill="url(#bm-cyan-grad)"
        />
      </g>
      {/* 8. Rose Light */}
      <g mask="url(#bm-mask-8)">
        <circle
          className="bm-architecture bm-line-8"
          cx="0"
          cy="0"
          r="8"
          fill="url(#bm-rose-grad)"
        />
      </g>
      
      {/* BM Box */}
      <g>
        {/* connections */}
        {showCpuConnections && (
          <g fill="url(#bm-connection-gradient)">
            <rect x="93" y="37" width="2.5" height="5" rx="0.7" />
            <rect x="104" y="37" width="2.5" height="5" rx="0.7" />
            <rect
              x="116.3"
              y="44"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(90 116.25 45.5)"
            />
            <rect
              x="122.8"
              y="44"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(90 116.25 45.5)"
            />
            <rect
              x="104"
              y="16"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(180 105.25 39.5)"
            />
            <rect
              x="114.5"
              y="16"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(180 105.25 39.5)"
            />
            <rect
              x="80"
              y="-13.6"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(270 115.25 19.5)"
            />
            <rect
              x="87"
              y="-13.6"
              width="2.5"
              height="5"
              rx="0.7"
              transform="rotate(270 115.25 19.5)"
            />
          </g>
        )}
        
        {/* Main BM Rectangle */}
        <rect
          x="85"
          y="40"
          width="30"
          height="20"
          rx="2"
          fill="#181818"
          filter="url(#bm-light-shadow)"
        />
        
        {/* Levels */}
        {showLevels && (
           <g fontSize="2.5" fill="#a0a0a0" fontWeight="bold">
             {/* Top row V1-V5 */}
             <rect x="86.5" y="41.5" width="4" height="3" rx="0.5" fill="#333" />
             <text x="87.5" y="43.8">V1</text>
             <rect x="91.5" y="41.5" width="4" height="3" rx="0.5" fill="#333" />
             <text x="92.5" y="43.8">V2</text>
             <rect x="96.5" y="41.5" width="4" height="3" rx="0.5" fill="#333" />
             <text x="97.5" y="43.8">V3</text>
             <rect x="101.5" y="41.5" width="4" height="3" rx="0.5" fill="#333" />
             <text x="102.5" y="43.8">V4</text>
             <rect x="106.5" y="41.5" width="4" height="3" rx="0.5" fill="#333" />
             <text x="107.5" y="43.8">V5</text>
             
             {/* Bottom row V6-V10 */}
             <rect x="86.5" y="55.5" width="4" height="3" rx="0.5" fill="#333" />
             <text x="87.5" y="57.8">V6</text>
             <rect x="91.5" y="55.5" width="4" height="3" rx="0.5" fill="#333" />
             <text x="92.5" y="57.8">V7</text>
             <rect x="96.5" y="55.5" width="4" height="3" rx="0.5" fill="#333" />
             <text x="97.5" y="57.8">V8</text>
             <rect x="101.5" y="55.5" width="4" height="3" rx="0.5" fill="#333" />
             <text x="102.5" y="57.8">V9</text>
             <rect x="106.5" y="55.5" width="4.5" height="3" rx="0.5" fill="#333" />
             <text x="107" y="57.8">V10</text>
           </g>
        )}

        {/* BM Text */}
        <text
          x="94"
          y="52.5"
          fontSize="7"
          fill={animateText ? "url(#bm-text-gradient)" : "white"}
          fontWeight="600"
          letterSpacing="0.05em"
        >
          {text}
        </text>
      </g>
      {/* Masks */}
      <defs>
        <mask id="bm-mask-1">
          <path
            d="M 10 20 h 79.5 q 5 0 5 5 v 24"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="bm-mask-2">
          <path
            d="M 180 10 h -69.7 q -5 0 -5 5 v 24"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="bm-mask-3">
          <path
            d="M 130 20 v 21.8 q 0 5 -5 5 h -10"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="bm-mask-4">
          <path
            d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="bm-mask-5">
          <path
            d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="bm-mask-6">
          <path d="M 94.8 95 v -36" strokeWidth="0.5" stroke="white" />
        </mask>
        <mask id="bm-mask-7">
          <path
            d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        <mask id="bm-mask-8">
          <path
            d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20"
            strokeWidth="0.5"
            stroke="white"
          />
        </mask>
        {/* Gradients */}
        <radialGradient id="bm-blue-grad" fx="1">
          <stop offset="0%" stopColor="#cbb7fb" />
          <stop offset="50%" stopColor="#4f28ad" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="bm-yellow-grad" fx="1">
          <stop offset="0%" stopColor="#e9e5dd" />
          <stop offset="50%" stopColor="#714cb6" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="bm-pinkish-grad" fx="1">
          <stop offset="0%" stopColor="#830CD1" />
          <stop offset="50%" stopColor="#FF008B" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="bm-white-grad" fx="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="bm-green-grad" fx="1">
          <stop offset="0%" stopColor="#cbb7fb" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="bm-orange-grad" fx="1">
          <stop offset="0%" stopColor="#714cb6" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="bm-cyan-grad" fx="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="bm-rose-grad" fx="1">
          <stop offset="0%" stopColor="#cbb7fb" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter
          id="bm-light-shadow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feDropShadow
            dx="1.5"
            dy="1.5"
            stdDeviation="1"
            floodColor="black"
            floodOpacity="0.1"
          />
        </filter>
        <marker
          id="bm-circle-marker"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth={lineMarkerSize}
          markerHeight={lineMarkerSize}
        >
          <circle
            id="innerMarkerCircle"
            cx="5"
            cy="5"
            r="2"
            fill="black"
            stroke="#232323"
            strokeWidth="0.5"
          >
            {animateMarkers && (
              <animate attributeName="r" values="0; 3; 2" dur="0.5s" />
            )}
          </circle>
        </marker>
        {/* BM connection gradient */}
        <linearGradient
          id="bm-connection-gradient"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#4F4F4F" />
          <stop offset="60%" stopColor="#121214" />
        </linearGradient>
        {/* Add BM Text Gradient */}
        <linearGradient id="bm-text-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#666666">
            <animate
              attributeName="offset"
              values="-2; -1; 0"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
          <stop offset="25%" stopColor="white">
            <animate
              attributeName="offset"
              values="-1; 0; 1"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
          <stop offset="50%" stopColor="#666666">
            <animate
              attributeName="offset"
              values="0; 1; 2;"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export { BmArchitecture };
