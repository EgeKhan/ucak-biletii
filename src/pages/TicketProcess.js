
import './TicketProcess.css';


const TicketProcess = (datas) => {

    


    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <button className='titleCloseBtn'>X</button>
                <div className="title">
                    <h2>{datas.kalkis}</h2>
                </div>
                <div className="body">
                    <form>
                        <label></label>
                        <input type='text'></input>

                        <label></label>
                        <input type='text'></input>
                    </form>
                </div>
                <div className="footer">
                    <button>TIKLA</button>
                </div>
            </div>
        </div>
    );
};

export default TicketProcess;