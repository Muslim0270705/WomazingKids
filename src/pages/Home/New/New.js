import React, {useContext} from 'react';

import {BsArrowDown} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {LazyLoadImage} from 'react-lazy-load-image-component'

const New = () => {
    const {t} = useTranslation();
    return (
        <section className='new'>
            <div className="container">
                <div className='new__content'>
                    <div className='new__content-left'>
                        <h2 className='new__title' dangerouslySetInnerHTML={{__html: t("home.new.title")}}/>
                        <p className='new__subtitle' dangerouslySetInnerHTML={{__html: t("home.new.text")}}/>
                        <Link to='shop'>
                        <div className='new__btns'>
                            <button type='button' className='new__btn1'><BsArrowDown/>s</button>
                            <button type='button' className='new__btn2' dangerouslySetInnerHTML={{__html: t("home.new.btn")}}/>
                        </div>
                        </Link>
                    </div>
                    <div className='new__content-right'>
                        <LazyLoadImage
                            alt='woman'
                            src={"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7c341ca5-63b3-4324-a0fe-6876ed917729/lets-be-real-pullover-hoodie-toddler-hoodie-jb23Sf.png"}
                            effect='blur'
                            className='new__img'
                            style={{width:"400px"}}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default New;