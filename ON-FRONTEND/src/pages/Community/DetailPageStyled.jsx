import styled from 'styled-components';

export const ConfirmHeader = styled.div`
  width: 100%;
  max-width: 480px;
  height: 61px;
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: row;
  top: 0;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-width: 0.5px 0;
  box-sizing: border-box;
  padding: 0 17px 0 17px;
`;

export const BackButton = styled.div`
  margin-left: 17px;
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`;
export const InfoLabel = styled.div`
  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin: 0 4.5px;
`;
export const Title = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: left;
  padding: 17px 32px;
  width: 100%;
  min-height: 60.126px;
  height: auto;
  color: black;
  background: ${(props) => props.color || '#BFD8E5'};

  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
`;
export const DetailPageLayout = styled.div`
  background: white;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding-top: 61px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Content = styled.pre`
  box-sizing: border-box;
  width: 100%;
  padding: 19px 29px;

  text-align: left;
  white-space: pre-wrap;

  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CommentWritingDiv = styled.div`
  box-sizing: border-box;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: end;
  flex-wrap: wrap;

  width: 100%;
  max-width: 480px;

  height: auto;
  //min-height: 70px;
  border-radius: 30px 30px 0px 0px;
  background: linear-gradient(
    135deg,
    ${(props) => props.color1 || '#f1f8ff 0%'},
    ${(props) => props.color1 || '#f2f3ff 100%'}
  );
  box-shadow: 0px -3px 3px 0px rgba(0, 0, 0, 0.05);
  padding: 14px 15px;
`;
export const CommentEditor = styled.textarea`
  box-sizing: border-box;
  background-color: transparent;
  border: none;

  flex: auto;

  &:focus {
    outline: none;
  }

  color: #3d3d3d;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  height: auto;
  min-height: 28px;
  max-height: 104px;

  &::-webkit-scrollbar {
    display: none;
  }

  resize: none;
`;
