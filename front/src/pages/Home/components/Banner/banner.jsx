import React, { useState } from "react";
import news from "./news.json";
import { BannerItem } from "./banner-item";
import Icon from "../../../global-components/Svg-icon";
import "./banner.css"
export function Banner() {
    const [item, setItem] = useState(0);

    const bannerItems = news.map((news, index) => <BannerItem news={news} index={index} />);

    const itemLess = () => { item < 1 ? setItem(news.length - 1) : setItem(item - 1) }
    const itemPlus = () => { item >= news.length - 1 ? setItem(0) : setItem(item + 1) }
    // let timer = setInterval(itemPlus, 3000);

    return (
        <div className="banner">
            <div className="buttonsBanner">
                <div onClick={itemLess} className="arrow cursor-pointer">
                    <Icon classname="w-5 h-5" type="leftArrow" width="24" height="24" />
                </div>
                <div onClick={itemPlus} className="arrow cursor-pointer">
                    <Icon classname="w-5 h-5" type="rightArrow" width="24" height="24" />
                </div>
            </div>
            <ul className="bannerUL">{bannerItems[item]}</ul>
        </div>
    )
}