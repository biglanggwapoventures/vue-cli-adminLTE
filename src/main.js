// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jQuery'


//bootstrap 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//adminLTE
import './dist/css/skins/_all-skins.min.css'
import './dist/css/AdminLTE.min.css'
import './dist/js/app.min.js'
import './dist/js/adminlte.min.js'
//font-awesome
import 'font-awesome/css/font-awesome.css'
//jquery pligins
import './plugins/slimScroll/jquery.slimScroll.min.js'

import './plugins/datatables/jquery.dataTables.min.js'
import './plugins/datatables/dataTables.bootstrap.css'
import './plugins/datatables/dataTables.bootstrap.min.js'




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
