import { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import videoBg from "../../../../public/assets/img/award.png";
import Image from "next/image";
import trophee1 from "../../../../public/assets/img/trophees.png"

const Video = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
      setOpenVideo(true);
    }; 
    return (
        <>
            <div className="solution__area section-padding" style={{backgroundImage: `url(${videoBg.src})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-9">
                            <div className="solution__area-title">
                                <span className="subtitle-two">Digital Solution</span>
                                <h1>Business Award</h1>
                                <h4 style={{color:"white"}}>The Managing Director of Tokelo Technologies is a recipient of the 2013 Sedibeng Mayoral Awards. He received the award for Innovation and Entrepreneurshipions</h4>
                                <Link className="btn-five" href="/about-us" style={{marginTop:"2vw"}}>learn more<i className="far fa-chevron-double-right"></i></Link>
                            </div>					
                        </div>
                        <div className="col-xl-3">
                            <div className="solution__area-right">
                                <div className="solution__area-right-video">
                                    <div className="video video-pulse">
                                        <Image src={trophee1} alt=""  className="tropheeimg"/>
                                       
                                    </div>
                                 
                                </div>
                            </div>					
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId="SZEflIVnhH8" onClose={() => setOpenVideo(false)} />       
        </>
    );
};
export default Video;