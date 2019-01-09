import cloneDeep from 'lodash.clonedeep';

export const componentDetails = {
    iconDesc: {
        types: ['info', 'success', 'warning', 'danger']
    },
    titleDesc: {
        types: ['validation'],
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
};

export const defaultType = 'info';

export const allTypeComponents = (() => {
    var obj = {};
	
	for(var componentName in componentDetails) {
		componentDetails[componentName].types.forEach(type => {
			obj[type] = componentName;
        });
    }
	
	return obj;
})();

export const allComponentProps = (() => {
    var props = {},
        newProps,
        propConfig;

    for(var componentName in componentDetails) {
        newProps = cloneDeep(componentDetails[componentName].props);

        for(var propName in newProps) {
            propConfig = newProps[propName];

            if(typeof propConfig == 'object')
                delete propConfig.required;
        }

        props = {
            ...newProps
        };
    }

    return props;
})();