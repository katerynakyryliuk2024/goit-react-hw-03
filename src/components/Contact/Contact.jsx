//import { number } from "yup";
import css from "./Contact.module.css";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.name}>{name}</li>
        <li className={css.tel}>{number}</li>
      </ul>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
