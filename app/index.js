function buildCoverageList() {

	for (var i = 0; i < coverage.length; i++) {
		var a = document.createElement('a');
		a.appendChild(document.createTextNode(coverage[i].title));
		a.href = coverage[i].href;
		document.body.appendChild(a);
		document.body.appendChild(document.createElement('br'));
	}
}