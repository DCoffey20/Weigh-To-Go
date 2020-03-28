import React, {Component} from "react";
import "./NewUserForm.css";

class NewUserForm extends Component {
render(){
    return(
        <div>
            <h3>If you are a new use, sign up here:</h3>
            <form>
                <label>Name</label>
                <input type="text" id="newName"></input>
                <label>E-Mail</label>
                <input type="text" id="newEmail"></input>
                <label>Password</label>
                <input type="text" id="newPassword"></input>
                <label>Confirm Password</label>
                <input type="text" id="confirmPassword"></input>
            </form>
        </div>
    )
}
}
export default NewUserForm;