module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      images: {
        src: ['./dev/client/assets/img/**'],
        dest: './client/img'
      }
    },

    clean: {
      mySubtask: {
        src: ['./client']
      }
    },

    sass: {
      dev: {
        files: {
          // destination         // source file
          "test.css" : "test.scss"
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 2266,
          base: './client',
          hostname: '*'
        }
      }
    }


  });


  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');


};