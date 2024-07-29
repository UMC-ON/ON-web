import * as s from './LoadingStyled';

const Loading = () => {
  return (
    <s.PageWrapper>
      <s.LoadingWrapper>
        <s.SvgContainer
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 180 180"
          fill="none"
        >
          <g filter="url(#filter0_b_1043_5343)">
            <s.Circle
              cx="90"
              cy="90"
              r="90"
              fill="url(#paint0_linear_1043_5343)"
            />
          </g>
          <s.Path
            d="M110.329 68.4558L96.5175 76.4297L73.1562 52.269L78.0669 49.4339L110.329 68.4558Z"
            fill="white"
          />
          <s.Path
            d="M121.847 88.4052L108.035 96.3791L114.443 123.78L119.354 120.945L121.847 88.4052Z"
            fill="white"
          />
          <s.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M62.741 82.4264C62.3496 81.7484 62.5819 80.8814 63.2599 80.4899C68.684 77.3583 75.6199 79.2168 78.7515 84.6409L80.1691 87.0962C81.1477 88.7913 83.3152 89.372 85.0102 88.3934L133.503 60.3962C136.312 58.7745 139.526 58.4909 142.407 59.3476L125.147 69.3128C123.96 69.9979 123.554 71.5151 124.239 72.7016C124.924 73.8882 126.441 74.2947 127.627 73.6097L147.268 62.2704C147.923 62.9386 148.505 63.6993 148.995 64.5471C149.777 65.9032 149.313 67.6371 147.957 68.42L81.0492 107.049C79.3541 108.028 77.1867 107.447 76.2081 105.752L62.741 82.4264ZM104.596 84.0423C103.911 82.8558 104.318 81.3385 105.504 80.6535L110.415 77.8183C111.601 77.1333 113.118 77.5398 113.804 78.7264C114.489 79.9129 114.082 81.4301 112.895 82.1152L107.985 84.9503C106.798 85.6354 105.281 85.2288 104.596 84.0423ZM91.3859 88.8046C90.1994 89.4896 89.7929 91.0069 90.4779 92.1934C91.163 93.3799 92.6802 93.7865 93.8667 93.1014L98.7774 90.2663C99.9639 89.5812 100.37 88.064 99.6854 86.8775C99.0003 85.6909 97.4831 85.2844 96.2966 85.9694L91.3859 88.8046Z"
            fill="white"
          />
          <s.Line
            d="M26.4668 110.326C27.4489 109.759 48.1555 97.8037 58.386 91.8971"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <s.Line
            d="M62.9434 128.142C63.8311 127.63 82.5466 116.824 91.7934 111.485"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <s.Line
            d="M46.7178 117.049C47.3222 116.7 60.0647 109.343 66.3604 105.708"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <defs>
            <filter
              id="filter0_b_1043_5343"
              x="-10"
              y="-10"
              width="200"
              height="200"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feGaussianBlur
                in="BackgroundImageFix"
                stdDeviation="5"
              />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1043_5343"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1043_5343"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1043_5343"
              x1="0"
              y1="0"
              x2="180"
              y2="180"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D6EBFF" />
              <stop
                offset="1"
                stopColor="#C2C7FF"
              />
            </linearGradient>
          </defs>
        </s.SvgContainer>
        <s.LoadingText>잠시만 기다려주세요...</s.LoadingText>
      </s.LoadingWrapper>
    </s.PageWrapper>
  );
};
export default Loading;
