import GuestSearch from "./GuestSearch";
import DateSearch from "./DateSearch";
import Link from "next/link";
import { useState } from "react";

const index = ({tour}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [guestInfo, setGuestInfo] = useState({
    adults: 1,
    children: 0,
    rooms: 1
  });
  return (
    <>
      <div className="col-12">
        <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
          <div>
            <h4 className="text-15 fw-500 ls-2 lh-16">Date</h4>
            <DateSearch onDateSelect={setSelectedDate}/>
          </div>
        </div>
        {/* End check-in-out */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <GuestSearch onGuestChange={setGuestInfo}/>
        {/* End guest */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <Link
          href={{
            pathname: "/hotel/booking-page",
            query: { 
              tour: JSON.stringify(tour),
              dates: JSON.stringify(selectedDate),
              guests: JSON.stringify(guestInfo)
            },
          }}
          as="/tour/booking-page"
          className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-dark-3 text-white"
          onClick={(e) => {
            if (!selectedDate?.startDate) {
              e.preventDefault();
              alert('Please select your travel dates');
            }
          }}
        >
          Book Now
        </Link>
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default index;
