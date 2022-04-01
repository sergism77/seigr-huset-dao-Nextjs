import { Navbar, Nav, NavbarBrand, NavItem, NavLink, Collapse, Button, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, NavbarText, NavbarToggler } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { ConnectWallet } from "../components/ConnectWallet.tsx"


  export const Navigation = () => {
    return(
  <div>
  <Navbar
    color="warning"
    expand="md"
    fixed="top"
    full
    light
  >
    <NavbarBrand href="/">
      Seigr Huset DAO
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="./members">
            members
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="./nft">
            NFT
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="./proposals">
            proposals
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="./safe">
            safe
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="./lab">
            lab
          </NavLink>
        </NavItem>
      </Nav>
      <NavbarText>
        <ConnectWallet />
      </NavbarText>
    </Collapse>
  </Navbar>
</div>
    );
};