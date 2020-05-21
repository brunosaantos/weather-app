import React from "react";
import { Container, MenuButton } from "./styles";
import { ReactComponent as IcMenuHamburger } from "../../assets/icons/icMenuHamburger.svg";

function Header() {
  return (
    <Container>
      <MenuButton>
        <IcMenuHamburger />
      </MenuButton>
      <span>Pelotas</span>
    </Container>
  );
}

export default Header;
