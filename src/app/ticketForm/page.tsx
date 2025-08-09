import Navbar from "@/components/Navbar"
import { TicketForm } from "./TicketForm"
export default function Home(){
    return(
        <>
        
            <div className="mainFormContainer">
                <Navbar />
            <div>
                <TicketForm />
                <img src="/formMandala.svg" alt="" className="formMandala"/>
            </div>
            </div>
            
    </>
    )
}