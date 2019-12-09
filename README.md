# Magic, The Gathering Coding Challenge // Highspot Front End Engineer

### How to use app locally:

1: run `git clone https://github.com/brandonlublin/magic_the_gathering.git && cd magic_the_gathering`  
2: install dependencies `npm install` or `yarn`  
3: run `npm start` or `yarn start`  

Can be seen live at [https://magic-the-gathering-hs.netlify.com/](https://magic-the-gathering-hs.netlify.com/)

# Technologies Used:

#### React by way of `npx create-react-app`  
wanted to work with the create-react-app boilerplate to hit the ground running. Chose React since it has stateful components and modularizes the front-end. Helps that it's my favorite front-end framework as well.

#### Node
most familiar with Node from the back-end.

#### ESLint
I used the standard ESLint rules to create a consistent format across each module/component

#### Materialize
Due to lack of time, I wanted to use a CSS framework so I could get a relatively polished front-end, while being able to fully implement the functionality of the project

# ToDo's
#### integrate the search bar and sort drop down into the header
with all of the breakpoints, my header wasn't functioning properly, so to save time, I moved them both to below the header.

#### Fix most of the css
- sometimes the cards aren't centered on mobile
- the div surrounding the filter drop down wouldn't adjust to my `<Col s={6} m={6} l={6}>` that I had added for some reason. it's still fits at full screen on most devices, but this could be reworked I'm sure
- card image is overflowing from card at one breakpoint, kept tinkering with the media queries, but seemed to be going in circles
- font color is different between the dropdown and search menu. tried about 100 different things to change the font, but wasn't changing

#### Create a landing page that explains the functionality of the app
thought it might be little more user friendly to have a generic page that explains some details of the API and what data is being retrieved but figured due to time constraints, this could be a good icebox item. Will add this after submitting

#### Dig into the materialize package
There are a couple errors in the console from issues that I ran into with some of the Materialize packages, such as `'revealicon'` and `'closeicon'` being required but me not having direct access to alter them in the package. will dig into this after submitting to better understand

#### Issues with data returned from API // removing duplicates
I was expecting that adding `contains='imageUrl'` to my API Query would only return results that contained an image, but this didn't end up being the case. to account for this, I generated a stock image for the magic card to put a band-aid on the issue to avoid delays in submitting  
There were a lot of duplicates returned from the API, so another icebox option is to remove duplicates on the back-end before rendering them on the front-end

#### Testing
In my coding bootcamp, I wasn't fully trained on unit testing and testing best practices, so I'd like to add additional tests outside of the two API tests and one component test. I'm currently doing an online training for testing to expand my knowledge base

#### Better comment code
typically try to illustrate each and every piece of functionality with comments, but wanted to submit as soon as possible.

# Issues
The API was very difficult to work with. The results were returned quite slow, and sometimes wouldn't return at all as I'd receive a `503` error. I tried to make things as efficient as possible to mitigate some of this lag.

##### I wasn't sure as to whether or not I was supposed to filter the results determined in the dropdown on the front-end or the back-end, but figured doing so on the back-end would ensure the data is returned more accurately and in a way that alleviates the burden of the front-end

[Project board](https://github.com/brandonlublin/magic_the_gathering/projects/1)

