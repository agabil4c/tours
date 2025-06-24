import Image from "next/image";
import { SwiperSlide } from "swiper/react";

const BookingDetails = ({tour}) => {

  return (
    <div className="px-30 py-30 border-light rounded-4">
      <div className="text-20 fw-500 mb-30">Your booking details</div>
      <div className="row x-gap-15 y-gap-20">
        <div className="col-auto">
          {/* <Image
            width={140}
            height={140}
            src="/img/backgrounds/1.png"
            alt="image"
            className="size-140 rounded-4 object-cover"
          /> */}
          {tour?.tour?.slideImg?.map((slide, i) => (
            <SwiperSlide key={i}>
              {/* <Image
                width={140}
                height={140}
                priority
                src={slide}
                alt="image"
                style={{ height: "501px" }}
                className="rounded-4 col-12 cover object-cover"
              /> */}
              <Image
              width={140}
              height={140}
              priority
              src={slide}
              //src="/img/backgrounds/1.png"
              alt="image"
              className="size-140 rounded-4 object-cover"
            />
            </SwiperSlide>
          ))}
        </div>
        {/* End .col */}
        <div className="col">
          
          <div className="lh-17 fw-500">
            {tour?.tour?.title}
          </div>
          <div className="text-14 lh-15 mt-5">{tour?.tour?.location}</div>
          <div className="text-14 lh-15 mt-5">{tour?.tour?.tourType}</div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}

      <div className="border-top-light mt-30 mb-20" />
      <div className="row y-gap-20 justify-between">
        <div className="col-auto">
          <div className="text-15">Check-in</div>
          <div className="fw-500">{tour?.dates?.startDate && (
            new Date(tour?.dates?.startDate).toLocaleDateString("en-GB", {
              weekday: "short",   // Sat
              day: "2-digit",     // 13
              month: "short",     // Apr
            })
          )}</div>
          
        </div>
        <div className="col-auto md:d-none">
          <div className="h-full w-1 bg-border" />
        </div>
        <div className="col-auto text-right md:text-left">
          <div className="text-15">Check-out</div>
          <div className="fw-500">{tour?.dates?.endDate && (
  new Date(tour.dates.endDate).toLocaleDateString("en-GB", {
    weekday: "short",   // Sat
    day: "2-digit",     // 13
    month: "short",     // Apr
  })
)}</div>
          
        </div>
      </div>
      {/* End row */}

      <div className="border-top-light mt-30 mb-20" />
      <div>
        <div className="text-15">Guests</div>
        <div className="fw-500">{tour?.guests?.Adults} Adults, {tour?.guests?.Children} Children, {tour?.guests?.Rooms} Rooms, </div>
        
      </div>

      
      {/* End row */}
    </div>
    // End px-30
  );
};

export default BookingDetails;
