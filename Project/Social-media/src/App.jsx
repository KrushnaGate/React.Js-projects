import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Siderbar from "./Components/Siderbar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListProvider from "./Store/Post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Create Post");
  return (
    <PostListProvider>
      <div className="app-container">
        <Siderbar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Siderbar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
