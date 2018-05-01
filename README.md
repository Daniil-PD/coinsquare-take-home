# Coinsquare Full Stack Developer
## Technical Take Home - Frontend

### Tech
- react
- redux
- redux-freeze
- redux-saga
- sass
- webpack
 
### Running/Deploying
- Setup: `npm install`
- Dev: `npm start`
- Dev build: `npm run build-dev`
- Prod build: `npm run build-prod`
- Testing: `npm run test` or watch: `npm run test-watch` (testing currently missing)

### App Structure
Simple router with just a home page and a 404 page. Store setup with Redux (additional freeze for dev environment to catch mutable changes), sagas and router history. App.js is a simple container component that includes a stylesheet and renders child route, in this case Home.js that wraps CurrencyPairTrading.js component in a div with some CSS.

CurrencyPairTrading is a main component that consists of AccountBalance, TradeInput, TradeQuote and an ActionButton components. It has internal state for passing current quote request data between TradeInput and TradeQuote as well resetting the state of the form by using React keys. On mount it also pre-fetches the ticker last_price for quote calculation by dispatching a saga action.

AccountBalance is a simple component that just shows the USD and BTC balances from Redux store.

TradeInput has internal state for amount input field, which functions both as a controlled component as well as validation for maximum amount available for use for trade. When amount is entered the component also triggers the parent callback to update the current trade amount.

TradeQuote has a componentWillReceiveProps lifecycle method to listen for trade amount prop change and if the amount is not falsy and we have a last_price available in a ticker store state, it will calculate the quote

ActionButton has a disabled state for when there is no current active quote amount entered and takes it's title as a prop. When it's clicked it invokes a callback passed to it by a parent.

When the trade button is clicked the saga action is dispatched with the requested amount which updates the store state with new USD and BTC amounts and then resets the CurrencyPairTrading state which in return resets the form, after which we fetch the ticker most recent price again.

Sagas/Reducers:
BFX_FETCH_TICKER - calls a BFX API through cors-anywhere proxy (which runs as part of npm start script) if not in production and then stores it Redux state
REQUEST_UPDATE_ACCOUNT - requests a trade, grabbing the last_price of the ticket one more time before the trade for the most accurate transaction updating the account state with USD and BTC amounts.

CSS is per-component, reflecting the components in class and filename namespacing and favours flat structure, sort of BEMesque but not enough variation to make it shine through. Where possible things are generic (buttons, typography), and hierarchical (layout > page > component) with full reset (makes it more consistent for components to dictate their look without unneccessary defaults).

### Why C9
- consistent environment
- pre-installed dev environment (NodeJS, git)
- auto sync across different computers
- easily shareable link for dev
- curiosity and having worked with it before wanted to see how feasible it is this day and age
- seemed to fit this exercise well without adding too much of additional challenge

### Ideas for future
- Testing of course. Having started with the project from a make things work piecemeal perspective I put emphasis on functional aspect, but I can definitely see the benefit of doing TDD for something like this. I took the path of quick iteration partly due to trying to fight with C9 and API CORS issues and prioritizing things working. If I had to redo the project differently I would've spent more time setting up the environment, build process and architecture taking time to concentrate on that.
- Implementing CSS modules for better namespacing; moving CSS into per-component level, current structure allows for easy refactor
- Currently very static CSS so perhaps with better understanding of how this component could be used update it to be more fluid/responsive
- Tighter implementation of quoting/purchasing to account for volatility of ticker, fractions, generally making sure its as secure and efficient as it can get. Even in it's current state of requirements, perhaps strike a better balance of making it work as is and future-proofing it for other functionality it might need to be wired to
- Refactoring components to be a bit more re-usable such as themed buttons, input fields, labels and forms
- Consolidating the design so there is no 3 types of grey, the spacing is consistent, etc
- Better exception handling, currently app works on a very happy scenario path, need to add more error/timeout/unavailable API catching