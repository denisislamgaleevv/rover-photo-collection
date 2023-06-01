import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { React, useState, useEffect } from 'react';
import { Page } from './components/Page/Page';
import { Pagination } from './components/Pagination/Pagination';
 
function App() {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(null)
  const [elementsPerPage] = useState(12)
  const [totalPhotos, setTotalPhotos] = useState(null);
  const [prevPhoto, setPrevPhoto] = useState('');


  useEffect(()=>{
     setTotalPhotos(856)
    getElements()
    
  }, [currentPage])
/* 
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=c4TOqTp7PioRQCCGaEDwivRR9lYIDIfstO4GDOR6');
      setTotalPhotos(response.data.photos.length);
     
      setIsLoading(false)
    };
    fetchData();
  }, []);
  */
  const navButtonClickHandler = event =>{
    const id = event.currentTarget.id;
    console.log(id);
    setCurrentPage(id)
    getElements()
  }
   const getElements = async () => {
      setIsLoading(true)
      await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=c4TOqTp7PioRQCCGaEDwivRR9lYIDIfstO4GDOR6&page=${currentPage}&per_page=${elementsPerPage}`).
      then((response) => {
        setData(response.data)
        setPrevPhoto(response.data.photos[0].img_src)
        console.log(prevPhoto)
        setIsLoading(false)
      })
      .catch((err)=>console.log(err))
      
  }

   
  const getPageNavigation = () =>{
    const buttons = [];
    for (let i = 0; i < Math.ceil(totalPhotos/elementsPerPage); i++){
      buttons.push(<button id = {i+1} onClick = {navButtonClickHandler} className='navButton'  >{i+1}</button>)
    }
    return buttons
  }
  return (
    <div className='App'>  
    <div className="container">
      <> 
      { }
      
      {
           
          <> 
           <h1>  Total photos: {totalPhotos}</h1>
           {getPageNavigation()}
           </>  
      }
      </> 
       
        <div className='content '> 
        {
           !isLoading && data.photos != undefined?
           <>{data.photos.map((elem) => 
           <div>
                <Page elem ={elem}/>
           </div> 
           )}</> 
           :<h1>Загрузка...</h1>
        }
         </div>
         
    </div>
    </div>
  );
}
//   data.photos.map((elem) => <img  src ={elem.img_src}/>)
         
export default App;
