class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            appVersion: ''
        }
    }

    render() {
        return (
            <>
                <h1 className="welcomeHeader">Hello{ this.state.name || '' }, & Welcome to Largesse!</h1>
                <p className="buttonInfo">Please log in if you already have an account.  If not, click register to get started...</p>
                <button className="loginBtn"><a className="buttonText" href="login.html">Log In</a></button>
                <button className="loginBtn"><a className="buttonText" href="createAccount.html">Register</a></button>
                

            </>
        )
    }



} 