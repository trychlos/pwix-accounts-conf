/*
 * pwix:accounts-conf/src/common/js/trace.js
 */

_verbose = function( level ){
    if( AccountsConf.configure().verbosity() & level ){
        let args = [ ...arguments ];
        args.shift();
        console.debug( ...args );
    }
};

_trace = function( functionName ){
    _verbose( AccountsConf.C.Verbose.FUNCTIONS, ...arguments );
};
