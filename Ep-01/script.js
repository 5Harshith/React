
// code using javascript
// const root = document.querySelector('#root')
// // console.log(root)

// const h1 =document.createElement('h1')
// // console.log(h1)
// root.appendChild(h1)
// h1.innerText ="harshith"


//firts code in React
     const heading = React.createElement(
    'h1',
    {class:"heading top", id:"title"},
    "React Installed!!@")

// if we console heading it is a object not a HTML tag
// it is the React element 
  console.log(heading)  
// {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}

   const root = ReactDOM.createRoot(document.getElementById('root'))
  //  root.render(heading)

/*
if you want to nested div structure in React

<div id ="parents">
    <div id="child">
       <HI> HAI I am h1 tag </h1>
       if i want add a sibling h2 next to h1 then how to do it 
       [] use array to add sibling child to child di
    </div>
    <div id="child2">
       <HI> HAI I am h1 tag </h1>
       if i want add a sibling h2 next to h1 then how to do it 
       [] use array to add sibling child to child di
    </div>
</div>

*/  

const parent =React.createElement(
              'div',
              {id:"parents"},
              [
                React.createElement(
                  'div',
                  {id:"child"},[
                    //array to add sibling tag []
                    React.createElement('h1',{},"hai i am H1 tag"),
                    React.createElement('h2',{},"hai i am H2 tag"),
                  ] 
                ),
                React.createElement(
                  'div',
                  {id:"child2"},[
                    //array to add sibling tag []
                    React.createElement('h1',{},"hai i am H1 tag"),
                    React.createElement('h2',{},"hai i am H2 tag"),
                  ] 
                )
              ]
          )
       

root.render(parent)
