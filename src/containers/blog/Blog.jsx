import React from "react";
import "./blog.css";
import blog1 from "../../assets/blog01.png";
import blog2 from "../../assets/blog02.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";
import blog5 from "../../assets/blog05.png";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-header">
        <h1>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="blog-flex">
        <div className="blog-mainblog1">
          <div className="blogimage1">
            <img src={blog1} alt="blogimage" />
          </div>
          <div className="blogmain-content1">
            <div>
              <p className="blog1-para1">Sep 26, 2021</p>
              <p className="blog1-para2">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </p>
              <p className="blog1-para3">Read Full Article</p>
            </div>
          </div>
        </div>
        <div className="blog-grid">
          <div className="blog-mainblog">
            <div className="blogimage">
              <img src={blog2} alt="blogimage" />
            </div>
            <div className="blogmain-content">
              <div>
                <p className="blog-para1">Sep 26, 2021</p>
                <p className="blog-para2">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </p>
                <p className="blog-para3">Read Full Article</p>
              </div>
            </div>
          </div>
          <div className="blog-mainblog">
            <div className="blogimage">
              <img src={blog3} alt="blogimage" />
            </div>
            <div className="blogmain-content">
              <div>
                <p className="blog-para1">Sep 26, 2021</p>
                <p className="blog-para2">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </p>
                <p className="blog-para3">Read Full Article</p>
              </div>
            </div>
          </div>
          <div className="blog-mainblog">
            <div className="blogimage">
              <img src={blog4} alt="blogimage" />
            </div>
            <div className="blogmain-content">
              <div>
                <p className="blog-para1">Sep 26, 2021</p>
                <p className="blog-para2">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </p>
                <p className="blog-para3">Read Full Article</p>
              </div>
            </div>
          </div>
          <div className="blog-mainblog">
            <div className="blogimage">
              <img src={blog5} alt="blogimage" />
            </div>
            <div className="blogmain-content">
              <div>
                <p className="blog-para1">Sep 26, 2021</p>
                <p className="blog-para2">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </p>
                <p className="blog-para3">Read Full Article</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
