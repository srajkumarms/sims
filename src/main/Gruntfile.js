module.exports = function (grunt) {
    "use strict";

    require("load-grunt-tasks")(grunt);
    // grunt.initConfig({
    //
    // });

    grunt.registerTask('build', 'Developer-Profile', function developerProfile(target) {
        if (target === "minifed") {
            grunt.log.write("Building minifed version... ").ok();
        } else {
            grunt.log.write("Building non-minifed version... ").ok();
        }
    });
};
