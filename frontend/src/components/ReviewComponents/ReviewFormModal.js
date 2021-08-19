import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddReviewForm from './AddReviewForm';
import reviewButton from '../DrinkComponents/images/thumbnail/check-in-button.svg'

function ReviewFormModal({drinkId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <img onClick={() => setShowModal(true)} className = 'review-button' src = {reviewButton}/>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddReviewForm drinkId = {drinkId}/>
        </Modal>
      )}
    </>
  );
}

export default ReviewFormModal
