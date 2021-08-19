import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddReviewForm from './AddReviewForm';
import reviewButton from '../DrinkComponents/images/thumbnail/check-in-button.svg'

function ReviewFormModal({drinkId}) {
  const [showModal, setShowModal] = useState(false);
    let closeModal = () => {
        setShowModal(false)
    }
  return (
    <>
    <img onClick={() => setShowModal(true)} className = 'review-button' src = {reviewButton}/>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddReviewForm drinkId = {drinkId} closeModal = {closeModal}/>
        </Modal>
      )}
    </>
  );
}

export default ReviewFormModal
