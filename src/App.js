import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

const Header = () => {
  return (
    <header className="navbar">
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="https://truckershub.in/jobs" target='_blank'>Deliveries</a>
        <a href="https://truckershub.in/leaderboard/company" target='_blank'>Leaderboard</a>
        <a href="https://truckershub.in/members" target='_blank'>VTC Members</a>
        <a href="https://map.truckershub.in/?vtc=465" target='_blank' className="contact-btn">Live Map</a>
      </nav>
    </header>
  );
};

const MainContent = () => {
  return (
    <main className="content">
      <ImageSection />
      <TextSection2 />
      <PoweredImage />
      <TextSection />
    </main>
  );
};

const ImageSection = () => {
  return (
    <div className="image-section">
      <img
        src="https://i.imgur.com/FT887Hl.png"
        width="550px"
        alt="Loading..."
      />
    </div>
  );
};

const TextSection = () => {
  return (
    <div className="text-section">
      <div classname="convoy-introduction">
      <p className="small-title"><h1>Welcome to Nhi Btaunga Virtual Trucking Company!</h1></p>
      <p><h3>Embark on an extraordinary trucking adventure with Nhi Btaunga VTC in the world of Euro Truck Simulator!</h3></p>
      </div>
      <div classname="convoy-introduction-2">
      <p><h4>We extend a heartfelt invitation to all passionate truckers seeking more than just a virtual company, we offer a family of like-minded individuals ready to hit the open roads together.</h4></p>
      </div> 
      <div className='convoy-description'>
      <p>🌏 Nhi Btaunga VTC isn't just a virtual trucking company, it's a family of dedicated drivers, each fueled by the thrill of the open road. Our roads are woven with friendships, and every journey is a shared experience that leaves a lasting mark on the Euro Truck Simulator landscape.</p>
      <p>🤝 Join us, and you're not just joining a VTC; you're becoming part of a community that values collaboration, camaraderie, and collective success. Together, we navigate the stunning landscapes of Europe, conquering challenges, and delivering goods on time with style.</p>
      <p>🌟 What sets Nhi Btaunga VTC apart? It's not just about reaching the destination, it's about the journey. We celebrate diversity in driving styles, encourage customization of trucks that reflect your personality, and promote a supportive atmosphere that ensures everyone feels at home.</p>
      <p>🎉 So, fellow truckers, whether you're a seasoned driver or just starting your virtual trucking journey, Nhi Btaunga VTC welcomes you with open arms. Join us, rev up your engines, and let's create unforgettable memories on the highways of Euro Truck Simulator together. Together we'll prove that with Nhi Btaunga VTC, there is nothing that we can't conquer on the roads! 🌍🚚</p>
      </div>

      <div className='convoy-benefits'>
      <p>Benefits:</p>
      </div>
      <div className='convoy-benefits-points'>
      <p>- Job Logging</p>
      <p>- Leaderboard</p>
      <p>- Job Tracker</p>
      <p>- Live Tracking of VTC Members (on any device)</p>
      </div>

      <a href="https://truckershub.in/statistics/company?country=all&month=7&year=2024&page=1&dataType=1&search=Nhi+Btaunga" target='_blank' className="cta-btn">Apply for VTC</a>

      <footer>
      <p><h1>Estd: 16th Jan 2024 | Copyright: All Rights Reserved</h1></p>
      </footer>
    </div>
  );
};

const TextSection2 = () => {
  return (
    <div className="powered-by">
      <p>Powered By</p>
    </div>
  );
};

const PoweredImage = () => {
  return (
    <div className="powered-image">
      <img
        src="https://i.imgur.com/b6D2epP.png"
        width="500px"
        alt="Loading..."
      />
    </div>
  );
};
export default App;
