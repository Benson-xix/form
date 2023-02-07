import styles from "./style"

const App = () => (
    <div className={"login-box"}>
      <h2 className={"header"}>Login</h2>

      <form>
      <div className="user-box">
                        <input className="type border-b-[2px]"  type="text"  name="" required="" />
                        <label className="it">Username</label>
                    </div>
      <div className="user-box">
                        <input className="type  border-b-[2px]" type="password"  name="" required="" />
                        <label className="it">Password</label>
                    </div>

      <div className="button-form">
                        <a href="#" id="submit">Submit</a>

                        <div  id="register">
                            Don't have an account ? 
                            <a href="#">Register</a>
                        </div>
                    </div>
      </form>
    </div>
  )

export default App

