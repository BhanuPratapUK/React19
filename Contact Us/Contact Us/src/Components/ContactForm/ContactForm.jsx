import styles from './ContactForm.module.css';
import Button from '../Button/Button.jsx'
import {MdMessage} from "react-icons/md";
import {MdCall} from "react-icons/md";
import { IoIosMailUnread} from "react-icons/io";

const ContactForm = ()=>{
    return(
        <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_button}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />}/>
            <Button text="VIA CALL" icon={<MdCall fontSize="24px" />}/>
            </div>
            <Button isOutline={true}
            text="VIA EMAIL FORM" 
            icon={ <IoIosMailUnread fontSize="24px" />}/>
            </div>
            <div className={styles.contactimage}></div>
        </section>
        )
}

export default ContactForm 