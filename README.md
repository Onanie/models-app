# Getting Started with Models-app

first, for security reasons, the api_key for the app has been removed, since this is a public repository.
after downloading the project folder open the folder in IDE of your choice and navigate to src/constants.
plug in the api_key in this line : export const API_KEY = ""; (remove the asterisk), save the file.
open the terminal and navigate to the folder where the project resides.
type npm start on the terminal and wait.
a new tab on the browser will open and display the project, usualy on http://localhost:3000
the terminal will display anything related to the project, eg: issues, success,..

## how the app works

the app will show the home page, there, you should see the metadata for "Drink choice" model and a list of input variables.
when you click any input variable, you should see its details on the right. 
you also have the option to search for any model using model id.

### enhancements

i have added the following to make the app prettier:
* navigation bar at the top using bootstrap (tried using TailwindCss, you will see some of the setup)
* added local storage, for the user to save
* added all the batch methods
* added activity indicators when loading data

### challengs

i had challengs testing: 

queryModel method, i tested using id's obtained from the api, but all of the returned status: 400 (bad model id)

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
