// Header component for header section: Logo, Nav Items
import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return (
      <div className="header">
        {/* <Title /> */}
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li> 
            <li>Contact</li>
            <button></button>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
          </ul>
        </div>
      </div>
    );
  };
export default Header;