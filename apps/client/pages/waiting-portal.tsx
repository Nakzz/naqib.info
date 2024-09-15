// // import React, { useEffect, useState } from 'react';
// // // import './MaintenancePage.css'; // Import your CSS file here

// // const MaintenancePage = () => {
// //   const [funFact, setFunFact] = useState('Calculating the number of stars in the galaxy...');

// //   useEffect(() => {
// //     // Simulate fetching a fun fact or dynamic data
// //     setTimeout(() => {
// //       setFunFact('Did you know? There are more stars in the universe than grains of sand on Earth.');
// //     }, 3000);
// //   }, []);

// //   return (
// //     <div className="maintenance-container">
// //       <div className="space-object space-object1"></div>
// //       <div className="space-object space-object2"></div>
// //       <div className="space-object space-object3"></div>
// //       <div className="hero-content">
// //         <h1 className="animated fadeInUp">Hey there, Space Traveler!</h1>
// //         <h4 className="animated fadeInDown">I'm currently working on this website. You'll be able to see me soon!</h4>
// //         <p className="animated fadeInLeft">{funFact}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MaintenancePage;


// import React, { useState, useEffect } from 'react';

// const MaintenancePage = () => {
//   const [funFact, setFunFact] = useState('Calculating the number of stars in the galaxy...');
//   const [time, setTime] = useState({
//     days: '',
//     hours: '',
//     minutes: '',
//     seconds: '',
//   });

//   const commingSoonTime = () => {
//     const endTime = new Date('December 31, 2023 17:00:00 PDT');
//     const endTimeParse = Date.parse(endTime) / 1000;
//     const now = new Date();
//     const nowParse = Date.parse(now) / 1000;
//     const timeLeft = endTimeParse - nowParse;
//     const days = Math.floor(timeLeft / 86400);
//     const hours = Math.floor((timeLeft - days * 86400) / 3600);
//     const minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
//     const seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

//     setTime({
//       days,
//       hours: hours < 10 ? '0' + hours : hours,
//       minutes: minutes < 10 ? '0' + minutes : minutes,
//       seconds: seconds < 10 ? '0' + seconds : seconds,
//     });
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       commingSoonTime();
//     }, 1000);

//     setTimeout(() => {
//       setFunFact('Did you know? There are more stars in the universe than grains of sand on Earth.');
//     }, 3000);

//     return () => clearInterval(timer);
//   }, []);
//   const [spaceObjects, setSpaceObjects] = useState([]);

//   const generateRandomSpaceObjects = () => {
//     const objects = [];
//     for (let i = 0; i < 50; i++) {
//       const x = Math.random() * window.innerWidth;
//       const y = Math.random() * window.innerHeight;
//       const size = Math.random() * 10;
//       const style = {
//         left: `${x}px`,
//         top: `${y}px`,
//         width: `${size}vh`,
//         height: `${size}vw`,
//       };
//       objects.push(<div className="space-object" style={style} key={i}></div>);
//     }
//     setSpaceObjects(objects);
//   };
//   const [stars, setStars] = useState([]);

//   const generateRandomStars = () => {
//     const starElements = [];
//     for (let i = 0; i < 100; i++) {
//       const x = Math.random() * window.innerWidth;
//       const y = Math.random() * window.innerHeight;
//       const size = Math.random() * 5;
//       const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`;
//       const style = {
//         left: `${x}px`,
//         top: `${y}px`,
//         width: `${size}px`,
//         height: `${size}px`,
//         background: color,
//       };
//       starElements.push(<div className="star" style={style} key={i}></div>);
//     }
//     setStars(starElements);
//   };
//   useEffect(() => {
//     generateRandomSpaceObjects();
//     generateRandomStars()
//   }, []);

//   return (
//     <div className="maintenance-container">
//          {spaceObjects}
//       <div className="space-object space-object1"></div>
//       <div className="space-object space-object2"></div>
//       <div className="space-object space-object3"></div>
//       <div className="hero-content">
//         <h1 className="animated fadeInUp">Hey there, Space Traveler!</h1>
//         <h4 className="animated fadeInDown">I'm currently working on this website. You'll be able to see me soon!</h4>
//         <p className="animated fadeInLeft">{funFact}</p>
//         <div id="timer">
//           <div id="days">{time.days} <span>Days</span></div>
//           <div id="hours">{time.hours} <span>Hours</span></div>
//           <div id="minutes">{time.minutes} <span>Minutes</span></div>
//           <div id="seconds">{time.seconds} <span>Seconds</span></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MaintenancePage;


// import React, { useState, useEffect } from 'react';

// const MaintenancePage: React.FC = () => {
//   const [funFact, setFunFact] = useState('Calculating the number of stars in the galaxy...');
//   const [showTooltip, setShowTooltip] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setFunFact('Did you know? There are more stars in the universe than grains of sand on Earth.');
//     }, 3000);
//   }, []);

//   const handleSpaceObjectClick = () => {
//     alert('You discovered a new planet!');
//   };

//   const toggleTooltip = () => {
//     setShowTooltip(!showTooltip);
//   };

//   return (
//     <div className="maintenance-container">
//       <div className="space-object space-object1" onClick={handleSpaceObjectClick}></div>
//       <div className="hero-content">
//         <h1 className="animated fadeInUp">Hey there, Space Traveler!</h1>
//         <h4 className="animated fadeInDown">I'm currently working on this website. You'll be able to see me soon!</h4>
//         <p className="animated fadeInLeft" onMouseOver={toggleTooltip} onMouseOut={toggleTooltip}>
//           {funFact}
//           {showTooltip && <span className="tooltip">Another fun fact: A day on Venus is longer than its year!</span>}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MaintenancePage;

import React, { useState, useEffect } from 'react';
// import './YourStyles.scss'; // Replace with the actual path to your SCSS file

const MaintenancePage = () => {
  const [funFact, setFunFact] = useState('Calculating the number of stars in the galaxy...');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFunFact('Did you know? There are more stars in the universe than grains of sand on Earth.');
    }, 3000);
  }, []);

  const handleSpaceObjectClick = () => {
    // Trigger unique animation or sound
    alert('You discovered a new planet!');
  };

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };
  const [spaceObjects, setSpaceObjects] = useState([]);

    const generateRandomSpaceObjects = () => {
      const objects = [];
      for (let i = 1; i < 27; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 10;
        const style = {
          left: `${x}px`,
          top: `${y}px`,
          width: `${size}vh`,
          height: `${size}vw`,
          backgroundImage: `url(\'/images/shapes/${i}.png\')`
        };
        objects.push(<div className={"space-object space-object"+i} style={style} key={i}></div>);
      }
      setSpaceObjects(objects);
    };
    const [stars, setStars] = useState([]);
  
    const generateRandomStars = () => {
      const starElements = [];
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 5;
        const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`;
        const style = {
          left: `${x}px`,
          top: `${y}px`,
          width: `${size}px`,
          height: `${size}px`,
          background: color,
        };
        starElements.push(<div className="star" style={style} key={i}></div>);
      }
      setStars(starElements);
    };
    useEffect(() => {
      generateRandomSpaceObjects();
      generateRandomStars()
    }, []);
  
  //   return (
  //     <div className="maintenance-container">
  return (
    <div className="maintenance-container">
          {spaceObjects}
      <div className="space-object space-object1" onClick={handleSpaceObjectClick}></div>
      <div className="space-object space-object2" onClick={handleSpaceObjectClick}></div>
      <div className="space-object space-object3" onClick={handleSpaceObjectClick}></div>
      <div className="hero-content">
        <h1 className="animated fadeInUp">Hey there, Space Traveler!</h1>
        <h4 className="animated fadeInDown">I'm currently working on this website. You'll be able to see me soon!</h4>
        <p className="animated fadeInLeft" onMouseOver={toggleTooltip} onMouseOut={toggleTooltip}>
          {funFact}
          {showTooltip && <span className="tooltip">Another fun fact: A day on Venus is longer than its year!</span>}
        </p>
        {/* ...existing code for timer and other elements */}
      </div>
    </div>
  );
};

export default MaintenancePage;
