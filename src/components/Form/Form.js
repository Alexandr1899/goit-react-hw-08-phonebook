import { addContacts } from "Redux/operations";
import { useDispatch } from "react-redux";
import { ButtonForm, InputForm } from "./Form.styled";

export const Form = () => {
  const dispatch = useDispatch()
  const submitInfo = (evt) => {
    evt.preventDefault()
    const name = evt.target.elements.name.value
    const number = evt.target.elements.number.value
    dispatch(addContacts({  name, number }))
    evt.target.reset()
  }
  return <form onSubmit={submitInfo}>
    <label>
      Name
    <InputForm
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
    </label>
    <br/>
    <label>
      Number
      <InputForm
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
/>
    </label>
    <br/>
    <ButtonForm type="submit">add contact</ButtonForm>
  </form>
  
}


