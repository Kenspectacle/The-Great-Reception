import React, { useState, useEffect } from "react";

export default function Recipe() {
  const [recipe, setRecipe] = useState("");

  useEffect(() => {
    const fallBackRecipe = `<html> <head> <title>Homemade Tomato Sauce</title> </head> <body> <h1>Homemade Tomato Sauce</h1> <p><strong>Description:</strong> This homemade tomato sauce is made with fresh tomatoes, slowly cooked with onion, green pepper, basil, garlic, and red wine until rich and flavorful.</p> <p><strong>Prep Time:</strong> 30 mins</p> <p><strong>Cook Time:</strong> 4 hrs 10 mins</p> <p><strong>Total Time:</strong> 4 hrs 40 mins</p> <p><strong>Servings:</strong> 6</p> <h2>Ingredients</h2> <ul> <li>10 ripe tomatoes</li><li>2 tablespoons butter</li><li>2 tablespoons olive oil</li><li>2 small carrots, chopped</li><li>1 onion, chopped</li><li>1 small green bell pepper, chopped</li><li>4 cloves garlic, minced</li><li>1/4 cup Burgundy wine</li><li>1/4 cup chopped fresh basil</li><li>1/4 teaspoon Italian seasoning</li><li>2 stalks celery</li><li>1 bay leaf</li><li>2 tablespoons tomato paste</li> </ul> <h2>Steps</h2> <ol> <li>Gather the ingredients. AllRecipes / Ana Cadena</li><li>Bring a large pot of water to a boil. Prepare a large bowl of ice water. AllRecipes / Ana Cadena</li><li>Plunge whole tomatoes in boiling water until skin starts to peel, about 1 minute. AllRecipes / Ana Cadena</li><li>Remove with a slotted spoon and place in ice bath. Let rest until cool enough to handle. AllRecipes / Ana Cadena</li><li>Remove peels, squeeze out seeds and chop 8 tomatoes. AllRecipes / Ana Cadena</li><li>Puree tomatoes in a blender or food processor until smooth. Chop remaining 2 tomatoes and set aside. AllRecipes / Ana Cadena</li><li>Heat butter and oil in a large pot or Dutch oven over medium heat. Add carrots, onion, bell pepper, and garlic cook and stir until onion softens, about 5 minutes. AllRecipes / Ana Cadena</li><li>Pour in pureed tomatoes, then stir in chopped tomatoes, wine, basil, and Italian seasoning. Place celery stalks and bay leaf in the pot and bring to a boil. Reduce heat to low, cover, and simmer for 2 hours. AllRecipes / Ana Cadena</li><li>Stir in tomato paste simmer for an additional 2 hours. Discard celery and bay leaf and serve. AllRecipes / Ana Cadena</li> </ol> </body> </html>`;
    const storedRecipe = sessionStorage.getItem("recipeHtml");
    if (storedRecipe) {
      setRecipe(addBasicStyles(storedRecipe));
      sessionStorage.removeItem("recipeHtml"); // Clear sessionStorage to avoid duplication
    } else {
      setRecipe(fallBackRecipe);
    }
  }, []);

  const addBasicStyles = (html: any) => {
    const styles = `
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          padding: 20px;
          background-color: #f9f9f9;
          color: #333;
        }
        h1, h2, h3 {
          color: #444;
        }
        p {
          margin: 0.5em 0;
        }
        ul, ol {
          margin: 1em 0;
          padding-left: 40px;
        }
        li {
          margin-bottom: 0.5em;
        }
        .recipe-container {
          max-width: 800px;
          margin: 0 auto;
          background: #fff;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }
      </style>
    `;
    return html.replace("</head>", `${styles}</head>`);
  };

  return (
    <div
      className="recipe-container"
      dangerouslySetInnerHTML={{ __html: recipe }}
    />
  );
}
