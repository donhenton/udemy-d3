
module.exports = function (grunt) {
    // require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks
    //https://github.com/gruntjs/grunt-contrib-watch/blob/master/docs/watch-examples.md
    grunt.initConfig({
        
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    lineNumbers: true
                },
                files: {
                    './public_html/demos/statscss/css/main.css': './public_html/demos/statscss/sass/stats.scss'
                }
            },
            dist_graph: {
                options: {
                    style: 'expanded',
                    lineNumbers: true
                },
                files: {
                    './public_html/demos/graph/css/graph.css': './public_html/demos/graph/sass/graph.scss'
                }
            }
        },
        watch: {
            options: {livereload: true}
            ,
             
            chart_code: {
                files: ['./public_html/chart/*.js',
                    './public_html/chart/*.css',
                    './public_html/chart/*.html']
            } 


        },
        connect: {
            chart: {
                options: {
                    port: 8888,
                    hostname: '*',
                    open: 'http://localhost:8888/chart/index.html',
                    livereload: true,
                    base: 'public_html'
                }
            } 
        }
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask("chart", [ 'connect:chart', 'watch:chart_code']); 

};
