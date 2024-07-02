"use client";

import Link from "next/link";
import Image from "next/image";
import {useEffect, useRef} from "react";
import {WorkedBox} from "@/presentation/views/components";

const listTitleJob = ["Full stack Developer", "Back-End Web Developer"];

export const ResumeHome = () => {
  const titleJobRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleJobRef.current) {
      if (!titleJobRef.current.innerText) titleJobRef.current.innerText = listTitleJob[0];
      const titleJob = titleJobRef.current.innerText;

      const intervalToChangeTitleJob = setInterval(() => {
        const nextIndex = listTitleJob.indexOf(titleJob) + 1 === listTitleJob.length ? 0 : listTitleJob.indexOf(titleJob) + 1;
        if (titleJobRef.current) titleJobRef.current.innerText = listTitleJob[nextIndex];
      }, 1.5 * 1000);

      return (() => {
        clearInterval(intervalToChangeTitleJob);
      });
    }
  }, []);

  return (
    <section className={"section-home"}>
      <div className={"section-one show"}>
        <div className={"home-resume"}>
          <h2 className={"element-to-modify-by-scroll"}>
            Juan
            <span>Serrano</span>
          </h2>
          <h3 ref={titleJobRef} className={"element-to-modify-by-scroll"}></h3>
          <p className={"element-to-modify-by-scroll"}>
            We appreciate your trust greatly our clients choose us & our
            products because they know we are the best.
          </p>
          <div className={"element-to-modify-by-scroll"}>
            <div className="wrapper">
              <Link href={"#"}>
                View Work
              </Link>
            </div>
            <div className="wrapper">
              <Link className={"home-btn-contact"} href={"#"}>
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        <div className="home-profile">
          <Image className={"flower"} width={37} height={37} src={"/images/flower.webp"} alt={"flower"}/>
          <Image className={"profile-img element-to-modify-by-scroll"} width={478} height={478}
                 src={"/images/juan-serrano-main-img.webp"}
                 alt={"Juan Serrano - Profile"}/>
          <WorkedBox/>
        </div>
      </div>
    </section>
  );
}