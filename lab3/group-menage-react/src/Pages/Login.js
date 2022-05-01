import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthContext";
import useLocalStorage from '../Components/LocalStorageHook';
import axios from 'axios';

const Login = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [userData, setUserData] = useState([]);
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [userL, setUserL] = useLocalStorage("");

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])


      useEffect(() => {
        axios.get("http://localhost:3000/dataF/users.json").then(res => {
          const userdata = res.data;
          setUserData(userdata);
        });
      },[]);

    const handleSubmit = async (e) => {

        e.preventDefault();
        let a = localStorage.getItem('session');
        if(AuthContext.Provider.length !== 5){
            if(userData.some(e => e.login === user) && userData.some(e => e.password === pwd)){
                setAuth({ user});
                setUserL(user);
                setUser('');
                setPwd('');
                AuthContext.Provider.length = 5;
                setSuccess(true);
                
            } else if(a.includes(user) && a.includes(pwd)){
                setAuth({ user});
                setUserL(user);
                setUser('');
                setPwd('');
                AuthContext.Provider.length = 5;
                setSuccess(true);
            } else {
                alert("Wrong data!");
                setSuccess(false);
            }
        }else{
            alert("You are already logged in")
        }
    }

    const logout = async (e) => {
        if(AuthContext.Provider.length === 5){
            AuthContext.Provider.length = 0;
            setSuccess(false);
            alert("Logged out");
            setUserL();
        }else{
            alert("You are not logged in")
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Jesteś zalogowany!</h1>
                    <button onClick={logout}>Wyloguj</button>
                    <br />
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>zaloguj</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Nazwa użytkownika:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Hasło:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Zaloguj</button>
                    </form>
                        <button onClick={logout}>Wyloguj</button>
                </section>
            )}
        </>
    )
}

export default Login