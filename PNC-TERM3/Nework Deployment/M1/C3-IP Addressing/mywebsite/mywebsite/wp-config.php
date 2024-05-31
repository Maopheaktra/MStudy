<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mywebsite_jn' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ' z?wILy za#Vb{{bZ12z?0r<g~e<x0.ounQSeQ0}!9LZ.=&T1-HgWjC|DD_5ehwm' );
define( 'SECURE_AUTH_KEY',  'C0SeQ(xyNO?U}KttEG5OLa9AoGw7^|_h}O9-$xOrGUTy@|K`|.BWwwM}8c&n^Y$7' );
define( 'LOGGED_IN_KEY',    'w`kQ[Vu~rpDQ:YwwQ`:9%H$We:RZeX,Uj0EVEz+&jEj$-GMm/*.M9boI~*.67ck~' );
define( 'NONCE_KEY',        'Ct:3pM@P5zVDKC0%L*%$uT3w%0<Kier:&j)[)@kHroYtbBF0nWOiTcUN}}@kduT*' );
define( 'AUTH_SALT',        'B-6w!xBT:;7>GS8ZX7KAs0JEE;)wnzrl47q[gDNHsVEMcf;^`gT}Uh]bYHdu<R?C' );
define( 'SECURE_AUTH_SALT', 'oPWRQ:_@Ab7Q/!F=3<nV9^JW=Oi:mr2Z--3o@8%Z8dsf?H:`z3^A}WBC#Tv4?8pD' );
define( 'LOGGED_IN_SALT',   'hN@J<]CTYEHsRnxHrRzXh9B68$y)kX3$7^^HLjo5R{GHc5>O;lY-;}?[,/5v~.oY' );
define( 'NONCE_SALT',       '@BcJF0CvoD)_UqhbI7KI2SNtC@L.$5J-Njxk{tYg^.$S4b%Pu.NXd?Qo)>WkBFa-' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
