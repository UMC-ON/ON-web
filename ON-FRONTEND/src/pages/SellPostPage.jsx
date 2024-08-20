import styled from "styled-components";
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import camera from "../assets/images/camera.svg";
import PhotoAdd from "../assets/images/PhotoAdd.svg";

import SellPostHeader from "../components/SellPostHeader";
import SellPostSelectCity from "../components/SellPostSelectCity/SellPostSelectCity";
import SellPostCitySelect from "../components/SellPostCitySelect";


function SellPost() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState('');
    const [cost, setCost] = useState('');
    const [content, setContent] = useState('');
    const [share, setShare] = useState(false);
    const fileInputRef = useRef(null);
    const [showCity, setShowCity] = useState(false);
    const [city, setCity] = useState({ country: '', city: '' });
    const [isCityClicked, setIsCityClicked] = useState(false);

    const accessToken = import.meta.env.VITE_accessToken;

    const resetCityClick = () => {
        setIsCityClicked(false);
        setCity(null);
    };

    const handleGetCity = (locationInfo) => {
        setCity(locationInfo); 
        setIsCityClicked(true);
        setShowCity(false);
    };
    

    const handleCityClick = () => {
        setShowCity(!showCity);
    };

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        setImages(prevImages => [...prevImages, ...files]);
    };

    const handleCameraClick = () => {
        fileInputRef.current.click();
    };

const navigate = useNavigate();

const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('userId', 10); // 고정된 userId
    formData.append('title', title);
    formData.append('cost', cost);
    formData.append('dealType', selectedOption === 'directly' ? 'DIRECT' : 'DELIVERY');
    formData.append('content', content);
    formData.append('currentCountry', city.country || '미국'); // 사용자 입력이 없을 경우 기본값
    formData.append('currentLocation', city.city || '애리조나'); // 사용자 입력이 없을 경우 기본값
    formData.append('share', share);

    images.forEach((image, index) => {
        formData.append('imageFiles', image);
    });

    try {
        const response = await fetch('http://13.209.255.118:8080/api/v1/market-post', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body: formData,
        });

        // 서버 응답 로그 추가
        const responseText = await response.text();  // 응답 텍스트 확인
        console.log('Response Status:', response.status);
        console.log('Response Text:', responseText);

        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const data = JSON.parse(responseText);  // 응답 텍스트를 JSON으로 변환
        console.log('Response Data:', data);

        // 등록 완료 후 /sell 페이지로 리다이렉트
        navigate('/sell');

    } catch (error) {
        console.error('Error:', error.message);  // 에러 메시지 로그
    }
};


    

    return (
        <>
            <SellPostHeader onSubmit={handleSubmit} />
            <Space />
            <Photo isPreviewVisible={images.length > 0}>
                {images.length === 0 ? (
                    <Camera src={camera} onClick={handleCameraClick} />
                ) : (
                    <>
                        <ImagePreview>
                            <ImageContainer>
                                {images.map((image, index) => (
                                    <img key={index} src={URL.createObjectURL(image)} alt={`Preview ${index + 1}`} />
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
                    <Region>
                        <SellPostCitySelect
                            cityClick={handleCityClick}
                            city={city}
                            isCityClicked={isCityClicked}
                            updateIsCityClicked={resetCityClick}
                        />
                        {showCity &&
                            <SellPostSelectCity closeModal={handleCityClick} getCity={handleGetCity} />
                        }
                    </Region>
                </Location><br />
                <Section>
                    <Label>제목</Label>
                    <Add placeholder="제목을 입력해 주세요." value={title} onChange={(e) => setTitle(e.target.value)} />
                </Section><br />
                <Section>
                    <Label>판매 금액</Label>
                    <Add placeholder="₩ 판매 금액을 입력해 주세요." type="number" value={cost} onChange={(e) => setCost(e.target.value)} />
                </Section>
                <CheckboxContainer>
                    <input type="checkbox" checked={share} onChange={(e) => setShare(e.target.checked)} /><span style={{ fontSize: "11px" }}>나눔</span>
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
                <br />
                <Section>
                    <Label>상품 설명</Label>
                    <Description placeholder="상품에 대한 상세한 설명을 입력해 주세요. 거래 가능 기간을 작성해 주시면 더 빠르게 거래가 진행될 수 있어요." value={content} onChange={(e) => setContent(e.target.value)} />
                </Section>
            </Information>
        </>
    );
}

export default SellPost;


const Space = styled.div`
  margin-top: 6.5vh;
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

// const Country = styled.div`
//     display: inline-flex;
//     align-items: center;
//     justify-content: space-between;
//     width: auto;
//     height: 0.8em;
//     padding: 0.5em;
//     background: ${props => props.theme.lightPurple};
//     margin: 0px 0.6em;
//     border-radius: 20px;
//     color: white;
// `;

const Region = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    height: 0.8em;
    padding: 0.5em;
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
