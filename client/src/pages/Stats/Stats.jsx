import './stats.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Financial from '../../components/Financial/Financial'

const Stats = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Financial/>
      </div>
    </div>
  )
}

export default Stats