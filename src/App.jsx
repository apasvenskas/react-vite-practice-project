import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App(){
  const [modalIsVisable, setModalVisable] = useState(true); 

  function showModalHandler(){
    setModalVisable(true);
  }

  function hideModalHandler() {
    setModalVisable(false);
  }
  
  return(
    <>
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
      <PostList isPsoting={modalIsVisable} onStopPosting={hideModalHandler}/>
    </main>
    </>
  )
}

export default App; 
