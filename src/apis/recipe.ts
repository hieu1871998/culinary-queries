import { ENDPOINTS } from '../endpoints';
import { BaseResponseData, DetailRecipeRequest, Recipe } from '../types';

export const getRecipeDetailFromSlug = async (
  slug: string,
  params?: DetailRecipeRequest
): Promise<BaseResponseData<Recipe>> => {
  return fetch(
    `https://test.culinarywonderland.com/api${ENDPOINTS.RECIPE_DETAIL_BY_SLUG}/${slug}`,
    {
      method: 'GET',
      body: JSON.stringify(params)
    }
  ).then(res => res.json());
};