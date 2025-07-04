import Image from "next/image";

const Banner = ({ destination }) => {
  return (
    <div className="col-12">
      <div className="relative d-flex">
        <Image
          src={`/img/pages/destinations/${destination}.jpg`}
          alt="image"
          className="col-12 rounded-4"
          //style={{ width: '100%', height: 'auto' }}
          width={'900'} height={'300'}
        />
        <div className="absolute z-2 px-50 py-60 md:py-20 md:px-30">
          <h1 className="text-50 fw-600 text-white lg:text-40 md:text-30">
            Explore {destination &&
          `${destination}`}
          </h1>
          <div className="text-white">
            Explore places, safaris and things to do in {destination &&
          `${destination}`}
          </div>
        </div>
        {/* <div className="absolute d-flex justify-end items-end col-12 h-full z-1 px-10 py-10">
          <button className="button -md -blue-1 bg-white text-dark-1 text-14 fw-500">
            See All 90 Photos
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
