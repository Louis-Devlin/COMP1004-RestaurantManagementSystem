import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EditBooking from './EditBooking';
function ViewBookings() {
  useEffect(() => {
    GetAllBookingData();
  }, []);
  const [bookings, setBookings] = useState([]);
  const [date, setDate] = useState("");
  const [modal, setModal] = useState(false);
  const[id,setID] = useState(0);
  const [name, setName] = useState("");
  const [phoneNum,setPhoneNum] = useState("");


  const toggle = (e,booking) => {
    e.preventDefault();
    setID(booking.id)
    setName(booking.name)
    setPhoneNum(booking.phoneNum)


    setModal(!modal);
  };
  return (
    <div>
      <h1>View Bookings</h1>
      <p>This Shows all bookings made sorted by date </p>
      <TextField
        id="date"
        type="date"
        defaultValue={new Date()}
        value={date}
        onChange={(e) => GetBookingByDate(e.target.value)}
      />

      <Button onClick={(e) => press(e)}>Reset</Button>
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date/Time</th>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Num of People</th>
            <th>Covid pos</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((bookings) => (
            <tr>
              <td>{bookings.id}</td>
              <td>
                {new Date(bookings.date)
                  .toString()
                  .replace("GMT+0000 (Greenwich Mean Time)", "")
                  .replace("GMT+0100 (British Summer Time)", "")}
              </td>

              <td>{bookings.name}</td>
              <td>{bookings.phoneNum}</td>
              <td>{bookings.partySize}</td>
              <td>{bookings.covidPositive.toString()}</td>
              <td>
                <Button onClick={(e) => del(e, bookings.id)} color="primary">
                  Delete
                </Button>
                <Button onClick={(e) => toggle(e,bookings)} color="primary">
                  Update
                </Button>
                <Modal isOpen={modal} toggle={toggle}>
                  <ModalHeader>Edit Booking</ModalHeader>
                  <ModalBody><EditBooking id= {id} name = {name} phoneNum ={phoneNum} /></ModalBody>
                  <ModalFooter>
                    <Button>Submit</Button>
                    <Button onClick={toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
                <Button
                  onClick={(e) => markCovidPos(e, bookings.id)}
                  colour="danger"
                >
                  COVID POS
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  function GetAllBookingData() {
    const response = fetch("https://localhost:5001/api/booking/")
      .then((responce) => responce.json())
      .then((data) => setBookings(data));
  }
  function GetBookingByDate(Udate) {
    console.log(Udate);
    setDate(Udate);
    const responce = fetch("https://localhost:5001/api/booking/" + Udate)
      .then((responce) => responce.json())
      .then((data) => setBookings(data));
  }
  function press(e) {
    e.preventDefault();
    console.log("Press");
    const response = fetch("https://localhost:5001/api/booking/")
      .then((responce) => responce.json())
      .then((data) => setBookings(data));
  }
  async function del(e, book) {
    e.preventDefault();
    alert("DELETE" + book);

    fetch("https://localhost:5001/api/booking/" + book, {
      method: "DELETE",
    });
    press(e);
  }
  function markCovidPos(e, id) {
    e.preventDefault();
    fetch("https://localhost:5001/api/booking/" + id, {
      method: "PUT",
    });
    GetAllBookingData();
  }
  function edit(e, id) {
    e.preventDefault();
    alert("EDIT" + id.toString());
  }
}

export default ViewBookings;
