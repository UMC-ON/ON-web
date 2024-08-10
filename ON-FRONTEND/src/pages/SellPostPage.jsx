import styled from "styled-components";
import React, { useState, useRef } from 'react';

import camera from "../assets/images/camera.svg";
import postIcon from '../assets/images/writepost_icon.svg';
import PhotoAdd from "../assets/images/PhotoAdd.svg";

import SellPostHeader from "../components/SellPostHeader";

function SellPost() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        setImages(prevImages => [...prevImages, ...files.map(file => URL.createObjectURL(file))]);
    };

    const handleCameraClick = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <SellPostHeader />
            <Space />
            <Photo isPreviewVisible={images.length > 0}> {/* isPreviewVisible prop 전달 */}
                {images.length === 0 ? (
                    <Camera src={camera} onClick={handleCameraClick} />
                ) : (
                    <>
                        <ImagePreview>
                            <ImageContainer>
                                {images.map((image, index) => (
                                    <img key={index} src={image} alt={`Preview ${index + 1}`} />
                                ))}
                            </ImageContainer>
                            <AddButton onClick={handleCameraClick}>
                                <img src={PhotoAdd} style={{ width: "22px", height: "22px" }} />
                            </AddButton>
                        </ImagePreview>
                    </>
                )}
                <FileInput
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                />
            </Photo>

            <Information>
                <TitleText>물품 등록하기</TitleText><br />
                <Location>
                    현재 위치:
                    <Country>
                        영국
                        <img src={postIcon} alt="post icon" style={{ marginLeft: "5px" }} />
                    </Country>
                    <Region>
                        런던
                        <img src={postIcon} alt="post icon" style={{ marginLeft: "5px" }} />
                    </Region>
                    <p style={{ fontSize: "10px", color: "#B9B9B9", marginTop: "10px" }}>원활한 거래를 위해 지역까지 작성해주세요.</p>
                </Location><br />
                <Section>
                    <Label>제목</Label>
                    <Add placeholder="제목을 입력해 주세요." />
                </Section><br />
                <Section>
                    <Label>판매 금액</Label>
                    <Add placeholder="₩ 판매 금액을 입력해 주세요." type="number" />
                </Section>
                <CheckboxContainer>
                    <input type="checkbox" /><span style={{ fontSize: "11px" }}>나눔</span>
                </CheckboxContainer>
                <Section>
                    <Label>거래 형식</Label>
                    <Options>
                        <Directly
                            selected={selectedOption === 'directly'}
                            onClick={() => setSelectedOption('directly')}
                        >
                            직접 만나서 거래
                        </Directly>
                        <Delivery
                            selected={selectedOption === 'delivery'}
                            onClick={() => setSelectedOption('delivery')}
                        >
                            택배 거래
                        </Delivery>
                    </Options>
                </Section>
                <br/>
                <Section>
                    <Label>상품 설명</Label>
                    <Description placeholder="상품에 대한 상세한 설명을 입력해 주세요. 거래 가능 기간을 작성해 주시면 더 빠르게 거래가 진행될 수 있어요." />
                </Section>
            </Information>
        </>
    )
}

export default SellPost;

const Space = styled.div`
  margin-top: 7vh;
`;

const Photo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 12em;
    margin-bottom: 2vh;
    cursor: pointer;
    background: ${(props) => (props.isPreviewVisible ? 'white' : 'linear-gradient(135deg, #C2C7FF80 0%, #AD99FF80 50%)')};
`;


const Camera = styled.img`
    width: 15%;
    height: 15%;
`;

const FileInput = styled.input`
    display: none;
`;

const ImagePreview = styled.div`
    display: flex;
    flex-wrap: nowrap; /* 이미지들이 가로로 나열되도록 함 */
    overflow-x: auto; /* 가로로 넘칠 경우 스크롤 가능하게 함 */
    margin-top: 10px;
    width: 100%;

    img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        margin: 5px;
        border-radius: 16px;
        flex-shrink: 0; /* 이미지가 축소되지 않도록 함 */
    }
`;

const ImageContainer = styled.div`
    display: flex;
`;

const AddButton = styled.div`
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    border-radius: 8px;
    cursor: pointer;
    flex-shrink: 0; /* 추가된 부분: 크기가 줄어들지 않도록 함 */
    background: #F5F5F5;

    span {
        font-size: 32px;
        color: #B9B9B9;
    }
`;


const Information = styled.div`
    width: 100%;
    padding: 20px 26px; 
    box-sizing: border-box;
    margin-bottom: 2vh;
    text-align: left;
`;

const TitleText = styled.p`
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 1vh;
`;

const Location = styled.div`
    margin-bottom: 2vh;
`;

const Country = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    height: 0.8em;
    padding: 0.5em;
    background: ${props => props.theme.lightPurple};
    margin: 0px 0.6em;
    border-radius: 20px;
    color: white;
`;

const Region = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    height: 0.8em;
    padding: 0.5em;
    background: ${props => props.theme.lightPurple};
    border-radius: 20px;
    color: white;
`;

const Section = styled.div`
    margin-bottom: 1vh;
`;

const Label = styled.p`
    font-weight: 600;
    font-size: 20px;
`;

const Add = styled.input`
    border-radius: 15px;
    height: 1.5em;
    border: 1px solid #CABCCB;
    font-size: 14px;
    color: #B9B9B9;
    padding: 10px;
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 1vh;
    width: 95%;
`;

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2vh;
`;

const Options = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2vh;
    margin-top: 1vh;
`;

const Directly = styled.div`
    border-radius: 20px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: ${(props) => (props.selected ? props.theme.purpleGra : 'linear-gradient(to bottom, #DFDFDF 0%, #D1D1D1 50%, #C3C3C3 100%)')};
    width: 10em;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1em;
    cursor: pointer;
`;

const Delivery = styled.div`
    border-radius: 20px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: ${(props) => (props.selected ? props.theme.purpleGra : 'linear-gradient(to bottom, #DFDFDF 0%, #D1D1D1 50%, #C3C3C3 100%)')};
    width: 10em;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const Description = styled.textarea`
    border-radius: 20px;
    height: 20em;
    border: 1px solid #CABCCB;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 2vh;
    width: 99%;
    resize: none;
    font-size: 14px;
    color: #B9B9B9;
    line-height: 1.5;
    margin-top: 1vh;
    
    &::placeholder {
        color: #B9B9B9;
        font-size: 14px;
    }
`;
