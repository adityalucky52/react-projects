import "./App.css";
import CreatePost from "./Components/CreatePost";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PostList from "./Components/PostList";

import SideBar from "./Components/SideBar";

function App() {
   return (
      <>
         <div className="app-container">
            <SideBar />

            <div className="content">
               <Header />
               <CreatePost></CreatePost>
               <PostList></PostList>
               <Footer />
            </div>
         </div>
      </>
   );
}

export default App;
