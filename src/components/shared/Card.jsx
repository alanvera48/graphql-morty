import React from 'react';
import {useModal} from '../../helpers/useModal.js';
import Modal from './Modal.js';
import './Card.css'


export default function Cards({episodeName,image,date, key}) {
	
	const[isOpenModal, openModal, closeModal] = useModal(false);

	return (	
		<div className='cards' key={key} onClick={openModal}>
			<div className="line"></div>
			<img src={image} alt=""/>
			<div className="card-description">
				<span><b>Episode Name:</b> {episodeName}</span>
				<span><b>Date: </b>{date} </span>
			</div>
			<Modal isOpen={isOpenModal} closeModal={closeModal}>
				<div className="modal-card">
					<img src={image} alt={episodeName}/>
					<div className="">
						<h2>{episodeName}</h2>
						<div className="ul">
							<span><b>Date: </b>{date}</span>
						</div>
					</div>	
				</div>
			</Modal>
		</div>
	)
}