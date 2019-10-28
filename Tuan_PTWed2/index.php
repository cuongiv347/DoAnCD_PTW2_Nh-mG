<!DOCTYPE html>
<html>
<head>
	<title>demo fillter</title>
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
</head>
<body>
	<div class="menu">
		<div class="container">
			<h1 id="title-menu">menu</h1>
			<div id="myBtnContainer">
				<button class="btn active" onClick="filterSelection('all')" id="select"> Show all</button>
				<button class="btn" onClick="filterSelection('starts')" id="select">Starts</button>
				<button class="btn" onClick="filterSelection('breakfast')" id="select">Breakfast</button>
				<button class="btn" onClick="filterSelection('lunch')" id="select">Lunch</button>
				<button class="btn" onClick="filterSelection('dinner')" id="select">Dinner</button>
				<button class="btn" onClick="filterSelection('desserts')" id="select">Desserts</button>
			</div>
			<div class="row filterDiv">
				<div class="filterDiv col-sm-4 starts">
					<img src="img/menu/1/1.jpg">
	                <div class="menu-overlay">
	                    <h4>English-Asparagus</h4>
	                    <p>Asparagus, hens egg, toasted
	                    <br>sunflower seeds, Spenwood cheese</p>
	                    <span class="price">$ 14.95</span>
	                </div>
				</div>
				<div class="filterDiv col-sm-4 starts breakfast lunch dinner">
					<img src="img/menu/1/2.jpg">
		            <div class="menu-overlay">
		                <h4>English-Asparagus</h4>
		                <p>Asparagus, hens egg, toasted
		                <br>sunflower seeds, Spenwood cheese</p>
		                <span class="price">$ 14.95</span>
		            </div>
				</div>
				<div class="filterDiv col-sm-4 starts lunch desserts">
					<img src="img/menu/1/3.jpg">
		            <div class="menu-overlay">
		                <h4>English-Asparagus</h4>
		                <p>Asparagus, hens egg, toasted
		                <br>sunflower seeds, Spenwood cheese</p>
		                <span class="price">$ 14.95</span>
		            </div>
				</div>
				<div class="filterDiv col-md-4 breakfast lunch dinner">
					<img src="img/menu/1/4.jpg">
		            <div class="menu-overlay">
		                <h4>English-Asparagus</h4>
		                <p>Asparagus, hens egg, toasted
		                <br>sunflower seeds, Spenwood cheese</p>
		                <span class="price">$ 14.95</span>
		            </div>
				</div>
				<div class="filterDiv col-md-4 breakfast lunch dinner">
					<img src="img/menu/1/5.jpg">
		            <div class="menu-overlay">
		                <h4>English-Asparagus</h4>
		                <p>Asparagus, hens egg, toasted
		                <br>sunflower seeds, Spenwood cheese</p>
		                <span class="price">$ 14.95</span>
		            </div>
				</div>
				<div class="filterDiv col-md-4 breakfast lunch dinner">
					<img src="img/menu/1/6.jpg">
		            <div class="menu-overlay">
		                <h4>English-Asparagus</h4>
		                <p>Asparagus, hens egg, toasted
		                <br>sunflower seeds, Spenwood cheese</p>
		                <span class="price">$ 14.95</span>
		            </div>
				</div>

			</div>
		</div>
	</div>
	<script src="js/fillter.js"></script>
	<script type="js/bootstrap.min.js"></script>
	<script src="js/jquery.min.js"></script>
</body>
</html>