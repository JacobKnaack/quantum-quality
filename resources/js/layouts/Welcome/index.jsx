import React from 'react';
import './welcome.scss';

function Welcome() {
  return (
    <div className="welcome-container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-100">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Shareables</h1>
            </div>
            <div className="card-body">
              <p className="lead text-center">Start sharing Documents with anyone.</p>
              <div className="text-center">
                <button className="btn btn-primary mt-3">
                  <a href="/login">
                    Get Started
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
