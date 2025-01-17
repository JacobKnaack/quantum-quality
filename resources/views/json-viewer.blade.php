<!DOCTYPE html>
<html>
<head>
    <title>JSON Viewer</title>
    <style>
        .json-container {
            white-space: pre-wrap; 
            border: 1px solid #ccc;
            padding: 10px;
            overflow-x: auto; 
        }
    </style>
</head>
<body>
    <div class="container mt-5">
        <h1>Uploaded JSON Data</h1>
        <div class="json-container">
            {{ $json }}
        </div>
    </div>
</body>
</html>