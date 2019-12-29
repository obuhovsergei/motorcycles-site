 import React from 'react'
 import {Link} from 'react-router-dom'

 export const LinksList = ({links}) => {
    if(!links.length) return <p className="center">No have links</p>
    return (
        <ul className="collection" style={{marginTop:'2rem'}}>
            {links.map(link => {
                return (
                    <li key={link._id} className="collection-item avatar">
                        <i className="material-icons circle green">http</i>
                        <span className="title">{link.date}</span>
                        <p>From: {link.from.substr(0, 40)+ ' ...'} <br/>
                        To: {link.to} <br/>
                        Clicks: {link.clicks}
                        </p>
                        <Link to={`/detail/${link._id}`} className="secondary-content"><i className="material-icons">send</i></Link>
                    </li>
                )
            })}
        </ul>
    )
 }