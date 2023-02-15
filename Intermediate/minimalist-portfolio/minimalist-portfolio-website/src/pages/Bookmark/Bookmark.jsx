import React from 'react';
import Details from '../../components/Details/Details';
import bookmarkHero from '../../assets/images/detail/desktop/image-bookmark-hero@2x.jpg';
import bookmarkPreviewOne from '../../assets/images/detail/desktop/image-bookmark-preview-1.jpg';
import bookmarkPreviewTwo from '../../assets/images/detail/desktop/image-bookmark-preview-2.jpg';

const Bookmark = () => {
  return (
    <div>
      <Details
        buttonHref='/'
        buttonText='Visit Website'
        title='Bookmark'
        description='This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.'
        tag='Interaction Design / Front End Development'
        stack='HTML / CSS / JS'
        projectBackground='This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.'
        heroImg={bookmarkHero}
        staticImageOne={bookmarkPreviewOne}
        staticImageTwo={bookmarkPreviewTwo}
        nextHref='/manage'
        nextText='Manage'
        prevHref='/insure'
        prevText='Insure'
      />
    </div>
  );
};

export default Bookmark;
