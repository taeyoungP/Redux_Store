# Redux Store

## Task

The task for this project is to rewrite the e-commerce web application with Redux, instead of using React's Context API. The purpose of this challnege is to practice and immerse in a new technology to solve a problem, with only that tool's documentation for help.   


## User Story

```md
AS a senior engineer working on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem
```

## Acceptance Criteria

```md
GIVEN an e-commerce platform that uses Redux to manage global state
WHEN I review the app’s store
THEN I find that the app uses a Redux store instead of the Context API
WHEN I review the way the React front end accesses the store
THEN I find that the app uses a Redux provider
WHEN I review the way the app determines changes to its global state
THEN I find that the app passes reducers to a Redux store instead of using the Context API
WHEN I review the way the app extracts state data from the store
THEN I find that the app uses Redux instead of the Context API
WHEN I review the way the app dispatches actions
THEN I find that the app uses Redux instead of the Context API
```


## Description

* [Link to deployed application](https://sleepy-tundra-34637.herokuapp.com)

* With app using Redux store instead of the Context ApI, user is able to signup and navigate to products page.
    ![A user registers on the Signup page and then navigates to the Products page, which displays images and descriptions of products.](./Assets/22-state-homework-demo-01.gif)

* User is able to sort product items by category, choose a product, view details of the product, and add/remove product from their shopping cart.
    ![The user selects a category, chooses a product, views details about it on the product page, and adds it to and removes it from their shopping cart.](./Assets/22-state-homework-demo-02.gif)

* User can checkout (with Stripe (Test Mode)) added item(s) from their shopping cart if they are logged in.
    ![The user checks out by going to their shopping cart.](./Assets/22-state-homework-demo-03.gif)

## Credits
* Redux Documentations referenced from: https://redux.js.org/tutorials/fundamentals/part-1-overview, https://react-redux.js.org/api/hooks

- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
