import * as s from './CommunityStyled.jsx';

import PageHeader from '../../components/PageHeader/PageHeader.jsx';
import DotInslideSlider from '../../components/DotInsideSlider.jsx';
import CommunityPost from '../../components/CommunityPost/CommunityPost.jsx';
import FilterButton from '../../components/FilterButton/FilterButton.jsx';

import communityBannerImg from '../../assets/images/communityBannerImg.svg';
import pencilImg from '../../assets/images/pencil.svg';
import gradientRec from '../../assets/images/gradientRec.svg';
import { useNavigate } from 'react-router-dom';
import { CountryList } from '../../components/CountryList.jsx';

import { PostList } from '../../components/Common/TempDummyData/PostList.jsx';
import { useSelector } from 'react-redux';

const images = [communityBannerImg, communityBannerImg, communityBannerImg];

const CommunityHome = ({ boardType, color1, color2 }) => {
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
  const currentBoardType = boardType;
  const currentPostList = PostList.filter(
    (post) => post.boardType === currentBoardType,
  );
  return (
    <>
      <s.PageContainer>
        <PageHeader
          pageName={boardType === 'INFO' ? '정보 게시판' : '자유 게시판'}
          color={boardType === 'INFO' ? '#3E73B2' : '#6458BF'}
        ></PageHeader>
        <s.SliderWrapper>
          <DotInslideSlider images={images}></DotInslideSlider>
        </s.SliderWrapper>

        <s.FilterSection>
          <FilterButton
            color1={color1}
            color2={color2}
            myList={CountryList}
            placeholder="국가"
          />
        </s.FilterSection>
        <s.PostListSection>
          {currentPostList.map((post) => (
            <CommunityPost
              key={post.postId}
              post={post}
            />
          ))}
        </s.PostListSection>
        <s.WriteButton
          style={{ background: `linear-gradient(135deg,${color1},${color2})` }}
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

export default CommunityHome;
