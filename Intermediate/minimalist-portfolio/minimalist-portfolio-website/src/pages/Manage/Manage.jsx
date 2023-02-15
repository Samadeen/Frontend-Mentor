import React from 'react';
import Details from '../../components/Details/Details';
import manageHero from '../../assets/images/detail/desktop/image-manage-hero@2x.jpg';
import managePreviewOne from '../../assets/images/detail/desktop/image-manage-preview-1.jpg';
import managePreviewTwo from '../../assets/images/detail/desktop/image-manage-preview-2.jpg';

const Manage = () => {
  return (
    <div>
      <Details
        buttonHref='/'
        buttonText='Visit Website'
        title='Manage'
        description='This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.'
        tag='Interaction Design / Front End Development'
        stack='HTML / CSS / JS'
        projectBackground='This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.'
        heroImg={manageHero}
        staticImageOne={managePreviewOne}
        staticImageTwo={managePreviewTwo}
        nextHref='/bookmark'
        nextText='Bookmark'
        prevHref='/fylo'
        prevText='Fylo'
      />
    </div>
  );
};

export default Manage;
