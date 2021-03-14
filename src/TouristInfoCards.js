import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="TouristInfoCards">
      <div className="card">
        <img
          src="https://peoplemakeglasgow.com/images/CTA_Images/114605-GCMB-Generic_Homepage_Banner_RR_V1.png"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            People Make Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://www.visitmanchester.com/imageresizer/?image=%2Fdbimgs%2Fthe-lowry-exterior%281%29.jpg&action=FeaturedItems1x1"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Visit Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/visit/whats-on/special-events/west-end-live/92134-310x174.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitlondon.com/" className="btn btn-primary">
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
