import * as React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { useAppDispatch } from "../../../store";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../authSlice";
import * as api from "../api";
import { selectCreateError, selectUser } from "../selectors";
import Footer from "../../main/Footer/Footer";

function AuthPage(): JSX.Element {
  const user = useSelector(selectUser);
  const CreateError = useSelector(selectCreateError);
  console.log(CreateError);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setName(event.target.value);
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    dispatch(loginSuccess({ name, password }));
  };

  if (user) {
    navigate("/profile");
  }

  return (
    <div className={styles.mainContainer}>
      {!CreateError ? (
        <form className={styles.mainForm} onSubmit={handleSubmit}>
          {/* {!user && <p className={styles.title}>Вход</p>} */}
          {/* {user && <h2>Ты уже залогинен</h2>} */}
          {!user && (
            <>
              <div className={styles.inputbox}>
                <label htmlFor="name-input" className={styles.text}>
                  Login
                </label>
                <input
                  autoComplete="off"
                  placeholder="введите логин"
                  required
                  type="text"
                  className={styles.input}
                  id="name-input"
                  name="username"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className={styles.inputbox}>
                <label htmlFor="password-input" className="form-label">
                  Пароль
                </label>
                <input
                  required
                  autoComplete="off"
                  placeholder="введите пароль"
                  type="password"
                  className={styles.input}
                  id="password-input"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button type="submit" className={styles.btn}>
                Войти
              </button>
            </>
          )}
        </form>
      ) : (
        <form className={styles.mainForm} onSubmit={handleSubmit}>
          {/* {!user && <p className={styles.title}>Вход</p>} */}
          {!user && (
            <>
              <div className={styles.inputbox}>
                <label htmlFor="name-input" className={styles.text}>
                  Login
                </label>
                <input
                  autoComplete="off"
                  placeholder="введите логин"
                  required
                  type="text"
                  className={styles.input}
                  id="name-input"
                  name="username"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className={styles.inputbox}>
                <label htmlFor="password-input" className="form-label">
                  Пароль
                </label>
                <input
                  required
                  autoComplete="off"
                  placeholder="введите пароль"
                  type="password"
                  className={styles.input}
                  id="password-input"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button type="submit" className={styles.btn}>
                Войти
              </button>
            </>
          )}
          <div className={styles.errorText}>
            <p>Неправильный логин или пароль</p>
          </div>
        </form>
      )}
      
    </div>
  );
}

export default AuthPage;
