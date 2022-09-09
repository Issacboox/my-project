import React from 'react'

export default function Gallery() {
  return (
    <div>
<div>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <style dangerouslySetInnerHTML={{__html: "\nbody,h1 {font-family: \"Montserrat\", sans-serif}\nimg {margin-bottom: -7px}\n.w3-row-padding img {margin-bottom: 12px}\n" }} />
  {/* Sidebar */}
  <nav className="w3-sidebar w3-black w3-animate-top w3-xxlarge" style={{display: 'none', paddingTop: 150}} id="mySidebar">
    
    <div className="w3-bar-block w3-center">
      <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">About</a>
      <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Photos</a>
      <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Shop</a>
      <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Contact</a>
    </div>
  </nav>
  {/* !PAGE CONTENT! */}
  <div className="w3-content" style={{maxWidth: 1500}}>
    {/* Header */}
    <div className="w3-opacity">
      
      <div className="w3-clear" />
      <header className="w3-center w3-margin-bottom">
        <h1><b>PORTFOLIO</b></h1>
        <p><b>NURARAT SANGREUANG</b></p>
        <p className="w3-padding-16"><button className="w3-button w3-black" onclick="myFunction()">BOOBEE TIME</button></p>
      </header>
    </div>
    {/* Photo Grid */}
    <div className="w3-row" id="myGrid" style={{marginBottom: 128}}>
      <div className="w3-third">
        <img src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/297069250_3360658080848934_6592549802868264352_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeE0bQvBiSejgZf44t9jgcsud3n5ytRx_C53efnK1HH8Lr8TYwespqnIpkHy-i_WeTkqfO98ua0GXHpSoFm6SYfG&_nc_ohc=XjQqXJtxW9EAX_6JB5A&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT_WeBmFOmeUFolc8aMlJycjHKPExq1n4PZxf25_MdMkMw&oe=631F25A9" style={{width: '80%'}} />
        <img src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/297219507_3360639170850825_6457430951885158749_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGowQmWhWi-LTwoIkqQIAQiH4ClrZo-I4QfgKWtmj4jhGyaMZKGjJa3snUyNGPkz24I_IFXsDWb5vqki0sjupD9&_nc_ohc=FEHmghtAFogAX8W9WcB&tn=QpvX4uJetmk3hm-T&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT9EpJHhsju2N9R0fHU1KlgBToUAOjJM6Mp1MaFy_68IJA&oe=6320A7C1" style={{width: '80%'}} />
      </div>
      <div className="w3-third">
        <img src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/296700816_3358543301060412_4535822138764690271_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFkXEY3R_1NaaUHZ5dAMGVrq95gjEorO_ir3mCMSis7-BySFf_YCtTtithiLgiY9XjgFA0J0kLWcggm7mgFkEhh&_nc_ohc=xndQ35flYSkAX90UToz&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT_i1KlqrBBrjWfx91ueDJkPDpYZXCzdtQ5rcXCEv-ouSg&oe=6320D9F1" style={{width: '80%'}} />
        <img src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/289289945_3329040244010718_2854855989354328265_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHd3xMG5devM3r3jsc1Vcd6q6InVFcrcearoidUVytx5kfxkJz2pLt-dThinto8keXkeAVPWXft2SEuyG_U-5SN&_nc_ohc=hjZTSOV5e2EAX9x3QWC&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT90XiVdxrEenPwRjTCTowVaP7EEO68FeRckNDorQew8Zw&oe=631EFEC6" style={{width: '80%'}} />
      </div>
      <div className="w3-third">
        <img src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/297184974_3360657990848943_5779163014818715018_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFGYE6YNRVdYjgR8Xue8ckOFJKL7cKKr5wUkovtwoqvnHmLQ4sfZ4sqDaJhYSONPUe6oV9f1hYi7dciGW6slRET&_nc_ohc=FuVecjUGBUgAX9pNfuA&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT9NKva3w3D5yDYkyEwZy4VDwfzVZWRQDFF2V9uSLJp6nA&oe=631F6D6C" style={{width: '80%'}} />
        <img src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/289491980_3329111570670252_2677634141875722743_n.jpg?_nc_cat=80&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFRVsWQbpaaagsG5ra0UU9HAVIJow8dW5IBUgmjDx1bkm8FKmLMWqUGEzaB1xl59aDkxNELVV03WNt-eFgNMIOi&_nc_ohc=KSgyNACpyHIAX8HhC2s&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT-a4PZBfE72_yMwdIKyKrVTdhgPwMBJptCkTdq68juzlA&oe=631F7290" style={{width: '80%'}} />
    </div>
  </div>
</div>
</div>
</div>
  )
}

