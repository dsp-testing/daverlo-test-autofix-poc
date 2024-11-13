console.log("Hello world");

let regex = new RegExp('(^\s*)my-marker(\\s*$)'),
isMyMarkerText = regex.test(text);
