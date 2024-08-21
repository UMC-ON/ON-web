import styled from 'styled-components';
import theme from '../../styles/theme';

export const InfoWrapper = styled.div`
  margin: 1.5rem 1.5rem 0;
  width: 90%;
  height: auto;
  padding: 1.4rem 1.3rem;
  box-sizing: border-box;
  border-radius: 0.875rem;
  z-index: 1;

  display: grid;
  grid-template-areas:
    'info info'
    'preferredIcon preferredPeriod'
    'locationIcon location'
    'numIcon num';
  grid-template-columns: 1.5rem auto;
  row-gap: 0.7rem;

  border: 1px solid #ccc;
  background-color: ${(props) => props.color};
  box-shadow: 4px 4px 24px 0px rgba(62, 115, 178, 0.15);
  backdrop-filter: blur(20px);
`;

export const Info = styled.div`
  grid-area: info;
  margin-bottom: 0.6rem;
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0175rem;
  text-align: left;
`;

export const Finish = styled.div`
  display: inline-flex;
  width: 3rem;
  height: 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  flex-shrink: 0;
  background: ${theme.purpleGra};
  color: #fff;
  font-family: Inter;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.01125rem;
`;

export const PreferredPeriod = styled.div`
  grid-area: preferredPeriod;
  display: flex;
  justify-content: left;
  align-items: center;
`;
export const Location = styled.div`
  grid-area: location;
  display: flex;
  justify-content: left;
  align-items: center;
`;
export const NumberOfPeople = styled.div`
  grid-area: num;
  display: flex;
  justify-content: left;
  align-items: center;
`;
export const Category = styled.span`
  color: #7a7a7a;
  font-family: Inter;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.01625rem;
  text-align: left;
  margin-right: 0.4rem;
`;

export const Content = styled.span`
  color: #7a7a7a;
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.015rem;
  text-align: left;
`;
const PreferredIconBox = styled.div`
  grid-area: preferredIcon;
`;
export const PreferredIcon = () => {
  return (
    <PreferredIconBox>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.0508 0C8.32694 0 8.5508 0.223858 8.5508 0.5V1.26456H9.81346C10.8536 1.26456 11.6948 2.10845 11.6948 3.14695V9.32369C11.6948 10.3622 10.8536 11.2061 9.81346 11.2061H1.88135C0.841189 11.2061 0 10.3622 0 9.32369V3.14695C0 2.10845 0.84119 1.26456 1.88135 1.26456H3.14414V0.5C3.14414 0.223858 3.36799 0 3.64414 0C3.92028 0 4.14414 0.223858 4.14414 0.5V1.26456H7.5508V0.5C7.5508 0.223858 7.77465 0 8.0508 0ZM1 3.14695C1 2.65962 1.39459 2.26456 1.88135 2.26456H9.81346C10.3002 2.26456 10.6948 2.65962 10.6948 3.14695V3.97064H1V3.14695ZM1 4.97064V9.32369C1 9.81102 1.39459 10.2061 1.88135 10.2061H9.81346C10.3002 10.2061 10.6948 9.81102 10.6948 9.32369V4.97064H1Z"
          fill="#7A7A7A"
        />
      </svg>
    </PreferredIconBox>
  );
};
const LocationIconBox = styled.div`
  grid-area: locationIcon;
`;
export const LocationIcon = () => {
  return (
    <LocationIconBox>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="12"
        viewBox="0 0 9 12"
        fill="none"
      >
        <path
          d="M1 11.0119V1"
          stroke="#7A7A7A"
          strokeLinecap="round"
        />
        <path
          d="M8.27273 3.94055L1 1V7.37119L8.27273 3.94055Z"
          stroke="#7A7A7A"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </LocationIconBox>
  );
};
const NumIconBox = styled.div`
  grid-area: numIcon;
`;
export const NumIcon = () => {
  return (
    <NumIconBox>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
      >
        <path
          d="M0.5 8.39337C0.5 7.13773 1.51653 6.12085 2.76923 6.12085H5.53846C6.79116 6.12085 7.80769 7.13773 7.80769 8.39337V9.31754C7.80769 9.55236 7.61772 9.74171 7.38462 9.74171H0.923077C0.689977 9.74171 0.5 9.55236 0.5 9.31754V8.39337Z"
          stroke="#7A7A7A"
          strokeLinejoin="round"
        />
        <path
          d="M4.15415 4.27252C5.19555 4.27252 6.03876 3.42745 6.03876 2.38626C6.03876 1.34507 5.19555 0.5 4.15415 0.5C3.11274 0.5 2.26953 1.34507 2.26953 2.38626C2.26953 3.42745 3.11274 4.27252 4.15415 4.27252Z"
          stroke="#7A7A7A"
        />
        <path
          d="M9.30085 6.54518V1.92432H10.0841V6.54518H9.30085ZM7.38477 4.62682V3.84267H12.0002V4.62682H7.38477Z"
          fill="#7A7A7A"
        />
      </svg>
    </NumIconBox>
  );
};
