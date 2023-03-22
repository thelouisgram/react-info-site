import React from 'react'

export default function Header(props) {
    return (
        <header className="header">
            <div className='right'>
                <i className="fa-brands fa-react"></i>
                <h1>ReactFacts</h1>
            </div>

            <div className='left'>
                <label>Light</label>
                <div className="check">
                    <input id="check" onClick={props.handleMode} type="checkbox" />
                    <label htmlFor="check"></label>
                </div>
                <label>Dark</label>
            </div>
        </header>
    )
}