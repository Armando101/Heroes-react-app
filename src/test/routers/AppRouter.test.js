import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routers/AppRouter";

describe("<AppRouter/>", () => {
  const contextValue = {
    user: {
      logged: false,
    },
  };
  test("should show login if it is not authenticated", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchInlineSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("Login");
  });
});
