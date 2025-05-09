import Wrapper from "./layout/wrapper";
import Home1 from "./home/home_1";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const MainRoot = () => {
  return (
    <Wrapper>
      <Home1 />
    </Wrapper>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default MainRoot;
