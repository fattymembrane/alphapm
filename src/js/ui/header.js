'use strict';

// dom
const {
	ul, li, i,
	section, header, button, span, img, p, div, input,
	table, thead, tbody, tfoot, tr, td, th
} = require('iblokz-snabbdom-helpers');
// components

const moment = require('moment');

module.exports = ({state, actions, views}) => header([
	ul('.left',
		views.map(view =>
			li({
				class: {active: view === state.view},
				on: {click: () => actions.set('view', view)}
			}, i(`.fa.fa-${view}`))
		)
	),
	img('[src="assets/img/logo-2.svg"]'),
	span('.right', moment().format('DD MMMM YYYY, H:mm:ss'))
]);
