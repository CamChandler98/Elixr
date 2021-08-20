
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteReview from './DeleteReview';

function DeleteReviewModal({reviewId}) {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () =>{
              setShowModal(true)
    }
      let closeModal = () => {
          setShowModal(false)
      }
    return (
      <>
      <button onClick = {handleClick}>Edit</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <DeleteReview closeModal = {closeModal} reviewId ={reviewId}/>
          </Modal>
        )}
      </>
    );
  }

  export default DeleteReviewModal
