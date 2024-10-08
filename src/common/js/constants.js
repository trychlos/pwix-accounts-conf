/*
 * pwix:accounts-conf/src/common/js/constants.js
 */

AccountsConf.C = {

    // whether email address (resp. username) is used by the application
    Identifier: {
        NONE:      'NONE',
        MANDATORY: 'MANDATORY',
        OPTIONAL:  'OPTIONAL'
    },

    // password estimated strength
    Password: {
        VERYWEAK:   'AC_PWD_VERYWEAK',
        WEAK:       'AC_PWD_WEAK',
        MEDIUM:     'AC_PWD_MEDIUM',
        STRONG:     'AC_PWD_STRONG',
        VERYSTRONG: 'AC_PWD_VERYSTRONG'
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
