import styled from 'styled-components';
import * as s from './SignUpStyled';
import groupLogo from '../../assets/images/groupLogo.svg';
import { useNavigate } from 'react-router-dom';
import DefaultCheckBox from '../../components/DefaultCheckBox/DefaultCheckBox';

const UserInfoSchoolPage = () => {
  const navigate = useNavigate();
  const nav = () => {
    navigate('/signUp/userInfo_schoolAuth');
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
          <s.StyledH2>교환/방문교 정보 입력</s.StyledH2>
          <fieldset>
            <s.InputWrapper>
              <div
                style={{ color: 'black' }}
                className="required"
              >
                나의 교환/방문교
              </div>
              <s.TransparentInput placeholder="학교의 공식 영문명을 작성해주세요" />
            </s.InputWrapper>
            <DefaultCheckBox
              wrapperStyle={{ paddingTop: '12px' }}
              after="교환/방문교 미정"
              checkBoxStyle={{
                border: '0.5px solid #C6C6C6',
                width: '11px',
                height: '11px',
                borderRadius: '3px',
              }}
            />

            <s.InputWrapper>
              <div>교환/방문교 홈페이지 링크 </div>
              <s.TransparentInput placeholder="교환/방문교의 웹 사이트 주소를 붙여넣기 해주세요." />
            </s.InputWrapper>
            <s.Explanation style={{ fontSize: '9px' }}>
              사이트 주소는 가입 이후 마이페이지에서 수정하실 수 있습니다.
            </s.Explanation>

            <s.InputWrapper style={{ color: 'black', border: 'none' }}>
              <div className="required">교환/방문교 소재 국가</div>
              <s.SchoolComboBox defaultValue={'none'}>
                <option
                  value="none"
                  hidden
                >
                  국가
                </option>
                <option disabled>----북미----</option>
                <option>미국 </option>
                <option>캐나다</option>
                <option disabled>----유럽----</option>
                <option>영국 </option>
                <option>프랑스</option> <option>독일 </option>
                <option>스위스</option> <option>스웨덴</option>
                <option>이탈리아</option>
                <option>네덜란드</option> <option>스페인</option>
                <option>포르투갈</option> <option>오스트리아</option>
                <option>벨기에</option> <option>폴란드</option>
                <option>덴마크</option>
                <option>핀란드</option> <option disabled>----아시아----</option>
                <option>일본 </option>
                <option>중국 </option>
                <option>대만 </option>
                <option disabled>----오세아니아----</option>
                <option>호주 </option>
                <option>뉴질랜드</option>
              </s.SchoolComboBox>
            </s.InputWrapper>

            <s.InputWrapper style={{ color: 'black', border: 'none' }}>
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
            </s.InputWrapper>
          </fieldset>
        </s.ContentSection>
      </s.SectionWrapper>

      <s.ButtonSection>
        <s.PurpleButton onClick={nav}>다음단계</s.PurpleButton>
      </s.ButtonSection>
    </s.FormPage>
  );
};

export default UserInfoSchoolPage;

const RadioBtnDiv = styled.div`
  & > label {
    display: inline-block;
    padding-top: 0.938rem;
    margin-right: 0.938rem;
  }
`;

const StyledCheckBox = styled.input`
  width: 11px;
  height: 11px;
  flex-shrink: 0;
  fill: #fff;
  stroke-width: 0.5px;
  stroke: #c6c6c6;
  &:checked {
    accent-color: white;
  }
`;
