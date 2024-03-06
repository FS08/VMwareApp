// script.js

// Function to toggle the sidebar
function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    sidebar.classList.toggle("active");
}

// Close the sidebar if the user clicks outside of it
window.addEventListener("click", function(event) {
    var sidebar = document.getElementById("mySidebar");
    var openBtn = document.querySelector(".open-btn");
    if (event.target !== sidebar && event.target !== openBtn && !sidebar.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});

// Get the footer element
var footer = document.getElementById("myFooter");

// Function to update the date and time
function updateDateTime() {
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var now = new Date();

    // Format date as "Day DD Month YYYY"
    var date = daysOfWeek[now.getDay()] + " " +
               ("0" + now.getDate()).slice(-2) + " " +
               months[now.getMonth()] + " " +
               now.getFullYear();

    // Format time in 24-hour format as HH:MM:SS
    var time = ("0" + now.getHours()).slice(-2) + ":" +
               ("0" + now.getMinutes()).slice(-2) + ":" +
               ("0" + now.getSeconds()).slice(-2);

    // Format the date and time as desired
    var dateTimeString = date + " | Current Time: " + time;
    // Update the footer content
    footer.innerHTML = '<div class="w3-container w3-theme-l2 w3-padding-32"><h4>' + dateTimeString + '</h4></div><div class="w3-container w3-theme-l1"><p>Powered by <a href="https://www.nagra.com/" target="_blank">Kudelski</a></p></div>';
}

// Call the function to update date and time initially
updateDateTime();

// Call the function every second to keep the date and time updated
setInterval(updateDateTime, 1000);

function testFunction() {
    alert('Scripts.js is connected and the function is working!');
}

// Function to change color based on Host Connection State
function hostConnectionState(connectionState, elementId) {
    // Declare possible connection States of a Host
    var connectedColor = "green";
    var maintenanceColor = "yellow";
    var disconnectedColor = "red";

    var color;

    // Use a switch statement to determine the color based on the connection state
    switch (connectionState) {
        case "Connected":
            color = connectedColor;
            break;
        case "Maintenance":
            color = maintenanceColor;
            break;
        case "Disconnected":
            color = disconnectedColor;
            break;
        default:
            // Handle unexpected states or set a default color
            color = "black";
            break;
    }

    // Use the 'color' variable to set the color of your HTML element
    // For example, if you have an element with the id 'hostStatus', you can set its color like this:
    var element = document.getElementById(elementId);
    if (element) {
        element.style.color = color;
    }
}

// Function to change background color based on VM Power State
function PowerState(powerState, elementId) {
    var poweredOnClass = "powered-on";
    var poweredOffClass = "powered-off";

    // Use a switch statement to determine the class based on the power state
    var classToAdd;
    switch (powerState) {
        case "PoweredOn":
            classToAdd = poweredOnClass;
            break;
        case "PoweredOff":
            classToAdd = poweredOffClass;
            break;
    }

    // Add the determined class to the element
    var element = document.getElementById(elementId);
    if (element) {
        element.classList.add('power-state-color', classToAdd);
    }
}

// Function to change background color based on VM Overall Status
function OverallStatus(overallStatus, elementId) {
    var successStatus = "success-status"; // You can adjust these class names as needed
    var warningStatus = "warning-status";
    var failureStatus = "failure-status";

    // Use a switch statement to determine the class based on the overall status
    var classToAdd;
    switch (overallStatus.toLowerCase()) {
        case "green":
            classToAdd = successStatus;
            break;
        case "yellow":
            classToAdd = warningStatus;
            break;
        case "red":
            classToAdd = failureStatus;
            break;
    }

    // Add the determined class to the element
    var element = document.getElementById(elementId);
    if (element) {
        element.classList.add(classToAdd);
    }
}

// Table with Filters
// static/js/datatable-init.js
$(document).ready(function() {
    // Initialize DataTable
    $('#hostTable').DataTable({
        // Add search functionality to each column
        initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                var select = $('<input type="text" placeholder="Search..."/>')
                    .appendTo( $(column.footer()).empty() )
                    .on( 'keyup change clear', function () {
                        if (column.search() !== this.value) {
                            column
                                .search( this.value )
                                .draw();
                        }
                    } );
            } );
        }
    });
});

// Change Navbar "Host" Button Background if Selected
document.addEventListener("DOMContentLoaded", function() {
    // Get the current pathname
    var path = window.location.pathname;

    // Find the navbar item corresponding to the current page and add the active class
    var hostLink = document.getElementById("hostLink");
    if (hostLink && path === "/host") {
        hostLink.classList.add("w3-bar-active");
    }
});

// Change Navbar "VM" Button Background if Selected
document.addEventListener("DOMContentLoaded", function() {
    // Get the current pathname
    var path = window.location.pathname;

    // Find the navbar item corresponding to the current page and add the active class
    var vmLink = document.getElementById("vmLink");
    if (vmLink && path === "/vm") {
        vmLink.classList.add("w3-bar-active");
    }
});

// Change Navbar "About" Button Background if Selected
document.addEventListener("DOMContentLoaded", function() {
    // Get the current pathname
    var path = window.location.pathname;

    // Find the navbar item corresponding to the current page and add the active class
    var aboutLink = document.getElementById("aboutLink");
    if (aboutLink && path === "/about") {
        aboutLink.classList.add("w3-bar-active");
    }
});

// Change Navbar "Other" Button Background if Selected
document.addEventListener("DOMContentLoaded", function() {
    // Get the current pathname
    var path = window.location.pathname;

    // Find the navbar item corresponding to the current page and add the active class
    var otherLink = document.getElementById("otherLink");
    if (otherLink && path === "/other") {
        otherLink.classList.add("w3-bar-active");
    }
});



