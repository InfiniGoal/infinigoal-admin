// import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabaseClient";

// type Category = {
//   id: string;
//   name: string;
//   parent_id: string | null;
// };

// type Props = {
//   mainValue: string;
//   subValue: string;
//   onMainChange: (value: string) => void;
//   onSubChange: (value: string) => void;
// };

// export default function AdminCategorySelector({
//   mainValue,
//   subValue,
//   onMainChange,
//   onSubChange,
// }: Props) {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       const { data } = await supabase
//         .from("categories")
//         .select("id, name, parent_id")
//         .eq("is_active", true)
//         .order("name");

//       setCategories(data ?? []);
//       setLoading(false);
//     })();
//   }, []);

//   const mainCategories = categories.filter((c) => !c.parent_id);
//   const selectedMain = mainCategories.find((c) => c.name === mainValue);

//   const subCategories = selectedMain
//     ? categories.filter((c) => c.parent_id === selectedMain.id)
//     : [];

//   return (
//     <>
//       <div style={wrapper}>
//         <label style={label}>Main Category</label>
//         <select
//           value={mainValue || ""}
//           onChange={(e) => {
//             onMainChange(e.target.value);
//             onSubChange("");
//           }}
//           style={select}
//         >
//           <option value="">
//             {loading ? "Loading..." : "Select Main Category"}
//           </option>
//           {mainCategories.map((c) => (
//             <option key={c.id} value={c.name}>
//               {c.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div style={wrapper}>
//         <label style={label}>Sub Category</label>
//         <select
//           value={subValue || ""}
//           onChange={(e) => onSubChange(e.target.value)}
//           style={select}
//           disabled={!selectedMain}
//         >
//           <option value="">
//             {!selectedMain
//               ? "Select Main Category first"
//               : "Select Sub Category"}
//           </option>

//           {subCategories.map((c) => (
//             <option key={c.id} value={c.name}>
//               {c.name}
//             </option>
//           ))}
//         </select>
//       </div>
//     </>
//   );
// }

// /* STYLES */

// const wrapper: React.CSSProperties = {
//   marginBottom: 18,
// };

// const label: React.CSSProperties = {
//   display: "block",
//   marginBottom: 6,
//   fontSize: 13,
//   fontWeight: 600,
//   color: "#6C7A89",
// };

// const select: React.CSSProperties = {
//   width: "100%",
//   padding: "12px",
//   borderRadius: 12,
//   border: "1px solid #E3E3E3",
//   background: "#FAFAFA",
//   fontSize: 14,
// };




///////


import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type MainCategory = {
  id: string;
  name: string;
  is_active: boolean;
};

type SubCategory = {
  id: string;
  name: string;
  category_id: string;
  is_active: boolean;
};

type Props = {
  mainValue: string;
  subValue: string;
  onMainChange: (v: string) => void;
  onSubChange: (v: string) => void;
};

export default function AdminCategorySelector({
  mainValue,
  subValue,
  onMainChange,
  onSubChange,
}: Props) {
  const [mainCategories, setMainCategories] = useState<MainCategory[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [loading, setLoading] = useState(true);

  // Load main categories
  useEffect(() => {
    (async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("admin_categories")
        .select("id, name, is_active")
        .eq("is_active", true)
        .order("display_order", { ascending: true })
        .order("name", { ascending: true });

      if (!error) setMainCategories(data ?? []);

      setLoading(false);
    })();
  }, []);

  // Load sub categories when main changes
  useEffect(() => {
    if (!mainValue) {
      setSubCategories([]);
      return;
    }

    const selectedMain = mainCategories.find(
      (c) => c.name === mainValue
    );

    if (!selectedMain) {
      setSubCategories([]);
      return;
    }

    (async () => {
      const { data, error } = await supabase
        .from("admin_subcategories")
        .select("id, name, category_id, is_active")
        .eq("category_id", selectedMain.id)
        .eq("is_active", true)
        .order("display_order", { ascending: true })
        .order("name", { ascending: true });

      if (!error) setSubCategories(data ?? []);
    })();
  }, [mainValue, mainCategories]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {/* MAIN CATEGORY */}
      <div>
        <label style={label}>Main Category</label>
        <select
          value={mainValue || ""}
          onChange={(e) => {
            onMainChange(e.target.value);
            onSubChange("");
          }}
          style={select}
        >
          <option value="">
            {loading ? "Loading..." : "Select Main Category"}
          </option>

          {mainCategories.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* SUB CATEGORY */}
      <div>
        <label style={label}>Sub Category</label>
        <select
          value={subValue || ""}
          onChange={(e) => onSubChange(e.target.value)}
          style={select}
          disabled={!mainValue}
        >
          <option value="">
            {!mainValue
              ? "Select Main Category First"
              : "Select Sub Category"}
          </option>

          {subCategories.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

/* ===== STYLES ===== */

const label: React.CSSProperties = {
  display: "block",
  marginBottom: 6,
  fontSize: 12,
  fontWeight: 600,
  color: "#6B7280",
};

const select: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  borderRadius: 12,
  border: "1px solid #E3E3E3",
  background: "#FAFAFA",
  fontSize: 14,
};
