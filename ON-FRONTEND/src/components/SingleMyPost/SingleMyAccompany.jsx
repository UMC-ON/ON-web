import * as s from './SingleMyAccompanyStyled';
import Img from '../../assets/images/postImgExample.svg';

const SingleMyAccompany = ({
  image,
  title,
  date,
  content,
  numberOfPeople,
  location,
}) => {
  return (
    <s.PostWrapper>
      <s.PostContainer>
        <s.ContentImg src={Img} />
        <s.Title>{title}</s.Title>
        <s.Date>
          <s.DateSvg />
          <span>{date}</span>
        </s.Date>
        <s.Num>
          <s.NumSvg />
          <span>{numberOfPeople}</span>
        </s.Num>
        <s.Location>
          <s.LocationSvg />
          <span>{location}</span>
        </s.Location>
        <s.ContentText>{content}</s.ContentText>
        <s.Info>
          <s.ProfileSvg />
          <span style={{ color: '#7A7A7A', marginLeft: '0.3rem' }}>
            {numberOfPeople}
          </span>
        </s.Info>
        <s.Delete>삭제</s.Delete>
      </s.PostContainer>
    </s.PostWrapper>
  );
};

export default SingleMyAccompany;
