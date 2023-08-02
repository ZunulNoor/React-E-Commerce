import React, { useState } from 'react'

export default function ImgSec({ images }) {

  const [img, setImg] = useState(images[1])

  const changeImg = (index) => {
    setImg(images[index])
  }


  return (
    <>
      <div className="container w-75">
        <img src={img} alt="" className="img-fluid mb-5" />
      </div>
      <div className='d-flex gap-3 align-items-center border border-dark bg-light rounded mb-5 p-5'>

        {
          images?.map((val, key) =>
            <div className={img == images[key] ? ('border border-dark') : (null)} onClick={()=>changeImg(key)} key={key}>
              <img className='img-fluid' src={val} alt={`img-${key}`} />
            </div>)
        }

      </div>
    </>
  )
}
