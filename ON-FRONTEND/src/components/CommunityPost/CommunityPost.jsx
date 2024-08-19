import * as s from './CommunityPostStyled';
import styled from 'styled-components';
s;
import commentImg from '../../assets/images/commentImg.svg';
import verifiedBadge from '../../assets/images/verifiedBadge.svg';
import { useNavigate } from 'react-router-dom';
import { showDate } from '../Common/InfoExp';
import { CommentList } from '../Common/TempDummyData/PostList';

const CommunityPost = ({ post }) => {
  const navigate = useNavigate();

  const getNumOfComment = () => {
    let numOfComment = 0;
    CommentList.filter((comment) => {
      if (comment.post_id === post.postId) {
        numOfComment++;
      }
    });
    return numOfComment;
  };

  if (!post) {
    return null;
  }
  return (
    <s.Post
      onClick={() =>
        navigate(`./detail/${post.postId}`, {
          state: { value: post.postId },
        })
      }
    >
      <HeaderSection>
        <Title>{post.title}</Title>
        //<Date>{showDate(post.createdDate)}</Date>
      </HeaderSection>
      <ContentSection>
        <ContentWrapper>
          <TextContent>{post.content}</TextContent>

          <PostInfoWrapper>
            <Writer>
              {post.anonymous ? '익명' : post.writerInfo.nickname}
              <VerifiedImg
                src={verifiedBadge}
                is_verified={post.writerInfo.userState}
              />
            </Writer>
            <Comment>
              <img src={commentImg} />
              <div>{getNumOfComment()}</div>
            </Comment>
          </PostInfoWrapper>
        </ContentWrapper>
        <ContentImg
          src={post.imgIdList ? post.imgIdList[0] : null}
          showimg={(post.imgIdList.length > 0).toString()}
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
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 30%;
`;

const ContentSection = styled.section`
  box-sizing: border-box;
  overflow: hidden;
  flex: auto;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  justify-content: space-between;
  height: 90%;
  width: 100%;
`;

const Title = styled.h4`
  flex: auto;
  width: auto;
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
  white-space: nowrap;
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
  justify-content: space-between;

  height: auto;
  width: 100%;
`;
const ContentImg = styled.img`
  flex-shrink: 0;
  display: ${(props) => (props.showimg === 'true' ? 'inline' : 'none')};
  width: 82px;
  height: 82px;
  margin-left: 12px;
  border-radius: 0.5rem;
  object-fit: cover;
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
  display: ${(props) =>
    props.is_verified === 'ACTIVE' ? 'inline-block' : 'none'};
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
