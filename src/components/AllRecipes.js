import React, {useState , useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Recipe from './Recipe';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';

const AllRecipes = () => {
	const APP_ID = ''; 
  const APP_KEY = '';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const exampleRequest = '';

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`${exampleRequest}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
  		<div>
	      <SearchBar 
	      	handleSubmit={handleSubmit}
	      	handleChange={handleChange}
	      	search={search}
	      />
	      
	      <Grid
	        container
	        direction="row"
	        justify="space-evenly"
	        alignItems="center"
	        spacing={4}
	      >
        {recipes.map(recipe => (
            <Grid item xs={4} key={recipe.recipe.label}>
            	<Link to={'/recipe/' + recipe.recipe.label} query={recipe}>
                <Recipe 
                  key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                  /> 
  						</Link>
            </Grid>   
          ))}
	      </Grid>
      </div>
    );
};

export default AllRecipes;