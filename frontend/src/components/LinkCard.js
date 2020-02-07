import React from 'react'
import {Link} from "react-router-dom";

export const LinkCard = ({ link }) => {
    return(
        <>
            <h4><Link to={`/links`} className="secondary-content">Back to Links</Link></h4>
            <h2>Url</h2>
            <p>Url your: <a href={link.to} target="._blank" rel="noopener noreferrer">{link.to}</a></p>
            <p>Url from your: <a href={link.from} target="._blank" rel="noopener noreferrer">{link.from}</a></p>
            <p>Count: <strong>{link.clicks}</strong></p>
            <p>Date: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    )
}