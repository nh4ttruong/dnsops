// =========================
// Pre-defined configuration 
// =========================

// Meta settings for individual records.
var CF_PROXY_OFF = {"cloudflare_proxy": "off"};     // Proxy disabled.
var CF_PROXY_ON = {"cloudflare_proxy": "on"};       // Proxy enabled.
var CF_PROXY_FULL = {"cloudflare_proxy": "full"};   // Proxy+Railgun enabled.
// Per-domain meta settings:
// Proxy default off for entire domain (the default):
var CF_PROXY_DEFAULT_OFF = {"cloudflare_proxy_default": "off"};
// Proxy default on for entire domain:
var CF_PROXY_DEFAULT_ON = {"cloudflare_proxy_default": "on"};
// UniversalSSL off for entire domain:
var CF_UNIVERSALSSL_OFF = { cloudflare_universalssl: "off" };
// UniversalSSL on for entire domain:
var CF_UNIVERSALSSL_ON = { cloudflare_universalssl: "on" };

DEFAULTS(
    NAMESERVER_TTL("12h"),
    DefaultTTL("1"),
    CF_PROXY_DEFAULT_OFF,
);

var REG_NONE = NewRegistrar("none");

// Common IP Addresses
var addr = {
    "default": IP("10.0.0.10"),
    "private_ingress_uat": IP("10.0.0.70"),
    "public_ingress_uat": IP("203.0.113.19"),
    "private_ingress_production": IP("10.0.1.70"),
    "public_ingress_production": IP("203.0.113.21"),
}