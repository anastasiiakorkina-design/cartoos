import type { PlateVariant } from "@/components/plate";

/**
 * The Cartoos menu — transcribed from the restaurant's own menu.
 * Prices in GBP. Allergen codes as published by the restaurant:
 * C celery · CR crustaceans · E egg · F fish · G gluten · L lupin ·
 * M milk · MO molluscs · MU mustard · N nuts · SO soya · SU sulphites
 */

export type DietaryTag = "V" | "VG";

export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  signature?: boolean;
  /** V vegetarian · VG vegan */
  tags?: DietaryTag[];
  /** Allergen codes as published on the restaurant's menu */
  allergens?: string[];
};

export type MenuSection = {
  title?: string;
  note?: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  label: string;
  intro: string;
  variant: PlateVariant;
  sections: MenuSection[];
};

export const MENU: MenuCategory[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    intro:
      "Served from 09:00, seven days a week — cooked breakfasts, Benedicts and fresh bakery. Fully halal, from the turkey bacon to the chicken sausages.",
    variant: "stone",
    sections: [
      {
        title: "Cooked Breakfasts",
        items: [
          {
            name: "Full English Breakfast",
            description:
              "Eggs your way — fried, scrambled or poached. Turkey bacon, chicken sausages, baked beans, grilled tomatoes, mushrooms and hash browns, served with toast",
            price: "14.99",
            signature: true,
            allergens: ["CR", "E", "L", "M"],
          },
          {
            name: "Veggie Breakfast",
            description:
              "Eggs your way — fried, scrambled or poached. Grilled halloumi, mushrooms, baked beans, grilled tomatoes, hash browns and toast",
            price: "11.99",
            tags: ["V"],
            allergens: ["CR", "E", "L", "M"],
          },
          {
            name: "Steak & Eggs",
            description:
              "Aged rump steak (recommended medium), two sunny-side eggs, baked beans, grilled tomato, ciabatta and butter",
            price: "21.99",
            allergens: ["E", "G", "M"],
          },
        ],
      },
      {
        title: "Benedicts",
        items: [
          {
            name: "Turkey Bacon & Avocado Benedict",
            description:
              "Crispy turkey bacon, mashed avocado and a poached egg layered on a brioche muffin, topped with hollandaise, served with salad",
            price: "10.99",
            allergens: ["E", "G", "M"],
          },
          {
            name: "Eggs Benedict",
            description:
              "Two poached eggs and turkey bacon on brioche, topped with hollandaise, served with salad",
            price: "7.99",
            allergens: ["E", "L", "SO"],
          },
          {
            name: "Salmon Benedict",
            description:
              "Two poached eggs and smoked salmon on brioche, topped with hollandaise, served with salad",
            price: "8.50",
            allergens: ["CR", "L", "E", "SO"],
          },
          {
            name: "Cream Cheese & Smoked Salmon Benedict",
            description:
              "Smooth cream cheese and smoked salmon with a poached egg, finished with hollandaise on a toasted English muffin, served with salad",
            price: "10.99",
            allergens: ["E", "G", "M", "F"],
          },
          {
            name: "Royale Benedict",
            description: "Brioche muffin, spinach and cream cheese, asparagus on the side",
            price: "10.99",
            tags: ["V"],
            allergens: ["E", "G", "M"],
          },
        ],
      },
      {
        title: "Omelettes",
        items: [
          {
            name: "Cheese & Onion Omelette",
            description: "Served with toast, butter, turkey bacon and salad",
            price: "7.99",
            allergens: ["CR", "L", "M"],
          },
          {
            name: "Turkey Bacon & Mushroom Omelette",
            description: "Served with toast, butter, baked beans, hash browns and salad",
            price: "8.99",
            allergens: ["CR", "E", "L", "SO"],
          },
          {
            name: "Spiced Chicken Omelette",
            description: "Served with toast, butter, goat cheese and salad",
            price: "9.99",
            allergens: ["CR", "L", "SO"],
          },
          {
            name: "Plain Omelette",
            description:
              "Served with toast, butter, baked beans, hash browns, chicken sausage and salad",
            price: "7.99",
            allergens: ["E", "CR", "L"],
          },
        ],
      },
      {
        title: "On Toast & Bakery",
        items: [
          {
            name: "Avocado on Toast, Smoked Salmon",
            description: "Served with salad",
            price: "8.99",
            allergens: ["F", "G"],
          },
          {
            name: "Avocado on Toast, Scrambled Eggs",
            description: "Served with salad",
            price: "7.99",
            tags: ["V"],
            allergens: ["E", "G"],
          },
          { name: "Fresh Croissant", price: "3.50", tags: ["V"], allergens: ["G", "M", "E"] },
          { name: "Pain au Chocolat", price: "3.50", tags: ["V"], allergens: ["G", "M", "E"] },
          { name: "Cakes", description: "Ask for today's counter", price: "4.95", tags: ["V"] },
        ],
      },
      {
        title: "Sandwiches & Brunch",
        items: [
          {
            name: "Cartoos Club Sandwich",
            description:
              "Layers of chicken and crispy turkey bacon with lettuce, tomato, fried egg and mayo between toasted bread, served with chips",
            price: "6.99",
            allergens: ["E", "G", "M"],
          },
          {
            name: "Pesto Sandwich",
            description:
              "Fresh basil pesto, mozzarella and sliced tomatoes on toasted ciabatta with a hint of balsamic glaze, served with chips",
            price: "6.99",
            tags: ["V"],
            allergens: ["G", "M", "N"],
          },
          {
            name: "Open-Face Sandwich",
            description:
              "A slice of sourdough topped with chicken, cheese, cherry tomatoes and fresh rocket, served with chips",
            price: "6.99",
            allergens: ["G", "M"],
          },
        ],
      },
    ],
  },
  {
    id: "starters",
    label: "Starters & Mezze",
    intro:
      "Cold mezze and hot starters for the middle of the table — hummus and boreks the way the Mediterranean makes them.",
    variant: "mezze",
    sections: [
      {
        title: "Cold Mezze",
        items: [
          { name: "Hummus", price: "6.50", tags: ["V", "VG"], allergens: ["C", "M", "G"] },
          {
            name: "Hummus with Lamb & Pine Nuts",
            price: "8.50",
            signature: true,
            allergens: ["C", "M", "G", "N"],
          },
          { name: "Tabbouleh", price: "5.50", tags: ["V", "VG"], allergens: ["C", "M"] },
          { name: "Baba Ghanoush", price: "5.50", tags: ["V", "VG"], allergens: ["C", "M"] },
          {
            name: "Mediterranean Marinated Olives",
            price: "5.50",
            tags: ["V", "VG"],
            allergens: ["C"],
          },
        ],
      },
      {
        title: "Hot Starters",
        items: [
          { name: "Falafel", price: "7.50", tags: ["V"], allergens: ["C", "M"] },
          { name: "Chicken Wings", price: "7.50", allergens: ["C", "M"] },
          {
            name: "Lamb Borek",
            description: "Filo pastry",
            price: "8.50",
            allergens: ["C", "M", "G"],
          },
          {
            name: "Chicken Borek",
            description: "Filo pastry",
            price: "7.50",
            allergens: ["C", "M", "E", "G"],
          },
          {
            name: "Cheese Borek",
            description: "Filo pastry",
            price: "6.50",
            tags: ["V"],
            allergens: ["C", "M", "G"],
          },
          { name: "Veg Moussaka", price: "8.45", tags: ["V"], allergens: ["C", "M"] },
        ],
      },
      {
        title: "From the Kitchen",
        items: [
          {
            name: "Creamy Garlic Prawns",
            description:
              "Pan-fried prawns cooked in a creamy garlic and herb sauce with mushrooms, onions and mustard",
            price: "9.95",
            allergens: ["M", "MU", "CR", "G"],
          },
          {
            name: "Bruschetta",
            description:
              "Mixture of tomatoes, red onion and balsamic glaze with fresh basil, served on a crispy garlic-butter baguette",
            price: "7.95",
            tags: ["V"],
            allergens: ["C", "SU", "G"],
          },
          {
            name: "Calamari",
            description: "Calamari strips served with tartar sauce",
            price: "8.95",
            allergens: ["C", "M", "E", "F", "G"],
          },
          {
            name: "Soup of the Day",
            description: "Freshly made every day, served with warm bread and butter",
            price: "6.99",
            allergens: ["M"],
          },
          {
            name: "Prawn Skewer",
            description: "Marinated prawns on a skewer, served with rocket, lemon and tartar sauce",
            price: "9.95",
            allergens: ["CR", "F", "M"],
          },
          {
            name: "Garlic Mushrooms",
            description: "Freshly made every day, served with warm bread and butter",
            price: "7.95",
            tags: ["V"],
            allergens: ["CR", "M", "MU", "G"],
          },
          {
            name: "Mussels",
            description:
              "Fresh mussels cooked in a rich homemade sauce with garlic butter, parsley and herbs",
            price: "8.95",
            allergens: ["CR", "F", "M"],
          },
        ],
      },
    ],
  },
  {
    id: "grill",
    label: "Charcoal Grill",
    intro:
      "Kofta, shish and whole chickens over live charcoal — the fire this kitchen is named for. Every dish fully halal.",
    variant: "coals",
    sections: [
      {
        title: "Kofta & Shish",
        items: [
          { name: "Chicken Kofta", price: "16.95", allergens: ["C"] },
          { name: "Lamb Kofta", price: "18.95", allergens: ["C", "M"] },
          { name: "Mixed Kofta", price: "17.95", allergens: ["C", "SU"] },
          { name: "Chicken Shish", price: "18.50", allergens: ["C", "M", "E"] },
          { name: "Lamb Shish", price: "20.50", allergens: ["C"] },
          { name: "Mixed Shish", price: "19.50", allergens: ["C", "M"] },
          { name: "Chicken Shashlik", price: "18.95", allergens: ["C", "M"] },
          { name: "Lamb Shashlik", price: "21.50", allergens: ["C", "M"] },
        ],
      },
      {
        title: "From the Grill",
        items: [
          { name: "Lamb Chops", price: "21.95", signature: true, allergens: ["C"] },
          { name: "Half Grilled Chicken", price: "15.95", allergens: ["C", "M"] },
          { name: "Full Grilled Chicken", price: "22.95", allergens: ["C", "M"] },
          { name: "Chicken Wings", price: "17.95", allergens: ["C", "M"] },
          { name: "Mixed Grill for One", price: "24.95", allergens: ["C"] },
        ],
      },
      {
        title: "Feasts & Chef's Special",
        items: [
          {
            name: "Mixed Grill for Two",
            description:
              "Lamb shish, chicken shish, chicken wings, chicken kofta, lamb kofta, lamb chops and lamb ribs",
            price: "59.95",
            signature: true,
          },
          {
            name: "Mixed Grill for Four",
            description:
              "Lamb borek, hummus, baba ghanoush, lamb shish, chicken shish, chicken wings, chicken kofta, lamb kofta, lamb chops and lamb ribs",
            price: "105.95",
          },
          {
            name: "Lamb Shank",
            description:
              "Slow-cooked lamb shank served with rice, fresh bread and your choice of lentil, okra or aubergine stew",
            price: "18.50",
            signature: true,
          },
        ],
      },
    ],
  },
  {
    id: "steaks",
    label: "Steaks & Burgers",
    intro:
      "Matured Scotch beef from the grill — every steak served with sautéed potatoes or chips — and a stacked line-up of burgers built on Cartoos' secret sauce.",
    variant: "steak",
    sections: [
      {
        title: "Steaks",
        note: "Served with sautéed potatoes or chips",
        items: [
          {
            name: "Rump, 12oz",
            description: "A great all-rounder — beefy and fully flavoured",
            price: "23.95",
            allergens: ["M", "MU"],
          },
          {
            name: "Ribeye, 12oz",
            description: "Succulent, marbled and matured",
            price: "29.95",
            signature: true,
            allergens: ["M", "MU"],
          },
          {
            name: "Sirloin, 11oz",
            description: "Naturally lean with a rich, meaty flavour",
            price: "26.95",
            allergens: ["M", "MU"],
          },
          {
            name: "Fillet, 8oz",
            description: "The leanest of all, and the most tender",
            price: "36.95",
            allergens: ["M", "MU"],
          },
        ],
      },
      {
        title: "Burgers",
        items: [
          {
            name: "Giotto Tower",
            description:
              "Stacked tower of premium beef cooked with Cartoos' secret burger sauce, topped with lettuce and relish, served with onion rings",
            price: "18.95",
            signature: true,
            allergens: ["CR", "M", "G"],
          },
          {
            name: "Classic Smash",
            description:
              "Beef burger made with Cartoos' secret burger sauce, topped with gherkins, tomatoes, red onions and lettuce",
            price: "16.95",
            allergens: ["CR", "M", "G"],
          },
          {
            name: "Sexy Italian",
            description:
              "Beef burger with salsa verde mayo, gorgonzola, tomatoes, caramelised onions and lettuce",
            price: "17.95",
            allergens: ["CR", "M", "G"],
          },
          {
            name: "Mediterranean Sea",
            description:
              "Beef burger with sweet chilli, king prawns, halloumi, tomatoes, caramelised onions and lettuce",
            price: "17.95",
            allergens: ["C", "CR", "F", "M", "G"],
          },
          {
            name: "American Dream",
            description:
              "Beef burger with smoked turkey rashers, applewood smoked cheddar, red onions, tomatoes, relish and lettuce",
            price: "17.95",
            allergens: ["C", "M", "G"],
          },
          {
            name: "Classic Chicken",
            description:
              "Chicken burger with mayo, relish and salad — chargrilled or panko",
            price: "15.95",
            allergens: ["C", "M", "G"],
          },
          {
            name: "Hey Pesto",
            description:
              "Crispy chicken, smoked cheddar, basil pesto, relish and salad — chargrilled or panko",
            price: "15.95",
            allergens: ["C", "M", "G"],
          },
        ],
      },
    ],
  },
  {
    id: "seafood",
    label: "Seafood",
    intro:
      "The North Sea is across the road — charcoal-grilled seabass, salmon and king prawns, plus a platter built for two.",
    variant: "coast",
    sections: [
      {
        title: "From the Charcoal",
        items: [
          { name: "Charcoal Grilled Seabass", price: "21.45" },
          {
            name: "Marinated Grilled Octopus",
            description: "Charred to perfection, served with salad and chunky chips",
            price: "21.95",
            allergens: ["C"],
          },
          {
            name: "Grilled King Prawns",
            description: "Platter of marinated chargrilled king prawns",
            price: "22.95",
            allergens: ["C"],
          },
          {
            name: "Grilled Sea Bass",
            description:
              "Served with rosemary garlic, sautéed potatoes and marinated green beans",
            price: "17.95",
            allergens: ["F", "M"],
          },
          {
            name: "Grilled Salmon",
            description:
              "Served with rosemary garlic, sautéed potatoes and marinated green beans",
            price: "18.95",
            allergens: ["F", "M"],
          },
        ],
      },
      {
        title: "From the Kitchen",
        items: [
          {
            name: "Stuffed Sea Bass",
            description:
              "Fresh sea bass stuffed with spinach and feta, served with rice",
            price: "18.95",
            allergens: ["CR", "F", "M"],
          },
          {
            name: "Salmon Special",
            description:
              "Grilled salmon and king prawns cooked in a creamy mushroom and mustard sauce, served with sautéed potatoes",
            price: "21.95",
            allergens: ["CR", "L", "F"],
          },
          {
            name: "King Prawn Casserole",
            description:
              "Pan-fried king prawns with mushrooms, onions and peppers in a creamy garlic sauce with mustard and herbs, topped with oven-baked mozzarella, served with rice",
            price: "21.95",
            allergens: ["F", "CR", "M", "MU"],
          },
          {
            name: "Sea Bowl",
            description:
              "Mussels, calamari, king prawns and langoustine in a homemade garlic sauce, served with bread",
            price: "19.95",
            allergens: ["F", "CR", "M", "G"],
          },
          {
            name: "Fish & Chips",
            description: "Battered cod fillet served with tartar sauce, peas and chips",
            price: "16.95",
            allergens: ["F", "CR", "G"],
          },
          {
            name: "Cartoos Fish Platter for Two",
            description:
              "A combination of grilled seabass, salmon, swordfish and king prawns, served with rice and salad",
            price: "42.95",
            signature: true,
          },
        ],
      },
    ],
  },
  {
    id: "mains",
    label: "Mains, Pasta & Salads",
    intro:
      "Slow-cooked casseroles, sizzling fajitas, fresh pasta and full-plate salads — the comfort end of the Mediterranean.",
    variant: "olive",
    sections: [
      {
        title: "House Mains",
        items: [
          {
            name: "Beef Stifado",
            description:
              "Slow-cooked diced beef with onions, tomatoes and herbs, served with rice",
            price: "16.95",
            allergens: ["C"],
          },
          {
            name: "Chicken Delight",
            description:
              "Pan-fried chicken with mushrooms, onions, mustard, garlic and cream, served with rice",
            price: "16.95",
            allergens: ["C", "M", "MU"],
          },
          {
            name: "Stuffed Chicken",
            description:
              "Chargrilled chicken fillet stuffed with Mediterranean vegetables and herbs, topped with homemade sauce, served with rice",
            price: "17.95",
            allergens: ["C"],
          },
          {
            name: "Fajita",
            description:
              "Marinated chicken or lamb cooked with onion, peppers, mushrooms and fresh garlic, served with salsa dip, guacamole and tortilla",
            price: "16.95",
            allergens: ["C", "G"],
          },
          {
            name: "Halloumi Fajita",
            description:
              "Fried halloumi with mushrooms, peppers and onions, served with salsa dip, guacamole and tortilla",
            price: "14.95",
            tags: ["V"],
            allergens: ["C", "M"],
          },
          {
            name: "Lamb Casserole",
            description:
              "Pan-fried lamb cooked with mixed peppers, onions, mushrooms and homemade garlic sauce, served with rice",
            price: "18.95",
            allergens: ["C"],
          },
        ],
      },
      {
        title: "Pasta",
        items: [
          {
            name: "Penne Arrabiata",
            description:
              "Penne coated in Napoli sauce with fresh chilli, peppers, olives and red onions, served with garlic bread",
            price: "12.95",
            tags: ["V"],
            allergens: ["C", "G"],
          },
          {
            name: "Pollo Funghi",
            description:
              "Linguine with grilled chicken and mushrooms in a creamy garlic sauce with mustard, served with garlic bread",
            price: "16.95",
            allergens: ["C", "M", "MU", "G"],
          },
          { name: "Gratin Pasta", price: "13.95", allergens: ["G"] },
          {
            name: "Lasagne al Forno",
            description:
              "Layers of pasta and Aberdeen Angus bolognese topped with Parmigiano-Reggiano béchamel, served with salad and garlic bread",
            price: "12.95",
            allergens: ["G", "M"],
          },
          {
            name: "Seafood Pasta",
            price: "19.95",
            allergens: ["CR", "F", "C", "M", "G"],
          },
        ],
      },
      {
        title: "Salads",
        items: [
          {
            name: "Chicken Salad",
            description:
              "Grilled chicken with mixed leaves, cucumber, cherry tomatoes and dressing",
            price: "13.95",
          },
          {
            name: "Halloumi Salad",
            description:
              "Grilled halloumi with mixed leaves, cucumber, cherry tomatoes and dressing",
            price: "12.95",
            tags: ["V"],
            allergens: ["M"],
          },
          {
            name: "Greek Salad",
            description:
              "Cucumber, onions, peppers, tomatoes, parsley, feta, olives and dressing",
            price: "12.95",
            tags: ["V"],
            allergens: ["M"],
          },
          {
            name: "Lamb Salad",
            description:
              "Grilled lamb with mixed leaves, cucumber, cherry tomatoes and dressing",
            price: "14.95",
          },
          {
            name: "Caesar Salad",
            description: "Smoked chicken, lettuce, turkey bacon and croutons",
            price: "13.95",
            allergens: ["G", "MU"],
          },
        ],
      },
    ],
  },
  {
    id: "kids",
    label: "Kids",
    intro:
      "Small plates for small guests — delivered to the table by Bella, our robot host, whenever she's on shift.",
    variant: "olive",
    sections: [
      {
        items: [
          {
            name: "Tomato Soup",
            description: "Fresh homemade tomato soup served with bread and salad",
            price: "2.25",
            tags: ["V"],
          },
          {
            name: "Mini Burgers",
            description:
              "Two mini burgers — beef, chicken or cheese — served with chips and beans, or salad",
            price: "6.20",
          },
          {
            name: "Fish Goujons",
            description: "Served with chips and beans, or salad and peas",
            price: "5.95",
          },
          {
            name: "Chicken Nuggets",
            description: "Served with chips and beans, or salad and peas",
            price: "5.95",
          },
          {
            name: "Sausage & Mash",
            description: "Cartoos' own chicken bangers served with creamy mash and gravy",
            price: "6.10",
          },
          {
            name: "Mac & Cheese",
            description: "Served with chips and beans, or salad and peas",
            price: "6.95",
            tags: ["V"],
          },
          {
            name: "Fruit Kebab",
            description: "Freshly cut strawberries and bananas served with chocolate dip",
            price: "2.95",
            tags: ["V"],
          },
        ],
      },
    ],
  },
  {
    id: "desserts",
    label: "I Love Ice Cream",
    intro:
      "Award-winning ice cream from St. Lucas of Edinburgh — over forty flavours, one of the best in Scotland — plus fresh waffles, crepes, sundaes and sizzling brownies.",
    variant: "dessert",
    sections: [
      {
        title: "Waffles, Crepes & Pancakes",
        note: "Choose your griddle — waffle, crepe or pancake",
        items: [
          {
            name: "Lotus Biscoff",
            description:
              "Biscoff sauce, topped with Biscoff crumbs, toffee fudge pieces and chocolate sauce, with a side of whipped cream",
            price: "8.50",
            signature: true,
            tags: ["V"],
          },
          {
            name: "Bananarama",
            description:
              "White chocolate sauce, topped with sliced strawberries, bananas and white chocolate swirls, with a side of whipped cream",
            price: "8.50",
            tags: ["V"],
          },
          {
            name: "Royale",
            description:
              "Nugatti hazelnut and chocolate sauce, topped with Ferrero Rocher and sliced strawberries, with a side of whipped cream",
            price: "8.50",
            tags: ["V"],
            allergens: ["N"],
          },
          {
            name: "Marshmallow Delight",
            description:
              "Nugatti hazelnut and chocolate sauce, topped with marshmallows and chocolate buttons, with a side of whipped cream",
            price: "8.50",
            allergens: ["N"],
          },
          {
            name: "Oreo Swirl",
            description:
              "Nugatti hazelnut and chocolate sauce, topped with Oreo crumbs and white chocolate swirls, with a side of whipped cream",
            price: "8.50",
            tags: ["V"],
            allergens: ["N"],
          },
          {
            name: "Banoffee Fudge Delight",
            description:
              "Toffee and chocolate sauce, topped with sliced bananas and fudge pieces, with a side of whipped cream",
            price: "8.50",
            tags: ["V"],
          },
          {
            name: "Kinder Surprise",
            description:
              "Nugatti hazelnut and chocolate sauce, topped with Kinder Bueno and white chocolate swirls, with a side of whipped cream",
            price: "8.50",
            tags: ["V"],
            allergens: ["N"],
          },
        ],
      },
      {
        title: "Warm Desserts",
        items: [
          {
            name: "Sizzling Brownie",
            description:
              "Sizzling brownie covered in chocolate sauce with a scoop of vanilla ice cream",
            price: "8.50",
            signature: true,
            tags: ["V"],
          },
          {
            name: "Sticky Toffee Pudding",
            description:
              "Drizzled with toffee sauce, with a scoop of vanilla ice cream",
            price: "8.50",
            tags: ["V"],
          },
        ],
      },
      {
        title: "Sundaes",
        items: [
          {
            name: "Oreo Crunch",
            description:
              "Oreo and vanilla ice cream, topped with Oreo crumbs and chocolate sauce, with whipped cream",
            price: "7.50",
            tags: ["V"],
          },
          {
            name: "Caramel Fudge Delight",
            description:
              "Salted caramel and vanilla ice cream, topped with toffee fudge pieces and salted caramel sauce, with whipped cream",
            price: "7.50",
            tags: ["V"],
          },
          {
            name: "Merry Berry Sundae",
            description:
              "Strawberry, vanilla and raspberry-ripple ice cream, topped with raspberries and raspberry sauce, with whipped cream",
            price: "7.50",
            tags: ["V"],
          },
          {
            name: "Knickerbocker Glory",
            description:
              "Chocolate and vanilla ice cream, topped with sliced bananas, strawberries and chocolate sauce, with whipped cream",
            price: "7.50",
            tags: ["V"],
          },
          {
            name: "Choco-Ferrero Swirl",
            description:
              "Chocolate and vanilla ice cream, topped with Ferrero Rocher and chocolate sauce, with whipped cream",
            price: "7.50",
            tags: ["V"],
            allergens: ["N"],
          },
          {
            name: "Bubblegum Surprise",
            description:
              "Bubblegum and vanilla ice cream, topped with rainbow sprinkles and bubblegum sauce, with whipped cream",
            price: "7.50",
            tags: ["V"],
          },
          {
            name: "Banana-Biscoff Bliss",
            description:
              "Biscoff and vanilla ice cream, topped with sliced bananas and Biscoff crumbs, with whipped cream",
            price: "7.50",
            tags: ["V"],
          },
        ],
      },
      {
        title: "Cookie Dough",
        items: [
          {
            name: "The Original",
            description:
              "Milk chocolate cookie dough covered in Nugatti hazelnut sauce with a scoop of vanilla ice cream",
            price: "7.50",
            tags: ["V"],
            allergens: ["N"],
          },
          {
            name: "Oreo Dream",
            description:
              "Milk chocolate cookie dough in Nugatti hazelnut sauce, topped with Oreo crumbs, with vanilla ice cream",
            price: "7.50",
            tags: ["V"],
            allergens: ["N"],
          },
          {
            name: "Strawberry Bliss",
            description:
              "Milk chocolate cookie dough in strawberry sauce, topped with sliced strawberries, with vanilla ice cream",
            price: "7.50",
            tags: ["V"],
          },
          {
            name: "Biscoff Swirl",
            description:
              "Milk chocolate cookie dough in Biscoff sauce, topped with Biscoff crumbs, with vanilla ice cream",
            price: "7.50",
            tags: ["V"],
          },
        ],
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    intro:
      "Milkshakes built on St. Lucas ice cream, fresh-pressed juices and smoothies, and proper coffee — all made to order.",
    variant: "coast",
    sections: [
      {
        title: "Milkshakes",
        items: [
          {
            name: "Choco-Hazelnut Bliss",
            description:
              "Rich chocolate with the creamy hazelnut taste of Ferrero Rocher and Kinder Bueno ice cream",
            price: "8.50",
            tags: ["V"],
            allergens: ["N"],
          },
          {
            name: "Berry Swirl",
            description: "A refreshing blend of strawberry and raspberry ice cream",
            price: "8.50",
            tags: ["V"],
          },
          {
            name: "Tropical Breeze",
            description: "A refreshing blend of banana and coconut ice cream",
            price: "8.50",
            tags: ["V"],
          },
          {
            name: "Biscoff Banana",
            description: "A refreshing blend of banana and Biscoff ice cream",
            price: "8.50",
            tags: ["V"],
          },
          {
            name: "Oreo Strawberry",
            description: "A refreshing blend of Oreo and strawberry ice cream",
            price: "8.50",
            tags: ["V"],
          },
          {
            name: "Build Your Own",
            description:
              "Choose any two or three ice cream flavours, toppings, sauce and fruit, with whipped cream and a Flake",
            price: "8.50",
            tags: ["V"],
          },
        ],
      },
      {
        title: "Smoothies",
        items: [
          { name: "Pash N Shoot", description: "Pineapple, mango and passion fruit", price: "8.50", tags: ["V", "VG"] },
          { name: "Berry Go Round", description: "Strawberry, raspberry and blueberry", price: "8.50", tags: ["V", "VG"] },
          { name: "Dee Bliss", description: "Mango, strawberry, apple and banana", price: "8.50", tags: ["V", "VG"] },
          { name: "Sunshine", description: "Peach, apple, pineapple and orange", price: "8.50", tags: ["V", "VG"] },
          { name: "Strawberry Split", description: "Strawberry and banana", price: "8.50", tags: ["V", "VG"] },
          { name: "Coco Loco", description: "Mango, coconut, lime, pineapple and mint", price: "8.50", tags: ["V", "VG"] },
          {
            name: "Avocado Nutty Boost",
            description:
              "Creamy milk, ripe avocado and a blend of almonds, walnuts and cashews (400ml, 650 kcal)",
            price: "7.95",
            tags: ["V"],
            allergens: ["N", "M"],
          },
        ],
      },
      {
        title: "Fresh Juices",
        items: [
          { name: "Pineapple", price: "6.50", tags: ["V", "VG"] },
          { name: "Orange", price: "6.50", tags: ["V", "VG"] },
          { name: "Apple", price: "6.50", tags: ["V", "VG"] },
          { name: "Pear", price: "6.50", tags: ["V", "VG"] },
          { name: "Watermelon", price: "6.50", tags: ["V", "VG"] },
          {
            name: "Make Your Own Juice",
            description: "Choose up to three fruits and vegetables — ask for today's options",
            price: "7.50",
            tags: ["V", "VG"],
          },
          { name: "Beetroot & Apple", price: "7.00", tags: ["V", "VG"] },
          { name: "Carrot & Pineapple", price: "7.00", tags: ["V", "VG"] },
          { name: "Carrot, Orange & Ginger", price: "7.00", tags: ["V", "VG"] },
        ],
      },
      {
        title: "Coffee & Tea",
        items: [
          { name: "Latte", price: "3.50", tags: ["V"] },
          { name: "Flat White", price: "3.50", tags: ["V"] },
          { name: "Cappuccino", price: "3.50", tags: ["V"] },
          { name: "Americano", price: "3.25", tags: ["V", "VG"] },
          { name: "Double Espresso", price: "3.50", tags: ["V", "VG"] },
          { name: "Mocha", price: "4.95", tags: ["V"] },
          { name: "Chai Latte", price: "3.75", tags: ["V"] },
          { name: "Breakfast Tea", price: "2.80", tags: ["V", "VG"] },
          { name: "Hot Chocolate", price: "5.50", tags: ["V"] },
        ],
      },
      {
        title: "Soft Drinks & Fruit",
        items: [
          {
            name: "Cans",
            description: "Coke, Diet Coke, Coke Zero, Irn-Bru, Fanta Lime, Fanta Orange",
            price: "2.99",
            tags: ["V", "VG"],
          },
          {
            name: "Fruit Bowl",
            description:
              "Freshly cut apples, bananas, strawberries, blueberries, carrots, cucumber and pineapple — choose any three",
            price: "4.50",
            tags: ["V", "VG"],
          },
        ],
      },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    intro: "For the middle of the table — or a mountain of peri chips all to yourself.",
    variant: "mezze",
    sections: [
      {
        items: [
          { name: "Chips", price: "3.95", tags: ["V", "VG"] },
          { name: "Peri Chips", price: "4.50", tags: ["V", "VG"] },
          { name: "Sweet Potato Fries", price: "5.95", tags: ["V", "VG"] },
          { name: "Wedges", price: "3.95", tags: ["V", "VG"] },
          { name: "Coleslaw", price: "3.50", tags: ["V"] },
          { name: "Onion Rings", price: "3.95", tags: ["V"] },
          { name: "Mixed Veg", price: "4.00", tags: ["V", "VG"] },
          { name: "Corn on the Cob", price: "3.95", tags: ["V", "VG"] },
          { name: "Mixed Salad", price: "4.00", tags: ["V", "VG"] },
          { name: "Avocado Salad", price: "6.95", tags: ["V", "VG"] },
          {
            name: "Garlic Sesame Naan, Rice or Couscous",
            price: "4.00",
            tags: ["V"],
          },
        ],
      },
    ],
  },
];
