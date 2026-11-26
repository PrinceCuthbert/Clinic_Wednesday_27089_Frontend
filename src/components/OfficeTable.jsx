import LibraryButton from "./LibraryButton";

export default function OfficeTable({ offices, onDelete, onEdit, buttonStyle }) {
  return (
    <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white", color: "black" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Office Name</th>
          <th>Office Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {offices.length === 0 ? (
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>No offices found</td>
          </tr>
        ) : (
          offices.map((office) => (
            <tr key={office.id}>
              <td>{office.id}</td>
              <td>{office.name}</td>
              <td>{office.officeNumber}</td>
              <td>
                <LibraryButton
                  label="Edit"
                  buttonLabel="Edit"
                  style={buttonStyle}
                  buttonAction={() => onEdit(office)}
                />
                <LibraryButton
                  label="Delete"
                  buttonLabel="Delete"
                  style={buttonStyle}
                  buttonAction={() => onDelete(office.officeNumber)}
                />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}