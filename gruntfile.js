module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      ts: {
        options: {
          separator: '\n'
        },
        src: [
          './dev/client/app/*.ts',
          './dev/client/app/**/*.ts'
        ],
        dest: './dev/grunt/.temp/client-middle.ts'
      },
      sass: {
        options: {
          separator: '\n'
        },
        src: [
          './dev/client/app/shared/*.sass',
          './dev/client/app/**/*.sass'
        ],
        dest: './dev/grunt/.temp/client-middle.sass'
      }

    },


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

    typescript: {
      base: {
        options: {
          sourceMap: true
        },
        src: [
          './dev/client/app/*.ts',
          './dev/client/app/**/*.ts'
        ],
        dest: './client/js/app.js'
      }
    },

    uglify: {
      client: {
        options: {
          screwIE8: false,
          drop_console: true
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


  grunt.registerTask('compile:js', ['typescript', 'uglify']);

  grunt.registerTask('fire', () => {
    console.log('FIRE!');

    var x = grunt.file.read('./dev/client/app/**/*.ts');
    console.log(x);



  });


  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

};