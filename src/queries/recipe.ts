import { useQuery } from '@tanstack/react-query';
import { getRecipeDetailFromSlug } from '../apis/recipe';
import { DetailRecipeRequest } from '../types';

export const useGetRecipeDetailFromSlug = (
  slug: string,
  params?: DetailRecipeRequest
) => useQuery(
  ['RECIPE_DETAIL_FROM_SLUG', slug],
  () => getRecipeDetailFromSlug(slug, params)
)