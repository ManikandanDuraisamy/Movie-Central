class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
              <div class="sticky-top">
      <header>
      <img src="https://group01moviecinema.s3.eu-central-1.amazonaws.com/header_footer_images/Header+3.jpg" class="card-img" height="150px" alt="header">
      <div class="card-img-overlay">
          <br>
      <img src="https://group01moviecinema.s3.eu-central-1.amazonaws.com/header_footer_images/Movie+Central+1.JPG" width="100px" height="80px"  alt="Movie Central">
      <br>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Link
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Link</a>
                    </li>
                </ul>
                <form class="d-flex">
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
                    <img src="https://group01moviecinema.s3.eu-central-1.amazonaws.com/header_footer_images/Header+3.jpg" class="card-img" height="200px" alt="footer">
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