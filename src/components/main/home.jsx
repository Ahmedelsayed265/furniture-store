import React from "react";
import { Link } from "react-router-dom";
import FeaturedComponent from "./featured";

import "./home.css";
import EskilMP4 from "./../assest/EskilMP4.mp4";
import smStar from "./../assest/smStar.png";
import SMChair from "./../assest/SMChair.jpg";
import brand1 from "./../assest/brand1.png";
import brand2 from "./../assest/brand2.png";
import brand3 from "./../assest/brand3.png";
import brand4 from "./../assest/brand4.png";
import brand5 from "./../assest/brand5.png";
import brand6 from "./../assest/brand6.png";
import team1 from "./../assest/team1.jpg";
import team2 from "./../assest/team2.jpg";
import team3 from "./../assest/team3.jpg";
import team4 from "./../assest/team4.jpg";
import blog1 from "./../assest/blog1.jpg";
import blog2 from "./../assest/blog2.jpg";
import blog3 from "./../assest/blog3.jpg";
import blog4 from "./../assest/blog4.jpg";

const HomeComp = (props) => {
  return (
    <React.Fragment>
      <div className="row header_content">
        <div className="col-4 up_1">
          <div className="sitetitle">
            <div className="head">
              <h1>
                FURNITURE & <br /> DÉCOR
              </h1>
              <p>
                Made from premium non-stretch Japanese denim for a
                vintage-inspired look, the ’90s Cheeky Jean has an easy straight
                leg.
              </p>
            </div>
            <div className="read_more">
              <Link to="/about">Learn More</Link>
            </div>
            <div className="quick_access">
              <ul>
                <li>
                  <Link to="/shop">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    chair
                  </Link>
                </li>
                <li>
                  <Link to="/shop">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    home decor
                  </Link>
                </li>
                <li>
                  <Link to="/shop">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    tabels
                  </Link>
                </li>
                <li>
                  <Link to="/shop">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    lighting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-5 up_1 p-0 vid_entire">
          <div className="sm-caption">
            <div className="caption">
              <p>10% discount for registered users</p>
            </div>
            <img src={smStar} alt="star" />
          </div>
          <video loop muted autoPlay playsInline src={EskilMP4} />
        </div>
        <div className="col-3 up_1 p-0 ">
          <div className="last_container d-flex flex-column">
            <img src={SMChair} alt="chair" />
            <p>
              The perfect place for every contemporary furniture store and
              manufacture. This is Eskil
            </p>
          </div>
        </div>
      </div>
      <div className="row brands_wrap">
        <div className="brands">
          <div>
            <img src={brand1} alt="brand1" />
          </div>
          <div>
            <img src={brand2} alt="brand2" />
          </div>
          <div>
            <img src={brand5} alt="brand5" />
          </div>
          <div>
            <img src={brand6} alt="brand6" />
          </div>
          <div>
            <img src={brand3} alt="brand3" />
          </div>
          <div>
            <img src={brand4} alt="brand4" />
          </div>
        </div>
      </div>
      <div className="row featured">
        <div className="col-12 mb-5">
          <p className="text-center mb-1 mt-5">BROWSE OUR ITEMS</p>
          <h2 className="text-center">Ideal for your home</h2>
          <div className="line">
            <span></span>
          </div>
        </div>
        {props.products.map((product) => (
          <FeaturedComponent
            product={product}
            key={product.id}
            onCartChange={props.onCartChange}
          />
        ))}
      </div>
      <div className="row team">
        <div className="col-12 mb-5">
          <p className="text-center mb-1 mt-5">OUR CREATIVE FORCE</p>
          <h2 className="text-center">Meet our team</h2>
          <div className="line">
            <span></span>
          </div>
        </div>
        <div className="col-3 Team_card">
          <div className="team_img">
            <img src={team4} alt="team1" />
          </div>
          <div className="job_title">
            <h3>Nicolette Ritonni</h3>
            <p>FINE CERAMICS</p>
          </div>
        </div>
        <div className="col-3 Team_card">
          <div className="team_img">
            <img src={team2} alt="team1" />
          </div>
          <div className="job_title">
            <h3>Nicolas Waldau</h3>
            <p>ARCHITECT</p>
          </div>
        </div>
        <div className="col-3 Team_card">
          <div className="team_img">
            <img src={team3} alt="team1" />
          </div>
          <div className="job_title">
            <h3>Juliette Massé</h3>
            <p>STORE MANAGER</p>
          </div>
        </div>
        <div className="col-3 Team_card">
          <div className="team_img">
            <img src={team1} alt="team1" />
          </div>
          <div className="job_title">
            <h3>Yeung Ngai</h3>
            <p>DESIGNER</p>
          </div>
        </div>
      </div>
      <div className="row news">
        <div className="col-12 mb-5">
          <p className="text-center mb-1 mt-5">OUR BLOG</p>
          <h2 className="text-center">LATEST NEWS</h2>
          <div className="line">
            <span></span>
          </div>
        </div>
        <div className="col-3 blog_card">
          <div className="inner_card">
            <div className="img_wrapper">
              <img src={blog1} alt="blog1" />
            </div>
            <div className="publisher">
              <span>ADMIN</span>
              <span>SEPTEMBER 9, 2021</span>
            </div>
            <h4>
              ESKIL IS PROUD TO STOCK ALL BRANDS AT ONE SITE, EVERY THING
              TOGETHER
            </h4>
            <p>
              Take all negative words out of your mental dictionary and focus on
              the solutions…
            </p>
          </div>
        </div>
        <div className="col-3 blog_card">
          <div className="inner_card">
            <div className="img_wrapper">
              <img src={blog2} alt="blog2" />
            </div>
            <div className="publisher">
              <span>ADMIN</span>
              <span>DECEMBER 4, 2021</span>
            </div>
            <h4>
              HOW TO ACHIEVE NATURAL SHADES IN YOUR SWEET HOME, EASY PRETTY TIPS
            </h4>
            <p>
              The main compont of a healthy environment for self esteem is that
              it needs…
            </p>
          </div>
        </div>
        <div className="col-3 blog_card">
          <div className="inner_card">
            <div className="img_wrapper">
              <img src={blog3} alt="blog3" />
            </div>
            <div className="publisher">
              <span>ADMIN</span>
              <span>DECEMBER 9, 2021</span>
            </div>
            <h4>
              TIPS AND TRICKS: HOW TO ACHIEVE NATURAL SHADES IN YOUR SWEET HOME
            </h4>
            <p>
              Never ever think of giving up. Winners never quit and quitters
              never win. Take…
            </p>
          </div>
        </div>
        <div className="col-3 blog_card">
          <div className="inner_card">
            <div className="img_wrapper">
              <img src={blog4} alt="blog4" />
            </div>
            <div className="publisher">
              <span>ADMIN</span>
              <span>MAY 9, 2022</span>
            </div>
            <h4>
              HANDMADE PIECES THAT TOOK TIME TO MAKE RETRO-NEW ARTISTIC DESIGN
            </h4>
            <p>
              We all intend to plan ahead, but too often let the day-to-day
              minutia get…
            </p>
          </div>
        </div>
      </div>
      <div className="row sub">
        <div className="sub_wrap">
          <h3>
            Subscribe to our newsletter and receive the latest product news,
            stories, invitations to exclusive design events and much, much more.
          </h3>
          <form className="field">
            <input placeholder="Enter Email Address" type="email" />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <p>
            BY SUBSCRIBING, YOU ACCEPT OUR{" "}
            <Link to="/terms-condition">
              PRIVACY POLCY{" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeComp;
