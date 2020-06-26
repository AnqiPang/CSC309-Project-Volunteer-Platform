import React from "react";
import Header_appli from "../../../react-components/Volunteer/Header_appli";
import OrgNav from "../../../react-components/OrgNav";
import Footer from '../../../react-components/Footer';
import PostDetail from "../../../react-components/PostDetail";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import { Link } from "react-router-dom";
import {uid} from "react-uid";
import SingleApplicant from "./../SingleApplicant";
import { BackButton } from '../Hook/backButton'
import "./styles.css"

class SelfPostDetail extends React.Component {
    state = {
        posts: [
          { name: 'Driver', description: "Deliver food", requirement: "driver's license, multi-task", title: "Driver", status: "Approved", date: "6/15/2020", location: "Toronto", id: 1},
          { name: "Rider", description: "Deliver food", requirement: "self-motivated, repititive task, self-motivated, repititive task, self-motivated", title: "Driver", status: "Approved", date: "6/16/2020", location: "Vancouver", id: 2}
        ],
        applicants: [
          {name: 'Jonh Smith', jobId: 1, rank: 'A', status: 'pending', id: 1, jobName: 'Driver'},
          {name: 'Maria Hernandz', jobId: 2, rank: 'B', status: 'pending', id: 2, jobName: 'Rider'},
          {name: 'Lily', jobId: 2, rank: 'A', status: 'accepted', id: 3, jobName: 'Rider'},
          {name: 'Lucy', jobId: 1, rank: 'C', status: 'rejected', id: 4, jobName: 'Driver'},
        ]
      }
    
    render(){
        
        const {id} = this.props.match.params
        console.log(id)
        const post = this.state.posts.find((p) => p.id==id)
        const filteredApplicants = this.state.applicants.filter(applicant => {
            return applicant.jobId===post.id});
        return(
            <div>
            <OrgNav/>
            <Header_appli title={post.name} subtitle='Listening Society'/>
            <div id="fh5co-blog" class="fh5co-bg-section">
            <div class="container">
            <PostDetail post={post}/>
            <div className='buttons'>
                <Link to="/organization/profile">
                <Button
                variant="contained"
                color="secondary"
                style={{fontSize: 12}}
                onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) {} else {e.preventDefault()}} }
            >
                delete
                </Button>
                </Link>
                <BackButton/>
                </div>

        <h1>Applicants</h1>
      <Table style={{ width: '80%' }}>
        <TableBody>
        {filteredApplicants.map(applicant => (
            <SingleApplicant
              key = {uid(applicant)}
              id={applicant.id}
              name={applicant.name}
              rank={applicant.rank}
              jobName={applicant.jobName}
              status={applicant.status}
              context={this}
            />
          ))}
        </TableBody>
      </Table>
      </div>
      </div>
            <Footer/>
            </div>

        )
    }
}

export default SelfPostDetail;