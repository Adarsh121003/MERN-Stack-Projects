import React from 'react'
import './Slide.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Slider() {
    return (
        <div>
            {/* For large screen display */}
            <section id="largeScreenSlider"
                class="carousel featured container-fluid p-0 slide large-screen-slider d-none d-md-none d-lg-block jus"
                data-ride="carousel">
                <h4 className='text-center mt-3 fs-1 '>Featured Product</h4>
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className='row'>
                                <div className='col-lg-12 col-md-6 col-sm-12 d-flex'>
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='row'>
                                <div className='col-lg-12 col-md-6 col-sm-3 d-flex'>
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='row'>
                                <div className='col-lg-12 col-md-6 col-sm-12 d-flex'>
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            {/* For medium screen display */}
            <section id="medium-screen-slider"
                class="carousel featured slide container-fluid p-0 medium-screen-slider d-none d-md-block d-lg-none"
                data-ride="carousel">
                <h4 className='text-center mt-3 fs-1 '>Featured Product</h4>

                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row ">
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />  <div class="row flex-nowrap border">
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />  <div class="row flex-nowrap border">
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div><div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />  <div class="row flex-nowrap border">
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div><div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />  <div class="row flex-nowrap border">
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div><div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />  <div class="row flex-nowrap border">
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row flex-nowrap border">
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-3">
                                    <div class="card mx-3" >
                                        <img
                                            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                            alt="Dress"
                                            class="card-img-top"
                                        />
                                        <h3 class="card-title text-center">
                                            Women Clothes<span><h5>₹2500</h5></span>
                                        </h3>
                                        <p class="card-body">
                                            This dress is made up of high quality material and
                                            comfortable fabric
                                        </p>
                                        <button class="btn btn-primary mb-2">
                                            Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section >
            {/* For Small Screen */}
            <section id="small-screen-slider"
                class="carousel featured slide small-screen-slider p-0 d-block d-md-none d-lg-none"
                data-ride="carousel">
                <h4 className='text-center mt-3 fs-1 '>Featured Product</h4>
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="container one-item-slide">
                                <div class="row flex-nowrap border">
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div class="card mx-3" >
                                            <img
                                                src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                                alt="Dress"
                                                class="card-img-top"
                                            />
                                            <h3 class="card-title text-center">
                                                Women Clothes<span><h5>₹2500</h5></span>
                                            </h3>
                                            <p class="card-body">
                                                This dress is made up of high quality material and
                                                comfortable fabric
                                            </p>
                                            <button class="btn btn-primary mb-2">
                                                Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="container one-item-slide">
                                <div class="row flex-nowrap border">
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div class="card mx-3" >
                                            <img
                                                src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                                alt="Dress"
                                                class="card-img-top"
                                            />
                                            <h3 class="card-title text-center">
                                                Women Clothes<span><h5>₹2500</h5></span>
                                            </h3>
                                            <p class="card-body">
                                                This dress is made up of high quality material and
                                                comfortable fabric
                                            </p>
                                            <button class="btn btn-primary mb-2">
                                                Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="container one-item-slide">
                                <div class="row flex-nowrap border">
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div class="card mx-3" >
                                            <img
                                                src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                                alt="Dress"
                                                class="card-img-top"
                                            />
                                            <h3 class="card-title text-center">
                                                Women Clothes<span><h5>₹2500</h5></span>
                                            </h3>
                                            <p class="card-body">
                                                This dress is made up of high quality material and
                                                comfortable fabric
                                            </p>
                                            <button class="btn btn-primary mb-2">
                                                Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="container one-item-slide">
                                <div class="row flex-nowrap border">
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div class="card mx-3" >
                                            <img
                                                src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                                alt="Dress"
                                                class="card-img-top"
                                            />
                                            <h3 class="card-title text-center">
                                                Women Clothes<span><h5>₹2500</h5></span>
                                            </h3>
                                            <p class="card-body">
                                                This dress is made up of high quality material and
                                                comfortable fabric
                                            </p>
                                            <button class="btn btn-primary mb-2">
                                                Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div class="carousel-item">
                            <div class="container one-item-slide">
                                <div class="row flex-nowrap border">
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div class="card mx-3" >
                                            <img
                                                src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                                alt="Dress"
                                                class="card-img-top"
                                            />
                                            <h3 class="card-title text-center">
                                                Women Clothes<span><h5>₹2500</h5></span>
                                            </h3>
                                            <p class="card-body">
                                                This dress is made up of high quality material and
                                                comfortable fabric
                                            </p>
                                            <button class="btn btn-primary mb-2">
                                                Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div class="carousel-item">
                            <div class="container one-item-slide">
                                <div class="row flex-nowrap border">
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div class="card mx-3" >
                                            <img
                                                src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                                alt="Dress"
                                                class="card-img-top"
                                            />
                                            <h3 class="card-title text-center">
                                                Women Clothes<span><h5>₹2500</h5></span>
                                            </h3>
                                            <p class="card-body">
                                                This dress is made up of high quality material and
                                                comfortable fabric
                                            </p>
                                            <button class="btn btn-primary mb-2">
                                                Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div class="carousel-item">
                            <div class="container one-item-slide">
                                <div class="row flex-nowrap border">
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div class="card mx-3" >
                                            <img
                                                src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                                alt="Dress"
                                                class="card-img-top"
                                            />
                                            <h3 class="card-title text-center">
                                                Women Clothes<span><h5>₹2500</h5></span>
                                            </h3>
                                            <p class="card-body">
                                                This dress is made up of high quality material and
                                                comfortable fabric
                                            </p>
                                            <button class="btn btn-primary mb-2">
                                                Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div class="carousel-item">
                            <div class="container one-item-slide">
                                <div class="row flex-nowrap border">
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div class="card mx-3" >
                                            <img
                                                src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                                alt="Dress"
                                                class="card-img-top"
                                            />
                                            <h3 class="card-title text-center">
                                                Women Clothes<span><h5>₹2500</h5></span>
                                            </h3>
                                            <p class="card-body">
                                                This dress is made up of high quality material and
                                                comfortable fabric
                                            </p>
                                            <button class="btn btn-primary mb-2">
                                                Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div class="carousel-item">
                            <div class="container one-item-slide">
                                <div class="row flex-nowrap border">
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div class="card mx-3" >
                                            <img
                                                src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                                alt="Dress"
                                                class="card-img-top"
                                            />
                                            <h3 class="card-title text-center">
                                                Women Clothes<span><h5>₹2500</h5></span>
                                            </h3>
                                            <p class="card-body">
                                                This dress is made up of high quality material and
                                                comfortable fabric
                                            </p>
                                            <button class="btn btn-primary mb-2">
                                                Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div class="carousel-item">
                            <div class="container one-item-slide">
                                <div class="row flex-nowrap border">
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div class="card mx-3" >
                                            <img
                                                src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                                alt="Dress"
                                                class="card-img-top"
                                            />
                                            <h3 class="card-title text-center">
                                                Women Clothes<span><h5>₹2500</h5></span>
                                            </h3>
                                            <p class="card-body">
                                                This dress is made up of high quality material and
                                                comfortable fabric
                                            </p>
                                            <button class="btn btn-primary mb-2">
                                                Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div class="carousel-item">
                            <div class="container one-item-slide">
                                <div class="row flex-nowrap border">
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div class="card mx-3" >
                                            <img
                                                src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                                alt="Dress"
                                                class="card-img-top"
                                            />
                                            <h3 class="card-title text-center">
                                                Women Clothes<span><h5>₹2500</h5></span>
                                            </h3>
                                            <p class="card-body">
                                                This dress is made up of high quality material and
                                                comfortable fabric
                                            </p>
                                            <button class="btn btn-primary mb-2">
                                                Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div class="carousel-item">
                            <div class="container one-item-slide">
                                <div class="row flex-nowrap border">
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div class="card mx-3" >
                                            <img
                                                src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                                alt="Dress"
                                                class="card-img-top"
                                            />
                                            <h3 class="card-title text-center">
                                                Women Clothes<span><h5>₹2500</h5></span>
                                            </h3>
                                            <p class="card-body">
                                                This dress is made up of high quality material and
                                                comfortable fabric
                                            </p>
                                            <button class="btn btn-primary mb-2">
                                                Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div class="carousel-item">
                            <div class="container one-item-slide">
                                <div class="row flex-nowrap border">
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <div class="card mx-3" >
                                            <img
                                                src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                                alt="Dress"
                                                class="card-img-top"
                                            />
                                            <h3 class="card-title text-center">
                                                Women Clothes<span><h5>₹2500</h5></span>
                                            </h3>
                                            <p class="card-body">
                                                This dress is made up of high quality material and
                                                comfortable fabric
                                            </p>
                                            <button class="btn btn-primary mb-2">
                                                Add to cart<FontAwesomeIcon className="cart fs-6 icon-style" icon={faCartShopping} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>


    )
}

export default Slider