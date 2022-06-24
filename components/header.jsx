import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <div className="pentagon"/>
                <Link href="/"><a>Agency</a></Link>
            </div>
            <ul className="header__list">
                <li className="list__item"><Link href="/"><a>About</a></Link></li>
                <li className="list__item"><Link href="/"><a>Services</a></Link></li>
                <li className="list__item"><Link href="/"><a>Pricing</a></Link></li>
                <li className="list__item"><Link href="/"><a>Blog</a></Link></li>
            </ul>
            <Link href="/"><a className="contact__button">Contact</a></Link>
        </div>
    )
}

export default Header;