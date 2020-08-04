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
          <MDBCollapse
            id="navbarCollapse3"
            isOpen={isOpen}
            navbar
            className={isOpen && styles.navBarCollapse}
          >
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/">Dashboard</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Prospecting</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="/">Search Tool</MDBDropdownItem>
                    <MDBDropdownItem href="/">Random Leads</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" className={styles.userIcon} />
                  </MDBDropdownToggle>

                  <MDBDropdownMenu className={styles.userDropDown}>
                    <MDBDropdownItem href="/" onClick={handleSignOut}>
                      Sign Out
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </>
      ) : (
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to="/" onClick={signInWithGoogle}>
              Sign In
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      )}
    </MDBNavbar>
  );
};

export default NavBar;
