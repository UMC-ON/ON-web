import * as s from './SignUpStyled';
import { useNavigate, useLocation } from 'react-router-dom';
import groupLogo from '../../assets/images/groupLogo.svg';
import { UserList } from '../../components/Common/TempDummyData/PostList';

const NotVerifiedPage = () => {
  const userInfo = useLocation().state.value;
  const text = useLocation().state.text;
  console.log(useLocation());
  const navigate = useNavigate();
  const nav = () => {
    UserList.unshift(userInfo); //DB 유저 리스트에 유저 추가
    console.log(UserList);
    navigate('/signUp/complete');
    console.log(userInfo);
  };
  return (
    <>
      <s.FormPage>
        <s.SectionWrapper>
          <s.TitleSection>
            <s.Logo src={groupLogo} />
            <div className="on_exp">교환/방문학생 정보공유 커뮤니티, ON </div>
          </s.TitleSection>
          <s.ContentSection>
            <s.BackButton
              onClick={() => {
                navigate(-1);
              }}
            >
              이전 단계
            </s.BackButton>
            <s.StyledH2>교환/방문교 미인증</s.StyledH2>
            <s.Explanation>
              신뢰할 수 있는 커뮤니티를 위해 교환/방문교의 파견사실을 확인하고
              있습니다. 인증을 하지 않아도 커뮤니티 글을 쓰고 읽을 수 있지만
              일부 기능(동행 구하기, 물품 거래)이 제한됩니다.
            </s.Explanation>
            <s.CenterContainer>
              <s.StyledH2
                style={{
                  color: 'gray',
                  margin: '10rem 0 2.5rem 0',
                  textAlign: 'center',
                }}
              >
                {text}
              </s.StyledH2>
              <s.Explanation
                style={{
                  textAlign: 'center',
                }}
              >
                규정에 따라 동행구하기, 물품거래 기능이 제한됩니다.
                <br /> 만약 인증을 원하시면 추후 파견 확정 시에 마이페이지에서
                인증하실 수 있습니다.
              </s.Explanation>
            </s.CenterContainer>
          </s.ContentSection>
        </s.SectionWrapper>
        <s.PurpleButton onClick={nav}>확인</s.PurpleButton>
      </s.FormPage>
    </>
  );
};

export default NotVerifiedPage;
