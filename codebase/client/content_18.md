$media: screen;
$feature_min: min-width;
$feature_max: max-width;

// Extra small devices (portrait phones, less than 576px)
$value_xs: 575px;

// Small devices (landscape phones, 576px and up)
$value_sm: 576px;

// Medium devices (tablets, 768px and up)
$value_md: 767px;
$value_md_offset: 768px;

// Large devices (desktops, 992px and up)
$value_lg: 992px;
$value_lg_offset: 993px;

// Extra large devices (large desktops, 1200px and up)
$value_xl: 1200px;
$value_xl_offset: 1201px;

// Extra extra large devices (TVs, large screens, 1600px and up)
$value_xx: 1600px;

$template-color: #38d16a;
$pink-color: #f54ea2;
$white-color: #ffffff;
$black-color: #121619;
$paragraph-color: #6084a4;
$bg-gray: #f9f9f9;

// Only For Mobile and Tab Navbar
@media only #{$media} and ($feature_max : $value_md) {
  .searchBoxTop {
    .seachBoxContainer {
      padding: 25px 0 55px;
    }
    .searchClose {
      cursor: pointer;
      position: absolute;
      top: auto;
      right: 11px;
      width: 40px;
      height: 40px;
      margin-top: 0;
      bottom: 11px;
    }
  }
}

@media screen and (max-width: $value_md_offset) and (orientation: portrait) {
  .contact-card {
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  }

  .card.image,
  .card.info {
    flex: 1;
  }

  .card.image {
    order: 2;
  }

  .card.info {
    order: 1;
  }

  // @media screen and (max-width: $value_md) and (orientation: portrait) {
  //   .contact-card {
  //     display: flex;
  //     flex-wrap: wrap;
  //     justify-content: space-between;
  //     align-items: center;
  //     // padding: 1em;
  //     border: 4px solid #000;
  //     width: 600px;
  //     height: 100%;
  //     // margin: 0 auto;
  //   }

  //   .card .image {
  //     flex: 2;
  //     justify-content: flex-end;

  //   }

  //   .card .info {
  //     flex: 1;
  //     justify-content: flex-start;

  //   }

  //   .card {
  //     flex-direction: column;
  //   }

  // @media only #{$media} and ($feature_max : $value_xs) {
  .parallax_banner {
    // img {
    //   display: none;
    // }
    overflow: visible;

    .imgHolder {
      z-index: 1;
      position: relative;
      // top: 15%;
      width: 35%; /* adjust this as needed */
      // margin-left: 20% !important;
      margin-top: -5%;
      bottom: 0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }
}

// ipad 
@media screen and (min-width: $value_md_offset) and (orientation: landscape){
  .parallax_banner {

    h1 {
      font-size: min(max(6vw, 24px), 42px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
      color: #6084a447;
    }

    overflow: visible;
    display: flex;
    align-items: center;

    .imgHolder {
      z-index: 1;
      position: relative;
      width: 38vw; /* adjust this as needed */
      margin-left: 54vw !important;
      // margin-top: -5%;
      // bottom: 0 !important;
      top:0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }


  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 60%;
  }

  .ptb-120 {
    padding: {
      top: 60px;
      bottom: 60px;
    }
  }
  .owl-carousel {
    &.owl-theme {
      .owl-dots {
        right: 15px;
        top: auto;
        bottom: 10px;

        .owl-dot {
          display: inline-block;

          span {
            margin: 0 3px;
            width: 15px;
            height: 15px;
          }
        }
      }
      .owl-nav {
        [class*="owl-"] {
          font-size: 16px;
          margin: -20px 0 0;
          left: 0;
          width: 35px;
          height: 35px;
          line-height: 38px;

          &.owl-next {
            right: 0;
            left: auto;
          }
        }
      }
    }
  }
  .btn {
    font-size: 14px;
    padding: 12px 25px;
  }
  p {
    font-size: 14px;
  }
  .preloader {
    .loader {
      h1 {
        font-size: 3rem;
      }
    }
  }
  .section-title {
    margin-bottom: 40px;

    span {
      font-size: 14px;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 24px;
      max-width: 100%;
    }
  }
  .artflex-nav {
    padding-top: 0;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .navbar {
      padding: {
        left: 0;
        right: 0;
      }
    }
    .navbar-light {
      .navbar-toggler {
        border-color: rgba(0, 0, 0, 1);
        outline: 0;
        border-radius: 0;
      }
    }
    nav {
      .navbar-nav {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        padding-right: 15px;
        background-color: $white-color;

        .nav-item {
          padding: 9px 2%;

          a {
            margin-left: 0;
            margin-right: 0;
          }
          .dropdown_menu {
            left: 0;

            li {
              .dropdown_menu {
                top: 0;
                left: -5px;
                position: relative;
                display: none;
                margin-top: 0;
                border: 1px solid #eeeeee;
                padding: 0 0 0 4px;
              }
              &:focus,
              &:hover {
                .dropdown_menu {
                  display: block;
                  top: 0 !important;
                }
              }
            }
          }
          &:hover ul {
            top: 40px;
          }
        }
      }
      .others-option {
        background-color: $white-color;
        padding-bottom: 10px;
        margin-left: 0;
        padding-left: 15px;

        ul li .side-menu {
          display: none;
        }
      }
    }
  }
  .shop-details .product-entry-summary form .input-counter {
    max-width: 120px;
    min-width: 120px;
  }
  .main-banner {
    height: 100vh;
    padding: {
      top: 120px;
      bottom: 80px;
    }

    &.digital-agency-banner {
      padding-bottom: 30px;
    }
  }
  .banner-social-buttons {
    display: none;
  }

  .hero-header {
    // font-size: 25px !important;
  }
  .hero-content {
    h1 {
      // font-size: 27px;
    }
    h3 {
      // font-size: 25px !important;
    }
    p {
      margin: {
        bottom: 25px;
        top: 15px;
      }
    }
    margin-bottom: 45px;
    margin-top: 0;
  }
  .banner-image {
    text-align: center;
    img {
      position: relative;
      top: 0;
      right: 0;
      max-width: 330px;
      left: 0;
      margin: auto;
      width: 100%;
    }
  }
  .skill-image {
    text-align: center;
    img.man-image {
      max-width: 360px;
      width: 100%;
    }
  }
  .hero-image {
    margin-bottom: 30px;
  }
  // .shape1,
  // .shape2,
  // .shape7,
  // .shape8,
  // .shape5,
  // .shape6,
  // .shape10,
  // .shape4,
  // .shape3,
  // .circle-shape1,
  // .circle-shape2,
  // .shape11,
  // .shape12,
  // .shape9,
  // .shape14,
  // .shape15,
  // .shape13,
  // .shape18,
  // .shape19,
  // .shape20,
  // .shape21,
  // .shape22,
  // .shape23,
  // .shape24,
  // .shape25,
  // .shape26,
  // .circle-dot {
  //   display: none;
  // }
  .circle-shape3 {
    right: 6%;
    bottom: 5%;
  }
  .circle-top {
    top: -440px;
    left: -350px;
  }
  .circle-bottom {
    bottom: -440px;
    right: -350px;
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        margin: {
          left: 0;
          bottom: 0;
        }
        h1 {
          margin-bottom: 25px;
        }
      }
    }
  }
  .agency-portfolio-home {
    .main-banner {
      padding: {
        top: 145px;
        bottom: 90px;
      }

      .hero-content {
        h1 {
          font-size: 35px;
        }
      }
    }
  }
  .blog-home-slides {
    .col-lg-12 {
      padding: 0;
    }
  }
  .single-blog-box {
    .blog-post-content {
      padding: 15px;

      div {
        &.tags {
          a {
            padding: 5px 15px;
            font-size: 14px;
          }
        }
      }
      h3 {
        margin: 15px 0 10px;
        font-size: 18px;
        line-height: 27px;
      }
      ul {
        li {
          margin-right: 2px;
          font-size: 12px;

          i {
            margin-right: 2px;
          }
        }
      }
    }
  }
  .blog-home-slides {
    &:hover {
      &.owl-carousel {
        &.owl-theme {
          .owl-nav {
            [class*="owl-"] {
              left: 5px;

              &.owl-next {
                right: 5px;
                left: auto;
              }
            }
          }
        }
      }
    }
  }
  .main-banner {
    &.freelancer-portfolio-home {
      padding-bottom: 0;

      .col-lg-6 {
        &:first-child {
          order: 2;
        }
        &:last-child {
          order: 1;
        }
      }
      .banner-image {
        img {
          top: 0;
          left: 0;
        }
      }
      .circle-shape3 {
        display: none;
      }
    }
  }

  .cta-about {
    padding: {
      top: 60px;
      bottom: 60px;
      left: 10px;
      right: 5px;
    }
    .container-fluid {
      padding: {
        left: 15px !important;
        right: 15px !important;
      }
    }
  }
  .cta-about-image {
    background-image: unset;

    img {
      display: block;
    }
  }
  .cta-about-content {
    max-width: 100%;
    margin: {
      top: 35px;
    }
    padding: 0;
    h2 {
      br {
        display: none;
      }
    }
  }

  .crafting-content {
    overflow: hidden;
    margin-bottom: 40px;

    .single-item {
      width: 50%;
      position: relative;
      float: left;
      padding: 25px 8px;

      &.item-one {
        right: 0;
        animation: unset;
        top: 0;
      }
      &.item-two {
        animation: unset;
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
        animation: unset;
        bottom: 0;
      }
      &.item-four {
        right: 0;
        top: 0;
        animation: unset;
      }
      i {
        font-size: 30px;
      }
      h6 {
        font-size: 15px;
      }
    }
  }
  .crafting-image {
    .video-btn {
      font-size: 20px;
      margin-top: -30px;
      width: 60px;
      height: 60px;
      line-height: 60px;
    }
  }

  .services-area {
    padding-bottom: 30px;
  }
  .single-services {
    padding: 20px;

    h3 {
      font-size: 18px;
    }
  }
  .more-services-btn {
    margin-top: 15px;
  }
  .single-services-box {
    padding: 15px;

    .icon {
      font-size: 40px;
    }
    h3 {
      font-size: 18px;
    }
  }
  .services-box {
    .services-content {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }
  .freelancer-portfolio-home {
    .banner-image {
      text-align: center;
    }
  }
  .services-area {
    .single-services {
      padding: 15px;
    }
  }
  .services-slides {
    &.owl-carousel {
      &.owl-theme {
        .owl-dots {
          margin-top: 10px !important;

          button {
            &.owl-dot {
              span {
                margin: 0 3px;
                width: 14px;
                height: 14px;
              }
            }
          }
        }
      }
    }
  }

  .why-choose-us-img {
    margin-bottom: 30px;

    .front-img {
      top: 0;
      left: 0;
      width: 100%;
    }
    .back-img {
      display: none;
    }
  }
  .why-choose-us-area {
    &:hover {
      .why-choose-us-img {
        .front-img {
          top: 0;
        }
      }
    }
  }
  .why-choose-inner-area {
    margin-top: 45px;

    .section-title {
      margin-bottom: 10px;

      h2 {
        max-width: 100%;
      }
    }
    .single-box {
      padding: 20px;
      margin-top: 30px;

      .icon {
        font-size: 40px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }

  .how-we-work {
    padding-bottom: 30px;
  }
  .single-work-box {
    margin-bottom: 30px;
    padding: 20px 15px;
    text-align: center;

    .number {
      display: inline-block;
    }
    h3 {
      font-size: 18px;
    }
  }

  .team-member-image {
    text-align: center;
  }

  .boxes-area {
    &::before,
    &::after {
      background: #08071c;
      width: 100%;
    }
    padding: {
      top: 60px;
      bottom: 30px;
    }

    .single-box {
      padding: {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      margin-bottom: 30px;

      .icon {
        font-size: 40px;
        color: $template-color;
      }
      h3 {
        font-size: 18px;
        color: $white-color;
      }
      p {
        color: $white-color;
      }
      &.black-color {
        h3 {
          color: $white-color;
        }
        p {
          color: $white-color;
        }
      }
    }
  }

  .features-boxes-area {
    padding-bottom: 30px;

    .single-box {
      margin-bottom: 30px;
      padding-left: 55px;

      span {
        font-size: 30px;
      }
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }

  .about-image {
    margin-top: 30px;
    text-align: center;

    &::before {
      display: none;
    }
    img {
      width: auto;
    }
  }

  .single-work {
    .works-content {
      h3 {
        font-size: 18px;
        margin-bottom: 0;
      }
      p {
        display: none;
      }
    }
    &:hover {
      .works-content {
        margin-top: -25px;
      }
    }
  }

  .portfolio-item {
    img {
      width: 100%;
    }
    .portfolio-content {
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      span {
        font-size: 13px;
      }
    }
  }

  .single-feedback {
    padding-left: 0;
    max-width: 100%;
    margin-bottom: 40px;

    img {
      position: relative;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
    }
    h3 {
      font-size: 18px;

      span {
        font-size: 14px;
      }
    }
  }
  .feedback-slides {
    &.owl-carousel {
      &.owl-theme {
        .owl-nav {
          left: 0;
          bottom: -5px;
          right: 0;
        }
      }
    }
  }

  .skill-content {
    padding-left: 0 !important;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
    }
  }

  .team-area {
    padding-bottom: 30px;
  }
  .single-team {
    .team-content {
      margin-top: 30px;

      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
      span {
        font-size: 13px;
      }
    }
  }
  .single-team-box {
    .team-content {
      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
      span {
        font-size: 13px;
      }
    }
  }

  .cta-content {
    span {
      font-size: 13px;
      margin-bottom: 15px;
    }
    h2 {
      font-size: 25px;
    }
  }

  .skill-area {
    padding: {
      top: 60px;
    }
  }
  .our-skill {
    margin-bottom: 30px;

    .skills {
      .skill-item {
        .skill-header {
          .skill-title {
            font-size: 15px;
          }
          .skill-percentage {
            font-size: 14px;
          }
        }
        .skill-bar {
          .bar-inner {
            .bar {
              height: 6px;
            }
          }
        }
      }
    }
  }
  .skill-image {
    .back-image {
      right: 0;
    }
  }

  .funfacts-area {
    padding-bottom: 40px;
  }
  .funfact {
    margin-bottom: 20px;

    h3 {
      font-size: 30px;
    }
    p {
      font-size: 13px;
      text-transform: capitalize;
      margin-top: 3px;
    }
  }

  .blog-area {
    padding-bottom: 30px;
  }
  .single-blog-post {
    .blog-post-content {
      padding: 15px;

      .date {
        font-size: 13px;
      }
      h3 {
        line-height: 28px;
        font-size: 18px;
      }
    }
    .read-more-btn {
      font-size: 14px;
    }
    &.with-video {
      .blog-video {
        iframe {
          height: 160px;
        }
      }
    }
  }

  .contact-cta-content {
    .section-title {
      margin-bottom: 15px;
    }
    p {
      max-width: 100%;
      margin: 0 auto 25px;
    }
  }

  .features-content {
    .single-features-item {
      padding-left: 45px;

      .icon {
        font-size: 30px;
      }
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      p {
        font-size: 13px;
      }
    }
  }
  .features-image {
    margin-top: 30px;
  }

  .page-title-area {
    padding: {
      top: 160px;
      bottom: 85px;
    }
    h1 {
      font-size: 25px;
      margin-bottom: 10px;
    }
    ul {
      li {
        font-size: 14px;
      }
    }
  }
  .pt-120 {
    padding-top: 50px;
  }
  .contact-area {
    border-top: 1px solid #eee;
  }
  .about-us-content {
    p {
      margin-top: 13px;
    }

    .single-about-box {
      .icon {
        font-size: 40px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }
  .about-us-image {
    margin-top: 30px;
  }

  .pagination-area {
    margin-top: 15px;
  }

  .team-details-info {
    margin-top: 30px;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .personal-information {
      display: none;
    }
  }
  .overview-desc {
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .skills {
      .skill-item {
        .skill-header {
          .skill-title {
            font-size: 15px;
          }
          .skill-percentage {
            font-size: 14px;
          }
        }
        .skill-bar {
          .bar-inner {
            .bar {
              height: 6px;
            }
          }
        }
      }
    }
  }

  .login-form {
    padding: 20px;
    margin-top: 30px;

    h3 {
      font-size: 18px;
    }
    .text-right {
      text-align: left !important;
    }
  }

  .signup-form {
    padding: 20px;
    margin-bottom: 30px;

    h3 {
      font-size: 18px;
    }
  }

  .coming-soon {
    // height: 100%;
    padding: {
      top: 70px;
      bottom: 70px;
    }
    .coming-soon-content {
      h2 {
        font-size: 1em;
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

  .error {
    h1 {
      font-size: 140px;
    }
    h2 {
      font-size: 18px;
      margin: 0 0 30px;
    }
  }

  .faq-accordion {
    padding: 15px;

    .accordion {
      .accordion__item {
        .accordion__button {
          padding: 15px 15px;
          font-size: 16px;
        }
      }
    }
  }
  .faq-contact {
    margin-top: 30px;
    padding: 40px 15px;
    border-radius: 5px;
    text-align: center;

    h3 {
      font-size: 18px;
    }
  }

  .sidebar {
    margin: {
      top: 30px;
      bottom: 30px;
    }

    .widget {
      h3,
      .widget-title {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }

  .blog-details-area {
    .blog-details {
      .article-img {
        .date {
          bottom: 2px;
          width: 65px;
          left: 2px;
          height: 60px;
          font-size: 15px;
          padding-top: 8px;
          line-height: 22px;
        }
      }
      .article-content {
        padding: 20px 15px;

        ul.category {
          margin-bottom: 20px;

          li {
            a {
              padding: 3px 14px 1px;
              margin-bottom: 3px;
              font-size: 13px;
            }
          }
        }
        h3 {
          font-size: 18px;
          margin-bottom: -10px;
          line-height: 26px;
        }
        .blockquote {
          padding: 20px 15px;
          border-left: 3px solid $template_color;

          p {
            font-size: 15px;
          }
        }
      }
    }
    .post-controls-buttons {
      text-align: center;
      padding: 20px 15px;

      div {
        a {
          padding: 7px 18px;
          font-size: 14px;
        }
      }
    }
    .post-comments {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
      }
      .single-comment {
        padding-left: 0;

        .comment-img {
          position: relative;
        }
        .comment-content {
          margin-top: 20px;
        }
        &.left-m {
          margin-left: 30px;
        }
      }
    }
    .leave-a-reply {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
        margin-bottom: 20px;
      }
      .form-group {
        margin-bottom: 10px;
      }
    }
  }

  .project-info {
    margin-top: 30px;

    ul {
      li {
        font-size: 16px;
        margin-bottom: 10px;

        span {
          font-size: 14px;
        }
      }
    }
  }
  .portfolio-details-content {
    h3 {
      font-size: 18px;
    }
  }

  .woocommerce-topbar {
    text-align: center;

    .woocommerce-result-count {
      margin-bottom: 15px;
    }
  }
  .single-product {
    .product-content {
      padding: 20px 15px;
      text-align: center;

      h3 {
        font-size: 18px;
      }
    }
  }

  .shop-details {
    padding: 15px;

    .product-entry-summary {
      h3 {
        font-size: 18px;
        margin-top: 25px;
      }
      h4 {
        font-size: 16px;
        margin: 18px 0;
      }
      form {
        .form-control {
          width: 100px;
        }
      }
    }
    .shop-details-tabs {
      #tabs {
        li {
          display: block;
          text-align: center;
        }
      }
      .content {
        h3 {
          font-size: 18px;
        }
      }
    }
  }
  .product-img-slides.owl-theme .owl-nav [class*="owl-"] {
    line-height: 30px;
  }
  .shop-details-area {
    padding-bottom: 30px;
  }
  .shop-related-prodcut {
    .section-title {
      margin-bottom: 20px;

      h2 {
        font-size: 22px;
      }
    }
  }

  .cart-buttons {
    margin-top: 35px;

    .coupon-box {
      position: relative;

      button {
        position: relative;
        border-radius: 5px;
        display: block;
        width: 100%;
        padding: 13px 0;
        margin-top: 8px;
      }
    }
    .btn {
      margin-top: 25px;
    }
  }
  .cart-totals {
    margin-top: 35px;
    padding: 25px;

    h3 {
      font-size: 18px;
    }
  }

  .user-actions {
    padding: 15px 18px 13px;
    margin-bottom: 30px;

    i {
      display: block;
      margin: {
        bottom: 5px;
        right: 0;
      }
    }
  }
  .checkout-area {
    .title {
      font-size: 18px;
    }
  }
  .billing-details {
    padding: 18px;
  }
  .order-details {
    padding: 18px;
    margin-top: 30px;
  }

  .contact-info-area {
    padding-bottom: 30px;

    .contact-info-box {
      margin-bottom: 30px;
      padding: 20px 15px;

      .icon {
        width: 70px;
        height: 70px;
        line-height: 70px;
        font-size: 25px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }
  #contactForm {
    margin-top: 30px;
  }

  .single-footer-widget {
    margin-bottom: 30px;

    &.ml-4 {
      margin-left: 0 !important;
    }
    ul {
      &.social-links {
        li {
          a {
            width: 35px;
            height: 35px;
            line-height: 36px;
            font-size: 15px;
          }
        }
      }
      &.list {
        li {
          a {
            font-size: 14px;
          }
        }
      }
      &.footer-recent-post {
        li {
          a {
            font-size: 14px;
          }
          span {
            font-size: 13px;
          }
        }
      }
      &.footer-contact-info {
        li {
          font-size: 14px;
        }
      }
    }
    h3 {
      font-size: 18px;
      margin-bottom: 25px;
    }
  }
  .copyright-area {
    margin-top: 30px;
    text-align: center;
    padding: {
      top: 25px;
      bottom: 25px;
    }
    p {
      font-size: 13px;
    }
    .text-right {
      text-align: center !important;
      margin-top: 10px;
    }
  }
  .go-top {
    bottom: 10px;
    right: 10px;
    font-size: 16px;
    width: 35px;
    height: 35px;
    line-height: 35px;
  }
  .searchBoxTop {
    .seachBoxContainer {
      padding: 50px 0 25px !important;
    }
  }
  .searchBoxTop .searchClose {
    top: 0 !important;
    right: 15px !important;
  }
  .searchBoxTop .searchClose::before,
  .searchBoxTop .searchClose::after {
    height: 30px !important;
    top: 10px;
  }
  .navbar-brand {
    img {
      // max-width: 80px;
      max-width: 20vh;
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 25px;
        }
      }
    }
  }
  .digital-agency-banner {
    &::before {
      content: "";
      background-color: #ffffff;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      position: absolute;
      opacity: 0.7;
    }
  }
  .ptb-80 {
    padding: {
      top: 50px;
      bottom: 50px;
    }
  }
}

// smaller laptop screen
@media screen and (min-width: $value_lg_offset) and (max-width: $value_xl) and (orientation: landscape) {
  // @media only #{$media} and ($feature_min : $value_sm) and ($feature_max : $value_md) {
  .parallax_banner {
    h1 {
      font-size: min(max(5vw, 24px), 52px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 30px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 22px) !important; /* adjust as necessary */
    }

    display: flex;
    align-items: center;

    overflow: visible;

    .imgHolder {
      z-index: 1;
      position: relative;
      // top: 15%;
      // width: 25%; /* adjust this as needed */
      width: 48vw; /* adjust this as needed */

      margin-right: 10% !important;
      margin-top: -5%;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }


  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 60vw;
  }
  .contact-area {
    border-top: 1px solid #eee;
  }
  .pt-120 {
    padding-top: 80px;
  }
  .agency-portfolio-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 60px;
        }
      }
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 30px;
        }
      }
    }
  }
  .ptb-120 {
    padding: {
      top: 80px;
      bottom: 80px;
    }
  }
  .single-product {
    .product-content {
      h3 {
        font-size: 20px;
        margin-bottom: 8px;
      }
    }
  }
  .section-title {
    h2 {
      font-size: 30px;
    }
    span {
      margin-bottom: 10px;
    }
  }
  .single-services {
    h3 {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
  .why-choose-inner-area {
    .single-box {
      h3 {
        font-size: 20px;
      }
    }
  }
  .artflex-nav {
    nav {
      .navbar-nav .nav-item a {
        margin-left: 9px;
        margin-right: 9px;
      }
      .others-option {
        margin-left: 0;

        ul {
          li {
            &:last-child,
            &:first-child {
              display: none;
            }
          }
        }
      }
    }
  }

  .main-banner {
    height: 100vh;
    padding: {
      top: 120px;
      bottom: 80px;
    }

    &.digital-agency-banner {
      padding-bottom: 60px;
      text-align: center;
    }
  }
  .hero-content {
    h1 {
      font-size: 35px;
    }
    p {
      margin: {
        bottom: 25px;
        top: 15px;
      }
    }
    margin-bottom: 45px;
  }
  .banner-image {
    text-align: center;
    img {
      position: relative;
      top: 0;
      right: 0;
      max-width: 430px;
      left: 0;
      width: 100%;
    }
  }
  .hero-image {
    margin-bottom: 30px;
  }
  .circle-shape3 {
    bottom: 20%;
    right: 13%;
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        margin: {
          left: 0;
          bottom: 0;
        }
      }
    }
  }
  .why-choose-inner-area {
    margin-top: 70px;
  }
  .cta-about-content {
    .section-title {
      h2 {
        font-size: 25px;
        br {
          display: none;
        }
      }
    }
  }
  .freelancer-portfolio-home {
    .banner-image {
      text-align: center;
    }
  }
  .single-blog-box {
    .blog-post-content {
      padding: 15px;
    }
  }
  .main-banner {
    &.freelancer-portfolio-home {
      padding-bottom: 0;

      .col-lg-6 {
        &:first-child {
          order: 2;
        }
        &:last-child {
          order: 1;
        }
      }
      .banner-image {
        img {
          top: 0;
          left: 0;
        }
      }
      .circle-shape3 {
        display: none;
      }
    }
  }
  .shape1,
  .shape2,
  .shape8,
  .shape5,
  .shape10,
  .shape4,
  .shape3,
  .circle-shape1,
  .circle-shape2,
  .shape11,
  .shape12,
  .shape9,
  .shape14,
  .shape15,
  .shape13,
  .shape18,
  .shape19,
  .shape20,
  .shape21,
  .shape22,
  .shape23,
  .shape24,
  .shape25,
  .shape26,
  .shape6,
  .shape7 {
    display: none;
  }
  .circle-top {
    top: -330px;
    left: -330px;
  }
  .circle-bottom {
    bottom: -330px;
    right: -330px;
  }
  .circle-dot {
    display: none;
  }

  .why-choose-us-img {
    margin-bottom: 85px;
    text-align: center;

    .back-img {
      left: 15px;
      top: 0;
      right: 0;
      margin: 0 auto;
    }
  }
  .why-choose-inner-area {
    .section-title {
      margin-bottom: 20px;
    }
    .single-box {
      margin-top: 30px;
    }
  }

  .cta-about-content {
    max-width: unset;
    margin-left: 0;
  }

  .crafting-content {
    overflow: hidden;
    margin-bottom: 40px;

    .single-item {
      width: 50%;
      position: relative;
      float: left;

      &.item-one {
        right: 0;
        animation: unset;
        top: 0;
      }
      &.item-two {
        animation: unset;
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
        animation: unset;
        bottom: 0;
      }
      &.item-four {
        right: 0;
        top: 0;
        animation: unset;
      }
    }
  }

  .how-we-work {
    padding-bottom: 50px;
  }
  .single-work-box {
    margin-bottom: 30px;
  }

  .team-area {
    padding-bottom: 50px;
  }

  .skill-area {
    padding: {
      top: 80px;
    }
  }
  .skill-image {
    text-align: center;
    margin-top: 40px;

    .back-image {
      right: -30px;
      top: 10%;
      left: 0;
      margin: 0 auto;
    }
  }

  .features-boxes-area {
    padding-bottom: 50px;

    .single-box {
      margin-bottom: 30px;
    }
  }

  .about-image {
    text-align: center;
    margin-top: 30px;

    &::before {
      display: none;
    }
  }

  .my-skill-area {
    .shape6,
    .shape7 {
      display: none;
    }
  }

  .about-us-image {
    margin-top: 30px;
  }

  .skill-content {
    padding-left: 0 !important;
    margin-top: 30px;
  }

  .blog-area {
    padding-bottom: 50px;
  }

  .boxes-area {
    &::before,
    &::after {
      background: #08071c;
      width: 100%;
    }
    padding: {
      top: 80px;
      bottom: 50px;
    }

    .single-box {
      padding: {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      margin-bottom: 30px;

      .icon {
        color: $template-color;
      }
      h3 {
        color: $white-color;
      }
      p {
        color: $white-color;
      }
      &.black-color {
        h3 {
          color: $white-color;
        }
        p {
          color: $white-color;
        }
      }
    }
  }

  .features-image {
    margin-top: 35px;
  }

  .grid {
    .item {
      width: 50%;
    }
  }

  .page-title-area {
    padding: {
      top: 165px;
      bottom: 115px;
    }
    h1 {
      font-size: 35px;
      margin-bottom: 15px;
    }
  }

  .team-details-info {
    .personal-information {
      display: none;
    }
  }

  .services-area {
    padding-bottom: 50px;
  }

  .login-form {
    margin-top: 35px;
  }

  .signup-form {
    margin-bottom: 35px;
  }

  .faq-accordion,
  .faq-contact {
    padding: 30px;
  }

  .contact-info-area {
    padding-bottom: 50px;
  }
  .contact-info-box {
    margin-bottom: 30px;
  }
  #contactForm {
    margin-top: 35px;
  }

  .shop-details-area {
    padding-bottom: 50px;
  }
  .product-entry-summary {
    margin-top: 35px;
  }

  .sidebar {
    margin: {
      top: 30px;
      bottom: 30px;
    }
  }

  .project-info {
    margin-top: 30px;
  }

  .single-footer-widget {
    margin-bottom: 30px;
  }
  .copyright-area {
    margin-top: 50px;
  }
  .funfact {
    h3 {
      font-size: 40px;
    }
  }
  .single-footer-widget {
    h3 {
      margin-bottom: 30px;
    }
  }
  .artflex-nav {
    nav {
      .navbar-nav {
        .nav-item {
          .dropdown_menu {
            width: 210px;
          }
        }
      }
    }
  }
  .services-box {
    .services-content {
      h3 {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }
  .single-blog-post {
    .blog-post-content {
      h3 {
        font-size: 20px;
      }
    }
  }
  .digital-agency-banner {
    &::before {
      content: "";
      background-color: #ffffff;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      position: absolute;
      opacity: 0.8;
    }
  }
  .banner-social-buttons {
    display: none;
  }
  .navbar-brand {
    img {
      max-width: 90px;
    }
  }
  .single-blog-box {
    .blog-post-content {
      h3 {
        font-size: 22px;
      }
    }
  }
  .ptb-80 {
    padding-top: 70px;
    padding-bottom: 70px;
  }
}

// large screens
@media screen and (min-width: $value_xl_offset) and (max-width: $value_xx) and (orientation: landscape) {
  .parallax_banner {
    display: flex;

    position: relative;
    z-index: 1;
    height: 100%;
    // overflow: hidden;
    pointer-events: auto;
    align-items: center;

    .imgHolder {
      position: relative;
      // width: 40%; /* adjust this as needed */
      width: 35vw; /* adjust this as needed */

      margin-left: 55% !important;
      // margin-top: 0%;
    }

    img {
      position: relative;
      bottom: 0 !important;
      max-width: 100%;
      height: auto;
    }
    h1 {
      font-size: min(max(8vw, 24px), 52px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
      color: #6084a447;
    }
  }



  nav {
    .navbar-nav {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 15px;
      padding-right: 15px;
      background-color: $white-color;

      .nav-item {
        padding: 9px 5% !important;

        a {
          margin-left: 0;
          margin-right: 0;
        }
        .dropdown_menu {
          left: 0;

          li {
            .dropdown_menu {
              top: 0;
              left: -5px;
              position: relative;
              display: none;
              margin-top: 0;
              border: 1px solid #eeeeee;
              padding: 0 0 0 4px;
            }
            &:focus,
            &:hover {
              .dropdown_menu {
                display: block;
                top: 0 !important;
              }
            }
          }
        }
        &:hover ul {
          top: 40px;
        }
      }
    }
    .others-option {
      background-color: $white-color;
      padding-bottom: 10px;
      margin-left: 0;
      padding-left: 15px;

      ul li .side-menu {
        display: none;
      }
    }
  }
  
  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 70vw;
  }

  .shape1,
  .shape2,
  .shape8,
  .shape5,
  .shape10,
  .shape4,
  .shape3,
  .circle-shape2,
  .circle-shape3,
  .shape11,
  .shape12,
  .shape9,
  .shape14,
  .shape15,
  .shape13,
  .shape18,
  .shape6,
  .shape7,
  .shape19,
  .shape20,
  .shape21,
  .shape22,
  .shape23,
  .shape24,
  .shape25,
  .shape26,
  .circle-dot {
    display: none;
  }
  .main-banner {
    height: 100vh;
  }
  .ptb-120 {
    padding-top: 90px;
    padding-bottom: 90px;
  }
  .banner-image {
    text-align: center;
    img {
      max-width: 420px;
      left: 0;
      width: 100%;
    }
  }
  .hero-content h1 {
    font-size: 38px;
  }
  .circle-shape1 {
    right: 9%;
  }
  .pt-120 {
    padding-top: 90px;
  }
  .single-blog-post {
    .blog-post-content {
      h3 {
        font-size: 20px;
      }
    }
  }
  .why-choose-us-img {
    margin-bottom: 0;

    .front-img {
      top: 0;
      left: 0;
    }
    .back-img {
      display: none;
    }
  }
  .agency-portfolio-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 60px;
        }
      }
    }
  }
  .section-title {
    span {
      margin-bottom: 10px;
    }
    h2 {
      font-size: 30px;
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 40px;
        }
      }
    }
  }
  .boxes-area {
    &::before,
    &::after {
      width: 35%;
    }
  }
  .circle-top {
    top: -330px;
    left: -330px;
  }
  .circle-bottom {
    bottom: -330px;
    right: -330px;
  }

  .grid {
    .item {
      width: 33.3333%;
    }
  }
  .single-product {
    .product-content {
      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
    }
  }
  .freelancer-portfolio-home {
    .circle-shape1 {
      left: 7%;
    }
    .banner-image {
      img {
        top: 79px;
        left: 0;
      }
    }
  }

  .banner-social-buttons {
    display: none;
  }

  .about-image {
    &::before {
      right: -20px;
      top: 30px;
      width: 92%;
      height: 91%;
    }
  }

  .crafting-content {
    .single-item {
      &.item-one {
        right: 0;
      }
      &.item-two {
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
      }
      &.item-four {
        right: 0;
      }
    }
  }

  .why-choose-us-content {
    .section-title {
      margin-bottom: 10px;
      h2 {
        font-size: 25px;
      }
    }
    p {
      margin-bottom: 8px;
    }
    .btn {
      margin-top: 10px;
    }
  }
  .skill-image {
    img.man-image {
      max-width: 360px;
      width: 100%;
    }
  }
  .blog-area {
    padding-bottom: 60px !important;
  }
  .services-box {
    .services-content {
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }
  .navbar-brand {
    img {
      max-width: 200px;
    }
  }
  .copyright-area {
    margin-top: 85px;
  }
}

// Obscure <2k screens
@media screen and (min-width: $value_xx) and (orientation: landscape) {
  .parallax_banner {
    display: flex;
    // justify-content: center;
    align-items: center;

    .imgHolder {
      position: relative;
      top: 5%;
      width: 30vw; /* adjust this as needed */

      margin-top: 1%;
      bottom: 0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      bottom: 0 !important;
      max-width: 100%;
      height: auto;
    }
    h1 {
      font-size: 8vw;
      font-size: min(max(8vw, 24px), 72px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: 4vw;
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: 2vw;
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
    }
  }



  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 5%;
    max-width: 80%;
  }
  .shape6 {
    left: 8%;
  }
  .circle-shape1 {
    right: 26%;
    bottom: 30%;
  }
  .circle-shape2 {
    right: 15%;
    bottom: 0;
  }
  .circle-shape3 {
    right: 27%;
    bottom: 0;
  }
  .shape10 {
    right: 8%;
  }
  .shape18 {
    left: 25%;
  }
  .shape19 {
    left: 20%;
  }
  .shape20 {
    right: 20%;
  }
  .shape21 {
    top: 20%;
    right: 25%;
  }
  .shape22 {
    right: 18%;
    top: 25%;
  }
  .shape13 {
    left: 10%;
    top: 45%;
  }
  .footer-area {
    .shape18 {
      top: 30%;
      left: 10%;
    }
    .shape21 {
      top: 20%;
      right: 15%;
    }
    .shape7 {
      right: 7%;
      top: 34%;
    }
  }
  .agency-portfolio-home {
    .main-banner {
      height: 100%;
      padding: {
        top: 290px;
        bottom: 225px;
      }
    }
  }
  .freelancer-portfolio-home {
    .circle-shape1 {
      left: 24%;
      bottom: 20%;
    }
    .circle-shape2 {
      left: 18%;
      right: auto;
    }
    .circle-shape3 {
      right: auto;
      left: 22%;
    }
    .banner-image {
      img {
        top: 81px;
      }
    }
  }
  .shape24 {
    display: block;
  }
  .boxes-area {
    &::before,
    &::after {
      width: 40%;
    }
  }
  .why-choose-us-content {
    .section-title {
      h2 {
        font-size: 22px;
      }
    }
  }
}
--------------------------------------------------
$media: screen;
$feature_min: min-width;
$feature_max: max-width;

// Extra small devices (portrait phones, less than 576px)
$value_xs: 575px;

// Small devices (landscape phones, 576px and up)
$value_sm: 576px;

// Medium devices (tablets, 768px and up)
$value_md: 767px;
$value_md_offset: 768px;

// Large devices (desktops, 992px and up)
$value_lg: 992px;
$value_lg_offset: 993px;

// Extra large devices (large desktops, 1200px and up)
$value_xl: 1200px;
$value_xl_offset: 1201px;

// Extra extra large devices (TVs, large screens, 1600px and up)
$value_xx: 1600px;

$template-color: #38d16a;
$pink-color: #f54ea2;
$white-color: #ffffff;
$black-color: #121619;
$paragraph-color: #6084a4;
$bg-gray: #f9f9f9;

// Only For Mobile and Tab Navbar
@media only #{$media} and ($feature_max : $value_md) {
  .searchBoxTop {
    .seachBoxContainer {
      padding: 25px 0 55px;
    }
    .searchClose {
      cursor: pointer;
      position: absolute;
      top: auto;
      right: 11px;
      width: 40px;
      height: 40px;
      margin-top: 0;
      bottom: 11px;
    }
  }
}

@media screen and (max-width: $value_md_offset) and (orientation: portrait) {
  .contact-card {
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  }

  .card.image,
  .card.info {
    flex: 1;
  }

  .card.image {
    order: 2;
  }

  .card.info {
    order: 1;
  }

  // @media screen and (max-width: $value_md) and (orientation: portrait) {
  //   .contact-card {
  //     display: flex;
  //     flex-wrap: wrap;
  //     justify-content: space-between;
  //     align-items: center;
  //     // padding: 1em;
  //     border: 4px solid #000;
  //     width: 600px;
  //     height: 100%;
  //     // margin: 0 auto;
  //   }

  //   .card .image {
  //     flex: 2;
  //     justify-content: flex-end;

  //   }

  //   .card .info {
  //     flex: 1;
  //     justify-content: flex-start;

  //   }

  //   .card {
  //     flex-direction: column;
  //   }

  // @media only #{$media} and ($feature_max : $value_xs) {
  .parallax_banner {
    // img {
    //   display: none;
    // }
    overflow: visible;

    .imgHolder {
      z-index: 1;
      position: relative;
      // top: 15%;
      width: 35%; /* adjust this as needed */
      // margin-left: 20% !important;
      margin-top: -5%;
      bottom: 0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }
}

// ipad 
@media screen and (min-width: $value_md_offset) and (orientation: landscape){
  .parallax_banner {

    h1 {
      font-size: min(max(6vw, 24px), 42px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
      color: #6084a447;
    }

    overflow: visible;
    display: flex;
    align-items: center;

    .imgHolder {
      z-index: 1;
      position: relative;
      width: 38vw; /* adjust this as needed */
      margin-left: 54vw !important;
      // margin-top: -5%;
      // bottom: 0 !important;
      top:0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }


  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 60%;
  }

  .ptb-120 {
    padding: {
      top: 60px;
      bottom: 60px;
    }
  }
  .owl-carousel {
    &.owl-theme {
      .owl-dots {
        right: 15px;
        top: auto;
        bottom: 10px;

        .owl-dot {
          display: inline-block;

          span {
            margin: 0 3px;
            width: 15px;
            height: 15px;
          }
        }
      }
      .owl-nav {
        [class*="owl-"] {
          font-size: 16px;
          margin: -20px 0 0;
          left: 0;
          width: 35px;
          height: 35px;
          line-height: 38px;

          &.owl-next {
            right: 0;
            left: auto;
          }
        }
      }
    }
  }
  .btn {
    font-size: 14px;
    padding: 12px 25px;
  }
  p {
    font-size: 14px;
  }
  .preloader {
    .loader {
      h1 {
        font-size: 3rem;
      }
    }
  }
  .section-title {
    margin-bottom: 40px;

    span {
      font-size: 14px;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 24px;
      max-width: 100%;
    }
  }
  .artflex-nav {
    padding-top: 0;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .navbar {
      padding: {
        left: 0;
        right: 0;
      }
    }
    .navbar-light {
      .navbar-toggler {
        border-color: rgba(0, 0, 0, 1);
        outline: 0;
        border-radius: 0;
      }
    }
    nav {
      .navbar-nav {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        padding-right: 15px;
        background-color: $white-color;

        .nav-item {
          padding: 9px 2%;

          a {
            margin-left: 0;
            margin-right: 0;
          }
          .dropdown_menu {
            left: 0;

            li {
              .dropdown_menu {
                top: 0;
                left: -5px;
                position: relative;
                display: none;
                margin-top: 0;
                border: 1px solid #eeeeee;
                padding: 0 0 0 4px;
              }
              &:focus,
              &:hover {
                .dropdown_menu {
                  display: block;
                  top: 0 !important;
                }
              }
            }
          }
          &:hover ul {
            top: 40px;
          }
        }
      }
      .others-option {
        background-color: $white-color;
        padding-bottom: 10px;
        margin-left: 0;
        padding-left: 15px;

        ul li .side-menu {
          display: none;
        }
      }
    }
  }
  .shop-details .product-entry-summary form .input-counter {
    max-width: 120px;
    min-width: 120px;
  }
  .main-banner {
    height: 100vh;
    padding: {
      top: 120px;
      bottom: 80px;
    }

    &.digital-agency-banner {
      padding-bottom: 30px;
    }
  }
  .banner-social-buttons {
    display: none;
  }

  .hero-header {
    // font-size: 25px !important;
  }
  .hero-content {
    h1 {
      // font-size: 27px;
    }
    h3 {
      // font-size: 25px !important;
    }
    p {
      margin: {
        bottom: 25px;
        top: 15px;
      }
    }
    margin-bottom: 45px;
    margin-top: 0;
  }
  .banner-image {
    text-align: center;
    img {
      position: relative;
      top: 0;
      right: 0;
      max-width: 330px;
      left: 0;
      margin: auto;
      width: 100%;
    }
  }
  .skill-image {
    text-align: center;
    img.man-image {
      max-width: 360px;
      width: 100%;
    }
  }
  .hero-image {
    margin-bottom: 30px;
  }
  // .shape1,
  // .shape2,
  // .shape7,
  // .shape8,
  // .shape5,
  // .shape6,
  // .shape10,
  // .shape4,
  // .shape3,
  // .circle-shape1,
  // .circle-shape2,
  // .shape11,
  // .shape12,
  // .shape9,
  // .shape14,
  // .shape15,
  // .shape13,
  // .shape18,
  // .shape19,
  // .shape20,
  // .shape21,
  // .shape22,
  // .shape23,
  // .shape24,
  // .shape25,
  // .shape26,
  // .circle-dot {
  //   display: none;
  // }
  .circle-shape3 {
    right: 6%;
    bottom: 5%;
  }
  .circle-top {
    top: -440px;
    left: -350px;
  }
  .circle-bottom {
    bottom: -440px;
    right: -350px;
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        margin: {
          left: 0;
          bottom: 0;
        }
        h1 {
          margin-bottom: 25px;
        }
      }
    }
  }
  .agency-portfolio-home {
    .main-banner {
      padding: {
        top: 145px;
        bottom: 90px;
      }

      .hero-content {
        h1 {
          font-size: 35px;
        }
      }
    }
  }
  .blog-home-slides {
    .col-lg-12 {
      padding: 0;
    }
  }
  .single-blog-box {
    .blog-post-content {
      padding: 15px;

      div {
        &.tags {
          a {
            padding: 5px 15px;
            font-size: 14px;
          }
        }
      }
      h3 {
        margin: 15px 0 10px;
        font-size: 18px;
        line-height: 27px;
      }
      ul {
        li {
          margin-right: 2px;
          font-size: 12px;

          i {
            margin-right: 2px;
          }
        }
      }
    }
  }
  .blog-home-slides {
    &:hover {
      &.owl-carousel {
        &.owl-theme {
          .owl-nav {
            [class*="owl-"] {
              left: 5px;

              &.owl-next {
                right: 5px;
                left: auto;
              }
            }
          }
        }
      }
    }
  }
  .main-banner {
    &.freelancer-portfolio-home {
      padding-bottom: 0;

      .col-lg-6 {
        &:first-child {
          order: 2;
        }
        &:last-child {
          order: 1;
        }
      }
      .banner-image {
        img {
          top: 0;
          left: 0;
        }
      }
      .circle-shape3 {
        display: none;
      }
    }
  }

  .cta-about {
    padding: {
      top: 60px;
      bottom: 60px;
      left: 10px;
      right: 5px;
    }
    .container-fluid {
      padding: {
        left: 15px !important;
        right: 15px !important;
      }
    }
  }
  .cta-about-image {
    background-image: unset;

    img {
      display: block;
    }
  }
  .cta-about-content {
    max-width: 100%;
    margin: {
      top: 35px;
    }
    padding: 0;
    h2 {
      br {
        display: none;
      }
    }
  }

  .crafting-content {
    overflow: hidden;
    margin-bottom: 40px;

    .single-item {
      width: 50%;
      position: relative;
      float: left;
      padding: 25px 8px;

      &.item-one {
        right: 0;
        animation: unset;
        top: 0;
      }
      &.item-two {
        animation: unset;
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
        animation: unset;
        bottom: 0;
      }
      &.item-four {
        right: 0;
        top: 0;
        animation: unset;
      }
      i {
        font-size: 30px;
      }
      h6 {
        font-size: 15px;
      }
    }
  }
  .crafting-image {
    .video-btn {
      font-size: 20px;
      margin-top: -30px;
      width: 60px;
      height: 60px;
      line-height: 60px;
    }
  }

  .services-area {
    padding-bottom: 30px;
  }
  .single-services {
    padding: 20px;

    h3 {
      font-size: 18px;
    }
  }
  .more-services-btn {
    margin-top: 15px;
  }
  .single-services-box {
    padding: 15px;

    .icon {
      font-size: 40px;
    }
    h3 {
      font-size: 18px;
    }
  }
  .services-box {
    .services-content {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }
  .freelancer-portfolio-home {
    .banner-image {
      text-align: center;
    }
  }
  .services-area {
    .single-services {
      padding: 15px;
    }
  }
  .services-slides {
    &.owl-carousel {
      &.owl-theme {
        .owl-dots {
          margin-top: 10px !important;

          button {
            &.owl-dot {
              span {
                margin: 0 3px;
                width: 14px;
                height: 14px;
              }
            }
          }
        }
      }
    }
  }

  .why-choose-us-img {
    margin-bottom: 30px;

    .front-img {
      top: 0;
      left: 0;
      width: 100%;
    }
    .back-img {
      display: none;
    }
  }
  .why-choose-us-area {
    &:hover {
      .why-choose-us-img {
        .front-img {
          top: 0;
        }
      }
    }
  }
  .why-choose-inner-area {
    margin-top: 45px;

    .section-title {
      margin-bottom: 10px;

      h2 {
        max-width: 100%;
      }
    }
    .single-box {
      padding: 20px;
      margin-top: 30px;

      .icon {
        font-size: 40px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }

  .how-we-work {
    padding-bottom: 30px;
  }
  .single-work-box {
    margin-bottom: 30px;
    padding: 20px 15px;
    text-align: center;

    .number {
      display: inline-block;
    }
    h3 {
      font-size: 18px;
    }
  }

  .team-member-image {
    text-align: center;
  }

  .boxes-area {
    &::before,
    &::after {
      background: #08071c;
      width: 100%;
    }
    padding: {
      top: 60px;
      bottom: 30px;
    }

    .single-box {
      padding: {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      margin-bottom: 30px;

      .icon {
        font-size: 40px;
        color: $template-color;
      }
      h3 {
        font-size: 18px;
        color: $white-color;
      }
      p {
        color: $white-color;
      }
      &.black-color {
        h3 {
          color: $white-color;
        }
        p {
          color: $white-color;
        }
      }
    }
  }

  .features-boxes-area {
    padding-bottom: 30px;

    .single-box {
      margin-bottom: 30px;
      padding-left: 55px;

      span {
        font-size: 30px;
      }
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }

  .about-image {
    margin-top: 30px;
    text-align: center;

    &::before {
      display: none;
    }
    img {
      width: auto;
    }
  }

  .single-work {
    .works-content {
      h3 {
        font-size: 18px;
        margin-bottom: 0;
      }
      p {
        display: none;
      }
    }
    &:hover {
      .works-content {
        margin-top: -25px;
      }
    }
  }

  .portfolio-item {
    img {
      width: 100%;
    }
    .portfolio-content {
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      span {
        font-size: 13px;
      }
    }
  }

  .single-feedback {
    padding-left: 0;
    max-width: 100%;
    margin-bottom: 40px;

    img {
      position: relative;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
    }
    h3 {
      font-size: 18px;

      span {
        font-size: 14px;
      }
    }
  }
  .feedback-slides {
    &.owl-carousel {
      &.owl-theme {
        .owl-nav {
          left: 0;
          bottom: -5px;
          right: 0;
        }
      }
    }
  }

  .skill-content {
    padding-left: 0 !important;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
    }
  }

  .team-area {
    padding-bottom: 30px;
  }
  .single-team {
    .team-content {
      margin-top: 30px;

      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
      span {
        font-size: 13px;
      }
    }
  }
  .single-team-box {
    .team-content {
      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
      span {
        font-size: 13px;
      }
    }
  }

  .cta-content {
    span {
      font-size: 13px;
      margin-bottom: 15px;
    }
    h2 {
      font-size: 25px;
    }
  }

  .skill-area {
    padding: {
      top: 60px;
    }
  }
  .our-skill {
    margin-bottom: 30px;

    .skills {
      .skill-item {
        .skill-header {
          .skill-title {
            font-size: 15px;
          }
          .skill-percentage {
            font-size: 14px;
          }
        }
        .skill-bar {
          .bar-inner {
            .bar {
              height: 6px;
            }
          }
        }
      }
    }
  }
  .skill-image {
    .back-image {
      right: 0;
    }
  }

  .funfacts-area {
    padding-bottom: 40px;
  }
  .funfact {
    margin-bottom: 20px;

    h3 {
      font-size: 30px;
    }
    p {
      font-size: 13px;
      text-transform: capitalize;
      margin-top: 3px;
    }
  }

  .blog-area {
    padding-bottom: 30px;
  }
  .single-blog-post {
    .blog-post-content {
      padding: 15px;

      .date {
        font-size: 13px;
      }
      h3 {
        line-height: 28px;
        font-size: 18px;
      }
    }
    .read-more-btn {
      font-size: 14px;
    }
    &.with-video {
      .blog-video {
        iframe {
          height: 160px;
        }
      }
    }
  }

  .contact-cta-content {
    .section-title {
      margin-bottom: 15px;
    }
    p {
      max-width: 100%;
      margin: 0 auto 25px;
    }
  }

  .features-content {
    .single-features-item {
      padding-left: 45px;

      .icon {
        font-size: 30px;
      }
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      p {
        font-size: 13px;
      }
    }
  }
  .features-image {
    margin-top: 30px;
  }

  .page-title-area {
    padding: {
      top: 160px;
      bottom: 85px;
    }
    h1 {
      font-size: 25px;
      margin-bottom: 10px;
    }
    ul {
      li {
        font-size: 14px;
      }
    }
  }
  .pt-120 {
    padding-top: 50px;
  }
  .contact-area {
    border-top: 1px solid #eee;
  }
  .about-us-content {
    p {
      margin-top: 13px;
    }

    .single-about-box {
      .icon {
        font-size: 40px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }
  .about-us-image {
    margin-top: 30px;
  }

  .pagination-area {
    margin-top: 15px;
  }

  .team-details-info {
    margin-top: 30px;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .personal-information {
      display: none;
    }
  }
  .overview-desc {
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .skills {
      .skill-item {
        .skill-header {
          .skill-title {
            font-size: 15px;
          }
          .skill-percentage {
            font-size: 14px;
          }
        }
        .skill-bar {
          .bar-inner {
            .bar {
              height: 6px;
            }
          }
        }
      }
    }
  }

  .login-form {
    padding: 20px;
    margin-top: 30px;

    h3 {
      font-size: 18px;
    }
    .text-right {
      text-align: left !important;
    }
  }

  .signup-form {
    padding: 20px;
    margin-bottom: 30px;

    h3 {
      font-size: 18px;
    }
  }

  .coming-soon {
    // height: 100%;
    padding: {
      top: 70px;
      bottom: 70px;
    }
    .coming-soon-content {
      h2 {
        font-size: 1em;
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

  .error {
    h1 {
      font-size: 140px;
    }
    h2 {
      font-size: 18px;
      margin: 0 0 30px;
    }
  }

  .faq-accordion {
    padding: 15px;

    .accordion {
      .accordion__item {
        .accordion__button {
          padding: 15px 15px;
          font-size: 16px;
        }
      }
    }
  }
  .faq-contact {
    margin-top: 30px;
    padding: 40px 15px;
    border-radius: 5px;
    text-align: center;

    h3 {
      font-size: 18px;
    }
  }

  .sidebar {
    margin: {
      top: 30px;
      bottom: 30px;
    }

    .widget {
      h3,
      .widget-title {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }

  .blog-details-area {
    .blog-details {
      .article-img {
        .date {
          bottom: 2px;
          width: 65px;
          left: 2px;
          height: 60px;
          font-size: 15px;
          padding-top: 8px;
          line-height: 22px;
        }
      }
      .article-content {
        padding: 20px 15px;

        ul.category {
          margin-bottom: 20px;

          li {
            a {
              padding: 3px 14px 1px;
              margin-bottom: 3px;
              font-size: 13px;
            }
          }
        }
        h3 {
          font-size: 18px;
          margin-bottom: -10px;
          line-height: 26px;
        }
        .blockquote {
          padding: 20px 15px;
          border-left: 3px solid $template_color;

          p {
            font-size: 15px;
          }
        }
      }
    }
    .post-controls-buttons {
      text-align: center;
      padding: 20px 15px;

      div {
        a {
          padding: 7px 18px;
          font-size: 14px;
        }
      }
    }
    .post-comments {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
      }
      .single-comment {
        padding-left: 0;

        .comment-img {
          position: relative;
        }
        .comment-content {
          margin-top: 20px;
        }
        &.left-m {
          margin-left: 30px;
        }
      }
    }
    .leave-a-reply {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
        margin-bottom: 20px;
      }
      .form-group {
        margin-bottom: 10px;
      }
    }
  }

  .project-info {
    margin-top: 30px;

    ul {
      li {
        font-size: 16px;
        margin-bottom: 10px;

        span {
          font-size: 14px;
        }
      }
    }
  }
  .portfolio-details-content {
    h3 {
      font-size: 18px;
    }
  }

  .woocommerce-topbar {
    text-align: center;

    .woocommerce-result-count {
      margin-bottom: 15px;
    }
  }
  .single-product {
    .product-content {
      padding: 20px 15px;
      text-align: center;

      h3 {
        font-size: 18px;
      }
    }
  }

  .shop-details {
    padding: 15px;

    .product-entry-summary {
      h3 {
        font-size: 18px;
        margin-top: 25px;
      }
      h4 {
        font-size: 16px;
        margin: 18px 0;
      }
      form {
        .form-control {
          width: 100px;
        }
      }
    }
    .shop-details-tabs {
      #tabs {
        li {
          display: block;
          text-align: center;
        }
      }
      .content {
        h3 {
          font-size: 18px;
        }
      }
    }
  }
  .product-img-slides.owl-theme .owl-nav [class*="owl-"] {
    line-height: 30px;
  }
  .shop-details-area {
    padding-bottom: 30px;
  }
  .shop-related-prodcut {
    .section-title {
      margin-bottom: 20px;

      h2 {
        font-size: 22px;
      }
    }
  }

  .cart-buttons {
    margin-top: 35px;

    .coupon-box {
      position: relative;

      button {
        position: relative;
        border-radius: 5px;
        display: block;
        width: 100%;
        padding: 13px 0;
        margin-top: 8px;
      }
    }
    .btn {
      margin-top: 25px;
    }
  }
  .cart-totals {
    margin-top: 35px;
    padding: 25px;

    h3 {
      font-size: 18px;
    }
  }

  .user-actions {
    padding: 15px 18px 13px;
    margin-bottom: 30px;

    i {
      display: block;
      margin: {
        bottom: 5px;
        right: 0;
      }
    }
  }
  .checkout-area {
    .title {
      font-size: 18px;
    }
  }
  .billing-details {
    padding: 18px;
  }
  .order-details {
    padding: 18px;
    margin-top: 30px;
  }

  .contact-info-area {
    padding-bottom: 30px;

    .contact-info-box {
      margin-bottom: 30px;
      padding: 20px 15px;

      .icon {
        width: 70px;
        height: 70px;
        line-height: 70px;
        font-size: 25px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }
  #contactForm {
    margin-top: 30px;
  }

  .single-footer-widget {
    margin-bottom: 30px;

    &.ml-4 {
      margin-left: 0 !important;
    }
    ul {
      &.social-links {
        li {
          a {
            width: 35px;
            height: 35px;
            line-height: 36px;
            font-size: 15px;
          }
        }
      }
      &.list {
        li {
          a {
            font-size: 14px;
          }
        }
      }
      &.footer-recent-post {
        li {
          a {
            font-size: 14px;
          }
          span {
            font-size: 13px;
          }
        }
      }
      &.footer-contact-info {
        li {
          font-size: 14px;
        }
      }
    }
    h3 {
      font-size: 18px;
      margin-bottom: 25px;
    }
  }
  .copyright-area {
    margin-top: 30px;
    text-align: center;
    padding: {
      top: 25px;
      bottom: 25px;
    }
    p {
      font-size: 13px;
    }
    .text-right {
      text-align: center !important;
      margin-top: 10px;
    }
  }
  .go-top {
    bottom: 10px;
    right: 10px;
    font-size: 16px;
    width: 35px;
    height: 35px;
    line-height: 35px;
  }
  .searchBoxTop {
    .seachBoxContainer {
      padding: 50px 0 25px !important;
    }
  }
  .searchBoxTop .searchClose {
    top: 0 !important;
    right: 15px !important;
  }
  .searchBoxTop .searchClose::before,
  .searchBoxTop .searchClose::after {
    height: 30px !important;
    top: 10px;
  }
  .navbar-brand {
    img {
      // max-width: 80px;
      max-width: 20vh;
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 25px;
        }
      }
    }
  }
  .digital-agency-banner {
    &::before {
      content: "";
      background-color: #ffffff;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      position: absolute;
      opacity: 0.7;
    }
  }
  .ptb-80 {
    padding: {
      top: 50px;
      bottom: 50px;
    }
  }
}

// smaller laptop screen
@media screen and (min-width: $value_lg_offset) and (max-width: $value_xl) and (orientation: landscape) {
  // @media only #{$media} and ($feature_min : $value_sm) and ($feature_max : $value_md) {
  .parallax_banner {
    h1 {
      font-size: min(max(5vw, 24px), 52px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 30px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 22px) !important; /* adjust as necessary */
    }

    display: flex;
    align-items: center;

    overflow: visible;

    .imgHolder {
      z-index: 1;
      position: relative;
      // top: 15%;
      // width: 25%; /* adjust this as needed */
      width: 48vw; /* adjust this as needed */

      margin-right: 10% !important;
      margin-top: -5%;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }


  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 60vw;
  }
  .contact-area {
    border-top: 1px solid #eee;
  }
  .pt-120 {
    padding-top: 80px;
  }
  .agency-portfolio-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 60px;
        }
      }
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 30px;
        }
      }
    }
  }
  .ptb-120 {
    padding: {
      top: 80px;
      bottom: 80px;
    }
  }
  .single-product {
    .product-content {
      h3 {
        font-size: 20px;
        margin-bottom: 8px;
      }
    }
  }
  .section-title {
    h2 {
      font-size: 30px;
    }
    span {
      margin-bottom: 10px;
    }
  }
  .single-services {
    h3 {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
  .why-choose-inner-area {
    .single-box {
      h3 {
        font-size: 20px;
      }
    }
  }
  .artflex-nav {
    nav {
      .navbar-nav .nav-item a {
        margin-left: 9px;
        margin-right: 9px;
      }
      .others-option {
        margin-left: 0;

        ul {
          li {
            &:last-child,
            &:first-child {
              display: none;
            }
          }
        }
      }
    }
  }

  .main-banner {
    height: 100vh;
    padding: {
      top: 120px;
      bottom: 80px;
    }

    &.digital-agency-banner {
      padding-bottom: 60px;
      text-align: center;
    }
  }
  .hero-content {
    h1 {
      font-size: 35px;
    }
    p {
      margin: {
        bottom: 25px;
        top: 15px;
      }
    }
    margin-bottom: 45px;
  }
  .banner-image {
    text-align: center;
    img {
      position: relative;
      top: 0;
      right: 0;
      max-width: 430px;
      left: 0;
      width: 100%;
    }
  }
  .hero-image {
    margin-bottom: 30px;
  }
  .circle-shape3 {
    bottom: 20%;
    right: 13%;
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        margin: {
          left: 0;
          bottom: 0;
        }
      }
    }
  }
  .why-choose-inner-area {
    margin-top: 70px;
  }
  .cta-about-content {
    .section-title {
      h2 {
        font-size: 25px;
        br {
          display: none;
        }
      }
    }
  }
  .freelancer-portfolio-home {
    .banner-image {
      text-align: center;
    }
  }
  .single-blog-box {
    .blog-post-content {
      padding: 15px;
    }
  }
  .main-banner {
    &.freelancer-portfolio-home {
      padding-bottom: 0;

      .col-lg-6 {
        &:first-child {
          order: 2;
        }
        &:last-child {
          order: 1;
        }
      }
      .banner-image {
        img {
          top: 0;
          left: 0;
        }
      }
      .circle-shape3 {
        display: none;
      }
    }
  }
  .shape1,
  .shape2,
  .shape8,
  .shape5,
  .shape10,
  .shape4,
  .shape3,
  .circle-shape1,
  .circle-shape2,
  .shape11,
  .shape12,
  .shape9,
  .shape14,
  .shape15,
  .shape13,
  .shape18,
  .shape19,
  .shape20,
  .shape21,
  .shape22,
  .shape23,
  .shape24,
  .shape25,
  .shape26,
  .shape6,
  .shape7 {
    display: none;
  }
  .circle-top {
    top: -330px;
    left: -330px;
  }
  .circle-bottom {
    bottom: -330px;
    right: -330px;
  }
  .circle-dot {
    display: none;
  }

  .why-choose-us-img {
    margin-bottom: 85px;
    text-align: center;

    .back-img {
      left: 15px;
      top: 0;
      right: 0;
      margin: 0 auto;
    }
  }
  .why-choose-inner-area {
    .section-title {
      margin-bottom: 20px;
    }
    .single-box {
      margin-top: 30px;
    }
  }

  .cta-about-content {
    max-width: unset;
    margin-left: 0;
  }

  .crafting-content {
    overflow: hidden;
    margin-bottom: 40px;

    .single-item {
      width: 50%;
      position: relative;
      float: left;

      &.item-one {
        right: 0;
        animation: unset;
        top: 0;
      }
      &.item-two {
        animation: unset;
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
        animation: unset;
        bottom: 0;
      }
      &.item-four {
        right: 0;
        top: 0;
        animation: unset;
      }
    }
  }

  .how-we-work {
    padding-bottom: 50px;
  }
  .single-work-box {
    margin-bottom: 30px;
  }

  .team-area {
    padding-bottom: 50px;
  }

  .skill-area {
    padding: {
      top: 80px;
    }
  }
  .skill-image {
    text-align: center;
    margin-top: 40px;

    .back-image {
      right: -30px;
      top: 10%;
      left: 0;
      margin: 0 auto;
    }
  }

  .features-boxes-area {
    padding-bottom: 50px;

    .single-box {
      margin-bottom: 30px;
    }
  }

  .about-image {
    text-align: center;
    margin-top: 30px;

    &::before {
      display: none;
    }
  }

  .my-skill-area {
    .shape6,
    .shape7 {
      display: none;
    }
  }

  .about-us-image {
    margin-top: 30px;
  }

  .skill-content {
    padding-left: 0 !important;
    margin-top: 30px;
  }

  .blog-area {
    padding-bottom: 50px;
  }

  .boxes-area {
    &::before,
    &::after {
      background: #08071c;
      width: 100%;
    }
    padding: {
      top: 80px;
      bottom: 50px;
    }

    .single-box {
      padding: {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      margin-bottom: 30px;

      .icon {
        color: $template-color;
      }
      h3 {
        color: $white-color;
      }
      p {
        color: $white-color;
      }
      &.black-color {
        h3 {
          color: $white-color;
        }
        p {
          color: $white-color;
        }
      }
    }
  }

  .features-image {
    margin-top: 35px;
  }

  .grid {
    .item {
      width: 50%;
    }
  }

  .page-title-area {
    padding: {
      top: 165px;
      bottom: 115px;
    }
    h1 {
      font-size: 35px;
      margin-bottom: 15px;
    }
  }

  .team-details-info {
    .personal-information {
      display: none;
    }
  }

  .services-area {
    padding-bottom: 50px;
  }

  .login-form {
    margin-top: 35px;
  }

  .signup-form {
    margin-bottom: 35px;
  }

  .faq-accordion,
  .faq-contact {
    padding: 30px;
  }

  .contact-info-area {
    padding-bottom: 50px;
  }
  .contact-info-box {
    margin-bottom: 30px;
  }
  #contactForm {
    margin-top: 35px;
  }

  .shop-details-area {
    padding-bottom: 50px;
  }
  .product-entry-summary {
    margin-top: 35px;
  }

  .sidebar {
    margin: {
      top: 30px;
      bottom: 30px;
    }
  }

  .project-info {
    margin-top: 30px;
  }

  .single-footer-widget {
    margin-bottom: 30px;
  }
  .copyright-area {
    margin-top: 50px;
  }
  .funfact {
    h3 {
      font-size: 40px;
    }
  }
  .single-footer-widget {
    h3 {
      margin-bottom: 30px;
    }
  }
  .artflex-nav {
    nav {
      .navbar-nav {
        .nav-item {
          .dropdown_menu {
            width: 210px;
          }
        }
      }
    }
  }
  .services-box {
    .services-content {
      h3 {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }
  .single-blog-post {
    .blog-post-content {
      h3 {
        font-size: 20px;
      }
    }
  }
  .digital-agency-banner {
    &::before {
      content: "";
      background-color: #ffffff;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      position: absolute;
      opacity: 0.8;
    }
  }
  .banner-social-buttons {
    display: none;
  }
  .navbar-brand {
    img {
      max-width: 90px;
    }
  }
  .single-blog-box {
    .blog-post-content {
      h3 {
        font-size: 22px;
      }
    }
  }
  .ptb-80 {
    padding-top: 70px;
    padding-bottom: 70px;
  }
}

// large screens
@media screen and (min-width: $value_xl_offset) and (max-width: $value_xx) and (orientation: landscape) {
  .parallax_banner {
    display: flex;

    position: relative;
    z-index: 1;
    height: 100%;
    // overflow: hidden;
    pointer-events: auto;
    align-items: center;

    .imgHolder {
      position: relative;
      // width: 40%; /* adjust this as needed */
      width: 35vw; /* adjust this as needed */

      margin-left: 55% !important;
      // margin-top: 0%;
    }

    img {
      position: relative;
      bottom: 0 !important;
      max-width: 100%;
      height: auto;
    }
    h1 {
      font-size: min(max(8vw, 24px), 52px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
      color: #6084a447;
    }
  }



  nav {
    .navbar-nav {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 15px;
      padding-right: 15px;
      background-color: $white-color;

      .nav-item {
        padding: 9px 5% !important;

        a {
          margin-left: 0;
          margin-right: 0;
        }
        .dropdown_menu {
          left: 0;

          li {
            .dropdown_menu {
              top: 0;
              left: -5px;
              position: relative;
              display: none;
              margin-top: 0;
              border: 1px solid #eeeeee;
              padding: 0 0 0 4px;
            }
            &:focus,
            &:hover {
              .dropdown_menu {
                display: block;
                top: 0 !important;
              }
            }
          }
        }
        &:hover ul {
          top: 40px;
        }
      }
    }
    .others-option {
      background-color: $white-color;
      padding-bottom: 10px;
      margin-left: 0;
      padding-left: 15px;

      ul li .side-menu {
        display: none;
      }
    }
  }
  
  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 70vw;
  }

  .shape1,
  .shape2,
  .shape8,
  .shape5,
  .shape10,
  .shape4,
  .shape3,
  .circle-shape2,
  .circle-shape3,
  .shape11,
  .shape12,
  .shape9,
  .shape14,
  .shape15,
  .shape13,
  .shape18,
  .shape6,
  .shape7,
  .shape19,
  .shape20,
  .shape21,
  .shape22,
  .shape23,
  .shape24,
  .shape25,
  .shape26,
  .circle-dot {
    display: none;
  }
  .main-banner {
    height: 100vh;
  }
  .ptb-120 {
    padding-top: 90px;
    padding-bottom: 90px;
  }
  .banner-image {
    text-align: center;
    img {
      max-width: 420px;
      left: 0;
      width: 100%;
    }
  }
  .hero-content h1 {
    font-size: 38px;
  }
  .circle-shape1 {
    right: 9%;
  }
  .pt-120 {
    padding-top: 90px;
  }
  .single-blog-post {
    .blog-post-content {
      h3 {
        font-size: 20px;
      }
    }
  }
  .why-choose-us-img {
    margin-bottom: 0;

    .front-img {
      top: 0;
      left: 0;
    }
    .back-img {
      display: none;
    }
  }
  .agency-portfolio-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 60px;
        }
      }
    }
  }
  .section-title {
    span {
      margin-bottom: 10px;
    }
    h2 {
      font-size: 30px;
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 40px;
        }
      }
    }
  }
  .boxes-area {
    &::before,
    &::after {
      width: 35%;
    }
  }
  .circle-top {
    top: -330px;
    left: -330px;
  }
  .circle-bottom {
    bottom: -330px;
    right: -330px;
  }

  .grid {
    .item {
      width: 33.3333%;
    }
  }
  .single-product {
    .product-content {
      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
    }
  }
  .freelancer-portfolio-home {
    .circle-shape1 {
      left: 7%;
    }
    .banner-image {
      img {
        top: 79px;
        left: 0;
      }
    }
  }

  .banner-social-buttons {
    display: none;
  }

  .about-image {
    &::before {
      right: -20px;
      top: 30px;
      width: 92%;
      height: 91%;
    }
  }

  .crafting-content {
    .single-item {
      &.item-one {
        right: 0;
      }
      &.item-two {
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
      }
      &.item-four {
        right: 0;
      }
    }
  }

  .why-choose-us-content {
    .section-title {
      margin-bottom: 10px;
      h2 {
        font-size: 25px;
      }
    }
    p {
      margin-bottom: 8px;
    }
    .btn {
      margin-top: 10px;
    }
  }
  .skill-image {
    img.man-image {
      max-width: 360px;
      width: 100%;
    }
  }
  .blog-area {
    padding-bottom: 60px !important;
  }
  .services-box {
    .services-content {
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }
  .navbar-brand {
    img {
      max-width: 200px;
    }
  }
  .copyright-area {
    margin-top: 85px;
  }
}

// Obscure <2k screens
@media screen and (min-width: $value_xx) and (orientation: landscape) {
  .parallax_banner {
    display: flex;
    // justify-content: center;
    align-items: center;

    .imgHolder {
      position: relative;
      top: 5%;
      width: 30vw; /* adjust this as needed */

      margin-top: 1%;
      bottom: 0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      bottom: 0 !important;
      max-width: 100%;
      height: auto;
    }
    h1 {
      font-size: 8vw;
      font-size: min(max(8vw, 24px), 72px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: 4vw;
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: 2vw;
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
    }
  }



  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 5%;
    max-width: 80%;
  }
  .shape6 {
    left: 8%;
  }
  .circle-shape1 {
    right: 26%;
    bottom: 30%;
  }
  .circle-shape2 {
    right: 15%;
    bottom: 0;
  }
  .circle-shape3 {
    right: 27%;
    bottom: 0;
  }
  .shape10 {
    right: 8%;
  }
  .shape18 {
    left: 25%;
  }
  .shape19 {
    left: 20%;
  }
  .shape20 {
    right: 20%;
  }
  .shape21 {
    top: 20%;
    right: 25%;
  }
  .shape22 {
    right: 18%;
    top: 25%;
  }
  .shape13 {
    left: 10%;
    top: 45%;
  }
  .footer-area {
    .shape18 {
      top: 30%;
      left: 10%;
    }
    .shape21 {
      top: 20%;
      right: 15%;
    }
    .shape7 {
      right: 7%;
      top: 34%;
    }
  }
  .agency-portfolio-home {
    .main-banner {
      height: 100%;
      padding: {
        top: 290px;
        bottom: 225px;
      }
    }
  }
  .freelancer-portfolio-home {
    .circle-shape1 {
      left: 24%;
      bottom: 20%;
    }
    .circle-shape2 {
      left: 18%;
      right: auto;
    }
    .circle-shape3 {
      right: auto;
      left: 22%;
    }
    .banner-image {
      img {
        top: 81px;
      }
    }
  }
  .shape24 {
    display: block;
  }
  .boxes-area {
    &::before,
    &::after {
      width: 40%;
    }
  }
  .why-choose-us-content {
    .section-title {
      h2 {
        font-size: 22px;
      }
    }
  }
}
--------------------------------------------------
$media: screen;
$feature_min: min-width;
$feature_max: max-width;

// Extra small devices (portrait phones, less than 576px)
$value_xs: 575px;

// Small devices (landscape phones, 576px and up)
$value_sm: 576px;

// Medium devices (tablets, 768px and up)
$value_md: 767px;
$value_md_offset: 768px;

// Large devices (desktops, 992px and up)
$value_lg: 992px;
$value_lg_offset: 993px;

// Extra large devices (large desktops, 1200px and up)
$value_xl: 1200px;
$value_xl_offset: 1201px;

// Extra extra large devices (TVs, large screens, 1600px and up)
$value_xx: 1600px;

$template-color: #38d16a;
$pink-color: #f54ea2;
$white-color: #ffffff;
$black-color: #121619;
$paragraph-color: #6084a4;
$bg-gray: #f9f9f9;

// Only For Mobile and Tab Navbar
@media only #{$media} and ($feature_max : $value_md) {
  .searchBoxTop {
    .seachBoxContainer {
      padding: 25px 0 55px;
    }
    .searchClose {
      cursor: pointer;
      position: absolute;
      top: auto;
      right: 11px;
      width: 40px;
      height: 40px;
      margin-top: 0;
      bottom: 11px;
    }
  }
}

@media screen and (max-width: $value_md_offset) and (orientation: portrait) {
  .contact-card {
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  }

  .card.image,
  .card.info {
    flex: 1;
  }

  .card.image {
    order: 2;
  }

  .card.info {
    order: 1;
  }

  // @media screen and (max-width: $value_md) and (orientation: portrait) {
  //   .contact-card {
  //     display: flex;
  //     flex-wrap: wrap;
  //     justify-content: space-between;
  //     align-items: center;
  //     // padding: 1em;
  //     border: 4px solid #000;
  //     width: 600px;
  //     height: 100%;
  //     // margin: 0 auto;
  //   }

  //   .card .image {
  //     flex: 2;
  //     justify-content: flex-end;

  //   }

  //   .card .info {
  //     flex: 1;
  //     justify-content: flex-start;

  //   }

  //   .card {
  //     flex-direction: column;
  //   }

  // @media only #{$media} and ($feature_max : $value_xs) {
  .parallax_banner {
    // img {
    //   display: none;
    // }
    overflow: visible;

    .imgHolder {
      z-index: 1;
      position: relative;
      // top: 15%;
      width: 35%; /* adjust this as needed */
      // margin-left: 20% !important;
      margin-top: -5%;
      bottom: 0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }
}

// ipad 
@media screen and (min-width: $value_md_offset) and (orientation: landscape){
  .parallax_banner {

    h1 {
      font-size: min(max(6vw, 24px), 42px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
      color: #6084a447;
    }

    overflow: visible;
    display: flex;
    align-items: center;

    .imgHolder {
      z-index: 1;
      position: relative;
      width: 38vw; /* adjust this as needed */
      margin-left: 54vw !important;
      // margin-top: -5%;
      // bottom: 0 !important;
      top:0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }


  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 60%;
  }

  .ptb-120 {
    padding: {
      top: 60px;
      bottom: 60px;
    }
  }
  .owl-carousel {
    &.owl-theme {
      .owl-dots {
        right: 15px;
        top: auto;
        bottom: 10px;

        .owl-dot {
          display: inline-block;

          span {
            margin: 0 3px;
            width: 15px;
            height: 15px;
          }
        }
      }
      .owl-nav {
        [class*="owl-"] {
          font-size: 16px;
          margin: -20px 0 0;
          left: 0;
          width: 35px;
          height: 35px;
          line-height: 38px;

          &.owl-next {
            right: 0;
            left: auto;
          }
        }
      }
    }
  }
  .btn {
    font-size: 14px;
    padding: 12px 25px;
  }
  p {
    font-size: 14px;
  }
  .preloader {
    .loader {
      h1 {
        font-size: 3rem;
      }
    }
  }
  .section-title {
    margin-bottom: 40px;

    span {
      font-size: 14px;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 24px;
      max-width: 100%;
    }
  }
  .artflex-nav {
    padding-top: 0;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .navbar {
      padding: {
        left: 0;
        right: 0;
      }
    }
    .navbar-light {
      .navbar-toggler {
        border-color: rgba(0, 0, 0, 1);
        outline: 0;
        border-radius: 0;
      }
    }
    nav {
      .navbar-nav {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        padding-right: 15px;
        background-color: $white-color;

        .nav-item {
          padding: 9px 2%;

          a {
            margin-left: 0;
            margin-right: 0;
          }
          .dropdown_menu {
            left: 0;

            li {
              .dropdown_menu {
                top: 0;
                left: -5px;
                position: relative;
                display: none;
                margin-top: 0;
                border: 1px solid #eeeeee;
                padding: 0 0 0 4px;
              }
              &:focus,
              &:hover {
                .dropdown_menu {
                  display: block;
                  top: 0 !important;
                }
              }
            }
          }
          &:hover ul {
            top: 40px;
          }
        }
      }
      .others-option {
        background-color: $white-color;
        padding-bottom: 10px;
        margin-left: 0;
        padding-left: 15px;

        ul li .side-menu {
          display: none;
        }
      }
    }
  }
  .shop-details .product-entry-summary form .input-counter {
    max-width: 120px;
    min-width: 120px;
  }
  .main-banner {
    height: 100vh;
    padding: {
      top: 120px;
      bottom: 80px;
    }

    &.digital-agency-banner {
      padding-bottom: 30px;
    }
  }
  .banner-social-buttons {
    display: none;
  }

  .hero-header {
    // font-size: 25px !important;
  }
  .hero-content {
    h1 {
      // font-size: 27px;
    }
    h3 {
      // font-size: 25px !important;
    }
    p {
      margin: {
        bottom: 25px;
        top: 15px;
      }
    }
    margin-bottom: 45px;
    margin-top: 0;
  }
  .banner-image {
    text-align: center;
    img {
      position: relative;
      top: 0;
      right: 0;
      max-width: 330px;
      left: 0;
      margin: auto;
      width: 100%;
    }
  }
  .skill-image {
    text-align: center;
    img.man-image {
      max-width: 360px;
      width: 100%;
    }
  }
  .hero-image {
    margin-bottom: 30px;
  }
  // .shape1,
  // .shape2,
  // .shape7,
  // .shape8,
  // .shape5,
  // .shape6,
  // .shape10,
  // .shape4,
  // .shape3,
  // .circle-shape1,
  // .circle-shape2,
  // .shape11,
  // .shape12,
  // .shape9,
  // .shape14,
  // .shape15,
  // .shape13,
  // .shape18,
  // .shape19,
  // .shape20,
  // .shape21,
  // .shape22,
  // .shape23,
  // .shape24,
  // .shape25,
  // .shape26,
  // .circle-dot {
  //   display: none;
  // }
  .circle-shape3 {
    right: 6%;
    bottom: 5%;
  }
  .circle-top {
    top: -440px;
    left: -350px;
  }
  .circle-bottom {
    bottom: -440px;
    right: -350px;
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        margin: {
          left: 0;
          bottom: 0;
        }
        h1 {
          margin-bottom: 25px;
        }
      }
    }
  }
  .agency-portfolio-home {
    .main-banner {
      padding: {
        top: 145px;
        bottom: 90px;
      }

      .hero-content {
        h1 {
          font-size: 35px;
        }
      }
    }
  }
  .blog-home-slides {
    .col-lg-12 {
      padding: 0;
    }
  }
  .single-blog-box {
    .blog-post-content {
      padding: 15px;

      div {
        &.tags {
          a {
            padding: 5px 15px;
            font-size: 14px;
          }
        }
      }
      h3 {
        margin: 15px 0 10px;
        font-size: 18px;
        line-height: 27px;
      }
      ul {
        li {
          margin-right: 2px;
          font-size: 12px;

          i {
            margin-right: 2px;
          }
        }
      }
    }
  }
  .blog-home-slides {
    &:hover {
      &.owl-carousel {
        &.owl-theme {
          .owl-nav {
            [class*="owl-"] {
              left: 5px;

              &.owl-next {
                right: 5px;
                left: auto;
              }
            }
          }
        }
      }
    }
  }
  .main-banner {
    &.freelancer-portfolio-home {
      padding-bottom: 0;

      .col-lg-6 {
        &:first-child {
          order: 2;
        }
        &:last-child {
          order: 1;
        }
      }
      .banner-image {
        img {
          top: 0;
          left: 0;
        }
      }
      .circle-shape3 {
        display: none;
      }
    }
  }

  .cta-about {
    padding: {
      top: 60px;
      bottom: 60px;
      left: 10px;
      right: 5px;
    }
    .container-fluid {
      padding: {
        left: 15px !important;
        right: 15px !important;
      }
    }
  }
  .cta-about-image {
    background-image: unset;

    img {
      display: block;
    }
  }
  .cta-about-content {
    max-width: 100%;
    margin: {
      top: 35px;
    }
    padding: 0;
    h2 {
      br {
        display: none;
      }
    }
  }

  .crafting-content {
    overflow: hidden;
    margin-bottom: 40px;

    .single-item {
      width: 50%;
      position: relative;
      float: left;
      padding: 25px 8px;

      &.item-one {
        right: 0;
        animation: unset;
        top: 0;
      }
      &.item-two {
        animation: unset;
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
        animation: unset;
        bottom: 0;
      }
      &.item-four {
        right: 0;
        top: 0;
        animation: unset;
      }
      i {
        font-size: 30px;
      }
      h6 {
        font-size: 15px;
      }
    }
  }
  .crafting-image {
    .video-btn {
      font-size: 20px;
      margin-top: -30px;
      width: 60px;
      height: 60px;
      line-height: 60px;
    }
  }

  .services-area {
    padding-bottom: 30px;
  }
  .single-services {
    padding: 20px;

    h3 {
      font-size: 18px;
    }
  }
  .more-services-btn {
    margin-top: 15px;
  }
  .single-services-box {
    padding: 15px;

    .icon {
      font-size: 40px;
    }
    h3 {
      font-size: 18px;
    }
  }
  .services-box {
    .services-content {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }
  .freelancer-portfolio-home {
    .banner-image {
      text-align: center;
    }
  }
  .services-area {
    .single-services {
      padding: 15px;
    }
  }
  .services-slides {
    &.owl-carousel {
      &.owl-theme {
        .owl-dots {
          margin-top: 10px !important;

          button {
            &.owl-dot {
              span {
                margin: 0 3px;
                width: 14px;
                height: 14px;
              }
            }
          }
        }
      }
    }
  }

  .why-choose-us-img {
    margin-bottom: 30px;

    .front-img {
      top: 0;
      left: 0;
      width: 100%;
    }
    .back-img {
      display: none;
    }
  }
  .why-choose-us-area {
    &:hover {
      .why-choose-us-img {
        .front-img {
          top: 0;
        }
      }
    }
  }
  .why-choose-inner-area {
    margin-top: 45px;

    .section-title {
      margin-bottom: 10px;

      h2 {
        max-width: 100%;
      }
    }
    .single-box {
      padding: 20px;
      margin-top: 30px;

      .icon {
        font-size: 40px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }

  .how-we-work {
    padding-bottom: 30px;
  }
  .single-work-box {
    margin-bottom: 30px;
    padding: 20px 15px;
    text-align: center;

    .number {
      display: inline-block;
    }
    h3 {
      font-size: 18px;
    }
  }

  .team-member-image {
    text-align: center;
  }

  .boxes-area {
    &::before,
    &::after {
      background: #08071c;
      width: 100%;
    }
    padding: {
      top: 60px;
      bottom: 30px;
    }

    .single-box {
      padding: {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      margin-bottom: 30px;

      .icon {
        font-size: 40px;
        color: $template-color;
      }
      h3 {
        font-size: 18px;
        color: $white-color;
      }
      p {
        color: $white-color;
      }
      &.black-color {
        h3 {
          color: $white-color;
        }
        p {
          color: $white-color;
        }
      }
    }
  }

  .features-boxes-area {
    padding-bottom: 30px;

    .single-box {
      margin-bottom: 30px;
      padding-left: 55px;

      span {
        font-size: 30px;
      }
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }

  .about-image {
    margin-top: 30px;
    text-align: center;

    &::before {
      display: none;
    }
    img {
      width: auto;
    }
  }

  .single-work {
    .works-content {
      h3 {
        font-size: 18px;
        margin-bottom: 0;
      }
      p {
        display: none;
      }
    }
    &:hover {
      .works-content {
        margin-top: -25px;
      }
    }
  }

  .portfolio-item {
    img {
      width: 100%;
    }
    .portfolio-content {
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      span {
        font-size: 13px;
      }
    }
  }

  .single-feedback {
    padding-left: 0;
    max-width: 100%;
    margin-bottom: 40px;

    img {
      position: relative;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
    }
    h3 {
      font-size: 18px;

      span {
        font-size: 14px;
      }
    }
  }
  .feedback-slides {
    &.owl-carousel {
      &.owl-theme {
        .owl-nav {
          left: 0;
          bottom: -5px;
          right: 0;
        }
      }
    }
  }

  .skill-content {
    padding-left: 0 !important;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
    }
  }

  .team-area {
    padding-bottom: 30px;
  }
  .single-team {
    .team-content {
      margin-top: 30px;

      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
      span {
        font-size: 13px;
      }
    }
  }
  .single-team-box {
    .team-content {
      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
      span {
        font-size: 13px;
      }
    }
  }

  .cta-content {
    span {
      font-size: 13px;
      margin-bottom: 15px;
    }
    h2 {
      font-size: 25px;
    }
  }

  .skill-area {
    padding: {
      top: 60px;
    }
  }
  .our-skill {
    margin-bottom: 30px;

    .skills {
      .skill-item {
        .skill-header {
          .skill-title {
            font-size: 15px;
          }
          .skill-percentage {
            font-size: 14px;
          }
        }
        .skill-bar {
          .bar-inner {
            .bar {
              height: 6px;
            }
          }
        }
      }
    }
  }
  .skill-image {
    .back-image {
      right: 0;
    }
  }

  .funfacts-area {
    padding-bottom: 40px;
  }
  .funfact {
    margin-bottom: 20px;

    h3 {
      font-size: 30px;
    }
    p {
      font-size: 13px;
      text-transform: capitalize;
      margin-top: 3px;
    }
  }

  .blog-area {
    padding-bottom: 30px;
  }
  .single-blog-post {
    .blog-post-content {
      padding: 15px;

      .date {
        font-size: 13px;
      }
      h3 {
        line-height: 28px;
        font-size: 18px;
      }
    }
    .read-more-btn {
      font-size: 14px;
    }
    &.with-video {
      .blog-video {
        iframe {
          height: 160px;
        }
      }
    }
  }

  .contact-cta-content {
    .section-title {
      margin-bottom: 15px;
    }
    p {
      max-width: 100%;
      margin: 0 auto 25px;
    }
  }

  .features-content {
    .single-features-item {
      padding-left: 45px;

      .icon {
        font-size: 30px;
      }
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      p {
        font-size: 13px;
      }
    }
  }
  .features-image {
    margin-top: 30px;
  }

  .page-title-area {
    padding: {
      top: 160px;
      bottom: 85px;
    }
    h1 {
      font-size: 25px;
      margin-bottom: 10px;
    }
    ul {
      li {
        font-size: 14px;
      }
    }
  }
  .pt-120 {
    padding-top: 50px;
  }
  .contact-area {
    border-top: 1px solid #eee;
  }
  .about-us-content {
    p {
      margin-top: 13px;
    }

    .single-about-box {
      .icon {
        font-size: 40px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }
  .about-us-image {
    margin-top: 30px;
  }

  .pagination-area {
    margin-top: 15px;
  }

  .team-details-info {
    margin-top: 30px;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .personal-information {
      display: none;
    }
  }
  .overview-desc {
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .skills {
      .skill-item {
        .skill-header {
          .skill-title {
            font-size: 15px;
          }
          .skill-percentage {
            font-size: 14px;
          }
        }
        .skill-bar {
          .bar-inner {
            .bar {
              height: 6px;
            }
          }
        }
      }
    }
  }

  .login-form {
    padding: 20px;
    margin-top: 30px;

    h3 {
      font-size: 18px;
    }
    .text-right {
      text-align: left !important;
    }
  }

  .signup-form {
    padding: 20px;
    margin-bottom: 30px;

    h3 {
      font-size: 18px;
    }
  }

  .coming-soon {
    // height: 100%;
    padding: {
      top: 70px;
      bottom: 70px;
    }
    .coming-soon-content {
      h2 {
        font-size: 1em;
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

  .error {
    h1 {
      font-size: 140px;
    }
    h2 {
      font-size: 18px;
      margin: 0 0 30px;
    }
  }

  .faq-accordion {
    padding: 15px;

    .accordion {
      .accordion__item {
        .accordion__button {
          padding: 15px 15px;
          font-size: 16px;
        }
      }
    }
  }
  .faq-contact {
    margin-top: 30px;
    padding: 40px 15px;
    border-radius: 5px;
    text-align: center;

    h3 {
      font-size: 18px;
    }
  }

  .sidebar {
    margin: {
      top: 30px;
      bottom: 30px;
    }

    .widget {
      h3,
      .widget-title {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }

  .blog-details-area {
    .blog-details {
      .article-img {
        .date {
          bottom: 2px;
          width: 65px;
          left: 2px;
          height: 60px;
          font-size: 15px;
          padding-top: 8px;
          line-height: 22px;
        }
      }
      .article-content {
        padding: 20px 15px;

        ul.category {
          margin-bottom: 20px;

          li {
            a {
              padding: 3px 14px 1px;
              margin-bottom: 3px;
              font-size: 13px;
            }
          }
        }
        h3 {
          font-size: 18px;
          margin-bottom: -10px;
          line-height: 26px;
        }
        .blockquote {
          padding: 20px 15px;
          border-left: 3px solid $template_color;

          p {
            font-size: 15px;
          }
        }
      }
    }
    .post-controls-buttons {
      text-align: center;
      padding: 20px 15px;

      div {
        a {
          padding: 7px 18px;
          font-size: 14px;
        }
      }
    }
    .post-comments {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
      }
      .single-comment {
        padding-left: 0;

        .comment-img {
          position: relative;
        }
        .comment-content {
          margin-top: 20px;
        }
        &.left-m {
          margin-left: 30px;
        }
      }
    }
    .leave-a-reply {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
        margin-bottom: 20px;
      }
      .form-group {
        margin-bottom: 10px;
      }
    }
  }

  .project-info {
    margin-top: 30px;

    ul {
      li {
        font-size: 16px;
        margin-bottom: 10px;

        span {
          font-size: 14px;
        }
      }
    }
  }
  .portfolio-details-content {
    h3 {
      font-size: 18px;
    }
  }

  .woocommerce-topbar {
    text-align: center;

    .woocommerce-result-count {
      margin-bottom: 15px;
    }
  }
  .single-product {
    .product-content {
      padding: 20px 15px;
      text-align: center;

      h3 {
        font-size: 18px;
      }
    }
  }

  .shop-details {
    padding: 15px;

    .product-entry-summary {
      h3 {
        font-size: 18px;
        margin-top: 25px;
      }
      h4 {
        font-size: 16px;
        margin: 18px 0;
      }
      form {
        .form-control {
          width: 100px;
        }
      }
    }
    .shop-details-tabs {
      #tabs {
        li {
          display: block;
          text-align: center;
        }
      }
      .content {
        h3 {
          font-size: 18px;
        }
      }
    }
  }
  .product-img-slides.owl-theme .owl-nav [class*="owl-"] {
    line-height: 30px;
  }
  .shop-details-area {
    padding-bottom: 30px;
  }
  .shop-related-prodcut {
    .section-title {
      margin-bottom: 20px;

      h2 {
        font-size: 22px;
      }
    }
  }

  .cart-buttons {
    margin-top: 35px;

    .coupon-box {
      position: relative;

      button {
        position: relative;
        border-radius: 5px;
        display: block;
        width: 100%;
        padding: 13px 0;
        margin-top: 8px;
      }
    }
    .btn {
      margin-top: 25px;
    }
  }
  .cart-totals {
    margin-top: 35px;
    padding: 25px;

    h3 {
      font-size: 18px;
    }
  }

  .user-actions {
    padding: 15px 18px 13px;
    margin-bottom: 30px;

    i {
      display: block;
      margin: {
        bottom: 5px;
        right: 0;
      }
    }
  }
  .checkout-area {
    .title {
      font-size: 18px;
    }
  }
  .billing-details {
    padding: 18px;
  }
  .order-details {
    padding: 18px;
    margin-top: 30px;
  }

  .contact-info-area {
    padding-bottom: 30px;

    .contact-info-box {
      margin-bottom: 30px;
      padding: 20px 15px;

      .icon {
        width: 70px;
        height: 70px;
        line-height: 70px;
        font-size: 25px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }
  #contactForm {
    margin-top: 30px;
  }

  .single-footer-widget {
    margin-bottom: 30px;

    &.ml-4 {
      margin-left: 0 !important;
    }
    ul {
      &.social-links {
        li {
          a {
            width: 35px;
            height: 35px;
            line-height: 36px;
            font-size: 15px;
          }
        }
      }
      &.list {
        li {
          a {
            font-size: 14px;
          }
        }
      }
      &.footer-recent-post {
        li {
          a {
            font-size: 14px;
          }
          span {
            font-size: 13px;
          }
        }
      }
      &.footer-contact-info {
        li {
          font-size: 14px;
        }
      }
    }
    h3 {
      font-size: 18px;
      margin-bottom: 25px;
    }
  }
  .copyright-area {
    margin-top: 30px;
    text-align: center;
    padding: {
      top: 25px;
      bottom: 25px;
    }
    p {
      font-size: 13px;
    }
    .text-right {
      text-align: center !important;
      margin-top: 10px;
    }
  }
  .go-top {
    bottom: 10px;
    right: 10px;
    font-size: 16px;
    width: 35px;
    height: 35px;
    line-height: 35px;
  }
  .searchBoxTop {
    .seachBoxContainer {
      padding: 50px 0 25px !important;
    }
  }
  .searchBoxTop .searchClose {
    top: 0 !important;
    right: 15px !important;
  }
  .searchBoxTop .searchClose::before,
  .searchBoxTop .searchClose::after {
    height: 30px !important;
    top: 10px;
  }
  .navbar-brand {
    img {
      // max-width: 80px;
      max-width: 20vh;
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 25px;
        }
      }
    }
  }
  .digital-agency-banner {
    &::before {
      content: "";
      background-color: #ffffff;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      position: absolute;
      opacity: 0.7;
    }
  }
  .ptb-80 {
    padding: {
      top: 50px;
      bottom: 50px;
    }
  }
}

// smaller laptop screen
@media screen and (min-width: $value_lg_offset) and (max-width: $value_xl) and (orientation: landscape) {
  // @media only #{$media} and ($feature_min : $value_sm) and ($feature_max : $value_md) {
  .parallax_banner {
    h1 {
      font-size: min(max(5vw, 24px), 52px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 30px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 22px) !important; /* adjust as necessary */
    }

    display: flex;
    align-items: center;

    overflow: visible;

    .imgHolder {
      z-index: 1;
      position: relative;
      // top: 15%;
      // width: 25%; /* adjust this as needed */
      width: 48vw; /* adjust this as needed */

      margin-right: 10% !important;
      margin-top: -5%;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }


  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 60vw;
  }
  .contact-area {
    border-top: 1px solid #eee;
  }
  .pt-120 {
    padding-top: 80px;
  }
  .agency-portfolio-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 60px;
        }
      }
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 30px;
        }
      }
    }
  }
  .ptb-120 {
    padding: {
      top: 80px;
      bottom: 80px;
    }
  }
  .single-product {
    .product-content {
      h3 {
        font-size: 20px;
        margin-bottom: 8px;
      }
    }
  }
  .section-title {
    h2 {
      font-size: 30px;
    }
    span {
      margin-bottom: 10px;
    }
  }
  .single-services {
    h3 {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
  .why-choose-inner-area {
    .single-box {
      h3 {
        font-size: 20px;
      }
    }
  }
  .artflex-nav {
    nav {
      .navbar-nav .nav-item a {
        margin-left: 9px;
        margin-right: 9px;
      }
      .others-option {
        margin-left: 0;

        ul {
          li {
            &:last-child,
            &:first-child {
              display: none;
            }
          }
        }
      }
    }
  }

  .main-banner {
    height: 100vh;
    padding: {
      top: 120px;
      bottom: 80px;
    }

    &.digital-agency-banner {
      padding-bottom: 60px;
      text-align: center;
    }
  }
  .hero-content {
    h1 {
      font-size: 35px;
    }
    p {
      margin: {
        bottom: 25px;
        top: 15px;
      }
    }
    margin-bottom: 45px;
  }
  .banner-image {
    text-align: center;
    img {
      position: relative;
      top: 0;
      right: 0;
      max-width: 430px;
      left: 0;
      width: 100%;
    }
  }
  .hero-image {
    margin-bottom: 30px;
  }
  .circle-shape3 {
    bottom: 20%;
    right: 13%;
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        margin: {
          left: 0;
          bottom: 0;
        }
      }
    }
  }
  .why-choose-inner-area {
    margin-top: 70px;
  }
  .cta-about-content {
    .section-title {
      h2 {
        font-size: 25px;
        br {
          display: none;
        }
      }
    }
  }
  .freelancer-portfolio-home {
    .banner-image {
      text-align: center;
    }
  }
  .single-blog-box {
    .blog-post-content {
      padding: 15px;
    }
  }
  .main-banner {
    &.freelancer-portfolio-home {
      padding-bottom: 0;

      .col-lg-6 {
        &:first-child {
          order: 2;
        }
        &:last-child {
          order: 1;
        }
      }
      .banner-image {
        img {
          top: 0;
          left: 0;
        }
      }
      .circle-shape3 {
        display: none;
      }
    }
  }
  .shape1,
  .shape2,
  .shape8,
  .shape5,
  .shape10,
  .shape4,
  .shape3,
  .circle-shape1,
  .circle-shape2,
  .shape11,
  .shape12,
  .shape9,
  .shape14,
  .shape15,
  .shape13,
  .shape18,
  .shape19,
  .shape20,
  .shape21,
  .shape22,
  .shape23,
  .shape24,
  .shape25,
  .shape26,
  .shape6,
  .shape7 {
    display: none;
  }
  .circle-top {
    top: -330px;
    left: -330px;
  }
  .circle-bottom {
    bottom: -330px;
    right: -330px;
  }
  .circle-dot {
    display: none;
  }

  .why-choose-us-img {
    margin-bottom: 85px;
    text-align: center;

    .back-img {
      left: 15px;
      top: 0;
      right: 0;
      margin: 0 auto;
    }
  }
  .why-choose-inner-area {
    .section-title {
      margin-bottom: 20px;
    }
    .single-box {
      margin-top: 30px;
    }
  }

  .cta-about-content {
    max-width: unset;
    margin-left: 0;
  }

  .crafting-content {
    overflow: hidden;
    margin-bottom: 40px;

    .single-item {
      width: 50%;
      position: relative;
      float: left;

      &.item-one {
        right: 0;
        animation: unset;
        top: 0;
      }
      &.item-two {
        animation: unset;
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
        animation: unset;
        bottom: 0;
      }
      &.item-four {
        right: 0;
        top: 0;
        animation: unset;
      }
    }
  }

  .how-we-work {
    padding-bottom: 50px;
  }
  .single-work-box {
    margin-bottom: 30px;
  }

  .team-area {
    padding-bottom: 50px;
  }

  .skill-area {
    padding: {
      top: 80px;
    }
  }
  .skill-image {
    text-align: center;
    margin-top: 40px;

    .back-image {
      right: -30px;
      top: 10%;
      left: 0;
      margin: 0 auto;
    }
  }

  .features-boxes-area {
    padding-bottom: 50px;

    .single-box {
      margin-bottom: 30px;
    }
  }

  .about-image {
    text-align: center;
    margin-top: 30px;

    &::before {
      display: none;
    }
  }

  .my-skill-area {
    .shape6,
    .shape7 {
      display: none;
    }
  }

  .about-us-image {
    margin-top: 30px;
  }

  .skill-content {
    padding-left: 0 !important;
    margin-top: 30px;
  }

  .blog-area {
    padding-bottom: 50px;
  }

  .boxes-area {
    &::before,
    &::after {
      background: #08071c;
      width: 100%;
    }
    padding: {
      top: 80px;
      bottom: 50px;
    }

    .single-box {
      padding: {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      margin-bottom: 30px;

      .icon {
        color: $template-color;
      }
      h3 {
        color: $white-color;
      }
      p {
        color: $white-color;
      }
      &.black-color {
        h3 {
          color: $white-color;
        }
        p {
          color: $white-color;
        }
      }
    }
  }

  .features-image {
    margin-top: 35px;
  }

  .grid {
    .item {
      width: 50%;
    }
  }

  .page-title-area {
    padding: {
      top: 165px;
      bottom: 115px;
    }
    h1 {
      font-size: 35px;
      margin-bottom: 15px;
    }
  }

  .team-details-info {
    .personal-information {
      display: none;
    }
  }

  .services-area {
    padding-bottom: 50px;
  }

  .login-form {
    margin-top: 35px;
  }

  .signup-form {
    margin-bottom: 35px;
  }

  .faq-accordion,
  .faq-contact {
    padding: 30px;
  }

  .contact-info-area {
    padding-bottom: 50px;
  }
  .contact-info-box {
    margin-bottom: 30px;
  }
  #contactForm {
    margin-top: 35px;
  }

  .shop-details-area {
    padding-bottom: 50px;
  }
  .product-entry-summary {
    margin-top: 35px;
  }

  .sidebar {
    margin: {
      top: 30px;
      bottom: 30px;
    }
  }

  .project-info {
    margin-top: 30px;
  }

  .single-footer-widget {
    margin-bottom: 30px;
  }
  .copyright-area {
    margin-top: 50px;
  }
  .funfact {
    h3 {
      font-size: 40px;
    }
  }
  .single-footer-widget {
    h3 {
      margin-bottom: 30px;
    }
  }
  .artflex-nav {
    nav {
      .navbar-nav {
        .nav-item {
          .dropdown_menu {
            width: 210px;
          }
        }
      }
    }
  }
  .services-box {
    .services-content {
      h3 {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }
  .single-blog-post {
    .blog-post-content {
      h3 {
        font-size: 20px;
      }
    }
  }
  .digital-agency-banner {
    &::before {
      content: "";
      background-color: #ffffff;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      position: absolute;
      opacity: 0.8;
    }
  }
  .banner-social-buttons {
    display: none;
  }
  .navbar-brand {
    img {
      max-width: 90px;
    }
  }
  .single-blog-box {
    .blog-post-content {
      h3 {
        font-size: 22px;
      }
    }
  }
  .ptb-80 {
    padding-top: 70px;
    padding-bottom: 70px;
  }
}

// large screens
@media screen and (min-width: $value_xl_offset) and (max-width: $value_xx) and (orientation: landscape) {
  .parallax_banner {
    display: flex;

    position: relative;
    z-index: 1;
    height: 100%;
    // overflow: hidden;
    pointer-events: auto;
    align-items: center;

    .imgHolder {
      position: relative;
      // width: 40%; /* adjust this as needed */
      width: 35vw; /* adjust this as needed */

      margin-left: 55% !important;
      // margin-top: 0%;
    }

    img {
      position: relative;
      bottom: 0 !important;
      max-width: 100%;
      height: auto;
    }
    h1 {
      font-size: min(max(8vw, 24px), 52px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
      color: #6084a447;
    }
  }



  nav {
    .navbar-nav {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 15px;
      padding-right: 15px;
      background-color: $white-color;

      .nav-item {
        padding: 9px 5% !important;

        a {
          margin-left: 0;
          margin-right: 0;
        }
        .dropdown_menu {
          left: 0;

          li {
            .dropdown_menu {
              top: 0;
              left: -5px;
              position: relative;
              display: none;
              margin-top: 0;
              border: 1px solid #eeeeee;
              padding: 0 0 0 4px;
            }
            &:focus,
            &:hover {
              .dropdown_menu {
                display: block;
                top: 0 !important;
              }
            }
          }
        }
        &:hover ul {
          top: 40px;
        }
      }
    }
    .others-option {
      background-color: $white-color;
      padding-bottom: 10px;
      margin-left: 0;
      padding-left: 15px;

      ul li .side-menu {
        display: none;
      }
    }
  }
  
  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 70vw;
  }

  .shape1,
  .shape2,
  .shape8,
  .shape5,
  .shape10,
  .shape4,
  .shape3,
  .circle-shape2,
  .circle-shape3,
  .shape11,
  .shape12,
  .shape9,
  .shape14,
  .shape15,
  .shape13,
  .shape18,
  .shape6,
  .shape7,
  .shape19,
  .shape20,
  .shape21,
  .shape22,
  .shape23,
  .shape24,
  .shape25,
  .shape26,
  .circle-dot {
    display: none;
  }
  .main-banner {
    height: 100vh;
  }
  .ptb-120 {
    padding-top: 90px;
    padding-bottom: 90px;
  }
  .banner-image {
    text-align: center;
    img {
      max-width: 420px;
      left: 0;
      width: 100%;
    }
  }
  .hero-content h1 {
    font-size: 38px;
  }
  .circle-shape1 {
    right: 9%;
  }
  .pt-120 {
    padding-top: 90px;
  }
  .single-blog-post {
    .blog-post-content {
      h3 {
        font-size: 20px;
      }
    }
  }
  .why-choose-us-img {
    margin-bottom: 0;

    .front-img {
      top: 0;
      left: 0;
    }
    .back-img {
      display: none;
    }
  }
  .agency-portfolio-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 60px;
        }
      }
    }
  }
  .section-title {
    span {
      margin-bottom: 10px;
    }
    h2 {
      font-size: 30px;
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 40px;
        }
      }
    }
  }
  .boxes-area {
    &::before,
    &::after {
      width: 35%;
    }
  }
  .circle-top {
    top: -330px;
    left: -330px;
  }
  .circle-bottom {
    bottom: -330px;
    right: -330px;
  }

  .grid {
    .item {
      width: 33.3333%;
    }
  }
  .single-product {
    .product-content {
      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
    }
  }
  .freelancer-portfolio-home {
    .circle-shape1 {
      left: 7%;
    }
    .banner-image {
      img {
        top: 79px;
        left: 0;
      }
    }
  }

  .banner-social-buttons {
    display: none;
  }

  .about-image {
    &::before {
      right: -20px;
      top: 30px;
      width: 92%;
      height: 91%;
    }
  }

  .crafting-content {
    .single-item {
      &.item-one {
        right: 0;
      }
      &.item-two {
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
      }
      &.item-four {
        right: 0;
      }
    }
  }

  .why-choose-us-content {
    .section-title {
      margin-bottom: 10px;
      h2 {
        font-size: 25px;
      }
    }
    p {
      margin-bottom: 8px;
    }
    .btn {
      margin-top: 10px;
    }
  }
  .skill-image {
    img.man-image {
      max-width: 360px;
      width: 100%;
    }
  }
  .blog-area {
    padding-bottom: 60px !important;
  }
  .services-box {
    .services-content {
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }
  .navbar-brand {
    img {
      max-width: 200px;
    }
  }
  .copyright-area {
    margin-top: 85px;
  }
}

// Obscure <2k screens
@media screen and (min-width: $value_xx) and (orientation: landscape) {
  .parallax_banner {
    display: flex;
    // justify-content: center;
    align-items: center;

    .imgHolder {
      position: relative;
      top: 5%;
      width: 30vw; /* adjust this as needed */

      margin-top: 1%;
      bottom: 0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      bottom: 0 !important;
      max-width: 100%;
      height: auto;
    }
    h1 {
      font-size: 8vw;
      font-size: min(max(8vw, 24px), 72px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: 4vw;
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: 2vw;
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
    }
  }



  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 5%;
    max-width: 80%;
  }
  .shape6 {
    left: 8%;
  }
  .circle-shape1 {
    right: 26%;
    bottom: 30%;
  }
  .circle-shape2 {
    right: 15%;
    bottom: 0;
  }
  .circle-shape3 {
    right: 27%;
    bottom: 0;
  }
  .shape10 {
    right: 8%;
  }
  .shape18 {
    left: 25%;
  }
  .shape19 {
    left: 20%;
  }
  .shape20 {
    right: 20%;
  }
  .shape21 {
    top: 20%;
    right: 25%;
  }
  .shape22 {
    right: 18%;
    top: 25%;
  }
  .shape13 {
    left: 10%;
    top: 45%;
  }
  .footer-area {
    .shape18 {
      top: 30%;
      left: 10%;
    }
    .shape21 {
      top: 20%;
      right: 15%;
    }
    .shape7 {
      right: 7%;
      top: 34%;
    }
  }
  .agency-portfolio-home {
    .main-banner {
      height: 100%;
      padding: {
        top: 290px;
        bottom: 225px;
      }
    }
  }
  .freelancer-portfolio-home {
    .circle-shape1 {
      left: 24%;
      bottom: 20%;
    }
    .circle-shape2 {
      left: 18%;
      right: auto;
    }
    .circle-shape3 {
      right: auto;
      left: 22%;
    }
    .banner-image {
      img {
        top: 81px;
      }
    }
  }
  .shape24 {
    display: block;
  }
  .boxes-area {
    &::before,
    &::after {
      width: 40%;
    }
  }
  .why-choose-us-content {
    .section-title {
      h2 {
        font-size: 22px;
      }
    }
  }
}
--------------------------------------------------
import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import axios from "axios"

export class index extends Component {

    async componentDidMount(){
        // await axios.post("https://security.codepath.com/user/csrfchallengetwo/plusplus?userid=25ba982f9dd61fff15a5b55e8ad4fab0807eb9e9")
        // .catch(err =>{
        //     console.log(err)
        // });

    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>Login</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>

                <section className="login-area ptb-120">
                    <div className="container">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="login-image">
                                    {/* <img src={require("../images/marketing.png")} alt="image" /> */}

                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="login-form">
                                    <h3>Welcome Back!</h3>
                                    <p>Please login to your account.</p>
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Email" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="checkme" />
                                                    <label className="form-check-label" for="checkme">Keep me Login</label>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 text-right">
                                                <p className="forgot-password"><a href="#">Forgot Password?</a></p>
                                            </div>

                                            <div className="col-lg-12">
                                                <button type="submit" className="btn btn-primary">Login Now!</button>
                                                <br />
                                                <span>New User? <a href="signup.html">Sign Up!</a></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
--------------------------------------------------
import React, { Component } from "react";

class ComingSoon extends Component {
	state = {
		days: "",
		hours: "",
		minutes: "",
		seconds: "",
	};

	commingSoonTime = () => {
		let endTime = new Date("June 23, 2021 17:00:00 PDT");
		let endTimeParse = Date.parse(endTime) / 1000;
		let now = new Date();
		let nowParse = Date.parse(now) / 1000;
		let timeLeft = endTimeParse - nowParse;
		let days = Math.floor(timeLeft / 86400);
		let hours = Math.floor((timeLeft - days * 86400) / 3600);
		let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
		let seconds = Math.floor(
			timeLeft - days * 86400 - hours * 3600 - minutes * 60
		);
		if (hours < "10") {
			hours = "0" + hours;
		}
		if (minutes < "10") {
			minutes = "0" + minutes;
		}
		if (seconds < "10") {
			seconds = "0" + seconds;
		}
		this.setState({
			days,
			hours,
			minutes,
			seconds,
		});
	};

	componentDidMount() {
		this.myInterval = setInterval(() => {
			this.commingSoonTime();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
	}

	onSubmit = (e) => {
		e.preventDefault();
		//TODO: api call to keystone ADD THIS TO
	};

	render() {
		return (
			<section className="coming-soon">
				<div className="d-table">
					<div className="d-table-cell">
						<div className="container">
							<div className="coming-soon-content">
								<h2>This part of the website isn't done yet! </h2>
								<p>
									I am building the whole application from scratch with all the
									new technologies and frameworks I am learning, so it will take some time.
									Stay tuned!{" "}
								</p>

								<div id="timer">
									<div id="days">
										{this.state.days} <span>Days</span>
									</div>
									<div id="hours">
										{this.state.hours} <span>Hours</span>
									</div>
									<div id="minutes">
										{this.state.minutes} <span>Minutes</span>
									</div>
									<div id="seconds">
										{this.state.seconds} <span>Seconds</span>
									</div>
								</div>

								{/* <form disabled onSubmit={this.onSubmit}>
									<input
										type="text"
										className="form-control"
										placeholder="Type your email address"
									/>
									<button  type="submit">
										Subscribe
									</button>
								</form> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default ComingSoon;
--------------------------------------------------
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
export const ON_SKILL_CHANGE = 'ON_SKILL_CHANGE';
export const SKILL_PICKED_ID = 'SKILL_PICKED_ID';
export const FETCH_SKILLS = 'FETCH_SKILLS';
export const SET_SUBSKILLS = 'SET_SUBSKILLS';--------------------------------------------------
import {
	ON_SKILL_CHANGE,
	FETCH_SKILLS,
	SKILL_PICKED_ID,
	SET_SUBSKILLS,
} from "./action-types/skill-action_type";

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
// function counter(state = undefined, action) {
//     switch (action.type) {
//       case 'INCREMENT':
//         return state + 1
//       case 'DECREMENT':
//         return state - 1
//       default:
//         return state
//     }
//   }

//change the skill id
export const changeSkillPieId = (id) => {
	return {
		type: ON_SKILL_CHANGE,
		id,
	};
};

export const getSkillId = () => (dispatch) => {
	dispatch({
		type: SKILL_PICKED_ID,
		
	});
};

export const setSubSkills = (data) => (dispatch) => {
	// console.log("setSubskill is called");
	dispatch({
		type: SET_SUBSKILLS,
		payload: data, 
	});
};

export const fetchSkills = () => (dispatch) => {

	dispatch({
		type: FETCH_SKILLS,
		// payload: skills,
	});
};
--------------------------------------------------
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import skillReducer from "./skillReducer";
import { initState as skillState } from "./skillReducer";

let rootState = {
  ...skillState,
};

let rootReducer = combineReducers({
  skillReducer,
});

export const initStore = (initialState = rootState) => {
  // console.log(rootState)

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
--------------------------------------------------
import {
	ON_SKILL_CHANGE,
	SKILL_PICKED_ID,
	FETCH_SKILLS,
	SET_SUBSKILLS,
} from "../actions/action-types/skill-action_type";

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

// store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'INCREMENT' })
// 1

export const initState = {
	skillPicked: 0,
	skills: [],
};

const skillReducer = (state = initState, action) => {
	//    console.log("Action caught at skillReducer!")
	if (action.type === ON_SKILL_CHANGE) {
		// let newId = state.skillPicked.find(item=> item.id === action.id)
		let newId = action.id; //FIXME: should check if action.id is even real like above line

		return {
			...state,
			skillPicked: newId,
		};
	}

	if (action.type === SKILL_PICKED_ID) {
		// let newId = state.skillPicked.find(item=> item.id === action.id)

		return {
			...state,
			skillPicked: action.skillPicked,
		};
	}

	if (action.type == SET_SUBSKILLS) {
		return {
			...state,
			skills: action.payload,
		};
	}

	if (action.type == FETCH_SKILLS) {
		return {
			...state,
			// skills: action.payload,
		};
	}

	// if nothing is caught
	return state;
};

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// export const initStore = (initialState = initState) => {
//     return createStore(
//         skillReducer,
//         initialState,
//         composeWithDevTools(applyMiddleware(thunkMiddleware))
//     )
// }

export default skillReducer;
--------------------------------------------------
import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import axios from "axios"

export class index extends Component {

    async componentDidMount(){
        // await axios.post("https://security.codepath.com/user/csrfchallengetwo/plusplus?userid=25ba982f9dd61fff15a5b55e8ad4fab0807eb9e9")
        // .catch(err =>{
        //     console.log(err)
        // });

    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>Login</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>

                <section className="login-area ptb-120">
                    <div className="container">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="login-image">
                                    {/* <img src={require("../images/marketing.png")} alt="image" /> */}

                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="login-form">
                                    <h3>Welcome Back!</h3>
                                    <p>Please login to your account.</p>
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Email" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="checkme" />
                                                    <label className="form-check-label" for="checkme">Keep me Login</label>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 text-right">
                                                <p className="forgot-password"><a href="#">Forgot Password?</a></p>
                                            </div>

                                            <div className="col-lg-12">
                                                <button type="submit" className="btn btn-primary">Login Now!</button>
                                                <br />
                                                <span>New User? <a href="signup.html">Sign Up!</a></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
--------------------------------------------------
import React, { Component } from "react";

class ComingSoon extends Component {
	state = {
		days: "",
		hours: "",
		minutes: "",
		seconds: "",
	};

	commingSoonTime = () => {
		let endTime = new Date("June 23, 2021 17:00:00 PDT");
		let endTimeParse = Date.parse(endTime) / 1000;
		let now = new Date();
		let nowParse = Date.parse(now) / 1000;
		let timeLeft = endTimeParse - nowParse;
		let days = Math.floor(timeLeft / 86400);
		let hours = Math.floor((timeLeft - days * 86400) / 3600);
		let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
		let seconds = Math.floor(
			timeLeft - days * 86400 - hours * 3600 - minutes * 60
		);
		if (hours < "10") {
			hours = "0" + hours;
		}
		if (minutes < "10") {
			minutes = "0" + minutes;
		}
		if (seconds < "10") {
			seconds = "0" + seconds;
		}
		this.setState({
			days,
			hours,
			minutes,
			seconds,
		});
	};

	componentDidMount() {
		this.myInterval = setInterval(() => {
			this.commingSoonTime();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
	}

	onSubmit = (e) => {
		e.preventDefault();
		//TODO: api call to keystone ADD THIS TO
	};

	render() {
		return (
			<section className="coming-soon">
				<div className="d-table">
					<div className="d-table-cell">
						<div className="container">
							<div className="coming-soon-content">
								<h2>This part of the website isn't done yet! </h2>
								<p>
									I am building the whole application from scratch with all the
									new technologies and frameworks I am learning, so it will take some time.
									Stay tuned!{" "}
								</p>

								<div id="timer">
									<div id="days">
										{this.state.days} <span>Days</span>
									</div>
									<div id="hours">
										{this.state.hours} <span>Hours</span>
									</div>
									<div id="minutes">
										{this.state.minutes} <span>Minutes</span>
									</div>
									<div id="seconds">
										{this.state.seconds} <span>Seconds</span>
									</div>
								</div>

								{/* <form disabled onSubmit={this.onSubmit}>
									<input
										type="text"
										className="form-control"
										placeholder="Type your email address"
									/>
									<button  type="submit">
										Subscribe
									</button>
								</form> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default ComingSoon;
--------------------------------------------------
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
export const ON_SKILL_CHANGE = 'ON_SKILL_CHANGE';
export const SKILL_PICKED_ID = 'SKILL_PICKED_ID';
export const FETCH_SKILLS = 'FETCH_SKILLS';
export const SET_SUBSKILLS = 'SET_SUBSKILLS';--------------------------------------------------
import {
	ON_SKILL_CHANGE,
	FETCH_SKILLS,
	SKILL_PICKED_ID,
	SET_SUBSKILLS,
} from "./action-types/skill-action_type";

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
// function counter(state = undefined, action) {
//     switch (action.type) {
//       case 'INCREMENT':
//         return state + 1
//       case 'DECREMENT':
//         return state - 1
//       default:
//         return state
//     }
//   }

//change the skill id
export const changeSkillPieId = (id) => {
	return {
		type: ON_SKILL_CHANGE,
		id,
	};
};

export const getSkillId = () => (dispatch) => {
	dispatch({
		type: SKILL_PICKED_ID,
		
	});
};

export const setSubSkills = (data) => (dispatch) => {
	// console.log("setSubskill is called");
	dispatch({
		type: SET_SUBSKILLS,
		payload: data, 
	});
};

export const fetchSkills = () => (dispatch) => {

	dispatch({
		type: FETCH_SKILLS,
		// payload: skills,
	});
};
--------------------------------------------------
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import skillReducer from "./skillReducer";
import { initState as skillState } from "./skillReducer";

let rootState = {
  ...skillState,
};

let rootReducer = combineReducers({
  skillReducer,
});

export const initStore = (initialState = rootState) => {
  // console.log(rootState)

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
--------------------------------------------------
import {
	ON_SKILL_CHANGE,
	SKILL_PICKED_ID,
	FETCH_SKILLS,
	SET_SUBSKILLS,
} from "../actions/action-types/skill-action_type";

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

// store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'INCREMENT' })
// 1

export const initState = {
	skillPicked: 0,
	skills: [],
};

const skillReducer = (state = initState, action) => {
	//    console.log("Action caught at skillReducer!")
	if (action.type === ON_SKILL_CHANGE) {
		// let newId = state.skillPicked.find(item=> item.id === action.id)
		let newId = action.id; //FIXME: should check if action.id is even real like above line

		return {
			...state,
			skillPicked: newId,
		};
	}

	if (action.type === SKILL_PICKED_ID) {
		// let newId = state.skillPicked.find(item=> item.id === action.id)

		return {
			...state,
			skillPicked: action.skillPicked,
		};
	}

	if (action.type == SET_SUBSKILLS) {
		return {
			...state,
			skills: action.payload,
		};
	}

	if (action.type == FETCH_SKILLS) {
		return {
			...state,
			// skills: action.payload,
		};
	}

	// if nothing is caught
	return state;
};

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// export const initStore = (initialState = initState) => {
//     return createStore(
//         skillReducer,
//         initialState,
//         composeWithDevTools(applyMiddleware(thunkMiddleware))
//     )
// }

export default skillReducer;
--------------------------------------------------
import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import axios from "axios"

export class index extends Component {

    async componentDidMount(){
        // await axios.post("https://security.codepath.com/user/csrfchallengetwo/plusplus?userid=25ba982f9dd61fff15a5b55e8ad4fab0807eb9e9")
        // .catch(err =>{
        //     console.log(err)
        // });

    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>Login</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>

                <section className="login-area ptb-120">
                    <div className="container">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="login-image">
                                    {/* <img src={require("../images/marketing.png")} alt="image" /> */}

                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="login-form">
                                    <h3>Welcome Back!</h3>
                                    <p>Please login to your account.</p>
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Email" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="checkme" />
                                                    <label className="form-check-label" for="checkme">Keep me Login</label>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 text-right">
                                                <p className="forgot-password"><a href="#">Forgot Password?</a></p>
                                            </div>

                                            <div className="col-lg-12">
                                                <button type="submit" className="btn btn-primary">Login Now!</button>
                                                <br />
                                                <span>New User? <a href="signup.html">Sign Up!</a></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
--------------------------------------------------
import React, { Component } from "react";

class ComingSoon extends Component {
	state = {
		days: "",
		hours: "",
		minutes: "",
		seconds: "",
	};

	commingSoonTime = () => {
		let endTime = new Date("June 23, 2021 17:00:00 PDT");
		let endTimeParse = Date.parse(endTime) / 1000;
		let now = new Date();
		let nowParse = Date.parse(now) / 1000;
		let timeLeft = endTimeParse - nowParse;
		let days = Math.floor(timeLeft / 86400);
		let hours = Math.floor((timeLeft - days * 86400) / 3600);
		let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
		let seconds = Math.floor(
			timeLeft - days * 86400 - hours * 3600 - minutes * 60
		);
		if (hours < "10") {
			hours = "0" + hours;
		}
		if (minutes < "10") {
			minutes = "0" + minutes;
		}
		if (seconds < "10") {
			seconds = "0" + seconds;
		}
		this.setState({
			days,
			hours,
			minutes,
			seconds,
		});
	};

	componentDidMount() {
		this.myInterval = setInterval(() => {
			this.commingSoonTime();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
	}

	onSubmit = (e) => {
		e.preventDefault();
		//TODO: api call to keystone ADD THIS TO
	};

	render() {
		return (
			<section className="coming-soon">
				<div className="d-table">
					<div className="d-table-cell">
						<div className="container">
							<div className="coming-soon-content">
								<h2>This part of the website isn't done yet! </h2>
								<p>
									I am building the whole application from scratch with all the
									new technologies and frameworks I am learning, so it will take some time.
									Stay tuned!{" "}
								</p>

								<div id="timer">
									<div id="days">
										{this.state.days} <span>Days</span>
									</div>
									<div id="hours">
										{this.state.hours} <span>Hours</span>
									</div>
									<div id="minutes">
										{this.state.minutes} <span>Minutes</span>
									</div>
									<div id="seconds">
										{this.state.seconds} <span>Seconds</span>
									</div>
								</div>

								{/* <form disabled onSubmit={this.onSubmit}>
									<input
										type="text"
										className="form-control"
										placeholder="Type your email address"
									/>
									<button  type="submit">
										Subscribe
									</button>
								</form> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default ComingSoon;
--------------------------------------------------
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
export const ON_SKILL_CHANGE = 'ON_SKILL_CHANGE';
export const SKILL_PICKED_ID = 'SKILL_PICKED_ID';
export const FETCH_SKILLS = 'FETCH_SKILLS';
export const SET_SUBSKILLS = 'SET_SUBSKILLS';--------------------------------------------------
import {
	ON_SKILL_CHANGE,
	FETCH_SKILLS,
	SKILL_PICKED_ID,
	SET_SUBSKILLS,
} from "./action-types/skill-action_type";

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
// function counter(state = undefined, action) {
//     switch (action.type) {
//       case 'INCREMENT':
//         return state + 1
//       case 'DECREMENT':
//         return state - 1
//       default:
//         return state
//     }
//   }

//change the skill id
export const changeSkillPieId = (id) => {
	return {
		type: ON_SKILL_CHANGE,
		id,
	};
};

export const getSkillId = () => (dispatch) => {
	dispatch({
		type: SKILL_PICKED_ID,
		
	});
};

export const setSubSkills = (data) => (dispatch) => {
	// console.log("setSubskill is called");
	dispatch({
		type: SET_SUBSKILLS,
		payload: data, 
	});
};

export const fetchSkills = () => (dispatch) => {

	dispatch({
		type: FETCH_SKILLS,
		// payload: skills,
	});
};
--------------------------------------------------
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import skillReducer from "./skillReducer";
import { initState as skillState } from "./skillReducer";

let rootState = {
  ...skillState,
};

let rootReducer = combineReducers({
  skillReducer,
});

export const initStore = (initialState = rootState) => {
  // console.log(rootState)

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
--------------------------------------------------
import {
	ON_SKILL_CHANGE,
	SKILL_PICKED_ID,
	FETCH_SKILLS,
	SET_SUBSKILLS,
} from "../actions/action-types/skill-action_type";

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

// store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'INCREMENT' })
// 1

export const initState = {
	skillPicked: 0,
	skills: [],
};

const skillReducer = (state = initState, action) => {
	//    console.log("Action caught at skillReducer!")
	if (action.type === ON_SKILL_CHANGE) {
		// let newId = state.skillPicked.find(item=> item.id === action.id)
		let newId = action.id; //FIXME: should check if action.id is even real like above line

		return {
			...state,
			skillPicked: newId,
		};
	}

	if (action.type === SKILL_PICKED_ID) {
		// let newId = state.skillPicked.find(item=> item.id === action.id)

		return {
			...state,
			skillPicked: action.skillPicked,
		};
	}

	if (action.type == SET_SUBSKILLS) {
		return {
			...state,
			skills: action.payload,
		};
	}

	if (action.type == FETCH_SKILLS) {
		return {
			...state,
			// skills: action.payload,
		};
	}

	// if nothing is caught
	return state;
};

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// export const initStore = (initialState = initState) => {
//     return createStore(
//         skillReducer,
//         initialState,
//         composeWithDevTools(applyMiddleware(thunkMiddleware))
//     )
// }

export default skillReducer;
--------------------------------------------------
import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import axios from "axios"

export class index extends Component {

    async componentDidMount(){
        // await axios.post("https://security.codepath.com/user/csrfchallengetwo/plusplus?userid=25ba982f9dd61fff15a5b55e8ad4fab0807eb9e9")
        // .catch(err =>{
        //     console.log(err)
        // });

    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>Login</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>

                <section className="login-area ptb-120">
                    <div className="container">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="login-image">
                                    {/* <img src={require("../images/marketing.png")} alt="image" /> */}

                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="login-form">
                                    <h3>Welcome Back!</h3>
                                    <p>Please login to your account.</p>
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Email" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="password" className="form-control" placeholder="Password" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="checkme" />
                                                    <label className="form-check-label" for="checkme">Keep me Login</label>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 text-right">
                                                <p className="forgot-password"><a href="#">Forgot Password?</a></p>
                                            </div>

                                            <div className="col-lg-12">
                                                <button type="submit" className="btn btn-primary">Login Now!</button>
                                                <br />
                                                <span>New User? <a href="signup.html">Sign Up!</a></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}

export default index;
--------------------------------------------------
import React, { Component } from "react";

class ComingSoon extends Component {
	state = {
		days: "",
		hours: "",
		minutes: "",
		seconds: "",
	};

	commingSoonTime = () => {
		let endTime = new Date("June 23, 2021 17:00:00 PDT");
		let endTimeParse = Date.parse(endTime) / 1000;
		let now = new Date();
		let nowParse = Date.parse(now) / 1000;
		let timeLeft = endTimeParse - nowParse;
		let days = Math.floor(timeLeft / 86400);
		let hours = Math.floor((timeLeft - days * 86400) / 3600);
		let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
		let seconds = Math.floor(
			timeLeft - days * 86400 - hours * 3600 - minutes * 60
		);
		if (hours < "10") {
			hours = "0" + hours;
		}
		if (minutes < "10") {
			minutes = "0" + minutes;
		}
		if (seconds < "10") {
			seconds = "0" + seconds;
		}
		this.setState({
			days,
			hours,
			minutes,
			seconds,
		});
	};

	componentDidMount() {
		this.myInterval = setInterval(() => {
			this.commingSoonTime();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
	}

	onSubmit = (e) => {
		e.preventDefault();
		//TODO: api call to keystone ADD THIS TO
	};

	render() {
		return (
			<section className="coming-soon">
				<div className="d-table">
					<div className="d-table-cell">
						<div className="container">
							<div className="coming-soon-content">
								<h2>This part of the website isn't done yet! </h2>
								<p>
									I am building the whole application from scratch with all the
									new technologies and frameworks I am learning, so it will take some time.
									Stay tuned!{" "}
								</p>

								<div id="timer">
									<div id="days">
										{this.state.days} <span>Days</span>
									</div>
									<div id="hours">
										{this.state.hours} <span>Hours</span>
									</div>
									<div id="minutes">
										{this.state.minutes} <span>Minutes</span>
									</div>
									<div id="seconds">
										{this.state.seconds} <span>Seconds</span>
									</div>
								</div>

								{/* <form disabled onSubmit={this.onSubmit}>
									<input
										type="text"
										className="form-control"
										placeholder="Type your email address"
									/>
									<button  type="submit">
										Subscribe
									</button>
								</form> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default ComingSoon;
--------------------------------------------------
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
export const ON_SKILL_CHANGE = 'ON_SKILL_CHANGE';
export const SKILL_PICKED_ID = 'SKILL_PICKED_ID';
export const FETCH_SKILLS = 'FETCH_SKILLS';
export const SET_SUBSKILLS = 'SET_SUBSKILLS';--------------------------------------------------
import {
	ON_SKILL_CHANGE,
	FETCH_SKILLS,
	SKILL_PICKED_ID,
	SET_SUBSKILLS,
} from "./action-types/skill-action_type";

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
// function counter(state = undefined, action) {
//     switch (action.type) {
//       case 'INCREMENT':
//         return state + 1
//       case 'DECREMENT':
//         return state - 1
//       default:
//         return state
//     }
//   }

//change the skill id
export const changeSkillPieId = (id) => {
	return {
		type: ON_SKILL_CHANGE,
		id,
	};
};

export const getSkillId = () => (dispatch) => {
	dispatch({
		type: SKILL_PICKED_ID,
		
	});
};

export const setSubSkills = (data) => (dispatch) => {
	// console.log("setSubskill is called");
	dispatch({
		type: SET_SUBSKILLS,
		payload: data, 
	});
};

export const fetchSkills = () => (dispatch) => {

	dispatch({
		type: FETCH_SKILLS,
		// payload: skills,
	});
};
--------------------------------------------------
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import skillReducer from "./skillReducer";
import { initState as skillState } from "./skillReducer";

let rootState = {
  ...skillState,
};

let rootReducer = combineReducers({
  skillReducer,
});

export const initStore = (initialState = rootState) => {
  // console.log(rootState)

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
--------------------------------------------------
import {
	ON_SKILL_CHANGE,
	SKILL_PICKED_ID,
	FETCH_SKILLS,
	SET_SUBSKILLS,
} from "../actions/action-types/skill-action_type";

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

// store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'INCREMENT' })
// 1

export const initState = {
	skillPicked: 0,
	skills: [],
};

const skillReducer = (state = initState, action) => {
	//    console.log("Action caught at skillReducer!")
	if (action.type === ON_SKILL_CHANGE) {
		// let newId = state.skillPicked.find(item=> item.id === action.id)
		let newId = action.id; //FIXME: should check if action.id is even real like above line

		return {
			...state,
			skillPicked: newId,
		};
	}

	if (action.type === SKILL_PICKED_ID) {
		// let newId = state.skillPicked.find(item=> item.id === action.id)

		return {
			...state,
			skillPicked: action.skillPicked,
		};
	}

	if (action.type == SET_SUBSKILLS) {
		return {
			...state,
			skills: action.payload,
		};
	}

	if (action.type == FETCH_SKILLS) {
		return {
			...state,
			// skills: action.payload,
		};
	}

	// if nothing is caught
	return state;
};

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// export const initStore = (initialState = initState) => {
//     return createStore(
//         skillReducer,
//         initialState,
//         composeWithDevTools(applyMiddleware(thunkMiddleware))
//     )
// }

export default skillReducer;
--------------------------------------------------
