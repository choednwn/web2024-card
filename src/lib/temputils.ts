export function tempAuthUser(id: string) {
  localStorage.setItem("userID", id);
  //! later will require user hash etc
}
