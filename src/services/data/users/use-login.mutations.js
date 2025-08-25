import { useMutation } from "@tanstack/react-query";

export default function useLoginMutations() {
  return useMutation({
    mutationFn: async ({ variables }) => {
      // Mocked login - just return success after delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true, user: variables };
    }
  });
}