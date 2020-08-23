import React, { useState, useEffect } from "react";
import Nav from "./nav";
import API from "../util/api";

const DataArea = () => {
  const [personInfo, setpersonalInfo] = useState({users: ""});
  useEffect(() => {
    API.getUsers().then((dataReturn) => {
      setpersonalInfo({
        users: dataReturn.data.results,
        filteredUsers: dataReturn.data.results,
      });
    });
  }, []);
  const inputChange = (e) => {
    const filter = e.target.value;
    const tempUserState = personInfo.users;
    const filteredList = personInfo.users.filter((item) => {
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    setpersonalInfo({ filteredUsers: filteredList, users: tempUserState });
  };
  const headings = [
    {
      name: "Image",
      width: "10%",
    },
    { name: "Name", width: "10%" },
    { name: "Phone", width: "20%"},
    {name: "Email", width: "20%"},
    {name: "DOB", width: "10%"}
  ];
  return (
    <div>
      <Nav inputChange={inputChange} />
      <table>
        <thead>
          <tr>
              {headings.map(({name, width}) => {
                  return (
                      <th key={name}>
                          {name}
                      </th>
                  )
              })}
          </tr>
        </thead>
        <tbody>
            {personInfo.users[0] !== undefined && personInfo.users[0].name !== undefined ? (
                personInfo.filteredUsers.map(({login, name, picture, phone, email, dob}) => {
                    return (
                        <tr key = {login.uuid}>
                            <td data-th = "image">
                                <img src={picture.medium} />
                            </td>
                            <td>
                                {name.first} {name.last}
                            </td>
                            <td>
                                {phone}
                            </td>
                            <td>
                                {email}
                            </td>
                            <td>
                                {dob.date}
                            </td>
                        </tr>
                    )
                })
            ): (<></>)}
        </tbody>
      </table>
    </div>
  );
};
export default DataArea;
