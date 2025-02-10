import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Loreum ipsum dolor sit aet.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide ",
        desc: "Loreum ipsum dolor sit aet.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Loreum ipsum dolor sit aet.",
    },
]
const ServiceList = () => {
    return (
        <>
        {servicesData.map((item, index) => (
            <Col lg="3" key={index}>
                <ServiceCard item={item}/>
            </Col>
        ))}
        </>
    );
};

export default ServiceList;