"use client"
import SEO from "@/components/data/seo";
import HeaderTwo from "@/components/layout/headers/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";
import BannerTwo from "./banner";
import SwitchTab from "../../common/dark-light";
import Services from "./services";
import About from "./about";
import Video from "./video";
import Work from "./work";
import Consulting from "./consulting";
import Portfolio from "./portfolio";
import Team from "./team";
import Blog from "./blog";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const HomeTwo = ({addClass}) => {
    return (
        <>
            <SEO pageTitle="TOKELO" />
            <SwitchTab addClass={addClass} />
            <HeaderTwo />
            <BannerTwo />
            <Services />
            <About />
            <Video />
            <Work />
            <div style={{height:'10vw', width:'100%'}}> </div>
            <Portfolio />

            <Consulting />
          
            <div style={{height:'5vw', width:'100%'}}>

            </div>
            {/* <Team /> */}
            {/* <Blog /> */}
            <FooterTwo />
            <ScrollToTop addClass={addClass} />
        </>
    );
};

export default HomeTwo;