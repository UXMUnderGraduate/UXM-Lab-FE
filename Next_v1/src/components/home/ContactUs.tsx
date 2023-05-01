import React from 'react';

const ContactUs = () => {
  return (
    <article className="home-article_3">
      <div className="article-container_3">
        <div className="text-center">
          <h2 className="heading">Contact Us</h2>
        </div>
        <div className="card-container">
          <div className="card">
            <p className="font-[tossface] text-2xl sm:text-3xl sm:mb-3">📞</p>
            <h3 className="font-semibold text-lg sm:text-xl mb-2">Call</h3>
            <br />
            <p className="font-medium text-base sm:text-lg">02-300-0637</p>
          </div>
          <div className="card">
            <p className="font-[tossface] text-2xl sm:text-3xl sm:mb-3">📧</p>
            <h3 className="font-semibold text-lg sm:text-xl mb-2">E-Mail</h3>
            <br />
            <div className="flex flex-col ">
              <a href="mailto:goldmunt@gmail.com" target="_blank" className="font-medium text-base lg:text-lg sm:text-base">
                Prof: goldmunt@gmail.com
              </a>
              {/* <a href="mailto:example@gmail.com" target="_blank" className="font-medium text-base lg:text-lg sm:text-base">
                Lab: example@gmail.com
              </a> */}
            </div>
          </div>
          <div className="card">
            <p className="font-[tossface] text-2xl sm:text-3xl sm:mb-3">🏠</p>
            <h3 className="font-semibold text-lg sm:text-xl mb-2">Address</h3>
            <br />
            <p className="font-medium text-base sm:text-lg">명지대학교 인문캠퍼스</p>
            <div className="flex flex-col ">
              <p className="font-medium text-base sm:text-lg">Prof : S1822호</p>
              <p className="font-medium text-base sm:text-lg">LAB : S21010호</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContactUs;
