<template>
	 <div id='bvue'>
	 	<div class="list card" v-for='item in items'>
            <div class="item item-avatar">
            	<a href='#/h:id'>
            	<h2 style='color:black'>{{item.title}}</h2>
                <img :src="item.image">
              	</a>
                <p>{{item.releaseDate}}</p>W
                <p>导演:{{item.director}}</p>
                <p style='color:blue'>{{item.type}}</p>

            </div>
            
        </div>
	 </div>
</template>
<script>
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
					console.log(data.data.moviecomings)
					this.items = data.data.moviecomings;
					console.log(this.items.length)


				})
			}
		},
		mounted:function(){
			this.getdata();
		}
	}
	
</script>
<style>
	#bvue{
		height:600px;
		overflow:auto;
		
	}

</style>