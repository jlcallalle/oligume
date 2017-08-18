<?php
/** 
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'wordpress');

/** Tu nombre de usuario de MySQL */
define('DB_USER', 'root');

/** Tu contraseña de MySQL */
define('DB_PASSWORD', 'root');

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', 'localhost');

/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8mb4');

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '+~VP1bdpLssq%!*;eag8P1$L.M64+uz!xNX&[:M6/,dvUv[vCbQ6lcD114oJt|2T');
define('SECURE_AUTH_KEY', 'o%1/@Ncj?D;zxxXBd2ZjyZUF_uz6ae2,KnD~rP1q(OY#_v5tNKmX[Lb?e>3 >~Qe');
define('LOGGED_IN_KEY', 'zGdC/-J@`yv!f//^_0{A,iUCzg`ZJ;m&v?b1c}uUsz[|:Kkze{811,otZh659lJw');
define('NONCE_KEY', 'EKO$1$JGfoG-Nn5aO&Wtt]!&)9DbO|0CsUg!!qmb3Whv4fg)*0}eoF8dM-G!<r3*');
define('AUTH_SALT', '?v~-:%vF jAkfl BF9I8>6$c_f1#pb8ccBv.f/p>ni`+YIP~<Bt7jMS&/,O#^,L3');
define('SECURE_AUTH_SALT', 'cD$KF>L7d{MZ|id9<[7Bt6|o-dl%UGeh:4lOzvH& /p(m<]c|tC0?w.%U]ou&W;g');
define('LOGGED_IN_SALT', ')n(oYS.2`Ew!*Mgj8QFIt=lVS+/L~mn!b!%#jmT?eUdN&`H+>Wh]&]GT=PQ}%k+u');
define('NONCE_SALT', 'zXWVs}47D|!%R1vggNqoub5JBm%=9$Fn&S%z^wMKY,.gl%W[`9N&/!aNANP0.Jcc');

/**#@-*/

/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix  = 'wp_';


/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
define('WP_DEBUG', false);

/* ¡Eso es todo, deja de editar! Feliz blogging */

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

