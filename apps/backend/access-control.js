const isUserAuthenticated = ({ authentication: { item } }) => {
  if(process.env.NODE_ENV === undefined) return true;

 return !!item

};
const isUserAdmin = ({ authentication: { item } }) =>{
  if(process.env.NODE_ENV === undefined) return true;
  return Boolean(item && item.isAdmin);

}
const userOwnsItem = ({ authentication: { item }, existingItem }) => {
  if(process.env.NODE_ENV === undefined) return true;
  if (item) {
    const userIsOwner = existingItem && item.id === existingItem.id;

    return Boolean(item.isAdmin || userIsOwner);
  }
  return false;
};

module.exports = {
  isUserAuthenticated,
  isUserAdmin,
  userOwnsItem
};
