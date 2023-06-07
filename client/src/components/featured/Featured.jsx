import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MonetizationOnIcon className="dollor" fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={50} text={"50%"} strokeWidth={5} />
        </div>
        <p className="title">Total revenue made this month so far</p>
        <p className="amount">$500</p>
        <p className="desc">
          Total revenue made this month so far compaired to last month. Last transaction may no include
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <div className="resultAmount">$1300</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <div className="resultAmount">$1500</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
