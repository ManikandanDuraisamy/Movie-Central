class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="sticky-top">
      <header>
      <img src="https://group01moviecinema.s3.eu-central-1.amazonaws.com/header_footer_images/Header+3.jpg" class="card-img" height="180px" alt="header">
      <div class="card-img-overlay">
            
    
      <br>
      <br>
      <img src="https://group01moviecinema.s3.eu-central-1.amazonaws.com/header_footer_images/Movie+Central+1.JPG" width="100px" height="80px"  alt="Movie Central">

      <nav class="navbar navbar-expand-lg bg-body-tertiary" >
              <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarScroll">
                  <ul class="navbar-nav me-auto my-1 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                      <li class="nav-item">
                          <a class="nav-link" href="index.html">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="user_cinemas.html">Cinemas</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="user_movies.html">Movies</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="user_reviews.html">Reviews</a>
                      </li>
                      <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Administrator
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="admin_movies.html">Movies</a></li>
                        <li><a class="dropdown-item" href="admin_bookings.html">Bookings</a></li>
                        <li><a class="dropdown-item" href="admin_cinemas.html">Cinemas</a></li>
                        <li><a class="dropdown-item" href="admin_schedules.html">Schedules</a></li>
                        <li><a class="dropdown-item" href="admin_users.html">Users</a></li>
                        <li><a class="dropdown-item" href="admin_reviews.html">Reviews</a></li>
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
              <img src="https://group01moviecinema.s3.eu-central-1.amazonaws.com/header_footer_images/Header+3.jpg" class="card-img" height="200px" alt="footer">
              <div class="card-img-overlay">
                <figure class="blockquote">
                <blockquote class="blockquote">
                  <p>Contact Us @ customercare@moviecentral.be</p>
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