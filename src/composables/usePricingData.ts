import { useQuery } from '@tanstack/vue-query'
import type { Ref } from 'vue'
//import sampleData from '@/data/sample_data.json'
import type { PricingData } from '@/data/types/pricing'

export function usePricingData(): {
  data: Ref<PricingData | undefined>
  isLoading: Ref<boolean>
  error: Ref<Error | null>
} {
  async function fetchPricingData(): Promise<PricingData> {
    // await new Promise((resolve) => setTimeout(resolve, 500)) // simulate loading time
    // return sampleData as PricingData

    const apiUrl =
      'https://neuron.serifhealth.com/api/rates/v1?network_template_ids=07c56f6b-82cd-44a4-af42-d570b6ae89c6&limit=1000&codes=99203'
    const response = await fetch(apiUrl, {
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
