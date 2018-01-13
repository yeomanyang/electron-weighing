var grunt = require("grunt");
grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),
    'create-windows-installer': {
        x64: {
            appDirectory: './weighing-server-darwin-x64',
            authors: 'yeoman',
            exe: 'weighing-server.exe',
            description:"Mock weighing.",
        }
    }
})

grunt.loadNpmTasks('grunt-electron-installer');
grunt.registerTask('default', ['create-windows-installer']);
