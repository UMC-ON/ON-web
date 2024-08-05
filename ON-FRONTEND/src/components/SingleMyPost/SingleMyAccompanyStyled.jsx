import styled from 'styled-components';
import theme from '../../styles/theme';

export const PostWrapper = styled.div`
  flex-direction: column;
  height: 8.68rem;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const Delete = styled.span`
  grid-area: delete;
  color: #7a7a7a;
  font-family: Inter;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-decoration-line: underline;
  justify-self: right;
  margin-bottom: 0.4rem;
`;
export const PostContainer = styled.div`
  width: 22.375rem;
  height: 8.375rem;
  border-radius: 1.25rem;
  border: 1px solid #dfdfdf;
  background: linear-gradient(90deg, #d0d6da 0%, #e7ebed 29.9%, #fff 66.83%);
  box-sizing: border-box;
  display: grid;
  grid-template-areas:
    'img title title title'
    'img date num location'
    'img content content content'
    'img myinfo myinfo delete';
  grid-template-columns: 8.4375rem 1fr 1fr auto;
  grid-template-rows: 2.9rem 1.2rem 1.5fr 1.2rem;
  justify-content: space-between;
  align-content: center;
  justify-items: start;
  column-gap: 0.6rem;
  padding-right: 1rem;
`;

export const Title = styled.span`
  grid-area: title;
  align-self: center;
  margin-top: 0.88rem;
  text-align: left;
  display: -webkit-box;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #363636;
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.0175rem;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  align-self: end;
  span {
    margin-left: 0.13rem;
    color: #7a7a7a;
    font-family: Inter;
    font-size: 0.5rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.01rem;
  }
`;
export const Num = styled.div`
  display: flex;
  align-items: center;
  align-self: end;
  span {
    margin-left: 0.13rem;
    color: #7a7a7a;
    font-family: Inter;
    font-size: 0.5rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.01rem;
  }
`;
export const Location = styled.div`
  display: flex;
  align-items: center;
  align-self: end;
  span {
    margin-left: 0.13rem;
    color: #7a7a7a;
    font-family: Inter;
    font-size: 0.5rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.01rem;
  }
`;

export const ContentText = styled.span`
  grid-area: content;
  align-self: center;
  display: -webkit-box;
  width: 100%;
  overflow: hidden;
  color: #838383;
  text-overflow: ellipsis;
  word-wrap: break-word;
  font-family: Inter;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.0125rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: left;
  /* height: 2rem; */
  /* color: #838383;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.125rem */
  /* letter-spacing: 0.015rem;
  justify-self: start;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;

  white-space: normal;
  text-align: left;  */
`;

// export const ContentImg = styled.div`
//   height: 4rem;
//   width: 4rem;
//   border-radius: 1rem;
// `;
export const ContentImg = styled.img`
  grid-area: img;
  /* display: ${(props) => (props.showimg ? 'inline' : 'none')}; */
  height: 8.3rem;
  border-radius: 1.25rem;
  align-self: start;
`;

export const Info = styled.div`
  grid-area: myinfo;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.4rem;
  span {
    font-family: Inter;
    font-size: 0.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 0.75rem */
  }
`;

export const DateSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.11731 0C7.39345 0 7.61731 0.223858 7.61731 0.5V1.0292H8.64661C9.6212 1.0292 10.4113 1.81926 10.4113 2.79386V8.14648C10.4113 9.12108 9.6212 9.91114 8.64661 9.91114H1.76466C0.790065 9.91114 0 9.12108 0 8.14648V2.79386C0 1.81926 0.790066 1.0292 1.76466 1.0292H2.79403V0.5C2.79403 0.223858 3.01789 0 3.29403 0C3.57017 0 3.79403 0.223858 3.79403 0.5V1.0292H6.61731V0.5C6.61731 0.223858 6.84117 0 7.11731 0ZM1 2.79386C1 2.37155 1.34235 2.0292 1.76466 2.0292H8.64661C9.06892 2.0292 9.41127 2.37155 9.41127 2.79386V3.44089H1V2.79386ZM1 4.44089V8.14648C1 8.56879 1.34235 8.91114 1.76466 8.91114H8.64661C9.06892 8.91114 9.41127 8.56879 9.41127 8.14648V4.44089H1Z"
        fill="#7A7A7A"
      />
    </svg>
  );
};

export const NumSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
    >
      <path
        d="M0.5 7.76917C0.5 6.64336 1.41265 5.73071 2.53846 5.73071H5.07692C6.20273 5.73071 7.11538 6.64336 7.11538 7.76917V8.61533C7.11538 8.8065 6.96041 8.96148 6.76923 8.96148H0.846154C0.654978 8.96148 0.5 8.8065 0.5 8.61533V7.76917Z"
        stroke="#7A7A7A"
        stroke-linejoin="round"
      />
      <path
        d="M3.8078 4.03846C4.78492 4.03846 5.57704 3.24635 5.57704 2.26923C5.57704 1.29211 4.78492 0.5 3.8078 0.5C2.83069 0.5 2.03857 1.29211 2.03857 2.26923C2.03857 3.24635 2.83069 4.03846 3.8078 4.03846Z"
        stroke="#7A7A7A"
      />
      <path
        d="M8.52545 6.07696V1.84619H9.2434V6.07696H8.52545ZM6.76904 4.32055V3.6026H10.9998V4.32055H6.76904Z"
        fill="#7A7A7A"
      />
    </svg>
  );
};

export const LocationSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="12"
      viewBox="0 0 9 12"
      fill="none"
    >
      <path
        d="M1 11V1"
        stroke="#7A7A7A"
        strokeLinecap="round"
      />
      <path
        d="M8.27273 3.93706L1 1V7.36364L8.27273 3.93706Z"
        stroke="#7A7A7A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ProfileSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.70833 12V9.93199C2.70833 8.71304 3.67838 7.72488 4.875 7.72488H8.125C9.32162 7.72488 10.2917 8.71304 10.2917 9.93199V12C11.9319 10.798 13 8.83674 13 6.62133C13 2.96447 10.0899 0 6.5 0C2.91015 0 0 2.96447 0 6.62133C0 8.83674 1.06809 10.798 2.70833 12ZM8.66667 4.966C8.66667 6.18495 7.69662 7.17311 6.5 7.17311C5.30338 7.17311 4.33333 6.18495 4.33333 4.966C4.33333 3.74704 5.30338 2.75889 6.5 2.75889C7.69662 2.75889 8.66667 3.74704 8.66667 4.966Z"
        fill="#7A7A7A"
      />
    </svg>
  );
};
