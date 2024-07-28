import styled from 'styled-components';
import * as s from './SignUpStyled';
import groupLogo from '../../assets/images/groupLogo.svg';
import { useNavigate } from 'react-router-dom';

const UserInfoAdditionalPage = () => {
  const navigate = useNavigate();
  const nav = () => {
    navigate('/signUp/userInfo_school');
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
          <s.StyledH2 className="margin_bottom_40">정보 입력</s.StyledH2>
          <s.StyledFieldSet>
            <label
              style={{ color: 'black' }}
              className="margin_bottom_40"
            >
              이름
              <s.InputWrapper>
                <s.TransparentInput placeholder="본명으로 작성해 주세요" />
              </s.InputWrapper>
            </label>
            <s.TwoColumnWrapper>
              <label
                style={{ color: 'black' }}
                className="margin_bottom_40"
              >
                나이
                <s.InputWrapper>
                  <s.TransparentInput placeholder="숫자만 입력해주세요" />
                </s.InputWrapper>
              </label>
              <EmptyDiv></EmptyDiv>
              <label
                style={{ color: 'black' }}
                className="margin_bottom_40"
              >
                성별
                <s.StyledComboBox defaultValue={'none'}>
                  <option
                    value="none"
                    hidden
                  ></option>
                  <option value="M">남자</option>
                  <option value="F">여자</option>
                  <option value="E">기타</option>
                </s.StyledComboBox>
              </label>
            </s.TwoColumnWrapper>
            <label
              style={{ color: 'black' }}
              className="margin_bottom_40"
            >
              닉네임
              <s.InputWrapper>
                <s.TransparentInput />
              </s.InputWrapper>
            </label>
          </s.StyledFieldSet>
        </s.ContentSection>
      </s.SectionWrapper>

      <s.ButtonSection>
        <s.TwoColumnWrapper>
          <s.PurpleButton
            onClick={nav}
            style={{ backgroundColor: ' #d7dff4' }}
          >
            건너뛰기
          </s.PurpleButton>
          <s.PurpleButton onClick={nav}>입력완료</s.PurpleButton>
        </s.TwoColumnWrapper>
      </s.ButtonSection>
    </s.FormPage>
  );
};

export default UserInfoAdditionalPage;

const EmptyDiv = styled.div`
  width: calc(100% / 13);
`;
