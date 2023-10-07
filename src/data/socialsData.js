// src/data/socialsData.js
import {
    FiFacebook,
    // FiInstagram,
    FiLinkedin,
    FiTwitter,
    // FiYoutube,
} from 'react-icons/fi';

const baseURL = window.location.origin; // Fetches the base URL dynamically
// const baseURL = "https://mikasoft.xyz";

const SocialSharing = [
    {
        id: 1,
        name: 'Facebook',
        icon: <FiFacebook />,
        url: (projectId) => `https://www.facebook.com/sharer/sharer.php?u=${baseURL}/projects/${projectId}`,
    },
    {
        id: 2,
        name: 'Twitter',
        icon: <FiTwitter />,
        // post: (url) => `Wow, I just saw this awesome project by Mika Wisener! It's really cool; check it out!`,
        url: (projectId) => `https://twitter.com/share?text=Wow, I just saw this awesome project by Mika Wisener! It's really cool; check it out! ${baseURL}/projects/${projectId}`,
    },
    {
        id: 3,
        name: 'LinkedIn',
        icon: <FiLinkedin />,
        url: (projectId) => `https://www.linkedin.com/shareArticle?mini=true&url=${baseURL}/projects/${projectId}`,
        // post: (url) => `Wow, I just saw this awesome project by Mika Wisener! It's really cool; check it out! ${url}`,
    },
    // Add more platforms as needed
];

export default SocialSharing;
