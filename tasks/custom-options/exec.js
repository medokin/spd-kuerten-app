module.exports = {
  emulator: {
    cmd: "phonegap run android --emulator",
    stdout: true,
    stderr: true,
    cwd: "phonegap/"
  },

  device: {
    cmd: "phonegap run android --device",
    stdout: true,
    stderr: true,
    cwd: "phonegap/"
  }
};
