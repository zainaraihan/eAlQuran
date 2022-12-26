import "./style.css";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="logo">
        <img src="https://ealquran.netlify.app/favicon.ico" alt="" />
      </div>
      <div className="kanan">
        <div className="search">Search</div>
        <div className="about">About</div>
      </div>
    </div>
  );
};

export default Nav;
