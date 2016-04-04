<script src="jquery-2.1.0.min.js"></script> 
<script src="base.js"></script>

<script type="text/javascript">
	function success(){
		$('body').barStatus({
			message: 'success',
			background: '#2ECC71',
			duration: 3000
		});
	}

	function error(){
		$('body').barStatus({
			message: 'error',
			closed: true,
			background: '#CF000F'
		});
	}
		
</script>
<style>
	body , html{
		margin: 0;
		padding: 0;
	}
</style>
<br><br><br><br><br><br><br><br>
<button onclick="success()">success</button>
<button onclick="error()">error</button>