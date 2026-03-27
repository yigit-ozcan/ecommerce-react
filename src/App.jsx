import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, verifyToken } from "./store/actions/clientActions";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      dispatch(setUser(JSON.parse(user)));
    }

    // 🔥 VERIFY ÇAĞRISI
    dispatch(verifyToken());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
