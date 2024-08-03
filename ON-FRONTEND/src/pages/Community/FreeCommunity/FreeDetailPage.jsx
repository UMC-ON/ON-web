import * as s from '../DetailPageStyled.jsx';
import DefaultCheckBox from '../../../components/DefaultCheckBox/DefaultCheckBox.jsx';
import commentImg from '../../../assets/images/commentImg.svg';

const FreeDetailPage = () => {
  //const textarea = useRef(null);

  const handleResizeHeight = () => {
    const textarea = document.querySelector('.commentEditor');
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  return (
    <>
      <s.ConfirmHeader>
        <s.BackButton>
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
        </s.BackButton>
        <s.PostInfo>
          <s.InfoLabel>익명</s.InfoLabel>
          <s.InfoLabel>
            KR
            <img />
            DE
          </s.InfoLabel>
          <s.InfoLabel>5min ago</s.InfoLabel>
        </s.PostInfo>
      </s.ConfirmHeader>
      <s.DetailPageLayout>
        <s.Title color="#CBCDE9">
          [🇩🇪 독일 교환학생 준비] ep.1 테아민 잡기
        </s.Title>
        <s.Content>
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
        </s.Content>
        <s.CommentSection>
          <s.CommentNum>
            <img src={commentImg} />3
          </s.CommentNum>
          <s.Comment>
            <s.Writer>익명</s.Writer>테아민 잡는 거 걱정하고 있었는데.. 저도 꼭
            성공했으면 좋겠네요ㅠㅠ 감사합니다!!
          </s.Comment>
          <s.Reply>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
            >
              <path
                d="M1 0V8.73529H10M10 8.73529L8.43478 6.47059M10 8.73529L8.43478 11"
                stroke="black"
                strokeOpacity="0.5"
                strokeWidth="0.5"
              />
            </svg>
            <div>
              <s.Writer>글쓴이</s.Writer>
              미리 하시는 거면 크게 걱정 안 하셔도 돼요! 행운을 빕니다!
            </div>
          </s.Reply>
        </s.CommentSection>
        <s.CommentWritingDiv color1="#F8F7FF">
          <DefaultCheckBox
            before="익명"
            checkBoxStyle={{
              border: '0.2px solid rgba(0, 0, 0, 0.50)',
              width: '14px',
              height: '14px',
              borderRadius: '5px',
            }}
          />
          <s.CommentEditor
            className="commentEditor"
            placeholder="댓글을 작성해주세요."
            onInput={handleResizeHeight}
            rows={1}
          />
        </s.CommentWritingDiv>
      </s.DetailPageLayout>
    </>
  );
};

export default FreeDetailPage;
