<!DOCTYPE html>
<html>
<head>
	<title>demo anglar js</title>
	<script src="js/angular.min.js"></script>
	<script>
		var myApp = angular.module("myModule",[]);
		debugger;
		var empController = function ($scope) {
			debugger;
		$scope.textBoxValue = "plase";
		
		$scope.onclick = function (onclick) {
			
			$scope.textBoxValue = textboxdata = onclick;
			
			
		};
	};
		
myApp.controller("empController",empController);
	</script>
</head>
<body ng-app="myModule">
		<div ng-controller="empController">
			time <input type="text" ng-model="textboxdata" name="time"><br>
			<br>
			name<input type="text" ng-model="name" name="name">
			<br>
			<br>
			
			<button ng-click="onclick(textboxdata)" >submit</button><br>
			time: {{textBoxValue }}<br>
			<!-- name: {{name.onclick}}	 -->	
		</div>
</body>
</html>