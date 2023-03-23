import './notification.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableNotification from "../../components/datatable/DatatableNotification"

const Notification = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableNotification/>
      </div>
    </div>
  )
}

export default Notification