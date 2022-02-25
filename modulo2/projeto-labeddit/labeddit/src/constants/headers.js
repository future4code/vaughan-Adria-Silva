export const headersContentType = {
    headers: { "Content-Type": "application/json" }
};

export const headersAuthorization = {
    headers: { Authorization: localStorage.getItem("token") }
};

export const completeHeaders = {
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
    }
};
