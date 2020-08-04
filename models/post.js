'use strict';
const mongoose = require('mongoose')

const Post = mongoose.model('Post', {
	name: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
    },
    description: {
		type: String,
		required: true,
        minlength: 1,
        trim: true
	}, 
	title: {

	},
	relevant_area: {
		type: String,
		required: true,
    },
    location: {
		type: String,
		required: true,
	},
	requirements: {
		type: String,
		required: false,
    },
    is_approved: {
        type: Boolean,
        required: true
	},
	date: {
		
	}
})

module.exports = { Post }