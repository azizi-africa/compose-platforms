export default {
	id: 'operation-azizi-sms',
	name: 'Azizi SMS',
	icon: 'forum',
	description: 'Send SMS using the Africas Talking API.',
	overview: ({ phone_number, message }) => [
		{
			label: 'Phone Number',
			text: phone_number,
		},
		{
			label: 'Message',
			text: message,
		},
	],
	options: [
		{
			field: 'phone_number',
			name: 'Phone Number',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'input',
			},
		},
		{
			field: 'message',
			name: 'Message',
			type: 'text',
			meta: {
				width: 'full',
				interface: 'input-multiline',
			},
		},
	],
};
