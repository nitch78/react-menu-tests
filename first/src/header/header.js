import "./header.scss";

export default function SiteHeader({ color, children }) {
  return (
    <header className={`site-header-${color} site-header`}>
      {children}
      <div className="site-header-content">
        <h1>BONJOUR C'EST LE TITRE</h1>
        <img src="" alt></img>
      </div>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          className={color}
          fill-opacity="1"
          d="M0,32L120,32C240,32,480,32,720,37.3C960,43,1200,53,1320,58.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          className={color}
          fill-opacity="1"
          d="M0,288L80,256C160,224,320,160,480,122.7C640,85,800,75,960,80C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          className={color}
          fill-opacity="1"
          d="M0,256L80,250.7C160,245,320,235,480,208C640,181,800,139,960,149.3C1120,160,1280,224,1360,256L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg> */}
    </header>
  );
}
