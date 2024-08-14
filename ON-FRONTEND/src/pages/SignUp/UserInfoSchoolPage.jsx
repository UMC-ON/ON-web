import styled from 'styled-components';
import * as s from './SignUpStyled';
import groupLogo from '../../assets/images/groupLogo.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import DefaultCheckBox from '../../components/DefaultCheckBox/DefaultCheckBox';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions';

const UserInfoSchoolPage = () => {
  const [isDisabled, setDisabled] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(true);
  let userInfo = useSelector((state) => state.user);
  const navigate = useNavigate();
  const nav = (confirmed) => {
    if (confirmed) {
      navigate('/signUp/userInfo_schoolAuth', { state: { value: userInfo } });
      dispatch(setUser(userInfo));
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
      !(!userInfo.dispatchedUniversity || !userInfo.country) //확정이고 필수란 채운 경우
    ) {
      setDisabled(false); //다음단계 활성화
    } else {
      setDisabled(true);
    }
  }, [userInfo]);

  const onClickDsptchNotConfirmed = (e) => {
    if (e.target.value) {
      userInfo.dispatchedUniversity = '';
      userInfo.univ_homepage = '';
      userInfo.country = '';
      userInfo.dispatchedType = '';
      userInfo.userState = 'NON_CERTIFY';
    } else {
      userInfo.userState = 'TEMPORARY';
    }
    setDisabled(!isConfirmed); //useState의 비동기성 때문에?.. 교환 확정이면 비활성화
    setIsConfirmed(!e.target.value);
  };
  const onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    userInfo = { ...userInfo, [name]: value };
    console.log(userInfo);
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
                name="dispatchedUniversity"
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
              name="userState"
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
                    name="dispatchedType"
                    value="exchange"
                    disabled={!isConfirmed}
                    onChange={onChangeHandler}
                  />
                  교환학생
                </label>
                <label>
                  <s.RadioButton
                    type="radio"
                    name="dispatchedType"
                    value="visit"
                    disabled={!isConfirmed}
                    onChange={onChangeHandler}
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
