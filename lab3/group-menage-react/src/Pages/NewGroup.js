import React, {Component} from "react";

export class NewGroup extends Component {

    constructor(props){
        super(props);
        this.state = {name: ""};
        this.state = {desciption: ""};
        this.state = {members: ""};
        this.state = {subject: ""};
        this.state = {email: ""};
    };

    handleSubmit = (e) => {

        if( document.getElementById("name_gr").value === '' || document.getElementById("subj_gr").value === '' || document.getElementById("memb_gr").value === ''){
            alert("Not all fields have been completed!");
            return;
          }

        document.getElementById("name_gr").value = "";
        document.getElementById("desc_gr").value = "";
        document.getElementById("memb_gr").value = "";
        document.getElementById("subj_gr").value = "";
        document.getElementById("email_gr").value = "";    
        
    const groupData = {
        "name": this.state.name,
        "description": this.state.description,
        "members": this.state.members,
        "subject": this.state.subject,
        "emails": this.state.emails,
    };   
    };

    handleName = (e) => {
        this.setState({name: e});
    };

    handleDescription = (e) => {
        this.setState({description: e});
    };

    handleMembers = (e) => {
        this.setState({members: e});
    };
    
    handleSubject = (e) => {
        this.setState({subject: e});
    };

    handleEmail = (e) => {
        this.setState({email: e});
    };

    render(){
        return(
            
          <form>
            <h1>Dodaj grupę</h1>
            <ul>
                <li>
                    <label>Enter name of project:
                    <input id="name_gr" type="text" onChange={e => this.handleName(e.target.value)}/>
                    </label>
                </li>
                <li>
                    <label>Enter description:
                    <input id="desc_gr" type="text" onChange={e => this.handleDescription(e.target.value)}/>
                    </label>
                </li>
                <li>
                    <label>Enter members of project:
                    <input id="memb_gr" type="text" onChange={e => this.handleMembers(e.target.value)}/>
                    </label>
                </li>
                <li>
                    <label>Enter subject of project:
                    <input id="subj_gr" type="text" onChange={e => this.handleSubject(e.target.value)}/>
                    </label>
                </li>
                <li>
                    <label>Enter emails:
                    <input id="email_gr" type="text" onChange={e => this.handleEmail(e.target.value)}/>
                    </label>
                </li>
                <button onClick={this.handleSubmit}>Prześlij</button>
               
            </ul>
          </form>
        );
    }
};

export default NewGroup;