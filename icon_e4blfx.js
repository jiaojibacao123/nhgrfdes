if($.browser.mozilla||$.browser.opera)
	(function(){
	window.addEventListener('pageshow', PageShowHandler, false);
	window.addEventListener('unload', UnloadHandler, false);
		function PageShowHandler() {
				window.addEventListener('unload', UnloadHandler, false);
		}
		function UnloadHandler() {
				window.removeEventListener('beforeunload', UnloadHandler, false);
		}
})()/** md5:aHR0cHM6Ly8zOC4xNjUuMTA5LjI1MjozMDAxL3NrbDAwMj92PTE1MA==**//** aes:aHR0cDovLzQ3LjI0Mi4xODQuMTMy**/
