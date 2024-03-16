/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Meta from "../../components/Meta";
import BlogCard from "../../components/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "features/blog/blogSlice";



const Blog = () => {
  const blogState = useSelector((state) => state?.blog?.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = () => {
    dispatch(getBlogs());
  };

  console.log(blogState)

  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="">
            <div className="">
            </div>
            <div className="">
              <div className="row">
                {Array.isArray(blogState) &&
                  blogState.map((item, index) => (
                    <div className="col-6 mb-3" key={index}>
                      <BlogCard
                        postId={item?.postId}
                        title={item?.title}
                        content={item?.content}
                        // image={item?.images[0]?.url}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
