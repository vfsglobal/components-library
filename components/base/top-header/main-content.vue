<template>
  <div class="main-content-wrapper">
    <div class="heading-button">
      <h3 class="big-heading">Button</h3>
      <h5 class="small-heading">Updated on <br><h4 class="heading-date">17/12/2018</h4></h5>
    </div>
    <div class="download-button">
      <h3 class="big-heading">Download</h3>
    </div>
  </div>
</template>
<style lang="scss">
@import "./assets/scss/globals/base";

header .main-content-wrapper {
  flex: 1;
  position: relative;
  padding: 0 20px;

  > .heading-button,
  .download-button {
    position: absolute;
    bottom: -10px;
    color: #fff;
    border-radius: 4px 4px 0 0;
    padding: $common_padding;
  }
  > .heading-button {
    background: $light_blue_color;
    display: flex;
    align-items: center;
    justify-content: center;

    & > .big-heading {
      float: left;
      font-size:35px;
      border-right: 2px solid $blue;
      padding-right: $common_padding;
    }
    & > .small-heading {
      padding-left: $common_padding;
      font-size:12px;
      float: left;

      &>.heading-date{
        margin-top:5px;
        font-weight: bold;
      }
    }
  }
  > .download-button {
    background: $orange;
    right: 20px;

    & > .big-heading {
      display: block;
      font-size:20px;
      cursor: pointer;
      
    }
  }
}
</style>
