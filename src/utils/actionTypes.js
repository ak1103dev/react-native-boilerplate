export default (name, type) => {
  return {
    o: `${name}/${type}`,
    pending: `${name}/${type}_PENDING`,
    success: `${name}/${type}_FULFILLED`,
    error: `${name}/${type}_REJECTED`
  };
};
