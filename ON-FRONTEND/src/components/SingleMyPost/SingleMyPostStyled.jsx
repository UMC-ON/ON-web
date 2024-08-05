import styled from 'styled-components';

export const PostWrapper = styled.div`
  height: 8.68rem;
  border: 0.5px solid transparent;
  border-image: linear-gradient(90deg, #ffffff 0%, #d9d9d9 50%, #fff 100%);
  border-image-slice: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`;
export const Delete = styled.span`
  position: absolute;
  bottom: 0.31rem;
  right: 1.81rem;
  color: #7a7a7a;
  font-family: Inter;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 0.75rem */
  text-decoration-line: underline;
`;
export const PostContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
  box-sizing: border-box;

  display: grid;
  grid-template-areas:
    'top top'
    'content img'
    'info img';
  grid-template-columns: 1fr auto;
  gap: 0.6rem;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

export const Top = styled.div`
  grid-area: top;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  overflow: hidden;
  color: #363636;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.0175rem;
`;

export const Time = styled.span`
  color: #7a7a7a;
  font-family: Inter;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  text-wrap: nowrap;
`;

export const ContentText = styled.span`
  grid-area: content;
  width: 100%;
  height: 3.375rem;
  color: #838383;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.125rem */
  letter-spacing: 0.015rem;
  justify-self: start;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
`;

// export const ContentImg = styled.div`
//   height: 4rem;
//   width: 4rem;
//   border-radius: 1rem;
// `;
export const ContentImg = styled.img`
  grid-area: img;
  display: ${(props) => (props.showimg ? 'inline' : 'none')};
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  align-self: start;
`;

export const Info = styled.div`
  grid-area: info;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    font-family: Inter;
    font-size: 0.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 0.75rem */
  }
`;

export const Nickname = styled.span`
  color: #7a7a7a;
  font-family: Inter;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const VerifiedSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      style={{ marginRight: '0.5rem' }}
    >
      <path
        d="M0 4C0 6.20914 1.79086 8 4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4Z"
        fill="url(#paint0_linear_1230_5896)"
      />
      <path
        d="M2 3.28L4.07407 6L6 2"
        stroke="white"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1230_5896"
          x1="0"
          y1="0"
          x2="8"
          y2="8"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D6EBFF" />
          <stop
            offset="1"
            stopColor="#C2C7FF"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const CommentSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      style={{ marginRight: '0.2rem' }}
    >
      <mask
        id="path-1-inside-1_1804_950"
        fill="white"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.64933 0.806641C0.290715 0.806641 0 1.12902 0 1.52669V7.78706V8.00711V10.4423C0 10.8816 0.52601 11.1074 0.844468 10.8047L3.03021 8.72715H9.09063C9.44924 8.72715 9.73996 8.40478 9.73996 8.00711V1.52669C9.73996 1.12902 9.44924 0.806641 9.09063 0.806641H0.64933Z"
        />
      </mask>
      <path
        d="M0.844468 10.8047L0.155532 10.0799L0.155531 10.0799L0.844468 10.8047ZM3.03021 8.72715V7.72715H2.63079L2.34128 8.00233L3.03021 8.72715ZM1 1.52669C1 1.57164 0.983377 1.63117 0.932817 1.68724C0.880755 1.74497 0.781786 1.80664 0.64933 1.80664V-0.193359C-0.356306 -0.193359 -1 0.676486 -1 1.52669H1ZM1 7.78706V1.52669H-1V7.78706H1ZM1 8.00711V7.78706H-1V8.00711H1ZM1 10.4423V8.00711H-1V10.4423H1ZM0.155531 10.0799C0.473987 9.77717 1 10.0029 1 10.4423H-1C-1 11.7604 0.578034 12.4376 1.5334 11.5295L0.155531 10.0799ZM2.34128 8.00233L0.155532 10.0799L1.5334 11.5295L3.71915 9.45197L2.34128 8.00233ZM9.09063 7.72715H3.03021V9.72715H9.09063V7.72715ZM8.73996 8.00711C8.73996 7.96216 8.75658 7.90262 8.80714 7.84656C8.8592 7.78882 8.95817 7.72715 9.09063 7.72715V9.72715C10.0963 9.72715 10.74 8.85731 10.74 8.00711H8.73996ZM8.73996 1.52669V8.00711H10.74V1.52669H8.73996ZM9.09063 1.80664C8.95817 1.80664 8.8592 1.74497 8.80714 1.68724C8.75658 1.63117 8.73996 1.57164 8.73996 1.52669H10.74C10.74 0.676486 10.0963 -0.193359 9.09063 -0.193359V1.80664ZM0.64933 1.80664H9.09063V-0.193359H0.64933V1.80664Z"
        fill="#92A5BC"
        mask="url(#path-1-inside-1_1804_950)"
      />
    </svg>
  );
};
