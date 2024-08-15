import * as s from './AdminPageStyled';

const RequestItem = ({ userInfo, photoURL, requestDate, imgShow }) => {
  console.log(requestDate);
  return (
    <s.GridContainer style={{ border: '1px solid black' }}>
      <s.WrapDiv width="2rem">
        {requestDate.getMonth() + 1}/{requestDate.getDate()}
      </s.WrapDiv>
      <s.WrapDiv width="3rem">{userInfo.name}</s.WrapDiv>
      <s.WrapDiv width="1.5rem">{userInfo.userId}</s.WrapDiv>
      <s.WrapDiv width="2rem">싱가포르</s.WrapDiv>
      <s.KeepAllDiv width="4.5rem">
        {userInfo.dispatchedUniversity}
      </s.KeepAllDiv>
      <s.StyledBtn
        onClick={() => {
          imgShow(photoURL);
        }}
      >
        이미지
      </s.StyledBtn>
      <s.StyledBtn>승인</s.StyledBtn>
      <s.StyledBtn>거절</s.StyledBtn>
    </s.GridContainer>
  );
};

export default RequestItem;
