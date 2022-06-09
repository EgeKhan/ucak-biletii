import './FlightForm.css';

const FlightForm = ({open}) =>{
    if(!open) return null;
    return(
        <div className='overlay'>
            <div className='formContainer'>
                <label>Koltuk Numarası Seç</label>
                <div className='selecter'>
                    <select>
                        <option value={'A1'}>A1</option>
                        <option value={'A2'}>A2</option>
                        <option value={'B1'}>B1</option>
                        <option value={'B2'}>B2</option>
                        <option value={'C1'}>C1</option>
                        <option value={'C2'}>C2</option>
                        <option value={'D1'}>D1</option>
                        <option value={'D2'}>D2</option>
                        <option value={'E1'}>E1</option>
                        <option value={'E2'}>E2</option>
                        <option value={'F1'}>F1</option>
                        <option value={'F2'}>F2</option>
                        <option value={'G1'}>G1</option>
                        <option value={'G2'}>G2</option>
                        <option value={'H1'}>H1</option>
                        <option value={'H2'}>H2</option>
                        <option value={'I1'}>I1</option>
                        <option value={'I2'}>I2</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FlightForm;

