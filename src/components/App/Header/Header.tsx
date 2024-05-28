// import LogoGitHub from '../../../assets/images/logo-github.png';

import './index.scss';

type HeaderProps = {
  logo: string;
};
function Header({ logo }: HeaderProps) {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
    </header>
  );
}
export default Header;
