import React from 'react'

import classes from './Footer.css';

const Footer = (props) => {
    return (
        <div className={classes.Footer}>
             <h2>
                Полезные ссылки
            </h2>
            <ul className={classes.FooterLinksList}>
                    <ul>
                        <li className={classes.FooterLinksContainer}>
                            <a className={classes.FooterLinks} href="http://krasnaya-pahra.ru/">Администрация Поселения</a>
                        </li>
                        <li className={classes.FooterLinksContainer}>
                            <a className={classes.FooterLinks} href="https://ag.mos.ru/">Активный гражданин</a>
                        </li>
                        <li className={classes.FooterLinksContainer}>
                            <a className={classes.FooterLinks} href="https://vk.com/molparlamkp">Молодёжная палата</a>
                        </li>
                    </ul>                
                <ul className={classes.FooterLinks2}>
                    <li className={classes.FooterLinksContainer}>
                        <a className={classes.FooterLinks} href="http://cult.mos.ru/">Культура Москвы</a>
                    </li>
                    <li className={classes.FooterLinksContainer}>
                        <a className={classes.FooterLinks} href="http://sch2075.mskobr.ru/">Школа №2075</a>
                    </li>
                    <li className={classes.FooterLinksContainer}>
                        <a className={classes.FooterLinks} href="http://trinta.ru/">ТРИНТА</a>
                    </li>
                </ul>
            </ul>
        </div>
    )
}

export default Footer;
