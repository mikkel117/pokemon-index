import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Forside from '../pages/pokemon'

export default function Nav() {
    return (
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Forside} />
            </Router>
    )
}
