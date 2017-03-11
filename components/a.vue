<template>
	 <div id='avue'>
	 	<div class="list card" v-for='item in filteredItems'>
            <div class="item item-avatar">
            	<a href=''>
            	<h2 style='color:black'>{{item.titleCn}}</h2>
                <img :src="item.img">
                </a>
                <p>{{item.rYear}}-{{item.rMonth}}-{{item.rDay}}上映</p>
                <p>{{item.commonSpecial}}</p>
                <p style='color:blue'>类型:{{item.type}}</p>

            </div>
            
        </div>
      	 <button @click='next()'>下一页</button>
        <button @click='prev()'>上一页</button>
	 </div>

</template>
<script>
//导出文件 
	module.exports = {

		data:function(){
	    	return{
	    		items:'',
	    		start:1
	    	}
    	},
    	computed:{
			filteredItems: function () {
  		  		return this.items.slice(0, this.start)
  			}
		},
		methods:{
			 getdata:function(){
	            console.log(this)
	            this.$http.jsonp('http://localhost/webpack/movies/php/data.php',{
	                params:{
	                    callback:'JSON-CALLBACK'
	                }
	            }).then(function(data){
	               
	                this.items = data.data.movies;

	            })
	        },
	        next:function(){
				console.log(this.start)
				this.start += 1
			},
			prev:function(){
				this.start -=1
			}
		},
		mounted:function(){
			this.getdata()
		}


		
	}
</script>
<style>
	img{
		width:200px;
		height:200px;
	}
	#avue{
		height:600px;
		overflow:auto;
		
	}
</style>
