export type AdminCategory = {
  id: string;
  name: string;
  slug: string;
  is_active: boolean;
  display_order: number;
};

export type AdminSubCategory = {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  is_active: boolean;
  display_order: number;
};
