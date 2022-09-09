import React from 'react'

export default function test() {
  return (
      <div className='content-wrapper'>
  <title>INFORMATION</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,700" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" href="css/style.css" />
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-5">
          <h2 className="heading-section">INFORMATION</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="wrapper">
            <div className="row mb-5">
              <div className="col-md-3">
                <div className="dbox w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-map-marker" />
                  </div>
                  <div className="text">
                    <p><span>Address:</span> Tanchan Apartment 63 M.1 Khlong Khud Thamai Chanthaburi 22170 </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dbox w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-phone" />
                  </div>
                  <div className="text">
                    <p><span>Phone:</span> <a href="tel://1234567920">+66 064-716-6930</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dbox w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-paper-plane" />
                  </div>
                  <div className="text">
                    <p><span>Email:</span> <a href="mailto:info@yoursite.com">nurarat0024@gmail.com</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="dbox w-100 text-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-globe" />
                  </div>
                  <div className="text">
                    <p><span>Website : </span> <a href="https://web.facebook.com/sirinut.sangruaeng"></a>Nurarat Sangreuang</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-md-7">
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Contact Us</h3>
                  <div id="form-message-warning" className="mb-4" /> 
                  <div id="form-message-success" className="mb-4">
                    Your message was sent, thank you!
                  </div>
                  <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" htmlFor="name">Full Name</label>
                          <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-md-6"> 
                        <div className="form-group">
                          <label className="label" htmlFor="email">Email Address</label>
                          <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="subject">Subject</label>
                          <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="#">Message</label>
                          <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Message" defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                          <div className="submitting" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-5 d-flex align-items-stretch">
                <div className="info-wrap w-100 p-5 img" style={{backgroundImage: 'components/12.jpg'}}>
                  <img src='https://scontent.fbkk2-3.fna.fbcdn.net/v/t1.6435-9/100050886_1578124289005214_5536898819540647936_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE_fCXRc5yUM9rmikBr4up6d_lkuIuhmzl3-WS4i6GbOckkCGU2BZC_1mEFv-dknRxTAqxp1SAi6fLs1-SiB74O&_nc_ohc=MnuSRkvXlGIAX-WAvkP&_nc_ht=scontent.fbkk2-3.fna&oh=00_AT8F06MYDoc7cqw8czddI2q47CkYt5L0bAvAhO57w0JSIw&oe=6341333F' height={500} width={500}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}
