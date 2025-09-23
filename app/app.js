import Vue from 'nativescript-vue'
import Home from './components/Home'
import * as ApplicationSettings from '@nativescript/core/application-settings';
import { Application, Color, isAndroid } from '@nativescript/core';




Application.on(Application.launchEvent, function () {
  if (global.isAndroid) {
  const activity = Application.android.startActivity || Application.android.foregroundActivity;
  const window = activity.getWindow();
  window.setNavigationBarColor(new Color("#030712").android);
  }
  });

  //set status bar backgroud color
  if (isAndroid) {
  Application.android.on(Application.AndroidApplication.activityStartedEvent, function (args) {
  if (args.activity) {
  const window = args.activity.getWindow();
  // Set status bar color (hex, rgba, or Color object)
  window.setStatusBarColor(new Color("#6B4226").android);
  const decorView = window.getDecorView();
  decorView.setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);



  }
  });
  }





new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
