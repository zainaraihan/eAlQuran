import "./style.css";
import Search from "../Search";

const Nav = ({ searchKey, searchChange }) => {
  return (
    <div className="Nav">
      <div className="logo">
        <img src="https://ealquran.netlify.app/favicon.ico" alt="" />
      </div>
      <div className="kanan">
        <Search keyword={searchKey} onChange={searchChange} />
      </div>
    </div>
  );
};

export default Nav;
