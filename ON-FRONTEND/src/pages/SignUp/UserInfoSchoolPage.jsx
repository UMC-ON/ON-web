import styled from 'styled-components';
import * as s from './SignUpStyled';
import groupLogo from '../../assets/images/groupLogo.svg';
import { useNavigate } from 'react-router-dom';
import DefaultCheckBox from '../../components/DefaultCheckBox/DefaultCheckBox';
import { useState, useRef } from 'react';
import { userInfo } from '../../components/Common/TempDummyData/PostList';

const UserInfoSchoolPage = () => {
  const navigate = useNavigate();
  const nav = () => {
    userInfo.dispatched_univ = univ.current.value;
    userInfo.dispatched_country_id = dispatched_country.current.value;
    userInfo.dispatched_type = dispatched_type.current.value;
    userInfo.is_dispatch_confirmed = isConfirmed;
    navigate('/signUp/userInfo_schoolAuth');
  };

  const univ = useRef('');
  const univ_link = useRef('');
  const dispatched_country = useRef('');
  const dispatched_type = useRef('');
  const [isDisabled, setDisabled] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(true);

  const onClickIsConfirmed = (e) => {
    if (e.target.value) {
      univ.current.value = '';
      univ_link.current.value = '';
      console.log(dispatched_type.current.value);
      dispatched_type.current = '';
    } else {
    }
    setDisabled(!isConfirmed); //useState의 비동기성 때문에 미리 해준다
    setIsConfirmed(!e.target.value);
  };
  const onChangeHandler = () => {
    console.log(univ.current.value);
    if (univ.current.value && dispatched_country.current.value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
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
            <s.InputWrapper style={{ opacity: isConfirmed ? '100%' : '50%' }}>
              <div
                style={{ color: 'black' }}
                className="required"
              >
                나의 교환/방문교
              </div>
              <s.TransparentInput
                placeholder="학교의 공식 영문명을 작성해주세요"
                onChange={onChangeHandler}
                ref={univ}
                disabled={!isConfirmed}
              />
            </s.InputWrapper>
            <DefaultCheckBox
              wrapperStyle={{
                paddingTop: '12px',
                color: isConfirmed ? '' : 'black',
              }}
              after="교환/방문교 미정"
              checkBoxStyle={{
                border: '0.5px solid #C6C6C6',
                width: '11px',
                height: '11px',
                borderRadius: '3px',
              }}
              onChange={onClickIsConfirmed}
            />

            <s.InputWrapper style={{ opacity: isConfirmed ? '100%' : '50%' }}>
              <div>교환/방문교 홈페이지 링크 </div>
              <s.TransparentInput
                placeholder="교환/방문교의 웹 사이트 주소를 붙여넣기 해주세요."
                ref={univ_link}
                disabled={!isConfirmed}
              />
            </s.InputWrapper>
            <s.Explanation style={{ fontSize: '9px' }}>
              사이트 주소는 가입 이후 마이페이지에서 수정하실 수 있습니다.
            </s.Explanation>

            <s.InputWrapper
              style={{
                color: 'black',
                border: 'none',
                opacity: isConfirmed ? '100%' : '50%',
              }}
            >
              <div className="required">교환/방문교 소재 국가</div>
              <s.SchoolComboBox
                defaultValue={''}
                ref={dispatched_country}
                onChange={onChangeHandler}
                disabled={!isConfirmed}
              >
                <option
                  value=""
                  hidden
                >
                  국가
                </option>
                <option disabled>----북미----</option>
                <option value="US">미국 </option>
                <option value="CA">캐나다</option>
                <option disabled>----유럽----</option>
                <option value="UK">영국 </option>
                <option value="FR">프랑스</option>
                <option value="DE">독일 </option>
                <option value="CH">스위스</option>
                <option value="SE">스웨덴</option>
                <option value="IT">이탈리아</option>
                <option value="NL">네덜란드</option>
                <option value="ES">스페인</option>
                <option value="PT">포르투갈</option>
                <option value="AT">오스트리아</option>
                <option value="BE">벨기에</option>
                <option value="PL">폴란드</option>
                <option value="DK">덴마크</option>
                <option value="FI">핀란드</option>
                <option disabled>----아시아----</option>
                <option value="JP">일본 </option>
                <option value="CN">중국 </option>
                <option value="TW">대만 </option>
                <option disabled>----오세아니아----</option>
                <option value="AU">호주 </option>
                <option value="NZ">뉴질랜드</option>
              </s.SchoolComboBox>
            </s.InputWrapper>

            <s.InputWrapper
              style={{
                color: 'black',
                border: 'none',
                opacity: isConfirmed ? '100%' : '50%',
              }}
            >
              파견 유형
              <RadioBtnDiv>
                <label>
                  <s.RadioButton
                    type="radio"
                    name="type"
                    value="exchange"
                    disabled={!isConfirmed}
                  />
                  교환학생
                </label>
                <label>
                  <s.RadioButton
                    type="radio"
                    name="type"
                    value="visit"
                    disabled={!isConfirmed}
                  />
                  방문학생
                </label>
              </RadioBtnDiv>
            </s.InputWrapper>
          </fieldset>
        </s.ContentSection>
      </s.SectionWrapper>

      <s.ButtonSection>
        <s.PurpleButton
          onClick={nav}
          disabled={isDisabled}
        >
          다음단계
        </s.PurpleButton>
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
