import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { React, useState, useEffect } from 'react';
import { Page } from './components/Page/Page';
import { Pagination } from './components/Pagination/Pagination';
function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(3)
  const [elementsPerPage] = useState(20)
  const [totalPhotos, setTotalPhotos] = useState(null);

  useEffect(()=>{
    const getElements = async () => {
      setIsLoading(true)
      await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=c4TOqTp7PioRQCCGaEDwivRR9lYIDIfstO4GDOR6&page=${currentPage}&per_page=${elementsPerPage}`).
      then((response) => {
        setData(response.data)
         
        setIsLoading(false)
      })
      .catch((err)=>console.log(err))
       
  }
   
  
  getElements()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=c4TOqTp7PioRQCCGaEDwivRR9lYIDIfstO4GDOR6');
      setTotalPhotos(response.data.photos.length);
     
      setIsLoading(false)
    };
    fetchData();
  }, []);
  const navButtonClickHandler = (id) =>{
    setCurrentPage(id)
  }
  const getPageNavigation = ()=>{
    const buttons = [];
    for (let i = 0; i < Math.ceil(totalPhotos/elementsPerPage); i++){
    buttons.push(<button onClick = { navButtonClickHandler(this.id)} className='navButton' id = {i+1}>{i+1}</button>)
    }
    return buttons
  }
  return (
    <div className="container">
      <> 
      {
          !isLoading  ?
           <> 
             {getPageNavigation()}

           </> :<></>
          }
      {
          !isLoading  ?
           <h1>  Total photos: {totalPhotos}</h1> :<></>
      }
      </>
       
        <> 
        {
           !isLoading && data.photos != undefined?
           <>{data.photos.map((elem) => 
           <div>
              <h3> {elem.earth_date}</h3>
               
                 
                  <>  
                  <p>{elem.camera.name}</p>
                  <p>{elem.camera.fill_name}</p>
                  </>
                 
              <img width='500px' src ={elem.img_src}/>
           </div> 
           )}</> 
           :<h1>Загрузка...</h1>
        }
         </>
         
    </div>
  );
}
//   data.photos.map((elem) => <img  src ={elem.img_src}/>)
         
export default App;
