import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("authReducer", () => {
  test("should return default state", () => {
    const defaultState = { logged: false };
    const state = authReducer(defaultState, {});
    expect(state).toEqual(defaultState);
  });

  test("should autentic and place the user name", () => {
    const action = {
      type: types.login,
      payload: { name: "Armando" },
    };

    const state = authReducer({}, action);
    expect(state).toEqual({ name: "Armando", logged: true });
  });

  test("should logout and delete name user", () => {
    const action = {
      type: types.logout,
    };
    const state = authReducer({ logged: true, name: "Armando" }, action);
    expect(state).toEqual({ logged: false });
  });
});
