import Link from "next/link";

const TopBreadCrumb = ({ tour, tourName }) => {
  if (!tour) return null;

  // Resolve country slug: use passed tourName or fallback based on tour type properties
  const countrySlug = tourName || (tour.tourType || "Uganda").toLowerCase().replace(/\s+/g, '-').replace('-safaris', '') + '-safaris';
  const countryName = countrySlug.split('-')[0].charAt(0).toUpperCase() + countrySlug.split('-')[0].slice(1);

  return (
    <section className="py-10 d-flex items-center bg-light-2 border-top-light">
      <div className="container">
        <div className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="row x-gap-10 y-gap-5 items-center text-13 text-light-1">
              <div className="col-auto">
                <Link href="/" className="hover-emerald">Home</Link>
              </div>
              <div className="col-auto">&gt;</div>
              <div className="col-auto">
                <Link href="/safaris" className="hover-emerald">Safaris</Link>
              </div>
              <div className="col-auto">&gt;</div>
              <div className="col-auto">
                <Link href={`/safaris/${countrySlug}`} className="hover-emerald">
                  {countryName}
                </Link>
              </div>
              <div className="col-auto">&gt;</div>
              <div className="col-auto">
                <div className="text-dark-1 fw-500 text-truncate" style={{ maxWidth: '300px' }}>
                  {tour.title}
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-auto">
            <Link href={`/safaris/${countrySlug}`} className="text-12 fw-700 text-emerald uppercase hover-emerald" style={{ color: 'var(--color-blue-1)' }}>
              All {countryName} Safaris
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBreadCrumb;
