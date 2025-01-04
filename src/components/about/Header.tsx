import image from "../../assets/about/image.jpg";
const AboutUs = () => {
  return (
    <div className="bg-slate-100 flex justify-between flex-col sm:flex-row ">
      <div className="text-center mx-2 my-6 sm:text-start sm:mx-20 sm:my-36">
        <h2 className="text-4xl font-bold font-zain">About Us &#9734;</h2>
        <p className="text-lg sm:w-[600px] pt-5">
          Our mission is to make dining easy and accessible for everyone. We aim
          to connect food lovers with local restaurants, offering a platform
          where you can discover unique culinary experiences, make reservations,
          and order with ease—turning every meal into a special experience.
        </p>
      </div>
      <div className="sm:m-10 sm:w-1/2 m-4 bg-white rounded-lg overflow-hidden shadow-md border border-gray-300">
        <img src={image} alt="head pic" className="w-full rounded-2xl" />
      </div>
    </div>
  );
};

export default AboutUs;
