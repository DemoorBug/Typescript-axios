import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Like from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import withLoader from './hook/withLoader'
import useURLLoader from './hook/useURLLoader'

interface IShowResult {
  message: string;
  status: string;
}

// const DogShow: React.FC<{data: IShowResult}> = ({ data }) => {
//   return (
//     <>
//       <h2>Dog show : {data.status}</h2>
//       <img src="{data.message}"/>
//     </>
//   )
// }



const App: React.FC =() => {
  // const [ show, setShow ] = useState(true)
  // const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  const [ data, loading ] = useURLLoader('https://dog.ceo/api/breeds/image/random')
  const dogResult = data as IShowResult

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        { loading ? '正在加载'
        :  <img src={dogResult && dogResult.message}/> }
        <Hello/>
        <Like/>
        <MouseTracker/>
        <br/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
