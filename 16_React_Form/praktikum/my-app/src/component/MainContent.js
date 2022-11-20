import {
    IniForm
} from '../pages'
import { useState } from 'react'
import { DataSet } from './DataSet'
/* import Footer from './Footer' */

const MainContent = () => {
  
  const [newData, setNewData] = useState(DataSet)
  
  return (
    <>
      <IniForm setNewData={setNewData} newData={newData} DataSet={DataSet}/>
      
      {/* <Footer/> */}
    </>
  )
}

export default MainContent