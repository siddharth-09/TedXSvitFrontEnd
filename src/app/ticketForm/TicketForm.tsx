import "./TicketForm.css"
import Image from 'next/image';
export function TicketForm(){
    return(
        <div className="MainTicketContainer">
            <div className="ticketContainer">
                <h1 className="TicketNowTitle">Get Your Tickets Now!</h1>
                <div className="MainForm">
                     <form className="ticketForm">
                        <input type="text" placeholder="Full Name" className="ticketInput" /> {/* [cite: 14] */}
                        <input type="email" placeholder="email" className="ticketInput" /> {/* [cite: 15] */}
                        <input type="tel" placeholder="Phone number" className="ticketInput" /> {/* [cite: 16] */}
                        {/* <select className="ticketInput"> 
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer-not-to-say">Prefer not to say</option>
                        </select> */}
                        <button type="submit" className="payButton">
                            Pay to generate ticket &nbsp;&gt;

                        </button>
                    </form>
                </div>
            </div>
    
        </div>
    )
}