import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";

function AboutUs() {
  return (
    <div>
      <div>
        <NavigationBar></NavigationBar>
      </div>
      <div className="container-xxl">
        <div className="container justify-content-between mt-5 fs-4 row">
          <div className="col-12 col-md-8 col-lg-12 ms-4 mb-5 mt-5 me-4 float-end text-start">
            <span className="fs-2 fw-bolder " style={{ color: "#025464", fontFamily: "sans-serif", wordSpacing: "1vw" }}> Welcome to People's Bank! </span>
            <br /><br /><span className="bi bi-bank fs-1"></span> At People's Bank, we believe in putting
            people first. We understand that banking is more than just financial
            transactions; it's about building relationships and providing
            personalized solutions to meet your unique needs. With a commitment to
            excellence and a focus on customer satisfaction, we strive to be your
            trusted financial partner.
          </div>
          <img src="logo.png" className="w-75 ms-5 ps-5" height={400} alt="" />
          <div className="col-12 col-md-8 col-lg-5 mb-5 ms-4 me-4 text-start">
            <span className="bi bi-arrow-right fs-4 fw-bold" style={{ color: "#394867" }}> Our History:</span> People's Bank has been serving the community for over 100
            years. Established with the vision of empowering individuals and
            businesses to achieve their financial goals, we have grown to become a
            leading financial institution in the region. Throughout our history,
            we have remained steadfast in our commitment to integrity,
            transparency, and innovation.
          </div>

          <div className="col-12 col-md-8 col-lg-5 ms-4 mb-5 me-4 text-start">
            <span className="fs-4 fw-bold" style={{ color: "#394867" }} > Our Values:</span> Integrity: We believe in conducting our business with the
            highest ethical standards, ensuring transparency, and building trust
            with our customers. We are committed to protecting your financial
            interests and maintaining the confidentiality of your personal
            information.
          </div>

          <div className="col-12 col-md-8 col-lg-5  ms-4 mb-5 mt-4 me-4 text-start">
            <span className="fs-4 fw-bold" style={{ color: "#394867" }}>Customer-Centric Approach:</span> At People's Bank, we prioritize our
            customers' needs and strive to exceed their expectations. We listen
            attentively, understand your financial goals, and provide personalized
            solutions to help you achieve them. Your success is our success.
          </div>

          <div className="col-12 col-md-8 col-lg-5  ms-4 mb-5 mt-4 me-4 text-start">
            <span className="fs-4 fw-bold" style={{ color: "#394867" }}> Innovation: </span> We embrace technological advancements to enhance our
            banking services and provide you with convenient and secure banking
            experiences. From user-friendly online and mobile banking platforms to
            cutting-edge financial tools, we continuously invest in technology to
            make your banking journey efficient and hassle-free.
          </div>

          <div className="col-12 col-md-8 col-lg-5  ms-4 mb-5 mt-4 me-4 text-start">
            <span className="fs-4 fw-bold" style={{ color: "#394867" }}>Community Engagement: </span>We believe in giving back to the communities we
            serve. People's Bank actively participates in local initiatives,
            supporting educational, environmental, and social causes. We are
            dedicated to making a positive impact on the lives of our customers
            and the communities we operate in.
          </div>

          <div className="col-12 col-md-8 col-lg-5  ms-4 mb-5 mt-4 me-4 text-start">
            <span className="fs-4 fw-bold" style={{ color: "#394867" }}>Our Services:</span> At People's Bank, we offer a comprehensive range of
            financial services tailored to your individual and business needs.
            Whether you're looking for personal banking solutions, wealth
            management, mortgages, or business financing, our experienced team of
            professionals is here to assist you every step of the way.
          </div>

          <div className="col-12 col-md-8 col-lg-5 ms-4 mb-5 mt-4 me-4 text-start">
            <span className="fs-4 fw-bold" style={{ color: "#394867" }}>Personal Banking:</span> Our personal banking services include a wide array
            of accounts, such as savings, checking, and certificates of deposit
            (CDs), designed to help you manage your finances effectively. With
            online and mobile banking options, you can conveniently access your
            accounts and carry out transactions from anywhere, at any time.
          </div>

          <div className="col-12 col-md-8 col-lg-5 ms-4 mb-5 mt-4 me-4 text-start">
            <span className="fs-4 fw-bold" style={{ color: "#394867" }}>Loans and Mortgages:</span> Whether you're planning to buy a home, finance a
            car, or need a personal loan, our lending experts are here to guide
            you through the process. We offer competitive interest rates, flexible
            terms, and personalized solutions to meet your borrowing requirements.
          </div>

          <div className="col-12 col-md-8 col-lg-5 ms-4 mb-5 me-4 mt-4 text-start">
            <span className="fs-4 fw-bold" style={{ color: "#394867" }}>Business Banking:</span> Our business banking services are tailored to
            support the growth and success of your business. From business
            checking and savings accounts to merchant services and commercial
            loans, we provide the financial tools and expertise you need to thrive
            in today's competitive market.
          </div>
          <div className="col-12 col-md-8 col-lg-5 ms-4 mb-5 me-4 mt-4 text-start">

          </div>
          <div className="col-12 col-md-8 col-lg-12 ms-4 mb-5 me-4 mt-4 text-start card border border-4 rounded-3 border-opacity-25 p-4">
            We invite you to explore our website, learn more about our services,
            and discover how People's Bank can help you achieve your financial
            goals. Join us today and experience the People's Bank difference!
            Remember, at People's Bank, it's all about you.
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
