import "./App.css";
import { ListComponent } from "./components/ListComponent";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import RecipeComponent from "./components/RecipeComponent";

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
  const prevSearchIdRef = useRef();

  useEffect(() => {
    prevSearchIdRef.current = query;
  });

  const prevSearch = prevSearchIdRef.current;

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    console.log(search);
    setSearch("");
  };

  const prevClick = () => {
    if (pagination === 0) {
      return;
    }
    setPagination(pagination - 20);
    setCurrentPagination(currentPagination - 20);
    console.log(pagination);
  };

  const nextClick = () => {
    setPagination(pagination + 20);
    setCurrentPage(+1);
    setCurrentPagination(currentPagination + 20);
    console.log(pagination);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      // if (prevSearch !== query) {
      // }
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${MY_ID}&app_key=${MY_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(response);
      console.log(data);
      console.log(data.hits);
      console.log(currentPagination);
    };
    fetchRecipes();
  }, [query, pagination]);

  return (
    <>
      <Navbar bg="black" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/home">Recipes for the Ages</Navbar.Brand>
          <Navbar.Toggle
            className="navbar-toggle"
            aria-controls="navbarScroll"
          ></Navbar.Toggle>
          <Navbar.Collapse className="navbar-collapse" id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form onSubmit={getSearch} className="d-flex">
              <FormControl
                type="search"
                placeholder="Search Recipes"
                className="me-2"
                value={search}
                onChange={updateSearch}
                aria-label="search"
              ></FormControl>
              <Button className="search-btn" variant="secondary" type="submit">
                <h5>Search</h5>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {recipes.length > 0 ? (
        <section>
          <div>
            <div>
              {recipes.map((recipe) => (
                <RecipeComponent
                  key={recipe.recipe.uri}
                  title={recipe.recipe.label}
                  image={recipe.recipe.image}
                  calories={recipe.recipe.calories}
                  ingredients={recipe.recipe.ingredientLines}
                  healthLabels={recipe.recipe.healthLabels}
                  servings={recipe.recipe.yield}
                />
              ))}
            </div>
            <div className="d-flex justify-content-between">
              <Button
                className="prev-btn"
                variant="secondary"
                onClick={prevClick}
                type="submit"
              >
                Previous
              </Button>
              <Button
                className="next-btn"
                variant="secondary"
                onClick={nextClick}
                type="submit"
              >
                Next
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <h2>Sorry !! No Recipes Found</h2>
      )}
    </>

    // <div>
    //   <button onClick={handleClick}>Click</button>
    //   {isShown && <ListComponent />}
    // </div>
  );
}
