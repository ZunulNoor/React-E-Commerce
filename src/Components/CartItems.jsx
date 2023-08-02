import React from 'react'

export default function CartItems({ data }) {
    return (
        <div className='card mb-3 shadow-sm'>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={data.thumbnail}
                        style={{
                            width: '100%',
                            height: '20vh',
                            objectFit: 'contain'
                        }}
                        className='img-fluid rounded-start bg-dark'
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="card-title">
                                <h5>
                                    {data.title.length > 20 ? data.title.slice(0, 20) + '...' : data.title}
                                </h5>
                                <span className='badge bg-secondary '>
                                    {data.price}$
                                </span>
                            <p className='card-text'>
                                <small className='text-body-secondary'>{data.description.length > 20 ? data.description.slice(0, 60) + '...' : data.description}</small>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
