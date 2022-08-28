import './App.css';
import Carousel from './component/carousel';
import Carousel2 from './component/carousel2';
import Carousel3 from './component/carousel3';
import Footer from './component/footer';
import Header from './component/header';
import Navbar from './component/navbar';

function App() {




  return (<>    <div className="App">


 <Navbar></Navbar> 
 <Header></Header>

<Carousel></Carousel>

<div> 
   <h5>Testimonal</h5>
   <h2>Satisfied travellers around </h2>
   <h2>the world</h2>

   
   
   </div>
<Carousel2></Carousel2>
<div> 
   <h1>We can do anything we want to</h1>
   <h1>if we stick to it long enough. </h1>
   <h5>Do what yo can,with what you have, where you are </h5>

   
   
   </div>
   <Carousel3></Carousel3>

   <Footer></Footer>












         </div>


         </>

  );
}

export default App;
