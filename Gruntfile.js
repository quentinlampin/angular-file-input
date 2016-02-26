module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        eslint: {
            target: ['src/angular-file-input.js']
        },

        karma: {
            options: {
              configFile: 'karma.conf.js'
            },
            dev: {
                options: {
                    singleRun: false,
                    autoWatch: true,
                }
            },
            unit: {
                options: {
                    browsers: ['PhantomJS'],
                    singleRun: true,
                    autoWatch: false
                }

            }
        },

        uglify: {
            options: {
                banner: '/**\n * <%= pkg.name %> - version <%= pkg.version %>\n * Copyright <%= pkg.author %> - <%= pkg.license %> license\n */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            }

        }
    });

    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('test', ['eslint', 'karma']);
    grunt.registerTask('default', ['uglify']);
};
