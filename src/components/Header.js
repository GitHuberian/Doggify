import React from 'react';
import {
    Link
} from "react-router-dom";

const Header = (props) => {
    const countAdopted = props.currentAdopted;
    let span;
    if (countAdopted>0) {
      span = <span>{countAdopted}</span>;
    } else {
      span = '';
    }
    return (
    <header>
            <nav>
            <ul>
                <li>
                    <Link to='/dogs'>DOGS</Link>
                </li>
                <li>
                    <Link to='/adoptions'>ADOPTION</Link>
                </li>
                <li>
<Link to='/checkout'>CHECKOUT{span}</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
};

export default Header;