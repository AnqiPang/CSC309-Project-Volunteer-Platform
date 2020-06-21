import React from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import "./styles.css";
class Applicant extends React.Component {

  render() {
    const { name, rank ,jobName } = this.props;

    return (
      <TableRow key={name}>
        <div className="feature-center animate-box" data-animate-effect="fadeInUp">
        <TableCell component="th" scope="row" style={{fontSize:20}}>
          <p className='name'>{name}</p>
        </TableCell>
        <TableCell component="th" scope="row" style={{fontSize:20}}>
          <p className='job'>{jobName}</p>
        </TableCell>
        <TableCell component="th" scope="row" style={{fontSize:20}}>
        {rank}
        </TableCell>

        <TableCell component="th" scope="row">
          <Button
            variant="contained"
            color="primary"
            style={{fontSize: 12}}
          >
            detail
          </Button>
        </TableCell>
        <TableCell component="th" scope="row">
          <Button
            variant="contained"
            color="secondary"
            style={{fontSize: 12}}
          >
            reject
          </Button>
          </TableCell>
          <TableCell component="th" scope="row">
          <Button
            variant="contained"
            color="primary"
            style={{fontSize: 12}}
          >
            accept
          </Button>
        </TableCell>  
        </div>      
      </TableRow>
    );
  }
}

export default Applicant;
