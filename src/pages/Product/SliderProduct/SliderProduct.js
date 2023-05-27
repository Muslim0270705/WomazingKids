import React, {useContext} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import './sliderProduct.scss'
import "swiper/css/pagination";
import {Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from "swiper";
import {Link} from "react-router-dom";
import {CustomContext} from "../../../Context";


const SliderProduct = ({product}) => {

    let a = Object.keys(product.image)

    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={40}
                navigation={true}
                loop={true}
                autoPlay={true}
                speed={2000}
                autoplay={
                    {delay: 3000}
                }
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                {
                    a.map(item => (
                        <SwiperSlide key={product.id}>

                            <div  className='product__card'>
                                <Link className="shop__card-link" to={`/product/${product.id}`}>

                                    <img className='shop__card-img' src={`${product.image[item]}`} alt=""/>
                                </Link>
                                <h3 className='shop__card-title'>{product.title}</h3>
                                <p className='shop__card-price'>${product.priceSale
                                    ? <>
                                        <span style={{textDecoration: 'line-through'}}>{product.price}</span>
                                        -
                                        <span className='shop__card-price-sale'>${product.priceSale}</span>
                                    </>
                                    : product.price}</p>
                            </div>

                        </SwiperSlide>

                    ))

                }
            </Swiper>
        </>
    );
};

export default SliderProduct;