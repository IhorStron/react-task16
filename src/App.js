
import './App.css';
import Post from './components/post';


const ANAKIN_IMAGE =
  'https://www.bobafettfanclub.com/tn/200x200/multimedia/galleries/albums/userpics/10001/anakin-skywalker-1569312236.jpeg';

const RAY_IMAGE =
  'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale';

// import logoImage from './img/logo.jpeg';
function App() {
  return (
    <div className="App">
      <div className="container">
        <Post author={{
          name: "Anakin skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader"
        }}
          content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
          image={RAY_IMAGE}
          date={"26 февр."}
        />
        
      </div>
    </div>
  );
}

export default App;
{/* <h1>My React App</h1>
      <h2>Author: Ihor</h2>
      <img src={logoImage} alt="profile-image" /> */}