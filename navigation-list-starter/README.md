# navigation-list-starter

This starter project that explores navigation in React Native. 

The project uses React Native to display a list of Cat and Dog breeds and their ratings for various features of the breed. 

The project uses the List and Detail navigation paradigm, or at least it will after you follow the instructions. 

You can explore the project on your own reading the comments as you go. Start with App.js and follow the instructions. They walk you through the components used in the project. 

The project contains the following components. 

- App - Sets up a stack navigator
- HomeScreen - Displays a list of Cat or Dog Breeds
  - BreedNameCell - Displays the name of a breed in a FlatList 
- DetailScreen - Display details about a breed. The features of a breed are passed to this view through the navigation prop. 
  - DetailFeature - Displays a feature of a breed and a bar that shows how much of that feature is possesed by the breed. 
- cat-dog-breeds.json - Contains all of the cat and dog breeds and their features used in the app. 
- breeds.js - Imports cat-and-dog-breeds.json and organizes the data for use by the app.
- BreedCell - Is not used in this app but was used in the first tutorial. 

## Getting started 

Download this repo and navigate to the folder with the terminal. 

`npm install`

Run the app with: 

`yarn start`

The app should open the HomeScreen and display a list of cat breeds. You can change this to dog breeds by using `dogs` in place of `cats` in the data prop in `FlatList`.

Once the app is running you can try the challenges bellow:

## Challenges 

- Tapping a cell should navigate to DetailScreen
  - You need to add `DetailScreen` to the StackNavigator in App.js. 
  - Each cell is made from a TouchableHighLight compoent. You'll need to set the onPress to use `this.props.navigate()`. You'll need to include the key you used setting up the Detail screen in the previous step. 
  - Test your work. If everything is working you should get the detail screen but it will be blank. 
- Passing data to the `DetailScreen`
  - You need to pass the object in the data array through props.navigate as the second parameter. 
