import './DeletModalInv';
import React, {useState} from 'react';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';


function DeletModalInv() {
    const [isOpen, setIsOpen] = useState(false)
    const Modal = ({ handleClose, show, children }) => {
        const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    );
}
}

export default DeletModalInv;