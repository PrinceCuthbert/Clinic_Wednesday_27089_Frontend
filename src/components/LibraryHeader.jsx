import {Link} from "react-router-dom";


function LibraryHeader() {
  //   const libraryHeader="AUCA Library Management System";

  //   const books=[
  //     {
  //     code:"SE001",
  //     name:"Software Engineering",
  //     price:100
  //     }
  //     ,
  //     {
  //     code:"SE002",
  //     name:"Master Accounting",
  //     price:80
  //     }
  // ]


  // const employees=[
  //   {
  //     code:"EMP001",
  //     salary:1000,
  //     name:"John Doe"
  //   },
  //   {
  //     code:"EMP002",
  //     salary:1200,
  //     name:"Jane Smith"
  //   },
  // {
  //     code:"EMP003",
  //     salary:1500,
  //     name:"Jade Spence"
  //   }];

    // const totalSalary=employees.reduce((acc,emp)=>acc+emp.salary,0);

    // console.log("Total Salary:",totalSalary);

  
  // const totalPrice = books.reduce((acc, book) => acc + book.price, 0);

  
  // const numberOfBooks = books.length;

  // const bookOrbooksRender= numberOfBooks === 1 ? "book" : "books";

  return (
    <>
    {/* <div><h1>{libraryHeader}</h1></div>
    <div><h2>This is the library management for the students books.</h2></div>
    <div>
        <ul style={{listStyleType:"circle",listStylePosition: "inside" }}>
          {books.map((book)=>(
          <li key={book.code}>
            This is the {book.name} and its price is {book.price}
          </li>))}
          </ul>
        <div>
           <p>The total price for these {numberOfBooks} {bookOrbooksRender} is:{totalPrice}.</p>
        </div>
    </div> */}

       <nav style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px",backgroundColor:"#f0f0f0"}}>
          
          <Link to="/login">Login</Link>
          <Link to="/main">Main</Link>
          <Link to="/office">Office</Link>
       </nav>
    </>
  )
}

export default LibraryHeader;