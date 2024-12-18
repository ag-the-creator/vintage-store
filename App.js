import React from 'react';
import './App.css';
/* import data from "./component/data"; */
import Header from './component/header';
import Hero from './component/hero';
import Card from './component/card'
import Footer from './component/footer';
import data from './component/data';

function App() {
  const[info , setInfo] = React.useState(data);

  return (
    <div className='bg-black w-full'>
     <Header />
     <Hero />
 
     <Card 
     key={info.id}
     proName={info.productName}
    /*
     image={props.id}
     description={props.id} */
     />


      <Footer />
    </div>
  );
}

export default App;
