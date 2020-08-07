import React from "react";
import Header_appli from "../../../react-components/Volunteer/Header_appli";
import Navbar from "../../../react-components/Volunteer/Navbar";
import PostDetail from "../../../react-components/PostDetail";
import Button from '@material-ui/core/Button';
import { addApplication } from "../../../actions/applicationList"
import "./styles.css"
import { Link} from 'react-router-dom';






import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";
// import "./styles.css"
const posts=[
    { name: 'Driver', description: "Deliver food", requirement: "driver's license, multi-task", title: "Driver", status: "Approved", date: "6/15/2020", organization:"Listening Society",orgId:5,location: "Toronto", id:1},
      { name: "Rider", description: "Deliver food", requirement: "self-motivated, repititive task, self-motivated, repititive task, self-motivated", title: "Driver", status: "Approved", date: "6/16/2020", organization:"Listening Society",orgId:5,location: "Vancouver",id:2},
      { name: "Online Chatting", description: "Through this role you will have the opportunity to safely volunteer from the comfort of your own home. All volunteers are provided with online training and the necessary support to safely and responsibly support local community members.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The Atrium Project",orgId:7,location: "Toronto", id:3},
      { name: "Peer Support Volunteer", description: "Your tasks for this position would include, attending sessions about mental health and crisis intervention, supporting a youth or adult 1:1.", requirement: "self-motivated, Minimum 18 years of age, previous experience, Knowledge and understanding of community services", title: "Courier", status: "Approved", date: "5/29/2020", organization:"The mental Health books",orgId:8,location: "Vancouver", id:4},
      { name: 'THIS SATURDAY - Contactless Delivery Driver Volunteers', 
              description: "We are looking for volunteer drivers, with their own vehicle, to deliver grocery care packages to families that are unable to leave their home this Saturday June 27th", 
              requirement: "driver's license, multi-task", 
              title: "Driver", status: "Under Review", date: "6/27/2020", organization:"Hand Up from Hunger Toronto",orgId:9,location: "Toronto", id:5},
  ]



class PostDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            isLoading: false
        }
        
    }
    componentDidMount() {
        const id = this.props.match.params.id
        const url = `/post/${id}`
        fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not get post detail");
            }
        })
        .then(json => {
            this.setState({ post: json, isLoading: true });
            console.log("current state: ", this.state)
        })
        .catch(error => {
            console.log(error);
        });
    }

    
    render(){
        // // this.componentWillMount()
        // // const {id} = this.props.match.params
        // // console.log("post id", id)
        // const id = parseInt(this.props.matchProps.match.params.id)
        
        // const post = posts.find((p) => p.id==id)
        
        
        //const queueComponent = this.props.location.query
        const queueComponent = this.props.queueComponent
        //console.log("queueComponent",queueComponent)
        // const applied_posts = this.props.applied_posts
        const app = this.props.app

        // let applied_posts_ids = []
        // for(let i=0; i< applied_posts.length; i++){
        //     applied_posts_ids.push(applied_posts[i].id)
        // }
        
       

        // const post_apply_status = applied_posts_ids.includes(id)
    
        return(
            <div id="page">
            <Navbar user="Application" app={app}/>
            <Header_appli title={this.state.post.name} subtitle={this.state.post.organization}  />
            <div id="fh5co-blog" class="fh5co-bg-section">
            <div class="container">
            <PostDetail post={this.state.post}/>
            
            {/* <div className="detailpagebutton">
            <span ><Link to={{pathname:`/volunteer/orgProfile/${post.orgId}`}}><Button className="Organizationbutton" variant="contained" color="secondary">Organization Profile</Button></Link></span>
            {
            (post_apply_status)? <span><Button>Applied</Button></span> : 
            <span><Link to="/volunteer/myapplication"><Button className="Applybutton" variant="contained" color="secondary"  onClick={ addApplication.bind(this, queueComponent, post)}>
            Apply Now
            </Button></Link></span>
              
            }
            
            </div> */}
            </div>         
            </div>  

            </div>
           





        )



    }


}

export default PostDetailPage;