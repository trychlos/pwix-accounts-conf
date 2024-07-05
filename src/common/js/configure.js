/*
 * pwix:accounts-conf/src/common/js/config.js
 */

import _ from 'lodash';

import { ReactiveVar } from 'meteor/reactive-var';

let _conf = {};
AccountsConf._conf = new ReactiveVar( _conf );

AccountsConf._defaults = {
    verbosity: AccountsConf.C.Verbose.CONFIGURE
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both by the client and the server.
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
AccountsConf.configure = function( o ){
    if( o && _.isObject( o )){
        _conf = AccountsConf._conf.get();
        _.merge( _conf, AccountsConf._defaults, o );
        AccountsConf._conf.set( _conf );
        // be verbose if asked for
        if( _conf.verbosity & AccountsConf.C.Verbose.CONFIGURE ){
            //console.log( 'pwix:accounts-manager configure() with', o, 'building', AccountsList._conf );
            console.log( 'pwix:accounts-manager configure() with', o );
        }
    }
    // also acts as a getter
    return AccountsConf._conf.get();
}

_.merge( _conf, AccountsConf._defaults );
AccountsConf._conf.set( _conf );
