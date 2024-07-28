import styled from 'styled-components';

export const NoContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export const NoImg = styled.img`
  img {
    object-fit: cover;
  }
`;
export const NoText = styled.p`
  color: #b8b8b8;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
`;
