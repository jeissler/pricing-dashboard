import { useQuery } from '@tanstack/vue-query'
import type { Ref } from 'vue'
import sampleData from '@/data/sample_data.json'

// TODO: types for response data - remove any
export function usePricingData(): {
  data: any
  isLoading: Ref<boolean>
  error: any
} {
  async function fetchPricingData() {
    await new Promise((resolve) => setTimeout(resolve, 500)) // simulate loading time

    // const apiUrl =
    //   'https://neuron.serifhealth.com/api/rates/v1?network_template_ids=07c56f6b-82cd-44a4-af42-d570b6ae89c6&limit=1000&codes=99203'
    // const response = await fetch(apiUrl, {
    //   headers: {
    //     'X-API-KEY': import.meta.env.VITE_API_KEY,
    //   },
    // })
    // return await response.json()

    return sampleData
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['pricing'],
    queryFn: fetchPricingData,
  })

  return { data, isLoading, error }
}
