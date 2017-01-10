module.exports = function (grunt) {
    "use strict";

    require("load-grunt-tasks")(grunt);

    var hostName = '127.0.0.1',
        port = 9001,
        rootDir = './webapp';

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: port,
                    base: rootDir,
                    hostname: hostName,
                    index: 'index.html',
                    open: true,
                    keepalive: true,
                    livereload: true
                }
            }
        },
        watch: {
            src: {
                files: [rootDir + '/**/*.js', rootDir + '/**/*.css', rootDir + '/**/*.html', rootDir + '/**/*.ts', '!' + rootDir + '**/bower_components/**/*'],
                options: {
                    livereload: 35729,
                }
            }        },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            server: {
                tasks: ['wiredep', 'connect:server', 'watch']
            }
        },
        wiredep: {
            target: {
                src: rootDir + '/index.html',
            }
        }
    });

    grunt.registerTask('launch', 'Launch the server and realod changes',[
        "concurrent:server"
    ]);

    grunt.registerTask('build', 'Developer-Profile', function developerProfile(target) {
        if (target === "minified") {
            grunt.log.write("Building minifed version... ").ok();
        } else {
            grunt.log.write("Building non-minifed version... ").ok();
        }

        grunt.task.run("launch");
    });
};
