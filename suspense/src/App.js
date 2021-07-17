import React, { Suspense } from "react";

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = new Promise((resolve) => { setTimeout(() => {resolve({name: "kruztw"});}, 1000);}).then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending")
        throw suspender;
      else if (status === "error")
        throw result;
      else if (status === "success")
        return result;
    }
  };
}

const resource = wrapPromise();


function ProfileDetails() {
  const user = resource.read();
  return <h1>{user.name}</h1>;
}


const App = () => {
  return (
    <Suspense
      fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails />
    </Suspense>
  );
}

export default App
