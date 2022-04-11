import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if(message === '' || tech === ''){
            M.toast({ html: 'Please enter a message and tech'});
        } else {
            console.log(message, tech, attention);
            //clear fields
            setMessage('');
            setTech('');
            setAttention(false);
        }

    }

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
        <div className='modal-content'>
            <h4>Enter System Log</h4>
            <div className='row'>
                <div className='input-field'>
                    <input 
                        type="text" 
                        name='message' 
                        value={message} 
                        onChange={e => setMessage(e.target.value)}
                    />
                    <label htmlFor='message' className='active'>
                        Log Message
                    </label>
                </div>
            </div>
            <div className='row'>
                <div className='input-field'>
                    <select
                        className='browser-default'
                        name='tech' 
                        value={tech} 
                        onChange={e => setTech(e.target.value)}
                    >
                        <option value='' disabled>
                            Select Technician
                        </option>
                        <option value='Jogn Doe'>Jogn Doe</option>
                        <option value='Kamil Kowalski'>Kamil Kowalski</option>
                        <option value='J D'>J D</option>

                    </select>
                    <label htmlFor='message' className='active'>
                        Log Message
                    </label>
                </div>
            </div>
            <div className='row'>
                <div className='input-field'>
                    <p>
                        <label>
                            <input 
                                type="checkbox" 
                                className='filled-in' 
                                checked={attention} 
                                value={attention}
                                onChange={e => setAttention(!attention)}
                            />
                            <span>Needs Attention</span>
                        </label>
                    </p>
                </div>
            </div>
        </div>
        <div className='modal-footer'>
            <a href='#!' onClick={onSubmit} className='modal-close waves-effect waves-green btn'>
                Enter
            </a>
        </div>
    </div>
  )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}


export default EditLogModal;