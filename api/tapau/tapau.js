const BASE_URL = "http://localhost:5001/api/v1"

const apiFetch = async (url, options = {}) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json(); // Parses the JSON response
    } catch (error) {
      console.error("API call failed:", error);
      throw error;
    }
  };

  // Get all available restaurants
const getAvailableRestaurants = async () => {
    const url = `${BASE_URL}/restaurants/`;
    return await apiFetch(url, {
      method: "GET",
    });
  };
  
  // Get a restaurant by ID
  const getRestaurantByID = async (id) => {
    const url = `${BASE_URL}/restaurants/${id}`;
    return await apiFetch(url, {
      method: "GET",
    });
  };
  
  // Get all orders for a specific customer
const getAllOrders = async (customerId) => {
    const url = `${BASE_URL}/customers/${customerId}/orders`;
    return await apiFetch(url, {
      method: "GET",
    });
  };
  
  // Get a specific order by order ID for a customer
  const getOrderByID = async (customerId, orderId) => {
    const url = `${BASE_URL}/customers/${customerId}/orders/${orderId}`;
    return await apiFetch(url, {
      method: "GET",
    });
  };
  
  const addToPool = async (poolId, payload) => {
    const url = `${BASE_URL}/pool/${poolId}`;
    return await apiFetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // Send payload as JSON
    });
  };

  const getCustomerFailureNumber = async (customerId) => {
    const url = `${BASE_URL}/customers/${customerId}/failures`;
    return await apiFetch(url, { method: "GET" });
  };

  const incrementCustomerFailure = async (customerId) => {
    const url = `${BASE_URL}/customers/${customerId}/increment_failure`;
    return await apiFetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  };

  const getCustomerCancellationNumber = async (customerId) => {
    const url = `${BASE_URL}/customers/${customerId}/cancellation`;
    return await apiFetch(url, { method: "GET" });
  };

  const incrementCustomerCancellation = async (customerId, restaurantId) => {
    const url = `${BASE_URL}/customers/${customerId}/restaurants/${restaurantId}/increment_cancellation`;
    return await apiFetch(url, { method: "POST" });
  };

  const getCustomerCart = async (customerId) => {
    const url = `${BASE_URL}/customers/${customerId}/cart`;
    return await apiFetch(url, { method: "GET" });
  };
  
  export {
    getAvailableRestaurants,
    getRestaurantByID,
    getAllOrders,
    getOrderByID,
    addToPool,
    getCustomerFailureNumber,
    incrementCustomerFailure,
    getCustomerCancellationNumber,
    incrementCustomerCancellation,
    getCustomerCart,
};
