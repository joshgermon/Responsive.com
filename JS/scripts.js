//Create React App and set initial state values
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedUp: false,
            invaildEmail: false
        };
        this.onSignUp = this.onSignUp.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }
    onSignUp() {
        //This function validates the email and updates the states when the user signs up.
        let email = document.getElementById('newsletter-email').value;
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailIsValid = re.test(email);
        if (emailIsValid && email.length > 0) {
            this.setState({ signedUp: true, invaildEmail: false });
        } else {
            this.setState({ signedUp: false, invaildEmail: true });
        }
    }
    resetForm() {
        this.setState({ signedUp: false, invaildEmail: false });
    }
    render() {
        //This checks if this user has signed up successfully or not and renders accordingly.
        if (this.state.signedUp == false) {
            return (
                <div>
                    <h2>Sign Up for Our Newsletter</h2>
                    <p>Find Out all the latest newsletter First</p>
                    <SignUpForm onSignUp={this.onSignUp} />
                    <p className="tagline">A very simple React.js demo</p>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>You Won't Regret It!</h2>
                    <ThankyouMsg resetForm={this.resetForm} />
                    <p className="tagline">A very simple React.js demo</p>
                </div>);
        }
    }
}
class SignUpForm extends React.Component {
    //The signUp method is called when submit is clicked.  
    render() {
        return (<form>
            <input className="form-control" id="newsletter-email" type="email" placeholder="joshgermon@gmail.com"></input>
            <button className="btn" onClick={this.props.onSignUp}>Submit</button>
        </form>);
    }
}
class ThankyouMsg extends React.Component {
    //The signUp method is called when submit is clicked.  
    render() {
    return (<div>
        <p>Thank you for signing up!</p>
        <button className="btn" onClick={this.props.resetForm}>OK</button>
    </div>);
    }
}

ReactDOM.render(<App />, document.getElementById("newsletter-signup"));
$(document).ready(function () { });