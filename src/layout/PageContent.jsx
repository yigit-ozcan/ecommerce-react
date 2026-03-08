import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";

function PageContent() {
  return (
    <main className="flex-1">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </main>
  );
}

export default PageContent;
