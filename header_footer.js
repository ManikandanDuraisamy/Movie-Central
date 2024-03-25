class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
              <div class="sticky-top">
      <header>
      <img src="https://group01moviecinema.s3.eu-central-1.amazonaws.com/header_footer_images/Header+2.jpg" class="card-img" height="200px" alt="header">
      <div class="card-img-overlay">
          <br>
      <img src="https://group01moviecinema.s3.eu-central-1.amazonaws.com/Movie+Central+1.JPG" width="100px" height="80px"  alt="Movie Central">
      <br><br><br>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarScroll">
                  <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                      <li class="nav-item">
                          <a class="nav-link" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Movies</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Cinemas</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link"  href="#">Schedule</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Booking</a>
                      </li>
                      <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Administrator
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="https://group01moviecinema.s3.eu-central-1.amazonaws.com/movies_page.html">Movies</a></li>
                        <li><a class="dropdown-item" href="https://group01moviecinema.s3.eu-central-1.amazonaws.com/cinemas_page.html">Cinemas</a></li>
                        <li><a class="dropdown-item" href="https://group01moviecinema.s3.eu-central-1.amazonaws.com/schedules_page.html">Schedule</a></li>
                        <li><a class="dropdown-item" href="https://group01moviecinema.s3.eu-central-1.amazonaws.com/users_page.html">User</a></li>
                        <li><a class="dropdown-item" href="https://group01moviecinema.s3.eu-central-1.amazonaws.com/reviews_page.html">Review</a></li>
                        <li><a class="dropdown-item" href="https://group01moviecinema.s3.eu-central-1.amazonaws.com/bookings_page.html">Booking</a></li>
                      </ul>
                    </li>
                  </ul>
                  <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
      </div>
      </header>
      </div>
          `
    }
  }
  
  //Footer
  
  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
          <footer>
          <div class="card text-bg-dark">
              <img src="https://group01moviecinema.s3.eu-central-1.amazonaws.com/header_footer_images/Footer1.jpg" class="card-img" height="200px" alt="footer">
              <div class="card-img-overlay">
                <h3 class="card-title">Movie Central</h3><br> 
                <p class="card-text">Save time, save money! <br> 
                  Sign up and we'll send the best deals to you</p><br>
                <p class="card-text"><small>moviecentral@gmail.com
                  <br> 
                  24/7 <br>
                </small></p>
              </div>
            
      </footer>`
    }
  }
  
  customElements.define('main-header', Header);
  customElements.define('main-footer', Footer);