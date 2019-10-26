<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="style.css">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
</head>
<body>
  <script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.date = "";
    $scope.name = "";
    $scope.time = "";
    $scope.email = "";
    $scope.guests = "";
    $scope.phone = "";
});
</script>

<h2>Animated Modal with Header and Footer</h2>


<div ng-app="myApp" ng-controller="myCtrl">
<form action="#" id="reservationform" method="POST">
            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <div class="form-group">
                        <label for="datepicker">Date</label>
                        <input type="text" name="date" class="form-control" ng-model="date" id="datepicker" placeholder="Pick a date" title="Please choose a date" required>
                        <i class="fa fa-calendar-o"></i>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="form-group">
                        <label for="name">Your Name</label>
                        <input type="text" class="form-control" id="name" name="name" ng-model="name" placeholder="Full Name" title="Your Full Name please" required>
                        <i class="fa fa-pencil-square-o"></i>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="form-group">
                        <label for="timepicker">Time</label>
                        <input type="text" class="form-control" id="timepicker" name="time" ng-model="time" placeholder="Pick a time" title="Choose Preferred Time" required>
                        <i class="fa fa-clock-o"></i>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" class="form-control" id="email" name="email" ng-model="email" placeholder="Your Email ID" 
                        title="Please enter your email id" required>
                        <i class="fa fa-envelope-o"></i>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="form-group">
                        <label for="guests">Guests</label>
                        <input class="form-control" type="number" id="guests" name="guests" ng-model="guests" placeholder="How many of you?" title="Please enter number of guests" required>
                        <i class="fa fa-user"></i>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="text" class="form-control" id="phone" name="phone" ng-model="phone" placeholder="Enter your Phone Number" title="Please enter your phone number" required>
                        <i class="fa fa-phone"></i>
                    </div>
                </div>
                <div class="col-md-12 col-sm-12">
                    <div class="reservation-btn">
                    <button type="submit" class="btn btn-default btn-lg" id="js-reservation-btn">Make Reservation</button>
                    <div id="js-reservation-result" data-success-msg="Form submitted successfully." data-error-msg="Oops. Something went wrong."></div>
                    </div>
                </div>
            </div>
        


<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h2>Modal Header</h2>
    </div>
    <div class="modal-body">
      <p>{{date}}</p>
      <p>{{name}}</p>
      <p>{{time}}</p>
      <p>{{email}}</p>
      <p>{{guests}}</p>
      <p>{{phone}}</p>
      
    </div>
    <div class="modal-footer">
      <h3>Modal Footer</h3>
    </div>
  </div>
</div>
</form>
</div>


<script>
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("js-reservation-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>

</body>
</html>
