import {
    IniForm
} from '../pages'
import { useState } from 'react'
import { DataSet } from './DataSet'
/* import Footer from './Footer' */

const MainContent = () => {
  
  const [newData, setNewData] = useState(DataSet)

  //temp var
  /* const [newTemp, setNewTemp] = useState("") */
  
  /* console.log(newData) */
  return (
    <>
      <IniForm setNewData={setNewData} newData={newData} DataSet={DataSet}/>
      {/* {newData&&newData 
          .map((dataBaru)=> {
              let {name} = dataBaru;
              return(
                <div key={name}>
                  <span>{name}</span>
                </div>
              )
      })} */}
      {/* <Footer/> */}
    </>
  )
}

export default MainContent