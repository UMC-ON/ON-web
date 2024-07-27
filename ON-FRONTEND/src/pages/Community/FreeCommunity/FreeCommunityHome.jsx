import styled from 'styled-components';
import CountryList from '../../../components/Common/CountryList.jsx';
import PageHeader from '../../../components/PageHeader/PageHeader.jsx';
import CustomSlider from '../../../components/Slider/CustomSlider.jsx';
import CommunityPost from '../../../components/CommunityPost/CommunityPost.jsx';

import communityBannerImg from '../../../assets/images/communityBannerImg.svg';
import pencilImg from '../../../assets/images/pencil.svg';
import lightBlueArrow from '../../../assets/images/lightBlueArrow.svg';
import gradientRec from '../../../assets/images/gradientRec.svg';
import { useState } from 'react';

const images = [communityBannerImg, communityBannerImg, communityBannerImg];

const FreeCommunityHome = () => {
  const [isOptionVisible, setOptionVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState('국가');
  const clickHandler = (e) => {
    setOptionVisible(!isOptionVisible);
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };

  return (
    <>
      <PageContainer>
        <PageHeader
          pageName={'자유 게시판'}
          color={'#6458BF'}
        ></PageHeader>
        <SliderWrapper>
          <CustomSlider
            images={images}
            height={'172'}
          ></CustomSlider>
        </SliderWrapper>

        <FilterSection>
          <FilterSelectionButton
            onClick={() => {
              setOptionVisible((prev) => !prev);
            }}
          >
            {currentValue}
          </FilterSelectionButton>
          <DarkBackground show={isOptionVisible.toString()} />
          <FilterList show={isOptionVisible.toString()}>
            <CountryList setOptionVisible={clickHandler} />
          </FilterList>
        </FilterSection>
        <PostListSection>
          <CommunityPost></CommunityPost>
          <CommunityPost></CommunityPost>
          <CommunityPost></CommunityPost>
          <CommunityPost></CommunityPost>
          <CommunityPost></CommunityPost>
        </PostListSection>
        <WriteButton>
          <img src={pencilImg} />
          글쓰기
        </WriteButton>
        <img
          src={gradientRec}
          style={{
            position: 'fixed',
            bottom: '0',
            pointerEvents: 'none',
          }}
        />
      </PageContainer>
    </>
  );
};

export default FreeCommunityHome;

const PageContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-content: start;
  align-items: center;
  justify-content: center;
`;

const FilterSection = styled.section`
  display: flex;
  box-sizing: border-box;
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: start;
  justify-content: start;
  align-items: center;
  height: 54px;
  width: 100%;
  padding: 0 14px;
`;
const FilterSelectionButton = styled.button`
  box-sizing: border-box;
  min-width: 69px;
  width: auto;
  height: 28px;
  padding: 5px 10px;
  padding-right: 30px;
  margin: 0 10px;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border: none;
  border-radius: 2rem;
  outline: none;
  font-size: 0.8rem;
  text-align: left;
  background: url(${lightBlueArrow}) no-repeat right 0.8rem center #f0f0f0;
  &:focus {
    outline: none;
  }
`;
const FilterList = styled.ul`
  box-sizing: border-box;
  position: absolute;
  top: 80%;
  padding: 0 24px;
  display: ${(props) => (props.show === 'true' ? 'flex' : 'none')};
  flex-direction: column;
  align-items: start;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 300px;
  width: 100vw;
  //mask-image: linear-gradient(to top, transparent 5%, white 25%, white 75%);
  z-index: 1;
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 70%;
  z-index: 1;
  display: ${(props) => (props.show === 'true' ? 'block' : 'none')};
  pointer-events: none;
`;

const PostListSection = styled.section`
  width: 100%;
  pointer-events: none;
`;

const SliderWrapper = styled.section`
  width: 100%;
  height: auto;
  margin-top: 61px;
`;

const WriteButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 93px;
  border-radius: 55px;
  width: 148px;
  height: 50px;
  padding: 15px 26px;
  flex-shrink: 0;
  background: linear-gradient(135deg, #c2c7ff 0%, #ad99ff 100%);
  color: white;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
