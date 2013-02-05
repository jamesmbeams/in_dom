Backbone.View.prototype.in_DOM = function() {
	var result = true;
	if(this.$el.parents('body').length === 0) {
		result = false;
	}
	return result;
};
