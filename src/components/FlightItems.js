
import './FlightItems.css';
import pegasus from '../images/pegasus.jpg'
import { Routes, Route, useNavigate } from 'react-router-dom';
import TicketProcess from '../pages/TicketProcess';

const FlightItems = (props) => {

    const navigate = useNavigate();
    const navigateTicketProcess = () =>{
        navigate('/ticketProcess');
    }


        

    return(
        <div className='bilet-item'>
            <div className='bilet-item__date'>{props.tarih.toDateString()}</div>
            <div className='bilet-item__description'>
                <h2>{props.kalkis}</h2>
                <h2>{props.varis}</h2>
                <img src={pegasus} alt='pegasus'></img>
                <div className='bilet-item__gonder'>
                    <h2>{props.fiyat}₺</h2>
                </div>
                <div className='bilet-item__sec'>
                    <button onClick={navigateTicketProcess}>Seç</button>
                    <Routes>
                        <Route path='ticketProcess' element={<TicketProcess kalkis = {props.kalkis}/>}></Route>
                    </Routes>
                </div>
            </div>

        </div>
    );
}


export default FlightItems;