import React,{useState} from "react";
import { auth,db } from "../config/Config";
import { Link } from "react-router-dom";

export const Signup = (props) => {

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');

    const Signup = (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((cred)=>{
            db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                Name:name,
                Email:email,
                Password:password
            }).then(()=>{
                setName('')
                setEmail('')
                setPassword('')
                props.history.push('/login')
            })
            .catch(err=>{setError(err.message)})
        })
         
    }
    return(
        <div className='container'>
            <br />
            <h2>Sign Up</h2>
            <hr />
            <form autoComplete="off" clasName='form-group' onSubmit={Signup}>
                <label htmlFor="Name">Name</label>
                <br/>
                <input type="text" className='form-control' onChange={(e)=> setName(e.target.value)} required />
                <br/>
                <label htmlFor="Email">Email</label>
                <br/>
                <input type="email" className='form-control' onChange={(e)=> setEmail(e.target.value)} required />
                <br/>
                <label htmlFor="Password">Password</label>
                <br/>
                <input type="password" className='form-control' onChange={(e)=> setPassword(e.target.value)} required />
                <br/>
                <button type="submit" className='btn btn-success btn-md mybtn' > Register </button>

            </form>
            {error && <div className='error'>{error}</div>}
            <br />
            <span>Already have an account? login
                <Link to="login"> Here </Link>
            </span>
        </div>
    )
}