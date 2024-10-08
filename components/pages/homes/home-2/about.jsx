import shape1 from "../../../../public/assets/img/shape/about.png";
import shape2 from "../../../../public/assets/img/shape/about-dark.png";
import image1 from "../../../../public/assets/img/service/smiling-black-male-programmer-joyfully-clapping-ha-2024-07-24-00-00-51-utc.jpg";
import image2 from "../../../../public/assets/img/service/line-of-teenage-high-school-students-studying-in-c-2023-11-27-05-13-17-utc.jpg";
import avatar from "../../../../public/assets/img/jacky.jpeg";
import Count from "../../common/count";
import Link from "next/link";

const About = () => {
    const aboutData = {
        subtitle: 'About Company',
        title: 'Tokelo Technologies CC ',
        description: 'Established in 2008, Tokelo Technologies is a 100% black-owned SMME led by Jacky Mofokeng. We specialize in local and national project development, offering services in project management, manufacturing, distribution, and innovative solutions. Our expertise spans infrastructure development, technology consulting, and system implementation, with a focus on delivering scalable and sustainable results for our clients.',
        count: 16,
        exp: 'Years Experience on Equipment Supply',
        btn_title: 'Discover More',
        btn_link: '/about',
        author_name: 'Jacky, Mofokeng',
        author_sub: 'Founder CEO',
    }
    return (
        <div className="about__two dark__image section-padding">
            <img className="about__two-shape dark-n" src={shape1.src} alt="shape" />
            <img className="about__two-shape light-n" src={shape2.src} alt="shape" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6 lg-mb-30">
                        <div className="row">
                            <div className="col-6">
                                <img src={image1.src} alt="image" />
                            </div>
                            <div className="col-6 mt-95 sm-mt-55">
                                <img src={image2.src} alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="about__two-right">
                            <div className="about__two-right-title">
                                <span className="subtitle-two">{aboutData?.subtitle}</span>
                                <h2>{aboutData?.title}</h2>
                                <p>{aboutData?.description}</p>
                            </div>
                            <div className="about__two-right-experience">
                                <div className="about__two-right-experience-counter">
                                    <h1><Count number={aboutData?.count}/>+</h1>
                                </div>
                                <div>
                                    <h6>{aboutData?.exp}</h6>
                                </div>
                            </div>
                            <div className="about__two-right-btn">
                                <div>
                                    <Link className="btn-six" href={aboutData?.btn_link}>{aboutData?.btn_title}<i className="far fa-chevron-double-right"></i></Link>
                                </div>
                                <div className="about__two-right-btn-author">
                                    <div className="about__two-right-btn-author-avatar">
                                        <img src={avatar.src} alt="about-avatar" />
                                    </div>
                                    <div className="about__two-right-btn-author-name">
                                        <span className="text-one">{aboutData?.author_name}</span>
                                        <h6>{aboutData?.author_sub}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;