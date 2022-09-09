import React from 'react'

export default function dashboard() {
  return (
    <div className='content-wrapper'>
<div>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
  <style dangerouslySetInnerHTML={{__html: "\nbody,h1,h2,h3,h4,h5 {font-family: \"Raleway\", sans-serif}\n" }} />
  {/* w3-content defines a container for fixed size centered content, 
and is wrapped around the whole page content, except for the footer in this example */}
  <div className="w3-content" style={{maxWidth: 1400}}>
    {/* Header */}
    <header className="w3-container w3-center w3-padding-32"> 
      <h1><b>MY BLOG</b></h1>
      <p>Welcome to the blog of <span className="w3-tag">Bamboo</span></p>
    </header>
    {/* Grid */}
    <div className="w3-row">
      {/* Blog entries */}
      <div className="w3-col l8 s12">
        {/* Blog entry */}
        <div className="w3-card-4 w3-margin w3-white">
          <img src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.6435-9/79373687_1418748684942776_8322687063824531456_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFyCS-YcqpHUIRNuIKB6s5AC4ZB-ZlyvfELhkH5mXK98fHUPnktDORYHQpU_gJpFSRCzLxGLugJwlcWC2ysyvdt&_nc_ohc=cfSly5eohT4AX8V3c62&tn=QpvX4uJetmk3hm-T&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT9kMcAZY9AIy5HlbmdVedl9OSASI597enAwDzliv0cDVw&oe=633F1384" alt="Nature" height={500} width={500} />
          <div className="w3-container">
            <h3><b>Nurarat Sangreuang</b></h3>
            <h5>about me</h5>
          </div>
          <div className="w3-container">
            <p> I'm Nurarat Sangreuang, but you can call me bam. I recently changed my major from English for Business Communication to Information Technology, and I hope you enjoy my first attempt at a website. </p>
            <div className="w3-row">
              <div className="w3-col m8 s12">
                <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
              </div>
              <div className="w3-col m4 w3-hide-small">
                <p><span className="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span className="w3-tag">0</span></span></p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* Blog entry */}
   
        {/* END BLOG ENTRIES */}
      </div>
      {/* Introduction menu */}
      <div className="w3-col l4">
        {/* About Card */}
        <div className="w3-card w3-margin w3-margin-top">
          <div className="w3-container w3-white">
            <h4><b>Mind set</b></h4>
            <p>I consistently make a lot of mistakes, but instead of just making them and ignoring them, I need to learn from them so that it won't happen again and again.</p>
          </div>
        </div><hr />
        {/* Posts */}
        <div className="w3-card w3-margin">
          <div className="w3-container w3-padding">
            <h4>More info</h4>
          </div>
          <ul className="w3-ul w3-hoverable w3-white">
            <li className="w3-padding-16">
              <img src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.6435-9/75323316_1399237903560521_8148518314541318144_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHa3kcQPbME81w-XGsFaEHq5hfqvv_0Ro_mF-q-__RGjxsRF3Wnx1Wu7iazH_ZpSbtB3KnbAABQTXPU5P4OBKll&_nc_ohc=uNoD2cn6kFMAX-iu3gu&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT9PT-fFiMA8Nfhiu3XMGf8jup72AI9B7uGdB3yc6s1lyw&oe=63419A46" alt="Image" className="w3-left w3-margin-right" style={{width: 50}} />
              <span className="w3-large">FACEBOOK</span><br />
              <span>FB : Nurarat Sanreuang </span>
            </li>
            <li className="w3-padding-16">
              <img src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.6435-9/78329950_1412826212201690_2060808965993791488_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFKGdydWzrbQyI8sNT4d73ebba0FWsSS1ZttrQVaxJLVtVYH4feKZGXutDLbW0oe2O5_NmP3kVX8UNdw_u8S44j&_nc_ohc=bZEEtZQBTukAX8LFwzp&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT_eMpS38cKz8rkKVv556I2l8UWS6D121DFjUuCxvjp6EA&oe=63401239" alt="Image" className="w3-left w3-margin-right" style={{width: 50}} />
              <span className="w3-large">INSTAGRAM</span><br />
              <span>IG : Izsybamyz</span>
            </li>
            <li className="w3-padding-16">
              <img src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.6435-9/72481568_1401014106716234_2474856754064654336_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHc1YS7bEnbMOdnppsIeQW-LSQPzH1yls8tJA_MfXKWz1wvhNLsJx_SK6It-cJkTvOncz1QbuapgTM09w1fftXQ&_nc_ohc=up4Lb2oJKHwAX8S9d_9&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT-Z-U3XNimp9Kze6k9jwG1B6QGrpX4yM0AsCPX5HR0y0A&oe=633F0A93" alt="Image" className="w3-left w3-margin-right" style={{width: 50}} />
              <span className="w3-large">LINE</span><br />
              <span>ID : edokfolk08 </span>
            </li>
            <li className="w3-padding-16">
              <img src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t1.6435-9/121676614_1715404095277232_5072001053354358622_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHAAaccmh8-dpaGGAVKpMM3SEOYxfhik5NIQ5jF-GKTk7CSnijr2JKq5EL3xDz7s5TS3KJD_SdOxY9x6qW6jsoP&_nc_ohc=9wINSFFDgfoAX9Cnj7j&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT9j9jRM2-9svNeIhI8zgsdJe7WbIb5359qBwVd4N1H9Vg&oe=633F8C8F" alt="Image" className="w3-left w3-margin-right" style={{width: 50}} />
              <span className="w3-large">Discord</span><br />
              <span>DS : 𝗜𝘇𝘀𝘆𝗯𝗮𝗺#8226 </span>
            </li>
          </ul>
        </div>
        <hr /> 
        {/* END Introduction Menu */}
      </div>
      {/* END GRID */}
    </div><br />
    {/* END w3-content */}
  </div>
</div>

    </div>
  )
}
