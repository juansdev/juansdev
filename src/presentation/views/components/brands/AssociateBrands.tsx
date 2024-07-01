import Image from "next/image";

const brands = [
  "https://up2client.com/envato/biogi/resume/assets/images/brand-logo1.png",
  "https://up2client.com/envato/biogi/resume/assets/images/brand-logo2.png",
  "https://up2client.com/envato/biogi/resume/assets/images/brand-logo3.png",
  "https://up2client.com/envato/biogi/resume/assets/images/brand-logo4.png",
  "https://up2client.com/envato/biogi/resume/assets/images/brand-logo5.png",
  "https://up2client.com/envato/biogi/resume/assets/images/brand-logo6.png",
  "https://up2client.com/envato/biogi/resume/assets/images/brand-logo7.png",
  "https://up2client.com/envato/biogi/resume/assets/images/brand-logo8.png",
  "https://up2client.com/envato/biogi/resume/assets/images/brand-logo7.png"
];

export const AssociateBrands = () => {
  return (
    <section className={"associate-brands"}>
      <h3 className={"element-to-modify-by-scroll"}>Trusted by World Leading Brands</h3>
      <div className="logos">
        <div className="logos-slide">
          <div className="marquee-content">
            {
              brands.map(
                (brand, index) =>
                  <div key={index}>
                    <Image src={brand} alt={"brandLogo"} width={116} height={37}/>
                  </div>
              )
            }
          </div>
        </div>
        <div className="logos-slide">
          <div className="marquee-content">
            {
              brands.map(
                (brand, index) =>
                  <div key={index}>
                    <Image src={brand} alt={"brandLogo"} width={116} height={37}/>
                  </div>
              )
            }
          </div>
        </div>
      </div>
    </section>);
}