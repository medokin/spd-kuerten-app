module.exports = {
    main: {
        options: {
            archive: 'app.zip'
        },
        files: [
            {expand: true, cwd: 'dist/', src: ['**/*'], dest: null}
        ]
    }
};
