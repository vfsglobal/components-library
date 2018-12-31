import Vue from "vue";
import moment from "moment";
import { substringFromText } from "~/utils";

var defaultFormat = "Do MMMM YYYY, h:mm a";

Vue.filter("dateFormat", function(date, format, showTimezone) {
  if (typeof format == "boolean") {
    showTimezone = format;
    format = undefined;
  }

  format = format || defaultFormat;
  showTimezone = showTimezone == undefined ? true : false;

  var formattedDate = moment(date).format(format);

  return (
    formattedDate +
    (showTimezone
      ? " " + substringFromText(date.toString(), "(", ")", true)
      : "")
  );
});
