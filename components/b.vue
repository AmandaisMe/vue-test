<template>
	 <div id='bvue'>
	 	<div class="list card" v-for='item in filteredItems'>
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
        <button @click='next()'>下一页</button>
        <button @click='prev()'>上一页</button>
	 </div>
</template>
<script>
	module.exports = {
		data:function(){
			return{
				items:'',
				start:3
			}
		},
		
		computed:{
			filteredItems: function () {
  		  		return this.items.slice(0, this.start)
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
			},
			next:function(){
				console.log(this.start)
				this.start += 5
			},
			prev:function(){
				this.start -=5
			}
		},
		mounted:function(){
			this.getdata();
			
		}
	}
	
</script>
<style>
	#bvue{
		height:500px;
		overflow:auto;
		
	}

</style>
