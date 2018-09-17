"use strict";

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const blogPostsSchema = mongoose.Schema({
author: {
  firstName: String,
  lastName: String
},
title: {type: String, required: true},
content: {type: String, required: true},
created: {type: Date, default: Date.now}
});

blogPostsSchema.virtual("authorName").get(function(){
  return `${this.author.firstName} ${this.author.lastName}`.trim();
});

blogPostSchema.methods.serialize = function() {
  return {
    id: this._id,
    author: this.authorName,
    content: this.content,
    title: this.title,
    created: this.created
  };
};

const BlogPost = mongoose.model("Blog Post", blogPostsSchema);

module.exports = {BlogPost};