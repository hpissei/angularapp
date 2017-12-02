module.exports=function(grunt)
{
	//config
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		cssmin:{
			combine:{
				files:{
					'main.css':['content.css']
				}	
			}
		}
	});
	//load plugin
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	//do the task
	grunt.registerTask('default',['cssmin']);
};