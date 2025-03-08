//import { useState } from "react";//

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState } from "react";
import İnitialData from "../data.json";

export default function App() {
  const [data, setData] = useState(İnitialData);
  const [filter, setFilter] = useState("");

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

  const filteredData = data.filter((el) =>
    el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addData} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList data={filteredData} onDelete={deleteData} />
    </div>
  );
}
