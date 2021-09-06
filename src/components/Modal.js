import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from './Button.js';
import './Modal.css';

function Modal({ visible, title, children, onSubmit, onCancel }) {
  return <div className={clsx("overlay", visible && "visible-overlay")} onClick={onCancel}>
    <div className={clsx("modal", visible && "visible-modal")} onClick={e => e.stopPropagation()}>
      <div className="modal-header">
        <p className="modal-title">{title}</p>
      </div>
      <div className="modal-body">{children}</div>
      <div className="modal-footer">
        <Button onClick={onCancel} type="secondary">Close</Button>
        <Button onClick={onSubmit} type="primary">Submit</Button>
      </div>
    </div>
  </div>;
}

Modal.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.any,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
}

export default Modal;