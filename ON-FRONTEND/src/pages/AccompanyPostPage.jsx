import styled from 'styled-components';
import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import postIcon from '../assets/images/writepost_icon.svg';

import CustomCheckbox from '../components/CustomCheckBox';
import CameraBottom from '../components/CameraBottom';


function AccompanyPostPage() {
    const [ageChecked, setAgeChecked] = useState(false);
    const [schoolChecked, setSchoolChecked] = useState(false);

    const checkAge = (e) => {
      setAgeChecked(e.target.checked);
    };

    const checkSchool = (e) => {
      setSchoolChecked(e.target.checked);
    };

    const navigate = useNavigate();

    const onClickBackButton = () => {
      navigate(-1);
    };

    return (
      <>
        <RightContainer>
            <GreyButton onClick={onClickBackButton}>취소</GreyButton>
            <BlueButton>등록</BlueButton>
        </RightContainer>

        <LeftContainer>
            <Title>
                여행 동행 구하기
            </Title>
            <Left>
                <GreyText>
                    정보를 수정하려면 편집 버튼(
                </GreyText>
                <SmallIcon src={postIcon} $top="10px"/>
                <GreyText>
                    )을 눌러 입력해 주세요. 
                </GreyText>
            </Left>
        </LeftContainer>



        <BigContainer>
            <BlueContainer>
                <Left $bottom="5px">
                    <BlackText>나이 :</BlackText>
                    <BlackText $isChecked={ageChecked}>22세</BlackText>
                    <CustomCheckbox checked={ageChecked} onChange={checkAge} />
                    <GreyText $size="0.7rem" $left="5px" $top="10px">나이 비공개</GreyText>
                </Left>
                <Left $bottom="5px">
                    <BlackText>현재 위치 : </BlackText>
                    <CircleContainer>독일
                        <SmallIcon src={postIcon} $left="5px"/>
                    </CircleContainer>
                </Left>
                <Left $bottom="5px">
                    <BlackText>파견교 : </BlackText>
                    <BlackText $isChecked={schoolChecked} $size="0.8rem">King's College London</BlackText>
                    <CustomCheckbox checked={schoolChecked} onChange={checkSchool} />
                    <GreyText $size="0.7rem" $left="5px" $top="10px">파견교 비공개</GreyText>
                </Left>
                <Left $bottom="5px">
                    <BlackText>모집 인원 : </BlackText>
                    <Input $width="10px"/>
                    <GreyText $left="3px">명</GreyText>
                </Left>
                <Left $bottom="5px">
                    <BlackText>여행 지역 : </BlackText>
                    <CircleContainer2>입력하기
                    </CircleContainer2>
                </Left>
                <Left $bottom="5px">
                    <BlackText>예상 일정 : </BlackText>
                    <CircleContainer2>입력하기
                    </CircleContainer2>
                </Left>
            </BlueContainer>
        </BigContainer>

        <BigContainer>
            <Left>
                <Title $size="1.4rem">
                    제목
                </Title>
            </Left>
        </BigContainer>
        <GreyInput placeholder='제목을 입력해 주세요.' $height="2.5vh"/>

        <BigContainer>
            <Left>
                <Title $size="1.4rem">
                    요청사항
                </Title>
            </Left>
        </BigContainer>

        <GreyInput placeholder='요청사항과 동행인에게 하고 싶은 말을 적어주세요. ' $height="30vh"/>

        <Space/>
        <CameraBottom/>
      </>
    );
}

export default AccompanyPostPage;

const LeftSpace = styled.section`
  margin-left: 27%;
`;

const Space = styled.section`
  margin-bottom: 10vh;
`;

const CircleContainer = styled.section`
  background: linear-gradient(to right bottom, #D6EBFF, #C2C7FF);
  border-radius: 20px;
  font-size: 0.8rem;
  color: white;
  padding: 5px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-top: 5px;
  padding-left: 6px;
`;

const CircleContainer2 = styled.section`
  background: linear-gradient(to right bottom, #C2C7FF, #AD99FF);
  border-radius: 20px;
  font-size: 0.8rem;
  color: white;
  padding: 5px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-top: 5px;
  padding-left: 6px;
`;

const Input = styled.input`
    margin-left: 10px;
    border-radius: 5px;
    border: 1px solid #CABCCB;
    width: ${props => props.$width || '25px'};
    margin-top: 4px;
    height: 20px;
    color: #838383;
    font-size: 0.8rem;
    padding-left: 5px;
    font-family: Inter;
    background-color: white;
`;

const GreyInput = styled.textarea`
    border-radius: 10px;
    border: 1px solid #CABCCB;
    color: black;
    font-size: 1rem;
    padding: 10px;
    font-family: Inter;
    width: 83%;
    margin-top: 1vh;
    margin-bottom: 3vh;
    height: ${props => props.$height || 'auto'};
    background-color: white;
`;


const BigContainer = styled.section`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const SmallIcon = styled.img`
  padding-top: ${props => props.$top || '0'};
  padding-left: ${props => props.$left || '0'};
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: ${props => props.$bottom || '0'};
`;

const LeftContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1.5rem;
`;

const RightContainer = styled.div`
  margin-top: 3vh;
  display: flex;
  justify-content: flex-end;
`;



const GreyButton = styled.button`
  border-radius: 20px;
  background-color: #E4E4E4;
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 1em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 8px;
`;


const BlueButton = styled.button`
  border-radius: 20px;
  background: linear-gradient(135deg, #D6EBFF, #C2C7FF);
  color: white;
  font-family: Inter;
  font-size: 1em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 20px;
`;

const BlueContainer = styled.div`
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(214,235,255,0.2), rgba(194,199,255,0.2));
  width: 100%;
  padding-top: 3vh;
  padding-bottom: 4vh;
  margin-bottom: 4vh;
`;

const Title = styled.div`
  color: black;
  font-family: Inter;
  font-size: ${props => props.$size || '1.563rem'};
  font-weight: bold;
`;

const GreyText = styled.div`
  color: ${props => props.$color || '#838383'};
  font-family: Inter;
  font-size: ${props => props.$size || '0.875rem'};
  margin-top: ${props => props.$top || '1vh'};
  margin-left: ${props => props.$left || '0'};
`;

const BlackText = styled.div`
  color: black;
  font-family: Inter;
  font-size: ${props => props.$size || '1rem'};
  padding-left: 1rem;
  margin-top: 0.5rem;
  text-decoration: ${({ $isChecked }) => ($isChecked ? 'line-through' : 'none')};
`;
