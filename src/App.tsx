// import Message from "./Message";

import Alert from "./components/Alert";

// function App() {
//   return (
//     <div>
//       <Message />
//     </div>
//   );
// }

// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         item={items}
//         heading={"Cities"}
//         onSelectitem={handleSelectItem}
//       />
//     </div>
//   );
// }

const App = () => {
  return (
    <div>
      <Alert>
        Hello <span>world</span>
      </Alert>
    </div>
  );
};

export default App;
