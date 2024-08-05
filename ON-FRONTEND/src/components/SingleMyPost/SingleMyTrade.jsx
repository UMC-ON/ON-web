import * as s from './SingleMyTradeStyled';
import Img from '../../assets/images/postImgExample.svg';

const SingleMyTrade = ({
  image,
  title,
  time,
  tradeStyle,
  isAvailable,
  user,
  location,
  price,
}) => {
  return (
    <s.PostWrapper>
      <s.PostContainer>
        <s.ContentImg src={Img} />
        <s.TitleContainer>
          <s.Title>{title}</s.Title>
          <s.Time>
            <span>{time}</span>
          </s.Time>
        </s.TitleContainer>
        <s.TradingStyle>
          <span>
            {tradeStyle} | {isAvailable}
          </span>
        </s.TradingStyle>
        <s.Location>
          <s.LocationSvg />
          <span>{location}</span>
        </s.Location>
        <s.User>
          <s.ProfileSvg />
          <span style={{ color: '#7A7A7A', marginLeft: '0.3rem' }}>{user}</span>
        </s.User>
        <s.Price> &#x20A9;{price}</s.Price>
        <s.Delete>삭제</s.Delete>
      </s.PostContainer>
    </s.PostWrapper>
  );
};

export default SingleMyTrade;
