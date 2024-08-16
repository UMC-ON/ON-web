import * as FormElements from './FormElements';
import useMultiStepForm from '../../hooks/useMultiStepForm';
import * as s from './SignUpStyled';
import groupLogo from '../../assets/images/groupLogo.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import {
  AuthRequests,
  UserList,
} from '../../components/Common/TempDummyData/PostList';
import Modal from '../../components/Modal/Modal';

const SchoolAuthPage = () => {
  const [isActive, setActive] = useState(false);
  const [userInfo, setUserInfo] = useState(useSelector((state) => state.user));
  const [isModalOpen, setModalOpen] = useState(false);
  const [photoURL, setPhotoURL] = useState(null);

  const nav = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLastStep && photoURL) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, []);
  const updateUserInfo = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleSubmitFE = (e) => {
    e.preventDefault();

    if (isFirstStep) {
      dispatch(setUser(userInfo)); //백이랑 연결 시에는 API 호출로
      UserList.filter((user) => {
        if (user.userId === userInfo.userId) {
          user = { ...userInfo };
        }
      });
      console.log(UserList.filter((user) => user.userId === userInfo.userId));
      next();
    } else {
      //인증 요청 제출
      AuthRequests.unshift({
        user: userInfo,
        photoURL: photoURL,
        requestDate: new Date(),
      });
      setModalOpen(true);
    }
  };
  const { currentTitle, currentStep, prev, next, isFirstStep, isLastStep } =
    useMultiStepForm([
      {
        title: '파견교 인증',
        element: (
          <FormElements.SchoolInfoForm
            state={userInfo}
            updateUserInfo={updateUserInfo}
            setActive={setActive}
          />
        ),
      },
      {
        title: '파견교 인증',
        element: (
          <FormElements.SchoolAuthForm
            state={userInfo}
            setActive={setActive}
            photoURL={photoURL}
            setPhotoURL={setPhotoURL}
          />
        ),
      },
    ]);
  return (
    <form onSubmit={handleSubmitFE}>
      <s.FormPage>
        <s.SectionWrapper>
          <s.TitleSection>
            <s.Logo src={groupLogo} />
            <img />
            <div className="on_exp">교환/방문학생 정보공유 커뮤니티, ON </div>
          </s.TitleSection>

          <s.ContentSection>
            <s.BackButton
              type="button"
              onClick={prev}
            >
              이전 단계
            </s.BackButton>
            <s.StyledH2>{currentTitle}</s.StyledH2>
            <s.Explanation style={{ marginBottom: '40px' }}>
              신뢰할 수 있는 커뮤니티를 위해 교환/방문교의 파견 사실여부를
              확인하고 있습니다. 교환/방문교 인증을 하지 않아도 커뮤니티와 일기
              서비스를 사용할 수 있지만 On 내 일부 기능(동행 구하기, 물품
              거래)이 제한됩니다.
            </s.Explanation>
            {currentStep}
          </s.ContentSection>
        </s.SectionWrapper>
        <s.ButtonSection>
          <s.TwoColumnWrapper>
            {isFirstStep ? (
              <s.PurpleButton style={{ background: ' #d7dff4' }}>
                건너뛰기
              </s.PurpleButton>
            ) : null}
            <s.PurpleButton disabled={!isActive}>
              {isLastStep ? '인증 요청하기' : '다음 단계'}
            </s.PurpleButton>
          </s.TwoColumnWrapper>
        </s.ButtonSection>
      </s.FormPage>
      {isModalOpen && (
        <Modal
          title="교환, 방문교 인증
      요청이 완료되었어요."
          content="인증이 완료되면 마이페이지에서
      일주일 이내로 확인할 수 있어요."
          closeModal={() => {
            setModalOpen(false);
          }}
          onExitModal={() => {
            nav('/admin');
          }}
        />
      )}
    </form>
  );
};

export default SchoolAuthPage;
