import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import styles from "./navbar.module.scss";
import emblem from "./../../assets/images/app-emblem.png";
import { signInWithGoogle, auth } from "../../config/Fire";

const NavBar = ({ user }) => {
  const [isOpen, setToggle] = useState(false);

  const toggleCollapse = () => {
    setToggle(!isOpen);
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <MDBNavbar className={styles.navBar} dark expand="md">
      <MDBNavbarBrand>
        <img src={emblem} className={styles.emblem} alt="emblem" />
      </MDBNavbarBrand>

      {user ? (
        <>
          <MDBNavbarToggler onClick={toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/dashboard">Dashboard</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                {isOpen ? (
                  <>
                    <MDBNavItem>
                      <MDBNavLink to="/random-leads">Quick Pick</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/search-tool">Search Tool</MDBNavLink>
                    </MDBNavItem>
                  </>
                ) : (
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">Prospecting</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem href="/random-leads">
                        Quick Pick
                      </MDBDropdownItem>
                      <MDBDropdownItem href="/search-tool">
                        Search Tool
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                )}
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                {isOpen ? (
                  <MDBNavItem>
                    <MDBNavLink to="/" onClick={handleSignOut}>
                      Sign Out
                    </MDBNavLink>
                  </MDBNavItem>
                ) : (
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt="profile-pic"
                          className={styles.navBarProfilePic}
                        />
                      ) : (
                        <MDBIcon icon="user" className={styles.userIcon} />
                      )}
                    </MDBDropdownToggle>

                    <MDBDropdownMenu className={styles.userDropDown}>
                      <MDBDropdownItem href="/" onClick={handleSignOut}>
                        Sign Out
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                )}
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </>
      ) : (
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to="/dashboard" onClick={signInWithGoogle}>
              Sign In
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      )}
    </MDBNavbar>
  );
};

export default NavBar;
