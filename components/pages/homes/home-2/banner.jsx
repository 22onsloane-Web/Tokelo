import { Swiper, SwiperSlide } from 'swiper/react';
import ModalVideo from "react-modal-video";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';
import Link from 'next/link';
import bannerBg1 from "../../../../public/assets/img/banner/banner-3.jpg";
import bannerBg2 from "../../../../public/assets/img/banner/banner-4.jpg";
import banner1 from "../../../../public/assets/img/banner/young-african-student-using-computer-inside-comput-2023-11-27-05-36-54-utc.jpg"
import banner2 from "../../../../public/assets/img/banner/shot-of-a-group-of-university-students-working-on-2023-11-27-05-03-06-utc.jpg"

const BannerTwo = () => {
	const slideControl = {
		loop: true,
		slidesPerView: 1,
		effect: "fade",
		autoplay: {
			delay: 6000,
			reverseDirection: false,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".banner__two-arrow-next",
			prevEl: ".banner__two-arrow-prev",
		},
	};

  	return (
		<>
			<div className="banner__two swiper banner-two-slider">
			<Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl} >
				<SwiperSlide>
					<div className="banner__two-image" style={{backgroundImage: `url(${banner2.src})`}}>
						<div className="container">
							<div className="row">
								<div className="col-xl-12">
									<div className="banner__two-content">
										{/* <b className="subtitle">Tokelo</b> */}
										<span>Welcome To Tokelo Technologies</span>
										<h1>Build Digital Networks with Custom Solutions</h1>
										<div className="banner__two-content-button">
											<Link className="btn-five" href="/portfolio/3-columns">Our Services<i className="far fa-chevron-double-right"></i></Link>
										</div>
										<img className="banner__two-image-shape-one" src="assets/img/shape/banner-1.png" alt="shape" />
									</div>
									<img className="banner__two-image-shape-two" src="assets/img/shape/banner-2.png" alt="shape" />
								</div>
							</div>
						</div>
					</div>
                    </SwiperSlide>
                    <SwiperSlide>
					<div className="banner__two-image" style={{backgroundImage: `url(${banner1.src})`}}>
						<div className="container">
							<div className="row">
								<div className="col-xl-12">
									<div className="banner__two-content">
										{/* <b className="subtitle">Tokelo</b> */}
										<span>Welcome To Tokelo Technologies</span>
										<h1>Equip Learning Spaces with Modern Tech</h1>
										<div className="banner__two-content-button">
											<Link className="btn-five" href="/portfolio/3-columns">Our Products<i className="far fa-chevron-double-right"></i></Link>
										</div>
										<img className="banner__two-image-shape-one" src="assets/img/shape/banner-1.png" alt="shape" />
									</div>
									<img className="banner__two-image-shape-two" src="assets/img/shape/banner-2.png" alt="shape" />
								</div>
							</div>
						</div>
					</div>
                    </SwiperSlide>
                </Swiper>
				<div className="banner__two-arrow">
					<div className="banner__two-arrow-prev"><i className="fal fa-long-arrow-left"></i></div>
					<div className="banner__two-arrow-next"><i className="fal fa-long-arrow-right"></i></div>
				</div>		
			</div>
		</>
	);
};

export default BannerTwo;
