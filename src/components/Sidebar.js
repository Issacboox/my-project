import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          
          <span className="brand-text font-weight-light">Portfolio</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="https://scontent.fbkk2-3.fna.fbcdn.net/v/t1.6435-9/100050886_1578124289005214_5536898819540647936_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE_fCXRc5yUM9rmikBr4up6d_lkuIuhmzl3-WS4i6GbOckkCGU2BZC_1mEFv-dknRxTAqxp1SAi6fLs1-SiB74O&_nc_ohc=MnuSRkvXlGIAX-WAvkP&_nc_ht=scontent.fbkk2-3.fna&oh=00_AT8F06MYDoc7cqw8czddI2q47CkYt5L0bAvAhO57w0JSIw&oe=6341333F"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Nurarat Sangreung
              </a>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item menu-open">
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                  <a href="/Content" className="nav-link active">
                      <i className="far fa-circle nav-icon" />
                      <p>Home</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/dashboard" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Aboout us</p>
                    </a>
                  </li>
                  <li className="nav-item">
                  <a href="/Report" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Portfolio</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
    
  );
}
