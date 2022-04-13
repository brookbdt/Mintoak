import React, { useEffect, useState } from "react";
const CircularProgress = ({ size, strokeWidth, percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;

  return (
    <svg
      className="desktop:h-150 desktop:w-150 laptop:h-150 laptop:w-150 mobile:h-65 mobile:w-65"
      viewBox={viewBox}
    >
      <defs>
        <linearGradient id="MyGradient" gradientTransform="rotateX(45)">
          <stop offset="11.39%" stopColor="#A7CD7E" />
          <stop offset="95.33%" stopColor="#7BCD25" stopOpacity="0.20" />
        </linearGradient>
      </defs>
      <ellipse cx="125" cy="125" rx="95" ry="95" fill="url(#MyGradient)" />

      <circle
        fill="none"
        stroke={"url(#MyGradient)"}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`12px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={[dash, circumference - dash]}
        strokeLinecap="round"
        style={{ transition: "all 0.5s" }}
      />
      <text
        fill="#252525"
        fontSize="50px"
        x="50%"
        y="50"
        dy="90px"
        fontWeight="bold"
        textAnchor="middle"
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};
export default CircularProgress;
