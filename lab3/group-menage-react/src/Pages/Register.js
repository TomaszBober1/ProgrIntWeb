import { useRef, useState, useEffect } from "react";
import { auth } from "../firebase/init";
import {registerWithEmailAndPassword} from "../firebase/users";
import { useAuthState } from "react-firebase-hooks/auth";


const Register = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [name, setName] = useState("");

            

    

            return (
                <div className="login">
            
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                    />
                    <br/>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <br/>
                    <input
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                    />

        <br/>
        <button onClick={(e)=> registerWithEmailAndPassword(name, email, password)}>
            Zarejestruj
        </button>
        <br/>
                </div>
        
    )
            }

export default Register