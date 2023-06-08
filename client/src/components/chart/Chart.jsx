import "./chart.scss";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useState, useEffect } from "react";
import { db } from "../../firebase.config";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 100 },
  { name: "February", Total: 2000 },
  { name: "March", Total: 80 },
  { name: "April", Total: 3600 },
  { name: "May", Total: 500 },
  { name: "June", Total: 700 },
];

const Chart = ({ aspect, title }) => {

  const [data, setData] = useState([]);
  const [LogData, setLogs] = useState([]);
  const logRef = collection(db, "LogCollection");

  useEffect(() => {
    onSnapshot(logRef, (snapshot) => {
      setLogs(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewng: false,
            ...doc.data(),
          };
        })
      );
    });
  });


  return (
    
    <div className="chart">
      <div className="top">
      <div className="title">{title}</div>
      <TrendingUpIcon  fontSize="small" />
      </div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
