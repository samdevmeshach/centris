import React from 'react'
import { Link ,withRouter} from 'react-router-dom'
import '../assets/css/tools.css'
const isActive = (history,path) =>{
    if(history.location.pathname === path){
        return {borderBottom:"3px solid rgb(97, 153, 175)",color:"rgb(97, 153, 175)"}
    }
    else{
        return {border:"none"}
    }
}


const ToolsHeader = ({history}) => {
    return (
        <div>
            <div className="right-hd"><button className="btn btn-primary mt-2"><i class="fas fa-share-alt"></i></button></div>
            <div className="left-hd">Discover your community</div>

            <div className="row m-3">
                <div className="col-md-6">
                    <label for="inputEmail4" class="form-label">Region</label>
                    <select class="form-select" id="inputEmail4">
                        <option>Province of Québec</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" class="form-label">Municipality</label>
                    <select class="form-select" id="inputEmail4">
                        <option>All municipalities</option>
                    </select>
                </div>
            </div>
            <div className="m-4">
                <Link className="links" to="/communityprofile" style={isActive(history,"/communityprofile")}>
                    <i class="fas fa-chart-pie"></i>
                    <span>Community profile</span>
                </Link>
                <Link className="links" to="/statistics" style={isActive(history,"/statistics")}>
                    <i class="far fa-chart-bar"></i>
                    <span>Real estate statistics</span>
                </Link>
                <Link className="links" to="/usefullinks" style={isActive(history,"/usefullinks")}>
                    <i class="fas fa-link"></i>
                    <span>Useful links</span>
                </Link>
            </div>
        </div>
    )
}

export default withRouter(ToolsHeader)
