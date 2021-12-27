import React, { Dispatch, SetStateAction } from "react";
import Filters from "../filters/Filters";
import { Container } from "react-bootstrap";

type SidebarPropsType = {
  setStatus: Dispatch<SetStateAction<string>>;
  setGender: Dispatch<SetStateAction<string>>;
  setSpecies: Dispatch<SetStateAction<string>>;
  setPageNumber: Dispatch<SetStateAction<number>>;
};

const Sidebar: React.FC<SidebarPropsType> = ({
  setSpecies,
  setGender,
  setPageNumber,
  setStatus,
}) => {
  return (
    <Container>
      <Filters
        setSpecies={setSpecies}
        setGender={setGender}
        setStatus={setStatus}
        setPageNumber={setPageNumber}
      />
    </Container>
  );
};

export default Sidebar;
