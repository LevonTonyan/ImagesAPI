
import './App.css';
import SearchBar from './components/SearchBar';
import ImageListContainer from './components/ImageListContainer';



function App() {
  return (
    <div className="App">
      <SearchBar renderContent={(data) => <ImageListContainer data={data} />}/>
    </div>);
}

export default App;
