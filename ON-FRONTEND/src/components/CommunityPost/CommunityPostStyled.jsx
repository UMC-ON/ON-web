import styled from 'styled-components';

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  max-height: 139px;
  height: auto;
  padding: 12px 28px;
  flex-shrink: 0;
  border: 2px solid transparent;
  border-left: none;
  border-right: none;
  border-image: linear-gradient(90deg, transparent, #d9d9d9, transparent);
  border-image-slice: 1;
`;
