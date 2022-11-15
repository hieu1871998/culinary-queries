import { getRecipeDetailFromSlug } from '../apis/recipe'

test(
  'Fetch recipe detail test',
  () => {
    getRecipeDetailFromSlug('cheeseburger-pasta').then(
      res => {
        expect(res).toEqual({
          "responseData": {
              "id": "6114b02848791d4b60887bd0",
              "contentType": "Recipe",
              "enableNotification": true,
              "tagging": [
                  {
                      "name": "cuisines",
                      "valueData": [
                          {
                              "value": "Chinese"
                          }
                      ]
                  }
              ],
              "tags": [
                  "quynhha 123",
                  "liemnh 123"
              ],
              "haveRelated": false,
              "avgRatingPoint": 4.5,
              "totalRatingTime": 2,
              "totalComment": 12,
              "totalEmotion": {
                  "totalLove": 0,
                  "totalLike": 0
              },
              "createdDate": 1628745768337,
              "lastModifiedDate": 1668503785398,
              "seoSettings": [
                  {
                      "type": "RECIPE_MAIN_PAGE",
                      "metaTitle": "Reynold Poernomo’s  Cheeseburger Pasta Recipe: Verified by Reynold Poernomo",
                      "metaDescription": "Are you looking for Reynold Poernomo’s  Cheeseburger Pasta recipe? Get the full verified recipe for FREE here. ",
                      "firstP": " Reynold Poernomo’s  Cheeseburger Pasta recipe tastes incredible. See ingredients & method below."
                  },
                  {
                      "type": "RECIPE_CHEF_PAGE",
                      "metaTitle": "Reynold Poernomo’s  Cheeseburger Pasta Recipe: Verified by Reynold Poernomo",
                      "metaDescription": "Get Reynold Poernomo’s full verified  Cheeseburger Pasta recipe online here  for FREE. ",
                      "firstP": "Reynold Poernomo’s  Cheeseburger Pasta recipe tastes incredible. See ingredients & method below."
                  }
              ],
              "title": " Cheeseburger Pasta",
              "slug": "cheeseburger-pasta",
              "description": "I love this recipe because it can be pulled together with ingredients that are usually already on hand. I get a nostalgic feeling whenever I eat this hearty and comforting dish.",
              "thumbnail": {
                  "id": "6114affbf7f1e12623d3324a",
                  "originalFilename": "kia-damon-cheeseburger-pasta-mc-main-210811.jpg",
                  "filename": "839ed69051c24a04a2316e2a16a6c388.jpg",
                  "contentType": "image/jpeg",
                  "url": "839ed69051c24a04a2316e2a16a6c388.jpg",
                  "uploadDate": 1628745723652,
                  "cdnOrigin": "https://test.cdn.culinarywonderland.com/photo/user/admin/618f2102-81cf-4fc9-b604-6334626ddfa9/839ed69051c24a04a2316e2a16a6c388.jpg",
                  "cdnLarge": "https://test.cdn.culinarywonderland.com//user/admin/618f2102-81cf-4fc9-b604-6334626ddfa9/839ed69051c24a04a2316e2a16a6c388_l.jpg",
                  "cdnMedium": "https://test.cdn.culinarywonderland.com//user/admin/618f2102-81cf-4fc9-b604-6334626ddfa9/839ed69051c24a04a2316e2a16a6c388_m.jpg",
                  "cdnSmall": "https://test.cdn.culinarywonderland.com//user/admin/618f2102-81cf-4fc9-b604-6334626ddfa9/839ed69051c24a04a2316e2a16a6c388_s.jpg",
                  "typeOfMedia": 1,
                  "guid": "618f2102-81cf-4fc9-b604-6334626ddfa9",
                  "width": 2000,
                  "height": 1000
              },
              "image3d": {
                  "id": "615e789b6b631f134041dfd8",
                  "originalFilename": "Asset 1.png",
                  "filename": "Asset 1.png",
                  "thumbnail": {
                      "id": "615e789a6b631f134041dfd7",
                      "originalFilename": "bee66fb6d17843be923542d4b9791237.jpg",
                      "filename": "bee66fb6d17843be923542d4b9791237.jpg",
                      "contentType": "image/jpg",
                      "url": "bee66fb6d17843be923542d4b9791237.jpg",
                      "cdnOrigin": "https://test.cdn.culinarywonderland.com/photo/user/admin/c9c7c85b-736f-4af1-8173-86bf641607a3thumbnail/bee66fb6d17843be923542d4b9791237.jpg",
                      "typeOfMedia": 1,
                      "guid": "c9c7c85b-736f-4af1-8173-86bf641607a3thumbnail",
                      "width": 500,
                      "height": 230
                  },
                  "contentType": "image/png",
                  "url": "Asset 1.png",
                  "uploadDate": 1633581211333,
                  "cdnOrigin": "https://test.cdn.culinarywonderland.com/photo/user/admin/c9c7c85b-736f-4af1-8173-86bf641607a3/asset_1.png",
                  "typeOfMedia": 1,
                  "guid": "c9c7c85b-736f-4af1-8173-86bf641607a3",
                  "width": 230,
                  "height": 106
              },
              "medias": [],
              "preTime": 15,
              "preTimeTo": 15,
              "cookTime": 30,
              "cookTimeTo": 30,
              "difficultly": "Easy",
              "serving": "4",
              "status": 1,
              "steps": [
                  {
                      "description": "<p>Add enough oil to coat the bottom of a Dutch oven or a heavy bottom skillet. Brown your meat over medium-high heat. Add the carrots to the meat and cook for 4 minutes. Follow with the onions and cook for another 3 minutes. Finish with the garlic and cook until fragrant.</p>",
                      "version": 2,
                      "versionLabel": "Imperial"
                  },
                  {
                      "description": "<p>Season the mixture with sweet paprika, salt, pepper and thyme. Mix in the tomato paste and pour in the beef stock. Mix well and add the uncooked pasta. Reduce the heat to a simmer and cover the pot.</p>",
                      "version": 2,
                      "versionLabel": "Imperial"
                  },
                  {
                      "description": "<p>Once the pasta is al dente and the liquid has reduced, add in the grated cheddar cheese and nutritional yeast. Stir until melted and creamy. Taste for salt and pepper. Serve Immediately.</p>",
                      "version": 2,
                      "versionLabel": "Imperial"
                  }
              ],
              "ingredientSets": [
                  {
                      "name": "",
                      "description": "<p>1 Pound Ground beef</p>\n<p>1 Cup Salt and freshly ground black pepper, to taste</p>\n<p>1 Ounce Uncooked cellentani (or cavatappi) pasta</p>\n<p>1 Teaspoon Large carrot, peeled and diced into 1/4-inch pieces</p>\n<p>2 Tablespoon Yellow onions, dice</p>",
                      "version": 2,
                      "versionLabel": "Imperial"
                  }
              ],
              "tipNotes": [
                  {
                      "description": "<p>Use a heavy bottom skillet or a Dutch oven to conduct an even and high heat. You can use alternative meat crumbles for a meatless option, as well as change the beef stock for vegetable.</p>",
                      "version": 2,
                      "versionLabel": "Imperial"
                  }
              ],
              "isFavored": false,
              "creator": {
                  "userId": "6111f13ed78fe9632be10e34",
                  "code": "quynh-ha",
                  "displayName": "Reynold Poernomo",
                  "role": "ROLE_CHEF",
                  "avatar": {
                      "id": "6193346b50ecd41c397a0704",
                      "originalFilename": "cropped_image.jpg",
                      "filename": "cropped_image.jpg",
                      "contentType": "image/jpeg",
                      "url": "cropped_image.jpg",
                      "uploadDate": 1637037163786,
                      "cdnOrigin": "https://test.cdn.culinarywonderland.com/photo/user/admin/33bda582-443d-471c-970d-2b2851e3e725/cropped_image.jpg",
                      "cdnSmall": "https://test.cdn.culinarywonderland.com/photo/user/admin/33bda582-443d-471c-970d-2b2851e3e725/cropped_image_s.jpg",
                      "typeOfMedia": 1,
                      "guid": "33bda582-443d-471c-970d-2b2851e3e725",
                      "width": 449,
                      "height": 450
                  }
              },
              "chef": {
                  "userId": "6111f13ed78fe9632be10e34",
                  "code": "quynh-ha",
                  "displayName": "Reynold Poernomo",
                  "role": "ROLE_CHEF",
                  "avatar": {
                      "id": "6193346b50ecd41c397a0704",
                      "originalFilename": "cropped_image.jpg",
                      "filename": "cropped_image.jpg",
                      "contentType": "image/jpeg",
                      "url": "cropped_image.jpg",
                      "uploadDate": 1637037163786,
                      "cdnOrigin": "https://test.cdn.culinarywonderland.com/photo/user/admin/33bda582-443d-471c-970d-2b2851e3e725/cropped_image.jpg",
                      "cdnSmall": "https://test.cdn.culinarywonderland.com/photo/user/admin/33bda582-443d-471c-970d-2b2851e3e725/cropped_image_s.jpg",
                      "typeOfMedia": 1,
                      "guid": "33bda582-443d-471c-970d-2b2851e3e725",
                      "width": 449,
                      "height": 450
                  }
              },
              "submitDate": 1663225479952,
              "publishDate": 1594099368581
          }
      })
      }
    )
  }
)