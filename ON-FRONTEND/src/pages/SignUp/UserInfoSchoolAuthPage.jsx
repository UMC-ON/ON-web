import styled from 'styled-components';
import * as s from './SignUpStyled';
import groupLogo from '../../assets/images/groupLogo.svg';
import addPhoto from '../../assets/images/addPhoto.svg';
import { useNavigate } from 'react-router-dom';

const UserInfoSchoolAuthPage = () => {
  const navigate = useNavigate();
  const nav = () => {
    navigate('/signUp/complete');
  };
  return (
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
          <s.StyledH2>교환/방문교 인증</s.StyledH2>
          <s.Explanation>
            신뢰할 수 있는 커뮤니티를 위해 교환/방문교의 파견사실을 확인하고
            있습니다. 인증을 하지 않아도 커뮤니티 글을 쓰고 읽을 수 있지만 일부
            기능(동행 구하기, 물품 거래)이 제한됩니다.
          </s.Explanation>
          <fieldset>
            <s.InputWrapper>
              <div>나의 교환/방문교</div>
              <s.TransparentInput placeholder="아까 적은 학교 이름 자동으로 표시" />
            </s.InputWrapper>
          </fieldset>
          <s.CenterContainer>
            <AddPhoto src={addPhoto} />
          </s.CenterContainer>
        </s.ContentSection>
      </s.SectionWrapper>

      <s.ButtonSection>
        <s.TwoColumnWrapper>
          <s.PurpleButton style={{ backgroundColor: ' #d7dff4' }}>
            건너뛰기
          </s.PurpleButton>
          <s.PurpleButton onClick={nav}>회원가입</s.PurpleButton>
        </s.TwoColumnWrapper>
      </s.ButtonSection>
    </s.FormPage>
  );
};

export default UserInfoSchoolAuthPage;

const AddPhoto = styled.img`
  width: 310px;
  height: 310px;
  margin: 26px 40px;
  flex-shrink: 0;
`;
