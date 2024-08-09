
import React  from "react";
import ReactDOM from "react-dom/client";

// react.createElement =>ReactElement - js object =>HTMLElement(Render)

const heading = React.createElement("h1",{id:"heading"},"hello Harshith🚀 React");
console.log(heading)
// const root = ReactDOM.createRoot(document.querySelector("#root"));
const root = ReactDOM.createRoot(document.getElementById('root'));

//JSX -HTML-like syntax
//jsx (transpiled before it reaches the js Enginee) - its doneby parcel but it will not do that it will mangage only and it assign to - babel and the babel convert to code 
//JSX =>babel transpiles it to  React.createElement => ReactElement - js object =>HTMLElement(Render)
//React element(object)

// for the above element i will add another element
const element = <span>Adding element inside another element  </span>

const jsxHeader =(
  
  <h1 id="heading">
    {element }
      Namaste Harshith🚀 JSX 
  </h1>
  
)

const paragraph=(<p> Lorennhdkj nkjadshk kbkasdbkasbdkbkb</p>)
const imag=( <img
  src="https://i.pinimg.com/originals/3d/a7/a1/3da7a11be8bc9b0d08e2098fdd3a5f29.jpg"
  alt="Katherine Johnson " 
  style={{width:'500px',height:'500px'}}
  className="image-holder"
/>)
 // if u using multiple line then use () so that babel under stant the jsx code from where it started and its end 


// root.render(heading); 
// root.render(imag); 

// React functinal Component

const ImageComponent =() =>( <img
  src="https://i.pinimg.com/originals/3d/a7/a1/3da7a11be8bc9b0d08e2098fdd3a5f29.jpg"
  alt="Katherine Johnson " 
  style={{width:'500px',height:'500px'}}
  className="image-holder"
/>)
let i=0;

//how we insert a one component to another one just add component name </>
//component composition is using two component one another

const MainHeading =()=>{
  return(
    <div>
      {/* jsHeading is the react element we can add using {} */}
      <h1>{jsxHeader}</h1>
      <h1>Functiom Component®️🤷‍♂️🤷‍♂️🤷‍♂️</h1>
      <div className="Image_component">

        {/* all the 3 same below */}
        {ImageComponent()}
       <ImageComponent/>
       <ImageComponent></ImageComponent>
      </div>
      <div>
        {/* we can use js code inside {} it is the power of jsx */}
          <h1> {100 *2} </h1>
          <h1>Functiom Component 2®️🤷‍♂️🤷‍♂️🤷‍♂️</h1>
      </div>
    </div>
    
  )
}
// <
root.render(<MainHeading/>)


//last part



