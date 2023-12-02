import axios from 'axios';
import { useState } from 'react';

const Admin = () => {
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleNumberChange = (event) => {
        setWhatsappNumber(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/sendLink", {
                whatsappNumber,
                message
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="whatsapp">WhatsApp Number:</label>
                    <input
                        type="text"
                        id="whatsapp"
                        value={whatsappNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={handleMessageChange}
                    ></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Admin;
