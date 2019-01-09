var defaultTypeMixinOptions = {
  defaultType: "default",
  defaultTypeDetails: null
};

export const typeProp = {
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
};

export function generateTypeMixin(allTypeDetails, options) {
  if (typeof options == "string") {
    options = {
      defaultType: options
    };
  }

  options = {
    ...defaultTypeMixinOptions,
    ...options
  };

  var { defaultType, defaultTypeDetails } = options;

  return {
    props: {
      type: {
        type: String,
        default: defaultType
      }
    },
    computed: {
      typeDetails() {
        return allTypeDetails.hasOwnProperty(this.type)
          ? allTypeDetails[this.type]
          : defaultTypeDetails;
      }
    }
  };
}
