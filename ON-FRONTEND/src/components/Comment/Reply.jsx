import styled from 'styled-components';

const Reply = ({ reply }) => {
  const showWriter = (targetWriterInfo) => {
    if (targetWriterInfo.isAnonymous === 'true') {
      return targetWriterInfo.order === null
        ? '글쓴이'
        : '익명' + targetWriterInfo.order;
    } else {
      return targetWriterInfo.name;
    }
  };
  return (
    <ReplyDiv>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="12"
        viewBox="0 0 11 12"
        fill="none"
      >
        <path
          d="M1 0V8.73529H10M10 8.73529L8.43478 6.47059M10 8.73529L8.43478 11"
          stroke="black"
          strokeOpacity="0.5"
          strokeWidth="0.5"
        />
      </svg>
      <div>
        <Writer>{showWriter(reply.writerInfo)}</Writer>
        {reply.content}
      </div>
    </ReplyDiv>
  );
};

export default Reply;

const Writer = styled.div`
  padding: 3px 0;
  color: #525252;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;

const ReplyDiv = styled.div`
  box-sizing: border-box;
  padding: 10px 19px;
  width: 100%;
  height: auto;
  background-color: #d9d9d966;
  border: 2px solid #bfd8e533;
  border-radius: 10px;

  color: #3d3d3d;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;

  display: flex;
  flex-direction: row;
  align-items: start;
`;
