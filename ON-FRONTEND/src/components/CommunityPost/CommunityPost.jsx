import * as s from './CommunityPostStyled';
import styled from 'styled-components';
import Img from '../../assets/images/postImgExample.svg';
import commentImg from '../../assets/images/commentImg.svg';
import verifiedBadge from '../../assets/images/verifiedBadge.svg';

const CommunityPost = () => {
  return (
    <s.Post>
      <HeaderSection>
        <Title>[독일 교환학생 준비] Ep 1. 테아민 잡기</Title>
        <Date>10분 전</Date>
      </HeaderSection>
      <ContentSection>
        <ContentWrapper>
          <TextContent>
            따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 ​ 독일로 교환학생을
            앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약! ​ 저는
            3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?)
            유럽 여행을 위해 비자를 발급받으려 합니다! 이를 위해서는,,,,
            피켓팅.. 치열하다.. 힘들다.. 세상 부정적인 단어들로 불리는 테아민을
            잡아야 하는데요!
          </TextContent>

          <PostInfoWrapper>
            <Writer>
              익명
              <VerifiedImg
                src={verifiedBadge}
                verified={'verified'}
              />
            </Writer>
            <Comment>
              <img src={commentImg} />
              <div style={{ paddingBottom: '3px' }}>1</div>
            </Comment>
          </PostInfoWrapper>
        </ContentWrapper>
        <ContentImg
          src={Img}
          showimg={'true'}
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
  display: ${(props) => (props.showimg === 'true' ? 'inline' : 'none')};
  width: 82px;
  height: 82px;
  margin-left: 12px;
`;
const TextContent = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  box-sizing: border-box;
  height: calc(18px * 3);
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
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-content: center;

  flex-wrap: wrap;
  align-items: center;
  flex: auto;

  & > * {
    margin: 0 3px;
  }
`;
const Writer = styled.div`
  font-size: 8px;
  display: flex;
  flex-direction: row;
  align-content: center;
`;
const VerifiedImg = styled.img`
  padding: 0 2px;
  display: ${(props) =>
    props.verified === 'verified' ? 'inline-block' : 'none'};
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
