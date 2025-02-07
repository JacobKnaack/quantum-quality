import React, { useState, useEffect } from 'react';

function DocumentList() {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDocuments = async () => {
        try {
            // No need to manually get the token.  Sanctum handles this via cookies.
            const response = await fetch('/api/document', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'), //CSRF token
                },
                credentials: 'include' // Important: Include cookies in the request
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setDocuments(data);

        } catch (err) {
            console.error("Error fetching documents:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDocuments();
    }, []);


    return (
        <>
            <div className="card-header">Your Documents</div>
            <div className="card-body">
                {error && (
                    <p className="card-text">{error.message}</p>
                )}
                {loading && (
                    <div className="spinner-border" role="status">
                        <p className="sr-only">Loading</p>
                    </div>
                )}
                {documents.length && (
                    <ul className="list-group">
                        {documents.map((doc, idx) => (
                            <li key={idx} className="list-group-item">
                                <a>{doc.title}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default DocumentList;
