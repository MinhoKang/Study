import Auth from "../../utils/auth";

type HeaderProps = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPath: React.Dispatch<React.SetStateAction<string>>;
};

const Header: React.FC<HeaderProps> = ({
  isLogin,
  setIsLogin,
  setCurrentPath
}) => {
  const auth = new Auth();

  const linkTo = (e: React.MouseEvent<HTMLElement>) => {
    const pathname = (e.target as HTMLElement).textContent!;
    setCurrentPath("/" + pathname.toLowerCase());
  };

  const logout = async () => {
    await auth.logout().then(() => {
      setIsLogin(false);

      window.history.pushState({}, "", "/home");
      setCurrentPath(window.location.pathname);
      console.log(window.location.pathname);
    });
  };

  if (!isLogin) {
    return (
      <div>
        <ul>
          <li
            onClick={(e) => {
              linkTo(e);
            }}
          >
            HOME
          </li>
          <li
            onClick={(e) => {
              linkTo(e);
            }}
          >
            LOGIN
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          <li
            onClick={(e) => {
              linkTo(e);
            }}
          >
            HOME
          </li>
          <li
            onClick={(e) => {
              linkTo(e);
            }}
          >
            TODO
          </li>
          <li onClick={() => logout()}>LOGOUT</li>
        </ul>
      </div>
    );
  }
};

export default Header;
