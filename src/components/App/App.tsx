import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import Message from './Message/Message';
import ReposResults from './ReposResults/ReposResults';

import logo from '../../assets/images/logo-github.png';
import Logo from '../../assets/logo.svg';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header logo={logo} />

      <SearchBar />
      <Message />
      <ReposResults Logo={Logo} />
    </div>
  );
}

export default App;
