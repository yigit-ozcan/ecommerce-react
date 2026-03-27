import api, { setAuthToken } from "../../api/axios";

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

    dispatch(setUser(user));

    // 🔥 TOKEN HEADER'A KOY
    setAuthToken(user.token);

    if (data.remember) {
      localStorage.setItem("token", user.token);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }

    return user;
  };
};

// 🔥 VERIFY TOKEN (FIXLİ HAL)
export const verifyToken = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      // header'a koy
      setAuthToken(token);

      const res = await api.get("/verify");

      const user = res.data;

      // redux'a koy
      dispatch(setUser(user));

      // token yenile (varsa)
      if (user.token) {
        localStorage.setItem("token", user.token);
        setAuthToken(user.token);
      }
    } catch (err) {
      // ❌ TOKEN GEÇERSİZ

      // local temizle
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // header temizle
      setAuthToken(null);

      // 🔥 KRİTİK FIX: REDUX USER TEMİZLE
      dispatch(setUser(null));
    }
  };
};
