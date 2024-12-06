// Exercise
// Make the code below cleaner

function register(user) {
  var input = null;
  var url = "/metadata";
  if (url !== null) {
    if (url !== "") {
      const data = get(url);
      if (data !== null) {
        input = data;
      } else {
        return "No data found";
      }
    } else {
      return "URL is empty";
    }
  } else {
    return "URL is null";
  }

  if (input === null) {
    return "Input is null";
  } else {
    if (input === "") {
      return "Input is empty";
    } else {
      if (input.length < 5) {
        return "Input too short";
      } else {
        user.metadata = input;
      }
    }
  }

  let status = "SUCCESS";
  if (user === null) {
    status = "INVALID_USER";
  } else {
    if (user.username !== undefined) {
      if (user.username.length >= 3) {
        if (user.password.length >= 8) {
          if (user.email.indexOf("@") === -1) {
            status = "INVALID_EMAIL";
          }
          if (user.age < 18) {
            status = "AGE_NOT_ACCEPTED";
          }
        } else {
          status = "INVALID_PASSWORD";
        }
      } else {
        status = "INVALID_USERNAME";
      }
    } else {
      status = "INVALID_USERNAME";
    }
  }

  return status;
}

function procTransaction(transaction) {
  if (transaction === null) {
    return "Invalid Transaction";
  } else {
    if (transaction.isValid() === true) {
      if (transaction.amount > 0) {
        processTransaction(transaction);
      } else {
        return "Amount is not positive";
      }
    } else {
      return "Transaction Invalid";
    }
  }
}

function updateSomething(settings) {
  if (settings !== null) {
    if (settings.notificationsEnabled !== undefined) {
      if (settings.language !== undefined) {
        if (settings.theme !== undefined) {
          if (settings.timezone !== undefined) {
            saveSettings(settings);
          }
        }
      }
    }
  }
}

function login(username, password) {
  let loggedIn = false;

  if (username !== null && password !== null) {
    if (username.length >= 3 && password.length >= 6) {
      if (authenticate(username, password) === true) {
        loggedIn = true;
      } else {
        loggedIn = false;
      }
    } else {
      loggedIn = false;
    }
  } else {
    loggedIn = false;
  }

  return loggedIn;
}

function eventHandlingFunction(event) {
  var eventType = event.type;
  if (eventType === "click") {
    event.action();
  } else if (eventType === "hover") {
    event.action();
  } else if (eventType === "scroll") {
    event.action();
  } else {
    console.log("Unknown event");
  }
}

function calculate(price, customerType) {
  let discount = 0;
  if (customerType === "VIP") {
    discount = 20;
  } else {
    if (customerType === "Regular") {
      discount = 10;
    } else {
      discount = 5;
    }
  }
  return price * (1 - discount / 100);
}

function isAbleToAccess(user) {
  if (user !== null) {
    if (user.isActive === true) {
      if (user.isAdmin === true) {
        if (user.hasPermissions === true) {
          return user.type === "VIP";
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function main() {
  var user = {
    name: "some-name",
    email: "some-email@gmail.com",
    metadata: null,
  };

  register(user);
  login(user.username, "some-encrypted-password");

  eventHandlingFunction({
    type: "click",
    action: () => {
      console.log("processing transaction");
      var amount = calculate(100, "VIP");
      procTransaction({ amount });
    },
  });

  updateSomething({
    language: "english",
    theme: "light",
    timezone: "utc",
  });
}
