import styled from 'styled-components';
import * as s from './SignUpStyled';
import groupLogo from '../../assets/images/groupLogo.svg';
import addPhoto from '../../assets/images/addPhoto.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserList } from '../../components/Common/TempDummyData/PostList';
import { useState } from 'react';

const UserInfoSchoolAuthPage = () => {
  const userInfo = useLocation().state.value;
  const [photoURL, setPhotoURL] = useState(null);
  const navigate = useNavigate();
  const nav = (photo) => {
    if (photo) {
      UserList.unshift(userInfo); //DB 유저 리스트에 유저 추가
      console.log(UserList);
      navigate('/signUp/complete');
      console.log(userInfo);
    } else {
      navigate('/signUp/notVerified', {
        state: {
          value: userInfo,
          text: '파견교 인증을 건너뜁니다.',
        },
      });
    }
  };
  const onChangeImgFile = (fileList) => {
    if (fileList[0]) {
      console.log(fileList);
      setPhotoURL(URL.createObjectURL(fileList[0]));
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
          <s.StyledH2>교환/방문교 인증</s.StyledH2>
          <s.Explanation>
            신뢰할 수 있는 커뮤니티를 위해 교환/방문교의 파견사실을 확인하고
            있습니다. 인증을 하지 않아도 커뮤니티 글을 쓰고 읽을 수 있지만 일부
            기능(동행 구하기, 물품 거래)이 제한됩니다.
          </s.Explanation>
          <fieldset>
            <s.InputWrapper>
              <div>나의 교환/방문교</div>
              <s.TransparentInput
                disabled={true}
                value={userInfo.dispatched_univ}
              />
            </s.InputWrapper>
          </fieldset>
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
        </s.ContentSection>
      </s.SectionWrapper>

      <s.ButtonSection>
        <s.TwoColumnWrapper>
          <s.PurpleButton
            style={{ backgroundColor: ' #d7dff4' }}
            onClick={() => nav(photoURL)}
          >
            건너뛰기
          </s.PurpleButton>
          <s.PurpleButton onClick={() => nav(photoURL)}>
            입력완료
          </s.PurpleButton>
        </s.TwoColumnWrapper>
      </s.ButtonSection>
    </s.FormPage>
  );
};

export default UserInfoSchoolAuthPage;

const AddPhoto = styled.img`
  width: 310px;
  height: 310px;
  margin: 26px 40px;
  flex-shrink: 0;
  object-fit: cover;
`;
