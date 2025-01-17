import React from 'react';

function Welcome() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-100">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Welcome</h1>
            </div>
            <div className="card-body">
              <p className="lead text-center">Welcome to My Server.  Features are still under construction.</p>
              <div className="text-center">
                <button className="btn btn-primary">
                  <a href="/login">
                    Get Started
                  </a>
                </button>
                <button className="btn btn-secondary">
                  <a href="/upload">
                    Upload JSON file
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
