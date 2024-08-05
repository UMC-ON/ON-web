import * as s from './SinglePostStyled';

const SinglePost = ({
  title,
  time,
  content,
  nickName,
  verified,
  comment,
  categories,
}) => {
  return (
    <s.SearchWrapper>
      <s.Title>{title}</s.Title>
      <s.Time>{time}</s.Time>
      <s.Content>{content}</s.Content>
      <s.Info>
        <span style={{ color: '#7A7A7A', marginRight: '0.3rem' }}>
          {nickName}
        </span>
        {/* {verified} */}
        <s.VerifiedSvg />
        <s.CommentSvg />
        <span style={{ color: '#92A5BC' }}>{comment}</span>
      </s.Info>
      <s.Categories>{categories}</s.Categories>
    </s.SearchWrapper>
  );
};

export default SinglePost;
