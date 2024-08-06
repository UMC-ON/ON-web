import styled from 'styled-components';
import * as s from '../CommunityStyled.jsx';

import PageHeader from '../../../components/PageHeader/PageHeader.jsx';
import CustomSlider from '../../../components/Slider/CustomSlider.jsx';
import CommunityPost from '../../../components/CommunityPost/CommunityPost.jsx';
import FilterButton from '../../../components/FilterButton/FilterButton.jsx';

import communityBannerImg from '../../../assets/images/communityBannerImg.svg';
import pencilImg from '../../../assets/images/pencil.svg';
import gradientRec from '../../../assets/images/gradientRec.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CountryList } from '../../../components/CountryList.jsx';

import { PostList } from '../../../components/Common/TempDummyData/PostList.jsx';
import { Post } from '../../../components/CommunityPost/CommunityPostStyled.jsx';

const images = [communityBannerImg, communityBannerImg, communityBannerImg];

const InfoCommunityHome = () => {
  const navigate = useNavigate();
  const nav = () => {
    navigate('./post');
  };
  const mylist = [1, 2, 3, 4, '와진짜개짱짱긴텍스트'];
  const currentBoard_id = 2;
  const currentPostList = PostList.filter(
    (post) => post.board_id === currentBoard_id,
  );
  return (
    <>
      <s.PageContainer>
        <PageHeader
          pageName={'자유 게시판'}
          color="#6458BF"
        ></PageHeader>
        <s.SliderWrapper>
          <CustomSlider
            images={images}
            height={'172'}
          ></CustomSlider>
        </s.SliderWrapper>

        <s.FilterSection>
          <FilterButton
            color1="#C2C7FF"
            color2="#AD99FF"
            myList={CountryList}
            placeholder="국가"
          />
        </s.FilterSection>
        <s.PostListSection>
          {currentPostList.map((post) => (
            <CommunityPost
              key={post.createdDate}
              post={post}
            />
          ))}
        </s.PostListSection>
        <s.WriteButton
          style={{ background: 'linear-gradient(135deg,#C2C7FF,#AD99FF)' }}
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
            width: '100%',
            maxWidth: '480px',
          }}
        />
      </s.PageContainer>
    </>
  );
};

export default InfoCommunityHome;
