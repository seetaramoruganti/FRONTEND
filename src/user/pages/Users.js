import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Seetaram Oruganti",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUH7GoFLDHkssZaYeIEOWPSUsFR9pYpRNKA&s",
      places: 3,
    },
    {
      id: "u2",
      name: "Jathin Reddy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBfojP5PEsseNMpDMm4p_okT0S8NScQXC-3A&s",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
