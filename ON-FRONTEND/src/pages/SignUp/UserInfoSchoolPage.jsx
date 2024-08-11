import styled from 'styled-components';
import * as s from './SignUpStyled';
import groupLogo from '../../assets/images/groupLogo.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import DefaultCheckBox from '../../components/DefaultCheckBox/DefaultCheckBox';
import { useState, useEffect } from 'react';

const UserInfoSchoolPage = () => {
  const prevUserInfo = useLocation().state.value;

  const [isDisabled, setDisabled] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(true);
  const [userInfo, setUserInfo] = useState({
    ...prevUserInfo,
    is_dispatch_confirmed: false,
    dispatched_univ: '',
    univ_homepage: '',
    dispatched_country_id: '',
    dispatched_type: '',
    start_date: '',
    is_verified: false,
  });
  const navigate = useNavigate();
  const nav = (confirmed) => {
    if (confirmed) {
      navigate('/signUp/userInfo_schoolAuth', { state: { value: userInfo } });
    } else {
      navigate('/signUp/notVerified', {
        state: { value: userInfo, text: '파견교 미정을 선택하셨습니다.' },
      });
    }
  };
  useEffect(() => {
    //useState의 비동기적..때문에
    if (
      !isConfirmed || //미정이거나
      !(!userInfo.dispatched_univ || !userInfo.dispatched_country_id) //확정이고 필수란 채운 경우
    ) {
      setDisabled(false); //다음단계 활성화
    } else {
      setDisabled(true);
    }
  }, [userInfo]);

  const onClickDsptchNotConfirmed = (e) => {
    if (e.target.value) {
      userInfo.dispatched_univ = '미정';
      userInfo.univ_homepage = '미정';
      userInfo.dispatched_country_id = '미정';
      userInfo.dispatched_type = '미정';
    } else {
    }
    setDisabled(!isConfirmed); //useState의 비동기성 때문에?.. 교환 확정이면 비활성화
    setIsConfirmed(!e.target.value);
  };
  const onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
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
                name="dispatched_univ"
                onChange={onChangeHandler}
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
              onChange={onClickDsptchNotConfirmed}
              name="is_dispatch_confirmed"
            />

            <s.InputWrapper style={{ opacity: isConfirmed ? '100%' : '50%' }}>
              <div>교환/방문교 홈페이지 링크 </div>
              <s.TransparentInput
                placeholder="교환/방문교의 웹 사이트 주소를 붙여넣기 해주세요."
                disabled={!isConfirmed}
                onChange={onChangeHandler}
                name="univ_homepage"
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
                onChange={onChangeHandler}
                disabled={!isConfirmed}
                name="dispatched_country_id"
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
          onClick={() => nav(isConfirmed)}
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
