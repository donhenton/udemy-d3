
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
            bar_chart_code: {
                files: ['./public_html/barchart/*.js',
                    './public_html/barchart/*.css',
                    './public_html/barchart/*.html']
            },
            line_chart_code: {
                files: ['./public_html/linechart/*.js',
                    './public_html/linechart/*.css',
                    './public_html/linechart/*.html']
            }

        },
        connect: {
            barchart: {
                options: {
                    port: 8888,
                    hostname: '*',
                    open: 'http://localhost:8888/barchart/index.html',
                    livereload: true,
                    base: 'public_html'
                }
            },
            linechart: {
                options: {
                    port: 8888,
                    hostname: '*',
                    open: 'http://localhost:8888/linechart/index.html',
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
    grunt.registerTask("linechart", ['connect:linechart', 'watch:line_chart_code']);
    grunt.registerTask("barchart", ['connect:barchart', 'watch:bar_chart_code']);

};
