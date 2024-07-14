import React from 'react'
import "./shop.css"
import Navbar from '../../Components/Navbar'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
// import { ReactComponent as MyIcon } from './assets/icons/my-icon.svg';



const Shopsection = () => {
  return (
    <div className='shop_page'>

      <Navbar />


      <div className='container3'>
        <div className='header'>
          <div className='box'>
            <h2>Products</h2>
          </div>
        </div>

      </div>

      <div className='shop-section'>

        <div className='container'>

          <div className='products_heading '>

            <div className='row'>

              <div className='col-lg-9'>
                <div className='products_count'>
                  <p>Showing 1-8 of 14 results</p>

                </div>

              </div>

              <div className='col-lg-3 col-md-6 col-sm-6 '>
                <div className='products_popularity'>
                  <select className='selection'>
                    <option value={1}>Sort by Popularity </option>
                    <option value={2}>Sort by Average Rating </option>
                    <option value={3}>Sort by Latest </option>
                    <option value={4}>Sort by Price: Low to High </option>
                    <option value={5}>Sort by Price: High to Low </option>
                    <option value={6}>Sort by New</option>
                  </select>
                </div>
              </div>

            </div>

          </div>

          <div className='row'>

            <div className='col-lg-3 col-md-6 col-sm-6 '>
              <div className='single-product'>
                <div className='product-img'>
                  <img src='shopimages/shop-image1.jpg' className='img1' alt='wood-pencil' />
                  <ul className='d-flex align-items-center'>

                    <li>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </li>

                    <li>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-regular fa-heart"></i>
                      </button>
                    </li>

                    <li className=''>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-solid fa-share"></i>
                      </button>
                    </li>

                  </ul>
                </div>

                <div className='product-content m-5'>

                  <Link to="/wood-pencil"><h3>Wood Pencil</h3></Link>
                  <span>
                    $19.99
                  </span>
                  <ul className='d-flex mt-2'>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                  </ul>

                  <Link to="/shop"><button className='add-to-cart'>ADD TO CART</button></Link>

                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 '>
              <div className='single-product'>
                <div className='product-img'>
                  <img src='shopimages/shop-image2.jpg' className='img2' alt='t-shirt' />
                  <ul className='d-flex'>

                    <li>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </li>

                    <li>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-regular fa-heart"></i>
                      </button>
                    </li>

                    <li className=''>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-solid fa-share"></i>
                      </button>
                    </li>

                  </ul>
                </div>

                <div className='product-content m-5'>

                  <Link to="/wood-pencil"><h3>T-Shirt</h3></Link>
                  <span>
                    $22.99
                  </span>
                  <ul className='d-flex mt-2'>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                  </ul>

                  <Link to="/shop"><button className='add-to-cart'>ADD TO CART</button></Link>

                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 '>
              <div className='single-product'>
                <div className='product-img'>
                  <img src='shopimages/shop-image3.jpg' className='img3' alt='shoe' />
                  <ul className='d-flex align-items-center'>

                    <li>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </li>

                    <li>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-regular fa-heart"></i>
                      </button>
                    </li>

                    <li className=''>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-solid fa-share"></i>
                      </button>
                    </li>

                  </ul>
                </div>

                <div className='product-content m-5'>

                  <Link to="/wood-pencil"><h3>Casual Shoe</h3></Link>
                  <span>
                    $31.99
                  </span>
                  <ul className='d-flex mt-2'>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                  </ul>

                  <Link to="/shop"><button className='add-to-cart'>ADD TO CART</button></Link>

                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-product'>
                <div className='product-img'>
                  <img src='shopimages/shop-image4.jpg' className='img4' alt='bag' />
                  <ul className='d-flex align-items-center'>

                    <li>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </li>

                    <li>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-regular fa-heart"></i>
                      </button>
                    </li>

                    <li className=''>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-solid fa-share"></i>
                      </button>
                    </li>

                  </ul>
                </div>

                <div className='product-content m-5'>

                  <Link to="/wood-pencil"><h3>Coffee Bag</h3></Link>
                  <span>
                    $4.99
                  </span>
                  <ul className='d-flex mt-2'>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                  </ul>

                  <Link to="/shop"><button className='add-to-cart'>ADD TO CART</button></Link>

                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-product'>
                <div className='product-img'>
                  <img src='shopimages/shop-image5.jpg' className='img5' alt='chair' />
                  <ul className='d-flex align-items-center'>

                    <li>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </li>

                    <li>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-regular fa-heart"></i>
                      </button>
                    </li>

                    <li className=''>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-solid fa-share"></i>
                      </button>
                    </li>

                  </ul>
                </div>

                <div className='product-content m-5'>

                  <Link to="/wood-pencil"><h3>Single Chair</h3></Link>
                  <span>
                    $149.99
                  </span>
                  <ul className='d-flex mt-2'>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                  </ul>

                  <Link to="/shop"><button className='add-to-cart'>ADD TO CART</button></Link>

                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-product'>
                <div className='product-img'>
                  <img src='shopimages/shop-image6.jpg' className='img6' alt='shopping-card' />
                  <ul className='d-flex align-items-center'>

                    <li>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </li>

                    <li>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-regular fa-heart"></i>
                      </button>
                    </li>

                    <li className=''>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-solid fa-share"></i>
                      </button>
                    </li>

                  </ul>
                </div>

                <div className='product-content m-5'>

                  <Link to="/wood-pencil"><h3>Business Card</h3></Link>
                  <span>
                    $1.99
                  </span>
                  <ul className='d-flex mt-2'>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                  </ul>

                  <Link to="/shop"><button className='add-to-cart'>ADD TO CART</button></Link>

                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-product'>
                <div className='product-img'>
                  <img src='shopimages/shop-image7.jpg' className='img7' alt='book' />
                  <ul className='d-flex align-items-center'>

                    <li>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </li>

                    <li>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-regular fa-heart"></i>
                      </button>
                    </li>

                    <li className=''>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-solid fa-share"></i>
                      </button>
                    </li>

                  </ul>
                </div>

                <div className='product-content m-5'>

                  <Link to="/wood-pencil"><h3>Book Cover</h3></Link>
                  <span>
                    $3.99
                  </span>
                  <ul className='d-flex mt-2'>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                  </ul>

                  <Link to="/shop"><button className='add-to-cart'>ADD TO CART</button></Link>

                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-product'>
                <div className='product-img'>
                  <img src='shopimages/shop-image8.jpg' className='img8' alt='clock' />
                  <ul className='d-flex align-items-center'>

                    <li>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </li>

                    <li>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-regular fa-heart"></i>
                      </button>
                    </li>

                    <li className=''>
                      <button type='button' className='no-border-btn m-2'>
                        <i class="fa-solid fa-share"></i>
                      </button>
                    </li>

                  </ul>
                </div>

                <div className='product-content m-5'>

                  <Link to="/wood-pencil"><h3>Wall Watch</h3></Link>
                  <span>
                    $9.99
                  </span>
                  <ul className='d-flex mt-2'>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                    <li><i className="fa-regular fa-star"></i></li>
                  </ul>

                  <Link to="/shop"><button className='add-to-cart'>ADD TO CART</button></Link>

                </div>
              </div>
            </div>

            <nav aria-label="Page navigation example">

              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a className="page-link">Prev</a>
                </li>
                <li className="page-item"><a className="page-link active" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Shopsection
