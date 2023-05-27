import React from 'react';
import {Link, NavLink} from "react-router-dom"

import CollectionCard from "./CollectionCard";
import tshort1 from "../../../Assets/Home/Collection/t-short-1.png";
import tshort2 from "../../../Assets/Home/Collection/t-short-2.png";
import tshort3 from "../../../Assets/Home/Collection/t-short-3.png";
import {useTranslation} from "react-i18next";

const Collection = () => {
    const {t} = useTranslation();
    return (
        <section className='collection'>
            <div className="container">
                <h2 className="collection__title">{t("home.collection.title")}</h2>
                <div className="collection__content">
                    <CollectionCard img={"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/05a5fa70-8789-41a5-9d76-64bad328012c/air-balloon-tee-toddler-t-shirt-t4LVVt.png"} title={t("home.collection.text1")} priceThrough={<span className='collection__content-price collection__content-through'>$229</span>}/>
                    <CollectionCard img={"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/309ceeb3-130a-4875-b8bc-f4975f87cc36/lets-be-real-pullover-hoodie-toddler-hoodie-jb23Sf.png"} title={t("Cпортивки")} />
                    <CollectionCard img={tshort3} title={t("home.collection.text3")} />
                </div>
                <Link to='shop'>
                <button type='button' className="collection__btn">
                    {t("home.collection.btn")}
                </button>
                </Link>
            </div>
        </section>
    );
};

export default Collection;