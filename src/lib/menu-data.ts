import type { PlateVariant } from "@/components/plate";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  signature?: boolean;
};

export type MenuCategory = {
  id: string;
  label: string;
  intro: string;
  variant: PlateVariant;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "begin",
    label: "To Begin",
    intro: "Small plates from the coals and the cold kitchen, meant for the middle of the table.",
    variant: "mezze",
    items: [
      {
        name: "Charred Padrón & Smoked Salt",
        description: "Blistered over embers, finished with lemon oil",
        price: "7",
      },
      {
        name: "Whipped Feta, Burnt Honey",
        description: "Warm stone-oven flatbread, oregano, cracked pepper",
        price: "9",
        signature: true,
      },
      {
        name: "Ember Aubergine",
        description: "Buried in warm ash, tahini, pomegranate, dukkah",
        price: "9.5",
      },
      {
        name: "Hand-Dived Scallops",
        description: "Grilled in the shell, seaweed butter, charred lemon",
        price: "14",
      },
      {
        name: "Beef Tartare, Fire Toast",
        description: "Hand-cut Aberdeenshire fillet, smoked yolk, capers",
        price: "13",
      },
    ],
  },
  {
    id: "grill",
    label: "From the Charcoal",
    intro: "Everything on this page touches live fire — nothing else.",
    variant: "coals",
    items: [
      {
        name: "Half Chicken, Harissa & Lemon",
        description: "Brined overnight, grilled under a brick, garlic yoghurt",
        price: "18",
      },
      {
        name: "Lamb Chops, Wild Thyme",
        description: "Scottish lamb, charred shallot, smoked sea salt",
        price: "26",
        signature: true,
      },
      {
        name: "Iberico Presa",
        description: "Acorn-fed pork, quince, olive jus",
        price: "24",
      },
      {
        name: "Skewer of the Day",
        description: "Ask your server — whatever the coals loved this morning",
        price: "16",
      },
    ],
  },
  {
    id: "steaks",
    label: "Hand-Cut Steaks",
    intro: "Aberdeenshire beef, dry-aged 28 days in-house, cut by hand and rested over dying embers. Served with bone-marrow butter.",
    variant: "steak",
    items: [
      {
        name: "Fillet, 8oz",
        description: "The quiet one — dense, clean, butter-soft",
        price: "34",
      },
      {
        name: "Ribeye, 12oz",
        description: "Our kitchen's favourite; fire loves the fat",
        price: "36",
        signature: true,
      },
      {
        name: "Sirloin, 10oz",
        description: "Classic cut, deep char, smoked salt",
        price: "31",
      },
      {
        name: "Côte de Boeuf, 32oz",
        description: "For two, carved at the table, charred shallots",
        price: "78",
        signature: true,
      },
      {
        name: "Chateaubriand, 20oz",
        description: "For two, ember vegetables, two sauces",
        price: "72",
      },
    ],
  },
  {
    id: "sea",
    label: "From the Sea",
    intro: "Day-boat catch from the North Sea, five miles east of the dining room.",
    variant: "coast",
    items: [
      {
        name: "Whole Sea Bream",
        description: "On the bone, charred lemon, wild oregano oil",
        price: "24",
        signature: true,
      },
      {
        name: "Monkfish Tail",
        description: "Wrapped in vine leaves, saffron butter",
        price: "27",
      },
      {
        name: "Grilled Octopus",
        description: "Slow-cooked then fired, smoked paprika, olive crumb",
        price: "19",
      },
      {
        name: "Catch of the Day",
        description: "Whatever the boats brought in — priced by the market",
        price: "M/P",
      },
    ],
  },
  {
    id: "oven",
    label: "Stone Oven",
    intro: "Granite-baked breads and slow dishes from the oven beside the grill.",
    variant: "stone",
    items: [
      {
        name: "Za'atar Flatbread",
        description: "Slow-fermented dough, first-press olive oil",
        price: "5.5",
      },
      {
        name: "Wood Roast Cauliflower",
        description: "Whole, smoked yoghurt, hazelnut, brown butter",
        price: "14",
      },
      {
        name: "Giant Beans, Tomato & Dill",
        description: "Baked in clay, feta, warm bread",
        price: "11",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts & Gelato",
    intro: "Forty artisan flavours churned daily in the dessert atelier — ask for today's board — alongside warm desserts from the stone oven.",
    variant: "dessert",
    items: [
      {
        name: "Artisan Gelato, Three Scoops",
        description: "From today's forty — pistachio to smoked honey",
        price: "8",
        signature: true,
      },
      {
        name: "Burnt Basque Cheesecake",
        description: "From the stone oven, heather honey",
        price: "9",
      },
      {
        name: "Chocolate & Olive Oil",
        description: "Warm dark chocolate pot, smoked salt, sourdough crisp",
        price: "9.5",
      },
      {
        name: "Charred Peach Melba",
        description: "Grilled stone fruit, vanilla gelato, raspberry",
        price: "9",
        signature: true,
      },
      {
        name: "The Family Board",
        description: "Six flavours, warm doughnuts, sauces — arrives by robot",
        price: "22",
      },
    ],
  },
];
