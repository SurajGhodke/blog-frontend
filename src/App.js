import "./App.css";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
//components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Articles from "./components/Articles";
import AddArticle from "./components/AddArticle";
import Article from "./components/Article";
import EditArticle from "./components/EditArticle";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/articles")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route path="/" exact render={() => <Articles posts={posts} />} />
      <Route
        path="/article/:id"
        render={(props) => <Article {...props} posts={posts} />}
      />
      <Route
        path="/update/:id"
        render={(props) => <EditArticle {...props} posts={posts} />}
      />
      <Route path="/add-article" component={AddArticle} />
      <Footer />
    </div>
  );
}

export default App;
