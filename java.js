// Modal functionality
var modal = document.getElementById('complaintModal');
var btn = document.getElementById('openComplaintModal');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Geolocation functionality
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    document.getElementById("latitude").value = position.coords.latitude;
    document.getElementById("longitude").value = position.coords.longitude;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

// Validate location before form submission
function validateLocation() {
    var latitude = document.getElementById("latitude").value;
    var longitude = document.getElementById("longitude").value;

    if (latitude === "" || longitude === "") {
        alert("Please get the location before submitting the complaint.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}


// Define bin locations for each zone
const zone1Bins = {
    101: "Market Street",
    102: "Old Town",
    103: "Railway Station",
    104: "Temple Road",
    105: "Supermarket",
    // Add other locations for Zone 1
};

const zone2Bins = {
    201: "Park Avenue",
    202: "Ameerpet",
    203: "Balaji Nagar",
    204: "Kamalanagar",
    205: "Sathya Sai Hospital",
    // Add other locations for Zone 2
};

const zone3Bins = {
    301: "Main Square",
    302: "Bandi Bazar",
    303: "Housing Board Colony",
    304: "Malkapuram",
    305: "Government Quarters",
    // Add other locations for Zone 3
};

const zone4Bins = {
    401: "School Road",
    402: "Industrial Area",
    403: "Nallamada",
    404: "Narayana Reddy Nagar",
    405: "Peddapalli",
    // Add other locations for Zone 4
};

// Function to update location based on bin number
function updateLocation(selectElement, locationId, zoneBins) {
    const selectedBin = selectElement.value;
    const locationElement = document.getElementById(locationId);
    if (zoneBins[selectedBin]) {
        locationElement.textContent = zoneBins[selectedBin];
    } else {
        locationElement.textContent = "Select a bin";
    }
}
