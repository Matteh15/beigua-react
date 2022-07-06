import CookieConsent from "react-cookie-consent";

const Cookie = () => {
    return (
        <CookieConsent 
            location="bottom"
            style={{background:'#20202a'}}
            buttonStyle={{color:"#000", background:"#fff", fontSize:"14px"}}
            buttonText="Accetta cookies"
            expires={365}
            onAccept={(byScroll) => {
              alert(`Cookies accettati`);
            }}
            debug={true}
            enableDeclineButton
            acceptOnScroll
            acceptOnScrollPercentage={80}
            declineButtonText="Rifiuta i cookie"
            onDecline={() => {
              alert("Se scrollerai la pagina accetterai automaticamente i cookie.");
            }}
        >
            This site uses cookie. See our <a href="/privacy">privacy policy</a> for more.
        </CookieConsent>
    );
}
export default Cookie;