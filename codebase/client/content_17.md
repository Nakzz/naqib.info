/*
File: Naqib.info application Styles

/* This file contains the styling for the actual tepmlate, this
is the file you need to edit to change the look of the
tepmlate.

This files table contents are outlined below>>>>>

*******************************************
*******************************************

==== INDEX PAGE CSS 

** - Default CSS
** - Preloader CSS
** - Navbar CSS
** - Main Banner CSS
** - Boxes Area CSS
** - Services CSS
** - About CSS
** - Why Choose Us CSS
** - Crafting CSS
** - Our Work CSS
** - Portfolio CSS
** - Feedback CSS
** - How We Work CSS
** - Team CSS
** - CTA CSS
** - Features CSS
** - Our Skill CSS
** - Blog CSS
** - Our Partner CSS
** - Contact CTA CSS
** - Page Title CSS
** - Pagination CSS
** - Sidebar CSS
** - Blog Details CSS
** - Product Details CSS
** - Cart CSS
** - Checkout CSS
** - Contact CSS
** - Team Details CSS
** - Login CSS
** - Signup CSS
** - FAQ CSS
** - Coming Soon CSS
** - 404 Error CSS
** - Footer CSS
** - Go Top CSS
** - Animation CSS
** - Padding Stuff [aj]
*/

/*================================================
Default CSS
=================================================*/
@import url("https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i");

$font-family: "Rubik", sans-serif;
$paragraph-font-family: "Open Sans", sans-serif;
$template-color: #38d16a;
$pink-color: #f54ea2;
$blue-color: #151448;
$white-color: #ffffff;
$black-color: #121619;
$paragraph-color: #6084a4;
$bg-gray: #f9f9f9;
$transition: 0.5s;
$font-size: 15px;

body {
  font-family: $font-family;
  padding: 0;
  margin: 0;
  font-size: $font-size;
}
img {
  max-width: 50%;
}
a {
  color: $black-color;
  display: inline-block;
  transition: $transition;
  text-decoration: none;
  outline: 0 !important;

  &:hover,
  &:focus {
    color: $template-color;
    text-decoration: none;
  }
}
.d-table {
  width: 100%;
  height: 100%;

  &-cell {
    vertical-align: middle;
  }
}
button {
  outline: 0 !important;
}
p {
  color: $paragraph-color;
  line-height: 1.8;
  font: {
    weight: 400;
    family: $paragraph-font-family;
  }

  &:last-child {
    margin-bottom: 0;
  }
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  color: $black-color;
  font-weight: 500;
}
.ptb-120 {
  padding: {
    top: 120px;
    bottom: 120px;
  }
}
.ptb-80 {
  padding: {
    top: 80px;
    bottom: 80px;
  }
}
.pt-120 {
  padding-top: 120px;
}
.ptb-50 {
  padding: {
    top: 50px;
    bottom: 50px;
  }
}
.bg-38d16a {
  background-color: $template-color;
}
.bg-08071c {
  background-color: #08071c;
}
.bg-gray {
  background-color: $bg-gray;
}
.bg-f8f9fe {
  background-color: #f8f9fe;
}

/*btn btn-primary*/
.btn {
  font: {
    weight: 500;
    size: $font-size;
  }
  color: $white-color;
  border: none;
  padding: 14px 33px;
  border-radius: 0;
  transition: $transition;
}
.btn-primary {
  color: $white-color;
  background: $pink-color;
  position: relative;
  z-index: 1000;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 51%;
    background: $template-color;
    height: 100%;
    z-index: -1;
    transition: $transition;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
  &:hover::before,
  &:hover::after,
  &:focus::before,
  &:focus::after {
    width: 0;
  }
  &.focus,
  &:focus {
    box-shadow: 0 13px 27px 0 rgba(245, 78, 162, 0.25);
    color: $white-color;
  }
  &:hover,
  &:focus {
    background: $blue-color;
    color: $white-color;
    box-shadow: 0 13px 27px 0 rgba(245, 78, 162, 0.25);
  }
  &:not(:disabled):not(.disabled).active:focus,
  &:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 13px 27px 0 rgba(245, 78, 162, 0.25);
  }
  &:not(:disabled):not(.disabled).active,
  &:not(:disabled):not(.disabled):active {
    background: $pink-color;
    color: $white-color;
  }
  &.disabled,
  &:disabled {
    opacity: 1;
    background: $pink-color;
  }
}

/*section title*/
.section-title {
  text-align: center;
  margin-bottom: 60px;
  span {
    color: $template-color;
    display: block;
    text-transform: uppercase;
    font-size: $font-size;
    margin-bottom: 10px;
    margin-top: -5px;
  }
  h2 {
    font-size: 35px;
    margin: 0 auto;
    text-transform: capitalize;
    max-width: 630px;
    font-weight: 600;
    line-height: 1.3;

    span {
      color: $template-color;
      display: block;
      text-transform: uppercase;
      margin-bottom: 15px;
      margin-top: -5px;
      font-size: 20px;
    }
  }
}

/*form control*/
.form-control {
  height: 45px;
  padding: 8px 15px;
  font-size: 14px;
  border: 1px solid #eeeeee;
  border-radius: 2px;
  color: #818992;
  transition: $transition;

  &:hover,
  &:focus {
    box-shadow: unset;
  }
  &:focus {
    border-color: $template-color;
  }
  &::placeholder {
    color: $paragraph-color;
  }
}

/*owl carousel btn*/
.owl-carousel {
  &.owl-theme {
    .owl-dots {
      position: absolute;
      margin-top: -25px !important;
      right: 15px;
      text-align: center;
      top: 50%;

      .owl-dot {
        display: block;

        span {
          width: 16px;
          height: 16px;
          background: transparent;
          border-radius: 0;
          border: 2px solid #6084a4;
          margin: 3px 0;
          transition: $transition;
          text-align: center;
          position: relative;

          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            width: 6px;
            border-radius: 50%;
            height: 6px;
            right: 0;
            margin: -3px auto 0;
            background: $white-color;
            opacity: 0;
            visibility: hidden;
            transition: $transition;
          }
        }
        &.active,
        &:hover {
          span {
            background: $template-color;
            border-color: $template-color;

            &::before {
              opacity: 1;
              visibility: visible;
            }
          }
        }
      }
    }
    .owl-nav {
      margin-top: 0;
      line-height: 0.01;

      [class*="owl-"] {
        color: $black-color;
        font-size: 25px;
        margin: -25px 0 0;
        background: $white-color;
        border-radius: 50%;
        position: absolute;
        left: 15px;
        top: 50%;
        width: 55px;
        height: 55px;
        line-height: 51px;
        transition: $transition;

        &:hover {
          color: $white-color;
          background: $template-color;
        }
        &.owl-next {
          left: auto;
          right: 15px;
        }
      }
    }
  }
}

/*================================================
Preloader CSS
=================================================*/
.preloader {
  background: $template-color;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999999;
  text-align: center;
  .loader {
    background-color: #fff;
    width: 5px;
    height: 5px;
    border-radius: 50px;
    position: relative;
    top: calc(50% - 2.5px);
    left: calc(50% - 2.5px);

    &:before,
    &:after {
      content: "";
      background: linear-gradient(
        45deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3),
        transparent
      );
      width: 50px;
      height: 50px;
      border-top: 3px solid #fff;
      border-right: 3px solid #fff;
      border-radius: 0 50px 0px 0;
      transform-origin: 0% 100%;
      position: absolute;
      top: -47px;
      animation: loader 1s linear infinite;
    }

    &:after {
      border-top: none;
      border-right: none;
      border-bottom: 3px solid #fff;
      border-left: 3px solid #fff;
      border-radius: 0 0px 0px 50px;
      transform-origin: 100% 0%;
      top: 2px;
      right: 2px;
    }
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

/*================================================
Navbar CSS
=================================================*/
.artflex-mobile-nav {
  display: none;

  &.mean-container {
    .mean-nav {
      ul {
        li {
          a {
            &.active {
              color: $template-color;
            }
          }
        }
      }
    }
  }
}
.artflex-nav {
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 15px;
  width: 100%;
  z-index: 999;
  height: 10vh;

  nav {
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    .navbar-nav {
      .nav-item {
        position: relative;
        padding: 15px 1%;

        a {
          font: {
            weight: 500;
            size: 14px;
          }
          color: $black-color;
          padding: {
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
          }
          margin: {
            left: 13px;
            right: 13px;
          }

          &:hover,
          &:focus,
          &.active {
            color: $template-color;
          }
        }
        &:hover {
          a {
            color: $template-color;
          }
        }
        .dropdown_menu {
          box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.05);
          background: $black-color;
          position: absolute;
          top: 80px;
          left: 0;
          width: 250px;
          z-index: 99;
          padding: {
            top: 20px;
            left: 5px;
            right: 5px;
            bottom: 20px;
          }
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease-in-out;

          li {
            position: relative;
            padding: 0;

            a {
              font: {
                size: 14px;
                weight: 500;
              }
              padding: 9px 15px;
              margin: 0;
              display: block;
              color: $white-color;

              &:hover,
              &:focus,
              &.active {
                color: $template-color;
              }
            }
            .dropdown_menu {
              position: absolute;
              left: 100%;
              top: 0;
              opacity: 0 !important;
              visibility: hidden !important;

              li {
                a {
                  color: $white-color;

                  &:hover,
                  &:focus,
                  &.active {
                    color: $template-color;
                  }
                }
              }
            }
            &:hover {
              .dropdown_menu {
                opacity: 1 !important;
                visibility: visible !important;
                top: -20px !important;
              }
              a {
                color: $template-color;
              }
            }
          }
        }
        &:hover {
          ul {
            opacity: 1;
            visibility: visible;
            top: 100%;
          }
        }
      }
    }
    .others-option {
      margin-left: 10px;

      ul {
        li {
          display: inline-block;

          .search-popup-icon {
            color: $black-color;
            cursor: pointer;
            transition: $transition;
            font-size: 18px;

            &:hover {
              color: $template-color;
            }
          }
          a.cart-icon {
            font-size: 20px;
            margin: 0 22px 0 20px;
            position: relative;

            span {
              font-size: 11px;
              font-size: 10px;
              background: red;
              color: $white-color;
              width: 17px;
              display: inline-block;
              text-align: center;
              height: 17px;
              border-radius: 50%;
              line-height: 18.5px;
              position: absolute;
              top: -4px;
              font-weight: 600;
              right: -9px;
            }
          }
          .side-menu {
            cursor: pointer;
            position: relative;
            width: 32px;

            .bar-1 {
              &::before,
              &::after {
                position: absolute;
                bottom: -3px;
                width: 6px;
                height: 12px;
                background: $black-color;
                content: "";
                left: 0;
                transition: $transition;
              }
              &::after {
                top: -20px;
                height: 9px;
              }
            }
            .bar-2 {
              &::before,
              &::after {
                position: absolute;
                bottom: -3px;
                width: 6px;
                height: 9px;
                background: $black-color;
                content: "";
                left: 8px;
                transition: $transition;
              }
              &::after {
                top: -20px;
                height: 12px;
              }
            }
            .bar-3 {
              &::before,
              &::after {
                position: absolute;
                bottom: -3px;
                width: 6px;
                height: 12px;
                background: $black-color;
                content: "";
                left: 16px;
                transition: $transition;
              }
              &::after {
                top: -20px;
                height: 9px;
              }
            }
            &:hover {
              .bar-1 {
                &::before,
                &::after {
                  height: 14px;
                  background: $template-color;
                }
                &::after {
                  height: 10px;
                  background: $pink-color;
                }
              }
              .bar-2 {
                &::before,
                &::after {
                  height: 10px;
                }
                &::after {
                  height: 14px;
                }
              }
              .bar-3 {
                &::before,
                &::after {
                  height: 14px;
                  background: $pink-color;
                }
                &::after {
                  height: 10px;
                  background: $template-color;
                }
              }
            }
          }
        }
      }
    }
  }
  &.p-relative {
    position: relative;
    padding-top: 0;
  }
  &.is-sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 5px 0;
    z-index: 999;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
    background-color: $white-color !important;
    animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
  }
}
.searchBoxTop {
  position: fixed;
  z-index: 9999;
  top: -170px;
  left: 0;
  width: 100%;
  background-color: $white-color;
  border-bottom: 3px solid $template-color;
  box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.15);
  visibility: hidden;
  opacity: 0;
  filter: alpha(opacity=0);
  transition: $transition;

  &.active {
    top: 0;
    visibility: visible;
    opacity: 1;
    filter: alpha(opacity=100);
  }
  .seachBoxContainer {
    padding: 25px 0;
  }
  form {
    position: relative;

    .form-control {
      height: 50px;
      padding-left: 20px;
    }
    button {
      &[type="submit"] {
        border: 1px solid $pink-color;
        color: $white-color;
        background-color: $pink-color;
        padding: 0 30px;
        display: inline-block;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        transition: $transition;

        &:hover {
          background: $template-color;
          border-color: $template-color;
        }
      }
    }
  }
  .searchClose {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 60px;
    width: 50px;
    height: 50px;
    margin-top: -26px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 4px;
      left: 47%;
      margin-top: -30/2;
      margin-left: -3/2;
      display: block;
      height: 40px;
      width: 3px;
      background-color: $black-color;
      transform: rotate(-45deg);
      transition: $transition;
    }
    &::after {
      transform: rotate(-135deg);
    }
    &:hover::before,
    &:hover::after,
    &:focus::before,
    &:focus::after {
      background-color: $template-color;
    }
  }
}
.sidebar-modal {
  position: relative;

  .modal.right {
    .modal-dialog {
      position: fixed;
      margin: auto;
      width: 350px;
      height: 100%;
      transform: translate3d(0%, 0, 0);
    }
    &.fade.show {
      .modal-dialog {
        right: 0;
        transition: $transition;
      }
    }
    &.fade {
      .modal-dialog {
        right: -320px;
        transition: $transition;
      }
    }
    .modal-content {
      height: 100%;
      overflow-y: auto;
      border-radius: 0;
      border: none;
    }
    .modal-body {
      padding: 30px;

      .sidebar-modal-widget {
        margin-bottom: 35px;

        .title {
          font: {
            size: 18px;
          }
          margin-bottom: 20px;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
        }
        &:last-child {
          margin-bottom: 0;
        }
        ul {
          padding: 0;
          margin: 0;
          list-style-type: none;

          li {
            margin-bottom: 10px;

            &:last-child {
              margin-bottom: 0;
            }
            a {
              color: $paragraph-color;

              &:hover {
                color: $template-color;
              }
            }
          }
          &.contact-info {
            li {
              position: relative;
              font: {
                weight: 500;
                size: 14px;
              }
              padding-left: 50px;
              margin-bottom: 18px;

              i {
                position: absolute;
                left: 0;
                top: 0;
                background: #f4f4f4 none repeat scroll 0 0;
                border: 1px solid #e7e7e7;
                border-radius: 30px;
                color: $template_color;
                height: 36px;
                text-align: center;
                width: 36px;
                line-height: 36px;
                font-size: 17px;
                transition: $transition;
              }
              span {
                display: block;
                font: {
                  weight: 400;
                }
                color: $paragraph-color;
                margin-top: 5px;
                text-transform: initial;
              }
              &:hover {
                i {
                  color: $white-color;
                  border-color: $white-color;
                  background: $template-color;
                }
              }
              &:last-child {
                margin-bottom: 0;
              }
            }
          }
          &.social-list {
            li {
              display: inline-block;
              margin-bottom: 0;
              margin-right: 5px;

              a {
                width: 32px;
                height: 32px;
                line-height: 32px;
                font-size: 14px;
                text-align: center;
                border-radius: 50%;
                color: $paragraph-color;
                border: 1px solid $paragraph-color;

                &:hover,
                &:focus {
                  color: $white-color;
                  background: $template-color;
                  border-color: $template-color;
                }
              }
            }
          }
        }
        .modal-search-form {
          position: relative;

          button {
            position: absolute;
            right: 0;
            top: 0;
            color: $white-color;
            border: none;
            height: 100%;
            padding: 0 25px;
            background: $template-color;
            transition: $transition;

            &:hover {
              background: $pink-color;
            }
          }
        }
      }
    }
  }
  .modal-header {
    display: inline;
    padding: 0;
    border: none;

    .close {
      height: 40px;
      width: 40px;
      background: $template-color;
      font-size: 25px;
      color: $white-color;
      margin: 0px;
      padding: 0px;
      cursor: pointer;
      transition: $transition;
      border: none;
      opacity: 1;

      &:hover {
        background: $template-color;
        color: $white_color;
        transition: $transition;
        opacity: 1;
      }
    }
    h2 {
      background: linear-gradient(142deg, #3ec9cf 0%, #2d136a 100%);
      padding: 30px 25px;
    }
  }
  button {
    &:focus {
      outline: 0;
    }
  }
}

/*================================================
Main Banner CSS
=================================================*/
.main-banner {
  background-color: $white-color;
  position: relative;
  z-index: 1;
  height: 810px;
  // display: flex;
}

.digital-agency-banner {
  // background-image: url("./../../images/home/header_bg.jpg");
  background-image: url("./../../images/bg-shape.jpg");
  background-position: center center;
  background-size: cover;
  position: relative;
  animation: oscillate 5s ease-in-out infinite;

}

.digital-agency-banner_notBrowser {
  //   background-image: url("./../../images/home/header_2.jpg");
  background-image: url("./../../images/bg-shape.jpg");

  background-position: center center;
  background-size: cover;
  position: relative;
}

.parallax_banner {
  position: relative;
  z-index: 1;
  height: 100%;
  overflow: hidden;
  pointer-events: auto;

  .imgHolder {
    position: relative;
    top: 15%;
    width: 35%; /* adjust this as needed */
    margin-left: 50% !important;
    margin-top: 5%;
  }

  img {
    position: relative;
    max-width: 100%;
    height: auto;
  }
  //   img {
  //     // position: relative;
  //     position: absolute !important;
  //     bottom: 0 !important;
  //     max-width: 100%;
  //     height: auto;
  //   }
}
h1 {
  font-size: 8vw;
}
h3 {
  font-size: 3vw;
}
h4 {
  font-size: 2vw;
  color: #6084a447;
}

.w-150 {
  width: 150px;
}
.hero-content {
  margin-top: 35px;

  h1 {
    font: {
      size: 65px;
      weight: 700;
    }
    text-transform: capitalize;
    margin-bottom: 0;
  }
  p {
    margin: {
      bottom: 30px;
      top: 25px;
    }
  }
  ul {
    padding: 0;
    margin: 20px 0 0;
    list-style-type: none;

    li {
      display: inline-block;
      margin-right: 5px;

      a {
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        border: 1px solid #eeeeee;
        border-radius: 50%;

        &.facebook {
          border-color: #4267b2;
          color: #4267b2;

          &:hover {
            background: #4267b2;
            border-color: #4267b2;
          }
        }
        &.twitter {
          border-color: #38a1f3;
          color: #38a1f3;

          &:hover {
            background: #38a1f3;
            border-color: #38a1f3;
          }
        }
        &.behance {
          border-color: #053eff;
          color: #053eff;

          &:hover {
            background: #053eff;
            border-color: #053eff;
          }
        }
        &.dribbble {
          border-color: #ea4c89;
          color: #ea4c89;

          &:hover {
            background: #ea4c89;
            border-color: #ea4c89;
          }
        }
        &.pinterest {
          border-color: #c8232c;
          color: #c8232c;

          &:hover {
            background: #c8232c;
            border-color: #c8232c;
          }
        }
        &:hover {
          color: $white-color;
          background: $template-color;
          border-color: $template-color;
        }
      }
    }
  }
}
.banner-image {
  text-align: right;

  img {
    position: relative;
    top: 74px;
    right: 0;
  }
}
.banner-social-buttons {
  position: absolute;
  left: 30px;
  top: 50%;
  transform-origin: 50% 50%;
  transform: translate(-50%, -50%) rotate(90deg);

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      display: inline-block;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
      a {
        color: $paragraph-color;

        i {
          width: 30px;
          height: 30px;
          line-height: 30px;
          border: 1px solid $paragraph-color;
          display: inline-block;
          text-align: center;
          margin-right: 10px;
          border-radius: 50%;
        }
        &:hover {
          color: $template-color;
        }
      }
    }
  }
}
#scroll-down {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding-top: 50px;
  display: block;
  text-align: center;

  .arrow-down {
    display: block;
    margin: 0 auto;
    width: 10px;
    height: 20px;

    &::after {
      content: "";
      display: block;
      margin: 0;
      padding: 0;
      width: 8px;
      height: 8px;
      border: {
        top: 2px solid $template-color;
        right: 2px solid $template-color;
      }
      transform: rotate(135deg);
    }
    &::before {
      animation: elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -2px;
      width: 2px;
      height: 58px;
      background: $template-color;
      content: " ";
    }
  }
  #scroll-title {
    display: block;
    color: $pink-color;
    font-weight: 500;
    text-transform: capitalize;
  }
}
@keyframes elasticus {
  0% {
    transform-origin: 0% 0%;
    transform: scale(1, 0);
  }
  50% {
    transform-origin: 0% 0%;
    transform: scale(1, 1);
  }
  50.1% {
    transform-origin: 0% 100%;
    transform: scale(1, 1);
  }
  100% {
    transform-origin: 0% 100%;
    transform: scale(1, 0);
  }
}
.startup-agency-home {
  .main-banner {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      background: $white-color;
      width: 100%;
      height: 100%;
      opacity: 0.88;
      z-index: -1;
    }
    &::after {
      position: absolute;
      z-index: -2;
      content: "";
      width: 100%;
      height: 100%;
      background-image: url(../../images/dot.png);
      left: 0;
      top: 0;
    }
    .hero-content {
      position: relative;
      margin: {
        left: -115px;
        top: 0;
      }

      h1 {
        margin-bottom: 35px;
      }
    }
  }
}
.freelancer-portfolio-home {
  .banner-image {
    text-align: left;

    img {
      top: 33px;
      left: 0;
    }
  }
  .hero-content {
    h1 {
      text-transform: uppercase;
    }
  }
  .circle-shape1 {
    right: auto;
    left: 15%;
    bottom: 20%;
  }
  .circle-shape2 {
    left: 8%;
    right: auto;
  }
  .circle-shape3 {
    right: auto;
    left: 13%;
  }
  .shape4 {
    left: 50%;
    top: 17%;
  }
  .shape8 {
    left: 70%;
  }
  .shape9 {
    left: 54%;
  }
}
.agency-portfolio-home {
  .main-banner {
    height: 100%;
    padding: {
      top: 250px;
      bottom: 190px;
    }
    .hero-content {
      text-align: center;
      max-width: 720px;
      margin: 0 auto;

      h1 {
        font-size: 75px;
      }
    }
  }
}
/* creative-blog-home */
.blog-home-slides {
  .col-lg-12 {
    padding: 0 3px 0;
  }
  &.owl-carousel {
    &.owl-theme {
      .owl-nav {
        [class*="owl-"] {
          opacity: 0;
          visibility: hidden;
        }
        .owl-prev {
          left: 0;
        }
        .owl-next {
          right: 0;
        }
      }
    }
  }
  &:hover {
    &.owl-carousel {
      &.owl-theme {
        .owl-nav {
          [class*="owl-"] {
            opacity: 1;
            visibility: visible;
          }
          .owl-prev {
            left: 20px;
          }
          .owl-next {
            right: 20px;
          }
        }
      }
    }
  }
}
.single-blog-box {
  position: relative;

  .blog-image {
    a {
      display: block;
    }
  }
  .blog-post-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9));
    padding: 30px;

    div.tags {
      a {
        background: $template-color;
        color: $white-color;
        padding: 6px 15px;
      }
    }
    h3 {
      margin: 15px 0;
      font-size: 25px;
      line-height: 32px;

      a {
        color: $white-color;

        &:hover {
          color: $template-color;
        }
      }
    }

    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;

      li {
        display: inline-block;
        margin-right: 8px;
        color: $white-color;
        font-size: 14px;

        i {
          margin-right: 4px;
        }
        a {
          color: $template-color;
        }
        &:last-child {
          margin: 0;
        }
      }
    }
  }
  &:hover {
    .blog-post-content {
      div.tags {
        a {
          background: $pink-color;
        }
      }
    }
  }
}
/* creative-blog-home */

// .item-bg1 {
// 	background-image: url(../../images/main-bg-1.jpg);
// }
// // .item-bg2 {
// // 	background-image: url(../../images/main-bg-2.jpg);
// // }
// .item-bg3 {
// 	background-image: url(../../images/main-bg-3.jpg);
// }
// .item-bg4 {
// 	background-image: url(../../images/main-bg-4.jpg);
// }
// .item-bg5 {
// 	background-image: url(../../images/main-bg-5.jpg);
// }
// .item-bg6 {
// 	background-image: url(../../images/main-bg-6.jpg);
// }
.shape1 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.shape2 {
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}
.shape3 {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
}
.shape4 {
  position: absolute;
  left: 34%;
  top: 20%;
  width: 60px;
  animation: movebounce 4s linear infinite;
  z-index: -1;
}
.shape5 {
  position: absolute;
  right: 14%;
  animation: rotate3d 4s linear infinite;
  z-index: -1;
  top: 18%;
}
.shape6 {
  position: absolute;
  left: 3%;
  top: 50%;
  z-index: -1;
  animation: rotate3d 4s linear infinite;
}
.shape7 {
  position: absolute;
  z-index: -1;
  right: 7%;
  top: 34%;
  animation: moveleftbounce 3s linear infinite;
}
.shape8 {
  position: absolute;
  bottom: 4%;
  left: 30%;
  z-index: -1;
  animation: movebounce 3s linear infinite;
}
.shape9 {
  position: absolute;
  bottom: 10%;
  left: 15%;
  z-index: -1;
}
.shape10 {
  position: absolute;
  bottom: 7%;
  right: 4%;
  z-index: -1;
}
.circle-shape1 {
  position: absolute;
  bottom: 25%;
  right: 16%;
  z-index: -1;
  animation: movebounce 3s linear infinite;
}
.circle-shape2 {
  position: absolute;
  right: 13%;
  bottom: 0;
  z-index: -1;
  animation: moveleftbounce 3s linear infinite;
}
.circle-shape3 {
  z-index: -1;
  position: absolute;
  right: 7%;
  bottom: 0;
  animation: moveleftbounce 3s linear infinite;
}
@keyframes movebounce {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes moveleftbounce {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0px);
  }
}
.rotateme {
  animation-name: rotateme;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes rotateme {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes rotate3d {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  100% {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
}

/*================================================
Boxes Area CSS
=================================================*/
.boxes-area {
  position: relative;
  overflow: hidden;
  z-index: 1;

  .single-box {
    text-align: center;
    padding: {
      top: 120px;
      bottom: 120px;
      left: 30px;
      right: 30px;
    }

    .icon {
      font-size: 50px;
      color: $white-color;
    }
    h3 {
      font-size: 22px;
      margin: {
        top: 15px;
        bottom: 15px;
      }
      color: $white-color;
    }
    p {
      color: $white-color;
    }
    &.black-color {
      .icon {
        color: $template-color;
      }
      h3 {
        color: $black-color;
      }
      p {
        color: $black-color;
      }
    }
  }
  &::before,
  &::after {
    position: absolute;
    top: 0;
    width: 37%;
    height: 100%;
    content: "";
    z-index: -2;
  }
  &::before {
    left: 0;
    background: #08071c;
  }
  &::after {
    right: 0;
    background: $template-color;
  }
}

/*================================================
Services CSS
=================================================*/
.welcome-services {
  &.bg-38d16a {
    .section-title {
      span,
      h2 {
        color: $white-color;
      }
    }
  }
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
}
.services-area {
  padding-bottom: 90px;
  position: relative;
  z-index: 1;

  .single-services {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  }
}
.single-services {
  text-align: center;
  margin-bottom: 30px;
  padding: 40px 25px;
  background: $white-color;
  transition: $transition;

  .icon {
    font-size: 25px;
    width: 55px;
    height: 55px;
    line-height: 55px;
    background: $template-color;
    color: $white-color;
    border-radius: 50%;
    display: inline-block;
    border: 1px solid $template-color;
    transition: $transition;
  }
  h3 {
    font-size: 22px;
    margin: {
      top: 25px;
      bottom: 10px;
    }
  }

  p {
    margin-bottom: -5px;
  }
  &:hover {
    transform: translateY(-7px);

    .icon {
      background: transparent;
      color: $template-color;
    }
  }
}
.single-services-box {
  background: $white-color;
  padding: 30px;
  transition: $transition;
  margin-bottom: 30px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);

  .icon {
    font-size: 50px;
    transition: $transition;
    color: $blue-color;
    line-height: 1;
  }
  h3 {
    font-size: 20px;
    margin: {
      top: 20px;
      bottom: 10px;
    }
    transition: $transition;
  }

  h5 {
    font-size: 18px !important;
    font-weight: 400 !important;
    margin: {
      left: 5px;
      top: 15px;
      bottom: 10px;
    }
    transition: $transition;
  }

  p {
    transition: $transition;
  }
  &:hover {
    box-shadow: 0 0 28px 0 rgba(6, 74, 255, 0.22);
    background: $template-color;

    .icon,
    h3,
    h5,
    span,
    p {
      color: $white-color;
    }
  }
}
.more-services-btn {
  text-align: center;
  margin-top: 30px;

  .btn-primary {
    color: $template-color;
    background: $pink-color;

    &::before,
    &::after {
      background: $white-color;
    }
    &:hover,
    &:focus {
      color: $white-color;
    }
  }
}
.services-slides {
  &.owl-carousel {
    &.owl-theme {
      .owl-dots {
        position: relative;
        margin: {
          top: 20px !important;
          bottom: 30px;
        }
        right: 0;
        text-align: center;
        top: 0;
        line-height: 0.01;

        .owl-dot {
          display: inline-block;

          span {
            margin: 0 5px;
          }
        }
      }
    }
  }
}
.circle-top {
  position: absolute;
  top: -259px;
  z-index: -1;
  left: -262px;
}
.circle-bottom {
  position: absolute;
  bottom: -259px;
  z-index: -1;
  right: -262px;
}
.services-box {
  margin-bottom: 30px;

  .services-content {
    margin: {
      left: 10px;
      right: 10px;
    }
    position: relative;
    padding: 30px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
    margin-top: -20px;
    background: $white-color;

    h3 {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
}

/*================================================
About CSS
=================================================*/
.about-area {
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.about-content {
  .section-title {
    text-align: left;
    margin-bottom: 20px;
  }
  h2 {
    margin-left: 0;
  }
  p {
    margin-bottom: 15px;
  }
  .btn {
    margin-top: 15px;
  }
}
.about-image {
  position: relative;
  z-index: 1;
  text-align: right;

  &::before {
    content: "";
    position: absolute;
    right: -52px;
    top: 30px;
    width: 100%;
    height: 91%;
    background: $black-color;
    z-index: -1;
    transition: $transition;
  }
  img {
    width: 80%;
  }
  &:hover {
    &::before {
      top: 0;
      width: 50%;
      height: 100%;
    }
  }
}
.about-us-content {
  .section-title {
    margin-bottom: 2px;
    text-align: left;

    h2 {
      margin-left: 0;
    }
  }
  p {
    margin: {
      top: 18px;
      bottom: 0;
    }
  }
  .single-about-box {
    margin-top: 20px;

    .icon {
      font-size: 40px;
      color: $template-color;
    }
    h3 {
      font-size: 22px;
      margin: {
        top: 15px;
        bottom: 10px;
      }
    }
    p {
      margin: 0;
    }
  }
}
.cta-about {
  overflow: hidden;
  position: relative;
  z-index: 1;
  background-color: $white-color;
}
.cta-about-image {
  background: {
    image: url(../../images/blog-home-image/WED-37.jpg);
    position: center center;
    size: cover;
    repeat: no-repeat;
  }
  width: 100%;
  height: 100%;

  img {
    display: none;
  }
}
.cta-about-content {
  max-width: 700px;
  margin-left: 15px;

  .section-title {
    margin-bottom: 20px;
    text-align: left;

    h2 {
      margin: {
        left: 0;
      }
    }
  }
  .btn {
    margin-top: 15px;
  }
}

/*================================================
Why Choose Us CSS
=================================================*/
.why-choose-us-area {
  position: relative;
  overflow: hidden;
  z-index: 1;
  .align-items-center {
    &:hover {
      .why-choose-us-img {
        .front-img {
          top: 15px;
        }
        .back-img {
          left: 30px;
        }
      }
    }
  }
}
.why-choose-us-img {
  margin-bottom: 35px;

  .front-img {
    position: relative;
    z-index: 1;
    top: 35px;
    left: 35px;
    transition: $transition;
  }
  .back-img {
    position: absolute;
    left: 15px;
    top: 0;
    transition: $transition;
  }
}
.why-choose-us-content {
  .section-title {
    margin-bottom: 20px;
    text-align: left;

    h2 {
      margin: {
        left: 0;
      }
    }
  }
  .btn {
    margin-top: 20px;
  }
}
.why-choose-inner-area {
  margin-top: 100px;

  .section-title {
    h2 {
      text-transform: initial;
      max-width: 660px;
    }
  }
  .single-box {
    text-align: center;
    background: $white-color;
    box-shadow: 0 -2px 20px 0 rgba(0, 0, 0, 0.06);
    padding: 25px;
    transition: $transition;

    .icon {
      font-size: 40px;
      color: $template-color;
      transition: $transition;
    }
    h3 {
      font-size: 22px;
      margin: {
        top: 15px;
        bottom: 15px;
      }
    }
    &:hover {
      transform: translateY(-7px);

      .icon {
        color: $pink-color;
      }
    }
  }
}
.circle-dot {
  position: absolute;
  top: 80px;
  left: -45px;
  z-index: -1000;
}

/*================================================
Crafting CSS
=================================================*/
.crafting-area {
  position: relative;
  z-index: 1;
}
.crafting-content {
  .single-item {
    text-align: center;
    width: 250px;
    padding: 45px 10px;
    border-radius: 5px;
    position: absolute;

    &.item-one {
      background-image: linear-gradient(40deg, #e87e16 0, #f0de14 100%);
      box-shadow: 0 20px 40px 0 rgba(224, 149, 32, 0.4);
      right: 65px;
      top: -170px;
      z-index: 1;
      animation: movebounce 5s linear infinite;
    }
    &.item-two {
      background-image: linear-gradient(40deg, #13c4a1 0, #41cbb0 100%);
      box-shadow: 0 20px 40px 0 rgba(19, 196, 161, 0.4);
      left: 20px;
      top: 0;
      animation: movebounce 4s linear infinite;
    }
    &.item-three {
      background-image: linear-gradient(40deg, #008000 0, #268b26 100%);
      box-shadow: 0 20px 40px 0 rgba(0, 128, 0, 0.4);
      left: 0;
      bottom: 0;
      animation: movebounce 6s linear infinite;
    }
    &.item-four {
      background-image: linear-gradient(40deg, #ff8a73 0, #f89b88 100%);
      box-shadow: 0 20px 40px 0 rgba(255, 138, 115, 0.4);
      right: 35px;
      top: 0;
      animation: movebounce 3s linear infinite;
    }
    i {
      font-size: 40px;
      color: $white-color;
    }
    h6 {
      font: {
        size: 18px;
      }
      text-transform: capitalize;
      color: $white-color;
      margin: {
        top: 15px;
        bottom: 0;
      }
    }
  }
}
.crafting-image {
  position: relative;
  text-align: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $black-color;
    opacity: 0.77;
    z-index: 1;
  }
  img {
    transition: $transition;
  }
  .video-btn {
    position: absolute;
    left: 50%;
    margin-left: -25px;
    top: 50%;
    color: $white-color;
    font-size: 30px;
    margin-top: -45px;
    width: 85px;
    height: 85px;
    line-height: 87px;
    border-radius: 50%;
    background: $template-color;
    z-index: 2;
    animation: ripple-white 1s linear infinite;
  }
  &:hover {
    img {
      transform: scale(1.3);
    }
    .video-btn {
      background: $pink-color;
    }
  }
}
@keyframes ripple-white {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2),
      0 0 0 20px rgba(255, 255, 255, 0.2), 0 0 0 40px rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2),
      0 0 0 20px rgba(255, 255, 255, 0.2), 0 0 0 40px rgba(255, 255, 255, 0.2);
  }
  100% {
    -webkit-box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.2),
      0 0 0 40px rgba(255, 255, 255, 0.2), 0 0 0 60px rgba(255, 255, 255, 0);
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.2),
      0 0 0 40px rgba(255, 255, 255, 0.2), 0 0 0 60px rgba(255, 255, 255, 0);
  }
}

/*================================================
Our Work CSS
=================================================*/
.works-area {
  position: relative;
  z-index: 1;

  &.bg-08071c {
    .section-title {
      h2 {
        color: $white-color;
      }
    }
  }
}
.single-work {
  position: relative;
  text-align: center;
  overflow: hidden;
  transition: $transition;
  margin-bottom: 30px;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $black-color;
    content: "";
    opacity: 0;
    visibility: hidden;
    transition: $transition;
  }
  .works-content {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: -140px auto 0;
    padding: 0 10px;
    transition: $transition;
    opacity: 0;
    visibility: hidden;

    p {
      color: $white-color;
      max-width: 520px;
      margin: 0 auto;
    }
    h3 {
      font-size: 22px;
      margin-bottom: 15px;

      a {
        color: $white-color;

        &:hover {
          color: $template-color;
        }
      }
    }
  }
  .link-btn {
    position: absolute;
    left: 25px;
    bottom: 0;
    font-size: 20px;
    color: $white-color;
    opacity: 0;
    visibility: hidden;

    &:hover {
      color: $template-color;
    }
  }
  .popup-btn {
    position: absolute;
    right: 0;
    bottom: 25px;
    font-size: 20px;
    color: $white-color;
    opacity: 0;
    visibility: hidden;

    &:hover {
      color: $template-color;
    }
  }
  &:hover {
    &::before {
      visibility: visible;
      opacity: 0.92;
    }
    .works-content {
      margin-top: -60px;
      visibility: visible;
      opacity: 1;
    }
    .link-btn {
      opacity: 1;
      visibility: visible;
      bottom: 25px;
    }
    .popup-btn {
      opacity: 1;
      right: 25px;
      visibility: visible;
    }
  }
}
.shape11 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  animation: movebounce 4s linear infinite;
}
.shape12 {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  animation: movebounce 4s linear infinite;
}

/*================================================
Portfolio CSS
=================================================*/
.portfolio-area {
  .section-title {
    h2 {
      color: $white-color;
    }
  }
}
.portfolio-item {
  position: relative;
  overflow: hidden;

  img {
    transition: $transition;
  }
  .portfolio-content {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
    width: 100%;
    height: auto;
    opacity: 0;
    visibility: hidden;
    transition: $transition;

    h3 {
      font-size: 22px;
      margin: {
        bottom: 15px;
        left: -20px;
      }
      position: relative;
      transition: $transition;
    }
    span {
      font-size: 14px;
      text-transform: uppercase;
      position: relative;
      display: block;
      transition: $transition;
      margin-left: 20px;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50%;
      height: 100%;
      background: $white-color;
      opacity: 0;
      visibility: hidden;
      transition: $transition;
    }
  }
  &:hover {
    .portfolio-content {
      opacity: 1;
      visibility: visible;

      &::before {
        width: 100%;
        opacity: 1;
        visibility: visible;
      }
      h3 {
        margin-left: 0;
      }
      span {
        margin-left: 0;
      }
    }
    img {
      transform: scale(1.3);
    }
  }
}
.grid {
  max-width: 100%;

  .item {
    display: block;
    padding: 1px;
    opacity: 1;
  }
}

/*================================================
Feedback CSS
=================================================*/
.feedback-area {
  position: relative;
  z-index: 1;
}
.feedback-slides {
  &.owl-carousel {
    &.owl-theme {
      .owl-nav {
        position: absolute;
        left: 160px;
        bottom: -11px;

        [class*="owl-"] {
          transition: $transition;
          font-size: 25px;
          color: $white-color;
          padding: 0 !important;
          background: transparent;
          left: 0;
          position: relative;
          margin: 0;
          width: auto;
          height: auto;
          line-height: unset;

          &:hover {
            color: $pink-color;
            background: transparent;
          }
        }
      }
    }
  }
}
.feedback-area-two {
  position: relative;
  z-index: 1;

  .feedback-slides {
    &.owl-carousel {
      &.owl-theme {
        .owl-nav {
          position: unset;
          left: 0;
          bottom: 0;
          right: 0;

          [class*="owl-"] {
            position: absolute;
            left: 0;

            &.owl-next {
              left: auto;
              right: 0;
            }
          }
        }
      }
    }
  }
}
.single-feedback {
  position: relative;
  padding-left: 150px;
  max-width: 920px;
  margin-bottom: 40px;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 125px !important;
    display: inline-block !important;
    border-radius: 50%;
    height: 125px;
  }
  p {
    font: {
      size: 20px;
      style: italic;
      family: $font-family;
      weight: 300;
    }
    color: $white-color;
    margin-bottom: 20px;
  }
  h3 {
    display: inline-block;
    margin: 0;
    font-size: 20px;
    color: $white-color;
  }
  span {
    display: inline-block;
    color: $white-color;
    margin-left: 4px;
    font: {
      size: $font-size;
      weight: 400;
    }
  }
  &.center-feedback-box {
    margin: 0 auto;
    padding: {
      left: 15px;
      right: 15px;
    }
    text-align: center;

    img {
      position: relative;
      margin-bottom: 25px;
    }
  }
}
.quote-img {
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  margin: auto;
  top: 50%;
  margin-top: -170px;
  height: 350px;
}

/*================================================
How We Works CSS
=================================================*/
.how-we-work {
  position: relative;
  z-index: 1;
}
.single-work-box {
  position: relative;
  box-shadow: 0 -2px 20px 0 rgba(0, 0, 0, 0.06);
  background: $white-color;
  padding: 25px;
  border-radius: 5px;
  transition: $transition;
  z-index: 1;

  h3 {
    font-size: 22px;
    margin: {
      bottom: 10px;
      top: 25px;
    }
    transition: $transition;
  }
  p {
    transition: $transition;
    margin: 0;
  }
  .number {
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    background: $black-color;
    color: $white-color;
    font: {
      size: 16px;
      weight: 600;
    }
    border-radius: 50%;
    transition: $transition;
  }
  i {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 145px;
    color: #eeeeee;
    z-index: -1;
    transition: $transition;
    opacity: 0.5;
  }
  &:hover {
    background: $template-color;
    transform: translateY(-5px);

    i {
      font-size: 130px;
      opacity: 0.1;
    }
    h3,
    p {
      color: $white-color;
    }
    .number {
      background: $pink-color;
    }
  }
}

/*================================================
Team CSS
=================================================*/
// .team-area {
// 	position: relative;
// 	z-index: 1;
// 	padding-bottom: 90px;
// 	overflow: hidden;

// 	&.bg-image {
// 		background: {
// 			image: url(../../images/bg-shape.jpg);
// 			attachment: fixed;
// 			repeat: no-repeat;
// 			position: center center;
// 			size: cover;
// 		}
// 	}
// }
.single-team {
  margin-bottom: 30px;

  .team-image {
    z-index: 1;
    position: relative;
    margin-right: 10px;

    .member-img {
      position: relative;
      top: 10px;
      left: 10px;
      transition: $transition;
      width: 100%;
    }
    .back-image {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }
    .social-links {
      position: absolute;
      right: 20px;
      bottom: 0;
      list-style-type: none;
      padding: 0;
      margin: 0;
      opacity: 0;
      visibility: hidden;
      transition: $transition;

      li {
        display: block;
        margin-bottom: 5px;

        a {
          width: 35px;
          height: 35px;
          text-align: center;
          line-height: 35px;
          border: 1px solid $white-color;
          border-radius: 50%;
          background: $white-color;

          &:hover {
            background: $template-color;
            border-color: $template-color;
            color: $white-color;
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .team-content {
    margin-top: 40px;

    h3 {
      font-size: 22px;
      margin-bottom: 9px;
    }
    span {
      display: block;
      text-transform: uppercase;
      font-size: 14px;
      color: $paragraph-color;
    }
  }
  &:hover {
    .team-image {
      .social-links {
        opacity: 1;
        visibility: visible;
        right: 0;
      }
    }
  }
}
.single-team-box {
  margin-bottom: 30px;
  text-align: center;
  transition: $transition;
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.06);

  .team-content {
    background: $white-color;
    padding: 30px 0;
    position: relative;
    transition: $transition;

    &::before {
      content: "";
      width: 0;
      height: 20px;
      color: $white-color;
      background: $template-color;
      position: absolute;
      top: -20px;
      right: 0;
      transition: $transition;
    }
    h3 {
      font-size: 22px;
      margin-bottom: 12px;
      transition: $transition;
    }
    span {
      display: block;
      font-size: 14px;
      text-transform: uppercase;
      transition: $transition;
    }
    .social {
      padding: 0;
      margin: 0;
      list-style-type: none;
      position: absolute;
      top: -37px;
      left: 0;
      right: 0;
      margin: 0 auto;
      transform: scale(0);
      transition: $transition;

      li {
        display: inline-block;

        a {
          display: block;
          width: 35px;
          height: 35px;
          line-height: 35px;
          font-size: 16px;
          color: #a0a0a0;
          margin-right: 10px;
          position: relative;
          z-index: 1;

          &:hover {
            color: $white-color;

            &::before {
              background: $pink-color;
              color: $white-color;
              transform: rotate(-45deg);
            }
          }
          &::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: $white-color;
            transform: rotate(45deg);
            z-index: -1;
            transition: $transition;
          }
        }
      }
    }
  }
  &:hover {
    box-shadow: 0 0 28px 0 rgba(6, 74, 255, 0.22);

    &::before,
    &::after {
      border-color: $template-color;
      transform: scale(1);
    }
    .team-content {
      background: $template-color;

      &::before {
        width: 100%;
      }
      .social {
        transform: scale(1);
      }
      h3,
      span {
        color: $white-color;
      }
    }
  }
}
@keyframes colorchange {
  0% {
    background: $template-color;
  }
  25% {
    background: red;
  }
  50% {
    background: blue;
  }
  75% {
    background: $black-color;
  }
  0% {
    background: $pink-color;
  }
}

/*================================================
CTA CSS
=================================================*/
.cta-area {
  position: relative;
  z-index: 1;

  .shape9 {
    bottom: auto;
    left: 15%;
    top: 15%;
  }
  .shape7 {
    right: auto;
    top: auto;
    left: 20%;
    bottom: 35px;
    width: 35px;
  }
  .shape5 {
    right: 14%;
    top: auto;
    bottom: 45px;
  }
}
.cta-content {
  text-align: center;

  span {
    color: $template-color;
    display: block;
    text-transform: uppercase;
    font-size: 15px;
    margin-bottom: 20px;
    margin-top: -5px;
  }
  h2 {
    font-size: 40px;
    margin: 0;
    color: $white-color;
    text-transform: capitalize;
  }
  p {
    color: $white-color;
    margin: {
      top: 15px;
      bottom: 30px;
      left: auto;
      right: auto;
    }
    max-width: 620px;
  }
}
.shape14 {
  position: absolute;
  right: 10%;
  top: 10%;
  z-index: -1;
  width: 130px;
}
.shape15 {
  position: absolute;
  left: 5%;
  bottom: 30px;
  z-index: -1;
  width: 80px;
}

/*================================================
Features CSS
=================================================*/
.features-area {
  position: relative;
  z-index: 1;

  .shape7 {
    top: auto;
    right: 20%;
    bottom: 35px;
    width: 35px;
  }
}
.features-content {
  .section-title {
    text-align: left;

    h2 {
      color: $white-color;
      margin: {
        left: 0;
      }
    }
  }
  .single-features-item {
    position: relative;
    padding-left: 50px;
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
    .icon {
      font-size: 35px;
      color: $template-color;
      position: absolute;
      left: 0;
      top: -8px;
    }
    h3 {
      font-size: 18px;
      margin-bottom: 15px;
      color: $white-color;
    }
    p {
      color: $white-color;
    }
  }
}
.features-boxes-area {
  overflow: hidden;
  position: relative;
  z-index: 1;

  .single-box {
    position: relative;
    padding-left: 75px;

    span {
      font-size: 40px;
      position: absolute;
      left: 0;
      color: $template-color;
      top: 0;
      font-weight: 600;
      line-height: 1;
    }
    h3 {
      font-size: 22px;
      color: $white-color;
      margin-bottom: 15px;
    }
    p {
      color: #9c9ca4;
    }
  }
}

/*================================================
Our Skill CSS
=================================================*/
.our-skill {
  .section-title {
    text-align: left;

    h2 {
      margin-left: 0;
    }
  }
  p {
    margin-top: 10px;
  }
  .skills {
    position: relative;

    .skill-item {
      position: relative;
      margin-bottom: 25px;
      .skill-header {
        position: relative;
        margin-bottom: 10px;

        .skill-title {
          font-size: 17px;
          margin-bottom: 0;
        }
        .skill-percentage {
          position: absolute;
          right: 0;
          top: 4px;
          font: {
            size: 16px;
            weight: 300;
            family: $font-family;
          }
          color: $paragraph-color;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.skill-bar {
  position: relative;
  width: 100%;
  .progress {
    height: 7px;
    background-color: #d5d5d5;

    .progress-bar {
      background-color: $template-color;
    }
  }
}

.skill-area {
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.my-skill-area {
  position: relative;
  z-index: 1;
}
.skill-content {
  h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 15px;
  }
  .btn {
    margin-top: 10px;
  }
}
.skill-image {
  position: relative;
  z-index: 1;
  text-align: right;

  .back-image {
    position: absolute;
    right: -60px;
    z-index: -1;
    top: 10%;
    animation: movebounce 3s linear infinite;
  }

  .smaller {
    max-width: 20% !important;
  }

  img.man-image {
    max-width: 435px;
    width: 100%;
  }
}

/*================================================
Fun Facts CSS
=================================================*/
.funfacts-area {
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.funfact {
  text-align: center;

  h3 {
    font: {
      size: 45px;
      weight: 600;
    }
    color: $white-color;
    margin-bottom: 0;
  }
  p {
    color: $white-color;
    font-size: 14px;
    text-transform: uppercase;
    margin-top: 5px;
  }
}

/*================================================
Blog CSS
=================================================*/
.blog-area {
  padding-bottom: 90px;
  // height: 100vh;
  height: calc(100vh - 60px);

  .pagination-area {
    margin-bottom: 30px;
  }
}
.single-blog-post {
  margin-bottom: 30px;
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.06);

  .blog-image {
    position: relative;
    overflow: hidden;

    a {
      display: block;

      img {
        transition: 0.9s;
      }
    }
    .post-tag {
      position: absolute;
      right: 0;
      top: 60px;
      transition: $transition;

      a {
        background: $template-color;
        color: $white-color;
        padding: 9px 28px;
      }
    }
  }
  .blog-post-content {
    padding: 25px;

    .date {
      color: $paragraph-color;
      display: block;
      text-transform: uppercase;
      font-size: 14px;
    }
    h3 {
      margin: {
        top: 13px;
        bottom: 18px;
      }
      line-height: 30px;
      font-size: 22px;
    }
  }
  .read-more-btn {
    position: relative;
    font-weight: 500;
    color: $template-color;

    &:hover {
      color: $pink-color;
      letter-spacing: 1px;
    }
  }
  &:hover {
    .blog-image {
      a {
        img {
          transform: scale(1.1);
        }
      }
      .post-tag {
        top: 70px;

        a {
          background: $pink-color;
          color: $white-color;
        }
      }
    }
  }
  &.without-thumbnail {
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.06);

    .blog-post-content {
      p {
        margin: {
          bottom: 20px;
          top: -5px;
        }
      }
    }
  }
  &.with-video {
    .blog-video {
      iframe {
        width: 100%;
        height: 195px;
        border: none;
      }
    }
  }
}

/*================================================
Our Partner CSS
=================================================*/
.partner-area {
  .partner-item {
    text-align: center;

    a {
      position: relative;
      display: block;

      img {
        width: unset !important;
        display: inline-block !important;

        &:last-child {
          position: absolute;
          left: 0;
          top: 30px;
          right: 0;
          margin: 0 auto;
          opacity: 0;
          visibility: hidden;
          transition: $transition;
        }
      }
    }
    &:hover {
      a {
        img {
          &:last-child {
            opacity: 1;
            visibility: visible;
            top: 0;
          }
        }
      }
    }
  }
}

/*================================================
Contact CTA CSS
=================================================*/
.contact-cta-area {
  position: relative;
  z-index: 1;
}
.contact-cta-content {
  text-align: center;

  .section-title {
    margin-bottom: 20px;
  }
  p {
    max-width: 720px;
    margin: 0 auto 30px;
  }
}
.shape13 {
  position: absolute;
  left: 5%;
  top: 41%;
  z-index: -1;
}
.shape18 {
  position: absolute;
  top: 10%;
  left: 10%;
  z-index: -1;
  animation: movebounce 3s linear infinite;
}
.shape19 {
  position: absolute;
  bottom: 10%;
  left: 10%;
  z-index: -1;
  animation: moveleftbounce 3s linear infinite;
}
.shape20 {
  position: absolute;
  right: 10%;
  z-index: -1;
  bottom: 10%;
}
.shape21 {
  position: absolute;
  top: 15%;
  right: 14%;
  z-index: -1;
  animation: rotate3d 4s linear infinite;
}
.shape22 {
  position: absolute;
  right: 7%;
  z-index: -1;
  top: 45%;
  animation: movebounce 3s linear infinite;
}
.shape23 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.shape24 {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  display: none;
}
.shape25 {
  position: absolute;
  top: 185px;
  left: 0;
  z-index: -1;
  animation: movebounce 3s linear infinite;
}
.shape26 {
  position: absolute;
  z-index: -1;
  left: 50px;
  bottom: 10%;
}
.shape27 {
  position: absolute;
  z-index: -1;
  top: -60px;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
}

/*================================================
Page Title CSS
=================================================*/
.page-title-area {
  position: relative;
  z-index: 1;
  padding: {
    top: 235px;
    bottom: 140px;
  }
  background: {
    position: center;
    attachment: fixed;
    repeat: no-repeat;
    size: cover;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: $white-color;
    width: 100%;
    height: 100%;
    opacity: 0.85;
    z-index: -1;
  }
  &::after {
    position: absolute;
    z-index: -2;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(../../images/dot.png);
    left: 0;
    top: 0;
  }
  h1 {
    font: {
      size: 42px;
      weight: 600;
    }
    margin-bottom: 20px;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      color: $template-color;
      display: inline-block;
      position: relative;
      padding-left: 15px;
      font-weight: 500;

      &::before {
        content: "";
        position: absolute;
        left: 5px;
        top: 50%;
        width: 2px;
        height: 14px;
        background: $black-color;
        margin-top: -7px;
        transform: rotate(10deg);
      }
      &:first-child {
        padding-left: 0;

        &::before {
          display: none;
        }
      }
    }
  }
}

/*================================================
Pagination CSS
=================================================*/
.pagination-area {
  margin-top: 30px;

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;

    .page-item {
      .page-link {
        padding: 8px 16px;
        line-height: unset;
        color: $black-color;
        background-color: $white-color;
        font: {
          size: 16px;
          weight: 500;
        }
        border: 1px solid #eeeeee;

        &:hover,
        &:focus {
          color: $white-color;
          background: $template-color;
          border-color: $template-color;
          box-shadow: unset !important;
        }
      }
      &.active {
        .page-link {
          color: $white-color;
          background: $template-color;
          border-color: $template-color;
          box-shadow: unset !important;
        }
      }
    }
  }
}

/*================================================
Sidebar CSS
=================================================*/
.sidebar {
  .widget {
    margin-bottom: 30px;

    &.widget_search {
      background: $white-color;
      box-shadow: 0px 0px 29px 0px rgba(102, 102, 102, 0.1);
      padding: 15px;

      form {
        position: relative;

        button {
          position: absolute;
          right: 5px;
          top: 0;
          height: 100%;
          border: none;
          background: transparent;
          color: $template-color;
          transition: $transition;

          &:hover {
            color: $pink-color;
          }
        }
      }
    }
    h3,
    .widget-title {
      font-size: 22px;
      margin-bottom: 25px;
      position: relative;

      span {
        z-index: 2;
        position: relative;
        background: $white-color;
        padding-right: 10px;
      }
      &::before {
        content: "";
        position: absolute;
        right: 0;
        width: 100%;
        top: 50%;
        height: 3px;
        background: $template-color;
        transition: $transition;
        animation: colorchange 20s;
      }
    }
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    &.widget_categories {
      ul {
        li {
          position: relative;
          border-top: 1px solid #eeeeee;
          padding: {
            top: 10px;
            bottom: 10px;
            left: 18px;
          }
          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            width: 10px;
            height: 10px;
            background: $template-color;
            margin-top: -5px;
            transition: $transition;
          }
          &:last-child {
            border-bottom: 1px solid #eeeeee;
          }
          a {
            color: $paragraph-color;

            &:hover {
              color: $template-color;
            }
          }
          &:hover {
            &::before {
              border-radius: 50%;
            }
          }
        }
      }
    }
    &.widget_recent_entries {
      ul {
        li {
          position: relative;
          padding-left: 100px;
          margin-bottom: 15px;

          a {
            display: block;

            img {
              position: absolute;
              left: 0;
              top: 3px;
              width: 85px;
              height: 65px;
            }
          }
          h5 {
            font-size: 16px;
            line-height: 22px;
            margin-bottom: 2px;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    &.widget_tag_cloud {
      .tagcloud {
        a {
          background-color: #fff;
          font-size: 15px !important;
          border: 1px dashed #eeeeee;
          padding: 7px 20px;
          margin-top: 5px;
          margin-bottom: 5px;
          color: $paragraph-color;
          margin-right: 10px;

          &:hover {
            background: $template-color;
            color: $white-color;
            border-color: $template-color;
          }
        }
      }
    }
    &.widget_archive {
      ul {
        li {
          position: relative;
          border-top: 1px solid #eeeeee;
          padding: {
            top: 10px;
            bottom: 10px;
            left: 18px;
          }
          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            width: 10px;
            height: 10px;
            background: $template-color;
            margin-top: -5px;
            transition: $transition;
          }
          &:last-child {
            border-bottom: 1px solid #eeeeee;
          }
          a {
            color: $paragraph-color;

            &:hover {
              color: $template-color;
            }
          }
          &:hover {
            &::before {
              border-radius: 50%;
            }
          }
        }
      }
    }
    &:hover {
      h3,
      .widget-title {
        &::before {
          width: 0;
        }
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}

/*================================================
Blog Details CSS
=================================================*/
.blog-details-area {
  position: relative;

  .blog-details {
    box-shadow: 0px 0px 29px 0px rgba(102, 102, 102, 0.1);
    background: $white-color;

    .article-img {
      position: relative;

      .date {
        position: absolute;
        bottom: 15px;
        width: 80px;
        left: 15px;
        height: 90px;
        text-align: center;
        font: {
          size: 22px;
          style: italic;
        }
        background: $template-color;
        color: $white-color;
        border-radius: 5px;
        padding-top: 15px;
        line-height: 30px;
      }
    }
    .article-content {
      padding: 30px;

      ul {
        li {
          display: inline-block;
        }
        &.category {
          li {
            margin-right: 4px;

            a {
              background: $template-color;
              color: $white-color;
              padding: 5px 15px 3px;
              display: inline-block;
              border-radius: 3px;
            }
          }
          margin-bottom: 30px;
        }
      }
      h3 {
        font: {
          size: 22px;
        }
        margin-bottom: -2px;
        line-height: 30px;
      }
      p {
        margin: {
          bottom: 0;
          top: 20px;
        }
      }
      .blockquote {
        margin: {
          bottom: 20px;
          top: 20px;
        }
        background: $bg-gray;
        padding: 30px;
        border-left: 4px solid $template-color;

        p {
          margin-top: 0;
          font-size: 18px;
        }
      }
      .share-post {
        text-align: center;
        margin-top: 30px;

        ul {
          li {
            margin: 0 2px;

            a {
              width: 40px;
              font-size: 15px;
              height: 40px;
              display: inline-block;
              line-height: 38px;
              border: 1px solid #eeeeee;
              border-radius: 50%;
              color: #555555;

              &:hover,
              &:focus {
                color: $white-color;
                border-color: $template-color;
                background-color: $template-color;
              }
            }
          }
        }
      }
      ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
      }
    }
  }
  .post-controls-buttons {
    overflow: hidden;
    margin: {
      top: 25px;
      bottom: 25px;
    }
    background: $white-color;
    padding: 30px;
    box-shadow: 0 5px 10px rgba(0, 9, 128, 0.035),
      0 7px 18px rgba(0, 9, 128, 0.05);

    .controls-left {
      float: left;
    }
    .controls-right {
      float: right;
    }
    div {
      a {
        border: 1px solid #eeeeee;
        padding: 8px 20px;
        display: inline-block;
        border-radius: 5px;
        font-weight: 500;

        &:hover,
        &:focus {
          color: $white-color;
          background: $template-color;
          border-color: $template-color;
        }
      }
    }
  }
  .post-comments {
    padding: 30px;
    background: $white-color;
    box-shadow: 0 5px 10px rgba(0, 9, 128, 0.035),
      0 7px 18px rgba(0, 9, 128, 0.05);

    h3 {
      font: {
        size: 22px;
      }
      margin-bottom: 5px;
    }
    .single-comment {
      position: relative;
      padding-left: 95px;
      margin-top: 30px;

      .comment-img {
        position: absolute;
        left: 0;
        top: 0;
        width: 75px;
        height: 75px;

        img {
          border-radius: 50%;
        }
      }
      .comment-content {
        h4 {
          font: {
            size: 16px;
          }
          margin-bottom: 10px;
        }
        span {
          color: $paragraph-color;
          font-size: 14px;
        }
        p {
          margin-bottom: 15px;
        }
        a {
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
      &.left-m {
        margin-left: 85px;
      }
    }
  }
  .leave-a-reply {
    padding: 30px;
    background: $white-color;
    box-shadow: 0 5px 10px rgba(0, 9, 128, 0.035),
      0 7px 18px rgba(0, 9, 128, 0.05);
    margin-top: 25px;

    h3 {
      font: {
        size: 22px;
      }
      margin-bottom: 30px;
    }
  }
}

/*================================================
Shop CSS
=================================================*/
.woocommerce-topbar {
  margin-bottom: 30px;
}
.single-product {
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.06);
  background: $white-color;
  margin-bottom: 30px;

  .product-image {
    overflow: hidden;
    a {
      display: block;
    }
    img {
      transition: $transition;
      width: 100%;
    }
  }
  .product-content {
    padding: 30px;
    text-align: center;

    h3 {
      font-size: 22px;
      margin-bottom: 8px;
    }
    ul,
    .rating {
      padding: 0;
      margin: 0;
      list-style-type: none;

      li {
        display: inline-block;
        color: #ffc412;
        margin: 0 2px;
      }
    }
    span {
      display: block;
      color: $paragraph-color;
      font: {
        weight: 500;
        size: 15px;
      }
      margin: {
        top: 15px;
        bottom: 15px;
      }
    }
  }
  &:hover {
    .product-image {
      img {
        transform: scale(1.3);
      }
    }
  }
}

/*================================================
Product Details CSS
=================================================*/
.shop-details-area {
  padding-bottom: 90px;
}
.shop-details {
  background: $white-color;
  padding: 30px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);

  .product-img {
    a {
      display: block;
    }
  }
  .product-entry-summary {
    h3 {
      font: {
        size: 22px;
      }
      text-transform: capitalize;
      margin-bottom: 0;
    }
    h4 {
      font: {
        size: 15px;
      }
      margin: 16px 0;

      span {
        color: $paragraph-color;
        text-decoration: line-through;
      }
    }
    p {
      margin-bottom: 16px;
    }
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;

      &.share-social {
        li {
          margin-right: 4px;
          display: inline-block;

          &:first-child {
            margin: 7px;
          }
          a {
            color: $paragraph-color;
            width: 35px;
            height: 35px;
            border: 1px solid $paragraph-color;
            text-align: center;
            border-radius: 50%;
            line-height: 35px;

            &:hover {
              color: $white-color;
              background: $template-color;
              border-color: $template-color;
            }
          }
        }
      }
    }
    form {
      margin: {
        top: 30px;
        bottom: 30px;
      }
      .form-control {
        display: inline-block;
        width: 120px;
      }
      .btn {
        display: inline-block;
        position: relative;
        top: -1px;
      }
      .input-counter {
        max-width: 130px;
        min-width: 130px;
        text-align: center;
        display: inline-block;
        position: relative;
        margin-right: 10px;

        input {
          height: 45px;
          color: $black-color;
          outline: 0;
          display: block;
          border: none;
          background-color: #f8f8f8;
          text-align: center;
          width: 100%;
          font-size: 17px;
          font-weight: 600;
        }
        span {
          position: absolute;
          top: 0;
          background-color: transparent;
          cursor: pointer;
          color: #d0d0d0;
          width: 40px;
          height: 100%;
          line-height: 48px;
          transition: $transition;

          &.minus-btn {
            left: 0;
          }
          &.plus-btn {
            right: 0;
          }
          &:hover {
            color: $template-color;
          }
        }
      }
    }
  }
  .shop-details-tabs {
    margin-top: 40px;

    #tabs {
      padding: 0;
      margin: 0 0 40px;
      list-style-type: none;

      li {
        display: inline-block;
        padding: 12px 50px 8px;
        cursor: pointer;
        font: {
          weight: 500;
          size: 16px;
        }
        background: #eaeaea;

        &.active {
          background-color: $white-color;
          position: relative;

          &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 4px;
            top: 0;
            left: 0;
            background: $template-color;
          }
        }
        &.inactive {
          background-color: #eeeeee;
          padding: 12px 50px;
        }
      }
    }
    .content {
      display: none;

      &.show {
        display: block;
      }
      h3 {
        margin-bottom: 15px;
        font: {
          size: 22px;
        }
      }
      .shop-reviews {
        b {
          margin: 0 0 15px;
          display: inline-block;
        }
        ul {
          padding: 0;
          margin: 0;
          list-style-type: none;

          li {
            display: inline-block;
            position: relative;
            margin: {
              right: 15px;
            }

            &::before {
              content: "";
              position: absolute;
              width: 1px;
              height: 13px;
              background: #eeeeee;
              left: -10px;
              top: 6px;
            }
            &:first-child {
              &::before {
                display: none;
              }
            }
            a {
              color: #ff9800;
            }
          }
        }
        .review-form {
          margin-top: 30px;
        }
      }
    }
  }
}
.shop-related-prodcut {
  margin-top: 50px;

  .section-title {
    text-align: left;
    margin-bottom: 40px;

    h2 {
      margin-left: 0;
      font-size: 30px;
    }
  }
}

/*================================================
Cart CSS
=================================================*/
.cart-table {
  table {
    margin-bottom: 0;
    text-align: center;

    thead {
      tr {
        th {
          border-bottom-width: 0;
          vertical-align: middle;
          border-color: #eaedff;
          padding: 15px 20px;
          font-weight: 500;
        }
      }
    }
    tbody {
      tr {
        td {
          vertical-align: middle;
          color: $paragraph-color;
          border-color: #eaedff;

          &.product-thumbnail {
            a {
              display: block;

              img {
                width: 130px;
              }
            }
          }
          &.product-name {
            a {
              color: $paragraph-color;

              &:hover {
                color: $template-color;
              }
            }
          }
          &.product-remove {
            a {
              color: red;
            }
          }
          .input-counter {
            max-width: 130px;
            min-width: 130px;
            text-align: center;
            display: inline-block;
            position: relative;

            input {
              height: 45px;
              color: $black-color;
              outline: 0;
              display: block;
              border: none;
              background-color: #f8f8f8;
              text-align: center;
              width: 100%;
              font-size: 17px;
              font-weight: 600;
            }
            span {
              position: absolute;
              top: 0;
              background-color: transparent;
              cursor: pointer;
              color: #d0d0d0;
              width: 40px;
              height: 100%;
              line-height: 48px;
              transition: $transition;

              &.minus-btn {
                left: 0;
              }
              &.plus-btn {
                right: 0;
              }
              &:hover {
                color: $template-color;
              }
            }
          }
        }
      }
    }
  }
}
.cart-buttons {
  margin-top: 30px;

  .coupon-box {
    position: relative;
    max-width: 470px;

    button {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      padding: 0 20px;
      border: none;
      background: $pink-color;
      font-weight: 500;
      transition: $transition;
      cursor: pointer;
      border-radius: 0 5px 5px 0;
      color: $white-color;

      &:hover {
        background: $template-color;
      }
    }
  }
}
.cart-totals {
  background: $white-color;
  padding: 40px;
  max-width: 600px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  margin-left: auto;

  h3 {
    font: {
      size: 22px;
    }
    margin-bottom: 25px;
  }
  ul {
    padding: 0;
    margin: 0 0 25px;
    list-style-type: none;

    li {
      border: 1px solid #eaedff;
      padding: 10px 15px;
      color: $paragraph-color;
      overflow: hidden;

      &:first-child {
        border-bottom: none;
      }
      span {
        float: right;
        color: $black-color;
      }
    }
  }
}

/*================================================
Checkout CSS
=================================================*/
.user-actions {
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  background: $white-color;
  padding: 18px 25px 15px;
  margin-bottom: 45px;
  border-top: 3px solid $template-color;

  i {
    color: $template-color;
    margin-right: 4px;
  }
  span {
    display: inline-block;
    color: $template-color;
    margin-right: 5px;
  }
}
.checkout-area {
  .title {
    font: {
      size: 22px;
    }
    margin-bottom: 25px;
  }
}
.billing-details {
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  background: $white-color;
  padding: 25px;
  border-radius: 5px;

  .form-group {
    label {
      display: block;
      color: $paragraph-color;
      margin-bottom: 8px;
      font-size: 15px;

      .required {
        color: red;
      }
    }
  }
  .form-check {
    margin-bottom: 15px;

    .form-check-label {
      color: $paragraph-color;
    }
  }
}
.order-details {
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  background: $white-color;
  padding: 25px;
  border-radius: 5px;

  .order-table {
    table {
      margin-bottom: 0;
      text-align: left;

      thead {
        tr {
          th {
            border-bottom-width: 0;
            vertical-align: middle;
            font: {
              size: 15px;
              weight: 500;
            }
            border-color: #eaedff;
            padding: 15px 20px;
          }
        }
      }
      tbody {
        tr {
          td {
            vertical-align: middle;
            color: $paragraph-color;
            border-color: #eaedff;
            font-size: 15px;

            &.product-name {
              a {
                color: $paragraph-color;

                &:hover {
                  color: $template-color;
                }
              }
            }
            &.order-subtotal,
            &.order-shipping,
            &.total-price {
              span {
                color: $black-color;
                font-weight: 500;
              }
            }
          }
        }
      }
    }
  }
  .payment-method {
    margin-top: 40px;
    border-top: 1px solid #eaedff;
    padding-top: 35px;

    p {
      font: {
        size: 14px;
      }
      [type="radio"] {
        &:checked,
        &:not(:checked) {
          display: none;
        }
      }
      [type="radio"] {
        &:checked,
        &:not(:checked) {
          + label {
            padding-left: 30px;
            cursor: pointer;
            display: block;
            font: {
              size: 15px;
              weight: 600;
            }
            color: $black-color;
            position: relative;
            margin-bottom: 8px;

            &::before {
              content: "";
              position: absolute;
              left: 0;
              top: 3px;
              width: 18px;
              height: 18px;
              border: 1px solid #dddddd;
              border-radius: 50%;
              background: $white-color;
            }
            &::after {
              content: "";
              width: 12px;
              height: 12px;
              background: $template-color;
              position: absolute;
              top: 6px;
              left: 3px;
              border-radius: 50%;
              transition: all 0.2s ease;
            }
          }
        }
      }
      [type="radio"] {
        &:not(:checked) {
          + label {
            &::after {
              opacity: 0;
              visibility: hidden;
              transform: scale(0);
            }
          }
        }
      }
      [type="radio"] {
        &:checked {
          + label {
            &::after {
              opacity: 1;
              visibility: visible;
              transform: scale(1);
            }
          }
        }
      }
    }
  }
  .order-btn {
    .btn {
      &.order-btn {
        display: block;
        margin-top: 25px;
        width: 100%;

        &.btn-disabled {
          cursor: no-drop;
        }
      }
    }
    span {
      display: block;
    }
  }
}

/*================================================
Contact CSS
=================================================*/
.contact-info-box {
  text-align: center;
  transition: $transition;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  background: $white-color;
  padding: 30px;

  .icon {
    display: inline-block;
    width: 80px;
    height: 80px;
    line-height: 80px;
    background: #edf5ff;
    border-radius: 50%;
    font-size: 30px;
    color: $template-color;
    transition: $transition;
  }
  h3 {
    font: {
      size: 22px;
    }
    margin: 25px 0 15px;
  }
  p {
    margin-bottom: 0;

    a {
      color: $paragraph-color;

      &:hover {
        color: $template-color;
      }
    }
  }
  &:hover {
    transform: translateY(-10px);

    .icon {
      color: $white-color;
      background: $template-color;
    }
  }
}
#map {
  height: 500px;
  width: 100%;
}
#contactForm {
  .help-block {
    ul {
      margin: 0;

      li {
        color: red;
      }
    }
  }
  .btn {
    margin-top: 10px;
  }
  #msgSubmit {
    &.text-danger,
    &.text-success {
      margin: 20px 0 0;
    }
  }
}

/*================================================
Portfolio Details CSS
=================================================*/
.project-info {
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      font: {
        size: 20px;
        weight: 500;
      }

      span {
        display: block;
        color: $paragraph-color;
        font: {
          size: 15px;
          weight: 400;
        }
        margin-top: 5px;

        a {
          color: $paragraph-color;

          &:hover {
            color: $template-color;
          }
        }
      }
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
      ul {
        margin-top: 10px;

        li {
          display: inline-block;
          margin: 0;

          a {
            color: $paragraph-color;
            margin-right: 10px;
            font-size: 16px;

            &:hover {
              color: $template-color;
            }
          }
        }
      }
    }
  }
}
.portfolio-details-content {
  margin-top: 30px;
  max-width: 750px;

  h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
}

/*================================================
Team Details CSS
=================================================*/
.team-details-info {
  h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  p {
    margin: 0;
  }
  .personal-information {
    margin-top: 20px;

    h3 {
      font-size: 16px;
      margin-bottom: 10px;
    }
    ul {
      margin: 20px 0 0;
      padding: 0;
      list-style-type: none;

      li {
        margin-bottom: 8px;
        font-size: 15px;
        color: $paragraph-color;

        span {
          a {
            color: $paragraph-color;

            &:hover {
              color: $template-color;
            }
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
.overview-desc {
  margin-top: 30px;

  h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  .skills {
    position: relative;

    .skill-item {
      position: relative;
      margin-bottom: 25px;

      .skill-header {
        position: relative;
        margin-bottom: 10px;

        .skill-title {
          font-size: 17px;
          margin-bottom: 0;
        }
        .skill-percentage {
          position: absolute;
          right: 0;
          top: 4px;
          font: {
            size: 16px;
            weight: 300;
            family: $font-family;
          }
          color: $paragraph-color;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
      .skill-bar {
        position: relative;
        width: 100%;

        .bar-inner {
          position: relative;
          width: 100%;
          border-bottom: 7px solid #d5d5d5;
          border-radius: 30px;

          .bar {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 0px;
            height: 7px;
            background: $template-color;
            transition: all 2000ms ease;
            border-radius: 30px;
          }
        }
      }
    }
  }
}

/*================================================
Login CSS
=================================================*/
.login-form {
  background: $white-color;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  padding: 40px;
  border-radius: 5px;

  h3 {
    font: {
      size: 22px;
    }
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 30px;
  }
  form {
    .form-check {
      margin-top: 18px;

      .form-check-label {
        color: $paragraph-color;
        position: relative;
        top: -2px;
      }
    }
    .forgot-password {
      margin: {
        bottom: 20px;
        top: 11px;
      }
      a {
        color: $paragraph-color;

        &:hover {
          color: $template-color;
        }
      }
    }
    .btn {
      margin: {
        bottom: 20px;
        top: 10px;
      }
    }
    span {
      display: block;
      color: $paragraph-color;

      a {
        color: $template-color;
      }
    }
  }
}

.coming-soon {
  height: 100%;
  padding: {
    top: 70px;
    bottom: 70px;
  }
  .coming-soon-content {
    h1 {
      font-size: 30px;
      line-height: 45px;
    }
    p {
      margin-top: 10px;
    }
    #timer {
      div {
        font-size: 40px;
        width: 120px;
        height: 120px;
        padding-top: 27px;
        line-height: 39px;
        margin: 0 5px 15px;
      }
    }
    form {
      button {
        position: relative;
        right: 0;
        top: 0;
        width: 100%;
        border-radius: 30px;
        margin-top: 10px;
        padding: 13px 0;
      }
    }
  }
}
/*================================================ Contact Card CSS =================================================*/

.contact-card {
  padding-top: 10rem !important;
  background: $white-color;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 20px;
  transition: $transition;

  &:hover {
    transform: translateY(-5px);
  }

  .contact-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .contact-icon {
      font-size: 28px;
      color: $template-color;
      margin-right: 15px;
    }

    h3 {
      font-size: 18px;
      margin-bottom: 0;
      color: $black-color;
    }
  }

  .contact-info {
    color: $paragraph-color;

    p {
      margin-bottom: 10px;
      line-height: 1.5;

      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      color: $template-color;
      transition: $transition;

      &:hover {
        color: $blue-color;
      }
    }
  }
}

.contact-card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  // overflow: hidden;
  // position: absolute;
  top: 0;
  left: 0;

  transform: rotate(90deg);
  transform-origin: top;
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 100%;
  margin: 0% 0% 100% 100%;
}

.contact-card > div {
  flex: 1;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes oscillate {
  0% {
    background-size: 100% auto; /* starting size */
  }
  50% {
    background-size: 250% auto; /* mid-size, you can adjust this */
  }
  100% {
    background-size: 150% auto; /* back to starting size */
  }
}
--------------------------------------------------
/*
File: Naqib.info application Styles

/* This file contains the styling for the actual tepmlate, this
is the file you need to edit to change the look of the
tepmlate.

This files table contents are outlined below>>>>>

*******************************************
*******************************************

==== INDEX PAGE CSS 

** - Default CSS
** - Preloader CSS
** - Navbar CSS
** - Main Banner CSS
** - Boxes Area CSS
** - Services CSS
** - About CSS
** - Why Choose Us CSS
** - Crafting CSS
** - Our Work CSS
** - Portfolio CSS
** - Feedback CSS
** - How We Work CSS
** - Team CSS
** - CTA CSS
** - Features CSS
** - Our Skill CSS
** - Blog CSS
** - Our Partner CSS
** - Contact CTA CSS
** - Page Title CSS
** - Pagination CSS
** - Sidebar CSS
** - Blog Details CSS
** - Product Details CSS
** - Cart CSS
** - Checkout CSS
** - Contact CSS
** - Team Details CSS
** - Login CSS
** - Signup CSS
** - FAQ CSS
** - Coming Soon CSS
** - 404 Error CSS
** - Footer CSS
** - Go Top CSS
** - Animation CSS
** - Padding Stuff [aj]
*/

/*================================================
Default CSS
=================================================*/
@import url("https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i");

$font-family: "Rubik", sans-serif;
$paragraph-font-family: "Open Sans", sans-serif;
$template-color: #38d16a;
$pink-color: #f54ea2;
$blue-color: #151448;
$white-color: #ffffff;
$black-color: #121619;
$paragraph-color: #6084a4;
$bg-gray: #f9f9f9;
$transition: 0.5s;
$font-size: 15px;

body {
  font-family: $font-family;
  padding: 0;
  margin: 0;
  font-size: $font-size;
}
img {
  max-width: 50%;
}
a {
  color: $black-color;
  display: inline-block;
  transition: $transition;
  text-decoration: none;
  outline: 0 !important;

  &:hover,
  &:focus {
    color: $template-color;
    text-decoration: none;
  }
}
.d-table {
  width: 100%;
  height: 100%;

  &-cell {
    vertical-align: middle;
  }
}
button {
  outline: 0 !important;
}
p {
  color: $paragraph-color;
  line-height: 1.8;
  font: {
    weight: 400;
    family: $paragraph-font-family;
  }

  &:last-child {
    margin-bottom: 0;
  }
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  color: $black-color;
  font-weight: 500;
}
.ptb-120 {
  padding: {
    top: 120px;
    bottom: 120px;
  }
}
.ptb-80 {
  padding: {
    top: 80px;
    bottom: 80px;
  }
}
.pt-120 {
  padding-top: 120px;
}
.ptb-50 {
  padding: {
    top: 50px;
    bottom: 50px;
  }
}
.bg-38d16a {
  background-color: $template-color;
}
.bg-08071c {
  background-color: #08071c;
}
.bg-gray {
  background-color: $bg-gray;
}
.bg-f8f9fe {
  background-color: #f8f9fe;
}

/*btn btn-primary*/
.btn {
  font: {
    weight: 500;
    size: $font-size;
  }
  color: $white-color;
  border: none;
  padding: 14px 33px;
  border-radius: 0;
  transition: $transition;
}
.btn-primary {
  color: $white-color;
  background: $pink-color;
  position: relative;
  z-index: 1000;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 51%;
    background: $template-color;
    height: 100%;
    z-index: -1;
    transition: $transition;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
  &:hover::before,
  &:hover::after,
  &:focus::before,
  &:focus::after {
    width: 0;
  }
  &.focus,
  &:focus {
    box-shadow: 0 13px 27px 0 rgba(245, 78, 162, 0.25);
    color: $white-color;
  }
  &:hover,
  &:focus {
    background: $blue-color;
    color: $white-color;
    box-shadow: 0 13px 27px 0 rgba(245, 78, 162, 0.25);
  }
  &:not(:disabled):not(.disabled).active:focus,
  &:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 13px 27px 0 rgba(245, 78, 162, 0.25);
  }
  &:not(:disabled):not(.disabled).active,
  &:not(:disabled):not(.disabled):active {
    background: $pink-color;
    color: $white-color;
  }
  &.disabled,
  &:disabled {
    opacity: 1;
    background: $pink-color;
  }
}

/*section title*/
.section-title {
  text-align: center;
  margin-bottom: 60px;
  span {
    color: $template-color;
    display: block;
    text-transform: uppercase;
    font-size: $font-size;
    margin-bottom: 10px;
    margin-top: -5px;
  }
  h2 {
    font-size: 35px;
    margin: 0 auto;
    text-transform: capitalize;
    max-width: 630px;
    font-weight: 600;
    line-height: 1.3;

    span {
      color: $template-color;
      display: block;
      text-transform: uppercase;
      margin-bottom: 15px;
      margin-top: -5px;
      font-size: 20px;
    }
  }
}

/*form control*/
.form-control {
  height: 45px;
  padding: 8px 15px;
  font-size: 14px;
  border: 1px solid #eeeeee;
  border-radius: 2px;
  color: #818992;
  transition: $transition;

  &:hover,
  &:focus {
    box-shadow: unset;
  }
  &:focus {
    border-color: $template-color;
  }
  &::placeholder {
    color: $paragraph-color;
  }
}

/*owl carousel btn*/
.owl-carousel {
  &.owl-theme {
    .owl-dots {
      position: absolute;
      margin-top: -25px !important;
      right: 15px;
      text-align: center;
      top: 50%;

      .owl-dot {
        display: block;

        span {
          width: 16px;
          height: 16px;
          background: transparent;
          border-radius: 0;
          border: 2px solid #6084a4;
          margin: 3px 0;
          transition: $transition;
          text-align: center;
          position: relative;

          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            width: 6px;
            border-radius: 50%;
            height: 6px;
            right: 0;
            margin: -3px auto 0;
            background: $white-color;
            opacity: 0;
            visibility: hidden;
            transition: $transition;
          }
        }
        &.active,
        &:hover {
          span {
            background: $template-color;
            border-color: $template-color;

            &::before {
              opacity: 1;
              visibility: visible;
            }
          }
        }
      }
    }
    .owl-nav {
      margin-top: 0;
      line-height: 0.01;

      [class*="owl-"] {
        color: $black-color;
        font-size: 25px;
        margin: -25px 0 0;
        background: $white-color;
        border-radius: 50%;
        position: absolute;
        left: 15px;
        top: 50%;
        width: 55px;
        height: 55px;
        line-height: 51px;
        transition: $transition;

        &:hover {
          color: $white-color;
          background: $template-color;
        }
        &.owl-next {
          left: auto;
          right: 15px;
        }
      }
    }
  }
}

/*================================================
Preloader CSS
=================================================*/
.preloader {
  background: $template-color;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999999;
  text-align: center;
  .loader {
    background-color: #fff;
    width: 5px;
    height: 5px;
    border-radius: 50px;
    position: relative;
    top: calc(50% - 2.5px);
    left: calc(50% - 2.5px);

    &:before,
    &:after {
      content: "";
      background: linear-gradient(
        45deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3),
        transparent
      );
      width: 50px;
      height: 50px;
      border-top: 3px solid #fff;
      border-right: 3px solid #fff;
      border-radius: 0 50px 0px 0;
      transform-origin: 0% 100%;
      position: absolute;
      top: -47px;
      animation: loader 1s linear infinite;
    }

    &:after {
      border-top: none;
      border-right: none;
      border-bottom: 3px solid #fff;
      border-left: 3px solid #fff;
      border-radius: 0 0px 0px 50px;
      transform-origin: 100% 0%;
      top: 2px;
      right: 2px;
    }
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

/*================================================
Navbar CSS
=================================================*/
.artflex-mobile-nav {
  display: none;

  &.mean-container {
    .mean-nav {
      ul {
        li {
          a {
            &.active {
              color: $template-color;
            }
          }
        }
      }
    }
  }
}
.artflex-nav {
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 15px;
  width: 100%;
  z-index: 999;
  height: 10vh;

  nav {
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    .navbar-nav {
      .nav-item {
        position: relative;
        padding: 15px 1%;

        a {
          font: {
            weight: 500;
            size: 14px;
          }
          color: $black-color;
          padding: {
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
          }
          margin: {
            left: 13px;
            right: 13px;
          }

          &:hover,
          &:focus,
          &.active {
            color: $template-color;
          }
        }
        &:hover {
          a {
            color: $template-color;
          }
        }
        .dropdown_menu {
          box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.05);
          background: $black-color;
          position: absolute;
          top: 80px;
          left: 0;
          width: 250px;
          z-index: 99;
          padding: {
            top: 20px;
            left: 5px;
            right: 5px;
            bottom: 20px;
          }
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease-in-out;

          li {
            position: relative;
            padding: 0;

            a {
              font: {
                size: 14px;
                weight: 500;
              }
              padding: 9px 15px;
              margin: 0;
              display: block;
              color: $white-color;

              &:hover,
              &:focus,
              &.active {
                color: $template-color;
              }
            }
            .dropdown_menu {
              position: absolute;
              left: 100%;
              top: 0;
              opacity: 0 !important;
              visibility: hidden !important;

              li {
                a {
                  color: $white-color;

                  &:hover,
                  &:focus,
                  &.active {
                    color: $template-color;
                  }
                }
              }
            }
            &:hover {
              .dropdown_menu {
                opacity: 1 !important;
                visibility: visible !important;
                top: -20px !important;
              }
              a {
                color: $template-color;
              }
            }
          }
        }
        &:hover {
          ul {
            opacity: 1;
            visibility: visible;
            top: 100%;
          }
        }
      }
    }
    .others-option {
      margin-left: 10px;

      ul {
        li {
          display: inline-block;

          .search-popup-icon {
            color: $black-color;
            cursor: pointer;
            transition: $transition;
            font-size: 18px;

            &:hover {
              color: $template-color;
            }
          }
          a.cart-icon {
            font-size: 20px;
            margin: 0 22px 0 20px;
            position: relative;

            span {
              font-size: 11px;
              font-size: 10px;
              background: red;
              color: $white-color;
              width: 17px;
              display: inline-block;
              text-align: center;
              height: 17px;
              border-radius: 50%;
              line-height: 18.5px;
              position: absolute;
              top: -4px;
              font-weight: 600;
              right: -9px;
            }
          }
          .side-menu {
            cursor: pointer;
            position: relative;
            width: 32px;

            .bar-1 {
              &::before,
              &::after {
                position: absolute;
                bottom: -3px;
                width: 6px;
                height: 12px;
                background: $black-color;
                content: "";
                left: 0;
                transition: $transition;
              }
              &::after {
                top: -20px;
                height: 9px;
              }
            }
            .bar-2 {
              &::before,
              &::after {
                position: absolute;
                bottom: -3px;
                width: 6px;
                height: 9px;
                background: $black-color;
                content: "";
                left: 8px;
                transition: $transition;
              }
              &::after {
                top: -20px;
                height: 12px;
              }
            }
            .bar-3 {
              &::before,
              &::after {
                position: absolute;
                bottom: -3px;
                width: 6px;
                height: 12px;
                background: $black-color;
                content: "";
                left: 16px;
                transition: $transition;
              }
              &::after {
                top: -20px;
                height: 9px;
              }
            }
            &:hover {
              .bar-1 {
                &::before,
                &::after {
                  height: 14px;
                  background: $template-color;
                }
                &::after {
                  height: 10px;
                  background: $pink-color;
                }
              }
              .bar-2 {
                &::before,
                &::after {
                  height: 10px;
                }
                &::after {
                  height: 14px;
                }
              }
              .bar-3 {
                &::before,
                &::after {
                  height: 14px;
                  background: $pink-color;
                }
                &::after {
                  height: 10px;
                  background: $template-color;
                }
              }
            }
          }
        }
      }
    }
  }
  &.p-relative {
    position: relative;
    padding-top: 0;
  }
  &.is-sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 5px 0;
    z-index: 999;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
    background-color: $white-color !important;
    animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
  }
}
.searchBoxTop {
  position: fixed;
  z-index: 9999;
  top: -170px;
  left: 0;
  width: 100%;
  background-color: $white-color;
  border-bottom: 3px solid $template-color;
  box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.15);
  visibility: hidden;
  opacity: 0;
  filter: alpha(opacity=0);
  transition: $transition;

  &.active {
    top: 0;
    visibility: visible;
    opacity: 1;
    filter: alpha(opacity=100);
  }
  .seachBoxContainer {
    padding: 25px 0;
  }
  form {
    position: relative;

    .form-control {
      height: 50px;
      padding-left: 20px;
    }
    button {
      &[type="submit"] {
        border: 1px solid $pink-color;
        color: $white-color;
        background-color: $pink-color;
        padding: 0 30px;
        display: inline-block;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        transition: $transition;

        &:hover {
          background: $template-color;
          border-color: $template-color;
        }
      }
    }
  }
  .searchClose {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 60px;
    width: 50px;
    height: 50px;
    margin-top: -26px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 4px;
      left: 47%;
      margin-top: -30/2;
      margin-left: -3/2;
      display: block;
      height: 40px;
      width: 3px;
      background-color: $black-color;
      transform: rotate(-45deg);
      transition: $transition;
    }
    &::after {
      transform: rotate(-135deg);
    }
    &:hover::before,
    &:hover::after,
    &:focus::before,
    &:focus::after {
      background-color: $template-color;
    }
  }
}
.sidebar-modal {
  position: relative;

  .modal.right {
    .modal-dialog {
      position: fixed;
      margin: auto;
      width: 350px;
      height: 100%;
      transform: translate3d(0%, 0, 0);
    }
    &.fade.show {
      .modal-dialog {
        right: 0;
        transition: $transition;
      }
    }
    &.fade {
      .modal-dialog {
        right: -320px;
        transition: $transition;
      }
    }
    .modal-content {
      height: 100%;
      overflow-y: auto;
      border-radius: 0;
      border: none;
    }
    .modal-body {
      padding: 30px;

      .sidebar-modal-widget {
        margin-bottom: 35px;

        .title {
          font: {
            size: 18px;
          }
          margin-bottom: 20px;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
        }
        &:last-child {
          margin-bottom: 0;
        }
        ul {
          padding: 0;
          margin: 0;
          list-style-type: none;

          li {
            margin-bottom: 10px;

            &:last-child {
              margin-bottom: 0;
            }
            a {
              color: $paragraph-color;

              &:hover {
                color: $template-color;
              }
            }
          }
          &.contact-info {
            li {
              position: relative;
              font: {
                weight: 500;
                size: 14px;
              }
              padding-left: 50px;
              margin-bottom: 18px;

              i {
                position: absolute;
                left: 0;
                top: 0;
                background: #f4f4f4 none repeat scroll 0 0;
                border: 1px solid #e7e7e7;
                border-radius: 30px;
                color: $template_color;
                height: 36px;
                text-align: center;
                width: 36px;
                line-height: 36px;
                font-size: 17px;
                transition: $transition;
              }
              span {
                display: block;
                font: {
                  weight: 400;
                }
                color: $paragraph-color;
                margin-top: 5px;
                text-transform: initial;
              }
              &:hover {
                i {
                  color: $white-color;
                  border-color: $white-color;
                  background: $template-color;
                }
              }
              &:last-child {
                margin-bottom: 0;
              }
            }
          }
          &.social-list {
            li {
              display: inline-block;
              margin-bottom: 0;
              margin-right: 5px;

              a {
                width: 32px;
                height: 32px;
                line-height: 32px;
                font-size: 14px;
                text-align: center;
                border-radius: 50%;
                color: $paragraph-color;
                border: 1px solid $paragraph-color;

                &:hover,
                &:focus {
                  color: $white-color;
                  background: $template-color;
                  border-color: $template-color;
                }
              }
            }
          }
        }
        .modal-search-form {
          position: relative;

          button {
            position: absolute;
            right: 0;
            top: 0;
            color: $white-color;
            border: none;
            height: 100%;
            padding: 0 25px;
            background: $template-color;
            transition: $transition;

            &:hover {
              background: $pink-color;
            }
          }
        }
      }
    }
  }
  .modal-header {
    display: inline;
    padding: 0;
    border: none;

    .close {
      height: 40px;
      width: 40px;
      background: $template-color;
      font-size: 25px;
      color: $white-color;
      margin: 0px;
      padding: 0px;
      cursor: pointer;
      transition: $transition;
      border: none;
      opacity: 1;

      &:hover {
        background: $template-color;
        color: $white_color;
        transition: $transition;
        opacity: 1;
      }
    }
    h2 {
      background: linear-gradient(142deg, #3ec9cf 0%, #2d136a 100%);
      padding: 30px 25px;
    }
  }
  button {
    &:focus {
      outline: 0;
    }
  }
}

/*================================================
Main Banner CSS
=================================================*/
.main-banner {
  background-color: $white-color;
  position: relative;
  z-index: 1;
  height: 810px;
  // display: flex;
}

.digital-agency-banner {
  // background-image: url("./../../images/home/header_bg.jpg");
  background-image: url("./../../images/bg-shape.jpg");
  background-position: center center;
  background-size: cover;
  position: relative;
  animation: oscillate 5s ease-in-out infinite;

}

.digital-agency-banner_notBrowser {
  //   background-image: url("./../../images/home/header_2.jpg");
  background-image: url("./../../images/bg-shape.jpg");

  background-position: center center;
  background-size: cover;
  position: relative;
}

.parallax_banner {
  position: relative;
  z-index: 1;
  height: 100%;
  overflow: hidden;
  pointer-events: auto;

  .imgHolder {
    position: relative;
    top: 15%;
    width: 35%; /* adjust this as needed */
    margin-left: 50% !important;
    margin-top: 5%;
  }

  img {
    position: relative;
    max-width: 100%;
    height: auto;
  }
  //   img {
  //     // position: relative;
  //     position: absolute !important;
  //     bottom: 0 !important;
  //     max-width: 100%;
  //     height: auto;
  //   }
}
h1 {
  font-size: 8vw;
}
h3 {
  font-size: 3vw;
}
h4 {
  font-size: 2vw;
  color: #6084a447;
}

.w-150 {
  width: 150px;
}
.hero-content {
  margin-top: 35px;

  h1 {
    font: {
      size: 65px;
      weight: 700;
    }
    text-transform: capitalize;
    margin-bottom: 0;
  }
  p {
    margin: {
      bottom: 30px;
      top: 25px;
    }
  }
  ul {
    padding: 0;
    margin: 20px 0 0;
    list-style-type: none;

    li {
      display: inline-block;
      margin-right: 5px;

      a {
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        border: 1px solid #eeeeee;
        border-radius: 50%;

        &.facebook {
          border-color: #4267b2;
          color: #4267b2;

          &:hover {
            background: #4267b2;
            border-color: #4267b2;
          }
        }
        &.twitter {
          border-color: #38a1f3;
          color: #38a1f3;

          &:hover {
            background: #38a1f3;
            border-color: #38a1f3;
          }
        }
        &.behance {
          border-color: #053eff;
          color: #053eff;

          &:hover {
            background: #053eff;
            border-color: #053eff;
          }
        }
        &.dribbble {
          border-color: #ea4c89;
          color: #ea4c89;

          &:hover {
            background: #ea4c89;
            border-color: #ea4c89;
          }
        }
        &.pinterest {
          border-color: #c8232c;
          color: #c8232c;

          &:hover {
            background: #c8232c;
            border-color: #c8232c;
          }
        }
        &:hover {
          color: $white-color;
          background: $template-color;
          border-color: $template-color;
        }
      }
    }
  }
}
.banner-image {
  text-align: right;

  img {
    position: relative;
    top: 74px;
    right: 0;
  }
}
.banner-social-buttons {
  position: absolute;
  left: 30px;
  top: 50%;
  transform-origin: 50% 50%;
  transform: translate(-50%, -50%) rotate(90deg);

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      display: inline-block;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
      a {
        color: $paragraph-color;

        i {
          width: 30px;
          height: 30px;
          line-height: 30px;
          border: 1px solid $paragraph-color;
          display: inline-block;
          text-align: center;
          margin-right: 10px;
          border-radius: 50%;
        }
        &:hover {
          color: $template-color;
        }
      }
    }
  }
}
#scroll-down {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding-top: 50px;
  display: block;
  text-align: center;

  .arrow-down {
    display: block;
    margin: 0 auto;
    width: 10px;
    height: 20px;

    &::after {
      content: "";
      display: block;
      margin: 0;
      padding: 0;
      width: 8px;
      height: 8px;
      border: {
        top: 2px solid $template-color;
        right: 2px solid $template-color;
      }
      transform: rotate(135deg);
    }
    &::before {
      animation: elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -2px;
      width: 2px;
      height: 58px;
      background: $template-color;
      content: " ";
    }
  }
  #scroll-title {
    display: block;
    color: $pink-color;
    font-weight: 500;
    text-transform: capitalize;
  }
}
@keyframes elasticus {
  0% {
    transform-origin: 0% 0%;
    transform: scale(1, 0);
  }
  50% {
    transform-origin: 0% 0%;
    transform: scale(1, 1);
  }
  50.1% {
    transform-origin: 0% 100%;
    transform: scale(1, 1);
  }
  100% {
    transform-origin: 0% 100%;
    transform: scale(1, 0);
  }
}
.startup-agency-home {
  .main-banner {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      background: $white-color;
      width: 100%;
      height: 100%;
      opacity: 0.88;
      z-index: -1;
    }
    &::after {
      position: absolute;
      z-index: -2;
      content: "";
      width: 100%;
      height: 100%;
      background-image: url(../../images/dot.png);
      left: 0;
      top: 0;
    }
    .hero-content {
      position: relative;
      margin: {
        left: -115px;
        top: 0;
      }

      h1 {
        margin-bottom: 35px;
      }
    }
  }
}
.freelancer-portfolio-home {
  .banner-image {
    text-align: left;

    img {
      top: 33px;
      left: 0;
    }
  }
  .hero-content {
    h1 {
      text-transform: uppercase;
    }
  }
  .circle-shape1 {
    right: auto;
    left: 15%;
    bottom: 20%;
  }
  .circle-shape2 {
    left: 8%;
    right: auto;
  }
  .circle-shape3 {
    right: auto;
    left: 13%;
  }
  .shape4 {
    left: 50%;
    top: 17%;
  }
  .shape8 {
    left: 70%;
  }
  .shape9 {
    left: 54%;
  }
}
.agency-portfolio-home {
  .main-banner {
    height: 100%;
    padding: {
      top: 250px;
      bottom: 190px;
    }
    .hero-content {
      text-align: center;
      max-width: 720px;
      margin: 0 auto;

      h1 {
        font-size: 75px;
      }
    }
  }
}
/* creative-blog-home */
.blog-home-slides {
  .col-lg-12 {
    padding: 0 3px 0;
  }
  &.owl-carousel {
    &.owl-theme {
      .owl-nav {
        [class*="owl-"] {
          opacity: 0;
          visibility: hidden;
        }
        .owl-prev {
          left: 0;
        }
        .owl-next {
          right: 0;
        }
      }
    }
  }
  &:hover {
    &.owl-carousel {
      &.owl-theme {
        .owl-nav {
          [class*="owl-"] {
            opacity: 1;
            visibility: visible;
          }
          .owl-prev {
            left: 20px;
          }
          .owl-next {
            right: 20px;
          }
        }
      }
    }
  }
}
.single-blog-box {
  position: relative;

  .blog-image {
    a {
      display: block;
    }
  }
  .blog-post-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9));
    padding: 30px;

    div.tags {
      a {
        background: $template-color;
        color: $white-color;
        padding: 6px 15px;
      }
    }
    h3 {
      margin: 15px 0;
      font-size: 25px;
      line-height: 32px;

      a {
        color: $white-color;

        &:hover {
          color: $template-color;
        }
      }
    }

    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;

      li {
        display: inline-block;
        margin-right: 8px;
        color: $white-color;
        font-size: 14px;

        i {
          margin-right: 4px;
        }
        a {
          color: $template-color;
        }
        &:last-child {
          margin: 0;
        }
      }
    }
  }
  &:hover {
    .blog-post-content {
      div.tags {
        a {
          background: $pink-color;
        }
      }
    }
  }
}
/* creative-blog-home */

// .item-bg1 {
// 	background-image: url(../../images/main-bg-1.jpg);
// }
// // .item-bg2 {
// // 	background-image: url(../../images/main-bg-2.jpg);
// // }
// .item-bg3 {
// 	background-image: url(../../images/main-bg-3.jpg);
// }
// .item-bg4 {
// 	background-image: url(../../images/main-bg-4.jpg);
// }
// .item-bg5 {
// 	background-image: url(../../images/main-bg-5.jpg);
// }
// .item-bg6 {
// 	background-image: url(../../images/main-bg-6.jpg);
// }
.shape1 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.shape2 {
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}
.shape3 {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
}
.shape4 {
  position: absolute;
  left: 34%;
  top: 20%;
  width: 60px;
  animation: movebounce 4s linear infinite;
  z-index: -1;
}
.shape5 {
  position: absolute;
  right: 14%;
  animation: rotate3d 4s linear infinite;
  z-index: -1;
  top: 18%;
}
.shape6 {
  position: absolute;
  left: 3%;
  top: 50%;
  z-index: -1;
  animation: rotate3d 4s linear infinite;
}
.shape7 {
  position: absolute;
  z-index: -1;
  right: 7%;
  top: 34%;
  animation: moveleftbounce 3s linear infinite;
}
.shape8 {
  position: absolute;
  bottom: 4%;
  left: 30%;
  z-index: -1;
  animation: movebounce 3s linear infinite;
}
.shape9 {
  position: absolute;
  bottom: 10%;
  left: 15%;
  z-index: -1;
}
.shape10 {
  position: absolute;
  bottom: 7%;
  right: 4%;
  z-index: -1;
}
.circle-shape1 {
  position: absolute;
  bottom: 25%;
  right: 16%;
  z-index: -1;
  animation: movebounce 3s linear infinite;
}
.circle-shape2 {
  position: absolute;
  right: 13%;
  bottom: 0;
  z-index: -1;
  animation: moveleftbounce 3s linear infinite;
}
.circle-shape3 {
  z-index: -1;
  position: absolute;
  right: 7%;
  bottom: 0;
  animation: moveleftbounce 3s linear infinite;
}
@keyframes movebounce {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes moveleftbounce {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0px);
  }
}
.rotateme {
  animation-name: rotateme;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes rotateme {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes rotate3d {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  100% {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
}

/*================================================
Boxes Area CSS
=================================================*/
.boxes-area {
  position: relative;
  overflow: hidden;
  z-index: 1;

  .single-box {
    text-align: center;
    padding: {
      top: 120px;
      bottom: 120px;
      left: 30px;
      right: 30px;
    }

    .icon {
      font-size: 50px;
      color: $white-color;
    }
    h3 {
      font-size: 22px;
      margin: {
        top: 15px;
        bottom: 15px;
      }
      color: $white-color;
    }
    p {
      color: $white-color;
    }
    &.black-color {
      .icon {
        color: $template-color;
      }
      h3 {
        color: $black-color;
      }
      p {
        color: $black-color;
      }
    }
  }
  &::before,
  &::after {
    position: absolute;
    top: 0;
    width: 37%;
    height: 100%;
    content: "";
    z-index: -2;
  }
  &::before {
    left: 0;
    background: #08071c;
  }
  &::after {
    right: 0;
    background: $template-color;
  }
}

/*================================================
Services CSS
=================================================*/
.welcome-services {
  &.bg-38d16a {
    .section-title {
      span,
      h2 {
        color: $white-color;
      }
    }
  }
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
}
.services-area {
  padding-bottom: 90px;
  position: relative;
  z-index: 1;

  .single-services {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  }
}
.single-services {
  text-align: center;
  margin-bottom: 30px;
  padding: 40px 25px;
  background: $white-color;
  transition: $transition;

  .icon {
    font-size: 25px;
    width: 55px;
    height: 55px;
    line-height: 55px;
    background: $template-color;
    color: $white-color;
    border-radius: 50%;
    display: inline-block;
    border: 1px solid $template-color;
    transition: $transition;
  }
  h3 {
    font-size: 22px;
    margin: {
      top: 25px;
      bottom: 10px;
    }
  }

  p {
    margin-bottom: -5px;
  }
  &:hover {
    transform: translateY(-7px);

    .icon {
      background: transparent;
      color: $template-color;
    }
  }
}
.single-services-box {
  background: $white-color;
  padding: 30px;
  transition: $transition;
  margin-bottom: 30px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);

  .icon {
    font-size: 50px;
    transition: $transition;
    color: $blue-color;
    line-height: 1;
  }
  h3 {
    font-size: 20px;
    margin: {
      top: 20px;
      bottom: 10px;
    }
    transition: $transition;
  }

  h5 {
    font-size: 18px !important;
    font-weight: 400 !important;
    margin: {
      left: 5px;
      top: 15px;
      bottom: 10px;
    }
    transition: $transition;
  }

  p {
    transition: $transition;
  }
  &:hover {
    box-shadow: 0 0 28px 0 rgba(6, 74, 255, 0.22);
    background: $template-color;

    .icon,
    h3,
    h5,
    span,
    p {
      color: $white-color;
    }
  }
}
.more-services-btn {
  text-align: center;
  margin-top: 30px;

  .btn-primary {
    color: $template-color;
    background: $pink-color;

    &::before,
    &::after {
      background: $white-color;
    }
    &:hover,
    &:focus {
      color: $white-color;
    }
  }
}
.services-slides {
  &.owl-carousel {
    &.owl-theme {
      .owl-dots {
        position: relative;
        margin: {
          top: 20px !important;
          bottom: 30px;
        }
        right: 0;
        text-align: center;
        top: 0;
        line-height: 0.01;

        .owl-dot {
          display: inline-block;

          span {
            margin: 0 5px;
          }
        }
      }
    }
  }
}
.circle-top {
  position: absolute;
  top: -259px;
  z-index: -1;
  left: -262px;
}
.circle-bottom {
  position: absolute;
  bottom: -259px;
  z-index: -1;
  right: -262px;
}
.services-box {
  margin-bottom: 30px;

  .services-content {
    margin: {
      left: 10px;
      right: 10px;
    }
    position: relative;
    padding: 30px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
    margin-top: -20px;
    background: $white-color;

    h3 {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
}

/*================================================
About CSS
=================================================*/
.about-area {
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.about-content {
  .section-title {
    text-align: left;
    margin-bottom: 20px;
  }
  h2 {
    margin-left: 0;
  }
  p {
    margin-bottom: 15px;
  }
  .btn {
    margin-top: 15px;
  }
}
.about-image {
  position: relative;
  z-index: 1;
  text-align: right;

  &::before {
    content: "";
    position: absolute;
    right: -52px;
    top: 30px;
    width: 100%;
    height: 91%;
    background: $black-color;
    z-index: -1;
    transition: $transition;
  }
  img {
    width: 80%;
  }
  &:hover {
    &::before {
      top: 0;
      width: 50%;
      height: 100%;
    }
  }
}
.about-us-content {
  .section-title {
    margin-bottom: 2px;
    text-align: left;

    h2 {
      margin-left: 0;
    }
  }
  p {
    margin: {
      top: 18px;
      bottom: 0;
    }
  }
  .single-about-box {
    margin-top: 20px;

    .icon {
      font-size: 40px;
      color: $template-color;
    }
    h3 {
      font-size: 22px;
      margin: {
        top: 15px;
        bottom: 10px;
      }
    }
    p {
      margin: 0;
    }
  }
}
.cta-about {
  overflow: hidden;
  position: relative;
  z-index: 1;
  background-color: $white-color;
}
.cta-about-image {
  background: {
    image: url(../../images/blog-home-image/WED-37.jpg);
    position: center center;
    size: cover;
    repeat: no-repeat;
  }
  width: 100%;
  height: 100%;

  img {
    display: none;
  }
}
.cta-about-content {
  max-width: 700px;
  margin-left: 15px;

  .section-title {
    margin-bottom: 20px;
    text-align: left;

    h2 {
      margin: {
        left: 0;
      }
    }
  }
  .btn {
    margin-top: 15px;
  }
}

/*================================================
Why Choose Us CSS
=================================================*/
.why-choose-us-area {
  position: relative;
  overflow: hidden;
  z-index: 1;
  .align-items-center {
    &:hover {
      .why-choose-us-img {
        .front-img {
          top: 15px;
        }
        .back-img {
          left: 30px;
        }
      }
    }
  }
}
.why-choose-us-img {
  margin-bottom: 35px;

  .front-img {
    position: relative;
    z-index: 1;
    top: 35px;
    left: 35px;
    transition: $transition;
  }
  .back-img {
    position: absolute;
    left: 15px;
    top: 0;
    transition: $transition;
  }
}
.why-choose-us-content {
  .section-title {
    margin-bottom: 20px;
    text-align: left;

    h2 {
      margin: {
        left: 0;
      }
    }
  }
  .btn {
    margin-top: 20px;
  }
}
.why-choose-inner-area {
  margin-top: 100px;

  .section-title {
    h2 {
      text-transform: initial;
      max-width: 660px;
    }
  }
  .single-box {
    text-align: center;
    background: $white-color;
    box-shadow: 0 -2px 20px 0 rgba(0, 0, 0, 0.06);
    padding: 25px;
    transition: $transition;

    .icon {
      font-size: 40px;
      color: $template-color;
      transition: $transition;
    }
    h3 {
      font-size: 22px;
      margin: {
        top: 15px;
        bottom: 15px;
      }
    }
    &:hover {
      transform: translateY(-7px);

      .icon {
        color: $pink-color;
      }
    }
  }
}
.circle-dot {
  position: absolute;
  top: 80px;
  left: -45px;
  z-index: -1000;
}

/*================================================
Crafting CSS
=================================================*/
.crafting-area {
  position: relative;
  z-index: 1;
}
.crafting-content {
  .single-item {
    text-align: center;
    width: 250px;
    padding: 45px 10px;
    border-radius: 5px;
    position: absolute;

    &.item-one {
      background-image: linear-gradient(40deg, #e87e16 0, #f0de14 100%);
      box-shadow: 0 20px 40px 0 rgba(224, 149, 32, 0.4);
      right: 65px;
      top: -170px;
      z-index: 1;
      animation: movebounce 5s linear infinite;
    }
    &.item-two {
      background-image: linear-gradient(40deg, #13c4a1 0, #41cbb0 100%);
      box-shadow: 0 20px 40px 0 rgba(19, 196, 161, 0.4);
      left: 20px;
      top: 0;
      animation: movebounce 4s linear infinite;
    }
    &.item-three {
      background-image: linear-gradient(40deg, #008000 0, #268b26 100%);
      box-shadow: 0 20px 40px 0 rgba(0, 128, 0, 0.4);
      left: 0;
      bottom: 0;
      animation: movebounce 6s linear infinite;
    }
    &.item-four {
      background-image: linear-gradient(40deg, #ff8a73 0, #f89b88 100%);
      box-shadow: 0 20px 40px 0 rgba(255, 138, 115, 0.4);
      right: 35px;
      top: 0;
      animation: movebounce 3s linear infinite;
    }
    i {
      font-size: 40px;
      color: $white-color;
    }
    h6 {
      font: {
        size: 18px;
      }
      text-transform: capitalize;
      color: $white-color;
      margin: {
        top: 15px;
        bottom: 0;
      }
    }
  }
}
.crafting-image {
  position: relative;
  text-align: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $black-color;
    opacity: 0.77;
    z-index: 1;
  }
  img {
    transition: $transition;
  }
  .video-btn {
    position: absolute;
    left: 50%;
    margin-left: -25px;
    top: 50%;
    color: $white-color;
    font-size: 30px;
    margin-top: -45px;
    width: 85px;
    height: 85px;
    line-height: 87px;
    border-radius: 50%;
    background: $template-color;
    z-index: 2;
    animation: ripple-white 1s linear infinite;
  }
  &:hover {
    img {
      transform: scale(1.3);
    }
    .video-btn {
      background: $pink-color;
    }
  }
}
@keyframes ripple-white {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2),
      0 0 0 20px rgba(255, 255, 255, 0.2), 0 0 0 40px rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2),
      0 0 0 20px rgba(255, 255, 255, 0.2), 0 0 0 40px rgba(255, 255, 255, 0.2);
  }
  100% {
    -webkit-box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.2),
      0 0 0 40px rgba(255, 255, 255, 0.2), 0 0 0 60px rgba(255, 255, 255, 0);
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.2),
      0 0 0 40px rgba(255, 255, 255, 0.2), 0 0 0 60px rgba(255, 255, 255, 0);
  }
}

/*================================================
Our Work CSS
=================================================*/
.works-area {
  position: relative;
  z-index: 1;

  &.bg-08071c {
    .section-title {
      h2 {
        color: $white-color;
      }
    }
  }
}
.single-work {
  position: relative;
  text-align: center;
  overflow: hidden;
  transition: $transition;
  margin-bottom: 30px;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $black-color;
    content: "";
    opacity: 0;
    visibility: hidden;
    transition: $transition;
  }
  .works-content {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: -140px auto 0;
    padding: 0 10px;
    transition: $transition;
    opacity: 0;
    visibility: hidden;

    p {
      color: $white-color;
      max-width: 520px;
      margin: 0 auto;
    }
    h3 {
      font-size: 22px;
      margin-bottom: 15px;

      a {
        color: $white-color;

        &:hover {
          color: $template-color;
        }
      }
    }
  }
  .link-btn {
    position: absolute;
    left: 25px;
    bottom: 0;
    font-size: 20px;
    color: $white-color;
    opacity: 0;
    visibility: hidden;

    &:hover {
      color: $template-color;
    }
  }
  .popup-btn {
    position: absolute;
    right: 0;
    bottom: 25px;
    font-size: 20px;
    color: $white-color;
    opacity: 0;
    visibility: hidden;

    &:hover {
      color: $template-color;
    }
  }
  &:hover {
    &::before {
      visibility: visible;
      opacity: 0.92;
    }
    .works-content {
      margin-top: -60px;
      visibility: visible;
      opacity: 1;
    }
    .link-btn {
      opacity: 1;
      visibility: visible;
      bottom: 25px;
    }
    .popup-btn {
      opacity: 1;
      right: 25px;
      visibility: visible;
    }
  }
}
.shape11 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  animation: movebounce 4s linear infinite;
}
.shape12 {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  animation: movebounce 4s linear infinite;
}

/*================================================
Portfolio CSS
=================================================*/
.portfolio-area {
  .section-title {
    h2 {
      color: $white-color;
    }
  }
}
.portfolio-item {
  position: relative;
  overflow: hidden;

  img {
    transition: $transition;
  }
  .portfolio-content {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
    width: 100%;
    height: auto;
    opacity: 0;
    visibility: hidden;
    transition: $transition;

    h3 {
      font-size: 22px;
      margin: {
        bottom: 15px;
        left: -20px;
      }
      position: relative;
      transition: $transition;
    }
    span {
      font-size: 14px;
      text-transform: uppercase;
      position: relative;
      display: block;
      transition: $transition;
      margin-left: 20px;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50%;
      height: 100%;
      background: $white-color;
      opacity: 0;
      visibility: hidden;
      transition: $transition;
    }
  }
  &:hover {
    .portfolio-content {
      opacity: 1;
      visibility: visible;

      &::before {
        width: 100%;
        opacity: 1;
        visibility: visible;
      }
      h3 {
        margin-left: 0;
      }
      span {
        margin-left: 0;
      }
    }
    img {
      transform: scale(1.3);
    }
  }
}
.grid {
  max-width: 100%;

  .item {
    display: block;
    padding: 1px;
    opacity: 1;
  }
}

/*================================================
Feedback CSS
=================================================*/
.feedback-area {
  position: relative;
  z-index: 1;
}
.feedback-slides {
  &.owl-carousel {
    &.owl-theme {
      .owl-nav {
        position: absolute;
        left: 160px;
        bottom: -11px;

        [class*="owl-"] {
          transition: $transition;
          font-size: 25px;
          color: $white-color;
          padding: 0 !important;
          background: transparent;
          left: 0;
          position: relative;
          margin: 0;
          width: auto;
          height: auto;
          line-height: unset;

          &:hover {
            color: $pink-color;
            background: transparent;
          }
        }
      }
    }
  }
}
.feedback-area-two {
  position: relative;
  z-index: 1;

  .feedback-slides {
    &.owl-carousel {
      &.owl-theme {
        .owl-nav {
          position: unset;
          left: 0;
          bottom: 0;
          right: 0;

          [class*="owl-"] {
            position: absolute;
            left: 0;

            &.owl-next {
              left: auto;
              right: 0;
            }
          }
        }
      }
    }
  }
}
.single-feedback {
  position: relative;
  padding-left: 150px;
  max-width: 920px;
  margin-bottom: 40px;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 125px !important;
    display: inline-block !important;
    border-radius: 50%;
    height: 125px;
  }
  p {
    font: {
      size: 20px;
      style: italic;
      family: $font-family;
      weight: 300;
    }
    color: $white-color;
    margin-bottom: 20px;
  }
  h3 {
    display: inline-block;
    margin: 0;
    font-size: 20px;
    color: $white-color;
  }
  span {
    display: inline-block;
    color: $white-color;
    margin-left: 4px;
    font: {
      size: $font-size;
      weight: 400;
    }
  }
  &.center-feedback-box {
    margin: 0 auto;
    padding: {
      left: 15px;
      right: 15px;
    }
    text-align: center;

    img {
      position: relative;
      margin-bottom: 25px;
    }
  }
}
.quote-img {
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  margin: auto;
  top: 50%;
  margin-top: -170px;
  height: 350px;
}

/*================================================
How We Works CSS
=================================================*/
.how-we-work {
  position: relative;
  z-index: 1;
}
.single-work-box {
  position: relative;
  box-shadow: 0 -2px 20px 0 rgba(0, 0, 0, 0.06);
  background: $white-color;
  padding: 25px;
  border-radius: 5px;
  transition: $transition;
  z-index: 1;

  h3 {
    font-size: 22px;
    margin: {
      bottom: 10px;
      top: 25px;
    }
    transition: $transition;
  }
  p {
    transition: $transition;
    margin: 0;
  }
  .number {
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    background: $black-color;
    color: $white-color;
    font: {
      size: 16px;
      weight: 600;
    }
    border-radius: 50%;
    transition: $transition;
  }
  i {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 145px;
    color: #eeeeee;
    z-index: -1;
    transition: $transition;
    opacity: 0.5;
  }
  &:hover {
    background: $template-color;
    transform: translateY(-5px);

    i {
      font-size: 130px;
      opacity: 0.1;
    }
    h3,
    p {
      color: $white-color;
    }
    .number {
      background: $pink-color;
    }
  }
}

/*================================================
Team CSS
=================================================*/
// .team-area {
// 	position: relative;
// 	z-index: 1;
// 	padding-bottom: 90px;
// 	overflow: hidden;

// 	&.bg-image {
// 		background: {
// 			image: url(../../images/bg-shape.jpg);
// 			attachment: fixed;
// 			repeat: no-repeat;
// 			position: center center;
// 			size: cover;
// 		}
// 	}
// }
.single-team {
  margin-bottom: 30px;

  .team-image {
    z-index: 1;
    position: relative;
    margin-right: 10px;

    .member-img {
      position: relative;
      top: 10px;
      left: 10px;
      transition: $transition;
      width: 100%;
    }
    .back-image {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }
    .social-links {
      position: absolute;
      right: 20px;
      bottom: 0;
      list-style-type: none;
      padding: 0;
      margin: 0;
      opacity: 0;
      visibility: hidden;
      transition: $transition;

      li {
        display: block;
        margin-bottom: 5px;

        a {
          width: 35px;
          height: 35px;
          text-align: center;
          line-height: 35px;
          border: 1px solid $white-color;
          border-radius: 50%;
          background: $white-color;

          &:hover {
            background: $template-color;
            border-color: $template-color;
            color: $white-color;
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .team-content {
    margin-top: 40px;

    h3 {
      font-size: 22px;
      margin-bottom: 9px;
    }
    span {
      display: block;
      text-transform: uppercase;
      font-size: 14px;
      color: $paragraph-color;
    }
  }
  &:hover {
    .team-image {
      .social-links {
        opacity: 1;
        visibility: visible;
        right: 0;
      }
    }
  }
}
.single-team-box {
  margin-bottom: 30px;
  text-align: center;
  transition: $transition;
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.06);

  .team-content {
    background: $white-color;
    padding: 30px 0;
    position: relative;
    transition: $transition;

    &::before {
      content: "";
      width: 0;
      height: 20px;
      color: $white-color;
      background: $template-color;
      position: absolute;
      top: -20px;
      right: 0;
      transition: $transition;
    }
    h3 {
      font-size: 22px;
      margin-bottom: 12px;
      transition: $transition;
    }
    span {
      display: block;
      font-size: 14px;
      text-transform: uppercase;
      transition: $transition;
    }
    .social {
      padding: 0;
      margin: 0;
      list-style-type: none;
      position: absolute;
      top: -37px;
      left: 0;
      right: 0;
      margin: 0 auto;
      transform: scale(0);
      transition: $transition;

      li {
        display: inline-block;

        a {
          display: block;
          width: 35px;
          height: 35px;
          line-height: 35px;
          font-size: 16px;
          color: #a0a0a0;
          margin-right: 10px;
          position: relative;
          z-index: 1;

          &:hover {
            color: $white-color;

            &::before {
              background: $pink-color;
              color: $white-color;
              transform: rotate(-45deg);
            }
          }
          &::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: $white-color;
            transform: rotate(45deg);
            z-index: -1;
            transition: $transition;
          }
        }
      }
    }
  }
  &:hover {
    box-shadow: 0 0 28px 0 rgba(6, 74, 255, 0.22);

    &::before,
    &::after {
      border-color: $template-color;
      transform: scale(1);
    }
    .team-content {
      background: $template-color;

      &::before {
        width: 100%;
      }
      .social {
        transform: scale(1);
      }
      h3,
      span {
        color: $white-color;
      }
    }
  }
}
@keyframes colorchange {
  0% {
    background: $template-color;
  }
  25% {
    background: red;
  }
  50% {
    background: blue;
  }
  75% {
    background: $black-color;
  }
  0% {
    background: $pink-color;
  }
}

/*================================================
CTA CSS
=================================================*/
.cta-area {
  position: relative;
  z-index: 1;

  .shape9 {
    bottom: auto;
    left: 15%;
    top: 15%;
  }
  .shape7 {
    right: auto;
    top: auto;
    left: 20%;
    bottom: 35px;
    width: 35px;
  }
  .shape5 {
    right: 14%;
    top: auto;
    bottom: 45px;
  }
}
.cta-content {
  text-align: center;

  span {
    color: $template-color;
    display: block;
    text-transform: uppercase;
    font-size: 15px;
    margin-bottom: 20px;
    margin-top: -5px;
  }
  h2 {
    font-size: 40px;
    margin: 0;
    color: $white-color;
    text-transform: capitalize;
  }
  p {
    color: $white-color;
    margin: {
      top: 15px;
      bottom: 30px;
      left: auto;
      right: auto;
    }
    max-width: 620px;
  }
}
.shape14 {
  position: absolute;
  right: 10%;
  top: 10%;
  z-index: -1;
  width: 130px;
}
.shape15 {
  position: absolute;
  left: 5%;
  bottom: 30px;
  z-index: -1;
  width: 80px;
}

/*================================================
Features CSS
=================================================*/
.features-area {
  position: relative;
  z-index: 1;

  .shape7 {
    top: auto;
    right: 20%;
    bottom: 35px;
    width: 35px;
  }
}
.features-content {
  .section-title {
    text-align: left;

    h2 {
      color: $white-color;
      margin: {
        left: 0;
      }
    }
  }
  .single-features-item {
    position: relative;
    padding-left: 50px;
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
    .icon {
      font-size: 35px;
      color: $template-color;
      position: absolute;
      left: 0;
      top: -8px;
    }
    h3 {
      font-size: 18px;
      margin-bottom: 15px;
      color: $white-color;
    }
    p {
      color: $white-color;
    }
  }
}
.features-boxes-area {
  overflow: hidden;
  position: relative;
  z-index: 1;

  .single-box {
    position: relative;
    padding-left: 75px;

    span {
      font-size: 40px;
      position: absolute;
      left: 0;
      color: $template-color;
      top: 0;
      font-weight: 600;
      line-height: 1;
    }
    h3 {
      font-size: 22px;
      color: $white-color;
      margin-bottom: 15px;
    }
    p {
      color: #9c9ca4;
    }
  }
}

/*================================================
Our Skill CSS
=================================================*/
.our-skill {
  .section-title {
    text-align: left;

    h2 {
      margin-left: 0;
    }
  }
  p {
    margin-top: 10px;
  }
  .skills {
    position: relative;

    .skill-item {
      position: relative;
      margin-bottom: 25px;
      .skill-header {
        position: relative;
        margin-bottom: 10px;

        .skill-title {
          font-size: 17px;
          margin-bottom: 0;
        }
        .skill-percentage {
          position: absolute;
          right: 0;
          top: 4px;
          font: {
            size: 16px;
            weight: 300;
            family: $font-family;
          }
          color: $paragraph-color;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.skill-bar {
  position: relative;
  width: 100%;
  .progress {
    height: 7px;
    background-color: #d5d5d5;

    .progress-bar {
      background-color: $template-color;
    }
  }
}

.skill-area {
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.my-skill-area {
  position: relative;
  z-index: 1;
}
.skill-content {
  h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 15px;
  }
  .btn {
    margin-top: 10px;
  }
}
.skill-image {
  position: relative;
  z-index: 1;
  text-align: right;

  .back-image {
    position: absolute;
    right: -60px;
    z-index: -1;
    top: 10%;
    animation: movebounce 3s linear infinite;
  }

  .smaller {
    max-width: 20% !important;
  }

  img.man-image {
    max-width: 435px;
    width: 100%;
  }
}

/*================================================
Fun Facts CSS
=================================================*/
.funfacts-area {
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.funfact {
  text-align: center;

  h3 {
    font: {
      size: 45px;
      weight: 600;
    }
    color: $white-color;
    margin-bottom: 0;
  }
  p {
    color: $white-color;
    font-size: 14px;
    text-transform: uppercase;
    margin-top: 5px;
  }
}

/*================================================
Blog CSS
=================================================*/
.blog-area {
  padding-bottom: 90px;
  // height: 100vh;
  height: calc(100vh - 60px);

  .pagination-area {
    margin-bottom: 30px;
  }
}
.single-blog-post {
  margin-bottom: 30px;
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.06);

  .blog-image {
    position: relative;
    overflow: hidden;

    a {
      display: block;

      img {
        transition: 0.9s;
      }
    }
    .post-tag {
      position: absolute;
      right: 0;
      top: 60px;
      transition: $transition;

      a {
        background: $template-color;
        color: $white-color;
        padding: 9px 28px;
      }
    }
  }
  .blog-post-content {
    padding: 25px;

    .date {
      color: $paragraph-color;
      display: block;
      text-transform: uppercase;
      font-size: 14px;
    }
    h3 {
      margin: {
        top: 13px;
        bottom: 18px;
      }
      line-height: 30px;
      font-size: 22px;
    }
  }
  .read-more-btn {
    position: relative;
    font-weight: 500;
    color: $template-color;

    &:hover {
      color: $pink-color;
      letter-spacing: 1px;
    }
  }
  &:hover {
    .blog-image {
      a {
        img {
          transform: scale(1.1);
        }
      }
      .post-tag {
        top: 70px;

        a {
          background: $pink-color;
          color: $white-color;
        }
      }
    }
  }
  &.without-thumbnail {
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.06);

    .blog-post-content {
      p {
        margin: {
          bottom: 20px;
          top: -5px;
        }
      }
    }
  }
  &.with-video {
    .blog-video {
      iframe {
        width: 100%;
        height: 195px;
        border: none;
      }
    }
  }
}

/*================================================
Our Partner CSS
=================================================*/
.partner-area {
  .partner-item {
    text-align: center;

    a {
      position: relative;
      display: block;

      img {
        width: unset !important;
        display: inline-block !important;

        &:last-child {
          position: absolute;
          left: 0;
          top: 30px;
          right: 0;
          margin: 0 auto;
          opacity: 0;
          visibility: hidden;
          transition: $transition;
        }
      }
    }
    &:hover {
      a {
        img {
          &:last-child {
            opacity: 1;
            visibility: visible;
            top: 0;
          }
        }
      }
    }
  }
}

/*================================================
Contact CTA CSS
=================================================*/
.contact-cta-area {
  position: relative;
  z-index: 1;
}
.contact-cta-content {
  text-align: center;

  .section-title {
    margin-bottom: 20px;
  }
  p {
    max-width: 720px;
    margin: 0 auto 30px;
  }
}
.shape13 {
  position: absolute;
  left: 5%;
  top: 41%;
  z-index: -1;
}
.shape18 {
  position: absolute;
  top: 10%;
  left: 10%;
  z-index: -1;
  animation: movebounce 3s linear infinite;
}
.shape19 {
  position: absolute;
  bottom: 10%;
  left: 10%;
  z-index: -1;
  animation: moveleftbounce 3s linear infinite;
}
.shape20 {
  position: absolute;
  right: 10%;
  z-index: -1;
  bottom: 10%;
}
.shape21 {
  position: absolute;
  top: 15%;
  right: 14%;
  z-index: -1;
  animation: rotate3d 4s linear infinite;
}
.shape22 {
  position: absolute;
  right: 7%;
  z-index: -1;
  top: 45%;
  animation: movebounce 3s linear infinite;
}
.shape23 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.shape24 {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  display: none;
}
.shape25 {
  position: absolute;
  top: 185px;
  left: 0;
  z-index: -1;
  animation: movebounce 3s linear infinite;
}
.shape26 {
  position: absolute;
  z-index: -1;
  left: 50px;
  bottom: 10%;
}
.shape27 {
  position: absolute;
  z-index: -1;
  top: -60px;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
}

/*================================================
Page Title CSS
=================================================*/
.page-title-area {
  position: relative;
  z-index: 1;
  padding: {
    top: 235px;
    bottom: 140px;
  }
  background: {
    position: center;
    attachment: fixed;
    repeat: no-repeat;
    size: cover;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: $white-color;
    width: 100%;
    height: 100%;
    opacity: 0.85;
    z-index: -1;
  }
  &::after {
    position: absolute;
    z-index: -2;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(../../images/dot.png);
    left: 0;
    top: 0;
  }
  h1 {
    font: {
      size: 42px;
      weight: 600;
    }
    margin-bottom: 20px;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      color: $template-color;
      display: inline-block;
      position: relative;
      padding-left: 15px;
      font-weight: 500;

      &::before {
        content: "";
        position: absolute;
        left: 5px;
        top: 50%;
        width: 2px;
        height: 14px;
        background: $black-color;
        margin-top: -7px;
        transform: rotate(10deg);
      }
      &:first-child {
        padding-left: 0;

        &::before {
          display: none;
        }
      }
    }
  }
}

/*================================================
Pagination CSS
=================================================*/
.pagination-area {
  margin-top: 30px;

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;

    .page-item {
      .page-link {
        padding: 8px 16px;
        line-height: unset;
        color: $black-color;
        background-color: $white-color;
        font: {
          size: 16px;
          weight: 500;
        }
        border: 1px solid #eeeeee;

        &:hover,
        &:focus {
          color: $white-color;
          background: $template-color;
          border-color: $template-color;
          box-shadow: unset !important;
        }
      }
      &.active {
        .page-link {
          color: $white-color;
          background: $template-color;
          border-color: $template-color;
          box-shadow: unset !important;
        }
      }
    }
  }
}

/*================================================
Sidebar CSS
=================================================*/
.sidebar {
  .widget {
    margin-bottom: 30px;

    &.widget_search {
      background: $white-color;
      box-shadow: 0px 0px 29px 0px rgba(102, 102, 102, 0.1);
      padding: 15px;

      form {
        position: relative;

        button {
          position: absolute;
          right: 5px;
          top: 0;
          height: 100%;
          border: none;
          background: transparent;
          color: $template-color;
          transition: $transition;

          &:hover {
            color: $pink-color;
          }
        }
      }
    }
    h3,
    .widget-title {
      font-size: 22px;
      margin-bottom: 25px;
      position: relative;

      span {
        z-index: 2;
        position: relative;
        background: $white-color;
        padding-right: 10px;
      }
      &::before {
        content: "";
        position: absolute;
        right: 0;
        width: 100%;
        top: 50%;
        height: 3px;
        background: $template-color;
        transition: $transition;
        animation: colorchange 20s;
      }
    }
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    &.widget_categories {
      ul {
        li {
          position: relative;
          border-top: 1px solid #eeeeee;
          padding: {
            top: 10px;
            bottom: 10px;
            left: 18px;
          }
          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            width: 10px;
            height: 10px;
            background: $template-color;
            margin-top: -5px;
            transition: $transition;
          }
          &:last-child {
            border-bottom: 1px solid #eeeeee;
          }
          a {
            color: $paragraph-color;

            &:hover {
              color: $template-color;
            }
          }
          &:hover {
            &::before {
              border-radius: 50%;
            }
          }
        }
      }
    }
    &.widget_recent_entries {
      ul {
        li {
          position: relative;
          padding-left: 100px;
          margin-bottom: 15px;

          a {
            display: block;

            img {
              position: absolute;
              left: 0;
              top: 3px;
              width: 85px;
              height: 65px;
            }
          }
          h5 {
            font-size: 16px;
            line-height: 22px;
            margin-bottom: 2px;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    &.widget_tag_cloud {
      .tagcloud {
        a {
          background-color: #fff;
          font-size: 15px !important;
          border: 1px dashed #eeeeee;
          padding: 7px 20px;
          margin-top: 5px;
          margin-bottom: 5px;
          color: $paragraph-color;
          margin-right: 10px;

          &:hover {
            background: $template-color;
            color: $white-color;
            border-color: $template-color;
          }
        }
      }
    }
    &.widget_archive {
      ul {
        li {
          position: relative;
          border-top: 1px solid #eeeeee;
          padding: {
            top: 10px;
            bottom: 10px;
            left: 18px;
          }
          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            width: 10px;
            height: 10px;
            background: $template-color;
            margin-top: -5px;
            transition: $transition;
          }
          &:last-child {
            border-bottom: 1px solid #eeeeee;
          }
          a {
            color: $paragraph-color;

            &:hover {
              color: $template-color;
            }
          }
          &:hover {
            &::before {
              border-radius: 50%;
            }
          }
        }
      }
    }
    &:hover {
      h3,
      .widget-title {
        &::before {
          width: 0;
        }
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}

/*================================================
Blog Details CSS
=================================================*/
.blog-details-area {
  position: relative;

  .blog-details {
    box-shadow: 0px 0px 29px 0px rgba(102, 102, 102, 0.1);
    background: $white-color;

    .article-img {
      position: relative;

      .date {
        position: absolute;
        bottom: 15px;
        width: 80px;
        left: 15px;
        height: 90px;
        text-align: center;
        font: {
          size: 22px;
          style: italic;
        }
        background: $template-color;
        color: $white-color;
        border-radius: 5px;
        padding-top: 15px;
        line-height: 30px;
      }
    }
    .article-content {
      padding: 30px;

      ul {
        li {
          display: inline-block;
        }
        &.category {
          li {
            margin-right: 4px;

            a {
              background: $template-color;
              color: $white-color;
              padding: 5px 15px 3px;
              display: inline-block;
              border-radius: 3px;
            }
          }
          margin-bottom: 30px;
        }
      }
      h3 {
        font: {
          size: 22px;
        }
        margin-bottom: -2px;
        line-height: 30px;
      }
      p {
        margin: {
          bottom: 0;
          top: 20px;
        }
      }
      .blockquote {
        margin: {
          bottom: 20px;
          top: 20px;
        }
        background: $bg-gray;
        padding: 30px;
        border-left: 4px solid $template-color;

        p {
          margin-top: 0;
          font-size: 18px;
        }
      }
      .share-post {
        text-align: center;
        margin-top: 30px;

        ul {
          li {
            margin: 0 2px;

            a {
              width: 40px;
              font-size: 15px;
              height: 40px;
              display: inline-block;
              line-height: 38px;
              border: 1px solid #eeeeee;
              border-radius: 50%;
              color: #555555;

              &:hover,
              &:focus {
                color: $white-color;
                border-color: $template-color;
                background-color: $template-color;
              }
            }
          }
        }
      }
      ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
      }
    }
  }
  .post-controls-buttons {
    overflow: hidden;
    margin: {
      top: 25px;
      bottom: 25px;
    }
    background: $white-color;
    padding: 30px;
    box-shadow: 0 5px 10px rgba(0, 9, 128, 0.035),
      0 7px 18px rgba(0, 9, 128, 0.05);

    .controls-left {
      float: left;
    }
    .controls-right {
      float: right;
    }
    div {
      a {
        border: 1px solid #eeeeee;
        padding: 8px 20px;
        display: inline-block;
        border-radius: 5px;
        font-weight: 500;

        &:hover,
        &:focus {
          color: $white-color;
          background: $template-color;
          border-color: $template-color;
        }
      }
    }
  }
  .post-comments {
    padding: 30px;
    background: $white-color;
    box-shadow: 0 5px 10px rgba(0, 9, 128, 0.035),
      0 7px 18px rgba(0, 9, 128, 0.05);

    h3 {
      font: {
        size: 22px;
      }
      margin-bottom: 5px;
    }
    .single-comment {
      position: relative;
      padding-left: 95px;
      margin-top: 30px;

      .comment-img {
        position: absolute;
        left: 0;
        top: 0;
        width: 75px;
        height: 75px;

        img {
          border-radius: 50%;
        }
      }
      .comment-content {
        h4 {
          font: {
            size: 16px;
          }
          margin-bottom: 10px;
        }
        span {
          color: $paragraph-color;
          font-size: 14px;
        }
        p {
          margin-bottom: 15px;
        }
        a {
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
      &.left-m {
        margin-left: 85px;
      }
    }
  }
  .leave-a-reply {
    padding: 30px;
    background: $white-color;
    box-shadow: 0 5px 10px rgba(0, 9, 128, 0.035),
      0 7px 18px rgba(0, 9, 128, 0.05);
    margin-top: 25px;

    h3 {
      font: {
        size: 22px;
      }
      margin-bottom: 30px;
    }
  }
}

/*================================================
Shop CSS
=================================================*/
.woocommerce-topbar {
  margin-bottom: 30px;
}
.single-product {
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.06);
  background: $white-color;
  margin-bottom: 30px;

  .product-image {
    overflow: hidden;
    a {
      display: block;
    }
    img {
      transition: $transition;
      width: 100%;
    }
  }
  .product-content {
    padding: 30px;
    text-align: center;

    h3 {
      font-size: 22px;
      margin-bottom: 8px;
    }
    ul,
    .rating {
      padding: 0;
      margin: 0;
      list-style-type: none;

      li {
        display: inline-block;
        color: #ffc412;
        margin: 0 2px;
      }
    }
    span {
      display: block;
      color: $paragraph-color;
      font: {
        weight: 500;
        size: 15px;
      }
      margin: {
        top: 15px;
        bottom: 15px;
      }
    }
  }
  &:hover {
    .product-image {
      img {
        transform: scale(1.3);
      }
    }
  }
}

/*================================================
Product Details CSS
=================================================*/
.shop-details-area {
  padding-bottom: 90px;
}
.shop-details {
  background: $white-color;
  padding: 30px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);

  .product-img {
    a {
      display: block;
    }
  }
  .product-entry-summary {
    h3 {
      font: {
        size: 22px;
      }
      text-transform: capitalize;
      margin-bottom: 0;
    }
    h4 {
      font: {
        size: 15px;
      }
      margin: 16px 0;

      span {
        color: $paragraph-color;
        text-decoration: line-through;
      }
    }
    p {
      margin-bottom: 16px;
    }
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;

      &.share-social {
        li {
          margin-right: 4px;
          display: inline-block;

          &:first-child {
            margin: 7px;
          }
          a {
            color: $paragraph-color;
            width: 35px;
            height: 35px;
            border: 1px solid $paragraph-color;
            text-align: center;
            border-radius: 50%;
            line-height: 35px;

            &:hover {
              color: $white-color;
              background: $template-color;
              border-color: $template-color;
            }
          }
        }
      }
    }
    form {
      margin: {
        top: 30px;
        bottom: 30px;
      }
      .form-control {
        display: inline-block;
        width: 120px;
      }
      .btn {
        display: inline-block;
        position: relative;
        top: -1px;
      }
      .input-counter {
        max-width: 130px;
        min-width: 130px;
        text-align: center;
        display: inline-block;
        position: relative;
        margin-right: 10px;

        input {
          height: 45px;
          color: $black-color;
          outline: 0;
          display: block;
          border: none;
          background-color: #f8f8f8;
          text-align: center;
          width: 100%;
          font-size: 17px;
          font-weight: 600;
        }
        span {
          position: absolute;
          top: 0;
          background-color: transparent;
          cursor: pointer;
          color: #d0d0d0;
          width: 40px;
          height: 100%;
          line-height: 48px;
          transition: $transition;

          &.minus-btn {
            left: 0;
          }
          &.plus-btn {
            right: 0;
          }
          &:hover {
            color: $template-color;
          }
        }
      }
    }
  }
  .shop-details-tabs {
    margin-top: 40px;

    #tabs {
      padding: 0;
      margin: 0 0 40px;
      list-style-type: none;

      li {
        display: inline-block;
        padding: 12px 50px 8px;
        cursor: pointer;
        font: {
          weight: 500;
          size: 16px;
        }
        background: #eaeaea;

        &.active {
          background-color: $white-color;
          position: relative;

          &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 4px;
            top: 0;
            left: 0;
            background: $template-color;
          }
        }
        &.inactive {
          background-color: #eeeeee;
          padding: 12px 50px;
        }
      }
    }
    .content {
      display: none;

      &.show {
        display: block;
      }
      h3 {
        margin-bottom: 15px;
        font: {
          size: 22px;
        }
      }
      .shop-reviews {
        b {
          margin: 0 0 15px;
          display: inline-block;
        }
        ul {
          padding: 0;
          margin: 0;
          list-style-type: none;

          li {
            display: inline-block;
            position: relative;
            margin: {
              right: 15px;
            }

            &::before {
              content: "";
              position: absolute;
              width: 1px;
              height: 13px;
              background: #eeeeee;
              left: -10px;
              top: 6px;
            }
            &:first-child {
              &::before {
                display: none;
              }
            }
            a {
              color: #ff9800;
            }
          }
        }
        .review-form {
          margin-top: 30px;
        }
      }
    }
  }
}
.shop-related-prodcut {
  margin-top: 50px;

  .section-title {
    text-align: left;
    margin-bottom: 40px;

    h2 {
      margin-left: 0;
      font-size: 30px;
    }
  }
}

/*================================================
Cart CSS
=================================================*/
.cart-table {
  table {
    margin-bottom: 0;
    text-align: center;

    thead {
      tr {
        th {
          border-bottom-width: 0;
          vertical-align: middle;
          border-color: #eaedff;
          padding: 15px 20px;
          font-weight: 500;
        }
      }
    }
    tbody {
      tr {
        td {
          vertical-align: middle;
          color: $paragraph-color;
          border-color: #eaedff;

          &.product-thumbnail {
            a {
              display: block;

              img {
                width: 130px;
              }
            }
          }
          &.product-name {
            a {
              color: $paragraph-color;

              &:hover {
                color: $template-color;
              }
            }
          }
          &.product-remove {
            a {
              color: red;
            }
          }
          .input-counter {
            max-width: 130px;
            min-width: 130px;
            text-align: center;
            display: inline-block;
            position: relative;

            input {
              height: 45px;
              color: $black-color;
              outline: 0;
              display: block;
              border: none;
              background-color: #f8f8f8;
              text-align: center;
              width: 100%;
              font-size: 17px;
              font-weight: 600;
            }
            span {
              position: absolute;
              top: 0;
              background-color: transparent;
              cursor: pointer;
              color: #d0d0d0;
              width: 40px;
              height: 100%;
              line-height: 48px;
              transition: $transition;

              &.minus-btn {
                left: 0;
              }
              &.plus-btn {
                right: 0;
              }
              &:hover {
                color: $template-color;
              }
            }
          }
        }
      }
    }
  }
}
.cart-buttons {
  margin-top: 30px;

  .coupon-box {
    position: relative;
    max-width: 470px;

    button {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      padding: 0 20px;
      border: none;
      background: $pink-color;
      font-weight: 500;
      transition: $transition;
      cursor: pointer;
      border-radius: 0 5px 5px 0;
      color: $white-color;

      &:hover {
        background: $template-color;
      }
    }
  }
}
.cart-totals {
  background: $white-color;
  padding: 40px;
  max-width: 600px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  margin-left: auto;

  h3 {
    font: {
      size: 22px;
    }
    margin-bottom: 25px;
  }
  ul {
    padding: 0;
    margin: 0 0 25px;
    list-style-type: none;

    li {
      border: 1px solid #eaedff;
      padding: 10px 15px;
      color: $paragraph-color;
      overflow: hidden;

      &:first-child {
        border-bottom: none;
      }
      span {
        float: right;
        color: $black-color;
      }
    }
  }
}

/*================================================
Checkout CSS
=================================================*/
.user-actions {
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  background: $white-color;
  padding: 18px 25px 15px;
  margin-bottom: 45px;
  border-top: 3px solid $template-color;

  i {
    color: $template-color;
    margin-right: 4px;
  }
  span {
    display: inline-block;
    color: $template-color;
    margin-right: 5px;
  }
}
.checkout-area {
  .title {
    font: {
      size: 22px;
    }
    margin-bottom: 25px;
  }
}
.billing-details {
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  background: $white-color;
  padding: 25px;
  border-radius: 5px;

  .form-group {
    label {
      display: block;
      color: $paragraph-color;
      margin-bottom: 8px;
      font-size: 15px;

      .required {
        color: red;
      }
    }
  }
  .form-check {
    margin-bottom: 15px;

    .form-check-label {
      color: $paragraph-color;
    }
  }
}
.order-details {
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  background: $white-color;
  padding: 25px;
  border-radius: 5px;

  .order-table {
    table {
      margin-bottom: 0;
      text-align: left;

      thead {
        tr {
          th {
            border-bottom-width: 0;
            vertical-align: middle;
            font: {
              size: 15px;
              weight: 500;
            }
            border-color: #eaedff;
            padding: 15px 20px;
          }
        }
      }
      tbody {
        tr {
          td {
            vertical-align: middle;
            color: $paragraph-color;
            border-color: #eaedff;
            font-size: 15px;

            &.product-name {
              a {
                color: $paragraph-color;

                &:hover {
                  color: $template-color;
                }
              }
            }
            &.order-subtotal,
            &.order-shipping,
            &.total-price {
              span {
                color: $black-color;
                font-weight: 500;
              }
            }
          }
        }
      }
    }
  }
  .payment-method {
    margin-top: 40px;
    border-top: 1px solid #eaedff;
    padding-top: 35px;

    p {
      font: {
        size: 14px;
      }
      [type="radio"] {
        &:checked,
        &:not(:checked) {
          display: none;
        }
      }
      [type="radio"] {
        &:checked,
        &:not(:checked) {
          + label {
            padding-left: 30px;
            cursor: pointer;
            display: block;
            font: {
              size: 15px;
              weight: 600;
            }
            color: $black-color;
            position: relative;
            margin-bottom: 8px;

            &::before {
              content: "";
              position: absolute;
              left: 0;
              top: 3px;
              width: 18px;
              height: 18px;
              border: 1px solid #dddddd;
              border-radius: 50%;
              background: $white-color;
            }
            &::after {
              content: "";
              width: 12px;
              height: 12px;
              background: $template-color;
              position: absolute;
              top: 6px;
              left: 3px;
              border-radius: 50%;
              transition: all 0.2s ease;
            }
          }
        }
      }
      [type="radio"] {
        &:not(:checked) {
          + label {
            &::after {
              opacity: 0;
              visibility: hidden;
              transform: scale(0);
            }
          }
        }
      }
      [type="radio"] {
        &:checked {
          + label {
            &::after {
              opacity: 1;
              visibility: visible;
              transform: scale(1);
            }
          }
        }
      }
    }
  }
  .order-btn {
    .btn {
      &.order-btn {
        display: block;
        margin-top: 25px;
        width: 100%;

        &.btn-disabled {
          cursor: no-drop;
        }
      }
    }
    span {
      display: block;
    }
  }
}

/*================================================
Contact CSS
=================================================*/
.contact-info-box {
  text-align: center;
  transition: $transition;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  background: $white-color;
  padding: 30px;

  .icon {
    display: inline-block;
    width: 80px;
    height: 80px;
    line-height: 80px;
    background: #edf5ff;
    border-radius: 50%;
    font-size: 30px;
    color: $template-color;
    transition: $transition;
  }
  h3 {
    font: {
      size: 22px;
    }
    margin: 25px 0 15px;
  }
  p {
    margin-bottom: 0;

    a {
      color: $paragraph-color;

      &:hover {
        color: $template-color;
      }
    }
  }
  &:hover {
    transform: translateY(-10px);

    .icon {
      color: $white-color;
      background: $template-color;
    }
  }
}
#map {
  height: 500px;
  width: 100%;
}
#contactForm {
  .help-block {
    ul {
      margin: 0;

      li {
        color: red;
      }
    }
  }
  .btn {
    margin-top: 10px;
  }
  #msgSubmit {
    &.text-danger,
    &.text-success {
      margin: 20px 0 0;
    }
  }
}

/*================================================
Portfolio Details CSS
=================================================*/
.project-info {
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      font: {
        size: 20px;
        weight: 500;
      }

      span {
        display: block;
        color: $paragraph-color;
        font: {
          size: 15px;
          weight: 400;
        }
        margin-top: 5px;

        a {
          color: $paragraph-color;

          &:hover {
            color: $template-color;
          }
        }
      }
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
      ul {
        margin-top: 10px;

        li {
          display: inline-block;
          margin: 0;

          a {
            color: $paragraph-color;
            margin-right: 10px;
            font-size: 16px;

            &:hover {
              color: $template-color;
            }
          }
        }
      }
    }
  }
}
.portfolio-details-content {
  margin-top: 30px;
  max-width: 750px;

  h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
}

/*================================================
Team Details CSS
=================================================*/
.team-details-info {
  h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  p {
    margin: 0;
  }
  .personal-information {
    margin-top: 20px;

    h3 {
      font-size: 16px;
      margin-bottom: 10px;
    }
    ul {
      margin: 20px 0 0;
      padding: 0;
      list-style-type: none;

      li {
        margin-bottom: 8px;
        font-size: 15px;
        color: $paragraph-color;

        span {
          a {
            color: $paragraph-color;

            &:hover {
              color: $template-color;
            }
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
.overview-desc {
  margin-top: 30px;

  h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  .skills {
    position: relative;

    .skill-item {
      position: relative;
      margin-bottom: 25px;

      .skill-header {
        position: relative;
        margin-bottom: 10px;

        .skill-title {
          font-size: 17px;
          margin-bottom: 0;
        }
        .skill-percentage {
          position: absolute;
          right: 0;
          top: 4px;
          font: {
            size: 16px;
            weight: 300;
            family: $font-family;
          }
          color: $paragraph-color;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
      .skill-bar {
        position: relative;
        width: 100%;

        .bar-inner {
          position: relative;
          width: 100%;
          border-bottom: 7px solid #d5d5d5;
          border-radius: 30px;

          .bar {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 0px;
            height: 7px;
            background: $template-color;
            transition: all 2000ms ease;
            border-radius: 30px;
          }
        }
      }
    }
  }
}

/*================================================
Login CSS
=================================================*/
.login-form {
  background: $white-color;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  padding: 40px;
  border-radius: 5px;

  h3 {
    font: {
      size: 22px;
    }
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 30px;
  }
  form {
    .form-check {
      margin-top: 18px;

      .form-check-label {
        color: $paragraph-color;
        position: relative;
        top: -2px;
      }
    }
    .forgot-password {
      margin: {
        bottom: 20px;
        top: 11px;
      }
      a {
        color: $paragraph-color;

        &:hover {
          color: $template-color;
        }
      }
    }
    .btn {
      margin: {
        bottom: 20px;
        top: 10px;
      }
    }
    span {
      display: block;
      color: $paragraph-color;

      a {
        color: $template-color;
      }
    }
  }
}

.coming-soon {
  height: 100%;
  padding: {
    top: 70px;
    bottom: 70px;
  }
  .coming-soon-content {
    h1 {
      font-size: 30px;
      line-height: 45px;
    }
    p {
      margin-top: 10px;
    }
    #timer {
      div {
        font-size: 40px;
        width: 120px;
        height: 120px;
        padding-top: 27px;
        line-height: 39px;
        margin: 0 5px 15px;
      }
    }
    form {
      button {
        position: relative;
        right: 0;
        top: 0;
        width: 100%;
        border-radius: 30px;
        margin-top: 10px;
        padding: 13px 0;
      }
    }
  }
}
/*================================================ Contact Card CSS =================================================*/

.contact-card {
  padding-top: 10rem !important;
  background: $white-color;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 20px;
  transition: $transition;

  &:hover {
    transform: translateY(-5px);
  }

  .contact-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .contact-icon {
      font-size: 28px;
      color: $template-color;
      margin-right: 15px;
    }

    h3 {
      font-size: 18px;
      margin-bottom: 0;
      color: $black-color;
    }
  }

  .contact-info {
    color: $paragraph-color;

    p {
      margin-bottom: 10px;
      line-height: 1.5;

      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      color: $template-color;
      transition: $transition;

      &:hover {
        color: $blue-color;
      }
    }
  }
}

.contact-card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  // overflow: hidden;
  // position: absolute;
  top: 0;
  left: 0;

  transform: rotate(90deg);
  transform-origin: top;
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 100%;
  margin: 0% 0% 100% 100%;
}

.contact-card > div {
  flex: 1;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes oscillate {
  0% {
    background-size: 100% auto; /* starting size */
  }
  50% {
    background-size: 250% auto; /* mid-size, you can adjust this */
  }
  100% {
    background-size: 150% auto; /* back to starting size */
  }
}
--------------------------------------------------
/*
File: Naqib.info application Styles

/* This file contains the styling for the actual tepmlate, this
is the file you need to edit to change the look of the
tepmlate.

This files table contents are outlined below>>>>>

*******************************************
*******************************************

==== INDEX PAGE CSS 

** - Default CSS
** - Preloader CSS
** - Navbar CSS
** - Main Banner CSS
** - Boxes Area CSS
** - Services CSS
** - About CSS
** - Why Choose Us CSS
** - Crafting CSS
** - Our Work CSS
** - Portfolio CSS
** - Feedback CSS
** - How We Work CSS
** - Team CSS
** - CTA CSS
** - Features CSS
** - Our Skill CSS
** - Blog CSS
** - Our Partner CSS
** - Contact CTA CSS
** - Page Title CSS
** - Pagination CSS
** - Sidebar CSS
** - Blog Details CSS
** - Product Details CSS
** - Cart CSS
** - Checkout CSS
** - Contact CSS
** - Team Details CSS
** - Login CSS
** - Signup CSS
** - FAQ CSS
** - Coming Soon CSS
** - 404 Error CSS
** - Footer CSS
** - Go Top CSS
** - Animation CSS
** - Padding Stuff [aj]
*/

/*================================================
Default CSS
=================================================*/
@import url("https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i");

$font-family: "Rubik", sans-serif;
$paragraph-font-family: "Open Sans", sans-serif;
$template-color: #38d16a;
$pink-color: #f54ea2;
$blue-color: #151448;
$white-color: #ffffff;
$black-color: #121619;
$paragraph-color: #6084a4;
$bg-gray: #f9f9f9;
$transition: 0.5s;
$font-size: 15px;

body {
  font-family: $font-family;
  padding: 0;
  margin: 0;
  font-size: $font-size;
}
img {
  max-width: 50%;
}
a {
  color: $black-color;
  display: inline-block;
  transition: $transition;
  text-decoration: none;
  outline: 0 !important;

  &:hover,
  &:focus {
    color: $template-color;
    text-decoration: none;
  }
}
.d-table {
  width: 100%;
  height: 100%;

  &-cell {
    vertical-align: middle;
  }
}
button {
  outline: 0 !important;
}
p {
  color: $paragraph-color;
  line-height: 1.8;
  font: {
    weight: 400;
    family: $paragraph-font-family;
  }

  &:last-child {
    margin-bottom: 0;
  }
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  color: $black-color;
  font-weight: 500;
}
.ptb-120 {
  padding: {
    top: 120px;
    bottom: 120px;
  }
}
.ptb-80 {
  padding: {
    top: 80px;
    bottom: 80px;
  }
}
.pt-120 {
  padding-top: 120px;
}
.ptb-50 {
  padding: {
    top: 50px;
    bottom: 50px;
  }
}
.bg-38d16a {
  background-color: $template-color;
}
.bg-08071c {
  background-color: #08071c;
}
.bg-gray {
  background-color: $bg-gray;
}
.bg-f8f9fe {
  background-color: #f8f9fe;
}

/*btn btn-primary*/
.btn {
  font: {
    weight: 500;
    size: $font-size;
  }
  color: $white-color;
  border: none;
  padding: 14px 33px;
  border-radius: 0;
  transition: $transition;
}
.btn-primary {
  color: $white-color;
  background: $pink-color;
  position: relative;
  z-index: 1000;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 51%;
    background: $template-color;
    height: 100%;
    z-index: -1;
    transition: $transition;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
  &:hover::before,
  &:hover::after,
  &:focus::before,
  &:focus::after {
    width: 0;
  }
  &.focus,
  &:focus {
    box-shadow: 0 13px 27px 0 rgba(245, 78, 162, 0.25);
    color: $white-color;
  }
  &:hover,
  &:focus {
    background: $blue-color;
    color: $white-color;
    box-shadow: 0 13px 27px 0 rgba(245, 78, 162, 0.25);
  }
  &:not(:disabled):not(.disabled).active:focus,
  &:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 13px 27px 0 rgba(245, 78, 162, 0.25);
  }
  &:not(:disabled):not(.disabled).active,
  &:not(:disabled):not(.disabled):active {
    background: $pink-color;
    color: $white-color;
  }
  &.disabled,
  &:disabled {
    opacity: 1;
    background: $pink-color;
  }
}

/*section title*/
.section-title {
  text-align: center;
  margin-bottom: 60px;
  span {
    color: $template-color;
    display: block;
    text-transform: uppercase;
    font-size: $font-size;
    margin-bottom: 10px;
    margin-top: -5px;
  }
  h2 {
    font-size: 35px;
    margin: 0 auto;
    text-transform: capitalize;
    max-width: 630px;
    font-weight: 600;
    line-height: 1.3;

    span {
      color: $template-color;
      display: block;
      text-transform: uppercase;
      margin-bottom: 15px;
      margin-top: -5px;
      font-size: 20px;
    }
  }
}

/*form control*/
.form-control {
  height: 45px;
  padding: 8px 15px;
  font-size: 14px;
  border: 1px solid #eeeeee;
  border-radius: 2px;
  color: #818992;
  transition: $transition;

  &:hover,
  &:focus {
    box-shadow: unset;
  }
  &:focus {
    border-color: $template-color;
  }
  &::placeholder {
    color: $paragraph-color;
  }
}

/*owl carousel btn*/
.owl-carousel {
  &.owl-theme {
    .owl-dots {
      position: absolute;
      margin-top: -25px !important;
      right: 15px;
      text-align: center;
      top: 50%;

      .owl-dot {
        display: block;

        span {
          width: 16px;
          height: 16px;
          background: transparent;
          border-radius: 0;
          border: 2px solid #6084a4;
          margin: 3px 0;
          transition: $transition;
          text-align: center;
          position: relative;

          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            width: 6px;
            border-radius: 50%;
            height: 6px;
            right: 0;
            margin: -3px auto 0;
            background: $white-color;
            opacity: 0;
            visibility: hidden;
            transition: $transition;
          }
        }
        &.active,
        &:hover {
          span {
            background: $template-color;
            border-color: $template-color;

            &::before {
              opacity: 1;
              visibility: visible;
            }
          }
        }
      }
    }
    .owl-nav {
      margin-top: 0;
      line-height: 0.01;

      [class*="owl-"] {
        color: $black-color;
        font-size: 25px;
        margin: -25px 0 0;
        background: $white-color;
        border-radius: 50%;
        position: absolute;
        left: 15px;
        top: 50%;
        width: 55px;
        height: 55px;
        line-height: 51px;
        transition: $transition;

        &:hover {
          color: $white-color;
          background: $template-color;
        }
        &.owl-next {
          left: auto;
          right: 15px;
        }
      }
    }
  }
}

/*================================================
Preloader CSS
=================================================*/
.preloader {
  background: $template-color;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999999;
  text-align: center;
  .loader {
    background-color: #fff;
    width: 5px;
    height: 5px;
    border-radius: 50px;
    position: relative;
    top: calc(50% - 2.5px);
    left: calc(50% - 2.5px);

    &:before,
    &:after {
      content: "";
      background: linear-gradient(
        45deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3),
        transparent
      );
      width: 50px;
      height: 50px;
      border-top: 3px solid #fff;
      border-right: 3px solid #fff;
      border-radius: 0 50px 0px 0;
      transform-origin: 0% 100%;
      position: absolute;
      top: -47px;
      animation: loader 1s linear infinite;
    }

    &:after {
      border-top: none;
      border-right: none;
      border-bottom: 3px solid #fff;
      border-left: 3px solid #fff;
      border-radius: 0 0px 0px 50px;
      transform-origin: 100% 0%;
      top: 2px;
      right: 2px;
    }
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

/*================================================
Navbar CSS
=================================================*/
.artflex-mobile-nav {
  display: none;

  &.mean-container {
    .mean-nav {
      ul {
        li {
          a {
            &.active {
              color: $template-color;
            }
          }
        }
      }
    }
  }
}
.artflex-nav {
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 15px;
  width: 100%;
  z-index: 999;
  height: 10vh;

  nav {
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    .navbar-nav {
      .nav-item {
        position: relative;
        padding: 15px 1%;

        a {
          font: {
            weight: 500;
            size: 14px;
          }
          color: $black-color;
          padding: {
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
          }
          margin: {
            left: 13px;
            right: 13px;
          }

          &:hover,
          &:focus,
          &.active {
            color: $template-color;
          }
        }
        &:hover {
          a {
            color: $template-color;
          }
        }
        .dropdown_menu {
          box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.05);
          background: $black-color;
          position: absolute;
          top: 80px;
          left: 0;
          width: 250px;
          z-index: 99;
          padding: {
            top: 20px;
            left: 5px;
            right: 5px;
            bottom: 20px;
          }
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease-in-out;

          li {
            position: relative;
            padding: 0;

            a {
              font: {
                size: 14px;
                weight: 500;
              }
              padding: 9px 15px;
              margin: 0;
              display: block;
              color: $white-color;

              &:hover,
              &:focus,
              &.active {
                color: $template-color;
              }
            }
            .dropdown_menu {
              position: absolute;
              left: 100%;
              top: 0;
              opacity: 0 !important;
              visibility: hidden !important;

              li {
                a {
                  color: $white-color;

                  &:hover,
                  &:focus,
                  &.active {
                    color: $template-color;
                  }
                }
              }
            }
            &:hover {
              .dropdown_menu {
                opacity: 1 !important;
                visibility: visible !important;
                top: -20px !important;
              }
              a {
                color: $template-color;
              }
            }
          }
        }
        &:hover {
          ul {
            opacity: 1;
            visibility: visible;
            top: 100%;
          }
        }
      }
    }
    .others-option {
      margin-left: 10px;

      ul {
        li {
          display: inline-block;

          .search-popup-icon {
            color: $black-color;
            cursor: pointer;
            transition: $transition;
            font-size: 18px;

            &:hover {
              color: $template-color;
            }
          }
          a.cart-icon {
            font-size: 20px;
            margin: 0 22px 0 20px;
            position: relative;

            span {
              font-size: 11px;
              font-size: 10px;
              background: red;
              color: $white-color;
              width: 17px;
              display: inline-block;
              text-align: center;
              height: 17px;
              border-radius: 50%;
              line-height: 18.5px;
              position: absolute;
              top: -4px;
              font-weight: 600;
              right: -9px;
            }
          }
          .side-menu {
            cursor: pointer;
            position: relative;
            width: 32px;

            .bar-1 {
              &::before,
              &::after {
                position: absolute;
                bottom: -3px;
                width: 6px;
                height: 12px;
                background: $black-color;
                content: "";
                left: 0;
                transition: $transition;
              }
              &::after {
                top: -20px;
                height: 9px;
              }
            }
            .bar-2 {
              &::before,
              &::after {
                position: absolute;
                bottom: -3px;
                width: 6px;
                height: 9px;
                background: $black-color;
                content: "";
                left: 8px;
                transition: $transition;
              }
              &::after {
                top: -20px;
                height: 12px;
              }
            }
            .bar-3 {
              &::before,
              &::after {
                position: absolute;
                bottom: -3px;
                width: 6px;
                height: 12px;
                background: $black-color;
                content: "";
                left: 16px;
                transition: $transition;
              }
              &::after {
                top: -20px;
                height: 9px;
              }
            }
            &:hover {
              .bar-1 {
                &::before,
                &::after {
                  height: 14px;
                  background: $template-color;
                }
                &::after {
                  height: 10px;
                  background: $pink-color;
                }
              }
              .bar-2 {
                &::before,
                &::after {
                  height: 10px;
                }
                &::after {
                  height: 14px;
                }
              }
              .bar-3 {
                &::before,
                &::after {
                  height: 14px;
                  background: $pink-color;
                }
                &::after {
                  height: 10px;
                  background: $template-color;
                }
              }
            }
          }
        }
      }
    }
  }
  &.p-relative {
    position: relative;
    padding-top: 0;
  }
  &.is-sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 5px 0;
    z-index: 999;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
    background-color: $white-color !important;
    animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
  }
}
.searchBoxTop {
  position: fixed;
  z-index: 9999;
  top: -170px;
  left: 0;
  width: 100%;
  background-color: $white-color;
  border-bottom: 3px solid $template-color;
  box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.15);
  visibility: hidden;
  opacity: 0;
  filter: alpha(opacity=0);
  transition: $transition;

  &.active {
    top: 0;
    visibility: visible;
    opacity: 1;
    filter: alpha(opacity=100);
  }
  .seachBoxContainer {
    padding: 25px 0;
  }
  form {
    position: relative;

    .form-control {
      height: 50px;
      padding-left: 20px;
    }
    button {
      &[type="submit"] {
        border: 1px solid $pink-color;
        color: $white-color;
        background-color: $pink-color;
        padding: 0 30px;
        display: inline-block;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        transition: $transition;

        &:hover {
          background: $template-color;
          border-color: $template-color;
        }
      }
    }
  }
  .searchClose {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 60px;
    width: 50px;
    height: 50px;
    margin-top: -26px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 4px;
      left: 47%;
      margin-top: -30/2;
      margin-left: -3/2;
      display: block;
      height: 40px;
      width: 3px;
      background-color: $black-color;
      transform: rotate(-45deg);
      transition: $transition;
    }
    &::after {
      transform: rotate(-135deg);
    }
    &:hover::before,
    &:hover::after,
    &:focus::before,
    &:focus::after {
      background-color: $template-color;
    }
  }
}
.sidebar-modal {
  position: relative;

  .modal.right {
    .modal-dialog {
      position: fixed;
      margin: auto;
      width: 350px;
      height: 100%;
      transform: translate3d(0%, 0, 0);
    }
    &.fade.show {
      .modal-dialog {
        right: 0;
        transition: $transition;
      }
    }
    &.fade {
      .modal-dialog {
        right: -320px;
        transition: $transition;
      }
    }
    .modal-content {
      height: 100%;
      overflow-y: auto;
      border-radius: 0;
      border: none;
    }
    .modal-body {
      padding: 30px;

      .sidebar-modal-widget {
        margin-bottom: 35px;

        .title {
          font: {
            size: 18px;
          }
          margin-bottom: 20px;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
        }
        &:last-child {
          margin-bottom: 0;
        }
        ul {
          padding: 0;
          margin: 0;
          list-style-type: none;

          li {
            margin-bottom: 10px;

            &:last-child {
              margin-bottom: 0;
            }
            a {
              color: $paragraph-color;

              &:hover {
                color: $template-color;
              }
            }
          }
          &.contact-info {
            li {
              position: relative;
              font: {
                weight: 500;
                size: 14px;
              }
              padding-left: 50px;
              margin-bottom: 18px;

              i {
                position: absolute;
                left: 0;
                top: 0;
                background: #f4f4f4 none repeat scroll 0 0;
                border: 1px solid #e7e7e7;
                border-radius: 30px;
                color: $template_color;
                height: 36px;
                text-align: center;
                width: 36px;
                line-height: 36px;
                font-size: 17px;
                transition: $transition;
              }
              span {
                display: block;
                font: {
                  weight: 400;
                }
                color: $paragraph-color;
                margin-top: 5px;
                text-transform: initial;
              }
              &:hover {
                i {
                  color: $white-color;
                  border-color: $white-color;
                  background: $template-color;
                }
              }
              &:last-child {
                margin-bottom: 0;
              }
            }
          }
          &.social-list {
            li {
              display: inline-block;
              margin-bottom: 0;
              margin-right: 5px;

              a {
                width: 32px;
                height: 32px;
                line-height: 32px;
                font-size: 14px;
                text-align: center;
                border-radius: 50%;
                color: $paragraph-color;
                border: 1px solid $paragraph-color;

                &:hover,
                &:focus {
                  color: $white-color;
                  background: $template-color;
                  border-color: $template-color;
                }
              }
            }
          }
        }
        .modal-search-form {
          position: relative;

          button {
            position: absolute;
            right: 0;
            top: 0;
            color: $white-color;
            border: none;
            height: 100%;
            padding: 0 25px;
            background: $template-color;
            transition: $transition;

            &:hover {
              background: $pink-color;
            }
          }
        }
      }
    }
  }
  .modal-header {
    display: inline;
    padding: 0;
    border: none;

    .close {
      height: 40px;
      width: 40px;
      background: $template-color;
      font-size: 25px;
      color: $white-color;
      margin: 0px;
      padding: 0px;
      cursor: pointer;
      transition: $transition;
      border: none;
      opacity: 1;

      &:hover {
        background: $template-color;
        color: $white_color;
        transition: $transition;
        opacity: 1;
      }
    }
    h2 {
      background: linear-gradient(142deg, #3ec9cf 0%, #2d136a 100%);
      padding: 30px 25px;
    }
  }
  button {
    &:focus {
      outline: 0;
    }
  }
}

/*================================================
Main Banner CSS
=================================================*/
.main-banner {
  background-color: $white-color;
  position: relative;
  z-index: 1;
  height: 810px;
  // display: flex;
}

.digital-agency-banner {
  // background-image: url("./../../images/home/header_bg.jpg");
  background-image: url("./../../images/bg-shape.jpg");
  background-position: center center;
  background-size: cover;
  position: relative;
  animation: oscillate 5s ease-in-out infinite;

}

.digital-agency-banner_notBrowser {
  //   background-image: url("./../../images/home/header_2.jpg");
  background-image: url("./../../images/bg-shape.jpg");

  background-position: center center;
  background-size: cover;
  position: relative;
}

.parallax_banner {
  position: relative;
  z-index: 1;
  height: 100%;
  overflow: hidden;
  pointer-events: auto;

  .imgHolder {
    position: relative;
    top: 15%;
    width: 35%; /* adjust this as needed */
    margin-left: 50% !important;
    margin-top: 5%;
  }

  img {
    position: relative;
    max-width: 100%;
    height: auto;
  }
  //   img {
  //     // position: relative;
  //     position: absolute !important;
  //     bottom: 0 !important;
  //     max-width: 100%;
  //     height: auto;
  //   }
}
h1 {
  font-size: 8vw;
}
h3 {
  font-size: 3vw;
}
h4 {
  font-size: 2vw;
  color: #6084a447;
}

.w-150 {
  width: 150px;
}
.hero-content {
  margin-top: 35px;

  h1 {
    font: {
      size: 65px;
      weight: 700;
    }
    text-transform: capitalize;
    margin-bottom: 0;
  }
  p {
    margin: {
      bottom: 30px;
      top: 25px;
    }
  }
  ul {
    padding: 0;
    margin: 20px 0 0;
    list-style-type: none;

    li {
      display: inline-block;
      margin-right: 5px;

      a {
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        border: 1px solid #eeeeee;
        border-radius: 50%;

        &.facebook {
          border-color: #4267b2;
          color: #4267b2;

          &:hover {
            background: #4267b2;
            border-color: #4267b2;
          }
        }
        &.twitter {
          border-color: #38a1f3;
          color: #38a1f3;

          &:hover {
            background: #38a1f3;
            border-color: #38a1f3;
          }
        }
        &.behance {
          border-color: #053eff;
          color: #053eff;

          &:hover {
            background: #053eff;
            border-color: #053eff;
          }
        }
        &.dribbble {
          border-color: #ea4c89;
          color: #ea4c89;

          &:hover {
            background: #ea4c89;
            border-color: #ea4c89;
          }
        }
        &.pinterest {
          border-color: #c8232c;
          color: #c8232c;

          &:hover {
            background: #c8232c;
            border-color: #c8232c;
          }
        }
        &:hover {
          color: $white-color;
          background: $template-color;
          border-color: $template-color;
        }
      }
    }
  }
}
.banner-image {
  text-align: right;

  img {
    position: relative;
    top: 74px;
    right: 0;
  }
}
.banner-social-buttons {
  position: absolute;
  left: 30px;
  top: 50%;
  transform-origin: 50% 50%;
  transform: translate(-50%, -50%) rotate(90deg);

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      display: inline-block;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
      a {
        color: $paragraph-color;

        i {
          width: 30px;
          height: 30px;
          line-height: 30px;
          border: 1px solid $paragraph-color;
          display: inline-block;
          text-align: center;
          margin-right: 10px;
          border-radius: 50%;
        }
        &:hover {
          color: $template-color;
        }
      }
    }
  }
}
#scroll-down {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding-top: 50px;
  display: block;
  text-align: center;

  .arrow-down {
    display: block;
    margin: 0 auto;
    width: 10px;
    height: 20px;

    &::after {
      content: "";
      display: block;
      margin: 0;
      padding: 0;
      width: 8px;
      height: 8px;
      border: {
        top: 2px solid $template-color;
        right: 2px solid $template-color;
      }
      transform: rotate(135deg);
    }
    &::before {
      animation: elasticus 1.2s cubic-bezier(1, 0, 0, 1) infinite;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -2px;
      width: 2px;
      height: 58px;
      background: $template-color;
      content: " ";
    }
  }
  #scroll-title {
    display: block;
    color: $pink-color;
    font-weight: 500;
    text-transform: capitalize;
  }
}
@keyframes elasticus {
  0% {
    transform-origin: 0% 0%;
    transform: scale(1, 0);
  }
  50% {
    transform-origin: 0% 0%;
    transform: scale(1, 1);
  }
  50.1% {
    transform-origin: 0% 100%;
    transform: scale(1, 1);
  }
  100% {
    transform-origin: 0% 100%;
    transform: scale(1, 0);
  }
}
.startup-agency-home {
  .main-banner {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      background: $white-color;
      width: 100%;
      height: 100%;
      opacity: 0.88;
      z-index: -1;
    }
    &::after {
      position: absolute;
      z-index: -2;
      content: "";
      width: 100%;
      height: 100%;
      background-image: url(../../images/dot.png);
      left: 0;
      top: 0;
    }
    .hero-content {
      position: relative;
      margin: {
        left: -115px;
        top: 0;
      }

      h1 {
        margin-bottom: 35px;
      }
    }
  }
}
.freelancer-portfolio-home {
  .banner-image {
    text-align: left;

    img {
      top: 33px;
      left: 0;
    }
  }
  .hero-content {
    h1 {
      text-transform: uppercase;
    }
  }
  .circle-shape1 {
    right: auto;
    left: 15%;
    bottom: 20%;
  }
  .circle-shape2 {
    left: 8%;
    right: auto;
  }
  .circle-shape3 {
    right: auto;
    left: 13%;
  }
  .shape4 {
    left: 50%;
    top: 17%;
  }
  .shape8 {
    left: 70%;
  }
  .shape9 {
    left: 54%;
  }
}
.agency-portfolio-home {
  .main-banner {
    height: 100%;
    padding: {
      top: 250px;
      bottom: 190px;
    }
    .hero-content {
      text-align: center;
      max-width: 720px;
      margin: 0 auto;

      h1 {
        font-size: 75px;
      }
    }
  }
}
/* creative-blog-home */
.blog-home-slides {
  .col-lg-12 {
    padding: 0 3px 0;
  }
  &.owl-carousel {
    &.owl-theme {
      .owl-nav {
        [class*="owl-"] {
          opacity: 0;
          visibility: hidden;
        }
        .owl-prev {
          left: 0;
        }
        .owl-next {
          right: 0;
        }
      }
    }
  }
  &:hover {
    &.owl-carousel {
      &.owl-theme {
        .owl-nav {
          [class*="owl-"] {
            opacity: 1;
            visibility: visible;
          }
          .owl-prev {
            left: 20px;
          }
          .owl-next {
            right: 20px;
          }
        }
      }
    }
  }
}
.single-blog-box {
  position: relative;

  .blog-image {
    a {
      display: block;
    }
  }
  .blog-post-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9));
    padding: 30px;

    div.tags {
      a {
        background: $template-color;
        color: $white-color;
        padding: 6px 15px;
      }
    }
    h3 {
      margin: 15px 0;
      font-size: 25px;
      line-height: 32px;

      a {
        color: $white-color;

        &:hover {
          color: $template-color;
        }
      }
    }

    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;

      li {
        display: inline-block;
        margin-right: 8px;
        color: $white-color;
        font-size: 14px;

        i {
          margin-right: 4px;
        }
        a {
          color: $template-color;
        }
        &:last-child {
          margin: 0;
        }
      }
    }
  }
  &:hover {
    .blog-post-content {
      div.tags {
        a {
          background: $pink-color;
        }
      }
    }
  }
}
/* creative-blog-home */

// .item-bg1 {
// 	background-image: url(../../images/main-bg-1.jpg);
// }
// // .item-bg2 {
// // 	background-image: url(../../images/main-bg-2.jpg);
// // }
// .item-bg3 {
// 	background-image: url(../../images/main-bg-3.jpg);
// }
// .item-bg4 {
// 	background-image: url(../../images/main-bg-4.jpg);
// }
// .item-bg5 {
// 	background-image: url(../../images/main-bg-5.jpg);
// }
// .item-bg6 {
// 	background-image: url(../../images/main-bg-6.jpg);
// }
.shape1 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.shape2 {
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}
.shape3 {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
}
.shape4 {
  position: absolute;
  left: 34%;
  top: 20%;
  width: 60px;
  animation: movebounce 4s linear infinite;
  z-index: -1;
}
.shape5 {
  position: absolute;
  right: 14%;
  animation: rotate3d 4s linear infinite;
  z-index: -1;
  top: 18%;
}
.shape6 {
  position: absolute;
  left: 3%;
  top: 50%;
  z-index: -1;
  animation: rotate3d 4s linear infinite;
}
.shape7 {
  position: absolute;
  z-index: -1;
  right: 7%;
  top: 34%;
  animation: moveleftbounce 3s linear infinite;
}
.shape8 {
  position: absolute;
  bottom: 4%;
  left: 30%;
  z-index: -1;
  animation: movebounce 3s linear infinite;
}
.shape9 {
  position: absolute;
  bottom: 10%;
  left: 15%;
  z-index: -1;
}
.shape10 {
  position: absolute;
  bottom: 7%;
  right: 4%;
  z-index: -1;
}
.circle-shape1 {
  position: absolute;
  bottom: 25%;
  right: 16%;
  z-index: -1;
  animation: movebounce 3s linear infinite;
}
.circle-shape2 {
  position: absolute;
  right: 13%;
  bottom: 0;
  z-index: -1;
  animation: moveleftbounce 3s linear infinite;
}
.circle-shape3 {
  z-index: -1;
  position: absolute;
  right: 7%;
  bottom: 0;
  animation: moveleftbounce 3s linear infinite;
}
@keyframes movebounce {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes moveleftbounce {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0px);
  }
}
.rotateme {
  animation-name: rotateme;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes rotateme {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes rotate3d {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  100% {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
}

/*================================================
Boxes Area CSS
=================================================*/
.boxes-area {
  position: relative;
  overflow: hidden;
  z-index: 1;

  .single-box {
    text-align: center;
    padding: {
      top: 120px;
      bottom: 120px;
      left: 30px;
      right: 30px;
    }

    .icon {
      font-size: 50px;
      color: $white-color;
    }
    h3 {
      font-size: 22px;
      margin: {
        top: 15px;
        bottom: 15px;
      }
      color: $white-color;
    }
    p {
      color: $white-color;
    }
    &.black-color {
      .icon {
        color: $template-color;
      }
      h3 {
        color: $black-color;
      }
      p {
        color: $black-color;
      }
    }
  }
  &::before,
  &::after {
    position: absolute;
    top: 0;
    width: 37%;
    height: 100%;
    content: "";
    z-index: -2;
  }
  &::before {
    left: 0;
    background: #08071c;
  }
  &::after {
    right: 0;
    background: $template-color;
  }
}

/*================================================
Services CSS
=================================================*/
.welcome-services {
  &.bg-38d16a {
    .section-title {
      span,
      h2 {
        color: $white-color;
      }
    }
  }
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
}
.services-area {
  padding-bottom: 90px;
  position: relative;
  z-index: 1;

  .single-services {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  }
}
.single-services {
  text-align: center;
  margin-bottom: 30px;
  padding: 40px 25px;
  background: $white-color;
  transition: $transition;

  .icon {
    font-size: 25px;
    width: 55px;
    height: 55px;
    line-height: 55px;
    background: $template-color;
    color: $white-color;
    border-radius: 50%;
    display: inline-block;
    border: 1px solid $template-color;
    transition: $transition;
  }
  h3 {
    font-size: 22px;
    margin: {
      top: 25px;
      bottom: 10px;
    }
  }

  p {
    margin-bottom: -5px;
  }
  &:hover {
    transform: translateY(-7px);

    .icon {
      background: transparent;
      color: $template-color;
    }
  }
}
.single-services-box {
  background: $white-color;
  padding: 30px;
  transition: $transition;
  margin-bottom: 30px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);

  .icon {
    font-size: 50px;
    transition: $transition;
    color: $blue-color;
    line-height: 1;
  }
  h3 {
    font-size: 20px;
    margin: {
      top: 20px;
      bottom: 10px;
    }
    transition: $transition;
  }

  h5 {
    font-size: 18px !important;
    font-weight: 400 !important;
    margin: {
      left: 5px;
      top: 15px;
      bottom: 10px;
    }
    transition: $transition;
  }

  p {
    transition: $transition;
  }
  &:hover {
    box-shadow: 0 0 28px 0 rgba(6, 74, 255, 0.22);
    background: $template-color;

    .icon,
    h3,
    h5,
    span,
    p {
      color: $white-color;
    }
  }
}
.more-services-btn {
  text-align: center;
  margin-top: 30px;

  .btn-primary {
    color: $template-color;
    background: $pink-color;

    &::before,
    &::after {
      background: $white-color;
    }
    &:hover,
    &:focus {
      color: $white-color;
    }
  }
}
.services-slides {
  &.owl-carousel {
    &.owl-theme {
      .owl-dots {
        position: relative;
        margin: {
          top: 20px !important;
          bottom: 30px;
        }
        right: 0;
        text-align: center;
        top: 0;
        line-height: 0.01;

        .owl-dot {
          display: inline-block;

          span {
            margin: 0 5px;
          }
        }
      }
    }
  }
}
.circle-top {
  position: absolute;
  top: -259px;
  z-index: -1;
  left: -262px;
}
.circle-bottom {
  position: absolute;
  bottom: -259px;
  z-index: -1;
  right: -262px;
}
.services-box {
  margin-bottom: 30px;

  .services-content {
    margin: {
      left: 10px;
      right: 10px;
    }
    position: relative;
    padding: 30px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
    margin-top: -20px;
    background: $white-color;

    h3 {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
}

/*================================================
About CSS
=================================================*/
.about-area {
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.about-content {
  .section-title {
    text-align: left;
    margin-bottom: 20px;
  }
  h2 {
    margin-left: 0;
  }
  p {
    margin-bottom: 15px;
  }
  .btn {
    margin-top: 15px;
  }
}
.about-image {
  position: relative;
  z-index: 1;
  text-align: right;

  &::before {
    content: "";
    position: absolute;
    right: -52px;
    top: 30px;
    width: 100%;
    height: 91%;
    background: $black-color;
    z-index: -1;
    transition: $transition;
  }
  img {
    width: 80%;
  }
  &:hover {
    &::before {
      top: 0;
      width: 50%;
      height: 100%;
    }
  }
}
.about-us-content {
  .section-title {
    margin-bottom: 2px;
    text-align: left;

    h2 {
      margin-left: 0;
    }
  }
  p {
    margin: {
      top: 18px;
      bottom: 0;
    }
  }
  .single-about-box {
    margin-top: 20px;

    .icon {
      font-size: 40px;
      color: $template-color;
    }
    h3 {
      font-size: 22px;
      margin: {
        top: 15px;
        bottom: 10px;
      }
    }
    p {
      margin: 0;
    }
  }
}
.cta-about {
  overflow: hidden;
  position: relative;
  z-index: 1;
  background-color: $white-color;
}
.cta-about-image {
  background: {
    image: url(../../images/blog-home-image/WED-37.jpg);
    position: center center;
    size: cover;
    repeat: no-repeat;
  }
  width: 100%;
  height: 100%;

  img {
    display: none;
  }
}
.cta-about-content {
  max-width: 700px;
  margin-left: 15px;

  .section-title {
    margin-bottom: 20px;
    text-align: left;

    h2 {
      margin: {
        left: 0;
      }
    }
  }
  .btn {
    margin-top: 15px;
  }
}

/*================================================
Why Choose Us CSS
=================================================*/
.why-choose-us-area {
  position: relative;
  overflow: hidden;
  z-index: 1;
  .align-items-center {
    &:hover {
      .why-choose-us-img {
        .front-img {
          top: 15px;
        }
        .back-img {
          left: 30px;
        }
      }
    }
  }
}
.why-choose-us-img {
  margin-bottom: 35px;

  .front-img {
    position: relative;
    z-index: 1;
    top: 35px;
    left: 35px;
    transition: $transition;
  }
  .back-img {
    position: absolute;
    left: 15px;
    top: 0;
    transition: $transition;
  }
}
.why-choose-us-content {
  .section-title {
    margin-bottom: 20px;
    text-align: left;

    h2 {
      margin: {
        left: 0;
      }
    }
  }
  .btn {
    margin-top: 20px;
  }
}
.why-choose-inner-area {
  margin-top: 100px;

  .section-title {
    h2 {
      text-transform: initial;
      max-width: 660px;
    }
  }
  .single-box {
    text-align: center;
    background: $white-color;
    box-shadow: 0 -2px 20px 0 rgba(0, 0, 0, 0.06);
    padding: 25px;
    transition: $transition;

    .icon {
      font-size: 40px;
      color: $template-color;
      transition: $transition;
    }
    h3 {
      font-size: 22px;
      margin: {
        top: 15px;
        bottom: 15px;
      }
    }
    &:hover {
      transform: translateY(-7px);

      .icon {
        color: $pink-color;
      }
    }
  }
}
.circle-dot {
  position: absolute;
  top: 80px;
  left: -45px;
  z-index: -1000;
}

/*================================================
Crafting CSS
=================================================*/
.crafting-area {
  position: relative;
  z-index: 1;
}
.crafting-content {
  .single-item {
    text-align: center;
    width: 250px;
    padding: 45px 10px;
    border-radius: 5px;
    position: absolute;

    &.item-one {
      background-image: linear-gradient(40deg, #e87e16 0, #f0de14 100%);
      box-shadow: 0 20px 40px 0 rgba(224, 149, 32, 0.4);
      right: 65px;
      top: -170px;
      z-index: 1;
      animation: movebounce 5s linear infinite;
    }
    &.item-two {
      background-image: linear-gradient(40deg, #13c4a1 0, #41cbb0 100%);
      box-shadow: 0 20px 40px 0 rgba(19, 196, 161, 0.4);
      left: 20px;
      top: 0;
      animation: movebounce 4s linear infinite;
    }
    &.item-three {
      background-image: linear-gradient(40deg, #008000 0, #268b26 100%);
      box-shadow: 0 20px 40px 0 rgba(0, 128, 0, 0.4);
      left: 0;
      bottom: 0;
      animation: movebounce 6s linear infinite;
    }
    &.item-four {
      background-image: linear-gradient(40deg, #ff8a73 0, #f89b88 100%);
      box-shadow: 0 20px 40px 0 rgba(255, 138, 115, 0.4);
      right: 35px;
      top: 0;
      animation: movebounce 3s linear infinite;
    }
    i {
      font-size: 40px;
      color: $white-color;
    }
    h6 {
      font: {
        size: 18px;
      }
      text-transform: capitalize;
      color: $white-color;
      margin: {
        top: 15px;
        bottom: 0;
      }
    }
  }
}
.crafting-image {
  position: relative;
  text-align: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $black-color;
    opacity: 0.77;
    z-index: 1;
  }
  img {
    transition: $transition;
  }
  .video-btn {
    position: absolute;
    left: 50%;
    margin-left: -25px;
    top: 50%;
    color: $white-color;
    font-size: 30px;
    margin-top: -45px;
    width: 85px;
    height: 85px;
    line-height: 87px;
    border-radius: 50%;
    background: $template-color;
    z-index: 2;
    animation: ripple-white 1s linear infinite;
  }
  &:hover {
    img {
      transform: scale(1.3);
    }
    .video-btn {
      background: $pink-color;
    }
  }
}
@keyframes ripple-white {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2),
      0 0 0 20px rgba(255, 255, 255, 0.2), 0 0 0 40px rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2),
      0 0 0 20px rgba(255, 255, 255, 0.2), 0 0 0 40px rgba(255, 255, 255, 0.2);
  }
  100% {
    -webkit-box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.2),
      0 0 0 40px rgba(255, 255, 255, 0.2), 0 0 0 60px rgba(255, 255, 255, 0);
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.2),
      0 0 0 40px rgba(255, 255, 255, 0.2), 0 0 0 60px rgba(255, 255, 255, 0);
  }
}

/*================================================
Our Work CSS
=================================================*/
.works-area {
  position: relative;
  z-index: 1;

  &.bg-08071c {
    .section-title {
      h2 {
        color: $white-color;
      }
    }
  }
}
.single-work {
  position: relative;
  text-align: center;
  overflow: hidden;
  transition: $transition;
  margin-bottom: 30px;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $black-color;
    content: "";
    opacity: 0;
    visibility: hidden;
    transition: $transition;
  }
  .works-content {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: -140px auto 0;
    padding: 0 10px;
    transition: $transition;
    opacity: 0;
    visibility: hidden;

    p {
      color: $white-color;
      max-width: 520px;
      margin: 0 auto;
    }
    h3 {
      font-size: 22px;
      margin-bottom: 15px;

      a {
        color: $white-color;

        &:hover {
          color: $template-color;
        }
      }
    }
  }
  .link-btn {
    position: absolute;
    left: 25px;
    bottom: 0;
    font-size: 20px;
    color: $white-color;
    opacity: 0;
    visibility: hidden;

    &:hover {
      color: $template-color;
    }
  }
  .popup-btn {
    position: absolute;
    right: 0;
    bottom: 25px;
    font-size: 20px;
    color: $white-color;
    opacity: 0;
    visibility: hidden;

    &:hover {
      color: $template-color;
    }
  }
  &:hover {
    &::before {
      visibility: visible;
      opacity: 0.92;
    }
    .works-content {
      margin-top: -60px;
      visibility: visible;
      opacity: 1;
    }
    .link-btn {
      opacity: 1;
      visibility: visible;
      bottom: 25px;
    }
    .popup-btn {
      opacity: 1;
      right: 25px;
      visibility: visible;
    }
  }
}
.shape11 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  animation: movebounce 4s linear infinite;
}
.shape12 {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  animation: movebounce 4s linear infinite;
}

/*================================================
Portfolio CSS
=================================================*/
.portfolio-area {
  .section-title {
    h2 {
      color: $white-color;
    }
  }
}
.portfolio-item {
  position: relative;
  overflow: hidden;

  img {
    transition: $transition;
  }
  .portfolio-content {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
    width: 100%;
    height: auto;
    opacity: 0;
    visibility: hidden;
    transition: $transition;

    h3 {
      font-size: 22px;
      margin: {
        bottom: 15px;
        left: -20px;
      }
      position: relative;
      transition: $transition;
    }
    span {
      font-size: 14px;
      text-transform: uppercase;
      position: relative;
      display: block;
      transition: $transition;
      margin-left: 20px;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50%;
      height: 100%;
      background: $white-color;
      opacity: 0;
      visibility: hidden;
      transition: $transition;
    }
  }
  &:hover {
    .portfolio-content {
      opacity: 1;
      visibility: visible;

      &::before {
        width: 100%;
        opacity: 1;
        visibility: visible;
      }
      h3 {
        margin-left: 0;
      }
      span {
        margin-left: 0;
      }
    }
    img {
      transform: scale(1.3);
    }
  }
}
.grid {
  max-width: 100%;

  .item {
    display: block;
    padding: 1px;
    opacity: 1;
  }
}

/*================================================
Feedback CSS
=================================================*/
.feedback-area {
  position: relative;
  z-index: 1;
}
.feedback-slides {
  &.owl-carousel {
    &.owl-theme {
      .owl-nav {
        position: absolute;
        left: 160px;
        bottom: -11px;

        [class*="owl-"] {
          transition: $transition;
          font-size: 25px;
          color: $white-color;
          padding: 0 !important;
          background: transparent;
          left: 0;
          position: relative;
          margin: 0;
          width: auto;
          height: auto;
          line-height: unset;

          &:hover {
            color: $pink-color;
            background: transparent;
          }
        }
      }
    }
  }
}
.feedback-area-two {
  position: relative;
  z-index: 1;

  .feedback-slides {
    &.owl-carousel {
      &.owl-theme {
        .owl-nav {
          position: unset;
          left: 0;
          bottom: 0;
          right: 0;

          [class*="owl-"] {
            position: absolute;
            left: 0;

            &.owl-next {
              left: auto;
              right: 0;
            }
          }
        }
      }
    }
  }
}
.single-feedback {
  position: relative;
  padding-left: 150px;
  max-width: 920px;
  margin-bottom: 40px;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 125px !important;
    display: inline-block !important;
    border-radius: 50%;
    height: 125px;
  }
  p {
    font: {
      size: 20px;
      style: italic;
      family: $font-family;
      weight: 300;
    }
    color: $white-color;
    margin-bottom: 20px;
  }
  h3 {
    display: inline-block;
    margin: 0;
    font-size: 20px;
    color: $white-color;
  }
  span {
    display: inline-block;
    color: $white-color;
    margin-left: 4px;
    font: {
      size: $font-size;
      weight: 400;
    }
  }
  &.center-feedback-box {
    margin: 0 auto;
    padding: {
      left: 15px;
      right: 15px;
    }
    text-align: center;

    img {
      position: relative;
      margin-bottom: 25px;
    }
  }
}
.quote-img {
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  margin: auto;
  top: 50%;
  margin-top: -170px;
  height: 350px;
}

/*================================================
How We Works CSS
=================================================*/
.how-we-work {
  position: relative;
  z-index: 1;
}
.single-work-box {
  position: relative;
  box-shadow: 0 -2px 20px 0 rgba(0, 0, 0, 0.06);
  background: $white-color;
  padding: 25px;
  border-radius: 5px;
  transition: $transition;
  z-index: 1;

  h3 {
    font-size: 22px;
    margin: {
      bottom: 10px;
      top: 25px;
    }
    transition: $transition;
  }
  p {
    transition: $transition;
    margin: 0;
  }
  .number {
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    background: $black-color;
    color: $white-color;
    font: {
      size: 16px;
      weight: 600;
    }
    border-radius: 50%;
    transition: $transition;
  }
  i {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 145px;
    color: #eeeeee;
    z-index: -1;
    transition: $transition;
    opacity: 0.5;
  }
  &:hover {
    background: $template-color;
    transform: translateY(-5px);

    i {
      font-size: 130px;
      opacity: 0.1;
    }
    h3,
    p {
      color: $white-color;
    }
    .number {
      background: $pink-color;
    }
  }
}

/*================================================
Team CSS
=================================================*/
// .team-area {
// 	position: relative;
// 	z-index: 1;
// 	padding-bottom: 90px;
// 	overflow: hidden;

// 	&.bg-image {
// 		background: {
// 			image: url(../../images/bg-shape.jpg);
// 			attachment: fixed;
// 			repeat: no-repeat;
// 			position: center center;
// 			size: cover;
// 		}
// 	}
// }
.single-team {
  margin-bottom: 30px;

  .team-image {
    z-index: 1;
    position: relative;
    margin-right: 10px;

    .member-img {
      position: relative;
      top: 10px;
      left: 10px;
      transition: $transition;
      width: 100%;
    }
    .back-image {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }
    .social-links {
      position: absolute;
      right: 20px;
      bottom: 0;
      list-style-type: none;
      padding: 0;
      margin: 0;
      opacity: 0;
      visibility: hidden;
      transition: $transition;

      li {
        display: block;
        margin-bottom: 5px;

        a {
          width: 35px;
          height: 35px;
          text-align: center;
          line-height: 35px;
          border: 1px solid $white-color;
          border-radius: 50%;
          background: $white-color;

          &:hover {
            background: $template-color;
            border-color: $template-color;
            color: $white-color;
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .team-content {
    margin-top: 40px;

    h3 {
      font-size: 22px;
      margin-bottom: 9px;
    }
    span {
      display: block;
      text-transform: uppercase;
      font-size: 14px;
      color: $paragraph-color;
    }
  }
  &:hover {
    .team-image {
      .social-links {
        opacity: 1;
        visibility: visible;
        right: 0;
      }
    }
  }
}
.single-team-box {
  margin-bottom: 30px;
  text-align: center;
  transition: $transition;
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.06);

  .team-content {
    background: $white-color;
    padding: 30px 0;
    position: relative;
    transition: $transition;

    &::before {
      content: "";
      width: 0;
      height: 20px;
      color: $white-color;
      background: $template-color;
      position: absolute;
      top: -20px;
      right: 0;
      transition: $transition;
    }
    h3 {
      font-size: 22px;
      margin-bottom: 12px;
      transition: $transition;
    }
    span {
      display: block;
      font-size: 14px;
      text-transform: uppercase;
      transition: $transition;
    }
    .social {
      padding: 0;
      margin: 0;
      list-style-type: none;
      position: absolute;
      top: -37px;
      left: 0;
      right: 0;
      margin: 0 auto;
      transform: scale(0);
      transition: $transition;

      li {
        display: inline-block;

        a {
          display: block;
          width: 35px;
          height: 35px;
          line-height: 35px;
          font-size: 16px;
          color: #a0a0a0;
          margin-right: 10px;
          position: relative;
          z-index: 1;

          &:hover {
            color: $white-color;

            &::before {
              background: $pink-color;
              color: $white-color;
              transform: rotate(-45deg);
            }
          }
          &::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: $white-color;
            transform: rotate(45deg);
            z-index: -1;
            transition: $transition;
          }
        }
      }
    }
  }
  &:hover {
    box-shadow: 0 0 28px 0 rgba(6, 74, 255, 0.22);

    &::before,
    &::after {
      border-color: $template-color;
      transform: scale(1);
    }
    .team-content {
      background: $template-color;

      &::before {
        width: 100%;
      }
      .social {
        transform: scale(1);
      }
      h3,
      span {
        color: $white-color;
      }
    }
  }
}
@keyframes colorchange {
  0% {
    background: $template-color;
  }
  25% {
    background: red;
  }
  50% {
    background: blue;
  }
  75% {
    background: $black-color;
  }
  0% {
    background: $pink-color;
  }
}

/*================================================
CTA CSS
=================================================*/
.cta-area {
  position: relative;
  z-index: 1;

  .shape9 {
    bottom: auto;
    left: 15%;
    top: 15%;
  }
  .shape7 {
    right: auto;
    top: auto;
    left: 20%;
    bottom: 35px;
    width: 35px;
  }
  .shape5 {
    right: 14%;
    top: auto;
    bottom: 45px;
  }
}
.cta-content {
  text-align: center;

  span {
    color: $template-color;
    display: block;
    text-transform: uppercase;
    font-size: 15px;
    margin-bottom: 20px;
    margin-top: -5px;
  }
  h2 {
    font-size: 40px;
    margin: 0;
    color: $white-color;
    text-transform: capitalize;
  }
  p {
    color: $white-color;
    margin: {
      top: 15px;
      bottom: 30px;
      left: auto;
      right: auto;
    }
    max-width: 620px;
  }
}
.shape14 {
  position: absolute;
  right: 10%;
  top: 10%;
  z-index: -1;
  width: 130px;
}
.shape15 {
  position: absolute;
  left: 5%;
  bottom: 30px;
  z-index: -1;
  width: 80px;
}

/*================================================
Features CSS
=================================================*/
.features-area {
  position: relative;
  z-index: 1;

  .shape7 {
    top: auto;
    right: 20%;
    bottom: 35px;
    width: 35px;
  }
}
.features-content {
  .section-title {
    text-align: left;

    h2 {
      color: $white-color;
      margin: {
        left: 0;
      }
    }
  }
  .single-features-item {
    position: relative;
    padding-left: 50px;
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
    .icon {
      font-size: 35px;
      color: $template-color;
      position: absolute;
      left: 0;
      top: -8px;
    }
    h3 {
      font-size: 18px;
      margin-bottom: 15px;
      color: $white-color;
    }
    p {
      color: $white-color;
    }
  }
}
.features-boxes-area {
  overflow: hidden;
  position: relative;
  z-index: 1;

  .single-box {
    position: relative;
    padding-left: 75px;

    span {
      font-size: 40px;
      position: absolute;
      left: 0;
      color: $template-color;
      top: 0;
      font-weight: 600;
      line-height: 1;
    }
    h3 {
      font-size: 22px;
      color: $white-color;
      margin-bottom: 15px;
    }
    p {
      color: #9c9ca4;
    }
  }
}

/*================================================
Our Skill CSS
=================================================*/
.our-skill {
  .section-title {
    text-align: left;

    h2 {
      margin-left: 0;
    }
  }
  p {
    margin-top: 10px;
  }
  .skills {
    position: relative;

    .skill-item {
      position: relative;
      margin-bottom: 25px;
      .skill-header {
        position: relative;
        margin-bottom: 10px;

        .skill-title {
          font-size: 17px;
          margin-bottom: 0;
        }
        .skill-percentage {
          position: absolute;
          right: 0;
          top: 4px;
          font: {
            size: 16px;
            weight: 300;
            family: $font-family;
          }
          color: $paragraph-color;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.skill-bar {
  position: relative;
  width: 100%;
  .progress {
    height: 7px;
    background-color: #d5d5d5;

    .progress-bar {
      background-color: $template-color;
    }
  }
}

.skill-area {
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.my-skill-area {
  position: relative;
  z-index: 1;
}
.skill-content {
  h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 15px;
  }
  .btn {
    margin-top: 10px;
  }
}
.skill-image {
  position: relative;
  z-index: 1;
  text-align: right;

  .back-image {
    position: absolute;
    right: -60px;
    z-index: -1;
    top: 10%;
    animation: movebounce 3s linear infinite;
  }

  .smaller {
    max-width: 20% !important;
  }

  img.man-image {
    max-width: 435px;
    width: 100%;
  }
}

/*================================================
Fun Facts CSS
=================================================*/
.funfacts-area {
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.funfact {
  text-align: center;

  h3 {
    font: {
      size: 45px;
      weight: 600;
    }
    color: $white-color;
    margin-bottom: 0;
  }
  p {
    color: $white-color;
    font-size: 14px;
    text-transform: uppercase;
    margin-top: 5px;
  }
}

/*================================================
Blog CSS
=================================================*/
.blog-area {
  padding-bottom: 90px;
  // height: 100vh;
  height: calc(100vh - 60px);

  .pagination-area {
    margin-bottom: 30px;
  }
}
.single-blog-post {
  margin-bottom: 30px;
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.06);

  .blog-image {
    position: relative;
    overflow: hidden;

    a {
      display: block;

      img {
        transition: 0.9s;
      }
    }
    .post-tag {
      position: absolute;
      right: 0;
      top: 60px;
      transition: $transition;

      a {
        background: $template-color;
        color: $white-color;
        padding: 9px 28px;
      }
    }
  }
  .blog-post-content {
    padding: 25px;

    .date {
      color: $paragraph-color;
      display: block;
      text-transform: uppercase;
      font-size: 14px;
    }
    h3 {
      margin: {
        top: 13px;
        bottom: 18px;
      }
      line-height: 30px;
      font-size: 22px;
    }
  }
  .read-more-btn {
    position: relative;
    font-weight: 500;
    color: $template-color;

    &:hover {
      color: $pink-color;
      letter-spacing: 1px;
    }
  }
  &:hover {
    .blog-image {
      a {
        img {
          transform: scale(1.1);
        }
      }
      .post-tag {
        top: 70px;

        a {
          background: $pink-color;
          color: $white-color;
        }
      }
    }
  }
  &.without-thumbnail {
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.06);

    .blog-post-content {
      p {
        margin: {
          bottom: 20px;
          top: -5px;
        }
      }
    }
  }
  &.with-video {
    .blog-video {
      iframe {
        width: 100%;
        height: 195px;
        border: none;
      }
    }
  }
}

/*================================================
Our Partner CSS
=================================================*/
.partner-area {
  .partner-item {
    text-align: center;

    a {
      position: relative;
      display: block;

      img {
        width: unset !important;
        display: inline-block !important;

        &:last-child {
          position: absolute;
          left: 0;
          top: 30px;
          right: 0;
          margin: 0 auto;
          opacity: 0;
          visibility: hidden;
          transition: $transition;
        }
      }
    }
    &:hover {
      a {
        img {
          &:last-child {
            opacity: 1;
            visibility: visible;
            top: 0;
          }
        }
      }
    }
  }
}

/*================================================
Contact CTA CSS
=================================================*/
.contact-cta-area {
  position: relative;
  z-index: 1;
}
.contact-cta-content {
  text-align: center;

  .section-title {
    margin-bottom: 20px;
  }
  p {
    max-width: 720px;
    margin: 0 auto 30px;
  }
}
.shape13 {
  position: absolute;
  left: 5%;
  top: 41%;
  z-index: -1;
}
.shape18 {
  position: absolute;
  top: 10%;
  left: 10%;
  z-index: -1;
  animation: movebounce 3s linear infinite;
}
.shape19 {
  position: absolute;
  bottom: 10%;
  left: 10%;
  z-index: -1;
  animation: moveleftbounce 3s linear infinite;
}
.shape20 {
  position: absolute;
  right: 10%;
  z-index: -1;
  bottom: 10%;
}
.shape21 {
  position: absolute;
  top: 15%;
  right: 14%;
  z-index: -1;
  animation: rotate3d 4s linear infinite;
}
.shape22 {
  position: absolute;
  right: 7%;
  z-index: -1;
  top: 45%;
  animation: movebounce 3s linear infinite;
}
.shape23 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.shape24 {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  display: none;
}
.shape25 {
  position: absolute;
  top: 185px;
  left: 0;
  z-index: -1;
  animation: movebounce 3s linear infinite;
}
.shape26 {
  position: absolute;
  z-index: -1;
  left: 50px;
  bottom: 10%;
}
.shape27 {
  position: absolute;
  z-index: -1;
  top: -60px;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
}

/*================================================
Page Title CSS
=================================================*/
.page-title-area {
  position: relative;
  z-index: 1;
  padding: {
    top: 235px;
    bottom: 140px;
  }
  background: {
    position: center;
    attachment: fixed;
    repeat: no-repeat;
    size: cover;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: $white-color;
    width: 100%;
    height: 100%;
    opacity: 0.85;
    z-index: -1;
  }
  &::after {
    position: absolute;
    z-index: -2;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(../../images/dot.png);
    left: 0;
    top: 0;
  }
  h1 {
    font: {
      size: 42px;
      weight: 600;
    }
    margin-bottom: 20px;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      color: $template-color;
      display: inline-block;
      position: relative;
      padding-left: 15px;
      font-weight: 500;

      &::before {
        content: "";
        position: absolute;
        left: 5px;
        top: 50%;
        width: 2px;
        height: 14px;
        background: $black-color;
        margin-top: -7px;
        transform: rotate(10deg);
      }
      &:first-child {
        padding-left: 0;

        &::before {
          display: none;
        }
      }
    }
  }
}

/*================================================
Pagination CSS
=================================================*/
.pagination-area {
  margin-top: 30px;

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;

    .page-item {
      .page-link {
        padding: 8px 16px;
        line-height: unset;
        color: $black-color;
        background-color: $white-color;
        font: {
          size: 16px;
          weight: 500;
        }
        border: 1px solid #eeeeee;

        &:hover,
        &:focus {
          color: $white-color;
          background: $template-color;
          border-color: $template-color;
          box-shadow: unset !important;
        }
      }
      &.active {
        .page-link {
          color: $white-color;
          background: $template-color;
          border-color: $template-color;
          box-shadow: unset !important;
        }
      }
    }
  }
}

/*================================================
Sidebar CSS
=================================================*/
.sidebar {
  .widget {
    margin-bottom: 30px;

    &.widget_search {
      background: $white-color;
      box-shadow: 0px 0px 29px 0px rgba(102, 102, 102, 0.1);
      padding: 15px;

      form {
        position: relative;

        button {
          position: absolute;
          right: 5px;
          top: 0;
          height: 100%;
          border: none;
          background: transparent;
          color: $template-color;
          transition: $transition;

          &:hover {
            color: $pink-color;
          }
        }
      }
    }
    h3,
    .widget-title {
      font-size: 22px;
      margin-bottom: 25px;
      position: relative;

      span {
        z-index: 2;
        position: relative;
        background: $white-color;
        padding-right: 10px;
      }
      &::before {
        content: "";
        position: absolute;
        right: 0;
        width: 100%;
        top: 50%;
        height: 3px;
        background: $template-color;
        transition: $transition;
        animation: colorchange 20s;
      }
    }
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    &.widget_categories {
      ul {
        li {
          position: relative;
          border-top: 1px solid #eeeeee;
          padding: {
            top: 10px;
            bottom: 10px;
            left: 18px;
          }
          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            width: 10px;
            height: 10px;
            background: $template-color;
            margin-top: -5px;
            transition: $transition;
          }
          &:last-child {
            border-bottom: 1px solid #eeeeee;
          }
          a {
            color: $paragraph-color;

            &:hover {
              color: $template-color;
            }
          }
          &:hover {
            &::before {
              border-radius: 50%;
            }
          }
        }
      }
    }
    &.widget_recent_entries {
      ul {
        li {
          position: relative;
          padding-left: 100px;
          margin-bottom: 15px;

          a {
            display: block;

            img {
              position: absolute;
              left: 0;
              top: 3px;
              width: 85px;
              height: 65px;
            }
          }
          h5 {
            font-size: 16px;
            line-height: 22px;
            margin-bottom: 2px;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    &.widget_tag_cloud {
      .tagcloud {
        a {
          background-color: #fff;
          font-size: 15px !important;
          border: 1px dashed #eeeeee;
          padding: 7px 20px;
          margin-top: 5px;
          margin-bottom: 5px;
          color: $paragraph-color;
          margin-right: 10px;

          &:hover {
            background: $template-color;
            color: $white-color;
            border-color: $template-color;
          }
        }
      }
    }
    &.widget_archive {
      ul {
        li {
          position: relative;
          border-top: 1px solid #eeeeee;
          padding: {
            top: 10px;
            bottom: 10px;
            left: 18px;
          }
          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            width: 10px;
            height: 10px;
            background: $template-color;
            margin-top: -5px;
            transition: $transition;
          }
          &:last-child {
            border-bottom: 1px solid #eeeeee;
          }
          a {
            color: $paragraph-color;

            &:hover {
              color: $template-color;
            }
          }
          &:hover {
            &::before {
              border-radius: 50%;
            }
          }
        }
      }
    }
    &:hover {
      h3,
      .widget-title {
        &::before {
          width: 0;
        }
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}

/*================================================
Blog Details CSS
=================================================*/
.blog-details-area {
  position: relative;

  .blog-details {
    box-shadow: 0px 0px 29px 0px rgba(102, 102, 102, 0.1);
    background: $white-color;

    .article-img {
      position: relative;

      .date {
        position: absolute;
        bottom: 15px;
        width: 80px;
        left: 15px;
        height: 90px;
        text-align: center;
        font: {
          size: 22px;
          style: italic;
        }
        background: $template-color;
        color: $white-color;
        border-radius: 5px;
        padding-top: 15px;
        line-height: 30px;
      }
    }
    .article-content {
      padding: 30px;

      ul {
        li {
          display: inline-block;
        }
        &.category {
          li {
            margin-right: 4px;

            a {
              background: $template-color;
              color: $white-color;
              padding: 5px 15px 3px;
              display: inline-block;
              border-radius: 3px;
            }
          }
          margin-bottom: 30px;
        }
      }
      h3 {
        font: {
          size: 22px;
        }
        margin-bottom: -2px;
        line-height: 30px;
      }
      p {
        margin: {
          bottom: 0;
          top: 20px;
        }
      }
      .blockquote {
        margin: {
          bottom: 20px;
          top: 20px;
        }
        background: $bg-gray;
        padding: 30px;
        border-left: 4px solid $template-color;

        p {
          margin-top: 0;
          font-size: 18px;
        }
      }
      .share-post {
        text-align: center;
        margin-top: 30px;

        ul {
          li {
            margin: 0 2px;

            a {
              width: 40px;
              font-size: 15px;
              height: 40px;
              display: inline-block;
              line-height: 38px;
              border: 1px solid #eeeeee;
              border-radius: 50%;
              color: #555555;

              &:hover,
              &:focus {
                color: $white-color;
                border-color: $template-color;
                background-color: $template-color;
              }
            }
          }
        }
      }
      ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
      }
    }
  }
  .post-controls-buttons {
    overflow: hidden;
    margin: {
      top: 25px;
      bottom: 25px;
    }
    background: $white-color;
    padding: 30px;
    box-shadow: 0 5px 10px rgba(0, 9, 128, 0.035),
      0 7px 18px rgba(0, 9, 128, 0.05);

    .controls-left {
      float: left;
    }
    .controls-right {
      float: right;
    }
    div {
      a {
        border: 1px solid #eeeeee;
        padding: 8px 20px;
        display: inline-block;
        border-radius: 5px;
        font-weight: 500;

        &:hover,
        &:focus {
          color: $white-color;
          background: $template-color;
          border-color: $template-color;
        }
      }
    }
  }
  .post-comments {
    padding: 30px;
    background: $white-color;
    box-shadow: 0 5px 10px rgba(0, 9, 128, 0.035),
      0 7px 18px rgba(0, 9, 128, 0.05);

    h3 {
      font: {
        size: 22px;
      }
      margin-bottom: 5px;
    }
    .single-comment {
      position: relative;
      padding-left: 95px;
      margin-top: 30px;

      .comment-img {
        position: absolute;
        left: 0;
        top: 0;
        width: 75px;
        height: 75px;

        img {
          border-radius: 50%;
        }
      }
      .comment-content {
        h4 {
          font: {
            size: 16px;
          }
          margin-bottom: 10px;
        }
        span {
          color: $paragraph-color;
          font-size: 14px;
        }
        p {
          margin-bottom: 15px;
        }
        a {
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
      &.left-m {
        margin-left: 85px;
      }
    }
  }
  .leave-a-reply {
    padding: 30px;
    background: $white-color;
    box-shadow: 0 5px 10px rgba(0, 9, 128, 0.035),
      0 7px 18px rgba(0, 9, 128, 0.05);
    margin-top: 25px;

    h3 {
      font: {
        size: 22px;
      }
      margin-bottom: 30px;
    }
  }
}

/*================================================
Shop CSS
=================================================*/
.woocommerce-topbar {
  margin-bottom: 30px;
}
.single-product {
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.06);
  background: $white-color;
  margin-bottom: 30px;

  .product-image {
    overflow: hidden;
    a {
      display: block;
    }
    img {
      transition: $transition;
      width: 100%;
    }
  }
  .product-content {
    padding: 30px;
    text-align: center;

    h3 {
      font-size: 22px;
      margin-bottom: 8px;
    }
    ul,
    .rating {
      padding: 0;
      margin: 0;
      list-style-type: none;

      li {
        display: inline-block;
        color: #ffc412;
        margin: 0 2px;
      }
    }
    span {
      display: block;
      color: $paragraph-color;
      font: {
        weight: 500;
        size: 15px;
      }
      margin: {
        top: 15px;
        bottom: 15px;
      }
    }
  }
  &:hover {
    .product-image {
      img {
        transform: scale(1.3);
      }
    }
  }
}

/*================================================
Product Details CSS
=================================================*/
.shop-details-area {
  padding-bottom: 90px;
}
.shop-details {
  background: $white-color;
  padding: 30px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);

  .product-img {
    a {
      display: block;
    }
  }
  .product-entry-summary {
    h3 {
      font: {
        size: 22px;
      }
      text-transform: capitalize;
      margin-bottom: 0;
    }
    h4 {
      font: {
        size: 15px;
      }
      margin: 16px 0;

      span {
        color: $paragraph-color;
        text-decoration: line-through;
      }
    }
    p {
      margin-bottom: 16px;
    }
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;

      &.share-social {
        li {
          margin-right: 4px;
          display: inline-block;

          &:first-child {
            margin: 7px;
          }
          a {
            color: $paragraph-color;
            width: 35px;
            height: 35px;
            border: 1px solid $paragraph-color;
            text-align: center;
            border-radius: 50%;
            line-height: 35px;

            &:hover {
              color: $white-color;
              background: $template-color;
              border-color: $template-color;
            }
          }
        }
      }
    }
    form {
      margin: {
        top: 30px;
        bottom: 30px;
      }
      .form-control {
        display: inline-block;
        width: 120px;
      }
      .btn {
        display: inline-block;
        position: relative;
        top: -1px;
      }
      .input-counter {
        max-width: 130px;
        min-width: 130px;
        text-align: center;
        display: inline-block;
        position: relative;
        margin-right: 10px;

        input {
          height: 45px;
          color: $black-color;
          outline: 0;
          display: block;
          border: none;
          background-color: #f8f8f8;
          text-align: center;
          width: 100%;
          font-size: 17px;
          font-weight: 600;
        }
        span {
          position: absolute;
          top: 0;
          background-color: transparent;
          cursor: pointer;
          color: #d0d0d0;
          width: 40px;
          height: 100%;
          line-height: 48px;
          transition: $transition;

          &.minus-btn {
            left: 0;
          }
          &.plus-btn {
            right: 0;
          }
          &:hover {
            color: $template-color;
          }
        }
      }
    }
  }
  .shop-details-tabs {
    margin-top: 40px;

    #tabs {
      padding: 0;
      margin: 0 0 40px;
      list-style-type: none;

      li {
        display: inline-block;
        padding: 12px 50px 8px;
        cursor: pointer;
        font: {
          weight: 500;
          size: 16px;
        }
        background: #eaeaea;

        &.active {
          background-color: $white-color;
          position: relative;

          &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 4px;
            top: 0;
            left: 0;
            background: $template-color;
          }
        }
        &.inactive {
          background-color: #eeeeee;
          padding: 12px 50px;
        }
      }
    }
    .content {
      display: none;

      &.show {
        display: block;
      }
      h3 {
        margin-bottom: 15px;
        font: {
          size: 22px;
        }
      }
      .shop-reviews {
        b {
          margin: 0 0 15px;
          display: inline-block;
        }
        ul {
          padding: 0;
          margin: 0;
          list-style-type: none;

          li {
            display: inline-block;
            position: relative;
            margin: {
              right: 15px;
            }

            &::before {
              content: "";
              position: absolute;
              width: 1px;
              height: 13px;
              background: #eeeeee;
              left: -10px;
              top: 6px;
            }
            &:first-child {
              &::before {
                display: none;
              }
            }
            a {
              color: #ff9800;
            }
          }
        }
        .review-form {
          margin-top: 30px;
        }
      }
    }
  }
}
.shop-related-prodcut {
  margin-top: 50px;

  .section-title {
    text-align: left;
    margin-bottom: 40px;

    h2 {
      margin-left: 0;
      font-size: 30px;
    }
  }
}

/*================================================
Cart CSS
=================================================*/
.cart-table {
  table {
    margin-bottom: 0;
    text-align: center;

    thead {
      tr {
        th {
          border-bottom-width: 0;
          vertical-align: middle;
          border-color: #eaedff;
          padding: 15px 20px;
          font-weight: 500;
        }
      }
    }
    tbody {
      tr {
        td {
          vertical-align: middle;
          color: $paragraph-color;
          border-color: #eaedff;

          &.product-thumbnail {
            a {
              display: block;

              img {
                width: 130px;
              }
            }
          }
          &.product-name {
            a {
              color: $paragraph-color;

              &:hover {
                color: $template-color;
              }
            }
          }
          &.product-remove {
            a {
              color: red;
            }
          }
          .input-counter {
            max-width: 130px;
            min-width: 130px;
            text-align: center;
            display: inline-block;
            position: relative;

            input {
              height: 45px;
              color: $black-color;
              outline: 0;
              display: block;
              border: none;
              background-color: #f8f8f8;
              text-align: center;
              width: 100%;
              font-size: 17px;
              font-weight: 600;
            }
            span {
              position: absolute;
              top: 0;
              background-color: transparent;
              cursor: pointer;
              color: #d0d0d0;
              width: 40px;
              height: 100%;
              line-height: 48px;
              transition: $transition;

              &.minus-btn {
                left: 0;
              }
              &.plus-btn {
                right: 0;
              }
              &:hover {
                color: $template-color;
              }
            }
          }
        }
      }
    }
  }
}
.cart-buttons {
  margin-top: 30px;

  .coupon-box {
    position: relative;
    max-width: 470px;

    button {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      padding: 0 20px;
      border: none;
      background: $pink-color;
      font-weight: 500;
      transition: $transition;
      cursor: pointer;
      border-radius: 0 5px 5px 0;
      color: $white-color;

      &:hover {
        background: $template-color;
      }
    }
  }
}
.cart-totals {
  background: $white-color;
  padding: 40px;
  max-width: 600px;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  margin-left: auto;

  h3 {
    font: {
      size: 22px;
    }
    margin-bottom: 25px;
  }
  ul {
    padding: 0;
    margin: 0 0 25px;
    list-style-type: none;

    li {
      border: 1px solid #eaedff;
      padding: 10px 15px;
      color: $paragraph-color;
      overflow: hidden;

      &:first-child {
        border-bottom: none;
      }
      span {
        float: right;
        color: $black-color;
      }
    }
  }
}

/*================================================
Checkout CSS
=================================================*/
.user-actions {
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  background: $white-color;
  padding: 18px 25px 15px;
  margin-bottom: 45px;
  border-top: 3px solid $template-color;

  i {
    color: $template-color;
    margin-right: 4px;
  }
  span {
    display: inline-block;
    color: $template-color;
    margin-right: 5px;
  }
}
.checkout-area {
  .title {
    font: {
      size: 22px;
    }
    margin-bottom: 25px;
  }
}
.billing-details {
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  background: $white-color;
  padding: 25px;
  border-radius: 5px;

  .form-group {
    label {
      display: block;
      color: $paragraph-color;
      margin-bottom: 8px;
      font-size: 15px;

      .required {
        color: red;
      }
    }
  }
  .form-check {
    margin-bottom: 15px;

    .form-check-label {
      color: $paragraph-color;
    }
  }
}
.order-details {
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  background: $white-color;
  padding: 25px;
  border-radius: 5px;

  .order-table {
    table {
      margin-bottom: 0;
      text-align: left;

      thead {
        tr {
          th {
            border-bottom-width: 0;
            vertical-align: middle;
            font: {
              size: 15px;
              weight: 500;
            }
            border-color: #eaedff;
            padding: 15px 20px;
          }
        }
      }
      tbody {
        tr {
          td {
            vertical-align: middle;
            color: $paragraph-color;
            border-color: #eaedff;
            font-size: 15px;

            &.product-name {
              a {
                color: $paragraph-color;

                &:hover {
                  color: $template-color;
                }
              }
            }
            &.order-subtotal,
            &.order-shipping,
            &.total-price {
              span {
                color: $black-color;
                font-weight: 500;
              }
            }
          }
        }
      }
    }
  }
  .payment-method {
    margin-top: 40px;
    border-top: 1px solid #eaedff;
    padding-top: 35px;

    p {
      font: {
        size: 14px;
      }
      [type="radio"] {
        &:checked,
        &:not(:checked) {
          display: none;
        }
      }
      [type="radio"] {
        &:checked,
        &:not(:checked) {
          + label {
            padding-left: 30px;
            cursor: pointer;
            display: block;
            font: {
              size: 15px;
              weight: 600;
            }
            color: $black-color;
            position: relative;
            margin-bottom: 8px;

            &::before {
              content: "";
              position: absolute;
              left: 0;
              top: 3px;
              width: 18px;
              height: 18px;
              border: 1px solid #dddddd;
              border-radius: 50%;
              background: $white-color;
            }
            &::after {
              content: "";
              width: 12px;
              height: 12px;
              background: $template-color;
              position: absolute;
              top: 6px;
              left: 3px;
              border-radius: 50%;
              transition: all 0.2s ease;
            }
          }
        }
      }
      [type="radio"] {
        &:not(:checked) {
          + label {
            &::after {
              opacity: 0;
              visibility: hidden;
              transform: scale(0);
            }
          }
        }
      }
      [type="radio"] {
        &:checked {
          + label {
            &::after {
              opacity: 1;
              visibility: visible;
              transform: scale(1);
            }
          }
        }
      }
    }
  }
  .order-btn {
    .btn {
      &.order-btn {
        display: block;
        margin-top: 25px;
        width: 100%;

        &.btn-disabled {
          cursor: no-drop;
        }
      }
    }
    span {
      display: block;
    }
  }
}

/*================================================
Contact CSS
=================================================*/
.contact-info-box {
  text-align: center;
  transition: $transition;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  background: $white-color;
  padding: 30px;

  .icon {
    display: inline-block;
    width: 80px;
    height: 80px;
    line-height: 80px;
    background: #edf5ff;
    border-radius: 50%;
    font-size: 30px;
    color: $template-color;
    transition: $transition;
  }
  h3 {
    font: {
      size: 22px;
    }
    margin: 25px 0 15px;
  }
  p {
    margin-bottom: 0;

    a {
      color: $paragraph-color;

      &:hover {
        color: $template-color;
      }
    }
  }
  &:hover {
    transform: translateY(-10px);

    .icon {
      color: $white-color;
      background: $template-color;
    }
  }
}
#map {
  height: 500px;
  width: 100%;
}
#contactForm {
  .help-block {
    ul {
      margin: 0;

      li {
        color: red;
      }
    }
  }
  .btn {
    margin-top: 10px;
  }
  #msgSubmit {
    &.text-danger,
    &.text-success {
      margin: 20px 0 0;
    }
  }
}

/*================================================
Portfolio Details CSS
=================================================*/
.project-info {
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      font: {
        size: 20px;
        weight: 500;
      }

      span {
        display: block;
        color: $paragraph-color;
        font: {
          size: 15px;
          weight: 400;
        }
        margin-top: 5px;

        a {
          color: $paragraph-color;

          &:hover {
            color: $template-color;
          }
        }
      }
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
      ul {
        margin-top: 10px;

        li {
          display: inline-block;
          margin: 0;

          a {
            color: $paragraph-color;
            margin-right: 10px;
            font-size: 16px;

            &:hover {
              color: $template-color;
            }
          }
        }
      }
    }
  }
}
.portfolio-details-content {
  margin-top: 30px;
  max-width: 750px;

  h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
}

/*================================================
Team Details CSS
=================================================*/
.team-details-info {
  h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  p {
    margin: 0;
  }
  .personal-information {
    margin-top: 20px;

    h3 {
      font-size: 16px;
      margin-bottom: 10px;
    }
    ul {
      margin: 20px 0 0;
      padding: 0;
      list-style-type: none;

      li {
        margin-bottom: 8px;
        font-size: 15px;
        color: $paragraph-color;

        span {
          a {
            color: $paragraph-color;

            &:hover {
              color: $template-color;
            }
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
.overview-desc {
  margin-top: 30px;

  h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  .skills {
    position: relative;

    .skill-item {
      position: relative;
      margin-bottom: 25px;

      .skill-header {
        position: relative;
        margin-bottom: 10px;

        .skill-title {
          font-size: 17px;
          margin-bottom: 0;
        }
        .skill-percentage {
          position: absolute;
          right: 0;
          top: 4px;
          font: {
            size: 16px;
            weight: 300;
            family: $font-family;
          }
          color: $paragraph-color;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
      .skill-bar {
        position: relative;
        width: 100%;

        .bar-inner {
          position: relative;
          width: 100%;
          border-bottom: 7px solid #d5d5d5;
          border-radius: 30px;

          .bar {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 0px;
            height: 7px;
            background: $template-color;
            transition: all 2000ms ease;
            border-radius: 30px;
          }
        }
      }
    }
  }
}

/*================================================
Login CSS
=================================================*/
.login-form {
  background: $white-color;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
  padding: 40px;
  border-radius: 5px;

  h3 {
    font: {
      size: 22px;
    }
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 30px;
  }
  form {
    .form-check {
      margin-top: 18px;

      .form-check-label {
        color: $paragraph-color;
        position: relative;
        top: -2px;
      }
    }
    .forgot-password {
      margin: {
        bottom: 20px;
        top: 11px;
      }
      a {
        color: $paragraph-color;

        &:hover {
          color: $template-color;
        }
      }
    }
    .btn {
      margin: {
        bottom: 20px;
        top: 10px;
      }
    }
    span {
      display: block;
      color: $paragraph-color;

      a {
        color: $template-color;
      }
    }
  }
}

.coming-soon {
  height: 100%;
  padding: {
    top: 70px;
    bottom: 70px;
  }
  .coming-soon-content {
    h1 {
      font-size: 30px;
      line-height: 45px;
    }
    p {
      margin-top: 10px;
    }
    #timer {
      div {
        font-size: 40px;
        width: 120px;
        height: 120px;
        padding-top: 27px;
        line-height: 39px;
        margin: 0 5px 15px;
      }
    }
    form {
      button {
        position: relative;
        right: 0;
        top: 0;
        width: 100%;
        border-radius: 30px;
        margin-top: 10px;
        padding: 13px 0;
      }
    }
  }
}
/*================================================ Contact Card CSS =================================================*/

.contact-card {
  padding-top: 10rem !important;
  background: $white-color;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 20px;
  transition: $transition;

  &:hover {
    transform: translateY(-5px);
  }

  .contact-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .contact-icon {
      font-size: 28px;
      color: $template-color;
      margin-right: 15px;
    }

    h3 {
      font-size: 18px;
      margin-bottom: 0;
      color: $black-color;
    }
  }

  .contact-info {
    color: $paragraph-color;

    p {
      margin-bottom: 10px;
      line-height: 1.5;

      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      color: $template-color;
      transition: $transition;

      &:hover {
        color: $blue-color;
      }
    }
  }
}

.contact-card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  // overflow: hidden;
  // position: absolute;
  top: 0;
  left: 0;

  transform: rotate(90deg);
  transform-origin: top;
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 100%;
  margin: 0% 0% 100% 100%;
}

.contact-card > div {
  flex: 1;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes oscillate {
  0% {
    background-size: 100% auto; /* starting size */
  }
  50% {
    background-size: 250% auto; /* mid-size, you can adjust this */
  }
  100% {
    background-size: 150% auto; /* back to starting size */
  }
}
--------------------------------------------------
import React, { Component } from "react";
import gql from "graphql-tag";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Banner from "../components/home/Banner";
import Head from "next/head";
// import About from "../components/about/About";
import Services from "../components/Services";
// import WhyChooseUs from "../components/digital-agency-animation/WhyChooseUs";
// import Crafting from "../components/digital-agency-animation/Crafting";
// import Works from "../components/Works";
// import Feedback from "../components/digital-agency-animation/Feedback";
// import HowWeWork from "../components/digital-agency-animation/HowWeWork";
// import Team from "../components/digital-agency-animation/Team";
// import Cta from "../components/digital-agency-animation/Cta";
// import Skills from "../components/Skills";
// import Funfacts from '../components/Funfacts';

import Blog from "../components/Blog";
// import Partner from "../components/digital-agency-animation/Partner";
// import Contact from "../components/digital-agency-animation/Contact";
// import { GetServerSideProps } from 'next'

import { initializeApollo } from "../utils/apolloClient";

interface IData {
  allSkills: any;
  allPages: any;
  allPosts: any;
  allInterests: any;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  // TODO: update allInterests query endpoint to return as following as abstraction contracts.
  // {
  //     "allInterests": {
  //         "Education Tech": {
  //             "Empowering Education": {
  //                 "description": "Leveraging cloud & distributed systems to enable virtual classrooms and democratize education on a global scale."
  //             },
  //             "AI in Education": {
  //                 "description": "Utilizing Machine Learning to create personalized learning experiences, ranging from tailored curriculum paths to interactive AI-powered educational tools."
  //             },
  //             "Leadership in Educational Innovation": {
  //                 "description": "Leading teams and projects focused on embedding the latest technological solutions in education, ensuring institutions are well-equipped for the digital age."
  //             },
  //             "Quantitative Analysis in Education": {
  //                 "description": "Applying quantitative finance techniques to optimize educational institutions' budgets, forecast academic achievements, and understand demographic study trends."
  //             }
  //         },
  //         "Cloud & Distributed Systems": {
  //             "description": "Architecting robust, scalable, and efficient cloud infrastructures for modern challenges."
  //         },
  //         "Leadership in Tech": {
  //             "description": "Empowering teams, projects, and cloud-based solutions to spearhead the upcoming wave of operational effectiveness."
  //         },
  //         "Quantitative Finance": {
  //             "description": "Merging quantitative finance with technical acumen to analyze balance sheets, income structures, cost forecasting."
  //         },
  //         "Autonomous Robotics": {
  //             "description": "Harnessing machine learning to power robotics, automotive, and aerospace."
  //         }
  //     }
  // }

  // TODO: don't make call at root.
  const { data } = await apolloClient.query({
    query: gql`
      # Write your query or mutation here
      {
        allSkills(orderBy: "title_ASC") {
          title
          value
          color
          heading
          body
          subSkills {
            name
            level
          }
        }
        allPages(orderBy: "name_ASC", first: 6) {
          name
          path
          heading
          image {
            filename
          }
        }
        allInterests(orderBy: "id_ASC", where: { status: published }) {
          title
          body
          icoFont
        }
      }
    `,
  });
  // console.log("getServerSideProps");
  // console.log(data);

  //fetch feed from medium using
  const allPosts = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aj-naqib"
  )
    .then((res) => res.json())
    .then((blogPosts) => blogPosts.items);
  // data.allPosts = feed;

  return {
    props: { ...data, allPosts },
  };
}

class index extends Component<IData> {
  constructor(props: IData) {
    super(props);
  }

  componentDidMount() {
    this.setState({ display: true });
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 20,
      mobile: true,
      live: true,
    }).init();
  }

  render() {
    // console.log("props from index render: ");
    // console.log(this.props)
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <Services data={this.props.allInterests} />
        <Blog data={this.props.allPosts} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default index;
--------------------------------------------------
import React, { Component } from 'react';
import Link from 'next/link';

class Error extends Component {

    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        return (
            <React.Fragment>
                <div className="error">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <h1>{this.props.statusCode} </h1>
                            <h2>Page not found <i className="icofont-sad"></i></h2>
                            <Link href="/">
                                <a className="btn btn-primary">Back to Home</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Error;
--------------------------------------------------
import "../assets/styles/bootstrap.min.css";
import "../assets/styles/icofont.min.css";
import "../assets/styles/style.scss";
import "../assets/styles/custom.scss";
import "../assets/styles/responsive.scss";
import "../assets/styles/animate.min.css";
// import '../node_modules/react-modal-video/scss/modal-video.scss';

import { Provider } from "react-redux";
import { Preloader, Placeholder } from "react-preloading-screen";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initializeApollo, useApollo } from "../utils/apolloClient";
import { ApolloProvider } from "@apollo/client";

import { initStore } from "../store/reducers/index";
import { DefaultSeo } from "next-seo";
import Loader from "../components/shared/Loader";
import GoTop from "../components/shared/GoTop";
import { LogPageView } from "../utils/google-analytics";

export default withRedux(initStore)(

	class MyApp extends App {
		static async getInitialProps({ Component, ctx }) {
			const pageProps = Component.getInitialProps
				? await Component.getInitialProps(ctx)
				: {};

			if (Object.keys(pageProps).length > 0) {
				// return pageProps only when its present
				return { pageProps };
			}
			return {};
		}

		componentDidMount () {
			if (!window.GA_INITIALIZED) {
			//   initGA()
			  window.GA_INITIALIZED = true
			}
			LogPageView(window.location.pathname)
		  }

		render() {
			const { Component, pageProps, store } = this.props;
			const apolloClient = initializeApollo();

			return (
				<ApolloProvider client={apolloClient}>
					<DefaultSeo
						title="AJ Naqib | Personal Website"
						description="Discover the journey of AJ Naqib: Technologist, Innovator, Leader, Adventure, Visionary "
						openGraph={{
							type: "website",
							locale: "en_IE",
							url: "https://naqib.info",
							site_name: "Ajmain Naqib | Personal Website",
						}}
						additionalMetaTags={[
							{
								property: "viewport",
								content:
									"width=device-width, initial-scale=1, shrink-to-fit=no",
							},
						]}
					/>
					<Preloader>
						<Provider store={store}>
							<Component {...pageProps} />
						</Provider>
						<GoTop scrollStepInPx="50" delayInMs="16.66" />
						<Placeholder>
							<Loader />
						</Placeholder>
					</Preloader>
				</ApolloProvider>
			);
		}
	}
);
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import gql from "graphql-tag";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
// import AboutMe from "../components/about/AboutMe";
import Education from "../components/about/Education";
import Services from "../components/about/Services";
import Skills from "../components/Skills";
import About from "../components/about/About";
import Funfacts from "../components/Funfacts";

import { initializeApollo } from "../utils/apolloClient";

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: gql`
      # Write your query or mutation here
      {
        allSkills(orderBy: "title_ASC") {
          title
          value
          color
          heading
          body
          subSkills {
            name
            image {
              publicUrlTransformed(
                transformation: { width: "150", crop: "limit" }
              )
            }
            link
            level
          }
        }
      }
    `,
  });
  // console.log("getServerSideProps");
  // console.log(data);

  return {
    props: { ...data },
  };
}

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="page-title-area item-bg1">
          <div className="container">
            <h1>About Me</h1>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>About Me</li>
            </ul>
          </div>
        </div>
        {/* <AboutMe /> */}

        <About />
        <Services />
        <Skills data={this.props.allSkills} />
        <Education />
        {/* TODO: work experiances */}
        {/* <Cta /> */}
        <Funfacts />

        <Footer />
      </React.Fragment>
    );
  }
}

export default index;
--------------------------------------------------
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	// static async getInitialProps(ctx) {
	// 	const initialProps = Document.getInitialProps
	// 		? await Document.getInitialProps(ctx)
	// 		: {};

	// 	// console.log(initialProps);

	// 	if (Object.keys(initialProps).length > 0) {
	// 		return { ...initialProps };
	// 	} else {
	// 		return {};
	// 	}
	// } //TODO: Change favicon

	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="icon"
						type="image/png"
						href={require("../images/favicon.png")}
					></link>
					          {/* Global Site Tag (gtag.js) - Google Analytics */}
							  <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
--------------------------------------------------
import React, { Component } from "react";
import gql from "graphql-tag";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Banner from "../components/home/Banner";
import Head from "next/head";
// import About from "../components/about/About";
import Services from "../components/Services";
// import WhyChooseUs from "../components/digital-agency-animation/WhyChooseUs";
// import Crafting from "../components/digital-agency-animation/Crafting";
// import Works from "../components/Works";
// import Feedback from "../components/digital-agency-animation/Feedback";
// import HowWeWork from "../components/digital-agency-animation/HowWeWork";
// import Team from "../components/digital-agency-animation/Team";
// import Cta from "../components/digital-agency-animation/Cta";
// import Skills from "../components/Skills";
// import Funfacts from '../components/Funfacts';

import Blog from "../components/Blog";
// import Partner from "../components/digital-agency-animation/Partner";
// import Contact from "../components/digital-agency-animation/Contact";
// import { GetServerSideProps } from 'next'

import { initializeApollo } from "../utils/apolloClient";

interface IData {
  allSkills: any;
  allPages: any;
  allPosts: any;
  allInterests: any;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  // TODO: update allInterests query endpoint to return as following as abstraction contracts.
  // {
  //     "allInterests": {
  //         "Education Tech": {
  //             "Empowering Education": {
  //                 "description": "Leveraging cloud & distributed systems to enable virtual classrooms and democratize education on a global scale."
  //             },
  //             "AI in Education": {
  //                 "description": "Utilizing Machine Learning to create personalized learning experiences, ranging from tailored curriculum paths to interactive AI-powered educational tools."
  //             },
  //             "Leadership in Educational Innovation": {
  //                 "description": "Leading teams and projects focused on embedding the latest technological solutions in education, ensuring institutions are well-equipped for the digital age."
  //             },
  //             "Quantitative Analysis in Education": {
  //                 "description": "Applying quantitative finance techniques to optimize educational institutions' budgets, forecast academic achievements, and understand demographic study trends."
  //             }
  //         },
  //         "Cloud & Distributed Systems": {
  //             "description": "Architecting robust, scalable, and efficient cloud infrastructures for modern challenges."
  //         },
  //         "Leadership in Tech": {
  //             "description": "Empowering teams, projects, and cloud-based solutions to spearhead the upcoming wave of operational effectiveness."
  //         },
  //         "Quantitative Finance": {
  //             "description": "Merging quantitative finance with technical acumen to analyze balance sheets, income structures, cost forecasting."
  //         },
  //         "Autonomous Robotics": {
  //             "description": "Harnessing machine learning to power robotics, automotive, and aerospace."
  //         }
  //     }
  // }

  // TODO: don't make call at root.
  const { data } = await apolloClient.query({
    query: gql`
      # Write your query or mutation here
      {
        allSkills(orderBy: "title_ASC") {
          title
          value
          color
          heading
          body
          subSkills {
            name
            level
          }
        }
        allPages(orderBy: "name_ASC", first: 6) {
          name
          path
          heading
          image {
            filename
          }
        }
        allInterests(orderBy: "id_ASC", where: { status: published }) {
          title
          body
          icoFont
        }
      }
    `,
  });
  // console.log("getServerSideProps");
  // console.log(data);

  //fetch feed from medium using
  const allPosts = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aj-naqib"
  )
    .then((res) => res.json())
    .then((blogPosts) => blogPosts.items);
  // data.allPosts = feed;

  return {
    props: { ...data, allPosts },
  };
}

class index extends Component<IData> {
  constructor(props: IData) {
    super(props);
  }

  componentDidMount() {
    this.setState({ display: true });
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 20,
      mobile: true,
      live: true,
    }).init();
  }

  render() {
    // console.log("props from index render: ");
    // console.log(this.props)
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <Services data={this.props.allInterests} />
        <Blog data={this.props.allPosts} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default index;
--------------------------------------------------
import React, { Component } from 'react';
import Link from 'next/link';

class Error extends Component {

    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        return (
            <React.Fragment>
                <div className="error">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <h1>{this.props.statusCode} </h1>
                            <h2>Page not found <i className="icofont-sad"></i></h2>
                            <Link href="/">
                                <a className="btn btn-primary">Back to Home</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Error;
--------------------------------------------------
import "../assets/styles/bootstrap.min.css";
import "../assets/styles/icofont.min.css";
import "../assets/styles/style.scss";
import "../assets/styles/custom.scss";
import "../assets/styles/responsive.scss";
import "../assets/styles/animate.min.css";
// import '../node_modules/react-modal-video/scss/modal-video.scss';

import { Provider } from "react-redux";
import { Preloader, Placeholder } from "react-preloading-screen";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initializeApollo, useApollo } from "../utils/apolloClient";
import { ApolloProvider } from "@apollo/client";

import { initStore } from "../store/reducers/index";
import { DefaultSeo } from "next-seo";
import Loader from "../components/shared/Loader";
import GoTop from "../components/shared/GoTop";
import { LogPageView } from "../utils/google-analytics";

export default withRedux(initStore)(

	class MyApp extends App {
		static async getInitialProps({ Component, ctx }) {
			const pageProps = Component.getInitialProps
				? await Component.getInitialProps(ctx)
				: {};

			if (Object.keys(pageProps).length > 0) {
				// return pageProps only when its present
				return { pageProps };
			}
			return {};
		}

		componentDidMount () {
			if (!window.GA_INITIALIZED) {
			//   initGA()
			  window.GA_INITIALIZED = true
			}
			LogPageView(window.location.pathname)
		  }

		render() {
			const { Component, pageProps, store } = this.props;
			const apolloClient = initializeApollo();

			return (
				<ApolloProvider client={apolloClient}>
					<DefaultSeo
						title="AJ Naqib | Personal Website"
						description="Discover the journey of AJ Naqib: Technologist, Innovator, Leader, Adventure, Visionary "
						openGraph={{
							type: "website",
							locale: "en_IE",
							url: "https://naqib.info",
							site_name: "Ajmain Naqib | Personal Website",
						}}
						additionalMetaTags={[
							{
								property: "viewport",
								content:
									"width=device-width, initial-scale=1, shrink-to-fit=no",
							},
						]}
					/>
					<Preloader>
						<Provider store={store}>
							<Component {...pageProps} />
						</Provider>
						<GoTop scrollStepInPx="50" delayInMs="16.66" />
						<Placeholder>
							<Loader />
						</Placeholder>
					</Preloader>
				</ApolloProvider>
			);
		}
	}
);
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import gql from "graphql-tag";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
// import AboutMe from "../components/about/AboutMe";
import Education from "../components/about/Education";
import Services from "../components/about/Services";
import Skills from "../components/Skills";
import About from "../components/about/About";
import Funfacts from "../components/Funfacts";

import { initializeApollo } from "../utils/apolloClient";

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: gql`
      # Write your query or mutation here
      {
        allSkills(orderBy: "title_ASC") {
          title
          value
          color
          heading
          body
          subSkills {
            name
            image {
              publicUrlTransformed(
                transformation: { width: "150", crop: "limit" }
              )
            }
            link
            level
          }
        }
      }
    `,
  });
  // console.log("getServerSideProps");
  // console.log(data);

  return {
    props: { ...data },
  };
}

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="page-title-area item-bg1">
          <div className="container">
            <h1>About Me</h1>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>About Me</li>
            </ul>
          </div>
        </div>
        {/* <AboutMe /> */}

        <About />
        <Services />
        <Skills data={this.props.allSkills} />
        <Education />
        {/* TODO: work experiances */}
        {/* <Cta /> */}
        <Funfacts />

        <Footer />
      </React.Fragment>
    );
  }
}

export default index;
--------------------------------------------------
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	// static async getInitialProps(ctx) {
	// 	const initialProps = Document.getInitialProps
	// 		? await Document.getInitialProps(ctx)
	// 		: {};

	// 	// console.log(initialProps);

	// 	if (Object.keys(initialProps).length > 0) {
	// 		return { ...initialProps };
	// 	} else {
	// 		return {};
	// 	}
	// } //TODO: Change favicon

	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="icon"
						type="image/png"
						href={require("../images/favicon.png")}
					></link>
					          {/* Global Site Tag (gtag.js) - Google Analytics */}
							  <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
--------------------------------------------------
import React, { Component } from "react";
import gql from "graphql-tag";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Banner from "../components/home/Banner";
import Head from "next/head";
// import About from "../components/about/About";
import Services from "../components/Services";
// import WhyChooseUs from "../components/digital-agency-animation/WhyChooseUs";
// import Crafting from "../components/digital-agency-animation/Crafting";
// import Works from "../components/Works";
// import Feedback from "../components/digital-agency-animation/Feedback";
// import HowWeWork from "../components/digital-agency-animation/HowWeWork";
// import Team from "../components/digital-agency-animation/Team";
// import Cta from "../components/digital-agency-animation/Cta";
// import Skills from "../components/Skills";
// import Funfacts from '../components/Funfacts';

import Blog from "../components/Blog";
// import Partner from "../components/digital-agency-animation/Partner";
// import Contact from "../components/digital-agency-animation/Contact";
// import { GetServerSideProps } from 'next'

import { initializeApollo } from "../utils/apolloClient";

interface IData {
  allSkills: any;
  allPages: any;
  allPosts: any;
  allInterests: any;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  // TODO: update allInterests query endpoint to return as following as abstraction contracts.
  // {
  //     "allInterests": {
  //         "Education Tech": {
  //             "Empowering Education": {
  //                 "description": "Leveraging cloud & distributed systems to enable virtual classrooms and democratize education on a global scale."
  //             },
  //             "AI in Education": {
  //                 "description": "Utilizing Machine Learning to create personalized learning experiences, ranging from tailored curriculum paths to interactive AI-powered educational tools."
  //             },
  //             "Leadership in Educational Innovation": {
  //                 "description": "Leading teams and projects focused on embedding the latest technological solutions in education, ensuring institutions are well-equipped for the digital age."
  //             },
  //             "Quantitative Analysis in Education": {
  //                 "description": "Applying quantitative finance techniques to optimize educational institutions' budgets, forecast academic achievements, and understand demographic study trends."
  //             }
  //         },
  //         "Cloud & Distributed Systems": {
  //             "description": "Architecting robust, scalable, and efficient cloud infrastructures for modern challenges."
  //         },
  //         "Leadership in Tech": {
  //             "description": "Empowering teams, projects, and cloud-based solutions to spearhead the upcoming wave of operational effectiveness."
  //         },
  //         "Quantitative Finance": {
  //             "description": "Merging quantitative finance with technical acumen to analyze balance sheets, income structures, cost forecasting."
  //         },
  //         "Autonomous Robotics": {
  //             "description": "Harnessing machine learning to power robotics, automotive, and aerospace."
  //         }
  //     }
  // }

  // TODO: don't make call at root.
  const { data } = await apolloClient.query({
    query: gql`
      # Write your query or mutation here
      {
        allSkills(orderBy: "title_ASC") {
          title
          value
          color
          heading
          body
          subSkills {
            name
            level
          }
        }
        allPages(orderBy: "name_ASC", first: 6) {
          name
          path
          heading
          image {
            filename
          }
        }
        allInterests(orderBy: "id_ASC", where: { status: published }) {
          title
          body
          icoFont
        }
      }
    `,
  });
  // console.log("getServerSideProps");
  // console.log(data);

  //fetch feed from medium using
  const allPosts = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aj-naqib"
  )
    .then((res) => res.json())
    .then((blogPosts) => blogPosts.items);
  // data.allPosts = feed;

  return {
    props: { ...data, allPosts },
  };
}

class index extends Component<IData> {
  constructor(props: IData) {
    super(props);
  }

  componentDidMount() {
    this.setState({ display: true });
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 20,
      mobile: true,
      live: true,
    }).init();
  }

  render() {
    // console.log("props from index render: ");
    // console.log(this.props)
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <Services data={this.props.allInterests} />
        <Blog data={this.props.allPosts} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default index;
--------------------------------------------------
import React, { Component } from 'react';
import Link from 'next/link';

class Error extends Component {

    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        return (
            <React.Fragment>
                <div className="error">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <h1>{this.props.statusCode} </h1>
                            <h2>Page not found <i className="icofont-sad"></i></h2>
                            <Link href="/">
                                <a className="btn btn-primary">Back to Home</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Error;
--------------------------------------------------
import "../assets/styles/bootstrap.min.css";
import "../assets/styles/icofont.min.css";
import "../assets/styles/style.scss";
import "../assets/styles/custom.scss";
import "../assets/styles/responsive.scss";
import "../assets/styles/animate.min.css";
// import '../node_modules/react-modal-video/scss/modal-video.scss';

import { Provider } from "react-redux";
import { Preloader, Placeholder } from "react-preloading-screen";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initializeApollo, useApollo } from "../utils/apolloClient";
import { ApolloProvider } from "@apollo/client";

import { initStore } from "../store/reducers/index";
import { DefaultSeo } from "next-seo";
import Loader from "../components/shared/Loader";
import GoTop from "../components/shared/GoTop";
import { LogPageView } from "../utils/google-analytics";

export default withRedux(initStore)(

	class MyApp extends App {
		static async getInitialProps({ Component, ctx }) {
			const pageProps = Component.getInitialProps
				? await Component.getInitialProps(ctx)
				: {};

			if (Object.keys(pageProps).length > 0) {
				// return pageProps only when its present
				return { pageProps };
			}
			return {};
		}

		componentDidMount () {
			if (!window.GA_INITIALIZED) {
			//   initGA()
			  window.GA_INITIALIZED = true
			}
			LogPageView(window.location.pathname)
		  }

		render() {
			const { Component, pageProps, store } = this.props;
			const apolloClient = initializeApollo();

			return (
				<ApolloProvider client={apolloClient}>
					<DefaultSeo
						title="AJ Naqib | Personal Website"
						description="Discover the journey of AJ Naqib: Technologist, Innovator, Leader, Adventure, Visionary "
						openGraph={{
							type: "website",
							locale: "en_IE",
							url: "https://naqib.info",
							site_name: "Ajmain Naqib | Personal Website",
						}}
						additionalMetaTags={[
							{
								property: "viewport",
								content:
									"width=device-width, initial-scale=1, shrink-to-fit=no",
							},
						]}
					/>
					<Preloader>
						<Provider store={store}>
							<Component {...pageProps} />
						</Provider>
						<GoTop scrollStepInPx="50" delayInMs="16.66" />
						<Placeholder>
							<Loader />
						</Placeholder>
					</Preloader>
				</ApolloProvider>
			);
		}
	}
);
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import gql from "graphql-tag";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
// import AboutMe from "../components/about/AboutMe";
import Education from "../components/about/Education";
import Services from "../components/about/Services";
import Skills from "../components/Skills";
import About from "../components/about/About";
import Funfacts from "../components/Funfacts";

import { initializeApollo } from "../utils/apolloClient";

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: gql`
      # Write your query or mutation here
      {
        allSkills(orderBy: "title_ASC") {
          title
          value
          color
          heading
          body
          subSkills {
            name
            image {
              publicUrlTransformed(
                transformation: { width: "150", crop: "limit" }
              )
            }
            link
            level
          }
        }
      }
    `,
  });
  // console.log("getServerSideProps");
  // console.log(data);

  return {
    props: { ...data },
  };
}

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="page-title-area item-bg1">
          <div className="container">
            <h1>About Me</h1>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>About Me</li>
            </ul>
          </div>
        </div>
        {/* <AboutMe /> */}

        <About />
        <Services />
        <Skills data={this.props.allSkills} />
        <Education />
        {/* TODO: work experiances */}
        {/* <Cta /> */}
        <Funfacts />

        <Footer />
      </React.Fragment>
    );
  }
}

export default index;
--------------------------------------------------
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	// static async getInitialProps(ctx) {
	// 	const initialProps = Document.getInitialProps
	// 		? await Document.getInitialProps(ctx)
	// 		: {};

	// 	// console.log(initialProps);

	// 	if (Object.keys(initialProps).length > 0) {
	// 		return { ...initialProps };
	// 	} else {
	// 		return {};
	// 	}
	// } //TODO: Change favicon

	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="icon"
						type="image/png"
						href={require("../images/favicon.png")}
					></link>
					          {/* Global Site Tag (gtag.js) - Google Analytics */}
							  <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
--------------------------------------------------
import React, { Component } from "react";
import gql from "graphql-tag";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Banner from "../components/home/Banner";
import Head from "next/head";
// import About from "../components/about/About";
import Services from "../components/Services";
// import WhyChooseUs from "../components/digital-agency-animation/WhyChooseUs";
// import Crafting from "../components/digital-agency-animation/Crafting";
// import Works from "../components/Works";
// import Feedback from "../components/digital-agency-animation/Feedback";
// import HowWeWork from "../components/digital-agency-animation/HowWeWork";
// import Team from "../components/digital-agency-animation/Team";
// import Cta from "../components/digital-agency-animation/Cta";
// import Skills from "../components/Skills";
// import Funfacts from '../components/Funfacts';

import Blog from "../components/Blog";
// import Partner from "../components/digital-agency-animation/Partner";
// import Contact from "../components/digital-agency-animation/Contact";
// import { GetServerSideProps } from 'next'

import { initializeApollo } from "../utils/apolloClient";

interface IData {
  allSkills: any;
  allPages: any;
  allPosts: any;
  allInterests: any;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  // TODO: update allInterests query endpoint to return as following as abstraction contracts.
  // {
  //     "allInterests": {
  //         "Education Tech": {
  //             "Empowering Education": {
  //                 "description": "Leveraging cloud & distributed systems to enable virtual classrooms and democratize education on a global scale."
  //             },
  //             "AI in Education": {
  //                 "description": "Utilizing Machine Learning to create personalized learning experiences, ranging from tailored curriculum paths to interactive AI-powered educational tools."
  //             },
  //             "Leadership in Educational Innovation": {
  //                 "description": "Leading teams and projects focused on embedding the latest technological solutions in education, ensuring institutions are well-equipped for the digital age."
  //             },
  //             "Quantitative Analysis in Education": {
  //                 "description": "Applying quantitative finance techniques to optimize educational institutions' budgets, forecast academic achievements, and understand demographic study trends."
  //             }
  //         },
  //         "Cloud & Distributed Systems": {
  //             "description": "Architecting robust, scalable, and efficient cloud infrastructures for modern challenges."
  //         },
  //         "Leadership in Tech": {
  //             "description": "Empowering teams, projects, and cloud-based solutions to spearhead the upcoming wave of operational effectiveness."
  //         },
  //         "Quantitative Finance": {
  //             "description": "Merging quantitative finance with technical acumen to analyze balance sheets, income structures, cost forecasting."
  //         },
  //         "Autonomous Robotics": {
  //             "description": "Harnessing machine learning to power robotics, automotive, and aerospace."
  //         }
  //     }
  // }

  // TODO: don't make call at root.
  const { data } = await apolloClient.query({
    query: gql`
      # Write your query or mutation here
      {
        allSkills(orderBy: "title_ASC") {
          title
          value
          color
          heading
          body
          subSkills {
            name
            level
          }
        }
        allPages(orderBy: "name_ASC", first: 6) {
          name
          path
          heading
          image {
            filename
          }
        }
        allInterests(orderBy: "id_ASC", where: { status: published }) {
          title
          body
          icoFont
        }
      }
    `,
  });
  // console.log("getServerSideProps");
  // console.log(data);

  //fetch feed from medium using
  const allPosts = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aj-naqib"
  )
    .then((res) => res.json())
    .then((blogPosts) => blogPosts.items);
  // data.allPosts = feed;

  return {
    props: { ...data, allPosts },
  };
}

class index extends Component<IData> {
  constructor(props: IData) {
    super(props);
  }

  componentDidMount() {
    this.setState({ display: true });
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 20,
      mobile: true,
      live: true,
    }).init();
  }

  render() {
    // console.log("props from index render: ");
    // console.log(this.props)
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <Services data={this.props.allInterests} />
        <Blog data={this.props.allPosts} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default index;
--------------------------------------------------
import React, { Component } from 'react';
import Link from 'next/link';

class Error extends Component {

    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        return (
            <React.Fragment>
                <div className="error">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <h1>{this.props.statusCode} </h1>
                            <h2>Page not found <i className="icofont-sad"></i></h2>
                            <Link href="/">
                                <a className="btn btn-primary">Back to Home</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Error;
--------------------------------------------------
import "../assets/styles/bootstrap.min.css";
import "../assets/styles/icofont.min.css";
import "../assets/styles/style.scss";
import "../assets/styles/custom.scss";
import "../assets/styles/responsive.scss";
import "../assets/styles/animate.min.css";
// import '../node_modules/react-modal-video/scss/modal-video.scss';

import { Provider } from "react-redux";
import { Preloader, Placeholder } from "react-preloading-screen";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initializeApollo, useApollo } from "../utils/apolloClient";
import { ApolloProvider } from "@apollo/client";

import { initStore } from "../store/reducers/index";
import { DefaultSeo } from "next-seo";
import Loader from "../components/shared/Loader";
import GoTop from "../components/shared/GoTop";
import { LogPageView } from "../utils/google-analytics";

export default withRedux(initStore)(

	class MyApp extends App {
		static async getInitialProps({ Component, ctx }) {
			const pageProps = Component.getInitialProps
				? await Component.getInitialProps(ctx)
				: {};

			if (Object.keys(pageProps).length > 0) {
				// return pageProps only when its present
				return { pageProps };
			}
			return {};
		}

		componentDidMount () {
			if (!window.GA_INITIALIZED) {
			//   initGA()
			  window.GA_INITIALIZED = true
			}
			LogPageView(window.location.pathname)
		  }

		render() {
			const { Component, pageProps, store } = this.props;
			const apolloClient = initializeApollo();

			return (
				<ApolloProvider client={apolloClient}>
					<DefaultSeo
						title="AJ Naqib | Personal Website"
						description="Discover the journey of AJ Naqib: Technologist, Innovator, Leader, Adventure, Visionary "
						openGraph={{
							type: "website",
							locale: "en_IE",
							url: "https://naqib.info",
							site_name: "Ajmain Naqib | Personal Website",
						}}
						additionalMetaTags={[
							{
								property: "viewport",
								content:
									"width=device-width, initial-scale=1, shrink-to-fit=no",
							},
						]}
					/>
					<Preloader>
						<Provider store={store}>
							<Component {...pageProps} />
						</Provider>
						<GoTop scrollStepInPx="50" delayInMs="16.66" />
						<Placeholder>
							<Loader />
						</Placeholder>
					</Preloader>
				</ApolloProvider>
			);
		}
	}
);
--------------------------------------------------
import React, { Component } from "react";
import Link from "next/link";
import gql from "graphql-tag";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
// import AboutMe from "../components/about/AboutMe";
import Education from "../components/about/Education";
import Services from "../components/about/Services";
import Skills from "../components/Skills";
import About from "../components/about/About";
import Funfacts from "../components/Funfacts";

import { initializeApollo } from "../utils/apolloClient";

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: gql`
      # Write your query or mutation here
      {
        allSkills(orderBy: "title_ASC") {
          title
          value
          color
          heading
          body
          subSkills {
            name
            image {
              publicUrlTransformed(
                transformation: { width: "150", crop: "limit" }
              )
            }
            link
            level
          }
        }
      }
    `,
  });
  // console.log("getServerSideProps");
  // console.log(data);

  return {
    props: { ...data },
  };
}

export class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="page-title-area item-bg1">
          <div className="container">
            <h1>About Me</h1>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>About Me</li>
            </ul>
          </div>
        </div>
        {/* <AboutMe /> */}

        <About />
        <Services />
        <Skills data={this.props.allSkills} />
        <Education />
        {/* TODO: work experiances */}
        {/* <Cta /> */}
        <Funfacts />

        <Footer />
      </React.Fragment>
    );
  }
}

export default index;
--------------------------------------------------
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	// static async getInitialProps(ctx) {
	// 	const initialProps = Document.getInitialProps
	// 		? await Document.getInitialProps(ctx)
	// 		: {};

	// 	// console.log(initialProps);

	// 	if (Object.keys(initialProps).length > 0) {
	// 		return { ...initialProps };
	// 	} else {
	// 		return {};
	// 	}
	// } //TODO: Change favicon

	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="icon"
						type="image/png"
						href={require("../images/favicon.png")}
					></link>
					          {/* Global Site Tag (gtag.js) - Google Analytics */}
							  <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
--------------------------------------------------
