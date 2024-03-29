import { applicationApi } from '../../store/service'
import { LatestRelease } from './home-type'

const homeService = applicationApi.injectEndpoints({
  endpoints: (build) => ({
    getLatestRelease: build.query<LatestRelease, void>({
      query: () => ({
        url: '/release/latest',
        method: 'GET',
      }),
      providesTags: ['RELEASE'],
    }),
  }),
})

export const { useGetLatestReleaseQuery } = homeService
