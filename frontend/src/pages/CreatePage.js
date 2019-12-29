import React, {useState, useEffect, useContext} from 'react'
import {useHttp} from "../hooks/Http.hook";
import {AuthContext} from "../context/AuthContext";
import { useHistory } from 'react-router-dom'

export const CreatePage = () => {
    const history = useHistory()
    const {request} = useHttp()
    const auth = useContext(AuthContext)
    const [link, setLink] = useState('')

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const pressHandler = async event => {
        if(event.key === 'Enter'){
            try{
                const data = await request('/api/link/generate', 'POST', {from:link}, {
                    Authorization: `Bearer ${auth.token}`
                })
                history.push(`/detail/${data.link._id}`)   //Redirect to dynamic detail
            }
            catch (e) {
                
            }
        }
    }
    return (
        <div className='row'>
            <div className='input-field col s12' style={{marginTop:'2rem'}}>
                <input
                    className='validate'
                    type="text"
                    id='link'
                    value={link}
                    onChange={e => setLink(e.target.value)}
                    onKeyPress={pressHandler}
                />
                <label htmlFor='link'>Enter your link</label>
            </div>
        </div>
    )
}