# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<!--
You are a famous hacker who has access to a list of the world's most famous celebrities.
You have to create a system where you can view and edit their details to hide their public presence.

Your mission if you choose to accept it, you have to:

1. Create the user interface provided with the design provided

2. The user list item is an accordion,

   - when clicked on, it will cause all the other accordions to collapse and enlarge the one which was clicked.
   - If clicked on the same one it will collapse.
   - Manage the + and - icons in open or collapsed mode (collapsed = - | open = +)

3. Fetch the JSON file provided to fill the list of users. (NOTE - YOU CANNOT EDIT THE JSON FILE)

   - You have to calculate the age of the user based on the date of birth provided
   - gender should be a dropdown (Male | Female | Transgender | Rather not say | Other)
   - country is a text field
   - Description is a text area

4. Provide buttons to edit or delete

   - edit mode will let you edit the details of the user in the exact place

   - you can only edit the user if the user is an adult
   - validations to be implemented where a user cannot
     -- input text in the age field
     -- input numbers in the nationality
     -- keep anything empty
   - when in edit mode you can either save or cancel
     -- save button will be disabled by default and will enable only if the details have changed
     -- save click will update the user's details
     -- cancel will revert the details to their last known state
     -- you cannot open another accordion while in edit mode
   - delete mode should alert you if you actually want to delete the user
     -- if yes - the user will be deleted
     -- if no - do nothing

5. Typescript is a plus

This message will self destruct in 5... 4... 3... 2... 1... NOT
 -->

<!--
[
	{
		"id": 1,
		"first": "Aidan",
		"last": "Wang",
		"dob": "1973-10-16",
		"gender": "male",
		"email": "aidan.wang@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/93.jpg",
		"country": "New Zealand",
		"description": "This character description generator will generate a fairly random description of a belonging to Aidan Wang. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Aidan Wang."
	},
	{
		"id": 2,
		"first": "Anna",
		"last": "Horten",
		"dob": "1972-03-15",
		"gender": "female",
		"email": "anna.horten@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/48.jpg",
		"country": "Norway",
		"description": "This character description generator will generate a fairly random description of a belonging to Anna Horten. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Anna Horten."
	},
	{
		"id": 3,
		"first": "Max",
		"last": "Arnold",
		"dob": "1954-04-22",
		"gender": "male",
		"email": "max.arnold@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/27.jpg",
		"country": "Ireland",
		"description": "This character description generator will generate a fairly random description of a belonging to Max Arnold. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Max Arnold."
	},
	{
		"id": 4,
		"first": "محمدپارسا",
		"last": "صدر",
		"dob": "1953-06-01",
		"gender": "male",
		"email": "mhmdprs.sdr@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/34.jpg",
		"country": "Iran",
		"description": "This character description generator will generate a fairly random description of a belonging to محمدپارسا صدر. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of محمدپارسا صدر."
	},
	{
		"id": 5,
		"first": "Emilia",
		"last": "Gonzalez",
		"dob": "1949-10-07",
		"gender": "female",
		"email": "emilia.gonzalez@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/90.jpg",
		"country": "Spain",
		"description": "This character description generator will generate a fairly random description of a belonging to Emilia Gonzalez. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Emilia Gonzalez."
	},
	{
		"id": 6,
		"first": "Alicia",
		"last": "Ma",
		"dob": "1995-11-23",
		"gender": "female",
		"email": "alicia.ma@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/91.jpg",
		"country": "Canada",
		"description": "This character description generator will generate a fairly random description of a belonging to Alicia Ma. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Alicia Ma."
	},
	{
		"id": 7,
		"first": "یاسمن",
		"last": "كامياران",
		"dob": "1985-06-24",
		"gender": "female",
		"email": "ysmn.kmyrn@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/64.jpg",
		"country": "Iran",
		"description": "This character description generator will generate a fairly random description of a belonging to یاسمن كامياران. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of یاسمن كامياران."
	},
	{
		"id": 8,
		"first": "Reingard",
		"last": "Barz",
		"dob": "1985-03-24",
		"gender": "female",
		"email": "reingard.barz@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/95.jpg",
		"country": "Germany",
		"description": "This character description generator will generate a fairly random description of a belonging to Reingard Barz. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Reingard Barz."
	},
	{
		"id": 9,
		"first": "Felix",
		"last": "Douglas",
		"dob": "1984-07-05",
		"gender": "male",
		"email": "felix.douglas@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/53.jpg",
		"country": "United Kingdom",
		"description": "This character description generator will generate a fairly random description of a belonging to Felix Douglas. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Felix Douglas."
	},
	{
		"id": 10,
		"first": "Claire",
		"last": "Robertson",
		"dob": "2006-04-16",
		"gender": "female",
		"email": "claire.robertson@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/75.jpg",
		"country": "United States",
		"description": "This character description generator will generate a fairly random description of a belonging to Claire Robertson. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Claire Robertson."
	},
	{
		"id": 11,
		"first": "Ümit",
		"last": "Taşlı",
		"dob": "2004-10-17",
		"gender": "male",
		"email": "umit.tasli@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/80.jpg",
		"country": "Turkey",
		"description": "This character description generator will generate a fairly random description of a belonging to Ümit Taşlı. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Ümit Taşlı."
	},
	{
		"id": 12,
		"first": "Tiemo",
		"last": "Monshouwer",
		"dob": "1956-09-11",
		"gender": "male",
		"email": "tiemo.monshouwer@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/16.jpg",
		"country": "Netherlands",
		"description": "This character description generator will generate a fairly random description of a belonging to Tiemo Monshouwer. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Tiemo Monshouwer."
	},
	{
		"id": 13,
		"first": "Dorian",
		"last": "Carpentier",
		"dob": "1963-10-06",
		"gender": "male",
		"email": "dorian.carpentier@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/77.jpg",
		"country": "France",
		"description": "This character description generator will generate a fairly random description of a belonging to Dorian Carpentier. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Dorian Carpentier."
	},
	{
		"id": 14,
		"first": "آرمیتا",
		"last": "موسوی",
		"dob": "1968-07-19",
		"gender": "female",
		"email": "armyt.mwswy@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/59.jpg",
		"country": "Iran",
		"description": "This character description generator will generate a fairly random description of a belonging to آرمیتا موسوی. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of آرمیتا موسوی."
	},
	{
		"id": 15,
		"first": "Lias",
		"last": "Korsvik",
		"dob": "1969-12-09",
		"gender": "male",
		"email": "lias.korsvik@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/69.jpg",
		"country": "Norway",
		"description": "This character description generator will generate a fairly random description of a belonging to Lias Korsvik. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Lias Korsvik."
	},
	{
		"id": 16,
		"first": "Florence",
		"last": "Cooper",
		"dob": "1989-08-31",
		"gender": "female",
		"email": "florence.cooper@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/19.jpg",
		"country": "Ireland",
		"description": "This character description generator will generate a fairly random description of a belonging to Florence Cooper. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Florence Cooper."
	},
	{
		"id": 17,
		"first": "Donald",
		"last": "Harrison",
		"dob": "1947-12-20",
		"gender": "male",
		"email": "donald.harrison@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/34.jpg",
		"country": "United Kingdom",
		"description": "This character description generator will generate a fairly random description of a belonging to Donald Harrison. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Donald Harrison."
	},
	{
		"id": 18,
		"first": "Michael",
		"last": "Nichols",
		"dob": "1963-06-26",
		"gender": "male",
		"email": "michael.nichols@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/76.jpg",
		"country": "United Kingdom",
		"description": "This character description generator will generate a fairly random description of a belonging to Michael Nichols. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Michael Nichols."
	},
	{
		"id": 19,
		"first": "Emile",
		"last": "Miller",
		"dob": "2009-02-03",
		"gender": "male",
		"email": "emile.miller@example.com",
		"picture": "https://randomuser.me/api/portraits/med/men/24.jpg",
		"country": "Canada",
		"description": "This character description generator will generate a fairly random description of a belonging to Emile Miller. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Emile Miller."
	},
	{
		"id": 20,
		"first": "Marjella",
		"last": "Stuijt",
		"dob": "2014-11-11",
		"gender": "female",
		"email": "marjella.stuijt@example.com",
		"picture": "https://randomuser.me/api/portraits/med/women/31.jpg",
		"country": "Netherlands",
		"description": "This character description generator will generate a fairly random description of a belonging to Marjella Stuijt. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Marjella Stuijt."
	}
]

 -->
