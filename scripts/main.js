
    function ingredient(amount, unit, name)
    {
        this.name = name;
        this.amount = amount;
        this.unit = unit;
        this.toString = function(){
        var string = ( "  " + this.amount + " " + this.unit + " " + this.name );
        
        var element = document.createElement("li");
            element.className="";
            element.innerHTML = string;
            return element;
        }
        
    }



function dinamicRecipe(name, image, recipePrep, difficulty,ingredients , instructions ){
    this.name = name;
    this.image = image;
    this.recipePrep = recipePrep;
    this.difficulty = difficulty;
    this.instructions = instructions;
    this.ingredients = ingredients;
    this.toString = function (){

        var element = document.createElement ("div");
        element.className = "recipe myRecipe";
        
        var recipeName = document.createElement("h1");
        element.appendChild(recipeName);
        recipeName.innerHTML=this.name;
        
        var image = document.createElement("div");
        image.innerHTML=("<img src=")+this.image+(" />");
        element.appendChild(image);
        
        var recipePrep = document.createElement("h5");
        recipePrep.innerHTML=('<div>') + " Cook & Prep: " + this.recipePrep + ("</div>");
        element.appendChild(recipePrep);
        recipePrep.className = "prepTime";
       
       
        var recipeDifficulty = document.createElement("h5");
        recipeDifficulty.innerHTML=  ('<div>') + " Difficulty: " + this.difficulty + ("</div>");
        element.appendChild(recipeDifficulty);
        recipeDifficulty.className = "Difficulty";
        
        
        var recipeIngredients  = document.createElement("ul");
             for(var i =0 ; i<this.ingredients.length; i++){
                var ingredient = this.ingredients[i];
                recipeIngredients.appendChild(ingredient.toString());
                 };
            
            element.appendChild(recipeIngredients);
        
        var recipeInstructions= document.createElement("p");
        element.appendChild(recipeInstructions);
        recipeInstructions.innerHTML= this.instructions;
        return element;        
    }   
}


var chocolateLiqueur = new ingredient ( " 2 ", " tablespoons ", "chocolate liqueur " );
var syrup = new ingredient ( " 1 ", " teaspoon " , " syrup ");
var chocolateSyrup = new ingredient (  " 2 ", " tablespoons "," chocolate syrup " );
var pecans = new ingredient ( " 2 ", " cups ", " pecans " );
var mapleSyrup = new ingredient ( ' 2 ', ' tablespoons ' , ' maple syrup ');
var brownSugar = new ingredient ( ' 1 ', ' tablespoons ' , ' brown sugar ' );
var cinnamon = new ingredient ( ' 1 ', ' teaspoon ' ,' cinnamon ' );
var salt = new ingredient ( ' 1 ', ' teaspoon ' , ' salt ' );
var ginger = new ingredient ( ' Pinch' ,' ginger ' );
var peanutButter = new ingredient ( ' 3 ', ' tablespoons ' ,' peanut butter ' );
var bakingChocolate = new ingredient ( ' 1/2 ', ' pound ' ,' baking chocolate ' );
var confectionerSugar = new ingredient ( ' 1 ', ' cup ' , " confectioner's sugar" );
var crispRiceCereal = new ingredient ( ' 3 ', ' cups ' ,' crisp rice cereal, crushed ');
var choppedNuts = new ingredient ( ' 1/2 ', ' pound ' ,' chopped nuts or raisins ');
var pitaBreads = new ingredient ( ' 8 ' , ' pita breads ' );
var oil = new ingredient ( ' 1/2 ', ' cup ' , " oil " );
var garlic = new ingredient ( ' 6-8 ', ' cloves ' ,' garlic, crushed ');
var salt = new ingredient ( "salt" , ' poppy seeds and/or sesame seeds ');
var carrots = new ingredient ( ' 3 ', ' carrots, grated ');
var flour = new ingredient ( ' 1', ' cup ' ,' flour ');
var sugar = new ingredient ( ' 1', ' cup ' ,' sugar ');
var vanilla = new ingredient ( ' 1 ', ' teaspoon ' ,' vanilla ');
var eggs = new ingredient ( ' 2 ' ,' eggs ');
var bakingPowder = new ingredient ( ' 1 ', ' teaspoon ' ,' baking powder ');
var lemonJuice = new ingredient ( ' 1 ', ' capful ' ,' lemon juice ');


    
var chocolateCream = new dinamicRecipe("Chocolate Cream", "images/Chocolate-n-Cream-Drink.jpg","05 min", "Easy", [chocolateLiqueur,syrup,chocolateSyrup] , "Make the Drink  Pour liqueur into a martini glass. Add chocolate syrup. Then add non-dairy creamer to fill. Whisk slightly. You can add more chocolate or liqueur if desired. Add slowly! Decorate the Rim Optional .Pour chocolate syrup into a shallow dish. Place nut crunch in a second shallow dish. Turn martini glass upside down, dipping first into chocolate, then immediately into nuts. " ); 
    
var sweetAndSpicyPecans = new dinamicRecipe ( "Sweet and Spicy Pecans","images/Sweet-and-Spicy.jpg", "15 min", "Easy", [pecans, mapleSyrup, brownSugar, cinnamon, salt, ginger], "Prepare the Nuts ,Yields 2 cups. Preheat the oven to 350 degrees Fahrenheit. Line a baking sheet with parchment paper and set aside. In a small bowl, combine all ingredients and stir to coat the nuts evenly. Spread nuts in an individual layer on the prepared baking sheet. Bake for 12 minutes, stirring after every five minutes. Remove from oven and set aside to cool completely before eating. Nuts will be soft when they come out of the oven, but they will harden as they cool. Do not overbake—pecans will burn quickly! Store in an airtight container for about a week." );
    
var chocolateClusters = new dinamicRecipe( "Chocolate Clusters","images/Chocolate_clusters_H.jpg",  "1 h", "Easy" ,[ peanutButter, bakingChocolate, confectionerSugar, crispRiceCereal, choppedNuts ] , "Melt,  In double boiler, melt peanut butter, chocolate and sugar, stirring until smooth. Remove from heat.  Combine, Add remaining ingredients and stir to coat. Drop by teaspoonful onto cookie sheet. Cool thoroughly before removing." );
    
var pitaChips = new dinamicRecipe( "Pita Chips", "images/Pita.Chips2_H.jpg", "20 min", "Easy" ,[ pitaBreads, oil, garlic, salt], "Make the Pita Chips, Cut each pita bread into eight wedges. Combine oil and garlic. Brush this mixture onto the wedges.  Sprinkle salt, sesame seeds and/or poppy seeds over the bread.  Bake at 375 degrees Fahrenheit for 12–15 minutes or until crispy."  );
    
var miniCarrotMuffins = new dinamicRecipe( "Mini Carrot Muffins", "images/Sandy_Eller_Carrot_Muffins.jpg", "15 min", "Easy" , [ carrots, flour, oil, sugar, vanilla, eggs, bakingPowder, lemonJuice ], "Prepare the Muffins, Preheat oven to 350 degrees Fahrenheit. Mix in flour, oil, sugar, vanilla, eggs, baking powder and lemon juice. Stir in carrots. Pour into a mini muffin pan. Bake 10 minutes."  );
 



function createRecipe(dinamicRecipe){
    document.getElementById('content')
    .appendChild(dinamicRecipe.toString());
}


var recipeArr= [
    chocolateCream,
    sweetAndSpicyPecans,
    chocolateClusters,
    pitaChips,
    miniCarrotMuffins
]



var counter = 3;
var randArrey = [];

    for( var i=0; i<counter; i++) {
        do{
        
        var randomRec = Math.random(); 
        randomRec =  Math.floor(randomRec * recipeArr.length);
            
        } while ( randArrey.indexOf(randomRec) > -1) 
        
            randArrey.push(randomRec);
            randomRec =(randomRec);  
            createRecipe(recipeArr[randomRec]);
        
}