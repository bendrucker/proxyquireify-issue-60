var browserify = require('browserify')

browserify({
  paths: ['./not_really_node_modules']
})
.add('./test')
.plugin('proxyquireify/plugin')
.bundle()
.pipe(process.stdout)
