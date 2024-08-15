import * as s from './SignUpStyled';
import styled from 'styled-components';
import validImg from '../../assets/images/validNickName.svg';
import { useRef, useState, useEffect } from 'react';
import { SignUpValidCheck } from './SignUpValidCheck';
export const TermForm = ({ setActive }) => {
  return (
    <>
      <TermContent>
        [제 1항 25조] 테스트용으로 쓰이는 더미 텍스트다. 테스트용으로 쓰이는
        더미 텍스트다. 디자인을 할 때 가제로 쓰이고 레이아웃을 테스트할 때 든지
        프린트의 테스트, 기계 테스트, 폰트 테스트, 컨텐츠의 양을 측정할 때도
        쓰인다. 테스트용으로 쓰이는 더미 텍스트다. 테스트용으로 쓰이는 더미
        텍스트다. 디자인을 할 때 가제로 쓰이고 레이아웃을 테스트할 때 든지
        프린트의 테스트, 기계 테스트, 폰트 테스트, 컨텐츠의 양을 측정할 때도
        쓰인다. 테스트용으로 쓰이는 더미 텍스트다. 테스트용으로 쓰이는 더미
        텍스트다. 디자인을 할 때 가제로 쓰이고 레이아웃을 테스트할 때 든지
        프린트의 테스트, 기계 테스트, 폰트 테스트, 컨텐츠의 양을 측정할 때도
        쓰인다. 어쩌고저쩌고 어어어ㅓ어어어 조금 더 적어야해 테스트용으로 쓰이는
        더미 텍스트다. 테스트용으로 쓰이는 더미 텍스트다. 디자인을 할 때 가제로
        쓰이고 레이아웃을 테스트할 때 든지 프린트의 테스트, 기계 테스트, 폰트
        테스트, 컨텐츠의 양을 측정할 때도 쓰인다. 테스트용으로 쓰이는 더미
        텍스트다. 테스트용으로 쓰이는 더미 텍스트다. 디자인을 할 때 가제로
        쓰이고 레이아웃을 테스트할 때 든지 프린트의 테스트, 기계 테스트, 폰트
        테스트, 컨텐츠의 양을 측정할 때도 쓰인다. 테스트용으로 쓰이는 더미
        텍스트다. 테스트용으로 쓰이는 더미 텍스트다.
      </TermContent>
      <div className="radioBtn">
        <label style={{ color: 'black' }}>
          <s.RadioButton
            type="radio"
            name="termConsent"
            value="disagree"
            onChange={() => {
              setActive(false);
            }}
          />
          비동의
        </label>
        <label style={{ color: 'black' }}>
          <s.RadioButton
            type="radio"
            name="termConsent"
            value="agree"
            onChange={() => setActive(true)}
          />
          동의
        </label>
      </div>
    </>
  );
};

const TermContent = styled.div`
  color: black;
  overflow: auto;
  height: 17.625rem;
  margin: 0.313rem 0;
  padding: 1rem 1rem;
  line-height: 1.25rem;
  font-size: 0.75rem;
  text-align: justify;
  background-color: #e7e7e7;
  border-radius: 1.188rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const UserInfoForm1 = ({ state, updateUserInfo, setActive }) => {
  const [pwCheck, setPwCheck] = useState('');
  useEffect(() => {
    if (
      isAllValid.current.email &&
      isAllValid.current.password &&
      pwCheck === state.password &&
      isAllValid.current.nickName
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [state, pwCheck]);

  const isAllValid = useRef({
    email: false,
    password: false,
    pw_check: false,
    nickName: false,
  });

  return (
    <>
      <s.InputWrapper>
        <div>이메일</div>
        <SpaceBetweenContainer>
          <s.TransparentInput
            onChange={updateUserInfo}
            name="email"
            defaultValue={state.email}
          />
          <img
            src={
              SignUpValidCheck(
                { name: 'email', value: state.email },
                isAllValid,
              )
                ? validImg
                : null
            }
          />
        </SpaceBetweenContainer>
      </s.InputWrapper>
      <s.Explanation>
        {SignUpValidCheck({ name: 'email', value: state.email }, isAllValid)
          ? '사용할 수 있는 이메일입니다.'
          : '이메일 형식으로 작성해주세요'}
      </s.Explanation>
      <s.InputWrapper>
        <div>비밀번호</div>
        <SpaceBetweenContainer>
          <s.TransparentInput
            type="password"
            onChange={updateUserInfo}
            name="password"
            defaultValue={state.password}
          />
          <img
            src={
              SignUpValidCheck(
                { name: 'password', value: state.password },
                isAllValid,
              )
                ? validImg
                : null
            }
          />
        </SpaceBetweenContainer>
      </s.InputWrapper>
      <s.Explanation>
        {SignUpValidCheck(
          { name: 'password', value: state.password },
          isAllValid,
        )
          ? '사용할 수 있는 비밀번호입니다.'
          : '*영문, 숫자, 특수문자를 모두 사용하여 8자리 이상'}
      </s.Explanation>
      <s.InputWrapper>
        <div>비밀번호 확인</div>
        <SpaceBetweenContainer>
          <s.TransparentInput
            type="password"
            onChange={(e) => {
              setPwCheck(e.target.value);
            }}
            name="password_check"
          />
          <img src={pwCheck && pwCheck === state.password ? validImg : null} />
        </SpaceBetweenContainer>
      </s.InputWrapper>
      <s.Explanation>
        {pwCheck === state.password ? null : '비밀번호가 일치하지 않습니다'}
      </s.Explanation>

      <s.InputWrapper>
        <div>닉네임</div>
        <SpaceBetweenContainer>
          <s.TransparentInput
            onChange={updateUserInfo}
            type="text"
            name="nickName"
            defaultValue={state.nickName}
          />
          <img
            src={
              state.nickName &&
              SignUpValidCheck(
                { name: 'nickName', value: state.nickName },
                isAllValid,
              )
                ? validImg
                : null
            }
          />
        </SpaceBetweenContainer>
      </s.InputWrapper>
      <s.Explanation>
        {!state.nickName
          ? null
          : SignUpValidCheck(
                { name: 'nickName', value: state.nickName },
                isAllValid,
              )
            ? '사용할 수 있는 닉네임입니다.'
            : '이미 존재하는 닉네임입니다.'}
      </s.Explanation>
    </>
  );
};

const SpaceBetweenContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfoForm2 = ({ state, updateUserInfo, setActive }) => {
  const isAllValid = useRef({
    name: false,
    age: false,
    gender: false,
    phone: false,
  });
  useEffect(() => {
    if (
      isAllValid.current.name &&
      isAllValid.current.age &&
      isAllValid.current.gender &&
      isAllValid.current.phone
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [state]);
  useEffect(() => {
    //이전 단계를 눌로 페이지에 다시 돌아왔을 때, 렌더링하며 조건 상태 체크
    for (let key in state) {
      SignUpValidCheck({ name: key, value: state[key] }, isAllValid);
    }
  }, [state]);

  return (
    <>
      <s.InputWrapper>
        <div>이름</div>
        <s.TransparentInput
          placeholder="본명으로 작성해 주세요"
          onChange={updateUserInfo}
          name="name"
          defaultValue={state.name}
        />
      </s.InputWrapper>
      <s.Explanation>
        {SignUpValidCheck({ name: 'name', value: state.name }, isAllValid)
          ? null
          : '올바른 이름을 작성해주세요.'}
      </s.Explanation>

      <s.TwoColumnWrapper>
        <div>
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
              onChange={updateUserInfo}
              pattern="[0-9]"
              name="age"
              defaultValue={state.age}
            />
          </s.InputWrapper>
          <s.Explanation>
            {!state.age
              ? null
              : SignUpValidCheck({ name: 'age', value: state.age }, isAllValid)
                ? null
                : '올바른 형식으로 작성해주세요'}
          </s.Explanation>
        </div>

        <EmptyDiv></EmptyDiv>
        <s.InputWrapper style={{ border: 'none' }}>
          <div>성별</div>
          <s.StyledComboBox
            onChange={(e) => {
              updateUserInfo(e);
              SignUpValidCheck(
                { name: 'gender', value: e.target.value },
                isAllValid,
              );
            }}
            name="gender"
            defaultValue={state.gender}
            pattern="[0-9]"
          >
            <option
              value=""
              hidden
            ></option>
            <option value="MALE">남자</option>
            <option value="FEMALE">여자</option>
          </s.StyledComboBox>
        </s.InputWrapper>
      </s.TwoColumnWrapper>
      <s.InputWrapper>
        <div>전화번호</div>
        <s.TransparentInput
          type="tel"
          placeholder="'-' 없이 숫자만 입력해주세요"
          inputMode="numeric"
          onChange={updateUserInfo}
          pattern="\d*"
          name="phone"
          defaultValue={state.phone}
        />
      </s.InputWrapper>
      <s.Explanation>
        {SignUpValidCheck({ name: 'phone', value: state.phone }, isAllValid)
          ? null
          : '올바른 형식으로 작성해주세요'}
      </s.Explanation>
    </>
  );
};

const EmptyDiv = styled.div`
  width: calc(100% / 13);
`;

import DefaultCheckBox from '../../components/DefaultCheckBox/DefaultCheckBox';
import { countries } from '../../assets/cityDatabase';

export const SchoolInfoForm = ({ state, updateUserInfo, setActive }) => {
  const id = useRef(-1);
  const [isConfirmed, setIsConfirmed] = useState(true);

  const onClickDsptchNotConfirmed = (e) => {
    if (e.target.value) {
      state.dispatchedUniversity = '';
      state.univ_homepage = '';
      state.country = '';
      state.dispatchedType = '';
    }
    setIsConfirmed(!e.target.value);
    updateUserInfo({
      target: { name: e.target.name, value: !e.target.value }, //state는 비동기적이라 바로 적용안됨
    });
  };
  console.log(state);

  useEffect(() => {
    //이전 단계를 눌로 페이지에 다시 돌아왔을 때, 렌더링하며 이전 입력값 불러오고 조건 체크
    console.log(`폼페이지:${state.name}`);
    if (!state.is_dispatch_confirmed) {
      console.log('안그러하다');
      setIsConfirmed(false);
      setActive(true);
    } else {
      console.log('최아악');
      if (state.dispatchedUniversity && state.country) {
        console.log('그러하다');
        setActive(true);
      } else {
        setActive(false);
      }
    }
  }, [state]);

  return (
    <>
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
          onChange={(e) => {
            updateUserInfo(e);
          }}
          disabled={!isConfirmed}
          defaultValue={state.dispatchedUniversity}
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
        defaultValue={!state.is_dispatch_confirmed}
      />

      <s.InputWrapper style={{ opacity: isConfirmed ? '100%' : '50%' }}>
        <div>교환/방문교 홈페이지 링크 </div>
        <s.TransparentInput
          placeholder="교환/방문교의 웹 사이트 주소를 붙여넣기 해주세요."
          disabled={!isConfirmed}
          onChange={updateUserInfo}
          name="univ_homepage"
          defaultValue={state.univ_homepage}
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
          defaultValue={state.country}
          onChange={updateUserInfo}
          disabled={!isConfirmed}
          name="country"
        >
          <option
            value=""
            hidden
          >
            국가
          </option>
          {countries.map((content, index) => {
            if (content.id[0] > id.current) {
              id.current = content.id[0];
              console.log(content.continent);
              return (
                <option
                  key={index}
                  value={'?'}
                >
                  ----{content.continent}----
                </option>
              );
            }
            return (
              <option
                key={index}
                value={content.country}
              >
                {content.country}
              </option>
            );
          })}
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
              onChange={updateUserInfo}
            />
            교환학생
          </label>
          <label>
            <s.RadioButton
              type="radio"
              name="dispatchedType"
              value="visit"
              disabled={!isConfirmed}
              onChange={updateUserInfo}
            />
            방문학생
          </label>
        </RadioBtnDiv>
      </s.InputWrapper>
    </>
  );
};

const RadioBtnDiv = styled.div`
  & > label {
    display: inline-block;
    padding-top: 0.938rem;
    margin-right: 0.938rem;
  }
`;

import addPhoto from '../../assets/images/addPhoto.svg';

export const SchoolAuthForm = ({ state, setActive, photoURL, setPhotoURL }) => {
  const onChangeImgFile = (fileList) => {
    if (fileList[0]) {
      console.log(fileList);
      setPhotoURL(URL.createObjectURL(fileList[0]));
    }
  };
  return (
    <>
      <s.InputWrapper>
        <div>나의 교환/방문교</div>
        <s.TransparentInput
          disabled={true}
          value={
            state.dispatchedUniversity
              ? state.dispatchedUniversity
              : '파견교 미정'
          }
        />
      </s.InputWrapper>

      <s.CenterContainer>
        <label>
          <input
            accept=".jpg, .jpeg, .png"
            type="file"
            style={{ display: 'none' }}
            onChange={(e) => {
              onChangeImgFile(e.target.files);
            }}
          />
          <AddPhoto src={photoURL ? photoURL : addPhoto} />
        </label>
      </s.CenterContainer>
    </>
  );
};

const AddPhoto = styled.img`
  width: 310px;
  height: 310px;
  margin: 26px 40px;
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 0.625rem;
`;
