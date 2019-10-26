<body>

    <section class="trusted" id="trus">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="page-header wow fadeInDown">
                        <h1> {{message}}<small>{{message2}}</small></h1>
                    </div>
                </div>
            </div>
            <div class="row wow fadeInUp">
                <div class="col-md-12">
                    <div class="trusted-sponsors">
                        <img src="img/sponsor/foodsquare.png" alt="sponsors">
                        <img src="img/sponsor/opentable.png" alt="sponsors">
                        <img src="img/sponsor/tripadvisor.png" alt="sponsors">
                        <img src="img/sponsor/zomato.png" alt="sponsors">
                        <img src="img/sponsor/foodsquare.png" alt="sponsors">
                        <img src="img/sponsor/opentable.png" alt="sponsors">
                        <img src="img/sponsor/tripadvisor.png" alt="sponsors">
                        <img src="img/sponsor/zomato.png" alt="sponsors">
                    </div>
                </div>
            </div>
        </div>
        <div class="trusted-quote">
            <div class="container">
                <div class="row">
                    <div class="col-md-offset-1 col-md-10">
                        <div class="  vue-slider-component">
                            <div class="swiper-wrapper">
                          
                          
                                        <div class="swiper-slide">
                                            <li>
                                                <img src="img/quote.png" alt="quote">
                                                <p class="quote-body">The world’s a big, big stage for this notorious
                                                    deli smack
                                                    in
                                                    the middle of the theatre district, infamously famous for its
                                                    over-the-top
                                                    corned beef and pastrami sandwiches, chopped liver, blintzes,
                                                    celebrities,
                                                    salami, smoked fish and New York’s finest cheesecake.</p>
                                                <p class="quote-author">Anthony Reed, <span>New York</span></p>
                                            </li>
                                            <li>
                                                <img src="img/quote.png" alt="quote">
                                                <p class="quote-body">You might not find dragon meat on the menu, but
                                                    you’ll
                                                    find
                                                    pretty much anything else that walks, swims or flies, cooked up in
                                                    more ways
                                                    than there are people in the Guangdong province. This Midtown
                                                    mainstay has a
                                                    20-year history of delivering mouth-watering and Cantonese style
                                                    chow.</p>
                                                <p class="quote-author">Gemma Arterton, <span>Bay Area</span></p>
                                            </li>
                                            <li>
                                                <img src="img/quote.png" alt="quote">
                                                <p class="quote-body">This NYC historical landmark in the heart of the
                                                    Theatre
                                                    District has been serving up suds and down home pub food since 1892,
                                                    surviving
                                                    prohibition by renting the front of its then Rockefeller Center
                                                    façade to
                                                    Greek
                                                    florists, while the Hurley brothers ran a speak-easy in back.</p>
                                                <p class="quote-author">Zachary Burton, <span>Sanfransisco</span></p>
                                            </li>
                               
                                      
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section class="instagram" id=ins>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="page-header wow fadeInDown">
                        <h1>{{message3}}<small>{{message4}}</small></h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="subscribe" id=sub>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>{{message5}}</h1>
                    <p>{{message6}}</p>
                    <form class="form-inline" action="php/subscribe.php" id="invite" method="POST">
                        <div class="form-group">
                            <input class="e-mail form-control" name="email" id="address" type="email"
                                placeholder="Your Email Address" required>
                        </div>
                        <button type="submit" class="btn btn-default">
                            <i class="fa fa-angle-right"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <section class="footer" id=foot>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <h1>{{message7}}</h1>
                    <p>{{message8}}
                    </p>
                    <a href="">{{message9}}</a>
                </div>
                <div class="col-md-4  col-sm-6">
                    <h1>{{message10}}</h1>
                    <div class="footer-blog clearfix">

                        <img src="img/thumb8.png" class="img-responsive footer-photo" alt="blog photos">
                        <p class="footer-blog-text">{{message11}}</p>
                        <p class="footer-blog-date">{{message12}}</p>
                        </a>
                    </div>
                    <div class="footer-blog clearfix last">

                        <img src="img/thumb9.png" class="img-responsive footer-photo" alt="blog photos">
                        <p class="footer-blog-text">{{message13}}</p>
                        <p class="footer-blog-date">{{message14}}</p>
                        </a>
                    </div>
                </div>
                <div class="col-md-4  col-sm-6">
                    <h1>{{message15}}</h1>
                    <div class="footer-social-icons">
                        <a href="https://www.facebook.com">
                            <i class="fa fa-facebook-square"></i>
                        </a>
                        <a href="https://www.twitter.com">
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a href="https://plus.google.com">
                            <i class="fa fa-google"></i>
                        </a>
                        <a href="https://www.youtube.com">
                            <i class="fa fa-youtube-play"></i>
                        </a>
                        <a href="https://www.vimeo.com">
                            <i class="fa fa-vimeo"></i>
                        </a>
                        <a href="https://www.pinterest.com">
                            <i class="fa fa-pinterest-p"></i>
                        </a>
                        <a href="http://www.linkedin.com">
                            <i class="fa fa-linkedin"></i>
                        </a>
                    </div>
                    <div class="footer-address">
                        <p><i class="fa fa-map-marker"></i>{{message16}}</p>
                        <p><i class="fa fa-phone"></i>{{message17}}</p>
                        <p><i class="fa fa-envelope-o"></i><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                data-cfemail="62111712120d10162210071116031710030c164c010d0f">{{message18}}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-copyrights">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <p><i class="fa fa-copyright"></i>2015.Tomato.All rights reserved. Designed with <i
                                class="fa fa-heart primary-color"></i> by Surjithctly</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <script src="js/app.js"></script>
    <script src="js/vue-slider-component.umd.min.js"></script>
</body>