import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
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
  const MY_ID = "ef8cbc86";
  const MY_KEY = "c73ad37c996173138fd8f95ab677f997";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${MY_ID}&app_key=${MY_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };
    fetchRecipes();
  }, [query]);

  return (
    <>
      <Navbar bg="black" expand="lg" variant="dark" className="header">
        <Container fluid>
          <Navbar.Brand href="/home" className="title">
            Find Your Recipe
          </Navbar.Brand>
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
                  title={recipe.recipe.label}
                  image={recipe.recipe.image}
                  calories={recipe.recipe.calories}
                  ingredients={recipe.recipe.ingredientLines}
                  cuisineType={recipe.recipe.cuisineType}
                  mealtype={recipe.recipe.mealType}
                  servings={recipe.recipe.yield}
                  totalTime={recipe.recipe.totalTime}
                />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <h2 className="title">Sorry!!! No Recipes Found. Try again later</h2>
      )}
    </>
  );
}
