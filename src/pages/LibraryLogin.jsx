import LibraryButton from "../components/LibraryButton"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base text-slate-900 " +
  "placeholder:text-slate-400 transition focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/20"

//   const buttonStyle= "w-full hover:bg-gray-700";

   const buttonStyleObj = {backgroundColor: "gray",color: "black", margin: "10px",padding: "5px",border: "1px solid gray",borderRadius: "5px",cursor: "pointer"};

const labelClass = "mb-1.5 block text-sm font-medium text-slate-700"

const formStyle="mx-auto my-10 w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-lg";

function LibraryLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasAccount, setHasAccount] = useState(true);

    const navigate= useNavigate();

    function navigateBetweenLoginAndSignUp() {
        setHasAccount(!hasAccount);
    }

    function loginCheck(){

      if(username==="admin" && password==="admin"){
        navigate("/main");
      }else{
        alert("Invalid username or password");
      }
    }

  return (
    <>
    <div className={formStyle}>
      <h2 className="mb-1 text-center">Welcome to the Library</h2>
      
      <p className="mb-6 text-center text-sm text-slate-500">
        {hasAccount ? "Please sign in to your account" : "Create a new account"}
      </p>
  
        {hasAccount ? (
                <form className="flex flex-col gap-5" 
          onSubmit={(e) => e.preventDefault()}
          autoComplete="off"
          >
        <div>
          <label htmlFor="username" className={labelClass}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            // value={username}
            // onChange={e=>console.log(e.target.value)}
            onChange={(e) => {
                setUsername(e.target.value);
                console.log(e.target.value);
            }}
            placeholder="Enter your username"
            autoComplete="off"
            // autoComplete="username"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="password" className={labelClass}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            // value={password}
            placeholder="Enter your password"
            autoComplete="off"
            // autoComplete="password"
            className={inputClass}
            onChange={ 
            (e) => {
                setPassword(e.target.value);
                console.log(e.target.value);
            }
        }
               
          />
        </div>

        <LibraryButton
          label="Sign In"
          style={buttonStyleObj}
          buttonAction={loginCheck
             
          }
 
        />
        <button onClick={navigateBetweenLoginAndSignUp}>Don't have an account? Create one</button>
        
        
      </form>
        ):(
       <form className="flex flex-col gap-5" 
          onSubmit={(e) => e.preventDefault()}
          autoComplete="off"
          >
        <div>
          <label htmlFor="username" className={labelClass}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            // value={username}
            // onChange={e=>console.log(e.target.value)}
            onChange={(e) => {
                setUsername(e.target.value);
                console.log(e.target.value);
            }}
            placeholder="Enter your username"
            autoComplete="off"
            // autoComplete="username"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="password" className={labelClass}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            // value={password}
            placeholder="Enter your password"
            autoComplete="off"
            // autoComplete="password"
            className={inputClass}
            onChange={ 
            (e) => {
                setPassword(e.target.value);
                console.log(e.target.value);
            }
        }
               
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className={labelClass}>Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Enter your password"
            autoComplete="off"
            // autoComplete="password"
            className={inputClass}
            onChange={ 
            (e) => {
                setConfirmPassword(e.target.value);
                console.log(e.target.value);
            }
        }
               
          />
        </div>


        <LibraryButton
          label="Sign In"
          style={buttonStyleObj}
          buttonAction={() => {
            console.log("Username:", username);
            console.log("Password:", password);

            alert(`Username: ${username}\nPassword: ${password}`);
          }}
        />

               <button onClick={navigateBetweenLoginAndSignUp}>Already have an account? Login</button>
      </form>
        )}
    </div>
    </>
  )
  
}

export default LibraryLogin
