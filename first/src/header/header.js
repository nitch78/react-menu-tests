import "./header.scss";

export default function SiteHeader({ color, children }) {
  return (
    <header className={`site-header-${color} site-header`}>
      {children}
      <div className="site-header-content">
        <div className="title-container">
          <h1>Le titre de cette page</h1>
          {color === "red" && (
            <h3>Petit sous titre qui pourrait etre un paragraphe</h3>
          )}
          {color === "orange" && (
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              tincidunt mollis nisl, at interdum sem. Duis iaculis ex ut
              malesuada posuere. Integer non egestas ante, nec eleifend massa.
              Integer vel purus iaculis, mattis lorem sed, interdum nunc.
              Aliquam commodo vestibulum nulla, ut elementum sapien lacinia a.
            </h3>
          )}
        </div>

        <img src="https://picsum.photos/400/250" alt="lorem picsum img"></img>
      </div>
      {/* https://getwaves.io/ */}
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
