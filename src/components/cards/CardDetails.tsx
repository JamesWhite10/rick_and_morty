import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterCard } from "../../types";
import { Container } from "react-bootstrap";

const CardDetails = () => {
  const [fetchedData, updateFetchedData] = useState<CharacterCard | undefined>({
    created: "",
    episode: undefined,
    gender: "",
    id: 0,
    image: "",
    location: { name: "", url: "" },
    origin: { name: "", url: "" },
    species: "",
    status: "",
    type: "",
    url: "",
    name: "",
  });
  const { id } = useParams();

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((response) => response.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div>
      <Container className="d-flex justify-content-center mb-4">
        <div className="d-flex flex-column gap-2">
          <h1 style={{ color: "#d92f09", marginTop: "-30px" }} className="text-center berlin">
            {fetchedData?.name}
          </h1>
          <img
            style={{ borderRadius: "10px" }}
            src={fetchedData?.image}
            alt={fetchedData?.name}
            className="img-fluid"
          />
          {(() => {
            if (fetchedData?.status === "Dead") {
              return (
                <div
                  style={{ borderRadius: "5px" }}
                  className={`bg-danger fs-5 p-2 text-center text-white fw-bold`}
                >
                  {fetchedData?.status}
                </div>
              );
            } else if (fetchedData?.status === "unknown") {
              return (
                <div
                  style={{ borderRadius: "5px" }}
                  className={`bg-secondary fs-5 p-2 text-center text-white fw-bold`}
                >
                  {fetchedData?.status}
                </div>
              );
            } else {
              return (
                <div
                  style={{ borderRadius: "5px" }}
                  className={`bg-success fs-5 p-2 text-center text-white fw-bold`}
                >
                  {fetchedData?.status}
                </div>
              );
            }
          })()}
          <div className="content">
            <div className="">
              <span className="fw-bold p-3">Gender : {fetchedData?.gender}</span>
            </div>
            <div className="">
              <span className="fw-bold p-3">Species : {fetchedData?.species}</span>
            </div>
            <div className="">
              <span className="fw-bold p-3">Type : {fetchedData?.type}</span>
            </div>
            <div className="">
              <span className="fw-bold p-3">Location : {fetchedData?.location.name}</span>
            </div>
            <div className="">
              <span className="fw-bold p-3">Origin : {fetchedData?.origin.name}</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CardDetails;
