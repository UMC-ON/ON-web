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
  background: linear-gradient(to top, transparent 5%, white 60%);
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
  width: 100vw;
  height: 100vh;
  padding: 0 37px;
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
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: start;

  text-align: left;

  color: #7a7a7a;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.3px;
  flex-wrap: wrap;

  width: auto;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const ColorButtonTag = styled(ColorButton)`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: auto;
  height: auto;
  max-width: 156px;
  min-height: 22px;

  background: url(${xImg}) no-repeat right 5px center
    ${(props) => props.color || '#BFD8E5'};

  padding: 0px 8px;
  padding-right: 18px;
  padding-bottom: 2px;

  margin: 4px 5px;

  color: #fff;
  text-align: left;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
`;

export const SpaceBetweenContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
export const Editor = styled.textarea`
  box-sizing: border-box;
  width: auto;
  height: 100%;
  fill: #fff;
  border: 1px solid ${(props) => props.color || '#bfd8e5'};
  border-radius: 8px;

  padding: 5px 8px;

  margin-top: 5px;

  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:focus {
    outline: none;
  }
`;
export const ContentSection = styled.section`
  flex: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 316px;
  height: auto;
  flex-shrink: 0;
  padding: 10px 0;
`;
