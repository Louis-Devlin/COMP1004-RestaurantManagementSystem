import React, {useState} from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import "./BookTable.css"
import { Button } from "reactstrap";

function SetDetails() {
  const [tables,setTables]  = useState(0)
  const [open,SetOpen] = useState("")
  const [close,setClose] = useState("")
  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(tables.toString() + "," + open + "," + close)
  }

  return (
    <div>
      <h1>Set Details</h1>
      <AvForm className="col-75" onSubmit = {handleSubmit}>
        <AvField
          name="Number of tables"
          label="Number of tables"
          type="text"
          validate={{
            required: {
              value: true,
              errorMessage: "Please enter the number of tables",
            },
          }}
          value = {tables}
          onChange = {(e) => setTables( parseInt(e.target.value))}
        />
        <div className="inline">
        <p id="Open">Openning Time</p>
        <p id="Close">Closing Time</p>
        </div>
        <AvField className="DateTimeLeft" name="Open Time" type="Time" value = {open} onChange = {(e) => SetOpen(e.target.value)}/>
        <AvField className="DateTimeRight" name="Close Time" type="Time" value ={close} onChange = {(e) => setClose(e.target.value)}/>
        <Button color="primary">Submit</Button>
      </AvForm>
    </div>
  );
}

export default SetDetails;
