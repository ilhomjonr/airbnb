"use client";
interface MenuItemProps {
  onclick: () => void;
  label: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ onclick, label }) => {
  return (
    <div
      onClick={onclick}
      className="px-4 py-3 h over:bg-neutral-100 transition font-semibold"
    >
      {label}
    </div>
  );
};

export default MenuItem;
