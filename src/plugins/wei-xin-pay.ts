/**
 * This is a template for new plugin wrappers
 *
 * Cordova WeiXinPay Plugin
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs.
 * - Remove this note
 *
 */
import { Plugin, Cordova } from './plugin';

/**
 * @name WeiXinPay
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { WeiXinPay } from 'ionic-native';
 *
 * WeiXinPay.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'WeiXinPay',
  plugin: 'cordova-plugin-wxpay', // npm package name, example: cordova-plugin-camera
  pluginRef: 'navigator.weixin', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/James200883/cordova-plugin-wxpay.git' // the github repository URL for the plugin
})
export class WeiXinPay {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  static sendPayReq(params: Object): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
