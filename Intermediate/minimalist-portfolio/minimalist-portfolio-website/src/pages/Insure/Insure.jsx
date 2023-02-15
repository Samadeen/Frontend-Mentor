import React from 'react';
import Details from '../../components/Details/Details';
import insureHero from '../../assets/images/detail/desktop/image-insure-hero@2x.jpg';
import insurePreviewOne from '../../assets/images/detail/desktop/image-insure-preview-1.jpg';
import insurePreviewTwo from '../../assets/images/detail/desktop/image-insure-preview-2.jpg';

const Insure = () => {
  return (
    <div>
      <Details
        buttonHref='/'
        buttonText='Visit Website'
        title='Insure'
        description='This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.'
        tag='Interaction Design / Front End Development'
        stack='HTML / CSS / JS'
        projectBackground='This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.'
        heroImg={insureHero}
        staticImageOne={insurePreviewOne}
        staticImageTwo={insurePreviewTwo}
        nextHref='/fylo'
        nextText='Fylo'
        prevHref='/bookmark'
        prevText='Bookmark'
      />
    </div>
  );
};

export default Insure;
