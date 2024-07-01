import Image from "next/image";

const images = ["https://up2client.com/envato/biogi/resume/assets/images/clients-img1.jpg", "https://up2client.com/envato/biogi/resume/assets/images/clients-img2.jpg", "https://up2client.com/envato/biogi/resume/assets/images/clients-img3.jpg", "https://up2client.com/envato/biogi/resume/assets/images/clients-img4.jpg"];

export const WorkedBox = () => {
  return (
    <div className={"worked-box"}>
      <p>Worked with more than 100 people</p>
      <div>
        {
          images.map(
            (
              (image, index) =>
                <Image className={`client-img${index + 1}`} key={index} src={image} alt={`clients-img${index}`}
                       width={48} height={48}/>
            )
          )
        }
        <p>
          100+ Clients
        </p>
      </div>
    </div>
  );
}