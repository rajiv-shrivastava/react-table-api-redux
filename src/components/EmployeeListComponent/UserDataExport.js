import React from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";
import {userList} from './userList.json'

class UserDataExport extends React.Component {
  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "User List Data";
    const headers = [["NAME", "AGE","DATE OF BIRTH","No. OF GUESTS","PROFESSION"]];

    const data = userList.map(elt=> [elt.userName,elt.age,elt.dob,elt.noOfGuests,elt.profession]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("user_data.pdf")
  }

  render() {
    return (
      <div className="text-center">
        <button className="btn btn-primary" onClick={() => this.exportPDF()}>Generate Report</button>
      </div>
    );
  }
}

export default UserDataExport;