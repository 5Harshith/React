const parent =React.createElement("div",{id:"parent"},
  React.createElement("div",{id:"child"},
    // for sibling we use array []
    [React.createElement("h1",{id:"h1"},"i am H1 tag"),
      React.createElement("h1",{id:"h1"},"i am H2 tag")
    ]
  )
)
console.log(parent)
const root= ReactDOM.createRoot(document.querySelector(".root"))
console.log(root)

root.render(parent)
