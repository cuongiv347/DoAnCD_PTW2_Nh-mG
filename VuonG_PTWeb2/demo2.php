<!DOCTYPE html>
<html>
<head>
	<title>demo</title>
	<script src="js/angular.min.js"></script>
</head>
<body>
	<div ng app="myApp" ng controller="empController">
		<input type="text" ng-model="name" name="">
		<button ng-click="onclick(name)">show</button>
			{{name}}
	</div>
	<script>
		var app = angular.module("myApp", []);
		app.controller ("empController", function ($scope) {	
			$scope.onclick = function() {
				alert($scope.name);
			}
			// body...
		});	
	</script>

</body>
</html>
