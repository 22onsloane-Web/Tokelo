import React from 'react';

const Work = () => {
    return (
        <div className="work__area section-padding pb-0">
            <div className="container">
                <div className="row mb-70">
                    <div className="col-xl-12">
                        <div className="work__area-title t-center">
                            <span className="subtitle-two">Work Process</span>
                            <h2>Our Solution Process</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-sm-6 xl-mb-30">
                        <div className="work__area-item">
                            <span>01</span>
                            <h6>Stationery Supply</h6>
                            <p>We provide high-quality stationery for various organizations.</p>
                            <img className="work__area-item-arrow sm-display-n dark-n" src="assets/img/icon/arrow-1.png" alt="shape" />
                            <img className="work__area-item-arrow sm-display-n light-n" src="assets/img/icon/arrow-1-dark.png" alt="shape" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 sm-mb-30">
                        <div className="work__area-item">
                            <span>02</span>
                            <h6>Computer Labs  Supply</h6>
                            <p>We deliver and maintain equipment for computer labs.</p>
                            <img className="work__area-item-arrow xl-display-n dark-n" src="assets/img/icon/arrow-2.png" alt="shape" />
                            <img className="work__area-item-arrow xl-display-n light-n" src="assets/img/icon/arrow-2-dark.png" alt="shape" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 sm-mb-30">
                        <div className="work__area-item">
                            <span>03</span>
                            <h6>Software Systems Support</h6>
                            <p>We ensure system continuity through tailored solutions.</p>
                            <img className="work__area-item-arrow xl-display-n dark-n" src="assets/img/icon/arrow-1.png" alt="shape" />
                            <img className="work__area-item-arrow xl-display-n light-n" src="assets/img/icon/arrow-1-dark.png" alt="shape" />
                            <img className="work__area-item-arrow display-n xl-display-b sm-display-n dark-n" src="assets/img/icon/arrow-2.png" alt="shape" />
                            <img className="work__area-item-arrow display-n xl-display-b sm-display-n light-n" src="assets/img/icon/arrow-2-dark.png" alt="shape" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="work__area-item">
                            <span>04</span>
                            <h6>Expert Technical Services</h6>
                            <p>We offer technical support and office equipment services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;