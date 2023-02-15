import React from 'react';
import Details from '../../components/Details/Details';
import fyloHero from '../../assets/images/detail/desktop/image-fylo-hero@2x.jpg';
import fyloPreviewOne from '../../assets/images/detail/desktop/image-fylo-preview-1.jpg';
import fyloPreviewTwo from '../../assets/images/detail/desktop/image-fylo-preview-2.jpg';

const Fylo = () => {
  return (
    <div>
      <Details
        buttonHref='/'
        buttonText='Visit Website'
        title='Fylo'
        description='This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.'
        tag='Interaction Design / Front End Development'
        stack='HTML / CSS / JS'
        projectBackground='This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.'
        heroImg={fyloHero}
        staticImageOne={fyloPreviewOne}
        staticImageTwo={fyloPreviewTwo}
        nextHref='/manage'
        nextText='Manage'
        prevHref='/insure'
        prevText='Insure'
      />
    </div>
  );
};

export default Fylo;
