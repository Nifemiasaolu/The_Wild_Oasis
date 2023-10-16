import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Account from "./pages/Account";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="account" element={<Account />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import styled from "styled-components";
// import GlobalStyles from "./styles/GlobalStyles";
// import Button from "./ui/Button";
// import Input from "./ui/Input";
// import Heading from "./ui/Heading";
// import Row from "./ui/Row";

// const StyledApp = styled.div`
//   /* background-color: orangered; */
//   padding: 20px;
// `;

// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <StyledApp>
//         <Row>
//           <Row type="horizontal">
//             <Heading as="h1">The Wild Oasis</Heading>
//             <div>
//               <Heading as="h2">Check In and Out</Heading>
//               <Button onClick={() => alert("Check In")}>Check In</Button>
//               <Button
//                 variation="secondary"
//                 size="small"
//                 onClick={() => alert("Check Out")}
//               >
//                 Check Out
//               </Button>
//             </div>
//           </Row>

//           <Row>
//             <Heading as="h3">Form</Heading>
//             <div>
//               <Input type="number" placeholder="Number of guests" />
//               <Input type="number" placeholder="Number of guests" />
//             </div>
//           </Row>
//         </Row>
//       </StyledApp>
//     </>
//   );
// }

// export default App;
