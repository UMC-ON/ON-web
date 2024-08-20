import * as s from './SinglePostStyled';
import { useNavigate } from 'react-router-dom';

const SinglePost = ({
  postId,
  title,
  time,
  content,
  nickName,
  verified,
  comment,
  boardType,
}) => {
  const navigate = useNavigate();
  return (
    <s.SearchWrapper
      onClick={() =>
        navigate(`/community/${boardType}/detail/${postId}`, {
          state: { value: postId },
        })
      }
    >
      <s.Title>{title}</s.Title>
      <s.Time>{time}</s.Time>
      <s.Content>{content}</s.Content>
      <s.Info>
        <span style={{ color: '#7A7A7A', marginRight: '0.3rem' }}>
          {nickName}
        </span>
        {verified ? <s.VerifiedSvg /> : ''}
        <s.CommentSvg />
        <span style={{ color: '#92A5BC' }}>{comment}</span>
      </s.Info>
      <s.Categories>
        {boardType === 'general' ? '자유게시판' : '정보게시판'}
      </s.Categories>
    </s.SearchWrapper>
  );
};

export default SinglePost;
