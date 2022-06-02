var navigation = `
<div class="nav">
      <div class="wrapper">
        <nav>
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-menu" />
          <label for="show-menu" class="menu-icon"
            ><i class="fas fa-bars"></i
          ></label>
          <div class="logo"><a href="/">
          <img src="img/logo.png" alt="logo" /></a></div>
          <div class="content">
            <ul class="links">
              <li>
                <a href="#" class="desktop-link">ACCOUNTS</a>
                <input type="checkbox" id="show-accounts" />
                <label for="show-accounts">ACCOUNTS</label>
                <ul>
                  <li>
                    <a href="trade-with-us.html">TRADE WITH TRADERS1O1</a>
                  </li>
                  <li>
                    <a href="account-types.html">ACCOUNT TYPES</a>
                  </li>
                  <li>
                    <a href="segregated-accounts.html">SEGREGATED ACCOUNTS</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" class="desktop-link">PLATFORMS</a>
                <input type="checkbox" id="show-platforms" />
                <label for="show-platforms">PLATFORMS</label>
                <ul>
                  <li>
                    <a href="web-trader.html">WEB TRADER</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" class="desktop-link">TOOLS</a>
                <input type="checkbox" id="show-tools" />
                <label for="show-tools">TOOLS</label>
                <ul>
                  <li>
                    <a href="trading-hours.html">SPREAD AND TRADING HOURS</a>
                  </li>
                  <li>
                    <a href="trade-glossary.html">TRADE GLOSSARY</a>
                  </li>
                  <li>
                    <a href="account-faq.html">ACCOUNT FAQ</a>
                  </li>
                  <li>
                    <a href="account-funding.html">ACCOUNT FUNDING</a>
                  </li>
                </ul>
              </li>
              <div class="nav-btns hide-for-desktop">
                <a href="https://client.traders1o1.com/" class="nav-btn-login"
                  >Login</a
                >
                <a
                  href="https://client.traders1o1.com/register"
                  class="nav-btn-open-acc"
                  >Open Account</a
                >
              </div>
            </ul>
          </div>
          <div class="nav-btns hide-for-mobile">
            <a href="https://client.traders1o1.com/" class="nav-btn-login"
              >Login</a
            >
            <a
              href="https://client.traders1o1.com/register"
              class="nav-btn-open-acc"
              >Open Account</a
            >
          </div>
        </nav>
      </div>

    </div>  
`;

let footer = `
<div class="container footer-menu">
          <div class="row py-4">

            <div class=" col-12 col-sm-6 col-lg-3 pl-5 mb-4">
                       <p class="mb-1"><b>ACCOUNT</b></p>
                       <a href="https://client.traders1o1.com/"><span>LOG IN</span></a>
                       <a href="https://client.traders1o1.com/register/"><span>SIGN UP</span></a>
                </div>
               <div class=" col-12 col-sm-6 col-lg-3  pl-5 mb-4">
                       <p class="mb-1"><b>ABOUT US</b></p>
                       <a href="about-us.html"><span>ABOUT US</span></a>
                       <a href="contact-us.html"><span>CONTACT</span></a>
                       <a href="security.html"><span>SECURITY</span></a>
                       <a href="careers.html"><span>CAREERS</span></a>
                </div>
                <div class=" col-12 col-sm-6 col-lg-3  pl-5 mb-4">
                       <p class="mb-1"><b>ASSETS</b></p>
                       <a href="forex.html"><span>FOREX</span></a>
                       <a href="futures.html"><span>FUTURES</span></a>
                       <a href="commodities.html"><span>COMMODITIES</span></a>
                       <a href="indices.html"><span>INDICES</span></a>
                       <a href="stocks.html"><span>STOCKS CFD</span></a>
                       <a href="algo-trading.html"><span>ALGO TRADING</span></a>
                </div>
                <div class=" col-12 col-sm-6 col-lg-3  pl-5 mb-4">
                      <p class="mb-1"><b> RESOURCES</b></p>
                       <a href="faq.html"><span> FAQ</span></a>
                        <a href="terms-and-conditions.html"><span>TERMS AND CONDITIONS</span></a>
                        <a href="risk-disclosure.html"><span>RISK DISCLOSURE</span></a>
                        <a href="privacy-policy.html"><span>PRIVACY POLICY</span></a>
                        <a href="anti-money-laundering.html"><span>ANTI-MONEY LAUNDERING</span></a>
                        <a href="kyc-policy.html"><span>KYC POLICY</span></a>
                </div>

           </div>
        </div>

        <div class="container-fluid text-center">
            <!--<div class="row">
                <h4 class="mt-5 py-3 mb-4 text-center w-100 gauback">RISK WARNING</h4>
            </div>-->
        </div>
        <div class="container ">
        <p>Trading in Forex and CFDs carries a high level of risk and can result in the loss of part or all of your investment. Trading in Forex and CFDs may not be appropriate for all investors. You should be aware of all the risks associated with Forex and CFD trading and seek for independent advice. Past performance does not constitute a reliable indication of future results. Forecasts for the future do not constitute a reliable indicator of future performance. Copyright for the pages and for the screens displaying the pages, and for the information, material and their arrangement, is owned by Traders 101 all rights reserved.</p>

        <p>
        This information is intended for investors outside the United States who are not US/Japanese citizens and residents. This website is intended for informational purposes only. This website is not directed at any jurisdiction and is not intended for any use that would be contrary to local law or regulation. The products described on this are not offered and may not be sold in the United States/Japan or to US/Japanese citizens and residents.
        </p>


     </div>
     <div class="container text-center copy-text pb-1 pt-5"><p>© 2022 ALL right reserved INTERNATIONAL INFORMATION TECHNOLOGY FINANCE(IITF) LIMITED</p></div>
       

       <noscript>
 <img height="1" width="1" 
src="https://www.facebook.com/tr?id=3839717049375365&ev=PageView
&noscript=1"/>
</noscript>
    `;

document.getElementById("navigation").innerHTML = navigation;
document.getElementById("footer").innerHTML = footer;

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}
function changeTheme(theme) {
  localStorage.setItem("theme", theme);
  location.reload(true);
}
$("head").append(
  '<link rel="stylesheet" href="css/' + localStorage.getItem("theme") + '.css">'
);

// <!-- Facebook Pixel Code -->

!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = "2.0";
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(
  window,
  document,
  "script",
  "https://connect.facebook.net/en_US/fbevents.js"
);
fbq("init", "3839717049375365");
fbq("track", "PageView");

// <!-- End Facebook Pixel Code -->
