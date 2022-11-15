const webpackConfig = require('./webpack.config.js');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      myConfig: webpackConfig,
    },
    watch: {
      dev: {
        options: {
          interrupt: true,
        },
        files: ['./src/*.js', './src/**/*.js'],
        tasks: ['webpack'],
      },
      build_and_watch: {
        options: {
          interrupt: true,
        },
        files: ['Gruntfile.js', './src/*.js', './src/**/*.js'],
        tasks: ['build'],
      },
    },
    clean: {
      options: {
        force: true,
      },
      doc: ['./doc'],
    },
    jsdoc: {
      doc: {
        src: ['./src/*.js', './src/**/*.js'],
        options: {
          destination: './doc',
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-jsdoc');

  grunt.registerTask('dev', ['webpack', 'watch']);
  grunt.registerTask('build', ['webpack']);
  grunt.registerTask('build_and_watch', ['watch']);
  grunt.registerTask('doc', ['clean', 'jsdoc']);
};
