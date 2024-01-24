import React from "react";
import StoreContext from "../../../StoreContext";
import Friends from "./Friends";

const FriendsContainer = () => {
  return (
      <StoreContext.Consumer>{
          (store) => {
              let state = store.getState();
              return (
                  <Friends friends={state.sidebarPage.friends} />
              )
          }
      }
      </StoreContext.Consumer>
  )
}

export default FriendsContainer;
