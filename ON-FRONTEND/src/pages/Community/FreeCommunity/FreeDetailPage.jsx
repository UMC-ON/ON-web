import styled from 'styled-components';
import { useRef } from 'react';

const FreeDetailPage = () => {
  //const textarea = useRef(null);

  const handleResizeHeight = () => {
    const textarea = document.querySelector('.commentEditor');
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  return (
    <>
      <ConfirmHeader>
        <BackButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            positions="fixed"
          >
            <path
              d="M8 2L1.8858 7.24074C1.42019 7.63984 1.42019 8.36016 1.8858 8.75926L8 14"
              stroke="#7A7A7A"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </BackButton>
        <PostInfo>
          <InfoLabel>익명</InfoLabel>
          <InfoLabel>
            KR
            <img />
            DE
          </InfoLabel>
          <InfoLabel>5min ago</InfoLabel>
        </PostInfo>
      </ConfirmHeader>
      <DetailPageLayout>
        <Title>[🇩🇪 독일 교환학생 준비] ep.1 테아민 잡기</Title>
        <Content>
          따끈하다 못해 뜨거운 테아민 예약 후기입니닷😉 ​ 독일로 교환학생을
          앞두고 있는 사람이라면!!!! 반드시 알아야 하는 테아민 예약! ​ 저는
          3개월 만에 학기가 끝나는 학교로 가지만, 이후 보다 편안하고 안전한(?)
          유럽 여행을 위해 비자를 발급받으려 합니다! 이를 위해서는,,,, 피켓팅..
          치열하다.. 힘들다.. 세상 부정적인 단어들로 불리는 테아민을 잡아야
          하는데요! https://seoul.diplo.de/kr-ko/service/-/1694286 (이 홈페이지
          아래쪽에 '영사과 온라인 방문 예약 시스템 바로가기'를 누르시면 테아민
          창 뜹니다!) 결론부터 말씀드리자면, 잡을 수 있습니다!!!!!! 2024. 1. 7.
          (일) ​ 교환학생 합격 여부가 작년 9월에 나왔지만 저는 3월 말
          출국이라... 😌느긋느긋 배짱이😌 수준으로 아무 생각 없이 살았는데, 이제
          슬슬 잡아볼까~? 하며 1월 7일 일요일부터 시도를 해봤습니다! 으음..
          당연히 안되죠.. 함 해볼까~?라는 마인드로 들어가면 절대 잡을 수가
          업슴,,,,,
        </Content>
        <CommentWritingDiv>
          <CommentEditor
            className="commentEditor"
            placeholder="댓글을 작성해주세요."
            onInput={handleResizeHeight}
            rows={1}
          />
        </CommentWritingDiv>
      </DetailPageLayout>
    </>
  );
};

export default FreeDetailPage;

export const ConfirmHeader = styled.div`
  width: 100%;
  height: 61px;
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: row;
  top: 0;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-width: 0.5px 0;
  box-sizing: border-box;
  padding: 0 17px 0 17px;
`;

const BackButton = styled.div`
  margin-left: 17px;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`;
const InfoLabel = styled.div`
  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin: 0 4.5px;
`;
const Title = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: left;
  padding: 17px 32px;
  width: 100%;
  min-height: 60.126px;
  height: auto;
  color: black;
  background: ${(props) => props.color || '#BFD8E5'};

  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
`;
const DetailPageLayout = styled.div`
  background: white;
  box-sizing: border-box;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  padding-top: 61px;
`;

const Content = styled.pre`
  box-sizing: border-box;
  width: 100%;
  padding: 19px 29px;

  text-align: left;
  white-space: pre-wrap;

  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CommentWritingDiv = styled.div`
  box-sizing: border-box;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;

  width: 100vw;
  height: auto;
  min-height: 70px;
  border-radius: 30px 30px 0px 0px;
  background: linear-gradient(135deg, #f1f8ff 0%, #f2f3ff 100%);
  box-shadow: 0px -3px 3px 0px rgba(0, 0, 0, 0.05);
  padding: 14px 15px;
`;
const CommentEditor = styled.textarea`
  box-sizing: border-box;
  background-color: transparent;
  border: none;

  flex: auto;

  &:focus {
    outline: none;
  }

  color: #3d3d3d;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  height: auto;
  min-height: 52px;
  max-height: 130px;
`;
