import React from 'react'

export const LinkCard = ({ link }) => {
    return(
        <>
            <h2>Url</h2>
            <p>Url your: <a href={link.to} target="._blank" rel="noopener noreferrer">{link.to}</a></p>
            <p>Url from your: <a href={link.from} target="._blank" rel="noopener noreferrer">{link.from}</a></p>
            <p>Count: <strong>{link.clicks}</strong></p>
            <p>Date: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    )
}