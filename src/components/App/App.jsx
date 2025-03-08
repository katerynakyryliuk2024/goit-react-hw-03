//import { useState } from "react";//

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState } from "react";
import İnitialData from "../data.json";

export default function App() {
  const [data, setData] = useState(İnitialData);
  const addData = (newData) => {
    setData((prevData) => {
      return [...prevData, newData];
    });
  };

  const deleteData = (dataİd) => {
    setData((prevData) => {
      return prevData.filter((data) => data.id !== dataİd);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addData} />
      <SearchBox />
      <ContactList data={data} onDelete={deleteData} />
    </div>
  );
}
