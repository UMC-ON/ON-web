import * as s from '../PostPageStyled.jsx';
import { useNavigate } from 'react-router-dom';
import camera from '../../../assets/images/camera.svg';
import DefaultCheckBox from '../../../components/DefaultCheckBox/DefaultCheckBox.jsx';

const FreePostPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <s.ConfirmHeader>
        <s.ColorButton
          color="#E4E4E4"
          onClick={() => {
            navigate(-1);
          }}
        >
          취소
        </s.ColorButton>
        <s.ColorButton color={'#CBCDE9'}>등록</s.ColorButton>
      </s.ConfirmHeader>
      <s.BigContainer>
        <s.HeadingTitle style={{ fontSize: '25px', color: '#CBCDE9' }}>
          자유글 작성
        </s.HeadingTitle>
        <s.PostInfoSection>
          <s.InfoLabel>
            교환 국가:
            <s.ColorButtonTag color="#CBCDE9">영국</s.ColorButtonTag>
          </s.InfoLabel>
          <s.SpaceBetweenContainer>
            <s.InfoLabel>
              교환교:
              <s.ButtonWrapper>
                <s.ColorButtonTag color="#CBCDE9">
                  California State University Long Beach
                </s.ColorButtonTag>
              </s.ButtonWrapper>
            </s.InfoLabel>
            <DefaultCheckBox
              after="파견교 비공개"
              checkBoxStyle={{ color: '#CBCDE9' }}
            />
          </s.SpaceBetweenContainer>
        </s.PostInfoSection>
        <s.TitleSection>
          <s.HeadingTitle>제목</s.HeadingTitle>
          <s.EditorWrapper
            color="#CBCDE9"
            style={{ height: '38px' }}
          >
            <s.Editor
              wrap="off"
              style={{ fontWeight: 'bold', fontSize: '17px' }}
            />
          </s.EditorWrapper>
        </s.TitleSection>
        <s.ContentSection>
          <s.HeadingTitle>내용</s.HeadingTitle>
          <s.EditorWrapper
            style={{ height: '585px' }}
            color="#CBCDE9"
          >
            <s.Editor />
          </s.EditorWrapper>
        </s.ContentSection>
      </s.BigContainer>
      <s.Footer>
        <img src={camera} />
        <DefaultCheckBox
          after="익명"
          wrapperStyle={{ fontSize: '14px' }}
        />
      </s.Footer>
    </>
  );
};

export default FreePostPage;
