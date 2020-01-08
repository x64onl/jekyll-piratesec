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
                expand: true,
                flatten: true,
                files: {
                    'assets/js/pixelate.min.js': 'vendor/jquery-pixelate.js/js/pixelate.js',
                    'assets/js/flowtype.min.js': 'vendor/FlowType.JS/flowtype.js',
                    'assets/js/main.min.js': 'js/main.js'
                }
            }
        }
    });

    // plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // default task
    grunt.registerTask('default', ['uglify']);
};