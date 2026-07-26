/* ============================================================
   Asian Meat Kitchen – Recipe Data
   Structure is expandable: just push new objects into the array.
   Fields: id, title, cuisine, protein, type, time, servings,
           description, ingredients[], directions[], substitutions
   ============================================================ */

var recipes = [
  // ==================== CHINESE (25+) ====================
  {
    id: "kung-pao-chicken",
    title: "Kung Pao Chicken (宫保鸡丁)",
    cuisine: "Chinese",
    protein: "chicken",
    type: "main",
    time: "30 min",
    servings: 4,
    description: "Classic Sichuan stir-fry of diced chicken with peanuts, dried chilies and a tangy-sweet sauce with numbing Sichuan peppercorns.",
    ingredients: [
      "500 g boneless chicken thigh or breast, diced",
      "1/2 cup roasted unsalted peanuts",
      "8–12 dried red chilies, halved",
      "1 tsp Sichuan peppercorns",
      "3 green onions, cut into 2 cm pieces",
      "3 garlic cloves, minced",
      "1 tbsp fresh ginger, minced",
      "1 red bell pepper, diced (optional)",
      "Marinade: 1 tbsp soy sauce, 1 tbsp Shaoxing wine, 1 tsp cornstarch, pinch white pepper",
      "Sauce: 2 tbsp soy sauce, 1 tbsp dark soy, 1 tbsp black vinegar, 1 tbsp sugar, 1 tsp cornstarch, 2 tbsp water"
    ],
    directions: [
      "Mix chicken with marinade ingredients and set aside 15 minutes.",
      "Combine sauce ingredients in a small bowl.",
      "Heat wok over high heat with 2 tbsp oil. Stir-fry dried chilies and Sichuan peppercorns until fragrant (do not burn).",
      "Add garlic, ginger and green onion whites; stir 10 seconds.",
      "Add chicken and stir-fry until just cooked through, about 3–4 minutes.",
      "Add bell pepper if using; cook 1 minute.",
      "Pour in sauce and toss until thickened and glossy.",
      "Stir in peanuts and remaining green onions. Serve immediately with steamed rice."
    ],
    substitutions: "Replace peanuts with cashews. Use chicken breast for leaner result. No Sichuan peppercorns? Add a pinch of black pepper + extra chili. Shaoxing wine can be replaced with dry sherry."
  },
  {
    id: "general-tsos-chicken",
    title: "General Tso's Chicken",
    cuisine: "Chinese",
    protein: "chicken",
    type: "main",
    time: "40 min",
    servings: 4,
    description: "Crispy battered chicken pieces coated in a sweet-tangy-spicy sauce – a beloved Chinese-American classic.",
    ingredients: [
      "600 g boneless chicken thighs, cut into 3 cm pieces",
      "1/2 cup cornstarch (for coating)",
      "1 egg, beaten",
      "Oil for frying",
      "3 garlic cloves, minced",
      "1 tbsp ginger, minced",
      "6–8 dried red chilies",
      "Sauce: 3 tbsp soy sauce, 2 tbsp rice vinegar, 3 tbsp sugar, 2 tbsp hoisin, 1 tbsp cornstarch, 1/3 cup chicken stock or water, 1 tsp sesame oil"
    ],
    directions: [
      "Toss chicken with beaten egg, then coat thoroughly in cornstarch.",
      "Heat 5 cm oil in a wok or deep pan to 180 °C. Fry chicken in batches until golden and crispy, 4–5 min. Drain on paper towels.",
      "In a clean wok, heat 1 tbsp oil. Stir-fry garlic, ginger and dried chilies until fragrant.",
      "Pour in sauce mixture and bring to a simmer until thickened.",
      "Add fried chicken and toss quickly to coat. Serve hot with rice and broccoli."
    ],
    substitutions: "Bake the coated chicken at 220 °C for 20–25 min for a lighter version. Swap chicken for firm tofu cubes. Reduce sugar for less sweetness."
  },
  {
    id: "sweet-sour-pork",
    title: "Sweet and Sour Pork (糖醋里脊)",
    cuisine: "Chinese",
    protein: "pork",
    type: "main",
    time: "45 min",
    servings: 4,
    description: "Crispy pork pieces in a bright sweet-and-sour sauce with pineapple, peppers and onion.",
    ingredients: [
      "500 g pork tenderloin or loin, cut into 2.5 cm cubes",
      "1 egg + 1/2 cup cornstarch for batter",
      "1 onion, cut into chunks",
      "1 green & 1 red bell pepper, chunks",
      "1 cup pineapple chunks (fresh or canned)",
      "Sauce: 4 tbsp ketchup, 3 tbsp rice vinegar, 3 tbsp sugar, 2 tbsp soy sauce, 1 tbsp cornstarch, 1/2 cup water"
    ],
    directions: [
      "Marinate pork briefly with a pinch of salt and white pepper. Dip in beaten egg then coat in cornstarch.",
      "Deep-fry or pan-fry until golden and cooked. Set aside.",
      "In a wok, stir-fry onion and peppers 2 minutes. Add pineapple.",
      "Pour in sauce and simmer until thickened.",
      "Return pork to the wok and toss to coat. Serve immediately."
    ],
    substitutions: "Use chicken instead of pork. Canned pineapple is fine; drain well. For less sweet sauce, reduce sugar and increase vinegar slightly."
  },
  {
    id: "beef-broccoli",
    title: "Beef and Broccoli",
    cuisine: "Chinese",
    protein: "beef",
    type: "main",
    time: "25 min",
    servings: 4,
    description: "Tender beef slices and crisp broccoli in a savory garlic-soy sauce – better than takeout.",
    ingredients: [
      "450 g flank steak or sirloin, thinly sliced against the grain",
      "400 g broccoli florets",
      "3 garlic cloves, minced",
      "1 tbsp ginger, minced",
      "Marinade: 1 tbsp soy sauce, 1 tsp cornstarch, 1 tsp oil",
      "Sauce: 3 tbsp soy sauce, 1 tbsp oyster sauce (or extra soy), 1 tbsp brown sugar, 1 tsp sesame oil, 1 tbsp cornstarch, 1/2 cup water or stock"
    ],
    directions: [
      "Mix beef with marinade and rest 15 minutes.",
      "Blanch broccoli 1–2 minutes in boiling water; drain.",
      "Heat wok with 2 tbsp oil. Sear beef in a single layer until browned; remove.",
      "Stir-fry garlic and ginger 15 seconds. Add sauce and bring to simmer.",
      "Return beef and broccoli; toss until sauce thickens and coats everything. Serve with rice."
    ],
    substitutions: "Oyster sauce can be replaced with extra soy + a pinch of sugar. Use chicken or pork strips the same way. Frozen broccoli works if thawed and patted dry."
  },
  {
    id: "mongolian-beef",
    title: "Mongolian Beef",
    cuisine: "Chinese",
    protein: "beef",
    type: "main",
    time: "25 min",
    servings: 4,
    description: "Crispy-edged beef strips in a sweet-savory brown sauce with green onions.",
    ingredients: [
      "500 g flank or sirloin, thinly sliced",
      "1/4 cup cornstarch",
      "4 green onions, cut into 5 cm pieces",
      "3 garlic cloves, minced",
      "1 tbsp ginger, minced",
      "Sauce: 1/3 cup soy sauce, 1/4 cup brown sugar, 1/4 cup water, 1 tsp sesame oil"
    ],
    directions: [
      "Toss beef with cornstarch until coated.",
      "Heat 3 tbsp oil in wok; fry beef in batches until crispy edges form. Remove.",
      "In remaining oil, stir-fry garlic and ginger 20 seconds.",
      "Add sauce and simmer until slightly thickened.",
      "Return beef and green onions; toss to coat. Serve over rice."
    ],
    substitutions: "Use chicken thigh strips. Reduce sugar for less sweetness. Add dried chilies for heat."
  },
  {
    id: "char-siu",
    title: "Char Siu (Chinese BBQ Pork 叉烧)",
    cuisine: "Chinese",
    protein: "pork",
    type: "main",
    time: "1 hr + marinate",
    servings: "4–6",
    description: "Sweet, sticky, slightly charred Cantonese roast pork with the classic red glaze.",
    ingredients: [
      "800 g pork shoulder or belly, cut into long strips",
      "Marinade: 3 tbsp hoisin, 2 tbsp honey, 2 tbsp soy sauce, 1 tbsp dark soy, 1 tbsp Shaoxing wine, 1 tsp five-spice, 2 garlic cloves minced, 1 tsp red fermented bean curd (optional for color)"
    ],
    directions: [
      "Mix marinade and coat pork thoroughly. Marinate at least 4 hours or overnight.",
      "Preheat oven to 200 °C. Place pork on a rack over a tray with water.",
      "Roast 25 minutes, basting halfway. Increase to 220 °C and roast another 10–15 min until edges caramelize.",
      "Rest 10 minutes, slice, and serve with rice or in buns."
    ],
    substitutions: "No red bean curd? Use a drop of red food coloring or skip. Honey can be swapped with maltose or brown sugar. Pork loin works but is leaner."
  },
  {
    id: "hong-shao-rou",
    title: "Hong Shao Rou (Red Braised Pork Belly 红烧肉)",
    cuisine: "Chinese",
    protein: "pork",
    type: "main",
    time: "1.5 hr",
    servings: 4,
    description: "Melt-in-the-mouth pork belly braised in a glossy soy-sugar sauce – pure comfort.",
    ingredients: [
      "800 g pork belly, cut into 3 cm cubes",
      "3 tbsp rock sugar or brown sugar",
      "3 tbsp light soy sauce",
      "1 tbsp dark soy sauce",
      "2 tbsp Shaoxing wine",
      "2 star anise, 1 small cinnamon stick, 2 slices ginger, 2 green onions",
      "Water to cover"
    ],
    directions: [
      "Blanch pork in boiling water 3 minutes; rinse and drain.",
      "In a clay pot or heavy pan, melt sugar with a little oil until caramel-colored.",
      "Add pork and toss to coat. Add soy sauces, wine, spices and enough water to just cover.",
      "Bring to boil, then simmer covered 60–75 minutes until tender and sauce is reduced and glossy.",
      "Adjust seasoning and serve with greens and rice."
    ],
    substitutions: "Use pork shoulder if belly is too fatty. Rock sugar gives better sheen; brown sugar works fine."
  },
  {
    id: "twice-cooked-pork",
    title: "Twice-Cooked Pork (回锅肉)",
    cuisine: "Chinese",
    protein: "pork",
    type: "main",
    time: "45 min",
    servings: 4,
    description: "Sichuan classic: boiled then stir-fried pork belly with leeks and spicy bean paste.",
    ingredients: [
      "500 g pork belly",
      "2 leeks or garlic scapes, sliced",
      "2 tbsp doubanjiang (chili bean paste)",
      "1 tbsp fermented black beans (optional)",
      "1 tsp sugar, 1 tbsp soy sauce",
      "3 garlic cloves, sliced"
    ],
    directions: [
      "Boil pork belly in water with ginger and green onion until just cooked (about 25 min). Cool and slice thinly.",
      "Stir-fry sliced pork in dry wok until edges curl and fat renders.",
      "Push aside, add doubanjiang and black beans; fry until red oil appears.",
      "Add garlic, then leeks and remaining seasonings. Toss until fragrant. Serve."
    ],
    substitutions: "No doubanjiang? Use gochujang + a little soy (different but tasty). Cabbage can replace leeks."
  },
  {
    id: "mapo-tofu-beef",
    title: "Mapo Tofu with Ground Beef",
    cuisine: "Chinese",
    protein: "beef",
    type: "main",
    time: "25 min",
    servings: 4,
    description: "Silky tofu in a fiery, numbing Sichuan sauce with ground beef.",
    ingredients: [
      "400 g soft or medium tofu, cubed",
      "200 g ground beef",
      "2 tbsp doubanjiang",
      "1 tsp Sichuan peppercorns, ground",
      "3 garlic cloves, 1 tbsp ginger",
      "1 cup stock or water",
      "1 tbsp soy sauce, 1 tsp sugar, 1 tsp cornstarch slurry",
      "Green onions and chili oil to finish"
    ],
    directions: [
      "Gently simmer tofu in salted water 2 minutes; drain.",
      "Stir-fry ground beef until browned. Add doubanjiang, garlic, ginger; cook until fragrant.",
      "Add stock, soy, sugar and tofu. Simmer 5 minutes.",
      "Thicken with slurry, sprinkle Sichuan pepper and green onions. Serve over rice."
    ],
    substitutions: "Ground pork is traditional and excellent. Soft tofu is classic; firm holds shape better."
  },
  {
    id: "orange-chicken",
    title: "Orange Chicken",
    cuisine: "Chinese",
    protein: "chicken",
    type: "main",
    time: "35 min",
    servings: 4,
    description: "Crispy chicken in a bright citrus-sweet glaze.",
    ingredients: [
      "600 g chicken thigh, cubed",
      "1/2 cup cornstarch + 1 egg for coating",
      "Zest and juice of 2 oranges",
      "3 tbsp sugar, 2 tbsp soy sauce, 1 tbsp rice vinegar, 1 tsp cornstarch",
      "2 garlic cloves, 1 tsp ginger"
    ],
    directions: [
      "Coat chicken and fry until golden and cooked. Drain.",
      "In a wok, combine orange juice, zest, sugar, soy, vinegar and cornstarch. Simmer until thick.",
      "Add garlic and ginger, then toss in chicken. Serve with rice."
    ],
    substitutions: "Use bottled orange juice in a pinch. Lemon or pineapple can create variations."
  },
  {
    id: "black-pepper-beef",
    title: "Black Pepper Beef",
    cuisine: "Chinese",
    protein: "beef",
    type: "main",
    time: "25 min",
    servings: 4,
    description: "Quick stir-fry of tender beef with onions and a bold black-pepper sauce.",
    ingredients: [
      "450 g beef, thinly sliced",
      "1 large onion, sliced",
      "1 green bell pepper, sliced",
      "2 tbsp freshly ground black pepper",
      "Sauce: 2 tbsp soy, 1 tbsp oyster sauce, 1 tsp sugar, 1 tsp cornstarch, 3 tbsp water"
    ],
    directions: [
      "Marinate beef with a little soy and cornstarch.",
      "Stir-fry beef quickly over high heat; remove.",
      "Stir-fry onion and pepper. Add sauce and pepper. Return beef and toss."
    ],
    substitutions: "Chicken or pork work equally well. Use less pepper for milder heat."
  },
  {
    id: "yu-xiang-pork",
    title: "Sichuan Shredded Pork with Garlic Sauce (鱼香肉丝)",
    cuisine: "Chinese",
    protein: "pork",
    type: "main",
    time: "30 min",
    servings: 4,
    description: "Fish-fragrant pork – no fish, just the classic sweet-sour-spicy-garlic profile.",
    ingredients: [
      "400 g pork loin, julienned",
      "1 carrot, 1 bamboo shoot or celery, julienned",
      "3 wood-ear mushrooms, soaked and sliced",
      "Sauce: 2 tbsp soy, 1 tbsp black vinegar, 1 tbsp sugar, 1 tsp cornstarch, 2 tbsp water",
      "2 tbsp doubanjiang or chili paste, garlic, ginger, green onion"
    ],
    directions: [
      "Marinate pork with soy and cornstarch.",
      "Stir-fry aromatics and chili paste, add pork, then vegetables.",
      "Add sauce and toss until glossy."
    ],
    substitutions: "Chicken or beef strips work. No wood ear? Use more vegetables."
  },
  {
    id: "three-cup-chicken",
    title: "Three Cup Chicken (三杯鸡)",
    cuisine: "Chinese",
    protein: "chicken",
    type: "main",
    time: "40 min",
    servings: 4,
    description: "Taiwanese classic braised in equal parts soy, sesame oil and rice wine with basil.",
    ingredients: [
      "800 g chicken wings or bone-in thighs",
      "1/3 cup soy sauce",
      "1/3 cup sesame oil",
      "1/3 cup rice wine (or Shaoxing)",
      "1 whole head garlic, cloves smashed",
      "Thick slices of ginger",
      "Large handful Thai basil"
    ],
    directions: [
      "Sear chicken in a little oil until lightly browned.",
      "Add garlic, ginger, soy, sesame oil and wine. Bring to boil.",
      "Simmer covered 20–25 minutes until sauce reduces and chicken is glazed.",
      "Stir in basil leaves and serve."
    ],
    substitutions: "Bone-in pieces give better flavor. Regular basil works if Thai is unavailable."
  },
  {
    id: "hainanese-chicken",
    title: "Hainanese Chicken Rice (simplified)",
    cuisine: "Chinese",
    protein: "chicken",
    type: "main",
    time: "1 hr",
    servings: "4–6",
    description: "Poached chicken with fragrant rice cooked in the poaching broth and classic ginger-scallion sauce.",
    ingredients: [
      "1 whole chicken (1.5 kg) or 4 bone-in thighs",
      "Rice, ginger, green onions, garlic",
      "Ginger-scallion sauce: grated ginger, chopped green onion, salt, hot oil",
      "Chili sauce and dark soy for serving"
    ],
    directions: [
      "Poach chicken gently in water with ginger and green onion until cooked (about 45 min for whole). Rest in ice bath.",
      "Cook rice in the reserved chicken broth with extra ginger and garlic.",
      "Carve chicken, serve with rice and the two sauces."
    ],
    substitutions: "Use store-bought rotisserie chicken for speed; still cook rice in good stock."
  },
  {
    id: "cashew-chicken",
    title: "Cashew Chicken",
    cuisine: "Chinese",
    protein: "chicken",
    type: "main",
    time: "25 min",
    servings: 4,
    description: "Tender chicken and crunchy cashews in a light savory sauce.",
    ingredients: [
      "500 g chicken breast or thigh, cubed",
      "1 cup roasted cashews",
      "1 onion, 1 bell pepper, celery optional",
      "Sauce: 2 tbsp soy, 1 tbsp oyster sauce, 1 tsp sugar, 1 tsp cornstarch, 1/4 cup water"
    ],
    directions: [
      "Stir-fry chicken until cooked; remove.",
      "Stir-fry vegetables, return chicken, add sauce and cashews. Toss and serve."
    ],
    substitutions: "Peanuts or almonds can replace cashews."
  },
  {
    id: "lemon-chicken",
    title: "Chinese Lemon Chicken",
    cuisine: "Chinese",
    protein: "chicken",
    type: "main",
    time: "35 min",
    servings: 4,
    description: "Crispy chicken with a bright, glossy lemon sauce.",
    ingredients: [
      "600 g chicken breast or thigh",
      "Cornstarch and egg for coating",
      "Sauce: juice and zest of 2 lemons, 3 tbsp sugar, 1 tbsp soy, 1 tsp cornstarch, water"
    ],
    directions: [
      "Coat and fry chicken until golden. Slice if desired.",
      "Simmer sauce until thickened; pour over chicken or toss."
    ],
    substitutions: "Orange or lime for variation."
  },
  {
    id: "cumin-beef",
    title: "Cumin Beef (孜然牛肉)",
    cuisine: "Chinese",
    protein: "beef",
    type: "main",
    time: "25 min",
    servings: 4,
    description: "Xinjiang-style stir-fried beef with lots of cumin, chili and onion.",
    ingredients: [
      "500 g beef, sliced",
      "2 tbsp whole cumin seeds, toasted and lightly crushed",
      "Dried chilies, onion, garlic, cilantro"
    ],
    directions: [
      "Marinate beef briefly. Stir-fry with spices, onion and chili until fragrant and cooked."
    ],
    substitutions: "Lamb is traditional; chicken also works."
  },
  {
    id: "dongpo-pork",
    title: "Dongpo Pork (东坡肉)",
    cuisine: "Chinese",
    protein: "pork",
    type: "main",
    time: "2.5 hr",
    servings: 4,
    description: "Hangzhou braised pork belly squares in a rich soy-wine sauce.",
    ingredients: [
      "1 kg pork belly, skin-on, cut into large squares",
      "Shaoxing wine, soy sauce, rock sugar, ginger, green onion"
    ],
    directions: [
      "Blanch, then braise slowly with wine, soy and sugar until extremely tender (about 2 hours). Reduce sauce and serve."
    ],
    substitutions: "Same method as Hong Shao Rou but with more wine and larger pieces."
  },
  {
    id: "chicken-broccoli-cn",
    title: "Chicken and Broccoli Stir-Fry",
    cuisine: "Chinese",
    protein: "chicken",
    type: "main",
    time: "20 min",
    servings: 4,
    description: "Simple weeknight stir-fry with tender chicken and crisp broccoli in garlic sauce.",
    ingredients: [
      "450 g chicken, sliced",
      "400 g broccoli",
      "Garlic, ginger, soy-based sauce"
    ],
    directions: [
      "Stir-fry chicken, remove. Blanch or stir-fry broccoli. Combine with sauce."
    ],
    substitutions: "Any quick-cooking green vegetable works."
  },
  {
    id: "salt-pepper-chicken",
    title: "Salt and Pepper Chicken",
    cuisine: "Chinese",
    protein: "chicken",
    type: "main",
    time: "30 min",
    servings: 4,
    description: "Crispy fried chicken tossed with salt, white pepper, chili and garlic.",
    ingredients: [
      "600 g chicken (wings or boneless pieces)",
      "Cornstarch, salt, white pepper, garlic, chili, green onion"
    ],
    directions: [
      "Coat and deep-fry chicken. Toss with stir-fried aromatics and seasoning."
    ],
    substitutions: "Works with pork or firm tofu."
  },
  {
    id: "beijing-beef",
    title: "Beijing Beef",
    cuisine: "Chinese",
    protein: "beef",
    type: "main",
    time: "35 min",
    servings: 4,
    description: "Crispy beef in a sweet-tangy sauce with peppers and onion.",
    ingredients: [
      "500 g beef, sliced and coated in cornstarch",
      "Bell peppers, onion",
      "Sweet-tangy sauce (ketchup, vinegar, sugar, soy)"
    ],
    directions: [
      "Fry beef until crispy. Stir-fry vegetables, add sauce, toss with beef."
    ],
    substitutions: "Similar to sweet-and-sour style; adjust sweetness to taste."
  },
  {
    id: "pork-dumplings",
    title: "Pork and Chive Dumplings",
    cuisine: "Chinese",
    protein: "pork",
    type: "main",
    time: "1 hr",
    servings: 6,
    description: "Classic boiled or pan-fried dumplings with juicy pork filling.",
    ingredients: [
      "500 g ground pork",
      "2 cups Chinese chives, chopped",
      "Ginger, soy, sesame oil, dumpling wrappers"
    ],
    directions: [
      "Mix filling. Wrap dumplings. Boil, steam or pan-fry until cooked. Serve with vinegar-soy dip."
    ],
    substitutions: "Chicken or beef filling works. Freeze extras."
  },
  {
    id: "braised-beef-shank",
    title: "Chinese Braised Beef Shank (酱牛肉)",
    cuisine: "Chinese",
    protein: "beef",
    type: "main",
    time: "2 hr",
    servings: 6,
    description: "Sliced cold or warm braised beef shank with aromatic soy sauce – great for appetizers too.",
    ingredients: [
      "1 kg beef shank",
      "Soy sauce, star anise, cinnamon, ginger, rock sugar, wine"
    ],
    directions: [
      "Blanch, then braise with spices until tender. Cool in liquid, slice thinly."
    ],
    substitutions: "Excellent make-ahead dish."
  },
  {
    id: "spicy-chicken-wings",
    title: "Coca-Cola or Soy Chicken Wings",
    cuisine: "Chinese",
    protein: "chicken",
    type: "main",
    time: "40 min",
    servings: 4,
    description: "Sticky, glossy chicken wings braised in soy or cola sauce.",
    ingredients: [
      "1 kg chicken wings",
      "Soy sauce, sugar or cola, ginger, garlic, star anise"
    ],
    directions: [
      "Brown wings, add liquid and aromatics, simmer until sticky and cooked."
    ],
    substitutions: "Cola version is popular with kids; pure soy is more savory."
  },
  {
    id: "stir-fried-beef-peppers",
    title: "Stir-Fried Beef with Green Peppers",
    cuisine: "Chinese",
    protein: "beef",
    type: "main",
    time: "20 min",
    servings: 4,
    description: "Simple home-style stir-fry of beef and green peppers.",
    ingredients: [
      "400 g beef, sliced",
      "3–4 green peppers, sliced",
      "Garlic, soy sauce, a little sugar"
    ],
    directions: [
      "Stir-fry beef, remove. Stir-fry peppers, combine with seasoning."
    ],
    substitutions: "Any color pepper works."
  },

  // ==================== JAPANESE (~9) ====================
  {
    id: "chicken-teriyaki",
    title: "Chicken Teriyaki",
    cuisine: "Japanese",
    protein: "chicken",
    type: "main",
    time: "25 min",
    servings: 4,
    description: "Juicy chicken glazed in a classic sweet-savory teriyaki sauce.",
    ingredients: [
      "600 g chicken thighs, skin-on preferred",
      "Sauce: 4 tbsp soy sauce, 3 tbsp mirin, 2 tbsp sake, 1–2 tbsp sugar"
    ],
    directions: [
      "Sear chicken skin-side down until golden. Flip and cook through.",
      "Add sauce and simmer until reduced and glossy, basting frequently. Slice and serve with rice."
    ],
    substitutions: "Mirin can be replaced with a little sugar + water or rice wine. Breast works but is drier."
  },
  {
    id: "karaage",
    title: "Karaage (Japanese Fried Chicken)",
    cuisine: "Japanese",
    protein: "chicken",
    type: "main",
    time: "40 min + marinate",
    servings: 4,
    description: "Crispy, juicy double-fried chicken marinated in soy, ginger and garlic.",
    ingredients: [
      "600 g chicken thigh, bite-size",
      "Marinade: 2 tbsp soy, 1 tbsp sake, 1 tbsp grated ginger, 1 garlic clove",
      "Potato starch or cornstarch for coating",
      "Oil for frying"
    ],
    directions: [
      "Marinate 30 min or longer. Coat in starch. Fry at 160 °C then again at 180 °C for extra crispiness. Serve with lemon and mayo."
    ],
    substitutions: "Boneless skinless thighs are ideal. Regular flour can be mixed with starch."
  },
  {
    id: "tonkatsu",
    title: "Tonkatsu (Pork Cutlet)",
    cuisine: "Japanese",
    protein: "pork",
    type: "main",
    time: "30 min",
    servings: 4,
    description: "Breaded and fried pork cutlet served with tonkatsu sauce and shredded cabbage.",
    ingredients: [
      "4 pork loin or tenderloin cutlets",
      "Flour, egg, panko breadcrumbs",
      "Tonkatsu sauce (or ketchup + Worcestershire + soy)"
    ],
    directions: [
      "Pound cutlets lightly. Season, dredge in flour → egg → panko. Deep-fry or pan-fry until golden. Rest and slice. Serve with sauce and cabbage."
    ],
    substitutions: "Chicken katsu is made the same way. Bake for a lighter version."
  },
  {
    id: "gyudon",
    title: "Gyudon (Beef Bowl)",
    cuisine: "Japanese",
    protein: "beef",
    type: "main",
    time: "20 min",
    servings: 4,
    description: "Thinly sliced beef and onion simmered in sweet-savory sauce over rice.",
    ingredients: [
      "400 g thinly sliced beef",
      "2 onions, sliced",
      "Sauce: 1/2 cup dashi or water, 3 tbsp soy, 2 tbsp mirin, 1 tbsp sugar, 1 tbsp sake"
    ],
    directions: [
      "Simmer onion in sauce until soft. Add beef and cook briefly until just done. Serve over hot rice, optional egg yolk or pickled ginger."
    ],
    substitutions: "Any thin-sliced beef works. Chicken version is oyakodon-style."
  },
  {
    id: "oyakodon",
    title: "Oyakodon (Chicken & Egg Rice Bowl)",
    cuisine: "Japanese",
    protein: "chicken",
    type: "main",
    time: "20 min",
    servings: "2–3",
    description: "Parent-and-child bowl of chicken and softly set egg over rice.",
    ingredients: [
      "300 g chicken thigh, sliced",
      "1 onion, sliced",
      "3–4 eggs",
      "Sauce: dashi, soy, mirin, sugar"
    ],
    directions: [
      "Simmer chicken and onion in sauce. Pour beaten eggs over and cover until just set. Slide over rice."
    ],
    substitutions: "Use chicken breast if preferred."
  },
  {
    id: "japanese-curry",
    title: "Japanese Chicken or Beef Curry",
    cuisine: "Japanese",
    protein: "chicken",
    type: "main",
    time: "50 min",
    servings: 6,
    description: "Mild, thick, slightly sweet Japanese-style curry with meat, potatoes and carrots.",
    ingredients: [
      "600 g chicken or beef cubes",
      "2 onions, 2 carrots, 2 potatoes",
      "Japanese curry roux blocks (or homemade)",
      "Apple or honey for sweetness (optional)"
    ],
    directions: [
      "Sauté onions, brown meat, add vegetables and water. Simmer until tender. Stir in roux until thickened. Serve with rice."
    ],
    substitutions: "Any protein works. Instant roux is standard and excellent."
  },
  {
    id: "yakitori",
    title: "Yakitori (Chicken Skewers)",
    cuisine: "Japanese",
    protein: "chicken",
    type: "main",
    time: "30 min",
    servings: 4,
    description: "Grilled chicken skewers glazed with tare sauce.",
    ingredients: [
      "600 g chicken thigh, cut into bite sizes",
      "Green onion pieces",
      "Tare: soy, mirin, sake, sugar"
    ],
    directions: [
      "Thread chicken and onion on skewers. Grill or pan-sear, brushing with tare until glossy and cooked."
    ],
    substitutions: "Beef or pork can be used for similar skewers."
  },
  {
    id: "shogayaki",
    title: "Shogayaki (Ginger Pork)",
    cuisine: "Japanese",
    protein: "pork",
    type: "main",
    time: "20 min",
    servings: 4,
    description: "Thin pork slices in a gingery sweet-savory sauce.",
    ingredients: [
      "400 g thinly sliced pork",
      "Sauce: grated ginger, soy, mirin, sake, a little sugar"
    ],
    directions: [
      "Quickly pan-fry pork. Add sauce and cook until coated and slightly reduced. Serve with rice and shredded cabbage."
    ],
    substitutions: "Chicken or beef slices work."
  },
  {
    id: "katsudon",
    title: "Katsudon (Pork Cutlet Rice Bowl)",
    cuisine: "Japanese",
    protein: "pork",
    type: "main",
    time: "35 min",
    servings: 2,
    description: "Tonkatsu simmered with egg and onion over rice.",
    ingredients: [
      "2 tonkatsu (prepared as above)",
      "Onion, eggs, dashi-soy-mirin sauce"
    ],
    directions: [
      "Simmer onion in sauce. Add sliced katsu, pour egg over, cover until set. Serve over rice."
    ],
    substitutions: "Chicken katsu version is equally popular."
  },

  // ==================== THAI (~9) ====================
  {
    id: "pad-krapao",
    title: "Pad Kra Pao (Thai Basil Stir-Fry)",
    cuisine: "Thai",
    protein: "chicken",
    type: "main",
    time: "20 min",
    servings: "2–3",
    description: "Spicy, garlicky stir-fry of minced meat with holy basil – a Thai street-food favorite.",
    ingredients: [
      "400 g ground chicken, pork or beef",
      "4–6 garlic cloves, Thai chilies to taste",
      "Large handful Thai holy basil",
      "1 tbsp oyster sauce, 1 tbsp soy, 1 tsp fish sauce (optional), pinch sugar",
      "Fried egg for serving"
    ],
    directions: [
      "Pound or chop garlic and chilies. Stir-fry until fragrant. Add meat and cook through. Season, then toss in basil off heat. Serve over rice with a fried egg."
    ],
    substitutions: "Regular basil works in a pinch. Any ground meat is fine. Skip fish sauce if desired."
  },
  {
    id: "green-curry-chicken",
    title: "Thai Green Curry with Chicken",
    cuisine: "Thai",
    protein: "chicken",
    type: "main",
    time: "30 min",
    servings: 4,
    description: "Creamy, aromatic coconut curry with green curry paste and chicken.",
    ingredients: [
      "500 g chicken thigh, sliced",
      "2–3 tbsp green curry paste",
      "400 ml coconut milk",
      "Thai eggplant or zucchini, bamboo shoots, kaffir lime leaves, Thai basil"
    ],
    directions: [
      "Fry paste in a little coconut cream until fragrant. Add remaining coconut milk, chicken and vegetables. Simmer until cooked. Finish with basil and lime leaves."
    ],
    substitutions: "Pork or beef can replace chicken. Store-bought paste is excellent."
  },
  {
    id: "massaman-beef",
    title: "Massaman Curry with Beef",
    cuisine: "Thai",
    protein: "beef",
    type: "main",
    time: "1.5 hr",
    servings: "4–6",
    description: "Mild, rich, slightly sweet curry with beef, potatoes and peanuts.",
    ingredients: [
      "700 g beef stewing cuts",
      "Massaman curry paste",
      "Coconut milk, potatoes, onion, roasted peanuts, tamarind or lime, palm sugar"
    ],
    directions: [
      "Brown beef, simmer with paste and coconut milk until tender. Add potatoes and season. Finish with peanuts."
    ],
    substitutions: "Chicken cooks faster. Very mild and kid-friendly."
  },
  {
    id: "larb-gai",
    title: "Larb Gai (Thai Chicken Salad)",
    cuisine: "Thai",
    protein: "chicken",
    type: "main",
    time: "25 min",
    servings: 4,
    description: "Spicy, sour, herb-packed minced chicken salad from Isaan.",
    ingredients: [
      "400 g ground chicken",
      "Lime juice, fish sauce (or soy), toasted rice powder, chili flakes",
      "Shallots, mint, cilantro, green onion"
    ],
    directions: [
      "Cook chicken dry or with a little water. Season while hot with lime, fish sauce, chili and rice powder. Toss with herbs and shallots. Serve with sticky rice and raw vegetables."
    ],
    substitutions: "Pork is traditional (larb moo). Toasted rice powder is key for texture."
  },
  {
    id: "thai-basil-beef",
    title: "Thai Basil Beef",
    cuisine: "Thai",
    protein: "beef",
    type: "main",
    time: "20 min",
    servings: 3,
    description: "Quick beef stir-fry with plenty of basil and chilies.",
    ingredients: [
      "400 g thinly sliced beef",
      "Garlic, Thai chilies, basil, soy/oyster sauce"
    ],
    directions: [
      "Stir-fry garlic and chili, add beef, season, finish with basil."
    ],
    substitutions: "Same method as Pad Kra Pao."
  },
  {
    id: "gai-yang",
    title: "Gai Yang (Thai Grilled Chicken)",
    cuisine: "Thai",
    protein: "chicken",
    type: "main",
    time: "45 min + marinate",
    servings: 4,
    description: "Marinated and grilled chicken with lemongrass and garlic – perfect with sticky rice and som tam.",
    ingredients: [
      "1 whole chicken or pieces",
      "Lemongrass, garlic, cilantro roots, white pepper, fish sauce or soy, sugar"
    ],
    directions: [
      "Pound marinade ingredients and coat chicken. Marinate several hours. Grill or roast until cooked and charred in spots."
    ],
    substitutions: "Chicken thighs or drumsticks are easiest."
  },
  {
    id: "pad-see-ew",
    title: "Pad See Ew (with Beef or Pork)",
    cuisine: "Thai",
    protein: "beef",
    type: "main",
    time: "25 min",
    servings: "2–3",
    description: "Wide rice noodles stir-fried with meat, Chinese broccoli and sweet soy sauce.",
    ingredients: [
      "200 g wide rice noodles",
      "200 g beef or pork, sliced",
      "Chinese broccoli or regular broccoli",
      "Dark soy, light soy, sugar, garlic, egg"
    ],
    directions: [
      "Cook noodles. Stir-fry garlic, meat, egg, vegetables and noodles with sauces over high heat."
    ],
    substitutions: "Any protein works. Fresh or dried wide noodles."
  },
  {
    id: "tom-kha-gai",
    title: "Tom Kha Gai (Chicken Coconut Soup)",
    cuisine: "Thai",
    protein: "chicken",
    type: "main",
    time: "30 min",
    servings: 4,
    description: "Creamy, aromatic soup with galangal, lemongrass, kaffir lime and chicken.",
    ingredients: [
      "400 g chicken, sliced",
      "400 ml coconut milk + stock",
      "Galangal, lemongrass, kaffir lime leaves, chili, lime juice, fish sauce or soy, mushrooms"
    ],
    directions: [
      "Simmer aromatics in coconut milk and stock. Add chicken and mushrooms. Season with lime and fish sauce/soy. Do not boil hard after adding lime."
    ],
    substitutions: "Ginger can stand in for galangal in a pinch."
  },
  {
    id: "panang-curry",
    title: "Panang Curry with Beef or Chicken",
    cuisine: "Thai",
    protein: "beef",
    type: "main",
    time: "30 min",
    servings: 4,
    description: "Thick, rich, slightly sweet red curry with ground peanuts.",
    ingredients: [
      "500 g beef or chicken",
      "Panang or red curry paste, coconut milk, peanut butter or ground peanuts, kaffir lime, basil"
    ],
    directions: [
      "Fry paste in coconut cream, add meat and remaining coconut milk. Season and finish with lime leaves and basil."
    ],
    substitutions: "Very adaptable to any protein."
  },

  // ==================== KOREAN (~9) ====================
  {
    id: "bulgogi",
    title: "Bulgogi (Korean BBQ Beef)",
    cuisine: "Korean",
    protein: "beef",
    type: "main",
    time: "30 min + marinate",
    servings: 4,
    description: "Thinly sliced beef in a sweet-savory pear-garlic marinade, grilled or pan-fried.",
    ingredients: [
      "600 g thinly sliced beef (ribeye or sirloin)",
      "Marinade: soy sauce, sugar, grated pear or apple, garlic, sesame oil, green onion, black pepper"
    ],
    directions: [
      "Mix marinade and coat beef at least 30 minutes (overnight better). Grill or stir-fry quickly over high heat. Serve with rice, lettuce wraps and banchan."
    ],
    substitutions: "Chicken or pork bulgogi versions exist. No pear? Use kiwi or extra sugar + onion."
  },
  {
    id: "dakgalbi",
    title: "Dakgalbi (Spicy Stir-Fried Chicken)",
    cuisine: "Korean",
    protein: "chicken",
    type: "main",
    time: "40 min",
    servings: 4,
    description: "Spicy, sweet chicken stir-fried with cabbage, sweet potato and rice cakes.",
    ingredients: [
      "700 g boneless chicken thigh",
      "Gochujang, gochugaru, soy, garlic, sugar, cabbage, sweet potato, perilla leaves optional, tteok (rice cakes)"
    ],
    directions: [
      "Mix chicken with sauce. Stir-fry with vegetables and rice cakes until everything is cooked and coated. Serve with lettuce or perilla wraps."
    ],
    substitutions: "Adjust gochugaru for heat level."
  },
  {
    id: "samgyeopsal",
    title: "Samgyeopsal (Grilled Pork Belly)",
    cuisine: "Korean",
    protein: "pork",
    type: "main",
    time: "30 min",
    servings: 4,
    description: "Thick slices of pork belly grilled at the table and wrapped in lettuce with ssamjang.",
    ingredients: [
      "800 g thick-cut pork belly slices",
      "Lettuce, perilla, garlic, ssamjang, kimchi, grilled onions"
    ],
    directions: [
      "Grill pork belly until cooked and edges crisp. Wrap with vegetables and sauce. Eat immediately."
    ],
    substitutions: "Pre-sliced thin pork belly also works."
  },
  {
    id: "galbi",
    title: "Galbi (Korean Short Ribs)",
    cuisine: "Korean",
    protein: "beef",
    type: "main",
    time: "30 min + marinate",
    servings: 4,
    description: "Sweet-savory marinated beef short ribs, grilled.",
    ingredients: [
      "1 kg LA-style or English short ribs",
      "Marinade similar to bulgogi (soy, sugar, pear, garlic, sesame oil)"
    ],
    directions: [
      "Marinate several hours or overnight. Grill over medium-high heat, flipping often, until caramelized and cooked."
    ],
    substitutions: "Chicken wings or pork ribs can use the same marinade."
  },
  {
    id: "jeyuk-bokkeum",
    title: "Jeyuk Bokkeum (Spicy Pork Stir-Fry)",
    cuisine: "Korean",
    protein: "pork",
    type: "main",
    time: "25 min",
    servings: 4,
    description: "Spicy-sweet stir-fried pork with gochujang and vegetables.",
    ingredients: [
      "500 g thinly sliced pork",
      "Gochujang, soy, garlic, sugar, onion, carrot, green onion"
    ],
    directions: [
      "Mix pork with sauce. Stir-fry with vegetables until cooked and sauce is thickened."
    ],
    substitutions: "Chicken works well."
  },
  {
    id: "dakbokkeumtang",
    title: "Dakbokkeumtang (Spicy Braised Chicken)",
    cuisine: "Korean",
    protein: "chicken",
    type: "main",
    time: "50 min",
    servings: 4,
    description: "Hearty spicy chicken stew with potatoes and carrots.",
    ingredients: [
      "1 kg chicken pieces",
      "Gochujang, gochugaru, soy, garlic, potato, carrot, onion"
    ],
    directions: [
      "Simmer chicken with sauce and vegetables until tender and sauce is reduced."
    ],
    substitutions: "Bone-in pieces give the best flavor."
  },
  {
    id: "korean-fried-chicken",
    title: "Korean Fried Chicken (Dakgangjeong style)",
    cuisine: "Korean",
    protein: "chicken",
    type: "main",
    time: "50 min",
    servings: 4,
    description: "Double-fried crispy chicken tossed in a sweet-spicy glaze.",
    ingredients: [
      "1 kg chicken wings or pieces",
      "Potato starch or cornstarch",
      "Sauce: gochujang, soy, honey or sugar, garlic, sesame"
    ],
    directions: [
      "Coat and double-fry chicken. Toss in warm sauce until coated. Sprinkle sesame seeds."
    ],
    substitutions: "Soy-garlic version is popular too."
  },
  {
    id: "japchae",
    title: "Japchae (with Beef or Pork)",
    cuisine: "Korean",
    protein: "beef",
    type: "main",
    time: "40 min",
    servings: "4–6",
    description: "Glass noodles stir-fried with vegetables and meat in a sesame-soy dressing.",
    ingredients: [
      "200 g sweet potato starch noodles",
      "100–150 g beef or pork, sliced",
      "Spinach, carrot, onion, mushroom, soy, sesame oil, sugar, garlic"
    ],
    directions: [
      "Cook noodles. Stir-fry each vegetable and meat separately. Toss everything with seasoning."
    ],
    substitutions: "Can be made vegetarian by omitting meat."
  },
  {
    id: "bossam",
    title: "Bossam (Boiled Pork Belly Wraps)",
    cuisine: "Korean",
    protein: "pork",
    type: "main",
    time: "1.5 hr",
    servings: 6,
    description: "Tender boiled pork belly wrapped in cabbage or lettuce with kimchi and sauces.",
    ingredients: [
      "1 kg pork belly or shoulder",
      "Ginger, garlic, doenjang or salt for boiling",
      "Napa cabbage leaves, kimchi, ssamjang, raw garlic, oysters optional (skip)"
    ],
    directions: [
      "Boil pork with aromatics until tender. Slice. Serve with wraps and condiments."
    ],
    substitutions: "A classic celebratory dish."
  },

  // ==================== VIETNAMESE (~9) ====================
  {
    id: "pho-bo",
    title: "Phở Bò (Beef Pho) – simplified home version",
    cuisine: "Vietnamese",
    protein: "beef",
    type: "main",
    time: "2–3 hr",
    servings: 6,
    description: "Aromatic beef noodle soup with a clear, deeply flavored broth.",
    ingredients: [
      "1 kg beef bones + 500 g brisket or chuck",
      "Onion, ginger (charred), star anise, cinnamon, cloves, cardamom",
      "Fish sauce or soy, salt, sugar",
      "Rice noodles, thinly sliced raw steak, herbs (basil, cilantro), bean sprouts, lime, chili"
    ],
    directions: [
      "Char onion and ginger. Simmer bones and meat with spices 2+ hours. Season. Slice meat. Assemble bowls with noodles, raw steak (cooked by hot broth), herbs and garnishes."
    ],
    substitutions: "Chicken pho (phở gà) uses chicken bones and meat. Store-bought broth can be upgraded with spices."
  },
  {
    id: "bun-cha",
    title: "Bún Chả (Grilled Pork with Noodles)",
    cuisine: "Vietnamese",
    protein: "pork",
    type: "main",
    time: "45 min + marinate",
    servings: 4,
    description: "Hanoi-style grilled pork meatballs and slices served with rice noodles, herbs and dipping sauce.",
    ingredients: [
      "500 g ground pork + 300 g sliced pork belly or shoulder",
      "Fish sauce or soy, sugar, garlic, shallot, pepper",
      "Rice vermicelli, lettuce, herbs, pickled carrot/daikon, nuoc cham"
    ],
    directions: [
      "Marinate and form meatballs; marinate slices. Grill or pan-sear. Serve with noodles, herbs and dipping sauce."
    ],
    substitutions: "Chicken can be used for a lighter version."
  },
  {
    id: "bo-kho",
    title: "Bò Kho (Vietnamese Beef Stew)",
    cuisine: "Vietnamese",
    protein: "beef",
    type: "main",
    time: "2 hr",
    servings: 6,
    description: "Fragrant lemongrass beef stew, often served with baguette or noodles.",
    ingredients: [
      "1 kg beef chuck or shank, cubed",
      "Lemongrass, garlic, shallot, five-spice, tomato, carrot, star anise, coconut water or stock"
    ],
    directions: [
      "Marinate beef. Brown, then simmer with aromatics and liquid until tender. Serve with bread or noodles."
    ],
    substitutions: "A Vietnamese classic comfort dish."
  },
  {
    id: "thit-kho",
    title: "Thịt Kho (Caramelized Braised Pork)",
    cuisine: "Vietnamese",
    protein: "pork",
    type: "main",
    time: "1.5 hr",
    servings: 6,
    description: "Pork belly or shoulder braised in coconut water and caramel sauce – often with hard-boiled eggs.",
    ingredients: [
      "1 kg pork belly or shoulder",
      "Sugar for caramel, fish sauce or soy, coconut water or soda, garlic, shallot, hard-boiled eggs"
    ],
    directions: [
      "Make caramel, add pork and seasonings, then coconut water. Simmer until tender and sauce is reduced. Add eggs near the end."
    ],
    substitutions: "Chicken thighs can be used for a lighter version."
  },
  {
    id: "goi-ga",
    title: "Gỏi Gà (Vietnamese Chicken Salad)",
    cuisine: "Vietnamese",
    protein: "chicken",
    type: "main",
    time: "30 min",
    servings: 4,
    description: "Shredded chicken with cabbage, herbs, fried shallots and a bright nuoc cham dressing.",
    ingredients: [
      "2 cups shredded cooked chicken",
      "Shredded cabbage or banana blossom, carrot, mint, cilantro, fried shallots, roasted peanuts",
      "Dressing: lime, fish sauce or soy, sugar, chili, garlic"
    ],
    directions: [
      "Toss all salad ingredients with dressing just before serving."
    ],
    substitutions: "Rotisserie chicken makes it fast."
  },
  {
    id: "bo-luc-lac",
    title: "Bò Lúc Lắc (Shaking Beef)",
    cuisine: "Vietnamese",
    protein: "beef",
    type: "main",
    time: "25 min",
    servings: 4,
    description: "Cubed beef seared hard and tossed with a savory-sweet sauce, served over watercress or greens.",
    ingredients: [
      "500 g beef (sirloin or tenderloin), cubed",
      "Soy, oyster sauce, sugar, garlic, black pepper, butter optional",
      "Watercress or lettuce, tomato, onion"
    ],
    directions: [
      "Marinate beef briefly. Sear in a very hot pan in batches (shake the pan). Deglaze with sauce. Serve over greens."
    ],
    substitutions: "A special-occasion dish that comes together quickly."
  },
  {
    id: "lemongrass-chicken",
    title: "Vietnamese Lemongrass Chicken",
    cuisine: "Vietnamese",
    protein: "chicken",
    type: "main",
    time: "30 min + marinate",
    servings: 4,
    description: "Chicken marinated in lemongrass, garlic and fish sauce, then grilled or pan-fried.",
    ingredients: [
      "700 g chicken thighs",
      "Lemongrass, garlic, shallot, fish sauce or soy, sugar, pepper, oil"
    ],
    directions: [
      "Blend or pound marinade and coat chicken. Marinate 1 hour+. Grill, bake or pan-fry until cooked and caramelized."
    ],
    substitutions: "Pork chops or beef work with the same marinade."
  },
  {
    id: "nem-nuong",
    title: "Nem Nướng (Grilled Pork Skewers)",
    cuisine: "Vietnamese",
    protein: "pork",
    type: "main",
    time: "45 min",
    servings: 4,
    description: "Seasoned ground pork formed onto skewers and grilled until springy and browned.",
    ingredients: [
      "600 g ground pork (not too lean)",
      "Garlic, shallot, fish sauce or soy, sugar, pepper, a little starch or baking powder for springiness"
    ],
    directions: [
      "Mix vigorously until sticky. Form around skewers. Grill until cooked and browned. Serve with rice paper, herbs and dipping sauce."
    ],
    substitutions: "Can be pan-fried as patties."
  },
  {
    id: "banh-mi-pork",
    title: "Bánh Mì with Grilled Pork or Chicken",
    cuisine: "Vietnamese",
    protein: "pork",
    type: "main",
    time: "30 min",
    servings: 4,
    description: "Crispy baguette filled with seasoned meat, pickled vegetables, cilantro and mayo or pâté.",
    ingredients: [
      "Baguettes",
      "Grilled or roasted pork/chicken (use lemongrass or char siu style)",
      "Pickled carrot & daikon, cucumber, cilantro, jalapeño, mayo"
    ],
    directions: [
      "Toast bread lightly. Spread mayo, add meat, pickles, cucumber, herbs and chili."
    ],
    substitutions: "Any leftover grilled or roasted meat works beautifully."
  },

  // ==================== SIDES & APPETIZERS (large list) ====================
  {
    id: "pork-gyoza",
    title: "Pork Gyoza (Japanese Dumplings)",
    cuisine: "Japanese",
    protein: "pork",
    type: "appetizer",
    time: "45 min",
    servings: "4–6",
    description: "Pan-fried dumplings with juicy pork and cabbage filling.",
    ingredients: [
      "300 g ground pork",
      "2 cups finely chopped cabbage, green onion, garlic, ginger",
      "Gyoza wrappers, soy-vinegar dipping sauce"
    ],
    directions: [
      "Mix filling, wrap, pan-fry until bottoms are golden, then steam with a little water until cooked."
    ],
    substitutions: "Chicken or beef filling works."
  },
  {
    id: "spring-rolls-pork",
    title: "Pork Spring Rolls (Fried)",
    cuisine: "Chinese",
    protein: "pork",
    type: "appetizer",
    time: "40 min",
    servings: 6,
    description: "Crispy fried spring rolls filled with pork and vegetables.",
    ingredients: [
      "Ground pork, shredded cabbage, carrot, glass noodles, spring roll wrappers, oil for frying"
    ],
    directions: [
      "Mix filling, wrap tightly, deep-fry until golden. Serve with sweet chili or vinegar sauce."
    ],
    substitutions: "Chicken or vegetarian versions are easy."
  },
  {
    id: "cucumber-salad",
    title: "Chinese Smashed Cucumber Salad",
    cuisine: "Chinese",
    protein: "veg",
    type: "side",
    time: "15 min",
    servings: 4,
    description: "Refreshing, garlicky, slightly spicy smashed cucumbers.",
    ingredients: [
      "2–3 cucumbers, garlic, soy, vinegar, sesame oil, chili oil, sugar, cilantro"
    ],
    directions: [
      "Smash cucumbers, salt briefly, drain, toss with dressing."
    ],
    substitutions: "Always a hit."
  },
  {
    id: "kimchi",
    title: "Quick Cucumber or Cabbage Kimchi-style",
    cuisine: "Korean",
    protein: "veg",
    type: "side",
    time: "20 min + rest",
    servings: 6,
    description: "Fast, spicy fermented-style side.",
    ingredients: [
      "Napa cabbage or cucumber, gochugaru, garlic, ginger, fish sauce or soy, sugar, green onion"
    ],
    directions: [
      "Salt vegetables, rinse, mix with seasoning paste. Rest at least a few hours."
    ],
    substitutions: "Store-bought kimchi is fine for serving."
  },
  {
    id: "pickled-carrot-daikon",
    title: "Vietnamese Pickled Carrot & Daikon (Đồ Chua)",
    cuisine: "Vietnamese",
    protein: "veg",
    type: "side",
    time: "15 min + pickle",
    servings: 8,
    description: "Crunchy, sweet-tangy pickles essential for bánh mì and many Vietnamese dishes.",
    ingredients: [
      "Carrot and daikon, julienned",
      "Rice vinegar, sugar, water, salt"
    ],
    directions: [
      "Dissolve sugar and salt in vinegar + water. Pour over vegetables. Refrigerate at least 1 hour."
    ],
    substitutions: "Keeps for weeks in the fridge."
  },
  {
    id: "edamame",
    title: "Salted Edamame",
    cuisine: "Japanese",
    protein: "veg",
    type: "appetizer",
    time: "10 min",
    servings: 4,
    description: "Simple boiled and salted soybeans in the pod.",
    ingredients: ["Frozen edamame, salt, optional garlic or chili"],
    directions: ["Boil according to package, drain, toss with coarse salt."],
    substitutions: "A perfect starter."
  },
  {
    id: "scallion-pancakes",
    title: "Scallion Pancakes (Cong You Bing)",
    cuisine: "Chinese",
    protein: "veg",
    type: "appetizer",
    time: "40 min",
    servings: 4,
    description: "Flaky, crispy layered flatbreads with green onions.",
    ingredients: [
      "Flour, water, salt, lots of green onions, oil"
    ],
    directions: [
      "Make dough, roll thin, brush oil, sprinkle onions, roll up and coil, flatten and pan-fry until golden."
    ],
    substitutions: "Great with any meal."
  },
  {
    id: "steamed-buns",
    title: "Steamed Pork Buns (Bao)",
    cuisine: "Chinese",
    protein: "pork",
    type: "appetizer",
    time: "2 hr (incl. dough)",
    servings: 8,
    description: "Fluffy steamed buns filled with savory pork.",
    ingredients: [
      "Yeast dough, ground pork filling with soy, oyster sauce, sugar, green onion"
    ],
    directions: [
      "Make and proof dough. Fill, pleat, steam 12–15 minutes."
    ],
    substitutions: "Chicken or vegetable fillings work."
  },
  {
    id: "fried-rice",
    title: "Egg Fried Rice with Pork or Chicken",
    cuisine: "Chinese",
    protein: "pork",
    type: "side",
    time: "20 min",
    servings: 4,
    description: "Classic day-old rice stir-fried with egg, meat and vegetables.",
    ingredients: [
      "3–4 cups cold cooked rice",
      "2 eggs, diced cooked pork or chicken, green onion, soy sauce, garlic"
    ],
    directions: [
      "Scramble egg, remove. Stir-fry meat and aromatics, add rice and soy, break up clumps, return egg and green onion."
    ],
    substitutions: "Use any leftover meat."
  },
  {
    id: "garlic-bok-choy",
    title: "Garlic Bok Choy or Chinese Greens",
    cuisine: "Chinese",
    protein: "veg",
    type: "side",
    time: "10 min",
    servings: 4,
    description: "Quick stir-fried greens with garlic.",
    ingredients: ["Bok choy or gai lan, garlic, oil, salt or soy, a splash of water"],
    directions: ["Stir-fry garlic, add greens and a little water, cover briefly until wilted but still bright."],
    substitutions: "Any Asian green works."
  },
  {
    id: "miso-soup",
    title: "Simple Miso Soup",
    cuisine: "Japanese",
    protein: "veg",
    type: "side",
    time: "10 min",
    servings: 4,
    description: "Everyday Japanese soup with tofu and wakame.",
    ingredients: ["Dashi or water, miso paste, soft tofu, wakame, green onion"],
    directions: ["Heat dashi, dissolve miso off heat, add tofu and wakame."],
    substitutions: "Never boil miso hard."
  },
  {
    id: "banchan-spinach",
    title: "Sigeumchi Namul (Seasoned Spinach)",
    cuisine: "Korean",
    protein: "veg",
    type: "side",
    time: "15 min",
    servings: 4,
    description: "Blanched spinach dressed with sesame, garlic and soy.",
    ingredients: ["Spinach, sesame oil, soy, garlic, sesame seeds, green onion"],
    directions: ["Blanch, squeeze dry, toss with seasoning."],
    substitutions: "A classic banchan."
  },
  {
    id: "thai-cucumber-relish",
    title: "Thai Cucumber Relish (Ajad)",
    cuisine: "Thai",
    protein: "veg",
    type: "side",
    time: "10 min",
    servings: 4,
    description: "Sweet-sour cucumber relish served with satay or fried foods.",
    ingredients: ["Cucumber, shallot, chili, vinegar, sugar, water"],
    directions: ["Combine everything and let sit 10 minutes."],
    substitutions: "Refreshing contrast to rich dishes."
  },
  {
    id: "pork-wontons",
    title: "Pork Wontons (boiled or in soup)",
    cuisine: "Chinese",
    protein: "pork",
    type: "appetizer",
    time: "40 min",
    servings: 6,
    description: "Delicate pork-filled wontons served in broth or with chili oil.",
    ingredients: ["Ground pork, ginger, green onion, wonton wrappers, broth or chili oil"],
    directions: ["Mix filling, wrap, boil until floating and cooked. Serve as desired."],
    substitutions: "Chicken filling is also common."
  },
  {
    id: "lettuce-wraps",
    title: "Chicken or Pork Lettuce Wraps",
    cuisine: "Chinese",
    protein: "chicken",
    type: "appetizer",
    time: "25 min",
    servings: 4,
    description: "Savory minced meat with water chestnuts served in crisp lettuce cups.",
    ingredients: ["Ground chicken or pork, water chestnuts, garlic, ginger, soy, hoisin, lettuce leaves"],
    directions: ["Stir-fry meat and aromatics, season, serve in lettuce."],
    substitutions: "A lighter, interactive starter."
  },
  {
    id: "sesame-noodles",
    title: "Cold Sesame Noodles",
    cuisine: "Chinese",
    protein: "veg",
    type: "side",
    time: "20 min",
    servings: 4,
    description: "Noodles in a rich sesame-peanut sauce, served cold or room temperature.",
    ingredients: ["Noodles, sesame paste or peanut butter, soy, vinegar, garlic, chili oil, cucumber"],
    directions: ["Cook noodles, rinse. Mix sauce and toss. Garnish with cucumber and green onion."],
    substitutions: "Add shredded chicken for a fuller meal."
  },
  {
    id: "grilled-corn-korean",
    title: "Korean-style Grilled Corn or Street Toast sides",
    cuisine: "Korean",
    protein: "veg",
    type: "side",
    time: "15 min",
    servings: 4,
    description: "Simple grilled or buttered corn, or pair any meal with kimchi and rice.",
    ingredients: ["Corn, butter, salt or gochugaru"],
    directions: ["Grill or boil corn, brush with butter and seasoning."],
    substitutions: "Always serve rice and at least one banchan."
  },
  {
    id: "sticky-rice",
    title: "Thai Sticky Rice",
    cuisine: "Thai",
    protein: "veg",
    type: "side",
    time: "30 min + soak",
    servings: 4,
    description: "Essential accompaniment to many Thai and Lao dishes.",
    ingredients: ["Glutinous (sticky) rice"],
    directions: ["Soak several hours, steam until translucent and sticky."],
    substitutions: "A must with larb and grilled meats."
  },
  {
    id: "rice-paper-rolls",
    title: "Fresh Rice Paper Rolls (with pork or chicken)",
    cuisine: "Vietnamese",
    protein: "pork",
    type: "appetizer",
    time: "40 min",
    servings: 4,
    description: "Fresh summer rolls with herbs, noodles and sliced meat.",
    ingredients: [
      "Rice paper, rice vermicelli, lettuce, mint, cilantro, cucumber, cooked pork or chicken, peanut or nuoc cham dipping sauce"
    ],
    directions: [
      "Dip rice paper briefly in water. Layer ingredients and roll tightly. Serve with dipping sauce."
    ],
    substitutions: "Very flexible – use whatever cooked meat you have."
  }
];
