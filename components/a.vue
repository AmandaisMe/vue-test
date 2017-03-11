<template>
	 <div id='avue'>
	 	<div class="list card" v-for='item in items'>
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
      
	 </div>

</template>
<script>
//导出文件 
	module.exports = {

		data:function(){
	    	return{
	    		items:''
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
	                console.log(data.data.movies)
	                this.items = data.data.movies;
	                console.log(this.items)


	            })
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