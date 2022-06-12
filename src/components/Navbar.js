import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      console.log(keyword);
      navigate(`/?q=${keyword}`);
    }
  };
  const backToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div>
        <div className="login_btn" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav_section">
        <img
          onClick={backToHome}
          width={100}
          src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYt80C%2FbtqDeJAYUBo%2FJQbTuukRladq2AUOeqgiEK%2Fimg.jpg"
        />
      </div>
      <div className="menu_area">
        <ul className="menu_list">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        <div className="search_bar">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="제품검색"
            onKeyPress={(e) => search(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
