import React, { useEffect, useState } from "react";
import { CharacterCard, InfoType } from "../../types";
import Search from "../search/Search";
import { Col, Container, Row } from "react-bootstrap";
import Filters from "../filters/Filters";
import Cards from "../cards/Cards";
import Pagination from "../pagination/Pagination";

const Home: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [species, setSpecies] = useState<string>("");

  const [fetchedData, updateFetchedData] = useState<Array<CharacterCard> | undefined>([]);
  const [info, setInfo] = useState<InfoType>({ count: 0, next: "", pages: 0, prev: "" });
  const results = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((response) => response.json());
      updateFetchedData(data.results);
      setInfo(data.info);
    })();
  }, [api]);

  fetchedData?.sort(function (a, b) {
    const charA = a.name.toUpperCase();
    const charB = b.name.toUpperCase();
    if (charA < charB) {
      return -1;
    }
    if (charA > charB) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="App">
      <h1 className="text-center mb-4 berlin text-danger">&#10077; Characters &#10078;</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <Container>
        <Row>
          <Filters
            setSpecies={setSpecies}
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
          />
          <Col xl={9} lg={9} md={8} sm={8}>
            <Row>
              <Cards page="/" results={results} />
            </Row>
          </Col>
        </Row>
      </Container>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
};

export default Home;
