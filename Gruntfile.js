module.exports = function(grunt) {
    grunt.initConfig({
        // read package.json
        pkg: grunt.file.readJSON('package.json'),
    
        // minify
        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    'assets/js/main.min.js': 'js/main.js',
                    'assets/js/pixelate.min.js': 'vendor/jquery-pixelate.js/js/pixelate.js'
                }
            }
        },

        // watch
        watch: {
            scripts: {
                files: 'assets/**/*.js',
                tasks: ['uglify']
            }
        }
    });

    // plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // default task
    grunt.registerTask('default', ['uglify']);
};