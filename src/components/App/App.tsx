
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import Message from './Message/Message';
import ReposResults from './ReposResults/ReposResults';
import './App.scss';
import logo from '../../assets/images/logo-github.png';



// const App = () => {  


  // const [currencies, setCurrencies] = useState<Currency[]>([]);
  // const [currency, setCurrency] = useState<Currency | null>(null);

  // useEffect(() => {
  //   console.log('Je suis appelé à CHAQUE rendu de App');
  // });

  // useEffect(() => {
  //   console.log('Je suis appelé au PREMIER RENDU uniquement');
  // }, []); // dépendances = tableau vide






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
