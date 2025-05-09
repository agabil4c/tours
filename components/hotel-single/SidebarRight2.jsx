import Map from "./Map";

const SidebarRight2 = ({ place }) => {
  
  return (
    <div className="px-30 py-30 border-light rounded-4">
      <div className="mb-15">
        <Map destination = {place} />
      </div>
    </div>
  );
};

export default SidebarRight2;
