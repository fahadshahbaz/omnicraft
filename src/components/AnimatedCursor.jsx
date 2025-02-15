export default function FigmaCursor({ name, color, className }) {
  return (
    <div className={`absolute ${className}`}>
      <svg
        width="26"
        height="26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#a)">
          <path d="m7.5 17.5-2-12 10 6L10 13l-2.5 4.5Z" fill={color} />
          <path
            d="m5.757 5.071-.928-.557.178 1.068 2 12 .235 1.412.695-1.251 2.398-4.316 5.297-1.445 1.13-.308-1.005-.603-10-6Z"
            stroke="#fff"
          />
        </g>
        <defs>
          <filter
            id="a"
            x=".158"
            y=".528"
            width="24"
            height="24.959"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_4" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_1_4"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <span
        className="absolute top-6 left-5 px-3 py-2 text-base text-white whitespace-nowrap rounded-full"
        style={{ backgroundColor: color }}
      >
        {name}
      </span>
    </div>
  );
}
