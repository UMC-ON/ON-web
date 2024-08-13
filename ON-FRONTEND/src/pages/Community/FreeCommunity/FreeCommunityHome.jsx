import styled from 'styled-components';
import * as s from '../CommunityStyled.jsx';

import PageHeader from '../../../components/PageHeader/PageHeader.jsx';
import DotInsideSlider from '../../../components/DotInsideSlider.jsx';
import CommunityPost from '../../../components/CommunityPost/CommunityPost.jsx';
import FilterButton from '../../../components/FilterButton/FilterButton.jsx';

import communityBannerImg from '../../../assets/images/communityBannerImg.svg';
import pencilImg from '../../../assets/images/pencil.svg';
import gradientRec from '../../../assets/images/gradientRec.svg';

import { useNavigate } from 'react-router-dom';
import { CountryList } from '../../../components/CountryList.jsx';

import { PostList } from '../../../components/Common/TempDummyData/PostList.jsx';
import { useSelector } from 'react-redux';

const images = [communityBannerImg, communityBannerImg, communityBannerImg];

const InfoCommunityHome = () => {
  const userInfo = useSelector((state) => state.user);
  const navigate = useNavigate();
  const nav = () => {
    if (!userInfo) {
      if (confirm('로그인이 필요합니다.')) {
        navigate('/signUp');
        return null;
      } else {
        return null;
      }
    }
    navigate('./post');
  };
  const mylist = [1, 2, 3, 4, '와진짜개짱짱긴텍스트'];
  const currentBoardType = 'FREE';
  const currentPostList = PostList.filter(
    (post) => post.boardType === currentBoardType,
  );
  return (
    <>
      <s.PageContainer>
        <PageHeader
          pageName={'자유 게시판'}
          color="#6458BF"
        ></PageHeader>
        <s.SliderWrapper>
          <DotInsideSlider images={images}></DotInsideSlider>
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
              key={post.post_id}
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
