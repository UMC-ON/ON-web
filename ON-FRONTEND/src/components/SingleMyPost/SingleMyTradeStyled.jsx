import styled from 'styled-components';

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
  margin-bottom: 0.88rem;
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
    'img title title'
    'img style style'
    'img location user'
    'img price delete';
  grid-template-columns: 8.4375rem auto auto;
  grid-template-rows: 2.2rem 1.1rem 1.1rem auto;
  justify-content: space-between;
  align-content: center;
  align-items: end;
  justify-items: baseline;
  column-gap: 0.4rem;
  padding-right: 1rem;
`;

export const TitleContainer = styled.div`
  grid-area: title;
  display: flex;
  align-self: end;
  align-items: center;
`;

export const Title = styled.span`
  text-align: left;
  display: -webkit-box;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: #363636;
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.0175rem;
`;

export const Time = styled.span`
  color: #7a7a7a;
  font-family: Inter;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.01rem;
  text-wrap: nowrap;
`;

export const TradingStyle = styled.div`
  grid-area: style;
  display: flex;
  span {
    margin-right: 0.1rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    color: #7a7a7a;
    text-overflow: ellipsis;
    font-family: Inter;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.0125rem;
  }
`;

export const Location = styled.div`
  grid-area: location;
  display: flex;
  align-items: center;
  span {
    color: #838383;
    font-family: Inter;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

export const User = styled.div`
  grid-area: user;
  display: flex;
  align-items: center;
  span {
    color: #838383;
    font-family: Inter;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

export const Price = styled.span`
  grid-area: price;
  color: #3e73b2;
  font-family: Inter;
  font-size: 1.1875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0.88rem;
`;

export const ContentImg = styled.img`
  grid-area: img;
  /* display: ${(props) => (props.showimg ? 'inline' : 'none')}; */
  height: 8.3rem;
  border-radius: 1.25rem;
  align-self: start;
`;

export const LocationSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M8.00856 5.91132C8.00856 7.03204 7.09176 7.94056 5.96082 7.94056C4.82989 7.94056 3.91309 7.03204 3.91309 5.91132C3.91309 4.7906 4.82989 3.88208 5.96082 3.88208C7.09176 3.88208 8.00856 4.7906 8.00856 5.91132Z"
        fill="#7A7A7A"
        fillOpacity="0.8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.96045 0C6.23659 0 6.46045 0.223858 6.46045 0.5V1.17641C6.46045 1.18503 6.46023 1.1936 6.4598 1.20212C8.69837 1.43239 10.4778 3.19429 10.7124 5.41197C10.7211 5.41153 10.7298 5.4113 10.7385 5.4113H11.4211C11.6972 5.4113 11.9211 5.63516 11.9211 5.9113C11.9211 6.18745 11.6972 6.4113 11.4211 6.4113H10.7385C10.7298 6.4113 10.7211 6.41108 10.7125 6.41064C10.478 8.62849 8.6985 10.3906 6.45981 10.6208C6.46023 10.6293 6.46045 10.6378 6.46045 10.6463V11.3227C6.46045 11.5989 6.23659 11.8227 5.96045 11.8227C5.68431 11.8227 5.46045 11.5989 5.46045 11.3227V10.6463C5.46045 10.6378 5.46067 10.6293 5.46109 10.6208C3.2226 10.3903 1.44331 8.62833 1.20885 6.41063C1.20015 6.41108 1.19139 6.4113 1.18258 6.4113H0.5C0.223858 6.4113 0 6.18745 0 5.9113C0 5.63516 0.223858 5.4113 0.5 5.4113H1.18258C1.1914 5.4113 1.20017 5.41154 1.20889 5.41199C1.4435 3.19444 3.22273 1.43262 5.4611 1.20216C5.46067 1.19363 5.46045 1.18505 5.46045 1.17641V0.5C5.46045 0.223858 5.68431 0 5.96045 0ZM5.96067 9.64638C8.0558 9.64638 9.73872 7.96567 9.73872 5.91148C9.73872 3.8573 8.0558 2.17659 5.96067 2.17659C3.86553 2.17659 2.18262 3.8573 2.18262 5.91148C2.18262 7.96567 3.86553 9.64638 5.96067 9.64638Z"
        fill="#7A7A7A"
        fillOpacity="0.8"
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
