# React Casino Online Challenge


## Welcome! 👋

Thanks for checking out this frontend Challenge building with React + Material-UI + Webpack + Babel.


## The challenge

Implement online casino according to the checklist below using react and material-ui:

- One page app. No routing
- Page consists of three parts header, content and footer
- Header consists of company logo/name on the left and balance+avatar on the right
- There is nothing special about logo
- Balance displays real balance in format $99.99 and is updated after each game. It is persistent i.e. keeps data in local storage
- Login button or avatar, depending on state, offers user to login (enter his name) or log out. User is persistent too
- You can start playing as a guest but should be able to log in at any time
- Content part has table in it with game results. Columns are id, slot 1-3, time. Id and time are sortable both ways
- Footer is sticky (when table is long) and has copyright
- In the content part there is a button which starts a game aka opens popup
- Popup has 3 slots in content part and 3 button underneath
- When user press first button - random numbers 1-9 are displayed in slots
- Each spin costs $1 from balance
- Thee different numbers 123 does nothing
- Each pair 112 122 adds $0.5 to balance
- Each three in a row adds $5 to balance
- 777 adds $10 to balance
- The second button is meant for debug. it fakes 777 spin
- After each spin results are added to the table.
- Third button closes popup


## NPM Commands

```
### npm run build
```
To Build the app ready to deploy on you serverless service prefered.

```
### npm run dev-hmr
```
To run the app in hot mode reload view the changes in the browser when the code changes.

```
### npm run lint
```
To apply lint on the code.

```
### npm run serve:dev
```
To build the app and serve the dist/ dir in development mode.

