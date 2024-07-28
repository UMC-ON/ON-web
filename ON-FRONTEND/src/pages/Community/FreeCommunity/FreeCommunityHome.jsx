import * as s from '../CommunityStyled.jsx';

import CountryList from '../../../components/Common/CountryList.jsx';
import PageHeader from '../../../components/PageHeader/PageHeader.jsx';
import CustomSlider from '../../../components/Slider/CustomSlider.jsx';
import CommunityPost from '../../../components/CommunityPost/CommunityPost.jsx';

import communityBannerImg from '../../../assets/images/communityBannerImg.svg';
import pencilImg from '../../../assets/images/pencil.svg';
import gradientRec from '../../../assets/images/gradientRec.svg';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const images = [communityBannerImg, communityBannerImg, communityBannerImg];

const FreeCommunityHome = () => {
  const [isOptionVisible, setOptionVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState('국가');
  const clickHandler = (e) => {
    setOptionVisible(!isOptionVisible);
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };

  const navigate = useNavigate();
  const nav = () => {
    navigate('./post');
  };

  return (
    <>
      <s.PageContainer>
        <PageHeader
          pageName={'자유 게시판'}
          color={'#6458BF'}
        ></PageHeader>
        <s.SliderWrapper>
          <CustomSlider
            images={images}
            height={'172'}
          ></CustomSlider>
        </s.SliderWrapper>

        <s.FilterSection>
          <s.FilterSelectionButton
            onClick={() => {
              setOptionVisible((prev) => !prev);
            }}
          >
            {currentValue}
          </s.FilterSelectionButton>
          <s.DarkBackground
            onClick={clickHandler}
            show={isOptionVisible.toString()}
          />
          <s.FilterList show={isOptionVisible.toString()}>
            <CountryList setOptionVisible={clickHandler} />
          </s.FilterList>
        </s.FilterSection>
        <s.PostListSection>
          <CommunityPost></CommunityPost>
          <CommunityPost></CommunityPost>
          <CommunityPost></CommunityPost>
          <CommunityPost></CommunityPost>
          <CommunityPost></CommunityPost>
        </s.PostListSection>
        <s.WriteButton onClick={nav}>
          <img src={pencilImg} />
          글쓰기
        </s.WriteButton>
        <img
          src={gradientRec}
          style={{
            position: 'fixed',
            bottom: '0',
            pointerEvents: 'none',
            zIndex: '1',
          }}
        />
      </s.PageContainer>
    </>
  );
};

export default FreeCommunityHome;
