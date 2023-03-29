import "./App.css";
import { useState } from "react";
import { ListComponent } from "./components/ListComponent";
import { useEffect } from "react";
import { useRef } from "react";

export default function App() {
  // const [isShown, setIsShown] = useState(false);
  // const handleClick = (event) => {
  //   setIsShown((current) => !current);
  // };

  const MY_ID = "ef8cbc86";
  const MY_KEY = "c73ad37c996173138fd8f95ab677f997";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState(0);
  const [currentPagination, setCurrentPagination] = useState(0);
  const [page, setPage] = useState(1);
  const prevSearchIdRef = useRef();

  const fetchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${MY_ID}&app_key=${MY_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(response);
    console.log(data.hits);
    console.log(currentPagination);
  };
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <h2>TEST</h2>
    </div>
    // <div>
    //   <button onClick={handleClick}>Click</button>
    //   {isShown && <ListComponent />}
    // </div>
  );
}
