import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ data }) {
  return (
    <ul className={css.list}>
      {data.map((el) => (
        <li className={css.contact} key={el.id}>
          <Contact contact={el} />
        </li>
      ))}
    </ul>
  );
}
