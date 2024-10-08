import Link from 'next/link';
import pic from "@/public/assets/img/portfolio/TAXI.png"

const Consulting = () => {
    return (
        <div className="consulting__area section-padding">
            <img className="consulting__area-shape dark-n" src="assets/img/shape/consulting-dark.png" alt="shape" />
            <img className="consulting__area-shape light-n" src="assets/img/shape/consulting-dark.png" alt="shape" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6 lg-mb-30">
                        <div className="consulting__area-image dark__image">
                            <img src={pic.src} alt="image"  />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="consulting__area-right">
                            <div className="consulting__area-right-title">
                                <span className="subtitle-two">Proven Success</span>
                                <h2>Empowering Industries, Driving Innovation</h2>
                                <p>Tokelo Technologies has the capacity to handle both large and small-scale projects, focusing on delivering attainable and impactful solutions. A significant achievement includes the successful development of a pioneering invention for the taxi industry, created in collaboration with the Vaal University of Technology (V.U.T). </p>
                            </div>
                            {/* <div className="consulting__area-right-list">
                                <span><i className="far fa-check"></i>Teaching and training employees.</span>
                                <span><i className="far fa-check"></i>Project management consulting.</span>
                            </div> */}
                            <Link className="btn-six" href="contact">LERAN MORE<i className="far fa-chevron-double-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consulting;