import "./App.css";
import CreatePost from "./Components/CreatePost";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PostList from "./Components/PostList";

import SideBar from "./Components/SideBar";
import React, { useState } from "react";

function App() {
   const [selectedTab, setSelectedTab] = useState("Home");

   return (
      <>
         <div className="app-container">
            <SideBar
               selectedTab={selectedTab}
               setSelectedTab={setSelectedTab}
            />

            <div className="content">
               <Header />
               {selectedTab === "Home" ? <PostList /> : <CreatePost />}

               <Footer />
            </div>
         </div>
      </>
   );
}

export default App;
