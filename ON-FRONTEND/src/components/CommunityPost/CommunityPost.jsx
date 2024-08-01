import * as s from './CommunityPostStyled';
import styled from 'styled-components';
s;
import commentImg from '../../assets/images/commentImg.svg';
import verifiedBadge from '../../assets/images/verifiedBadge.svg';
import { useNavigate } from 'react-router-dom';

import { CommentList } from '../Common/TempDummyData/PostList';

const CommunityPost = ({ post }) => {
  const navigate = useNavigate();
  const nav = () => {
    navigate('./detail');
  };

  return (
    <s.Post onClick={nav}>
      <HeaderSection>
        <Title>{post.title}</Title>
        <Date>{post.date}</Date>
      </HeaderSection>
      <ContentSection>
        <ContentWrapper>
          <TextContent>{post.content}</TextContent>

          <PostInfoWrapper>
            <Writer>
              {post.is_anonymous ? '익명' : post.writerInfo.name}
              <VerifiedImg
                src={verifiedBadge}
                is_verified={post.writerInfo.is_verified.toString()}
              />
            </Writer>
            <Comment>
              <img src={commentImg} />
              <div>1</div>
            </Comment>
          </PostInfoWrapper>
        </ContentWrapper>
        <ContentImg
          src={post.img_id_list}
          showimg={post.img_id_list}
        />
      </ContentSection>
    </s.Post>
  );
};

export default CommunityPost;

const HeaderSection = styled.section`
  box-sizing: border-box;
  padding-bottom: 8px;
  flex: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30%;
`;

const ContentSection = styled.section`
  box-sizing: border-box;
  overflow: hidden;
  flex: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 90%;
  width: 100%;
`;

const Title = styled.h4`
  height: 100%;
  overflow: hidden;
  color: #363636;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.28px;
`;
const Date = styled.div`
  color: #7a7a7a;

  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: start;
  flex: auto;
  height: 100%;
  width: 100%;
`;
const ContentImg = styled.img`
  display: ${(props) => (props.showimg ? 'inline' : 'none')};
  width: 82px;
  height: 82px;
  margin-left: 12px;
  border-radius: 0.5rem;
`;
const TextContent = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  box-sizing: border-box;
  max-height: calc(18px * 3);
  height: auto;
  overflow: hidden;
  color: #838383;
  text-overflow: ellipsis;
  text-align: justify;
  white-space: normal;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  letter-spacing: 0.24px;
`;
const PostInfoWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-content: center;

  flex-wrap: wrap;
  align-items: center;
  padding-top: 1rem;

  //flex: auto;

  & > * {
    margin: 0 5px 0 0;
  }
`;
const Writer = styled.div`
  color: #7a7a7a;
  font-size: 8px;
  display: flex;
  flex-direction: row;
  align-content: center;
`;
const VerifiedImg = styled.img`
  padding: 0 2px;
  display: ${(props) => (props.is_verified ? 'inline-block' : 'none')};
`;
const Comment = styled.div`
  padding-top: 2px;
  display: flex;
  flex-direction: row;
  align-content: center;
  color: #92a5bc;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 12px */
  & > * {
    padding: 0 1px;
  }
`;
