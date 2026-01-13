// Zone: example.com
// Do not edit directly in Cloudflare Dashboard
// Documentation: https://docs.dnscontrol.org/provider/cloudflareapi

require("../common.js");

var DP_EXAMPLE_COM = NewDnsProvider("cloudflare_example_com");

D("example.com", REG_NONE, DnsProvider(DP_EXAMPLE_COM), {no_ns: 'true'},
  A("@", addr.default),

  // Web applications
  A("www", addr.default),
  A("app", addr.public_ingress_production),
  A("api", addr.public_ingress_production),
  
  // Staging/UAT environment
  A("staging", addr.private_ingress_uat),
  A("api-staging", addr.private_ingress_uat),
  
  // Internal tools
  A("git", addr.default),
  A("registry", addr.default),
  A("docs", addr.default),
  A("monitor", addr.default),

  // CNAME Records
  CNAME("blog", "example.github.io."),
  CNAME("mail", "ghs.google.com."),

  // MX Records (Google Workspace example)
  MX("@", 1, "aspmx.l.google.com."),
  MX("@", 5, "alt1.aspmx.l.google.com."),
  MX("@", 5, "alt2.aspmx.l.google.com."),
  MX("@", 10, "alt3.aspmx.l.google.com."),
  MX("@", 10, "alt4.aspmx.l.google.com."),

  // TXT Records
  TXT("@", "v=spf1 include:_spf.google.com ~all"),

  // NS Records (if managing externally)
  // NAMESERVER_TTL("1"),
  // NAMESERVER("ns1.example.com."),
  // NAMESERVER("ns2.example.com."),
);
