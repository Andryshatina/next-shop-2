export async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.error("API error:", error);
    return [];
  }
}

export async function getProductById(id: number) {
  try {
    if (!id || isNaN(id)) {
      throw new Error("Invalid product ID");
    }
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
