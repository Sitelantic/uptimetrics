import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container flex justify-around items-center">
        <div className="navbar__logo">
          <h2 className="font-bold text-3xl">Uptimetrics</h2>
        </div>
        <div className="navbar__menu flex gap-4 ">
          <div className="navbar__menu__item">
            <h6>Features</h6>
          </div>
          <div className="navbar__menu__item font-bold">
            <h6>Pricing</h6>
          </div>
          <div className="navbar__menu__item font-bold">
            <h6>Documentation</h6>
          </div>
          <div className="navbar__menu__item font-bold">
            <h6>Blog</h6>
          </div>
        </div>
        <div className="navbar_buttons flex gap-4">
          <div className="navbar__button p-4 bg-bright-green font-medium">
            Sign Up
          </div>
          <div className="navbar__button p-4 font-medium">Log In</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
