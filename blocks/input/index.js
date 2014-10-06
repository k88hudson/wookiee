module.exports = {
    className: 'input-block',
    template: require('./index.html'),
	lazy: false,
    data: {
        name: 'Input',
        icon: '/images/blocks_text.png',
        attributes: {
            inputType: {
                label: 'Input Type',
                type: 'dropdownChoice',
                options: ['Single Line Text', 'Long Text'],
                value: 0,
                skipAutoRender: true
            },
            label: {
                label: 'Title',
                type: 'string',
                value: '',
                placeholder: 'Your title goes here',
                skipAutoRender: true
            },
			color: {
               label: 'Title Text Color',
               type: 'color',
               value: '#638093'
           }
        }
    },
	methods: {
		reportDataChange: function(self) {
			console.log(self.$data);
			if(self.$data.attributes.inputType.value == 0) {
				self.$dispatch('dataChange',
					self.$index,
					self.$el.querySelector('input').value
				);
			} else {
				self.$dispatch('dataChange',
					self.$index,
					self.$el.querySelector('textarea').innerHTML
				);
			}
		}
	},
	ready: function() {
		var self = this;

		if(self.$parent.$parent.$data.params.mode !== 'play') {
            if (self.$el.querySelector('input')) self.$el.querySelector('input').disabled = 'disabled';
            if (self.$el.querySelector('textfield')) self.$el.querySelector('textfield').disabled = 'disabled';
		}

		this.$watch('attributes.value.value', function (value, mutation) {
			console.log('input value changed');
		});

	}
};