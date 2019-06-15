import React, { useState } from 'react'

import img1 from '../../assets/images/Festivals/1.jpg'
import img2 from '../../assets/images/Festivals/2.jpg'
import img3 from '../../assets/images/Festivals/3.jpg'
import img4 from '../../assets/images/Festivals/4.jpg'
import img5 from '../../assets/images/Festivals/5.jpg'

import classes from './Festivals.css';

const Festivals = (props) => {

    const [ fests, setFests] = useState([
        {
            title: 'ТЕАТРАЛЬНЫЙ ФЕСТИВАЛЬ',
            subtitle: '"КРАСНАЯ ЛИНИЯ"',
            text: 'Театральный фестиваль «Красная линия» любительских коллективов учреждений культуры города Москвы  и  соседних регионов  проводится с 2010 года, ежегодно. Фестиваль приурочен к Дню театра и проводится в марте месяце.',
            img: img1
        },
        {
            title: '"СОДРУЖЕСТВО"',
            subtitle: 'ФЕСТИВАЛЬ',
            text: 'Фестиваль «Содружество» проводится в рамках Всероссийского фестиваля "Русь Великая", посвященных Дню славянской письменности и культуры на территории ТиНАО города Москвы',
            img: img2
        },
        {
            title: '"ВЕНОК ДРУЖБЫ"',
            subtitle: 'ФЕСТИВАЛЬ',
            text: 'Фестиваль «Венок дружбы» - это комплекс просветительских, досуговых, конкурсных мероприятий и социально-культурных акций, отражающих темы многонациональности в мире, в т.ч.  России и Москве,  приуроченных к Международному Дню толерантности.',
            img: img3
        },
        {
            title: '"ТРОИЦКИЕ ГУЛЯНИЯ"',
            subtitle: 'МЕЖРЕГИОНАЛЬНЫЙ ДУХОВНО-ПРОСВЕТИТЕЛЬСКИЙ ПРАЗДНИК',
            text: 'Традиции нашего народа – это живая историческая память, воплощение всего пройденного нацией пути, запечатленный опыт сотен поколений. Сохранение этого наследия – благородная задача, выпавшая на долю терпеливых и неутомимых тружеников, собирателей отечественного духовного достояния.',
            img: img4
        },
        {
            title: '"СЕМЕНОВНА"',
            subtitle: 'ФЕСТИВАЛЬ НАРОДНОГО ТВОРЧЕСТВА',
            text: 'Второй открытый фестиваль народного творчества, посвященный памяти Заслуженного работника культуры Московской области Валентине Семеновне Решетниковой. В фестивале примут участие коллективы народного творчества Москвы и Подмосковья. Вход свободный.',
            img: img5
        },

    ])

    const allFests = fests.map(fest => {
        return(
            <div>
                <div className={classes.FestDescription}>
                    <h2>{fest.title}</h2>
                    <h3>{fest.subtitle}</h3>
                    <p>{fest.text}</p>
                </div>
                <div>
                    <img className={classes.FestImages} src={fest.img} alt="img"/>
                </div>
            </div>
        )

        
    })
    return (
        <div className={classes.Festivals}>
            {allFests}
        </div>
    );
};

export default Festivals;
