import styled from 'styled-components';
import * as s from './SignUpStyled';
import on_logo from '../../assets/images/on_logo.svg';
import polygon1 from '../../assets/images/polygon1.png';
import { useNavigate } from 'react-router-dom';

const SignUp_UserInfo_School = () => {
  return (
    <s.FormPage>
      <s.TitleSection>
        <s.Logo src={on_logo} />
        <div className="on_exp">교환/방문학생 정보공유 커뮤니티, ON </div>
      </s.TitleSection>
      <s.ContentSection>
        <div className="back">
          <u>이전 단계</u>
        </div>
        <s.StyledH2>교환/방문교 정보 입력</s.StyledH2>
        <s.StyledFieldSet>
          <label>
            나의 교환/방문교
            <s.InputWrapper>
              <s.TransparentInput placeholder="학교의 공식 영문명을 작성해주세요" />
            </s.InputWrapper>
            <StyledCheckBox
              type="checkbox"
              id="school_unsure"
            />
            <GrayLabel for="school_unsure">교환/방문교 미정</GrayLabel>
          </label>
          <label>
            교환/방문교 소재 국가
            <SchoolComboBox defaultValue={'none'}>
              <option
                value="none"
                hidden
              >
                국가를 선택해주세요
              </option>
              <option disabled>--북미--</option>
              <option>미국 </option>
              <option>캐나다</option>
              <option disabled>--유럽--</option>
              <option>영국 </option>
              <option>프랑스</option> <option>독일 </option>
              <option>스위스</option> <option>스웨덴</option>
              <option>이탈리아</option>
              <option>네덜란드</option> <option>스페인</option>
              <option>포르투갈</option> <option>오스트리아</option>
              <option>벨기에</option> <option>폴란드</option>
              <option>덴마크</option>
              <option>핀란드</option> <option disabled>--아시아--</option>
              <option>일본 </option>
              <option>중국 </option>
              <option>대만 </option>
              <option disabled>--오스트레일리아--</option>
              <option>호주 </option>
              <option>뉴질랜드</option>
            </SchoolComboBox>
          </label>
          <label>
            파견 유형
            <RadioBtnDiv>
              <label>
                <s.RadioButton
                  type="radio"
                  name="type"
                />
                교환학생
              </label>
              <label>
                <s.RadioButton
                  type="radio"
                  name="type"
                />
                방문학생
              </label>
            </RadioBtnDiv>
          </label>
        </s.StyledFieldSet>
      </s.ContentSection>
      <s.ButtonSection>
        <s.PurpleButton>회원가입</s.PurpleButton>
      </s.ButtonSection>
    </s.FormPage>
  );
};

export default SignUp_UserInfo_School;

const RadioBtnDiv = styled.div`
  & > label {
    display: inline-block;
    padding-top: 0.938rem;
    margin-right: 0.938rem;
  }
`;

const StyledCheckBox = styled.input`
  vertical-align: -0.188rem;
  appearance: none;
  width: 0.688rem;
  height: 0.688rem;
  border: 1px solid #c6c6c6;
  &:checked {
    background: transparent;
  }
`;

const GrayLabel = styled.label`
  display: inline-block;
  margin-top: 0.688rem;
  color: black;
  opacity: 64%;
  font-size: 0.688rem;
`;

const SchoolComboBox = styled(s.StyledComboBox)`
  display: block;
  width: calc(100% / 2);
  border-radius: 0.8rem;
  outline: none;
  border: none;
  background: url(${polygon1}) no-repeat right 0.8rem center #f3f3f3;
  padding: 0.25rem 0.625rem;
  margin: 0.625rem 0;
  font-size: 0.75rem;
  color: #979797;
`;
