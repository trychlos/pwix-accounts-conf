# pwix:accounts-conf - README

## What is it ?

A Meteor package which gathers and shares configurations for `pwix:accounts-ui`, `pwix:accounts-tools` and others. No more, no less.

## Installation

This Meteor package is installable with the usual command:

```sh
    meteor add pwix:accounts-conf
```

## Usage

Just add the package to your application, and enjoy!

## What does it provide ?

### `AccountsConf`

The exported `AccountsConf` global object provides following items:

#### Functions

##### `AccountsConf.configure( o<Object> )`

The configuration of the package.

See [below](#configuration) to use it as a setter.

When used as a getter, you have to explicitely call the option function to get its value (see `pwix:options`).

Example:

```js
    const level = AccountsConf.configure().verbosity();
```

A reactive data source.

#### Constants

##### When choosing the emails publication mode

- `AccountsConf.C.EmailsPublication.PER_EMAIL`
- `AccountsConf.C.EmailsPublication.PER_USER`

##### When choosing the preferred label

- `AccountsConf.C.PreferredLabel.USERNAME`
- `AccountsConf.C.PreferredLabel.EMAIL_ADDRESS`

##### Verbosity level

- `AccountsConf.C.Verbose.NONE`
- `AccountsConf.C.Verbose.CONFIGURE`
- `AccountsConf.C.Verbose.SERVERDB`
- `AccountsConf.C.Verbose.PREFERREDLABEL`

## Configuration

The package's is configured through a call to the `AccountsConf.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Known configuration options are:

- `haveEmailAddress`
- `haveUsername`

    Whether the application wants its user accounts be configured with or without an email address (resp. a username), and whether it is optional or mandatory.

    For each of these terms, accepted values are:

    - `AccountsConf.C.Identifier.NONE`: the field is not displayed nor considered
    - `AccountsConf.C.Identifier.OPTIONAL`: the field is proposed to the user, but may be left empty
    - `AccountsConf.C.Identifier.MANDATORY`: the input field must be filled by the user

    At least one of these fields MUST be set as `AccountsConf.C.Identifier.MANDATORY`. Else, the default value will be applied.

    Defauts to:

    - `haveEmailAddress`: `AccountsConf.C.Identifier.MANDATORY`
    - `haveUsername`: `AccountsConf.C.Identifier.NONE`

    Please be conscious that some features of your application may want display an identifier for each user. It would be a security hole to let the application display a verified email address anywhere, as this would be some sort of spam magnet!

- `preferredLabel`

    When not explicitely specified, which label choose to qualify a user account ? Following values are accepted:

    - `AccountsConf.C.PreferredLabel.USERNAME`
    - `AccountsConf.C.PreferredLabel.EMAIL_ADDRESS`

    Defaults to `AccountsConf.C.PreferredLabel.EMAIL_ADDRESS`, though the actually displayed label heavily depends of the runtime configuration as we try to always display something. At the last, the returned label may be nothing else than the document identifier.

- `verbosity`

    The verbosity level as:

    - `AccountsConf.C.Verbose.NONE`

    or an OR-ed value of integer constants:

    - `AccountsConf.C.Verbose.CONFIGURE`

    Trace the configuration options.

    - `AccountsConf.C.Verbose.FUNCTIONS`

    Trace all functions calls.

    Defaults to `AccountsConf.C.Verbose.CONFIGURE`.

    The configured verbosity level should be considered as only relevant for this `pwix:accounts-conf` package. Other packages which make use of this one should have their own verbosity configuration.

All configuration options can be provided either by their value, or as a function which will be called without argument and must returns the value.

Please note that `AccountsConf.configure()` method should be called in the same terms both in client and server sides.

Remind too that Meteor packages are instanciated at application level. They are so only configurable once, or, in other words, only one instance has to be or can be configured. Addtionnal calls to `AccountsConf.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

## NPM peer dependencies

In accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we do not hardcode NPM dependencies in `package.js`. Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.0.0:

```js
    'lodash': '^4.17.0'
```

Each of these dependencies should be installed at application level:

```sh
    meteor npm install <package> --save
```

## Translations

None at the moment.

## Cookies and comparable technologies

None at the moment.

## Issues & help

In case of support or error, please report your issue request to our [Issues tracker](https://github.com/trychlos/pwix-accounts-conf/issues).

---
P. Wieser
- Last updated on 2024, Jul. 9th
