import styled from 'styled-components';
import * as s from '../CommunityStyled.jsx';

import PageHeader from '../../../components/PageHeader/PageHeader.jsx';
import CustomSlider from '../../../components/Slider/CustomSlider.jsx';
import CommunityPost from '../../../components/CommunityPost/CommunityPost.jsx';
import FilterButton from '../../../components/Common/FilterButton/FilterButton.jsx';

import communityBannerImg from '../../../assets/images/communityBannerImg.svg';
import pencilImg from '../../../assets/images/pencil.svg';
import gradientRec from '../../../assets/images/gradientRec.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CountryList } from '../../../components/CountryList.jsx';

const images = [communityBannerImg, communityBannerImg, communityBannerImg];

const InfoCommunityHome = () => {
  const navigate = useNavigate();
  const nav = () => {
    navigate('./post');
  };
  const mylist = [1, 2, 3, 4, '와진짜개짱짱긴텍스트'];
  return (
    <>
      <s.PageContainer>
        <PageHeader pageName={'정보 게시판'}></PageHeader>
        <s.SliderWrapper>
          <CustomSlider
            images={images}
            height={'172'}
          ></CustomSlider>
        </s.SliderWrapper>

        <s.FilterSection>
          <FilterButton
            color1="#D6EBFF"
            color2="#C2C7FF"
            myList={CountryList}
            placeholder="국가"
          />
          <FilterButton
            myList={mylist}
            placeholder="실험"
          />
        </s.FilterSection>
        <s.PostListSection>
          <CommunityPost></CommunityPost>
          <CommunityPost></CommunityPost>
          <CommunityPost></CommunityPost>
          <CommunityPost></CommunityPost>
          <CommunityPost></CommunityPost>
        </s.PostListSection>
        <s.WriteButton
          style={{ background: 'linear-gradient(135deg,#D6EBFF,#C2C7FF)' }}
          onClick={nav}
        >
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

export default InfoCommunityHome;
