import React, {useContext} from 'react';
import AlertContext from '../../context/alert/AlertContext';
import {BiMessageError} from 'react-icons/bi'

function Alert(props) {
  const {alert} = useContext(AlertContext);

  return alert?.type === 'error' && (
    <p className="flex items-start mb-4 space-x-2">
      <BiMessageError className='text-2xl'/>
      <p className="flex-1 text-base textarea-bordered font-semibold leading-7 text-white">
        {alert.msg}
      </p>
    </p>
  );
}

export default Alert;