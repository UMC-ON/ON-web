import styled from 'styled-components';
import xImg from '../../assets/images/xImg.svg';

export const ConfirmHeader = styled.div`
  width: 100%;
  max-width: 480px;
  height: 61px;
  position: fixed;
  flex-wrap: wrap;
  z-index: 2;
  display: flex;
  top: 0;
  align-content: center;
  justify-content: end;
  background: white;
  border: none;
  border-width: 0.5px 0;
  box-sizing: border-box;
  padding: 0 17px 0 17px;
`;
export const ColorButton = styled.button`
  box-sizing: border-box;
  width: 59px;
  height: 31px;
  flex-shrink: 0;

  border-radius: 30px;
  background-color: ${(props) => props.color || '#E4E4E4'};

  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  text-align: center;
  font-weight: 600;
  line-height: normal;

  padding: 0 0;
  margin: 4px;
`;

export const BigContainer = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  background-color: white;
  padding: 0 1.5rem;
  padding-top: 61px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: start;
`;

export const PostInfoSection = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-content: start;
  justify-content: center;
  width: 100%;
`;
export const HeadingTitle = styled.h2`
  color: #464646;
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
`;
export const InfoLabel = styled.div`
  display: flex;
  align-items: center;
  color: black;
`;
export const ColorButtonTag = styled(ColorButton)`
  box-sizing: border-box;
  width: auto;
  height: auto;
  max-width: 156px;
  min-height: 22px;

  background: ${(props) => props.color || '#BFD8E5'};

  padding: 0 8px;
  flex-shrink: 1;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;

  white-space: wrap;
`;

export const SpaceBetweenContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: #b2b2b2;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.22px;

  height: 18px;
  width: auto;
`;
export const StyledCheckBox = styled.input`
  appearance: none;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 2px solid ${(props) => props.color || '#bfd8e5'};
  margin: 0 4px;
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 10px 0;
`;

export const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  fill: #fff;
  border: 1.5px solid ${(props) => props.color || '#bfd8e5'};
  border-radius: 8px;

  padding: 10px 8px;
  padding-top: 7px;

  margin-top: 5px;
  overflow-x: hidden;
`;
export const Editor = styled.textarea`
  border: none;
  width: 100%;
  height: 100%;

  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: black;

  background-color: transparent;

  &:focus {
    outline: none;
  }
  resize: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ContentSection = styled.section`
  flex: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  height: auto;
  flex-shrink: 0;
  padding: 10px 0;
  padding-bottom: 5.5rem;
`;

export const Footer = styled.div`
  box-sizing: border-box;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  flex-wrap: wrap;

  width: 100%;
  max-width: 480px;

  height: auto;
  //min-height: 70px;
  border-radius: 30px 30px 0px 0px;
  background: white;
  box-shadow: 0px -3px 3px 0px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
`;

export const ImgSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 10px;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: scroll;
  height: 80px;
  width: 100%;
  padding: 1rem 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PreviewImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 13px;
`;
