import api from "../../api/axios";

// 🔹 BASIC ACTIONS
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

export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { roles } = getState().client;

    // ❗ sadece ihtiyaç varsa çalışır
    if (roles.length > 0) return;

    try {
      const res = await api.get("/roles");
      dispatch(setRoles(res.data));
    } catch (err) {
      console.error("Roles fetch error:", err);
    }
  };
};
