import * as s from './NoContentStyled';
import no_content from '../../assets/images/no_content.svg';

const NoContent = ({ content }) => {
  console.log(content);
  return (
    <s.NoContentLayout>
      <s.NoImg
        src={no_content}
        alt="앗, 새로운 알림이 없어요!"
      />
      <s.NoText>앗, {content}이 없어요!</s.NoText>
    </s.NoContentLayout>
  );
};

export default NoContent;
