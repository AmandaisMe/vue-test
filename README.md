vue+vuex+webpack+vue-router
API借助外部链接  会涉及到跨域问题
跨域问题：利用jsonp来接受 php把连接存放在php下 用自己的服务器打开 然后jsonp请求自己的服务器打开的连接 这是一种解决跨域的方法之一
php写法：
$data = file_get_contents('外部url');
echo $_GET['callback'].'(.'$data'.)';

module.exports = {
		data:function(){
			return{
				items:''
			}
		},
		methods : {
			getdata:function(){
				this.$http.jsonp('http://localhost/webpack/movies/php/bvue.php',{
					params:{
						callback:'JSON_CALLBACK'
					}
				}).then(function(data){
					this.items = data.data.moviecomings;
					
				})
			}
		},
		mounted:function(){
			this.getdata();
		}
	}
