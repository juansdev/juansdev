import Link from "next/link";
import Image from "next/image";

export const ResumeHome = () => {
  return (
    <section className={"section-home"}>
      <div>
        <div className={"home-resume"}>
          <h2 className={"show"}>
            Jessica
            <span>Biogi</span>
          </h2>
          <h3 className={"show"}>Full stack Developer</h3>
          <p className={"show"}>
            We appreciate your trust greatly our clients choose us & our
            products because they know we are the best.
          </p>
          <div className={"show"}>
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
          <Image className={"flower"} width={37} height={37} src={"/images/flower.png"} alt={"flower"}/>
          <Image className={"profile-img show"} width={478} height={478}
                 src={"https://up2client.com/envato/biogi/resume/assets/images/jessica-main-img.png"}
                 alt={"Juan Serrano - Profile"}/>
        </div>
      </div>
    </section>
  );
}