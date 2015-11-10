function buildCoverageList() {
	var div = document.createElement('div'),
		a, span;

	for (var i = 0; i < coverage.length; i++) {
		a = document.createElement('a');
		a.appendChild(document.createTextNode(coverage[i].browser));
		span = document.createElement('span');
		span.appendChild(document.createTextNode(coverage[i].os));
		span.className = "badge";
		a.appendChild(span);
		a.href = coverage[i].href;
		a.className = "list-group-item";
		div.appendChild(a);
	}
	document.getElementById('reports').appendChild(div);
}