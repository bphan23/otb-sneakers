// helper functions where you can reuse in multiple places of the application
// reusable --> stateless functions that don't create any side effects
// Ex.) for date or for number manipulations

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );
