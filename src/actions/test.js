export function helloWorld(firstName, lastName) {
    return {
      type: 'NEW_HELLO_WORLD',
      payload: {
        firstName: firstName,
        lastName: lastName
      }
    }
  }