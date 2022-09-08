import React from 'react'

export default function Profile() {
  return (
<div className="container">
  <div className='content-wrapper'>
  <img  src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.6435-9/81132158_1444826595668318_2981902416728817664_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEMwNtlAhXfWHrWu-fMTFj7a5SBD_XwIFVrlIEP9fAgVZ-Nd6dvAMzmq177I8tkGLT-ykfRyAsl4JlhvpgktTNC&_nc_ohc=eOSChGsyALsAX-dnTGU&_nc_ht=scontent.fbkk10-1.fna&oh=00_AT8flnS9eliMuQeRK4sy2-zxg18jMPW9UX2QgEsXFDUjkw&oe=6329628F" alt />
  <h1 className="name">Nurarat Sangreung</h1>   
  <span className="slogan">Information Technology BUU</span>      
  <div className="social-img">
    <ul>
      <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
      <li><a href="#" target="_blank"><i className="fa fa-snapchat" /></a></li>
      <li><a href="#" target="_blank"><i className="fa fa-facebook-square" /></a></li>
    </ul>
  </div> 
  <p className="bio">
    Hi I'm Nurarat Sangreuang Welcome to my web site I made it for my midterm exam  
  </p>     
  <h5>Portfolio</h5>            
  <hr />
  <div className="row">
    <div className="small-6 columns">
      <div className="work">
        <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/297219507_3360639170850825_6457430951885158749_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGowQmWhWi-LTwoIkqQIAQiH4ClrZo-I4QfgKWtmj4jhGyaMZKGjJa3snUyNGPkz24I_IFXsDWb5vqki0sjupD9&_nc_ohc=OzhU-xOscfsAX9Q_eNN&_nc_ht=scontent.fbkk10-1.fna&oh=00_AT-sCgR_8PHdeXb-GN3foKNupzZFmxDrdTcYbSuJErQfMQ&oe=6306F281" alt />
      </div>  
    </div>
    <div className="small-6 columns">
      <div className="work">
        <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/297184974_3360657990848943_5779163014818715018_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFGYE6YNRVdYjgR8Xue8ckOFJKL7cKKr5wUkovtwoqvnHmLQ4sfZ4sqDaJhYSONPUe6oV9f1hYi7dciGW6slRET&_nc_ohc=obbHYzADrr8AX_bZe07&_nc_ht=scontent.fbkk10-1.fna&oh=00_AT91MF3gHCrGK_GZIW_Kro9_MhzpQKP7dZgsO6Cja1jcRA&oe=6307B26C" alt />
      </div>  
    </div>
    <div className="small-6 columns">
      <div className="work">
        <img src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/289491980_3329111570670252_2677634141875722743_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFRVsWQbpaaagsG5ra0UU9HAVIJow8dW5IBUgmjDx1bkm8FKmLMWqUGEzaB1xl59aDkxNELVV03WNt-eFgNMIOi&_nc_ohc=2ZQsZq4QgOQAX8FMxsv&_nc_ht=scontent.fbkk14-1.fna&oh=00_AT_Z6y5yHoJ0u10zfGRagxQPiW-V0V7MAnlpH0zjcrfLmg&oe=6307B790" alt />
      </div>  
    </div>
    <div className="small-6 columns">
      <div className="work">
        <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/289303501_3329047580676651_8263717356231723886_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF54EEfiUzWmN86s8rKxkvrgK6FIRfTtT2AroUhF9O1PX9FUHw97esuQv3YvJhwAtS6j60NvZYIqgILp5tt9LU1&_nc_ohc=s7Zur3hKWGsAX9EB8z7&_nc_ht=scontent.fbkk10-1.fna&oh=00_AT-pWAIUoqyO4pVLB-Ypcc6t9Es409R-vdZv1exqdDCyLA&oe=63066D4E" alt />
      </div>  
    </div>
  </div>
  <h5>Contact Me</h5>
  <hr />
  <form action>
    <div className="row">
      <div className="medium-6 columns">
        <label htmlFor="name">Name;
          <input type="text" placeholder="Your name" />
        </label>
      </div>
      <div className="medium-6 columns">
        <label htmlFor="email">Email;
          <input type="text" placeholder="Your Email" />
        </label>
      </div>
      <div className="medium-12 columns">
        <label htmlFor="message">Message;
          <textarea name="message" placeholder="None" defaultValue={""} />
        </label>
        <button className="button">Send</button>
      </div>
    </div>
    <div className="footer">
      Nurarat Sangreuang ©
      .All Rights Reserved
    </div>
  </form>
</div>
</div>
  )
}
