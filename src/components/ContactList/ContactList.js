import { useDispatch, useSelector } from "react-redux"
import { findContacts } from "Redux/slice"
import { removeContacts } from "Redux/operations"
import { ButtonContacts, InputContacts } from "./ContactList.styled"

export const ContactList = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts.items)
    const filter = useSelector(state => state.filter )
    const contactsSearch = (evt) => {
        const name = evt.target.value
        dispatch(findContacts(name))
    }
    const filterContacts = () => {
        if (filter === "") {
            return contacts
        } else {
            return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        }
    }
    return <>
        <h1>Contacts</h1>
        <label>
            Find contacts by name
            <br/>
            <InputContacts onChange={contactsSearch} type="text" name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required/>
        </label>
        <ul>
            {filterContacts().map(contact => {
                return (<li key={contact.id}>{contact.name}, {contact.number } <ButtonContacts type="button" onClick={() => dispatch(removeContacts(contact.id))}>Delete</ButtonContacts> </li>)
            })}
        </ul>
        </>
}