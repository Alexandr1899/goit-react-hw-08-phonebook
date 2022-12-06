import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "Redux/operations";
import { ContactList } from "./ContactList/ContactList";
import { Form } from "./Form/Form";



    export const Contacts = () => {
    const dispatch = useDispatch()
    useEffect(() => {dispatch(fetchContacts())}, [dispatch])
    return (
        <div style={{marginLeft: `20px`}}>
        <h1>Phonebook</h1>
        <Form/>
        <ContactList/>
        </div>
    );
    };