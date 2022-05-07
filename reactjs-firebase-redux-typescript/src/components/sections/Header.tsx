import React, { FC, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button from "../UI/Button";
import { RootState } from "../../store";
import { signout } from "../../store/actions/authActions";
import { Todo } from "../../model";
import { User } from "firebase";

const Header: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);
  const { user } = useSelector((state: RootState) => state.auth);
  const logoutClickHandler = () => {
    dispatch(signout());
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-box">
          <div className="navbar-box-auth">
            {!authenticated ? (
              <div>
                <button onClick={() => history.push("/signup")} className="btn">
                  Đăng Ký
                </button>
                <button className="btn" onClick={() => history.push("/signin")}>
                  Đăng Nhập
                </button>
              </div>
            ) : (
              <div className="function">
                <h1 className="title">Xin chào {user?.firstName} !</h1>
                <button className="btn" onClick={logoutClickHandler}>
                  Thoát
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
