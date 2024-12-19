import { useLocation } from "react-router-dom";
import "./header.scss";

export default function SiteHeader({ color, headerData, children }) {
  const location = useLocation();

  const data =
    headerData.subMenu?.find(
      (x) => x.path === location.pathname.substring(1)
    ) ?? headerData;

  return (
    <header className={`site-header-${color} site-header`}>
      {children}
      <div className="site-header-content">
        <div className="title-container">
          <h1>{data.pageTitle}</h1>
          <h3>{data.pageDescription}</h3>
        </div>
        <div> </div>
        <img src={data.imgPath} alt="lorem picsum img" />

        {/* <img src="https://picsum.photos/500/330" alt="lorem picsum img"></img> */}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          className={color}
          fill-opacity="1"
          d="M0,288L80,256C160,224,320,160,480,122.7C640,85,800,75,960,80C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </header>
  );
}
