function foo () {
	var bar;
	quux = 11;
	function zip () {
		var quux;
		bar = true;
	}
	return zip;
}