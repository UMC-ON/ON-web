import styled from 'styled-components';
import theme from '../../styles/theme';

export const InfoWrapper = styled.div`
  z-index: 1;
  margin: 1.5rem;
  width: 90%;
  padding: 1.4rem 1.3rem;
  box-sizing: border-box;
  border-radius: 0.875rem;
  background: #ebebeb; /* InfoWrapper 배경색을 ProductContainer의 배경색과 통일 */
  box-shadow: 4px 4px 24px 0px rgba(62, 115, 178, 0.15);
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 텍스트와 컨텐츠를 왼쪽 정렬 */
  justify-content: flex-start; /* 컨텐츠를 위에서 아래로 정렬 */
`;

export const InfoText = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0175rem;
  margin-bottom: 1rem;
  text-align: left;
  span {
    font-size: 0.75rem;
    color: white;
    background: linear-gradient(135deg, #c2c7ff 0%, #ad99ff 100%);
    border-radius: 0.5rem;
    font-weight: 900;
    padding: 0 0.2rem;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ProductInfoContainer = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  border-radius: 0.625rem 0.625rem 0rem 0rem;
  background: #f3f4ff;
  display: grid;
  grid-template-areas:
    'name price'
    'info price';
  justify-content: space-between;
  align-content: center;
  align-items: center;
  gap: 0.3rem;
  grid-template-columns: 1fr auto;
`;

export const ProductImg = styled.div`
  width: 100%;
  height: 10rem;
  border-radius: 0 0 0.625rem 0.625rem;
  background-image: url(${(props) => props.$link});
  /* background-size: cover; */
  background-position: center;
  background-size: cover;
`;

export const ProductName = styled.span`
  grid-area: name;
  color: #363636;
  font-family: Inter;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.02125rem;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ProductPrice = styled.span`
  grid-area: price;
  background: linear-gradient(135deg, #c2c7ff 0%, #ad99ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ProductInfo = styled.span`
  grid-area: info;
  overflow: hidden;
  color: #7a7a7a;
  text-overflow: ellipsis;
  font-family: Inter;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0125rem;
  text-align: left;
`;
