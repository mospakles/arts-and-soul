import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

import React from 'react'
import './ImageGallery.css'
const ImageGallery = ({galleryImages}) => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    //CLose Modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    //Previous Image
    const prevSlide = () => {
        slideNumber === 0 
        ? setSlideNumber(galleryImages.length -1) 
        : setSlideNumber( slideNumber - 1 )
    }

    //Next Image
    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length 
        ? setSlideNumber(0) 
        : setSlideNumber(slideNumber + 1)
    }

    return (
    <div>
        <h1 id='image-text'>Photo Gallery</h1>
        
        {openModal &&
        <div className="sliderWrap">
            <FontAwesomeIcon icon ={faCircleXmark} className='btnClose' onClick={handleCloseModal} />
            <FontAwesomeIcon icon ={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
            <FontAwesomeIcon icon ={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
            <div className="fullScreenImage">
                <img src={galleryImages[slideNumber].src} alt='' />

            </div>
        </div>
        }

        {/* <br />
        Current slide number: {slideNumber}
        <br />
        Total Slides: {galleryImages.length}
        <br /> <br /> */}

       <div className="galleryWrap">
        {
            galleryImages && galleryImages.map((slide, index) => {
                return(
                    <div 
                    className="single" 
                    key={index}
                    onClick={ () => handleOpenModal(index) }
                    >
                        <img src={slide.src} alt='' />
                    </div>
                )
            })
        }
       </div>
    </div>
  )
}

export default ImageGallery