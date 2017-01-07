module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        
    });

    // A very basic default task.
    grunt.registerTask('default', 'Log some stuff.', function defaultProfile() {
        grunt.log.write('Logging some stuff...').ok();
    });

    grunt.registerTask('dev', 'Developer-Profile', function developerProfile() {
        grunt.log.write("Dev Profile... ").ok();
    });

    grunt.registerTask('qc', 'QC-Profile', function qcProfile() {
        grunt.log.write('QC Profile... ').error();
    });

    grunt.registerTask('uat', 'UAT-Profile', function qcProfile() {
        grunt.log.write('UAT Profile... ').ok();
    });

    grunt.registerTask('prod', 'PROD-Profile', function qcProfile() {
        grunt.log.write('PROD Profile... ').ok();
    });
};
