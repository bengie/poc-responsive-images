
module.exports = function(grunt) {
    grunt.initConfig({

        'http-server': {

            'dev': {

                // the server root directory
                root: '/Applications/MAMP/htdocs/POC/responsive-images',

                port: 8100,
                // port: function() { return 8282; }

                host: "127.0.0.1",

                cache: 5000,
                showDir : true,
                autoIndex: true,

                // server default file extension
                ext: "html",

                // run in parallel with other tasks
                runInBackground: false

            }

        }
    });

    grunt.loadNpmTasks('grunt-http-server');

    // Default task(s).
    grunt.registerTask('default', ['http-server:dev']);
};
