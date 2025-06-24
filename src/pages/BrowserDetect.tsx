// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function BrowserRedirect() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const detectBrowser = async () => {
//       const uaData = navigator.userAgentData;
//       if (uaData && uaData.brands) {
//         const brands = uaData.brands.map(b => b.brand.toLowerCase());
//         console.log('UserAgentData brands:', brands);

//         const isVivaldi = brands.some(b => b.includes('vivaldi'));

//         if (isVivaldi) {
//           navigate("/About");
//         } else {
//           navigate('/', { replace: true });
//         }
//       } else {
//         // Fallback to userAgent
//         const userAgent = navigator.userAgent.toLowerCase();
//         console.log('Fallback userAgent:', userAgent);
//         const isVivaldi = userAgent.includes('vivaldi');

//         if (isVivaldi) {
//           navigate('/games', { replace: true });
//         } else {
//           navigate('/', { replace: true });
//         }
//       }
//     };

//     detectBrowser();
//   }, [navigate]);

//   return null;
// }

// export default BrowserRedirect;
