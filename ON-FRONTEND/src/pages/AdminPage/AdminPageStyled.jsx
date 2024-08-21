import styled from 'styled-components';

export const Page = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  color: black;
`;

export const GridContainer = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(8, auto);

  gap: 0.2rem;
  width: 100%;
  height: auto;
  align-items: center;
  padding: 0.2rem;
  font-size: 0.8rem;
`;

export const StyledBtn = styled.button`
  width: auto;
  white-space: nowrap;
  height: auto;
  padding: 0.1rem 0.2rem;
  background-color: black;
  color: white;
`;

export const WrapDiv = styled.div`
  word-break: break-all;
  //border: 1px solid black;
  width: ${(props) => (props.width ? props.width : 'auto')};
  //max-width: calc(100vw / 8);
  text-align: center;
`;

export const KeepAllDiv = styled.div`
  word-break: keep-all;
  width: ${(props) => (props.width ? props.width : 'auto')};
  text-align: center;
`;
export const Image = styled.img`
  width: 100%;
`;
