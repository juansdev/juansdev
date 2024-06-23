"use client";

import Image from "next/image";
import Link from "next/link";
import {toggleClassNameOfSelectorIfElementIsVisibleByScroll} from "@/presentation/views/helpers";
import {useEffect} from "react";
import {
  toggleClassNameOfSelectorIfElementIsVisible
} from "@/presentation/views/helpers/useIsVisible.presentation.views.helpers";
import {MenuSidebar} from "@/presentation/views/components";
import {IMenuSidebarItems} from "@/presentation/views/components/sidebar/MenuSidebar";

export const Sidebar = () => {
  const menuItems: IMenuSidebarItems = {
    "Home": {
      href: "#home",
      pathImage: "https://up2client.com/envato/biogi/resume/assets/images/svg/home-svg.svg",
      altImage: "Icon of Home",
      isSelected: true
    },
    "About": {
      href: "#about",
      pathImage: "https://up2client.com/envato/biogi/resume/assets/images/svg/about-svg.svg",
      altImage: "Icon of About"
    },
    "Resume": {
      href: "#resume",
      pathImage: "https://up2client.com/envato/biogi/resume/assets/images/svg/resume-svg.svg",
      altImage: "Icon of Resume"
    },
    "Services": {
      href: "#services",
      pathImage: "https://up2client.com/envato/biogi/resume/assets/images/svg/services-svg.svg",
      altImage: "Icon of Services"
    },
    "Portfolio": {
      href: "#portfolio",
      pathImage: "https://up2client.com/envato/biogi/resume/assets/images/svg/portfolio-svg.svg",
      altImage: "Icon of Portfolio"
    },
    "Pricing": {
      href: "#pricing",
      pathImage: "https://up2client.com/envato/biogi/resume/assets/images/svg/pricing-svg.svg",
      altImage: "Icon of Pricing"
    },
    "Blog": {
      href: "#blog",
      pathImage: "https://up2client.com/envato/biogi/resume/assets/images/svg/blog-svg.svg",
      altImage: "Icon of Blog"
    },
    "Contact": {
      href: "#contact",
      pathImage: "https://up2client.com/envato/biogi/resume/assets/images/svg/contact-svg.svg",
      altImage: "Icon of Contact"
    }
  }
  useEffect(() => {
    const containerScrollable = document.getElementsByClassName("sidebar")[0];
    toggleClassNameOfSelectorIfElementIsVisible(".element-to-modify-by-scroll", "show");
    toggleClassNameOfSelectorIfElementIsVisibleByScroll(containerScrollable, ".element-to-modify-by-scroll", "show");
  }, []);
  return (
    <div className={"sidebar"}>
      <div className={"profile-img-main"}>
        <Image className={"element-to-modify-by-scroll"} src={"/images/profile-img.webp"} alt={"Image of Profile"}
               width={210} height={180}/>
        <h1 className={"element-to-modify-by-scroll"}>
          Juan
          <span>Serrano</span>
        </h1>
        <h2 className={"element-to-modify-by-scroll"}>Developer</h2>
        <div className={"element-to-modify-by-scroll"}>
          <Link className={"element-to-modify-by-scroll"} href={"mailto:juansdev72@gmail.com"}>
            <Image src={"https://up2client.com/envato/biogi/resume/assets/images/svg/email-svg.svg"}
                   alt={"Icon of E-mail"} width={20} height={20}/>
          </Link>
        </div>
      </div>
      <div className={"menu-list-main"}>
        <MenuSidebar menuItems={menuItems}/>
      </div>
      <div>
        <div className={"wrap"}>
          <Link href={"https://up2client.com/envato/biogi/resume/assets/pdf/olivia_resume.pdf"}>
            <span className={"circle"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path className="download-svg"
                      d="M13 12H16L12 16L8 12H11V8H13V12ZM15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918Z"
                      fill="white"></path>
              </svg>
            </span>
            <span className={"title"}>Download CV</span>
            <span className={"title-hover"}>Click Here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}