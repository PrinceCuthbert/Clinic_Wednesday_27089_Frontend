import  { useState,useEffect } from 'react'
import LibraryButton from "../components/LibraryButton";
import OfficeTable from "../components/OfficeTable";
import LibraryHeader from '../components/LibraryHeader';
import axios from 'axios';


export default function Office() {

    const [officeName, setOfficeName] = useState("");
    const [officeNmber, setOfficeNumber] = useState("");
    const[typedOfficeNumber,setTypedOfficeNumber]=useState("");

     const buttonStyleObj = {backgroundColor: "gray",color: "black", margin: "10px",padding: "5px",border: "1px solid gray",borderRadius: "5px",cursor: "pointer"};

    
        const [offices, setOffices] = useState([]);
        const [searchTerm, setSearchTerm] = useState("");
        const [editingOfficeNumber, setEditingOfficeNumber] = useState(null);

  useEffect(() => {
    fetchAllOffices();
  }, []);

  async function fetchAllOffices() {
    try {
      const response = await axios.get('http://localhost:8080/api/offices');

      // Hano I used Array.isArray(response.data) to prevent my app from crashing when the backend sends back a message instead of a list.
      if (Array.isArray(response.data)) {
        setOffices(response.data);
      } else {
        setOffices([]); // Hano in case the backend returning "No office found"
      }
    } catch (error) {
      alert("Error fetching offices: " + error);
    }
  }

     async function saveOrUpdateOffice() {
       try {
      if (editingOfficeNumber !== null) {
      
        const response = await axios.put(`http://localhost:8080/api/offices/update/${editingOfficeNumber}`, {
          name: officeName,
          officeNumber: officeNmber
        });
        if (response.status === 200) {
          alert(response.data);
          cancelEdit();
          fetchAllOffices();
        }
      } else {
        // CREATE
        const response = await axios.post('http://localhost:8080/api/offices/save', {
          name: officeName,
          officeNumber: officeNmber
        });
        if (response.status === 201) {
          alert("Office created successfully");
          setOfficeName("");
          setOfficeNumber("");
          fetchAllOffices(); // Refresh table
        } else {
          alert("Office not created successfully.");
        }
      }
    } catch (error) {
      alert("This is the error: " + (error.response ? error.response.data : error));
    }
 
    }

   // Hano I do populate the form fields with the selected office's data for editing
  function handleEditClick(office) {
    setEditingOfficeNumber(office.officeNumber);
    setOfficeName(office.name);
    setOfficeNumber(office.officeNumber);
  }

  function cancelEdit() {
    setEditingOfficeNumber(null);
    setOfficeName("");
    setOfficeNumber("");
  }


   
  async function deleteOffice(numberToDelete = typedOfficeNumber) {
    if (!numberToDelete) {
      alert("Please enter or select an office number");
      return;
    }
    try {
      const response = await axios.delete(`http://localhost:8080/api/offices/delete/${numberToDelete}`);
      if (response.status === 200) {
        alert("Office deleted successfully");
        setTypedOfficeNumber("");
        fetchAllOffices(); // Refresh table
      } else {
        alert("Office not deleted successfully.");
      }
    } catch (error) {
      alert("This is the error: " + (error.response ? error.response.data : error));
    }
  }

  // Search by Office Number OR Office Name
  async function searchOffice() {
    const trimmed = searchTerm.trim();
    if (!trimmed) {
      fetchAllOffices();
      return;
    }

    try {
      //Regex pattern yo gu checking if the search term is a number (for Office Number) 
      if (/^\d+$/.test(trimmed)) {
        const response = await axios.get(`http://localhost:8080/api/offices/${trimmed}`);
        setOffices([response.data]); 
      } else {
        // Otherwise search by Office Name
        const response = await axios.get(`http://localhost:8080/api/offices/by-name/${trimmed}`);
        setOffices(response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setOffices([]); // Shows "No offices found" in table
      } else {
        alert("Search error: " + error);
      }
    }
  }

  function resetSearch() {
    setSearchTerm("");
    fetchAllOffices();
  }

  function ClearInputs() {
  // setOfficeName("");
  // setOfficeNumber("");
  // setTypedOfficeNumber("");
  setSearchTerm("");
  // setEditingOfficeNumber(null); // Exits update mode if active
}

 

    const inputStyle = {
    color: "black",
    backgroundColor: "white",
    margin: "5px",
    padding: "5px",
    border: "1px solid gray",
    borderRadius: "5px"
  };

  const divstyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    margin: "10px",
    padding: "10px",
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "#f2f2f2"
  };

  const sectionStyle = {
    margin: "10px",
    padding: "10px",
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "#f2f2f2"
  };

  return (
    <>
    <div>
      <LibraryHeader/>
    </div>
      <div style={divstyle}>
        <div>
          <h1>{editingOfficeNumber !== null ? "UPDATE OFFICE" : "SAVE OFFICE"}</h1>
          <div>
            <div>
              <label>Office name:</label>
              <input
                type="text"
                onChange={(e) => setOfficeName(e.target.value)}
                value={officeName}
                style={inputStyle}
              />
            </div>

            <div>
              <label>Office Number:</label>
              <input
                type="text"
                onChange={(e) => setOfficeNumber(e.target.value)}
                value={officeNmber}
                style={inputStyle}
              />
            </div>

            <LibraryButton
              label={editingOfficeNumber !== null ? "Update Office" : "Save Office"}
              buttonLabel={editingOfficeNumber !== null ? "Update Office" : "Save Office"}
              style={buttonStyleObj}
              buttonAction={saveOrUpdateOffice}
            />

            {editingOfficeNumber !== null && (
              <LibraryButton
                label="Cancel"
                buttonLabel="Cancel"
                style={buttonStyleObj}
                buttonAction={cancelEdit}
              />
            )}
          </div>
        </div>

        <div>
          <h1>DELETE</h1>
          <div>
            <div style={{}}>
              <label>Office Number:</label>
              <input
                type="text"
                onChange={(e) => setTypedOfficeNumber(e.target.value)}
                value={typedOfficeNumber}
                style={inputStyle}
              />
            </div>
            <LibraryButton
              label="Delete Office"
              buttonLabel="Delete Office"
              style={buttonStyleObj}
              buttonAction={() => deleteOffice(typedOfficeNumber)}
            />
          </div>
        </div>
      </div>

      {/* SEARCH & TABLE SECTION */}
      <div style={sectionStyle}>
        <h1>OFFICES LIST</h1>

        <div style={{ marginBottom: "10px" }}>
          <label>Search (Name or Number):</label>
          <input
            type="text"
            placeholder="e.g. 101 or General Office"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={inputStyle}
          />
          <LibraryButton
            label="Search"
            buttonLabel="Search"
            style={buttonStyleObj}
            buttonAction={searchOffice}
          />
          <LibraryButton
            label="Show All"
            buttonLabel="Show All"
            style={buttonStyleObj}
            buttonAction={resetSearch}
          />

          <LibraryButton
            label="Clear"
            buttonLabel="Clear"
            style={buttonStyleObj}
            buttonAction={ClearInputs}
          />
        </div>

        <OfficeTable
          offices={offices}
          onDelete={(num) => deleteOffice(num)}
          onEdit={handleEditClick}
          buttonStyle={buttonStyleObj}
        />
      </div>
    </>
  );
}