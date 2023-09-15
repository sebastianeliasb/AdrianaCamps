import React from "react";
import WebNav from "../../Components/WebNav";
import "./style/policies.scss";
import ReactMarkdown from "react-markdown";
import useFetch from "../../hooks/useFetch";
//Layout
import MainPageLayout from "../../layouts/MainPageLayout";
import ContentContainer from "../../Components/ContentContainer/ContentContainer";
function Policies() {
  const { data, loading, error } = useFetch("api/politica-generals");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const policiesData = data.data[0].attributes;
  const legalWarn = policiesData.Aviso_legal;
  const cookies = policiesData.Cookies;
  const privacy = policiesData.Privacidad;

  return (
    <>
      {" "}
      <MainPageLayout backgroundColor={"beige"}>
        <WebNav />
        <ContentContainer>
          <div className="policies_container">
            <h2>Aviso Legal</h2>
            <ReactMarkdown>{legalWarn}</ReactMarkdown>
            <h2>Política de cookies</h2>
            <ReactMarkdown>{cookies}</ReactMarkdown>
            <h2>Política de privacidad</h2>
            <ReactMarkdown>{privacy}</ReactMarkdown>
          </div>
        </ContentContainer>
      </MainPageLayout>
    </>
  );
}

export default Policies;
