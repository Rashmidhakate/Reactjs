import React from 'react'

export default function Alert(props) {
  const capitilize = (word) => {
    return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
  }
  return (
    props.showAlert && <div className='message-container'>
        <div className={`alert alert-${props.showAlert.type}`} role="alert">
            <strong>{capitilize(props.showAlert.type)}</strong>: {props.showAlert.msg}
        </div>
    </div>
  )
}
