import React from "react";
import Header_appli from "../../../react-components/Volunteer/Header_appli";
import OrgNav from "../../../react-components/OrgNav";
import PostDetail from "../../../react-components/Volunteer/PostDetail";


import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";
// import "./styles.css"



class SelfPostDetail extends React.Component {
    render(){
        const posts=[
            { name: 'Driver', description: "Deliver food", requirement: "driver's license, multi-task", title: "Driver", status: "Approved", date: "6/15/2020", organization: "Listening Society", location: "Toronto", id: 1},
            { name: "Rider", description: "Deliver food", requirement: "self-motivated, repititive task, self-motivated, repititive task, self-motivated", title: "Driver", status: "Approved", date: "6/16/2020", organization:"Listening Society", location: "Toronto", id: 2},
            ]
        
        const {id} = this.props.match.params
        console.log(id)
        const post = posts.find((p) => p.id==id)
        const queueComponent = this.props.location.query
    
        return(
            <div>
            <OrgNav/>
            <Header_appli title={post.name} subtitle={post.organization}/>
            <PostDetail post={post}/>
            </div>

        )
    }
}

export default SelfPostDetail;