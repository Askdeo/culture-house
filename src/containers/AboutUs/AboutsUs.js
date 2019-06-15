import React from 'react';

import classes from './AboutUs.css';
import DirectorPic from '../../assets/images/Admins/Director.jpg';
import ViceDirectorPic from '../../assets/images/Admins/ViceDirector.jpg';
import ArtDirectorPic from '../../assets/images/Admins/ArtDirector.jpg';

const AboutsUs = (props) => {
    return (
        <div>
            <h1>
                О НАС
            </h1>
            <div className={classes.AdministrationContainer}> 
                <div>
                    <h4>
                       Заместитель директора
                    </h4>
                    <p>Горемыкина Екатерина Евгеньевна</p>
                    <p>8(495)850-80-57</p> 
                    <p>​kate_kate9@mail.ru</p>
                    <img className={classes.AdministrationsPics}  src={ViceDirectorPic} alt=""/>
                </div>
                <div>
                    <h4>
                        Директор
                    </h4>
                    <p>Ольга Александровна Королева</p>
                    <p>8(495)850-80-54</p> 
                    <p>​zvezdnii45@list.ru</p>
                    <img className={classes.AdministrationsPics}  src={DirectorPic} alt=""/>
                </div>
                <div>
                    <h4>
                        Художественный руководитель
                    </h4>
                    <p>Надежда Владимировна Матвеева</p>
                    <p>8(495)850-80-53</p> 
                    <p>xrzvezdnii45@mail.ru</p>
                    <img className={classes.AdministrationsPics} src={ArtDirectorPic} alt=""/>
                </div>
            </div>
            <hr/>
            <div className={classes.AboutUsTextContainer}>
                <div className={classes.PlaceHolder}>

                </div>
                {/* <div className={classes.AboutUsText}>
    Приветствуем Вас на официальном сайте Дома Культуры "Звёздный"!
    На нашем сайте Вы сможете узнать о Доме Культуры, его кружках и клубах, о бюджетных и платных услугах, а также актуальную информацию по предстоящим событиям в нашем учреждении.
    Муниципальное бюджетное учреждение культуры "Дом культуры «Звёздный» – центр организации досуга и развития самодеятельного и художественного творчества, осуществляет культурно-просветительскую и художественно-эстетическую деятельность, сохраняя культуру народных песен, танцев.
    Процесс общения - это выражение  тенденции к организации, заложенной в самой природе социальной практики человека.
    У детей потребность в общении проявляется  уже на первом году жизни. По мере взросления она превра­щается в одну из основных социальных потребностей человека, во многом определяющую его духовный облик и практическое поведение. Исходя из современных научных представлений об общении, мы рассматриваем эту потребность как такое состояние личности, которое характе­ризуется ее стремлением к вступлению в контакты с другими людьми. 
                </div> */}
            </div>
        </div>
    )
}

export default AboutsUs;
