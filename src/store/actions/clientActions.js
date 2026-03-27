import api from "../../api/axios";

// BASIC ACTIONS
export const setUser = (data) => ({
  type: "SET_USER",
  payload: data,
});

export const setRoles = (data) => ({
  type: "SET_ROLES",
  payload: data,
});

export const setTheme = (data) => ({
  type: "SET_THEME",
  payload: data,
});

export const setLanguage = (data) => ({
  type: "SET_LANGUAGE",
  payload: data,
});

// ROLES THUNK
export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { roles } = getState().client;

    if (roles.length > 0) return;

    const res = await api.get("/roles");
    dispatch(setRoles(res.data));
  };
};

// LOGIN THUNK
export const loginUser = (data) => {
  return async (dispatch) => {
    const res = await api.post("/login", {
      email: data.email,
      password: data.password,
    });

    const user = res.data;

    dispatch(setUser(user)); // 🔥 KRİTİK

    if (data.remember) {
      localStorage.setItem("token", user.token);
      localStorage.setItem("user", JSON.stringify(user)); // 🔥 SADECE BU SATIR EKLENDİ
    }

    return user;
  };
};
