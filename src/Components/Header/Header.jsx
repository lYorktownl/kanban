import React, {useState} from 'react';
import s from './Header.module.css';
import userPhoto from "../../images/user-avatar.jpg"
import downArrow from "../../images/VectorDown.svg"
import upArrow from "../../images/VectorUp.svg"
import Rhomb from "../../images/rhomb.jpg"


function Header() {

    const [isProfileVisible, SetProfileVisible] = useState(true)

    const handleButton = () => {
        SetProfileVisible(!isProfileVisible)
    }



    return (
        <div className={s.header}>
            <h1 className={s.title}>Awesome Kanban Board</h1>

     {/*       <div className={s.profilePhotoWrapper}>
                <img className={s.img} src={userPhoto} alt=""/>
                {isProfileVisible && <button onClick={handleButton} className={s.buttonDown}><img src={downArrow} alt=""/></button> }
                {!isProfileVisible && <button onClick={handleButton} className={s.buttonUp}><img src={upArrow} alt=""/></button>}
            </div>
            <div>
                <img src={Rhomb} alt=""/>
                <p>Profile</p>
                <p>log Out</p>
            </div>*/}

            <div className={s.profileWrapper}>
                <div className={s.profilePhotoWrapper}>
                    <img className={s.img} src={userPhoto} alt=""/>
                    {isProfileVisible && <button onClick={handleButton} className={s.buttonDown}><img src={downArrow} alt=""/></button> }
                    {!isProfileVisible && <button onClick={handleButton} className={s.buttonUp}><img src={upArrow} alt=""/></button>}
                </div>

                {!isProfileVisible &&
                    <>
                <img className={s.rhombImg} src={Rhomb} alt=""/>
                <div className={s.profileTextWrapper}>
                    <div className={s.profileText}>
                        <p>Profile</p>
                        <p>log Out</p>
                    </div>
                </div>
                    </>}


            </div>
        </div>
    );
}

export default Header;
