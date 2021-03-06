import React from "react";
import profile from '../images/image-victor.jpg'
export default function Profile() {
  return (
    <section className="main">
      <div className="main__profile-bg">
        <img className="main__profile-img" src={profile} alt="profile" />
      </div>
      <div className="main__info">
        <h1 className="main__name">
          Victor Crest <span className="main__age">26</span>
        </h1>
        <p className="main__country">London</p>
      <hr />

      </div>
      <div className="main__details">
        <div className="main__stats">
          <h2 className="main__stats-numbers">80K</h2>
          <p className="main__stats-subtitle">Followers</p>
        </div>
        <div className="main__stats">
          <h2 className="main__stats-numbers">803K</h2>
          <p className="main__stats-subtitle">Likes</p>
        </div>
        <div className="main__stats">
          <h2 className="main__stats-numbers">1.4K</h2>
          <p className="main__stats-subtitle">Photos</p>
        </div>
      </div>
    </section>
  );
}
