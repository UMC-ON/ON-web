import styled from 'styled-components';
import * as s from './SignUpStyled';
import groupLogo from '../../assets/images/groupLogo.svg';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { userInfo } from '../../components/Common/TempDummyData/PostList';

const UserInfoAdditionalPage = () => {
  const navigate = useNavigate();
  const nav = () => {
    userInfo.name = userName.current.value;
    userInfo.age = userAge.current.value;
    userInfo.gender = userGender.current.value;
    userInfo.nickName = userNickName.current.value;
    navigate('/signUp/userInfo_school');
  };

  const userName = useRef(null);
  const userAge = useRef(null);
  const userGender = useRef(null);
  const userNickName = useRef(null);
  const nextBtn = useRef(null);
  const [isDisabled, setDisabled] = useState(true);
  const onChangeHandler = () => {
    if (
      userName.current.value &&
      userAge.current.value &&
      userGender.current.value &&
      userNickName.current.value
    ) {
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
          <s.StyledH2>정보 입력</s.StyledH2>
          <fieldset>
            <s.InputWrapper>
              <div>이름</div>
              <s.TransparentInput
                placeholder="본명으로 작성해 주세요"
                ref={userName}
                onChange={onChangeHandler}
              />
            </s.InputWrapper>

            <s.TwoColumnWrapper>
              <s.InputWrapper>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  나이
                  <s.Explanation
                    style={{
                      display: 'inline-block',
                      fontSize: '0.5rem',
                      lineHeight: 'normal',
                    }}
                  >
                    *만나이 기준
                  </s.Explanation>
                </div>
                <s.TransparentInput
                  placeholder="숫자만 입력해주세요"
                  inputMode="numeric"
                  type="number"
                  onChange={onChangeHandler}
                  ref={userAge}
                />
              </s.InputWrapper>

              <EmptyDiv></EmptyDiv>
              <s.InputWrapper style={{ border: 'none' }}>
                <div>성별</div>
                <s.StyledComboBox
                  defaultValue={''}
                  ref={userGender}
                  onChange={onChangeHandler}
                >
                  <option
                    value=""
                    hidden
                  ></option>
                  <option value="male">남자</option>
                  <option value="female">여자</option>
                </s.StyledComboBox>
              </s.InputWrapper>
            </s.TwoColumnWrapper>

            <s.InputWrapper>
              <div>닉네임</div>
              <div>
                <s.TransparentInput
                  ref={userNickName}
                  onChange={onChangeHandler}
                />
              </div>
            </s.InputWrapper>
          </fieldset>
        </s.ContentSection>
      </s.SectionWrapper>

      <s.ButtonSection>
        <s.PurpleButton
          onClick={nav}
          ref={nextBtn}
          disabled={isDisabled}
        >
          입력완료
        </s.PurpleButton>
      </s.ButtonSection>
    </s.FormPage>
  );
};

export default UserInfoAdditionalPage;

const EmptyDiv = styled.div`
  width: calc(100% / 13);
`;
