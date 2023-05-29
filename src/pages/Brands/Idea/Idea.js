import React from 'react';
import {useTranslation} from "react-i18next";
import ideaImg from "../../../Assets/Brands/idea.png"
import './idea.scss'
import {LazyLoadImage} from 'react-lazy-load-image-component'



const Idea = () => {

    const {t} = useTranslation();

    return (
        <section className="idea">
            <div className="container">
                <div className="idea__content">
                        <LazyLoadImage
                            alt='image'
                            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5ba177e5-872b-45c0-a651-3d7ee56f0ba0/jordan-toddler-jumpman-sustainable-pants-set-n9lZ65.png"
                            effect='blur'
                            className="idea__inner"
                            style={{width:400}}
                        />
                    <div className="idea__inner2">
                        <h3 className="idea__title"  dangerouslySetInnerHTML={{__html: t("brands.idea.title")}}/>
                        <p className="idea__text"  dangerouslySetInnerHTML={{__html: t("brands.idea.text")}}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Idea;