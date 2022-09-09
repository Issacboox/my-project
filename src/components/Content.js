import React from "react";

export default function Content() {
  return (
    <div className="content-wrapper">
      <div classname="container">
        <title>W3.CSS Template</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Oswald"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open Sans"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\nh1,h2,h3,h4,h5,h6 {font-family: "Oswald"}\nbody {font-family: "Open Sans"}\n',
          }}
        />
        {/* Navigation bar with social media icons */}
        <div className="w3-bar w3-black w3-hide-small">
          <a href="#" className="w3-bar-item w3-button">
            <i className="fa fa-facebook-official" />
          </a>
          <a href="#" className="w3-bar-item w3-button">
            <i className="fa fa-instagram" />
          </a>
          <a href="#" className="w3-bar-item w3-button">
            <i className="fa fa-snapchat" />
          </a>
          <a href="#" className="w3-bar-item w3-button">
            <i className="fa fa-flickr" />
          </a>
          <a href="#" className="w3-bar-item w3-button">
            <i className="fa fa-twitter" />
          </a>
          <a href="#" className="w3-bar-item w3-button">
            <i className="fa fa-linkedin" />
          </a>
          <a href="#" className="w3-bar-item w3-button w3-right">
            <i className="fa fa-search" />
          </a>
        </div>
        {/* w3-content defines a container for fixed size centered content, 
and is wrapped around the whole page content, except for the footer in this example */}
        <div className="w3-content" style={{ maxWidth: 1600 }}>
          {/* Header */}
          <header className="w3-container w3-center w3-padding-48 w3-white">
            <h1 className="w3-xxxlarge">
              <b>Nurarat Sangreuang</b>
            </h1>
            <h6>
              Welcome to the blog of{" "}
              <span className="w3-tag">Bamboo world</span>
            </h6>
          </header>
          {/* Image header */}
          <header className="w3-display-container w3-wide" id="home">
            <img
              className="w3-image"
              src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.6435-9/75418900_1399237880227190_5008906743107813376_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHm20ipXYMwdML7Ehpg3DODGf1OSoCpRCIZ_U5KgKlEInG8NhYSfPZw2AYQxMU1PskL-Ix3rW9eBJSgwP7fzmrS&_nc_ohc=cg4UaKE63-EAX-CvvHG&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT_YssAwj2CK9AUPuB1bWiOVINmVHx8DlkXMuhv4-Fz-Hw&oe=633F7D7E"
              alt="Fashion Blog"
              width={500}
              height={500}
            />
            <div className="w3-display-left w3-padding-large">
              <h1 className="w3-text-black">WELCOME</h1>
              <h1 className="w3-jumbo w3-text-black w3-hide-small">
                <b>BAMBOO BLOG</b>
              </h1>
              <h6>
                <button
                  className="w3-button w3-gray w3-padding-large w3-large w3-opacity w3-hover-opacity-off"
                  onclick="document.getElementById('subscribe').style.display='block'"
                >
                  SUBSCRIBE
                </button>
              </h6>
            </div>
          </header>
  
          {/* END w3-content */}
        </div>
        {/* Subscribe Modal */}
        <div id="subscribe" className="w3-modal w3-animate-opacity">
          <div className="w3-modal-content" style={{ padding: 32 }}>
            <div className="w3-container w3-white">
              <i
                onclick="document.getElementById('subscribe').style.display='none'"
                className="fa fa-remove w3-transparent w3-button w3-xlarge w3-right"
              />
              <h2 className="w3-wide">SUBSCRIBE</h2>
                  
              <button
                type="button"
                className="w3-button w3-block w3-padding-large w3-red w3-margin-bottom"
                onclick="document.getElementById('subscribe').style.display='none'"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
