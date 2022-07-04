import CookieConsent from "react-cookie-consent";

const Cookie = () => {
    return (
        <CookieConsent 
            debug={true}
            location="bottom"
            style={{background:'#20202a'}}
            buttonStyle={{color:"#000", background:"#fff", fontSize:"14px"}}
            buttonText="Ok great"
            expires={365}
        >
            This site uses cookie. See our <a href="/privacy">privacy policy</a> for more.
        </CookieConsent>
    );
}
export default Cookie;