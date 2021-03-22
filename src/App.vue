<template>
  <div id="app">
    <head>
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Prata&display=swap" rel="stylesheet">
    </head>
    <div class="top-bar">
      <div id="navigation-icon" v-if="mobileView" @click="toggleNav">
        <img src="@/assets/hamburger-menu-icon.png" />
      </div>
      <div id="navigation" v-if="!mobileView || showNav">
        <ul id="nav-list" v-bind:class="{ flexDisplay: mobileView }">
          <li><router-link to="/"><img src="@/assets/images/golden-spoon.png"></router-link></li>
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/about">ABOUT</router-link></li>
          <li><router-link to="/shop">SHOP</router-link></li>
          <li><router-link to="/custom-order">CUSTOM ORDER</router-link></li>
          <li><router-link to="/catering">CATERING</router-link></li>
        </ul>
      </div>
    </div>

    <div class="content">
      <router-view/>
    </div>

    <!--Footer-->
    <div class="footer">
      <p>© Jenna Atkinson, 2021</p>
      <a href="https://github.com/jsunshine321/260-creative-project-3">Git Hub Repository</a>
    </div>
  </div>
</template>

<script>

export default {
  data: () => {
    return {
      mobileView: false,
      showNav: false
    };
  },
  created() {
    window.addEventListener("resize", this.handleView);
    this.handleView();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleView);
  },
  methods: {
    handleView() {
      this.mobileView = (window.innerWidth <= 800);
    },
    toggleNav() {
      this.showNav = !this.showNav;
    }
  },
}
</script>

<style>
. {
  font-family: 'Montserrat', sans-serif;
}
/* Nav bar */
.menu-container {
  margin-left: 100px;
  font-family: 'Prata', serif;
}
/*End of Nav bar*/

#navigation-icon {
  cursor: pointer;
}
#navigation-icon img {
  width: 5%;
}
.table {
	display: table;   /* Allow the centering to work */
	margin: 0 auto;
}

ul#nav-list {
	min-width: 696px;
	list-style: none;
	padding-top: 20px;
}
ul#nav-list li {
  display: block;
}
ul.flexDisplay li {
	display: inline;
}
.jumbotron {
  margin-bottom: 0px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  text-align: center;
}
.large-image {
  width: 100%;
  height: auto;
  margin-top: 50px;
  margin-bottom: 50px;
}
h1, h2, h3, h4 {
  font-family: 'Prata', serif;
}
.break {
  flex-basis: 100%;
  height: 0;
}
.footer {
  padding-top: 20px;
  padding-bottom: 20px;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: #C2B8B1;
}
.footer a {
  color: white;
}

@media screen and (min-width: 400px) {
}

@media screen and (min-width: 768px) {
  /* Nav bar */
  .menu-container {
    position: static;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-left: 0px;
  }
  .navbar-brand {
    margin-left: 10px;
  }
  .nav-item {
    margin-left: 15px;
    margin-right: 15px;
  }
  .menu-container a {
    font-size: 13px;
    color: #fff;
    font-weight: 600;
  }

  .menu-container ul {
    display: inline-flex;
  }
  /* End of nav bar */
}
@media screen and (min-width: 800px) {
  .menu-container a {
    font-size: 15px;
  }
}
@media screen and (min-width: 1045px) {
  .nav-item {
    margin-left: 35px;
    margin-right: 35px;
  }
}
</style>
