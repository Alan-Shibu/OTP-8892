/** 
 * @NApiVersion 2.1 
 * @NScriptType ClientScript 
 * @NModuleScope SameAccount 
 */ 
/************************************************************************************* 
 *  
 * ${OTP-8892} : ${Identify change in Address} 
 * 
 * 
**************************************************************************************
 * 
 * Author: Jobin and Jismi IT Services 
 * 
 * Date Created : 30-June-2025 
 * 
 * Description : This script is for manipulating the status of a custom checkbox in the 
 * customer record, based on the change in customer's address.If any change in the address
 * is recorded, the checkbox should be checked and vice-versa.The fnctionality will work
 * only in the 'edit' context. 
 * 
 * REVISION HISTORY 
 * 
 * @version 1.0   01-August-2022 :  The initial build was created by JJ0400 
 * 
 * 
 *************************************************************************************/ 
define(["N/log", "N/record"], 
/**
 * @param{log} log
 * @param{record} record
 */
function (log, record) {
  /**
   * Function to be executed when field is changed.
   *
   * @param {Object} scriptContext
   * @param {Record} scriptContext.currentRecord - Current form record
   * @param {string} scriptContext.sublistId - Sublist name
   * @param {string} scriptContext.fieldId - Field name
   * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
   * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
   *
   * @since 2015.2
   */

  let flag = 0;


  function fieldChanged(scriptContext) {
    try {
      if (scriptContext.fieldId !== "custentity_jj_address_change_checkbox") {
        detectAddressChange(scriptContext);
      }
    } catch (e) {
      log.error("Error caught", e.message);
    }
  }

  /** 
* Function to manipulate  the checkbox based on change in address 
* @param {Object} scriptContext  
* @returns {void} 
*/ 
  function detectAddressChange(scriptContext) {
    try {
      const newRec = scriptContext.currentRecord;

      if (scriptContext.fieldId === "defaultaddress") {
        newRec.setValue({
          fieldId: "custentity_jj_address_change_checkbox",
          value: true,
        });

        flag = 1;
      } else {
        if (flag === 1) {
          newRec.setValue({
            fieldId: "custentity_jj_address_change_checkbox",
            value: true,
          });
        } else {
          newRec.setValue({
            fieldId: "custentity_jj_address_change_checkbox",
            value: false,
          });
        }
      }
    } catch (e) {
      console.log("Error caught", e.message);
    }
  }

  return {
    fieldChanged: fieldChanged,
  };
});
