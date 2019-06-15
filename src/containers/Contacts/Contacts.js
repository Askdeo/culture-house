import React from 'react'

import classes from './Contacts.css';

const Contacts = (props) => {
    return (
        <div className={classes.Contacts}>
            <div>
                <h2>Наши Контакты</h2>
                <p className={classes.Address}>
                    Москва, пос. Краснопахорское, с. Красная Пахра,
                    ул. Заводская, д. 20
                    Телефон: +7 (495)850-50-53
                </p>
            </div>
            {/* <div>
                <h2>Записать ребёнка в группу</h2>
            </div>
            <div>
                <h2>Оценить качество работы сайта</h2>
            </div>
            <div>
                <h2>Оставить анонимное мнение о нас</h2>
            </div> */}
            <div>
                <h3><a href="http://old.kultura.mos.ru/organizations/5074030440.html">Независимая оценка</a></h3>
                <p>Просим Вас принять участие в оценке деятельности учреждения</p>
            </div>
        </div>
    )
}

export default Contacts;