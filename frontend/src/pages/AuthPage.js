import React, { useState, useEffect, useContext } from 'react'
import {useHttp} from "../hooks/Http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp();
    const [form, setForm] = useState({
        email:'', password:''
    })
    //Using and check of error
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])


    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async() => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        }
        catch (e) {}
    }

    const loginHandler = async() => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        }
        catch (e) {}
    }

    return (
        <div className="row valign-wrapper" style={{ minHeight: "100vh", marginBottom:0}}>
            <div className="z-depth-1 grey lighten-4 col s6 offset-s3"
                 style={{display: "inline-block", padding: "32px 48px 0px 48px", border: "1px solid #EEE"}}>
                <h5 className="indigo-text">Please, login or register</h5>
                <form className="col s12" method="post">
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input className='validate' type='email' name='email' id='email' value={form.email} onChange={changeHandler}/>
                            <label htmlFor='email'>Enter your email</label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='input-field col s12'>
                            <input className='validate' type='password' name='password' id='password' value={form.password} onChange={changeHandler}/>
                            <label htmlFor='password'>Enter your password</label>
                        </div>
                    </div>

                    <br/>
                    <div className='row'>
                        <button type='submit' name='btn_login'
                                className='col s4 btn btn-large waves-effect indigo left'
                                onClick={loginHandler}
                                disabled={loading}
                        >
                            Login
                        </button>
                        <button type='submit' name='btn_register'
                                className='col s4 btn btn-large waves-effect indigo right'
                                onClick={registerHandler}
                                disabled={loading}
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}