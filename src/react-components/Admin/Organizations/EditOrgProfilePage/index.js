import React from 'react';
import AdminNav from '../../AdminNav';
import EditOrgProfileForm from '../EditOrgProfileForm';
import {BackButton} from '../../Hook/backButton';

class EditOrgProfilePage extends React.Component{
    state={
        orgName:'',
        email:'',
        website:'',
        introduction:'',
    }

    handleInputChange = (event) => {

        const target = event.target;
        const value = target.value;
        const id = target.id;

        this.setState({
            [id]:value
        });
    }

    render(){
        const organization=this.props.organization;
        const queueComponent=this.props.queueComponent;

        return(
            <div id='page'>
                <AdminNav />
                <EditOrgProfileForm organization={organization} state={this.state} 
                handleInputChange={this.handleInputChange}
                queueComponent={queueComponent} />
            </div>
        )
        
    }
}

export default EditOrgProfilePage;