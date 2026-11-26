
// This is a function component that takes only 2 props that are already declared in the parent component LibraryMain.jsx. These are known and no more than those.

// export default function LibraryButton({label,buttonAction}) {
     
//   return (
//     <>
//     {/* <button onClick={HandleClick}>Sign In</button> */}
//     <button style={{backgroundColor: "gray",color: "black", margin: "10px",padding: "5px",border: "1px solid gray",borderRadius: "5px",cursor: "pointer"} } 
//     onClick={buttonAction}>{label}</button>
//     </>
    
//   )
// }

// Here we are passing generic props to the LibraryButton component. We don't know how much we will receaive, so this is so generic. The props are passed as an object and we can access them using props.label and props.buttonAction. This is a more generic way of passing props to a component. We can pass any number of props to the component and access them using props.propName.

export default function LibraryButton(props) {

     
  return (
    <>
    {/* <button onClick={HandleClick}>Sign In</button> */}
    <button className={props.className} style={{backgroundColor: "gray",color: "black", margin: "10px",padding: "5px",border: "1px solid gray",borderRadius: "5px",cursor: "pointer", ...props.style} }
    onClick={props.buttonAction}>{props.label}</button>
    
    </>
    
  )
}
