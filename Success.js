import React, * as react from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends react.Component {
    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    };
    back = event => {
        event.preventDefault();
        this.props.prevStep();
    };
    
    
    render() {
        
        return (
           
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Success!" />
                    <h1> Thank You For Your Submission </h1>
                    <p> You will get an Email with further instructions, Thank you!</p>
                   
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button : {
        margin: 15
    }
}

export default Success;
