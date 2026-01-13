// Zone: mycompany.io
// Do not edit directly in Cloudflare Dashboard
// Documentation: https://docs.dnscontrol.org/provider/cloudflareapi

require("../common.js");

var DP_MYCOMPANY_IO = NewDnsProvider("cloudflare_mycompany_io");

D("mycompany.io", REG_NONE, DnsProvider(DP_MYCOMPANY_IO), {no_ns: 'true'},
  A("@", addr.default),
  A("www", addr.public_ingress_production),
  A("app", addr.public_ingress_production),
  A("api", addr.public_ingress_production),

  // Staging environment
  A("staging", addr.public_ingress_uat),
  A("api-staging", addr.public_ingress_uat),

  // NS (if using external nameservers)
  // NAMESERVER_TTL("1"),
  // NAMESERVER("ns1.cloudflare.com."),
  // NAMESERVER("ns2.cloudflare.com."),
);
