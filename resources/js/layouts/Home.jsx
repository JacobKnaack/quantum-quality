import React from 'react';
import styled from 'styled-components';
import DocumentList from '../components/DocumentList';

const Link = styled.a`
  text-decoration: none;
  color: white;
`

function Home() {
  return (
    <main id="home-container" className="container">
      <div className="row">
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-header">
              Upload Section
            </div>
            <div class="card-body">
              <button class="btn btn-primary mb-3">
                <Link href="/upload">
                  Upload New Document
                </Link>
              </button>
              <div class="border p-4">
                Drag & Drop Area
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <DocumentList />
        </div>
      </div>
    </main>
  )
}

export default Home;
