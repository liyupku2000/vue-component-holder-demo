module.exports = {
  customHooks: {
    preInitMvms: [ 'prefetch', 'beforeInit' ],
    postInitMvms: [ 'init', 'inited' ]
  }
}