import React, { useState, useEffect, useCallback } from "react";
import { Auth, Hub } from "aws-amplify";
import MainPageLayout from "../../layouts/MainPageLayout";
import "./style/singin.scss";
import { Link } from "react-router-dom";
function Signin(children) {
  return (
    <MainPageLayout>
      <div id="signin-body">{children}</div>
    </MainPageLayout>
  );
}

export default Signin;
