class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            appVersion: ''
        }
    }

    // render() {
    //     return (
    //         <>
                // <h1 className="welcomeHeader">Hello{this.state.name || ''}, & Welcome to Largesse!</h1>
                // <p className="buttonInfo">Please log in if you already have an account.  If not, click register to get started...</p>
                // <button className="loginBtn"><a className="buttonText" href="login.html">Log In</a></button>
                // <button className="loginBtn"><a className="buttonText" href="createAccount.html">Register</a></button>


    //         </>
    //     )
    // }

    render() {
        return (
            <>
                <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                <div>
                <h1 className="welcomeHeader text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">Hello{this.state.name || ''}, & Welcome to Largesse!</h1>
                <p className="buttonInfo mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Please log in if you already have an account.  If not, click register to get started...</p>
                <button className="Btn bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"><a className="buttonText" href="login.html">Log In</a></button>
                <button className="Btn bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"><a className="buttonText" href="createAccount.html">Register</a></button>
                </div>
                </div>
                </div>

            </>
        )
    }

} 
