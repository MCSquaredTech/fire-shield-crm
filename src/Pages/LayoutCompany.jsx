import { Outlet, Link } from "react-router-dom"
import Searchbar from "../Components/AutofillSearchbar/Searchbar"


const LayoutCompany = () => {
  return (
    <div style={{height: "calc(100vh - 60px)", weight: "calc(100vw - 250px)"}}> 
        <h2>Company</h2>
        <div style={{width: "320px"}}>
        <Searchbar />
        </div>
       {Outlet}
    </div>
  )
}

export default LayoutCompany
