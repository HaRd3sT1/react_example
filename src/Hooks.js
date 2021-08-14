
import UK from "./assets/img/icons/united-kingdom.svg"
import Turkey from "./assets/img/icons/turkey.svg"
import {setUserLocale} from "./state/actions/preferences"
import classNames from 'classnames'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const LanguageChangeButton = ({language}) =>{
    const dispatch = useDispatch();
    const [dropdown, setDropdown] = useState(false);
    const languageList = [
        {
            name:"English",
            slug:"en",
            icon:UK,
        },
        {
            name:"Türkçe",
            slug:"tr",
            icon:Turkey,
        }
    ]
    let activeLang = languageList.find(o => o.slug === language);
    const changeLang = (e) =>{
        dispatch(setUserLocale(e)); 
        setDropdown(!dropdown)
    }
    return <div  className={classNames("dropdown", dropdown ? "active" : "")}>
        <div className={"flagButton"} onClick={(e) => setDropdown(true)} >
                <img src={activeLang.icon} className={"icon"} />
            <span>{activeLang.name}</span>
        </div>
        <div className={"dropdown-menu"}>
            <ul>
                {languageList.map((doc, key) =>{
                    return <li key={key} onClick={(e) => changeLang(doc.slug)}>
                    <span  className="a">{doc.name}</span>
                </li>
                })}
            </ul>
        </div>
        <div className="dropdown-bg" onClick={(e) => setDropdown(false)}></div>
    </div>
}
export {LanguageChangeButton}