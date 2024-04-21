class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="sticky-top">
      <header>
      <img src="https://group01moviecinema.s3.eu-central-1.amazonaws.com/header_footer_images/Header+1.jpg" class="card-img" height="200px" alt="header">
      <div class="card-img-overlay">
      
      
      <img src="https://group01moviecinema.s3.eu-central-1.amazonaws.com/header_footer_images/Movie+Central+1.JPG" width="100px" height="80px"  alt="Movie Central">
      <br>
      <br>
      <br>
      <br>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" >
              <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarScroll">
                  <ul class="navbar-nav me-auto my-1 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                      <li class="nav-item">
                          <a class="nav-link" href="">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="cinemas_main.html">Cinemas</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="movies_main.html">Movies</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="reviews_main.html">Reviews</a>
                      </li>
                      <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Administrator
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="movies_page.html">Movies</a></li>
                        <li><a class="dropdown-item" href="cinemas_page.html">Cinemas</a></li>
                        <li><a class="dropdown-item" href="Schedules_page.html">Schedule</a></li>
                        <li><a class="dropdown-item" href="users_page(get%26post)-2.html">User</a></li>
                        <li><a class="dropdown-item" href="reviews_page-2.html">Review</a></li>
                        <li><a class="dropdown-item" href="bookings_page.html">Booking</a></li>
                      </ul>
                    </li>
                  </ul>
                  <input class="form-control1 me-3" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
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
          <p>&copy; 2024 Movie Central. All rights reserved.</p>
          <div class="card text-bg-dark">
              <img src="https://group01moviecinema.s3.eu-central-1.amazonaws.com/header_footer_images/Header+1.jpg" class="card-img" height="200px" alt="footer">
              <div class="card-img-overlay">
                <figure class="blockquote">
                <blockquote class="blockquote">
                  <p>Contact Us @ moviecentral@gmail.com</p>
                </blockquote>
              </figure> 
               
                  <figure class="text-end card-img-overlay">
                    <blockquote class="blockquote">
                    <p>Save time & save money with Movie Central!</p>
                  
                    <p>Sign up and we'll send the best deals to you!</p>
                    <label for="emailAddress" class="form-label">Email Address</label>
                    <input type="text" id="email" name="email" required><br>  
                <button type="button" class="btn btn-secondary" >Register</button>
                </blockquote>
                  </figure>   
               </div>
          </div>
      </footer>`
    }
  }
  
  customElements.define('main-header', Header);
  customElements.define('main-footer', Footer);