/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Meta from "../../components/Meta";
import BlogCard from "../../components/BlogCard";
import ProductCard from "../../components/ProductCard";
import SpecialProduct from "../../components/SpecialProduct";
import ReactStars from "react-stars";

import { useDispatch, useSelector } from "react-redux";
// import { getAllBLogs } from "../../features/customer/blogs/blogSlice";
import { getBlogs } from "features/blog/blogSlice";
import { getAllProducts } from "../../features/customer/products/productSlice";
import { getProducts } from "features/product/productSlice";
import { getCollections } from "features/collections/collectionsSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/customer/products/productSlice";
import { getUserProductWishList } from "../../features/customer/user/authSlice";
import { getCategories } from "apis";

const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blogs);
  const productState = useSelector((state) => state.product.products);
  const collectionState = useSelector((state) => state.collections.collections);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllBlogs();
    getProducts();
    getCategories();
    getCollections();
  }, []);

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  const getAllBlogs = () => {
    dispatch(getBlogs());
  };

  console.log(blogState);
  // const getAllProducts = () => {
  //   dispatch(getProducts(1));
  // };

  console.log(collectionState);
  console.log(productState);

  useEffect(() => {
    dispatch(getProducts(1));
  }, [dispatch]);

  let location = useLocation();

  const [already, setalready] = useState([]);
  useEffect(() => {
    getProductWish();
  }, []);

  const getProductWish = () => {
    dispatch(getUserProductWishList());
  };
  const wishlistState = useSelector(
    (state) => state?.auth?.wishlist?.findUser?.wishlist
  );
  useEffect(() => {
    setalready(wishlistState?.map((item) => item._id));
  }, [wishlistState]);

  const addToWish = (id) => {
    if (already?.includes(id)) {
      dispatch(removeFromWishlist(id));
      setTimeout(() => {
        dispatch(getUserProductWishList());
      }, 100);
    } else {
      dispatch(addToWishlist(id));
      setTimeout(() => {
        dispatch(getUserProductWishList());
      }, 100);
    }
  };

  return (
    <>
      <Meta title={"Blogs"} />
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                // className="main-banner position-relative p-3"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="images\main-banner-2.jpg"
                      class="img-fluid rounded-3"
                      alt="main banner"
                    />
                    <div className="main-banner-content position-absolute">
                      <h4>SUPERCHANGED FOR PROS</h4>
                      <h5>Guitars LakeWood</h5>
                      <p></p>
                      <Link to={"/product"} className="button">
                        BUY NOW
                      </Link>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="images\main-banner-2.jpg"
                      class="img-fluid rounded-3"
                      alt="main banner"
                    />
                    <div className="main-banner-content position-absolute">
                      <h4>SUPERCHANGED FOR PROS</h4>
                      <h5>Guitars LakeWood</h5>
                      <p></p>
                      <Link to={"/product"} className="button">
                        BUY NOW
                      </Link>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="images\main-banner-2.jpg"
                      class="img-fluid rounded-3"
                      alt="main banner"
                    />
                    <div className="main-banner-content position-absolute">
                      <h4>SUPERCHANGED FOR PROS</h4>
                      <h5>Guitars LakeWood</h5>
                      <p></p>
                      <Link to={"/product"} className="button">
                        BUY NOW
                      </Link>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              {/* <div className="main-banner position-relative p-3">
                <img
                  src="images\main-banner-2.jpg"
                  class="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHANGED FOR PROS</h4>
                  <h5>Guitars LakeWood</h5>
                  <p></p>
                  <Link to={"/product"} className="button">
                    BUY NOW
                  </Link>
                </div>
              </div> */}
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items">
                <div className="small-banner position-relative">
                  <img
                    src="images\guitarbanner7.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h5>Coupon: SPECIAL</h5> <h5>Discount: 15%</h5>
                    <h4>Time Expired: 12/20/2023</h4>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images\guitarbanner2.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h5>Coupon: HOT007</h5> <h5>Discount: 20%</h5>
                    <h4>Time Expired: 12/15/2023</h4>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images\guitarbanner5.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h5>Coupon: FANTASIC</h5>
                    <h5>Discount: 10 %</h5>
                    <h4>Time Expired: 12/10/2023</h4>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images\guitarbanner4.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h5>Coupon: WINTER</h5>
                    <h5>Discount: 21 %</h5>
                    <h4>Time Expired: 12/25/2023</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all order over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Superise Offers</h6>
                    <p className="mb-0">Save up to 25%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12">
              <h3 className="section-heading">Sản phẩm nổi bật</h3>
            </div>
            {productState &&
              productState.slice(0, 4).map((item, index) => {
                return (
                  <div key={index} className={`${"col-3"}`}>
                    <Link className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 bg-transparent"
                          onClick={(e) => {
                            addToWish(item?.productId);
                          }}
                        >
                          <img src="images/wish.svg" alt="wishlist" />
                        </button>
                      </div>
                      <Link
                        to={"/product/" + item?.productId}
                        className="product-card position-relative"
                      >
                        <div className="product-image">
                          {item?.image?.length > 0 && (
                            <>
                              <img
                                width={400}
                                height={400}
                                src={item?.images?.[0]?.url}
                                className="img-fluid mx-auto"
                                alt="product-image"
                              />
                              {item?.image?.length > 1 && (
                                <img
                                  width={400}
                                  height={400}
                                  src={item?.images?.[1]?.url}
                                  className="img-fluid mx-auto"
                                  alt="product image"
                                />
                              )}
                              {item?.image?.length === 1 && (
                                <img
                                  width={400}
                                  height={400}
                                  src={item?.images?.[0]?.url}
                                  className="img-fluid mx-auto"
                                  alt="product image"
                                />
                              )}
                            </>
                          )}
                        </div>
                      </Link>

                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">{item?.productName}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={item?.voteStar?.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="price">$ {item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <Link
                            to={"/product/" + item?.productId}
                            className="border-0 bg-transparent"
                          >
                            <img src="images/view.svg" alt="view" />
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Bộ sản phẩm</h3>
            </div>
          </div>
          <div className="row ">
            {collectionState &&
              collectionState?.slice(0, 2)?.map((item, index) => {
                return (
                  <SpecialProduct
                    key={index}
                    collectionId={item?.collectionId}
                    description={item?.description}
                    collectionName={item?.collectionName}
                    quantity={10}
                    // sold={3}
                    // price={200}
                    // image="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/307773363_500749115391640_3906085054103576647_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFWrlNaYkQUo1Pk0ZnwCdwz10djKjD-dFrXR2MqMP50Wk-rHiPTsE-YhYCE3kOkIkJ6TnOi8yVQwmLYY_Z604U3&_nc_ohc=pDdhRtfhiBIAX_bZsaY&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBEv8jcaxN7_uL0fCztGywUuGG9ZLBwVWkZScLAsGK9Cg&oe=65FEF101"
                    // totalrating={3}
                  />
                );
              })}
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <div className="row ">
              {productState &&
                productState
                  .filter((item) => item.tags === "popular") // Filter out only items with the tag "featured"
                  .slice(0, 4) // Take the first 4 items
                  .map((item, index) => {
                    return (
                      <div key={index} className={`${"col-3"}`}>
                        <Link className="product-card position-relative">
                          <div className="wishlist-icon position-absolute">
                            <button
                              className="border-0 bg-transparent"
                              onClick={(e) => {
                                addToWish(item?._id);
                              }}
                            >
                              <img src="images/wish.svg" alt="wishlist" />
                            </button>
                          </div>
                          <Link
                            to={"/product/" + item?._id}
                            className="product-card position-relative"
                          >
                            <div className="product-image">
                              {item?.images?.length > 0 && (
                                <>
                                  <img
                                    width={400}
                                    height={400}
                                    src={item?.images?.[0]?.url}
                                    className="img-fluid mx-auto"
                                    alt="product-image"
                                  />
                                  {item?.images?.length > 1 && (
                                    <img
                                      width={400}
                                      height={400}
                                      src={item?.images?.[1]?.url}
                                      className="img-fluid mx-auto"
                                      alt="product image"
                                    />
                                  )}
                                  {item?.images?.length === 1 && (
                                    <img
                                      width={400}
                                      height={400}
                                      src={item?.images?.[0]?.url}
                                      className="img-fluid mx-auto"
                                      alt="product image"
                                    />
                                  )}
                                </>
                              )}
                            </div>
                          </Link>

                          <div className="product-details">
                            <h6 className="brand">{item?.brand}</h6>
                            <h5 className="product-title">{item?.title}</h5>
                            <ReactStars
                              count={5}
                              size={24}
                              value={item?.totalrating?.toString()}
                              edit={false}
                              activeColor="#ffd700"
                            />
                            <p className="price">$ {item?.price}</p>
                          </div>
                          <div className="action-bar position-absolute">
                            <div className="d-flex flex-column gap-15">
                              <Link
                                to={"/product/" + item?._id}
                                className="border-0 bg-transparent"
                              >
                                <img src="images/view.svg" alt="view" />
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                    // }
                  })}
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-wrapper py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper bg-white p-3 card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/taylor-1.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/lakewood-1.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Tin tức mới nhất</h3>
            </div>
          </div>
          <div className="row">
            {blogState &&
              // eslint-disable-next-line array-callback-return
              blogState.map((item, index) => {
                if (index < 4) {
                  return (
                    <div className="col-3 " key={index}>
                      <BlogCard
                        postId={item?.postId}
                        title={item?.title}
                        content={item?.content}
                        image="https://img.freepik.com/premium-vector/global-network-connection-world-map-point-line-composition-concept-global-business-internet-technology-social-network-vector-illustration_230610-458.jpg"
                      />
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
