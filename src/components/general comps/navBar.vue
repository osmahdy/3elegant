<template>
  <div class="navbar" :style="{ '--color': navBorderColor }">
    <a href="#" class="logo">3elegant</a>
    <nav>
      <i class="fa-solid fa-bars" @click="this.viewMenu = !this.viewMenu"></i>
      <ul :class="{ show: viewMenu }">
        <li
          :class="{ active: activeTab === 'home' }"
          ref="activeItem"
          @click="changeActive('home')"
        >
          <router-link to="/home">Home</router-link>
        </li>
        <li
          :class="{ active: activeTab === 'electronic' }"
          ref="activeItem"
          @click="changeActive('electronic')"
        >
          <router-link to="/electronicShop">Electronic</router-link>
        </li>
        <li
          :class="{ active: activeTab === 'sport' }"
          ref="activeItem"
          @click="changeActive('sport')"
        >
          <router-link to="/sportShop">Sport</router-link>
        </li>
        <li
          :class="{ active: activeTab === 'clothes' }"
          ref="activeItem"
          @click="changeActive('clothes')"
        >
          <router-link to="/clothesShop">Clothes</router-link>
        </li>
      </ul>
    </nav>
    <div class="control">
      <i-icon class="icon" icon="fa-solid fa-search" />
      <i-icon class="icon" icon="fa-solid fa-user" />
      <i-icon class="icon basket" icon="fa-solid fa-basket-shopping" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: '', // default
      viewMenu: false,
    };
  },
  props: {
    navBorderColor: {
      type: String,
      required: false,
    },
  },
  methods: {
    changeActive(tab) {
      this.activeTab = tab;
    },
    showMenu() {
      let ul = document.querySelector(`.navbar nav ul`);
      let ulli = document.querySelectorAll(`.navbar nav ul li`);
      ulli.forEach((li) => {
        li.addEventListener('click', () => ul.classList.remove('show'));
      });
    },
    closeMenu() {
      let ul = document.querySelector(`.navbar nav ul`);
      ul.classList.remove('show');
    },
    setNavBgColor(path) {
      switch (path) {
        case '/home':
          this.$emit('dataFromChild', { bgColor: '#ffffff', color: 'black' });
          break;
        case '/electronicShop':
          this.$emit('dataFromChild', { bgColor: '#ffc146', color: 'black' });
          break;
        case '/sportShop':
          this.$emit('dataFromChild', { bgColor: '#38CB89', color: 'black' });
          break;
        case '/clothesShop':
          this.$emit('dataFromChild', { bgColor: '#171D28', color: 'white' });
          break;
        default:
          this.$emit('dataFromChild', { bgColor: '#ffffff', color: 'white' });
      }
    },
  },
  watch: {
    $route(to) {
      this.setNavBgColor(to.path);
      this.activeTab = this.$route.name;
    },
  },
  mounted() {
    this.showMenu();
    this.setNavBgColor(this.$route.path);
  },
};
</script>

<style>
:root {
  --color: white;
}

.navbar {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;
  align-items: center;
  position: relative;
  z-index: 2;
}

.navbar .logo {
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  padding: 10px;
  order: 1;
}

.navbar nav {
  order: 2;
}

.navbar nav i {
  display: none;
}

.navbar nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: start;
  transition: 0.5s;
  transition: 0.8s;
}

.navbar nav ul.show {
  transform: translateY(0);
  width: 100%;
}

.navbar nav ul li {
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transform: scale(1);
  transition: 0.5s;
}

.navbar nav ul li a {
  text-decoration: none;
  font-size: 16px;
  color: inherit;
  margin: 0 5px;
  padding: 10px 5px;
  width: 100%;
  color: inherit;
}

.navbar nav ul li:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background-color: var(--color);
  transition: 0.5s;
}

.navbar nav ul li:hover:before {
  width: 100%;
}

.navbar nav ul .active:before {
  width: 100%;
}

.navbar nav ul li:hover,
.navbar nav ul .active {
  transform: scale(1.1);
}

.navbar .control {
  display: flex;
  order: 3;
}

.navbar .control .icon {
  margin: 0 5px;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
}

@media (max-width: 990px) {
  .container {
    width: calc(100vw - 100px);
    margin: auto;
  }
}

@media (max-width: 778px) {
  .container {
    width: calc(100vw - 50px);
    margin: auto;
  }

  .navbar .control {
    order: 2;
  }

  .navbar nav {
    order: 0;
    overflow: hidden;
  }

  nav ul {
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    background-color: #222;
    overflow: hidden;
    transform: translateY(-300%);
  }

  .navbar nav ul li {
    margin: 0;
    color: white;
    width: 100%;
  }

  .navbar nav ul li:not(:last-child) {
    border-bottom: 2px solid white;
  }

  .navbar nav ul li:hover,
  .navbar nav ul .active {
    transform: scale(1) translateX(20px);
  }

  .navbar nav i {
    display: block;
    font-size: 18px;
    padding: 10px;
    cursor: pointer;
  }
}
</style>
