import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "./style/cookies.scss";

function CookiesWarning() {
  const [cookies, setCookie] = useCookies(["accept-cookies"]);
  const [showWarning, setShowWarning] = useState(!cookies["accept-cookies"]);
  const [slideClass, setSlideClass] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setSlideClass("slide-up");
    }, 1000);
  }, []);

  function handleAccept() {
    setSlideClass("slide-down");
    setTimeout(() => {
      setCookie("accept-cookies", true, { path: "/" });
      setShowWarning(false);
    }, 1000);
  }

  return (
    <>
      {showWarning && (
        <div className={`cookies-warning ${slideClass}`}>
          <p>
            This website uses cookies to ensure you get the best experience on
            our website.
          </p>
          <button className="cookies-btn" onClick={handleAccept}>
            Accept
          </button>
        </div>
      )}
    </>
  );
}

export default CookiesWarning;
