
module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        'http-server': {

            'dev': {

                // the server root directory
                root: '<%= pkg.path %>',

                port: '<%= pkg.port %>',
                // port: function() { return 8282; }

                host: "<%= pkg.host %>",

                cache: 5000,
                showDir : true,
                autoIndex: true,

                // server default file extension
                ext: "html",

                // run in parallel with other tasks
                runInBackground: false

            }

        },
        open: {
            dev : {
              path: 'http://<%= pkg.host %>:<%= pkg.port %>'
            },
            file: {
              path: '<%= pkg.path %>'
            }
        }
    });

    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-open');

    // Default task(s).
    grunt.registerTask('default', ['open', 'http-server:dev']);
};
