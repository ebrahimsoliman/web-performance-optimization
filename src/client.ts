import "/src/asset/index.scss";

const template = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Logo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container mt-5">
   <div class="row">
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/1.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/1.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/1-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/1-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/1.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/2.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/2.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/2-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/2-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/2.jpg`)}" alt="image">
            </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/3.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/3.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/3-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/3-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/3.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/4.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/4.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/4-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/4-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/4.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/5.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/5.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/5-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/5-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/5.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/6.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/6.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/6-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/6-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/6.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/7.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/7.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/7-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/7-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/7.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/8.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/8.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/8-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/8-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/8.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/9.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/9.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/9-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/9-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/9.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/10.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/10.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/10-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/10-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/10.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/11.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/11.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/11-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/11-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/11.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/12.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/12.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/12-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/12-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/12.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/13.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/13.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/13-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/13-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/13.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/14.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/14.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/14-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/14-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/14.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/15.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/15.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/15-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/15-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/15.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/16.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/16.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/16-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/16-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/16.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/17.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/17.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/17-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/17-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/17.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/18.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/18.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/18-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/18-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/18.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/19.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/19.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/19-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/19-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/19.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/20.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/20.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/20-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/20-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/20.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/21.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/21.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/21-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/21-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/21.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/22.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/22.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/22-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/22-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/22.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/23.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/23.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/23-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/23-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/23.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/24.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/24.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/24-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/24-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/24.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/25.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/25.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/25-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/25-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/25.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/26.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/26.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/26-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/26-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/26.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/27.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/27.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/27-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/27-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/27.jpg`)}" alt="image">
        </picture>
    </div>
    <div class="col-md-4">
        <picture>
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/28.jpg?as=webp`)}" type="image/webp">
            <source media="(min-width: 768px)" srcset="${require(`./asset/resource/28.jpg`)}" type="image/jpg">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/28-m.jpg?as=webp`)}" type="image/webp">
            <source media="(max-width: 768px)" srcset="${require(`./asset/resource/28-m.jpg`)}" type="image/jpg">
            <img loading="lazy" src="${require(`./asset/resource/28.jpg`)}" alt="image">
        </picture>
    </div>
</div>
<!-- End of row 3 -->
<!-- Repeat the remaining rows (4-10) in a similar manner -->

</div>

  <footer class="mt-5 py-3 bg-dark text-white">
    <div class="container text-center">
      &copy; 2023 Your Website. All Rights Reserved.
    </div>
  </footer>
`;
document.querySelector("body").insertAdjacentHTML("beforeend", template);
