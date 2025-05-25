<template>
  <footer :style="{ backgroundColor: bgColor, color: color }">
    <div class="top">
      <div class="main">
        <h1>3elegant</h1>
        <p>More than just a game. It'S a lifestyle.</p>
        <div class="social">
          <a href="#" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
      <div class="main main1">
        <div class="col">
          <h2>Pages</h2>
          <ul>
            <li>
              <router-link to="/home">Home</router-link>
            </li>
            <li>
              <router-link to="/electronicShop">Electronic</router-link>
            </li>
            <li>
              <router-link to="/sportShop">Sport</router-link>
            </li>
            <li>
              <router-link to="/clothesShop">Clothes</router-link>
            </li>
          </ul>
        </div>
        <div class="col">
          <h2>Info</h2>
          <ul>
            <li>
              <a href="#">Shipping Policy</a>
            </li>
            <li>
              <a href="#">Return & Refund</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">FAQS</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <h2>Office</h2>
          <ul>
            <li>
              <a href="#">43111 Hai Trieu street,District 1, HCMC</a>
            </li>
            <li>
              <a href="#">Vietnam</a>
            </li>
            <li>
              <a href="#">84-756-3237</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="main pay">
        <i class="fa-brands fa-cc-visa"></i>
        <i class="fa-brands fa-cc-mastercard"></i>
        <i class="fa-brands fa-cc-paypal"></i>
        <i class="fa-brands fa-cc-apple-pay"></i>
        <i class="fa-brands fa-cc-amazon-pay"></i>
        <i class="fa-brands fa-cc-stripe"></i>
      </div>
      <div class="main main1">
        <p>
          Copyright &copy; <span>{{ new Date().getFullYear() }}</span> 3legant. All rights reserved
        </p>
        <p>privacy policy</p>
        <p>Terms Of Use</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

footer {
  padding: 20px;
  padding-bottom: 0;
}

footer .top,
footer .bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: start;
}

footer .bottom {
  flex-direction: column;
  border-top: 2px solid;
}

footer .top .main {
  width: 50%;
}

footer .main1 {
  display: flex;
  justify-content: center;
  align-items: start;
}

footer .main h1 {
  margin: 20px 0;
}

footer .main p {
  margin: 20px 0;
}

footer .main .social i {
  margin: 0 10px;
  font-size: 25px;
  transition: 0.5s;
}

footer .main .social i:hover {
  transform: scale(1.2);
}

footer .main .col {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  /* border-left: 2px solid; */
  padding: 0 20px;
}

footer .main .col h2 {
  margin: 10px 0;
}

footer .main .col ul {
  margin: 10px 0;
}

footer .main .col ul li {
  padding: 10px 0;
  position: relative;
}

footer .main .col ul li::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0%;
  transition: 0.5s;
  background-color: white;
}

footer .main .col ul li:hover::before {
  width: 90%;
}

footer .main p {
  margin: 10px;
  font-size: 14px;
}

footer .pay {
  text-align: center;
}

footer .pay i {
  font-size: 30px;
  margin: 10px;
}

@media (max-width: 776px) {
  footer .top,
  footer .bottom {
    text-align: start;
  }

  footer .top {
    flex-direction: column;
  }

  footer .top .main {
    width: 100%;
    margin: 10px 0;
  }

  footer .top .col {
    padding: 0 10px;
  }

  footer .bottom .main {
    width: 100%;
  }

  footer .bottom .main1 {
    flex-direction: column;
  }
  footer .bottom .pay {
    text-align: start;
  }
  footer .bottom .main1 p {
    margin: 10px 0;
  }
}
</style>
