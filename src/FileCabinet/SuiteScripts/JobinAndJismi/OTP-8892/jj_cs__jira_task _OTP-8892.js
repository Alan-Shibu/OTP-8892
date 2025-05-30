/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N/log', 'N/record'],
/**
 * @param{log} log
 * @param{record} record
 */
function(log, record) {
    
    
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

    function performUpdate(){
        if(scriptContext.fieldId === 'defaultaddress')
        {
            
            scriptContext.currentRecord.setValue({fieldId:'custentity_jj_address_change_checkbox',value:true,ignoreFieldChange:true});
        }
        else{
            
            scriptContext.currentRecord.setValue({fieldId:'custentity_jj_address_change_checkbox', value:false,ignoreFieldChange:true});
        }
    }
    function fieldChanged(scriptContext) {
        
        
        performUpdate();
    }

   

    return {
        
        fieldChanged: fieldChanged,
        
    };
    
});
