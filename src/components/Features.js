import React from "react";
import "./FeaturesStyles.css"
import { Col, Row } from "reactstrap";
import FeatureCarousel from "./Carousel";
const Features = () => {
    return(
        <>
        <div className="featuresContainer ">
            <Row className="firstContainer">
                <Col className="firstImage "
                xs="6">
                    <FeatureCarousel/>
                </Col>
                <Col className="firstText"
                xs="6">
                <h2>Kalkulasi Emisi Karbon</h2>
                <h1>Secara Real-Time.</h1>
                <p>Lorem</p>
                </Col>
            </Row>
            <Row className="secondContainer">
                <Col className="secondText"
                xs="6">
                <h1>Machine Learning</h1>
                <h2>Untuk Perhitungan yang Akurat</h2>
                <p>Lorem</p>
                </Col>
                <Col className="secondImage"
                xs="6">
                </Col>
            </Row>
        </div>
        </>
    )
}

export default Features;