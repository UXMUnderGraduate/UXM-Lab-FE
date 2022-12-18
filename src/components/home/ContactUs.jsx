import React from 'react';

const ContactUs = () => {
  return (
    <article className='home-article_3'>
      <div className='article-container_3'>
        <div className='text-center'>
          <h2 className='heading'>Contact Us</h2>
        </div>
        <div className='card-container'>
          <div className='card'>
            <p className='font-[tossface] text-2xl sm:text-3xl sm:mb-3'>📞</p>
            <h3 className='font-semibold text-lg sm:text-xl mb-5'>Call</h3>
            <p className='font-medium text-base sm:text-lg'>02-300-0000</p>
            <p className='font-medium text-base sm:text-lg'>02-303-3333</p>
          </div>
          <div className='card'>
            <p className='font-[tossface] text-2xl sm:text-3xl sm:mb-3'>📧</p>
            <h3 className='font-semibold text-lg sm:text-xl mb-5'>E-Mail</h3>
            <p className='font-medium text-base sm:text-lg'>
              Prof: example@gmail.com
            </p>
            <p className='font-medium text-base sm:text-lg'>
              Lab: example@gmail.com
            </p>
          </div>
          <div className='card'>
            <p className='font-[tossface] text-2xl sm:text-3xl sm:mb-3'>🏠</p>
            <h3 className='font-semibold text-lg sm:text-xl mb-5'>Address</h3>
            <p className='font-medium text-base sm:text-lg'>
              명지대학교 인문캠퍼스
            </p>
            <p className='font-medium text-base sm:text-lg'>
              학생회관 10층, 10103호
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContactUs;
