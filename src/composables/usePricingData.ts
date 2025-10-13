import { useQuery } from '@tanstack/vue-query'
import type { Ref } from 'vue'

// TODO: types for response data - remove any
export function usePricingData(): {
  data: any
  isLoading: Ref<boolean>
  error: any
} {
  async function fetchPricingData() {
    //await new Promise((resolve) => setTimeout(resolve, 1000)) // simulate loading time

    const response = await fetch('https://dummyjson.com/products/1', {
      headers: {
        'X-API-KEY': import.meta.env.VITE_API_KEY,
      },
    })
    return await response.json()
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['pricing'],
    queryFn: fetchPricingData,
  })

  return { data, isLoading, error }
}
