/*
 * pwix:accounts/src/common/classes/ac_options_global_conf.class.js
 *
 * This class manages the configuration options.
 */

import '../js/constants.js';

import { Options } from 'meteor/pwix:options';

export class acOptions extends Options.Base {

    // static data
    //

    // have email address / username
    static Identifiers = [
        AccountsConf.C.Identifier.NONE,
        AccountsConf.C.Identifier.MANDATORY,
        AccountsConf.C.Identifier.OPTIONAL
    ];

    // preferred user label
    static PreferredLabels = [
        AccountsConf.C.PreferredLabel.USERNAME,
        AccountsConf.C.PreferredLabel.EMAIL_ADDRESS
    ];

    // private data
    //

    // private functions
    //

    // public data
    //

    // public methods
    //

    /**
     * Constructor
     * @param {Object} options the options to be managed
     * 
     * The Options base class takes care of managing the known options, either as a value, or as a function which return a value.
     * In some case where the expected value is a string, the base class also can accept an object with 'i18n' key.
     * All options are accepted as long as the corresponding getter/setter method exists in this derived class.
     * 
     * @returns {acOptions}
     */
    constructor( options ){
        super( options );
        return this;
    }

    /**
     * Getter/Setter
     * @param {String|Function} value whether the application wants an email address
     * @returns {String}
     */
    haveEmailAddress( value ){
        return this.base_gsStringObjectFn( 'haveEmailAddress', value, { default: AccountsConf._defaults.haveEmailAddress, ref: acOptions.Identifiers });
    }

    /**
     * Getter/Setter
     * @param {String|Function} value whether the application wants a username
     * @returns {String}
     */
    haveUsername( value ){
    return this.base_gsStringObjectFn( 'haveUsername', value, { default: AccountsConf._defaults.haveUsername, ref: acOptions.Identifiers });
    }

    /**
     * Getter/Setter
     * @param {String|Function} value preferred label when displaying a user
     * @returns {String}
     */
    preferredLabel( value ){
        return this.base_gsStringObjectFn( 'preferredLabel', value, { default: AccountsConf._defaults.preferredLabel, ref: acOptions.PreferredLabels });
    }

    /**
     * Getter/Setter
     * @param {Integer|Function} value verbosity level
     * @returns {Integer}
     */
    verbosity( value ){
        return this.base_gsIntegerFn( 'verbosity', value, { default: AccountsConf._defaults.verbosity });
    }
}
