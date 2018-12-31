<template>
  <i :class="className" />
</template>

<script>
export default {
  name: 'vfs-icon',

  props: {
    name: {
      type: String,
      required: true
    }
  },

  computed: {
    className() {
      return 'vfs-icon-' + this.name;
    }
  }
}
</script>

<style>
@font-face {
  font-family: "vfs-icons";
  src: url("~/fonts/icons/vfs-icons.eot");
  src: url("~/fonts/icons/vfs-icons.eot?#iefix") format("embedded-opentype"),
    url("~/fonts/icons/vfs-icons.ttf") format("truetype"),
    url("~/fonts/icons/vfs-icons.woff") format("woff"),
    url("~/fonts/icons/vfs-icons.svg#vdp-icons") format("svg");
  font-weight: normal;
  font-style: normal;
}

[class^="vfs-icon-"],
[class*=" vfs-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "vfs-icons" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.vfs-icon-right-arrow:before {
  content: "\e900";
}
.vfs-icon-arrow-up-right:before {
  content: "\e901";
}
.vfs-icon-upload-circle-fill:before {
  content: "\e910";
}
.vfs-icon-delete-fill:before {
  content: "\e911";
}
.vfs-icon-search-circle-fill:before {
  content: "\e912";
}
.vfs-icon-info-fill:before {
  content: "\e913";
}
.vfs-icon-close-fill:before {
  content: "\e914";
}
.vfs-icon-checkmark-fill:before {
  content: "\e915";
}
.vfs-icon-expand-fill:before {
  content: "\e916";
}
.vfs-icon-search-circle:before {
  content: "\e917";
}
.vfs-icon-expand:before {
  content: "\e918";
}
.vfs-icon-upload-rect:before {
  content: "\e919";
}
.vfs-icon-upload:before {
  content: "\e91a";
}
.vfs-icon-upload-circle:before {
  content: "\e91b";
}
.vfs-icon-cart:before {
  content: "\e91c";
}
.vfs-icon-upload-cloud:before {
  content: "\e91d";
}
.vfs-icon-delete:before {
  content: "\e91e";
}
.vfs-icon-arrow:before {
  content: "\e91f";
}
.vfs-icon-info:before {
  content: "\e920";
}
.vfs-icon-error:before {
  content: "\e921";
}
.vfs-icon-warning:before {
  content: "\e922";
}
.vfs-icon-checkmark:before {
  content: "\e923";
}
.vfs-icon-close:before {
  content: "\e924";
}
.vfs-icon-upload-rect-fill:before {
  content: "\e925";
}
.vfs-icon-upload-cloud-fill:before {
  content: "\e926";
}
.vfs-icon-cart-fill:before {
  content: "\e927";
}
.vfs-icon-arrow-fill:before {
  content: "\e928";
}
.vfs-icon-error-fill:before {
  content: "\e929";
}
.vfs-icon-warning-fill:before {
  content: "\e92a";
}
.vfs-icon-service-application-and-document-checks:before {
  content: "\e938";
}
.vfs-icon-service-bronze:before {
  content: "\e939";
}
.vfs-icon-service-certification:before {
  content: "\e93a";
}
.vfs-icon-service-check-and-verify:before {
  content: "\e93b";
}
.vfs-icon-service-courier-service:before {
  content: "\e93c";
}
.vfs-icon-service-document-scanning-assistance:before {
  content: "\e93d";
}
.vfs-icon-service-electronic-visa-waiver-service:before {
  content: "\e93e";
}
.vfs-icon-service-fast-pass:before {
  content: "\e93f";
}
.vfs-icon-service-flexible-hours-for-passport-collection:before {
  content: "\e940";
}
.vfs-icon-service-form-filling-assistance:before {
  content: "\e941";
}
.vfs-icon-service-gold:before {
  content: "\e942";
}
.vfs-icon-service-group-appointment-booking:before {
  content: "\e943";
}
.vfs-icon-service-prime-time-appointment:before {
  content: "\e944";
}
.vfs-icon-service-premium-lounge:before {
  content: "\e945";
}
.vfs-icon-service-premium-courier-service:before {
  content: "\e946";
}
.vfs-icon-service-platinum-lounge:before {
  content: "\e947";
}
.vfs-icon-service-photocopying:before {
  content: "\e948";
}
.vfs-icon-service-photobooth:before {
  content: "\e949";
}
.vfs-icon-service-personal-vfs-global-staff-support:before {
  content: "\e94a";
}
.vfs-icon-service-personal-chauffeur-service:before {
  content: "\e94b";
}
.vfs-icon-service-online-payment-assistance:before {
  content: "\e94c";
}
.vfs-icon-service-on-demand-mobile-visa:before {
  content: "\e94d";
}
.vfs-icon-service-keep-my-passport-when-applying:before {
  content: "\e94e";
}
.vfs-icon-service-internet-kiosk:before {
  content: "\e94f";
}
.vfs-icon-service-home-to-home-service:before {
  content: "\e950";
}
.vfs-icon-service-printing:before {
  content: "\e951";
}
.vfs-icon-service-priority-visa:before {
  content: "\e952";
}
.vfs-icon-service-private-enrolment-service:before {
  content: "\e953";
}
.vfs-icon-service-registered-traveller-assistance:before {
  content: "\e954";
}
.vfs-icon-service-settlement-visa-courier-service:before {
  content: "\e955";
}
.vfs-icon-service-settlement-visa-scanning-service:before {
  content: "\e956";
}
.vfs-icon-service-silver:before {
  content: "\e957";
}
.vfs-icon-service-sms-update-service:before {
  content: "\e958";
}
.vfs-icon-service-translation:before {
  content: "\e959";
}
.vfs-icon-service-vac-to-vac-courier-service:before {
  content: "\e95a";
}
.vfs-icon-service-vfs-premium-courier-500:before {
  content: "\e95b";
}
.vfs-icon-service-vfs-premium-courier-700:before {
  content: "\e95c";
}
.vfs-icon-service-walk-in-lounge:before {
  content: "\e95d";
}
.vfs-icon-service-walk-in-without-appointment:before {
  content: "\e95e";
}


</style>
