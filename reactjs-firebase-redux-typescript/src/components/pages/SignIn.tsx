import React, { FC, useState, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Message from "../UI/Message";
import { signin, setError } from "../../store/actions/authActions";
import { RootState } from "../../store";

const SignIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(""));
      }
    };
  }, [error, dispatch]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (error) {
      dispatch(setError(""));
    }
    setLoading(true);
    dispatch(signin({ email, password }, () => setLoading(false)));
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="heading">Đăng Nhập</h2>
        <form className="form" onSubmit={submitHandler}>
          {error && <Message type="danger" msg={error} />}
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Nhập email"
            className="input"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Nhập mật khẩu"
            className="input"
          />
          <p>
            <Link className="forgotpass" to="/forgot-password">
              Quên mật khẩu?
            </Link>
          </p>
          <button className="btn">Đăng Nhập</button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
