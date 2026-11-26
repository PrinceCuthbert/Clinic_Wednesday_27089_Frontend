// import { useState } from 'react';
// import DataTable from './DataTable';
// import LibraryButton from '../components/LibraryButton'
// import LibraryLogin from './LibraryLogin';
import LibraryHeader from '../components/LibraryHeader';
// import DataTable from '../components/DataTable';

function LibraryMain() {

  // const label="Increment";

  //  const [count,setCount]=useState(0);

  // function HandleClick() {
  //       // alert("Boyyah!");
  //       // incrementNumber();
  //        setCount(count+1);

  //       //  cont result=Integer.parseInt(count)+1;
  //       //   console.log("This is the incremented number:"+setCount(count+1));

  //       //   alert("This is the incremented number:"+setCount(count+1));
  //   }

  // let count=0;
    // function incrementNumber(){
    //     //  count= count + 1;
    //     // console.log("This is the incremented number:"+count);

       
    // }

 
  return (
    <>
    <LibraryHeader/>
    <div>
      {/* <p>The incremented value is: {count}</p> */}
    </div>
    <div>
      <h1>Welcome Page</h1>
      <p>This is the welcome page for the Clinic Management System.</p>
    </div>

    {/* <LibraryLogin/> */}
    {/* <DataTable/> */}
    </>
  )
}

export default LibraryMain