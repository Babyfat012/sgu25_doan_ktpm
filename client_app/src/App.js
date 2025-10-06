import "./CSS/animate.css";
import "./CSS/helper.css";
import "./CSS/magnific-popup.css";
import "./CSS/material-design-iconic-font.min.css";
import "./CSS/meanmenu.css";
import "./CSS/nice-select.css";
import "./CSS/slick.css";
import "./CSS/venobox.css";
import "./CSS/style.css";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Share/Header";
import Footer from "./Share/Footer";
// GIAI ĐOẠN 1: Loại bỏ các component không cần thiết
// import Checkout from "./Checkout/Checkout";
// import OrderSuccess from "./Order/OrderSuccess";
// import OrderFail from "./Order/OrderFail";
// import OrderMomo from "./Order/OrderMomo";
import { lazy, Suspense } from "react";

const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Home/Home")), 2000);
  });
});

const Shop = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Shop/Shop")), 2000);
  });
});

const Detail_Product = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./DetailProduct/Detail_Product")), 2000);
  });
});

// GIAI ĐOẠN 2: Thêm lại Cart và Favorite
const Cart = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Cart/Cart")), 2000);
  });
});

const Favorite = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Favorite/Favorite")), 2000);
  });
});

// GIAI ĐOẠN 3: Thêm Checkout, History, Order
const Checkout = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Checkout/Checkout")), 2000);
  });
});

const History = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./History/History")), 2000);
  });
});

const OrderSuccess = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Order/OrderSuccess")), 2000);
  });
});

const OrderFail = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Order/OrderFail")), 2000);
  });
});

const OrderMomo = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Order/OrderMomo")), 2000);
  });
});

// GIAI ĐOẠN 3: Vẫn chưa có Event
// const Event = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("./Event/Event")), 2000);
//   });
// });

// const DetailEvent = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("./Event/DetailEvent")), 2000);
//   });
// });

// const History = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("./History/History")), 2000);
//   });
// });

const Contact = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Contact/Contact")), 2000);
  });
});

const SignIn = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Auth/SignIn")), 2000);
  });
});

const SignUp = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Auth/SignUp")), 2000);
  });
});

// GIAI ĐOẠN 3: Loại bỏ comment cũ, History đã được thêm ở trên
// const History = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("./History/History")), 2000);
//   });
// });

const Profile = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Profile/Profile")), 2000);
  });
});

const Search = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Search/Search")), 2000);
  });
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense
          fallback={
            <div className="sk-cube-grid">
              <div className="sk-cube sk-cube1"></div>
              <div className="sk-cube sk-cube2"></div>
              <div className="sk-cube sk-cube3"></div>
              <div className="sk-cube sk-cube4"></div>
              <div className="sk-cube sk-cube5"></div>
              <div className="sk-cube sk-cube6"></div>
              <div className="sk-cube sk-cube7"></div>
              <div className="sk-cube sk-cube8"></div>
              <div className="sk-cube sk-cube9"></div>
            </div>
          }
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop/:id" component={Shop} />
            <Route path="/detail/:id" component={Detail_Product} />
            
            {/* GIAI ĐOẠN 2: Thêm lại Cart và Favorite */}
            <Route path="/cart" component={Cart} />
            <Route path="/favorite" component={Favorite} />
            
            {/* GIAI ĐOẠN 3: Thêm Checkout, History, Order */}
            <Route path="/checkout" component={Checkout} />
            <Route path="/history" component={History} />
            <Route path="/ordersuccess" component={OrderSuccess} />
            <Route path="/orderfail" component={OrderFail} />
            <Route path="/ordermomo" component={OrderMomo} />
            
            {/* GIAI ĐOẠN 3: Vẫn chưa có Event */}
            {/* <Route path="/event" component={Event} /> */}
            {/* <Route exact path="/event" component={Event} /> */}
            {/* <Route path="/event/:id" component={DetailEvent} /> */}
            {/* <Route path="/success" component={OrderSuccess} /> */}
            {/* <Route path="/fail" component={OrderFail} /> */}
            {/* <Route path="/momo" component={OrderMomo} /> */}
            {/* <Route path="/history" component={History} /> */}

            <Route path="/contact" component={Contact} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/search" component={Search} />
          </Switch>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
