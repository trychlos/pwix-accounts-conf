/*
 * pwix:accounts-conf/src/common/js/config.js
 */

import _ from 'lodash';

import { acOptions } from '../classes/options.class.js';

AccountsConf._conf = {};

AccountsConf._defaults = {
    haveEmailAddress: AccountsConf.C.Identifier.MANDATORY,
    haveUsername: AccountsConf.C.Identifier.NONE,
    preferredLabel: AccountsConf.C.PreferredLabel.EMAIL_ADDRESS,
    verbosity: AccountsConf.C.Verbose.CONFIGURE
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both by the client and the server.
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
AccountsConf.configure = function( o ){
    // acts as a setter
    if( o && _.isObject( o )){
        _.merge( AccountsConf._conf, AccountsConf._defaults, o );
        AccountsConf._opts.base_set( AccountsConf._conf );
        _verbose( AccountsConf.C.Verbose.CONFIGURE, 'pwix:accounts-manager configure() with', o );
    }
    // and as a getter too
    return AccountsConf._opts;
}

_.merge( AccountsConf._conf, AccountsConf._defaults );
AccountsConf._opts = new acOptions( AccountsConf._conf );
