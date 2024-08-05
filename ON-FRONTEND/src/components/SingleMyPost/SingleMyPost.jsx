import * as s from './SingleMyPostStyled';
import Img from '../../assets/images/postImgExample.svg';

const SingleMyPost = ({
  title,
  time,
  content,
  nickName,
  image,
  verified,
  comment,
  categories,
}) => {
  const showImg = () => {
    console.log('dd', image);
    if (length.image === 0) false;
    else true;
  };
  return (
    <s.PostWrapper>
      <s.PostContainer>
        <s.Top>
          <s.Title>{title}</s.Title>
          <s.Time>{time}</s.Time>
        </s.Top>

        <s.ContentText>{content}</s.ContentText>
        <s.ContentImg
          src={Img}
          showimg={showImg}
        />
        <s.Info>
          <span style={{ color: '#7A7A7A', marginRight: '0.3rem' }}>
            {nickName}
          </span>
          {/* {verified} */}
          <s.VerifiedSvg />
          <s.CommentSvg />
          <span style={{ color: '#92A5BC' }}>{comment}</span>
        </s.Info>
      </s.PostContainer>
      <s.Delete>삭제</s.Delete>
    </s.PostWrapper>
  );
};

export default SingleMyPost;
