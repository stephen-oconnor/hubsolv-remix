# ReMix

Explore millions of radio shows, DJ mixes and podcasts made by passionate creators around the world. Search the Mixcloud catalogue for mixes, shows and podcasts from your favourite DJs and artists.

[ReMix](https://stupefied-brown-534a53.netlify.app/)

## About the Project

Built using industry standard tools and techniques, the app leverages the Mixcloud API to return results (radio shows, podcasts, mixes etc) based on the user's search criteria. The app uses modern JavaScript, TypeScript, React and Sass for the UI alongside babel and webpack to manage the code and build process, with Jest and Enzyme used for testing.

Modern JavaScript frameworks/libraries like React and Vue allow the developer to create modular reusable components which can be composed once and used many times throughout the application or indeed even across multiple applications. They create a virtual DOM and will make comparisons between the virtual DOM and the actual DOM before an update, only updating the parts of the DOM that need to be updated. Therefore, they are a great choice for creating modern web applications and the reason I decided to use React for this project. I also utilised babel to allow me to use all the new JavaScript features alongside React without having to worry about cross-browser or device support.

As JavaScript is a dynamically typed language it can sometimes be difficult to debug and track down issues therefore I decided to use TypeScript in the development of the app. TypeScript has many benefits however, the main one is it offers the ability to add static types to your JavaScript code which allowed me to catch and track down any coding errors earlier in the development process.

Keeping track of all the styling that goes into a modern web application can be a tricky task. I used Sass to create some global styling variables to be used throughout the application and CSS Modules to modularise each component's styling. CSS Modules allowed me to break each component's CSS into its own file/module and scope that CSS only to that component, making the maintenance and management of the app styling much easier.

Webpack was used to manage the app's files. It allowed me to bundle different parts of the app's JavaScript and styling into separate files and only be loaded when required.

Jest was used alongside Enzyme to test the app's components and functionality, ensuring each component has the correct UI and structure and that each renders successfully.

---

## Additional Functionality

The app could benefit from some additional functionality to make it feel a little more complete and polished. Many features could be added however, here are a few I think would be useful for the user:

- a list or lists of 'suggested' mixes/shows displayed on initial load. This would make the 'home page' more visually appealing and interesting
- add a filters panel allowing the user the filter the search results based on a specified criteria, e.g. podcasts, date or user
- allow the user the sort the search results, e.g. by date or most popular
- add pagination to the search results
- allow the user the play their selected show/podcast in the app instead of having to navigate away to Mixcloud
- allow the user to follow their favourite artists and keep track of all their posts and updates
- add more robust error handling to the search input and results

The code could also benefit from additional functionality to make the app easier to maintain and scale. Some features that could be added:

- a basic grid system could be created to allow pages and components to be composed more easily
- over time the app will need more than one page, with that the app would need a router, React Router would be my choice
- currently the app's state is very simple and is controlled from one 'container' component, inevitably that will become more complex and at that point a state management library/pattern will be needed, Redux would be my choice
