import Link from "next/link";

const TopBreadCrumb = ({ place, destination }) => {
  const formattedDest = destination
    ? destination.charAt(0).toUpperCase() + destination.slice(1).toLowerCase()
    : "Uganda";

  return (
    <section className="d-flex items-center py-15 border-top-light">
      <div className="container">
        <div className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1">
              <div className="col-auto">
                <Link href="/">Home</Link>
              </div>
              <div className="col-auto">&gt;</div>
              <div className="col-auto">
                <Link href={`/destination/${formattedDest}`}>
                  {formattedDest}
                </Link>
              </div>
              <div className="col-auto">&gt;</div>
              <div className="col-auto">
                <div className="text-dark-1">{place}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBreadCrumb;
