import './games.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
//import DatatableGames from '../../components/datatable/DatatableGames'

const Games = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      </div>
    </div>
  )
}

export default Games