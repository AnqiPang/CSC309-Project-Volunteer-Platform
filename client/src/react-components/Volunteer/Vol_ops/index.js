import React from "react";
import { uid } from "react-uid";
import { Link} from 'react-router-dom'
import './styles.css'

class Vol_ops extends React.Component{
    render(){
       
       const {queueComponent, posts} = this.props


       return(
        <div id="fh5co-blog" className="fh5co-bg-section">
		<div className="container">
			<div className="row animate-box row-pb-md" data-animate-effect="fadeInUp">
				<div className="col-md-8 col-md-offset-2 text-left fh5co-heading">
					<h2>Opportunities</h2>
					<p>See what we have selected for you.</p>
				</div>
			</div> 
        <div className="row">
            {posts.map(post => (<Link to={{pathname:`/volunteer/post/${post._id}`, query:queueComponent}} >
            <div key={uid(post)} className="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeInUp">
            <div className="fh5co-post">
                <span className="fh5co-date">{ new Date(post.date).toDateString() }</span>
                <h3>{ post.name }</h3>
                <p id='post-para'>{ post.description }</p>
            <p className="author"><cite>{ post.organization }</cite></p>
            </div>
        </div></Link>
          ))}
			</div>	
            <div className="center">
                <p><span><Link to="/volunteer/seeall"><button type="submit" className="btn btn-primary">See All</button></Link></span></p>
            </div>
		</div>
        </div>
       )
    }
}

export default Vol_ops;
