import { useNavigate } from 'react-router-dom';
import * as s from '../PostPageStyled.jsx';

const InfoPostPage = () => {
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
        <s.ColorButton color={'#BFD8E5'}>등록</s.ColorButton>
      </s.ConfirmHeader>
      <s.BigContainer>
        <s.HeadingTitle style={{ fontSize: '25px', color: '#BFD8E5' }}>
          정보글 작성
        </s.HeadingTitle>
        <s.PostInfoSection>
          <s.InfoLabel>
            교환 국가:
            <s.ColorButtonTag>영국</s.ColorButtonTag>
          </s.InfoLabel>
          <s.SpaceBetweenContainer>
            <s.InfoLabel>
              교환교:
              <s.ButtonWrapper>
                <s.ColorButtonTag>King's College London</s.ColorButtonTag>
              </s.ButtonWrapper>
            </s.InfoLabel>
            <s.CheckBoxWrapper>
              <s.StyledCheckBox type="checkBox" />
              파견교 비공개
            </s.CheckBoxWrapper>
          </s.SpaceBetweenContainer>
        </s.PostInfoSection>
        <s.TitleSection>
          <s.HeadingTitle>제목</s.HeadingTitle>
          <s.EditorWrapper style={{ height: '38px' }}>
            <s.Editor
              wrap="off"
              style={{ fontWeight: 'bold' }}
            />
          </s.EditorWrapper>
        </s.TitleSection>
        <s.ContentSection>
          <s.HeadingTitle>내용</s.HeadingTitle>
          <s.EditorWrapper style={{ height: '585px' }}>
            <s.Editor />
          </s.EditorWrapper>
        </s.ContentSection>
      </s.BigContainer>
    </>
  );
};
export default InfoPostPage;
