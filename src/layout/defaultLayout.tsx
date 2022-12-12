import { Link, Outlet } from "react-router-dom";
import { Header, NavBar } from "./styles";

import logoImg from "../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { ButtonNav } from "../components/ButtonNav";

export function DefaultLayout() {
  return (
    <div>
      <Header>
        <Link to="/">
          <img src={logoImg} alt="" />
        </Link>
        <NavBar>
          <ButtonNav
            icon={<MapPin size={22} weight="fill" />}
            text="Porto Alegre, RS"
            variant="purple"
            state="empty"
            isLink={false}
          />
          <ButtonNav
            icon={<ShoppingCart size={22} weight="fill" />}
            variant="yellow"
            state="empty"
            amountPurchases="3"
            isLink={true}
          />
        </NavBar>
      </Header>
      <Outlet />
    </div>
  );
}
