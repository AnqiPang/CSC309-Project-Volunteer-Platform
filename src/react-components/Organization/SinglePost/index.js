import React from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import SingleApplicant from "./../SingleApplicant";
import "./styles.css";
import { deletePost } from "../../../actions/postList";
import { uid } from "react-uid";
/* Component for a Single Post */
class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      display: 'none'
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      display: prevState.isToggleOn ? 'block': 'none'
    }));
  }
  render() {

    const { post, queueComponent} = this.props;
    const filteredApplicatns = queueComponent.state.applicants.filter(applicant => {
      return applicant.jobName===post.name});
    return (
      <div>
        <TableRow key={post.name}>
				<div className="feature-center animate-box" data-animate-effect="fadeInUp">
        <TableCell component="th" scope="row"  style={{width: 500}}>
        <p className='name'>
        {post.name}
        </p>
        </TableCell>
        <TableCell component="th" scope="row"  style={{width: 200}}>
        <p>{post.status} on {post.date}</p>
        </TableCell>
        <TableCell component="th" scope="row">
        <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick}
            style={{fontSize: 12}}
          >
            Applicants
          </Button>
          </TableCell>
          <TableCell component="th" scope="row">
        <Button
            variant="contained"
            color="default"
            style={{fontSize: 12}}
          >
            Detail
          </Button>
          </TableCell>
          <TableCell component="th" scope="row">
          <Button
            variant="contained"
            color="secondary"
            onClick={
                deletePost.bind(this, queueComponent, post)
            }
            style={{fontSize: 12}}
          >
            Delete
          </Button>
          </TableCell>
      </div>
      </TableRow>
      <div style={{display: this.state.display}} >
      {filteredApplicatns.map(applicant=>(
            <SingleApplicant
              key={uid(
                applicant
              )}
              name={applicant.name}
              rank={applicant.rank}
              jobName={applicant.jobName}
              status={applicant.status}
              context={queueComponent}
            />
          ))}
      </div>
      </div>
    );
  }
}

export default SinglePost;