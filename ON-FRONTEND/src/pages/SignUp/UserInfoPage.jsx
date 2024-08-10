import styled from 'styled-components';
import * as s from './SignUpStyled';
import groupLogo from '../../assets/images/groupLogo.svg';
import validNickNameImg from '../../assets/images/validNickName.svg';
import { useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { UserList } from '../../components/Common/TempDummyData/PostList';

const UserInfoAdditionalPage = () => {
  const navigate = useNavigate();

  const nextBtn = useRef('');
  const validNickName = useRef('');
  const [isDisabled, setDisabled] = useState(true);
  const [userInfo, setUserInfo] = useState({
    user_id: UserList.length + 1,
    name: '',
    age: '',
    gender: '',
    nickName: '',
  });
  useEffect(() => {
    //useState의 비동기적..때문에
    if (
      !(
        !userInfo.name ||
        !userInfo.age ||
        !userInfo.gender ||
        !userInfo.nickName
      )
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [userInfo]);
  const nav = () => {
    sessionStorage.setItem('userInfo1', userInfo);
    navigate('/signUp/userInfo_school', {
      state: { value: userInfo },
    });
  };
  const onChangeHandler = (e) => {
    //input에 입력된 값은 state에 저장
    let name = e.target.name;
    let value = e.target.value;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const isNickNameValid = (nickName) => {
    if (!nickName) {
      validNickName.current = false;
      return;
    }
    const isUnique = UserList.filter((user) => user.nickName === nickName);
    if (nickName && isUnique[0]) {
      validNickName.current = false;
      return '이미 존재하는 닉네임입니다.';
    } else {
      validNickName.current = true;
      return '사용 가능한 닉네임입니다.';
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
          <form>
            <fieldset>
              <s.InputWrapper>
                <div>이름</div>
                <s.TransparentInput
                  placeholder="본명으로 작성해 주세요"
                  onChange={onChangeHandler}
                  name="name"
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
                    type="number"
                    placeholder="숫자만 입력해주세요"
                    inputMode="numeric"
                    onChange={onChangeHandler}
                    pattern="\d*"
                    name="age"
                  />
                </s.InputWrapper>

                <EmptyDiv></EmptyDiv>
                <s.InputWrapper style={{ border: 'none' }}>
                  <div>성별</div>
                  <s.StyledComboBox
                    defaultValue={''}
                    onChange={onChangeHandler}
                    name="gender"
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
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <s.TransparentInput
                    onChange={onChangeHandler}
                    type="text"
                    name="nickName"
                  />
                  <img src={validNickName.current ? validNickNameImg : ''} />
                </div>
              </s.InputWrapper>
              <s.Explanation>
                {isNickNameValid(userInfo.nickName)}
              </s.Explanation>
            </fieldset>
          </form>
        </s.ContentSection>
      </s.SectionWrapper>

      <s.ButtonSection>
        <s.PurpleButton
          type="submit"
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
