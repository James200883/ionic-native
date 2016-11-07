/**
 * This is a template for new plugin wrappers
 *
 * Cordova AliPay Plugin
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
 * @name AliPay
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { AliPay } from 'ionic-native';
 *
 * AliPay.functionName('Hello', 123)
 *   .then((something: any) => doSomething(something))
 *   .catch((error: any) => console.log(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'AliPay',
  plugin: 'cordova-plugin-alipay', // npm package name, example: cordova-plugin-camera
  pluginRef: 'navigator.alipay', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/James200883/cordova-plugin-alipay.git' // the github repository URL for the plugin
})
export class AliPay {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  static pay(orderInfo: Object): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
