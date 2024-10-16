
import React, { useState } from 'react'
import ChevronLeft from "../Assets/ChevronLeft.png"
import ChevronRight from "../Assets/ChevronRight.png"
import "../Styles/Carousel.scss"


function Carousel({pictures}) { 

    const [index, setIndex] = useState(0)  
    const totalPictures = pictures.length-1 

    if (index < 0) setIndex(totalPictures) 
    if (index > totalPictures) setIndex(0)  
    
    return(
        <div className='carousel'>

            {}
            <div className='div-image'>  
                <img src={pictures[index]} className="classImage" key={"car-"+index} alt={"photo "+index} />
            </div>

            {}
            {totalPictures > 0 && ( 
                <div> {}
                    <button onClick={() => setIndex(index - 1)}>{index}
                        <img src={ChevronLeft} className='classChevronLeft' alt={'flèche gauche pour changer de photo '+index} />
                    </button>
                    <button onClick={() => setIndex(index + 1)}>{index}
                        <img src={ChevronRight} className='classChevronRight' alt={'flèche droite pour changer de photo '+index} />
                    </button>
                </div>
            )}
            {totalPictures > 0 && (
                
                <div className='div-compteur'> 
                    <p className='compteurImages'>
                        {index+1}/{totalPictures+1}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Carousel