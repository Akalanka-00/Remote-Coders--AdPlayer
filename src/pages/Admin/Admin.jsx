import './admin.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableAdmin from "../../components/datatable/DatatableAdmin"

const Admin = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableAdmin/>
      </div>
    </div>
  )
}

export default Admin