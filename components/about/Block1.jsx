import Image from "next/image";
import { useTranslation } from 'next-i18next';

const Block1 = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <div className="col-lg-5">
        <h2 className="text-30 fw-600">{t('aboutSection.title')}</h2>
        {/* <p className="mt-5">These popular destinations have a lot to offer</p> */}
        <p className="text-dark-1 mt-30 lg:mt-20 md:mt-20">
        {t('aboutSection.description')}
          <br /><br />
          {t('missionSection.title')}<br />
          {t('missionSection.description')}
          <br /><br />
          {t('foundationStatement')}
        </p>
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <Image
          width={400}
          height={400}
          src="/img/pages/about/2.png"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
      {/* End .col */}
    </>
  );
};

export default Block1;
