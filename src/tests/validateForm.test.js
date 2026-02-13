import { validateForm } from "../utils/validateForm";

test("returns errors for empty fields", () => {
  const result = validateForm({});
  expect(result.name).toBeDefined();
});
