import PageHeader from '../../components/PageHeader/PageHeader';
import * as s from './MyPageStyled';

const MyPage = () => {
  return (
    <s.MyPageLayout>
      <PageHeader pageName="마이페이지" />
    </s.MyPageLayout>
  );
};

export default MyPage;
