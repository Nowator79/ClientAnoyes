export function getKey(length) {
	var result       = '';
	var words        = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
	var max_position = words.length - 1;
		for(var i = 0; i < length; ++i ) {
			var position = Math.floor ( Math.random() * max_position );
			result = result + words.substring(position, position + 1);
		}
	return result;
}