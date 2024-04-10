// actor expression = main function = canister = smart contract
// an actor is a process with encapsulated state that communicates with other actors via message passing
actor {
  public query func greet(name : Text) : async Text {
    // # = name argument passed into func
    return "Hello, " # name # "!";
  };
};
