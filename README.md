const url = "https://jsonplaceholder.typicode.com/users/1";
        /** 
          // Sample Response
          {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org"
          }
        **/
function App() {
  const [userData, setUserData] = React.useState({});

  const getUserData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  React.useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="App">
      <h2>User Data</h2>

      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Website:</strong> {userData.website}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Phone:</strong> {userData.phone}
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
