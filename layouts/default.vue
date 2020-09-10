<template>
  <div id="app">
    <nuxt />
  </div>
</template>
<script>

export default {}
</script>
<style lang="scss">
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url('/assets/font/poppins.ttf') format('ttff'),
}

html {
  font-family: 'Poppins';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 8px;
}

.heading {
  color: #fff;
  letter-spacing: 1px;
}
.heading-2 {
  color: #625fe5;
  font-size: 24px;
  letter-spacing: 1px;
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 50px;
    background: #625fe5;
    height: 1px;
    bottom: 50px;
  }
}
.heading-3 {
  font-weight: 400;
}
.paragraph {
  display: block;
  font-weight: 400;
  letter-spacing: 1px;
}
.button {
  display: block;
  font-weight: 400;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 20px;
  background: #fff;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: #625fe5;
  margin: 20px auto 0 auto;
  &--dark {
    color: #fff;
    background: #625fe5;
  }
}
@media (max-width: 575.98px) {
  .heading-2 {
    text-align: center;
  }
}
</style>
