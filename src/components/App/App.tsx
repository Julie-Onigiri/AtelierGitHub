import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import Message from './Message/Message';
import ReposResults from './ReposResults/ReposResults';
import './App.scss';
import logo from '../../assets/images/logo-github.png';

function App() {
  return (
    <div className="app">
      <Header logo={logo} />

      <SearchBar />
      <Message />
      <ReposResults />
    </div>
  );
}

export default App;
