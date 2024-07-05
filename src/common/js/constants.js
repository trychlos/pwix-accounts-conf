/*
 * pwix:accounts-conf/src/common/js/constants.js
 */

AccountsConf.C = {

    // when subscribing to 'emails' publication, whether to have a single row per email address
    //  or a single row per user
    EmailsPublication: {
        PER_EMAIL:  'EMAIL',
        PER_USER:   'USER'
    },

    // when choosing a preferred label
    PreferredLabel: {
        USERNAME:      'USERNAME',
        EMAIL_ADDRESS: 'EMAIL_ADDRESS'
    },

    // verbosity levels
    Verbose: {
        NONE:           0,
        CONFIGURE:      0x01 << 0,
        FUNCTIONS:      0x01 << 1
    }
};
