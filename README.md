Fit Meal App

Setup environment

Github project: https://github.com/caotrimai/fit-meal.git

0. Start project
```
yarn //to build yarn

yarn start //start project
```

1. Setup ReactJS app.
https://create-react-app.dev/docs/getting-started/

2. Add SCSS support
```
npm i --save-dev node-sass
```

3. Add react router
```
npm i --save react-router-dom
```

4. Add UI lib
```
npm install antd
```

5. Structure folder
```
src
|__ assets
|  |__ images
|  |__ fonts
|  |__ styles (global styles) 
|
|
|__ common
|  |__ APIs
|  |__ constant
|  |__ config
|  	  |__ configureStore.js
|  	  |__ i18n.js
|  
|
|__ components (shared components)
|  |__ rootReducer.js
|  |
|  |__ Header
|  |__ Footer
|  |__ NotFound
|  |__ Style
|
|__ features
|  |__ common
|  |  	|__ SliceReducers
|  |  	|__ thunks
|  |		
|  |__ Login
|    	|__ Components
|    	|__ reducer
|    	|__ styles
|    	|__ pages
|    		|__ index.js
|
|__ public
|  |__ locales
|  	  |__ translation
|
|__ App.js
|__ index.js
|__ RootRouter.js
```

5. Structure routing
- Use lazy load components.
- Load by features.
```
// App.js
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/photos" component={Photo} />
        <Route path="/user" component={User} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
```

5. react-i18next
- create i18n.js to start configuring react-i18next.
- import i18n.js into root component.
- in sub-components, use react-i18next:
  + const { t } = useTranslation();
  + {t('The words')}
