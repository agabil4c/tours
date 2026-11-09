const ImportantInfo = ({ tour }) => {
  return (
    <div className="row x-gap-30 y-gap-30 justify-between pt-20">
      {/* Inclusions Card */}
      {tour?.inclusions?.length > 0 && (
        <div className="col-lg-4 col-md-6">
          <div 
            className="px-24 py-24 rounded-12 bg-white h-full"
            style={{
              border: '1px solid rgba(15, 76, 58, 0.12)',
              backgroundColor: 'rgba(15, 76, 58, 0.02)',
              boxShadow: '0 4px 20px rgba(15, 76, 58, 0.02)'
            }}
          >
            <div className="d-flex items-center mb-15">
              <div 
                className="size-35 rounded-full flex-center mr-10"
                style={{ backgroundColor: 'rgba(24, 78, 59, 0.1)', color: 'var(--color-blue-1)' }}
              >
                <i className="icon-check text-10 fw-700" />
              </div>
              <h4 className="text-18 fw-600 text-dark-1" style={{ fontFamily: 'var(--font-serif)' }}>
                What&apos;s Included
              </h4>
            </div>
            
            <div className="d-flex flex-column y-gap-10">
              {tour.inclusions.map((item, index) => (
                <div key={index} className="d-flex items-start">
                  <span className="text-emerald mr-10 mt-2" style={{ color: 'var(--color-blue-1)', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
                  <p className="text-14 text-light-1 lh-16 m-0">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Exclusions Card */}
      {tour?.exclusions?.length > 0 && (
        <div className="col-lg-4 col-md-6">
          <div 
            className="px-24 py-24 rounded-12 bg-white h-full"
            style={{
              border: '1px solid rgba(220, 53, 69, 0.12)',
              backgroundColor: 'rgba(220, 53, 69, 0.02)',
              boxShadow: '0 4px 20px rgba(220, 53, 69, 0.02)'
            }}
          >
            <div className="d-flex items-center mb-15">
              <div 
                className="size-35 rounded-full flex-center mr-10"
                style={{ backgroundColor: 'rgba(220, 53, 69, 0.1)', color: '#dc3545' }}
              >
                <i className="icon-close text-8 fw-700" />
              </div>
              <h4 className="text-18 fw-600 text-dark-1" style={{ fontFamily: 'var(--font-serif)' }}>
                What&apos;s Excluded
              </h4>
            </div>

            <div className="d-flex flex-column y-gap-10">
              {tour.exclusions.map((item, index) => (
                <div key={index} className="d-flex items-start">
                  <span className="text-danger mr-10 mt-2" style={{ color: '#dc3545', fontSize: '14px', fontWeight: 'bold' }}>✕</span>
                  <p className="text-14 text-light-1 lh-16 m-0">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Additional Info Card */}
      <div className="col-lg-4 col-md-6">
        <div 
          className="px-24 py-24 rounded-12 bg-white h-full"
          style={{
            border: '1px solid rgba(212, 163, 115, 0.18)',
            backgroundColor: 'rgba(212, 163, 115, 0.04)',
            boxShadow: '0 4px 20px rgba(212, 163, 115, 0.02)'
          }}
        >
          <div className="d-flex items-center mb-15">
            <div 
              className="size-35 rounded-full flex-center mr-10"
              style={{ backgroundColor: 'rgba(212, 163, 115, 0.15)', color: '#b88b4a' }}
            >
              <i className="icon-info text-10 fw-700" />
            </div>
            <h4 className="text-18 fw-600 text-dark-1" style={{ fontFamily: 'var(--font-serif)' }}>
              Good to Know
            </h4>
          </div>

          <div className="d-flex flex-column y-gap-10">
            <div className="d-flex items-start">
              <span className="mr-10 mt-2" style={{ color: '#b88b4a', fontSize: '14px', fontWeight: 'bold' }}>🛈</span>
              <p className="text-14 text-light-1 lh-16 m-0">
                Confirmation will be received at time of booking
              </p>
            </div>
            <div className="d-flex items-start">
              <span className="mr-10 mt-2" style={{ color: '#b88b4a', fontSize: '14px', fontWeight: 'bold' }}>🛈</span>
              <p className="text-14 text-light-1 lh-16 m-0">
                Please note: the tour itinerary and order may change
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantInfo;
