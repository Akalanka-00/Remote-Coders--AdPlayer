import "./ads.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DatatableAds from "../../components/datatable/DatatableAds";

const Ads = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableAds />
      </div>
    </div>
  );
};

export default Ads;
