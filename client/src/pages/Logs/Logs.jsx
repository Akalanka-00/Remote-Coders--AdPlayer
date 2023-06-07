import './logs.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import List from "../../components/datatable/DatatableProfile";
import Navbar from "../../components/navbar/Navbar"

const Logs = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <List/>
      </div>
    </div>
  )
}

export default Logs